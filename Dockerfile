FROM node:18.12.1-alpine3.17

WORKDIR /usr/app

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 3001

CMD ["node","./server.js"]
