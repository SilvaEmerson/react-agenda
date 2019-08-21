FROM node:8-alpine

COPY . /app

WORKDIR /app

RUN cd agenda-front && npm i && npm run build\
    && cd ../server && npm i 

CMD node server/main.js
