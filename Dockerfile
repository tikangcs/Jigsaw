FROM node:14

WORKDIR /usr/app

COPY package*.json ./

RUN npm install
RUN npm install pm2 -g

COPY . .

EXPOSE 4000
EXPOSE 3306
EXPOSE 80

CMD ["pm2-dev", "./server/index.js"]
