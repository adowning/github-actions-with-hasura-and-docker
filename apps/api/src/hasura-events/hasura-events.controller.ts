import { HasuraEventHandler, HasuraEvent } from '@golevelup/nestjs-hasura';
import { Injectable } from '@nestjs/common';

@Injectable()
class HasuraEventsService {
    @HasuraEventHandler({
        triggerName: 'account_created',
    })
    handleUserCreated(evt: HasuraEvent) {
        // handle the event payload. Typing the method parameter with `HasurEvent` will provide intellisense
        console.log(evt)
    }
}