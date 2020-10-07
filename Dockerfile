FROM node:lts-alpine3.9

WORKDIR /node-starter


COPY yarn.lock ./

COPY package.json ./

RUN yarn install --production

COPY . .

EXPOSE 3000

CMD ["yarn","start"]
