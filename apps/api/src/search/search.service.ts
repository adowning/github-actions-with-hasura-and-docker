import { Injectable } from '@nestjs/common';
import { ElasticsearchService } from '@nestjs/elasticsearch';
import { AccountService } from '../account/account.service';
// import * as moviesJson from '../../../movies.json';
import { ConfigService } from '../config/config.service';

interface MoviesJsonResponse {
    title: string;
    year: number;
    cast: string[];
    genres: string[];
}

@Injectable()
export class SearchService {
    constructor(private readonly accountService: AccountService, private readonly esService: ElasticsearchService, private readonly configService: ConfigService) { }

    async createIndex() {
        const checkIndex = await this.esService.indices.exists({ index: this.configService.get('ELASTICSEARCH_INDEX') });
        if (checkIndex.statusCode === 404) {

            this.esService.indices.create(
                {
                    index: this.configService.get('ELASTICSEARCH_INDEX'),
                    body: {
                        settings: {
                            analysis: {
                                analyzer: {
                                    autocomplete_analyzer: {
                                        tokenizer: 'autocomplete',
                                        filter: ['lowercase'],
                                    },
                                    autocomplete_search_analyzer: {
                                        tokenizer: 'keyword',
                                        filter: ['lowercase'],
                                    },
                                },
                                tokenizer: {
                                    autocomplete: {
                                        type: 'edge_ngram',
                                        min_gram: 1,
                                        max_gram: 30,
                                        token_chars: ['letter', 'digit', 'whitespace'],
                                    },
                                },
                            },
                        },
                        mappings: {
                            properties: {
                                account_name: {
                                    type: 'text',
                                    fields: {
                                        complete: {
                                            type: 'text',
                                            analyzer: 'autocomplete_analyzer',
                                            search_analyzer: 'autocomplete_search_analyzer',
                                        },
                                    },
                                },
                                search_address: { type: 'text' },
                                phone_list: { type: 'text' },
                                email: { type: 'text' },
                            },
                        },
                    },
                },
                (err) => {
                    if (err) {
                        console.error(err);
                    }
                },
            );
            const body = await this.parseAndPrepareData();
            this.esService.bulk(
                {
                    index: this.configService.get('ELASTICSEARCH_INDEX'),
                    body,
                },
                (err) => {
                    if (err) {
                        console.error(err);
                    }
                },
            );
        }
    }

    async search(search: string) {
        const results = [];
        const { body } = await this.esService.search({
            index: this.configService.get('ELASTICSEARCH_INDEX'),
            body: {
                size: 12,
                query: {
                    match: {
                        'account_name.complete': {
                            query: search,
                        },
                    },
                },
            },
        });
        const hits = body.hits.hits;
        hits.map(item => {
            results.push(item._source);
        });

        return { results, total: body.hits.total.value };
    }

    async parseAndPrepareData() {
        const body = [];
        // const listMovies: MoviesJsonResponse[] = moviesJson;
        const listAccounts = await this.accountService.getAccounts()
        listAccounts.map((item, index) => {
            // const actorsData = [];
            // item.cast.map(actor => {
            //     const splited = actor.split(' ');
            //     actorsData.push({ firstName: splited[0], lastName: splited[1] });
            // });

            body.push(
                { index: { _index: this.configService.get('ELASTICSEARCH_INDEX'), _id: index } },
                {
                    account_name: item.account_name,
                    search_address: item.search_address,
                    phone_list: item.phone_list,
                    email: item.email,
                },
            );
        });
        return body;
    }
}