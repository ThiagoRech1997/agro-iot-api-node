FROM node:12.18.1-stretch-slim

WORKDIR /usr/app

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 3001

CMD ["node","server.js"]
