FROM node:8.10-alpine

RUN mkdir /seedata

WORKDIR /seedata

COPY . /seedata

RUN npm install mongoose

CMD ["node", "/seedata/seedDB.js"]






