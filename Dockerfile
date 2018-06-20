FROM ubuntu:16.04

ENV source https://www.google.com/
ENV destination google

RUN apt-get update \
 && apt-get upgrade -y \
 && apt-get install curl wget -y

RUN curl -sL https://deb.nodesource.com/setup_8.x | bash -

RUN apt-get install -y nodejs

RUN wget -q -O - https://dl-ssl.google.com/linux/linux_signing_key.pub | apt-key add - \
 && echo 'deb [arch=amd64] http://dl.google.com/linux/chrome/deb/ stable main' | tee /etc/apt/sources.list.d/google-chrome.list \
 && apt-get update \
 && apt-get install google-chrome-stable -y

RUN mkdir /pdfconverter && mkdir /prints

RUN cd /pdfconverter \
  && npm i puppeteer

COPY pdfconverter.js /pdfconverter/pdfconverter.js

WORKDIR /pdfconverter

CMD ["/usr/bin/node", "pdfconverter.js"]