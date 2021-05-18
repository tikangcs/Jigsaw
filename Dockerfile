FROM node:alpine

WORKDIR /usr/app

COPY package*.json ./

RUN npm install
RUN npm install pm2 -g

COPY . .

EXPOSE 4000
EXPOSE 4001
EXPOSE 4002

CMD ["pm2-dev", "./server/index.js"]
