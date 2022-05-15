FROM python:3.9
LABEL maintainer="Vichea"

ENV PYTHONUNBUFFERED 1
ENV PATH="/scripts:${PATH}"

RUN pip install --upgrade pip



COPY ./requirements.txt /requirements.txt
RUN pip install -r /requirements.txt


RUN mkdir /app

COPY . /app
WORKDIR /app
EXPOSE 8000

COPY ./scripts/ /scripts/
RUN chmod +x /scripts/*

RUN mkdir -p /vol/web/media
RUN mkdir -p /vol/web/static

VOLUME /vol/web

CMD ["run.sh"]
