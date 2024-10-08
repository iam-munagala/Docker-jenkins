	
FROM node:19.7-alpine3.16

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 7000


CMD ["node", "index.js"]