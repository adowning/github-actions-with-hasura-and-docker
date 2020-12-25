FROM docker.elastic.co/logstash/logstash:6.3.0

USER root

RUN /usr/share/logstash/bin/logstash-plugin install logstash-input-jdbc
RUN yum install -y wget postgresql-jdbc
RUN wget https://jdbc.postgresql.org/download/postgresql-42.2.16.jar && \
    mv postgresql-42.2.16.jar /usr/share/logstash/logstash-core/lib/jars
