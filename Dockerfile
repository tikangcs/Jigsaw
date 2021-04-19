FROM node:14

WORKDIR /src/app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 4000
EXPOSE 3306
EXPOSE 80

CMD ["node", "./server/index.js"]
