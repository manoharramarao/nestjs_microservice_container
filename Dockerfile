FROM node:15.7-buster

RUN mkdir -p /nest
ADD . /nest
WORKDIR /nest

COPY package*.json /nest/
RUN npm i -g @nestjs/cli
RUN npm i --save-dev nodemon
RUN npm install
RUN npm run build
