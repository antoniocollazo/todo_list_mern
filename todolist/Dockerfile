FROM node:lts-alpine3.20 AS build-stage

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

ARG VITE_API_URL

RUN VITE_API_URL=${VITE_API_URL} npm run build
# RUN npm run build

FROM nginx:stable-alpine3.19-slim AS production-stage

COPY --from=build-stage /app/dist /usr/share/nginx/html

EXPOSE 80
