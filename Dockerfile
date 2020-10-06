FROM node:latest

WORKDIR /node-starter


COPY yarn.lock ./

COPY package.json ./

RUN yarn install

COPY . .

EXPOSE 3000

CMD ["npm","start"]
