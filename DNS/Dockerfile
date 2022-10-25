FROM alpine:3.15.0

ARG LOOPIA_API_USERNAME
ARG LOOPIA_API_PASSWORD

RUN apk add python3

COPY dyndns_loopia.py /usr/bin/

RUN dyndns_loopia.py

