FROM node:14-alpine

# Установка Yarn внутри контейнера
RUN apk update && apk add yarn

RUN mkdir -p /var/www/dockerize-nuxt/nuxt-app
WORKDIR /var/www/dockerize-nuxt/nuxt-app

COPY package*.json ./

RUN yarn install

COPY . .

RUN yarn build

EXPOSE 3000

ENV NUXT_HOST=0.0.0.0
ENV NUXT_PORT=3000

CMD [ "yarn", "start" ]
