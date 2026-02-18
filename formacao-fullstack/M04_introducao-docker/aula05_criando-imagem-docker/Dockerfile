FROM node:24-alpine

COPY package*.json /app/

COPY src /app/

WORKDIR /app

RUN npm install

EXPOSE 3000

CMD ["node", "src/server.js"]