FROM node:14.15.5

WORKDIR /usr/src/app

COPY . .

RUN yarn 

EXPOSE 4200

CMD [ "yarn", "start" ]