FROM node:15.7-buster

RUN mkdir -p /nest
ADD . /nest
WORKDIR /nest

RUN npm i -g @nestjs/cli
RUN npm i --save-dev nodemon
