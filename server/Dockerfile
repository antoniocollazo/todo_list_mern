FROM node:lts-alpine3.20

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

ARG API_PORT

EXPOSE ${API_PORT}

CMD ["npm", "start"]