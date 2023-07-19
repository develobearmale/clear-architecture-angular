FROM node:16-alpine AS build
WORKDIR /app

COPY . .
RUN npm install
RUN npm run build
# Serve Application using Nginx Server
FROM nginx:alpine
COPY --from=build /app/dist/clear-architecture-angular/ /usr/share/nginx/html
EXPOSE 80

#COMMAND TO RUN DOCKER docker build --r -f Dockerfile -t gesco-app:late
#COPY ./nginx/nginx.conf /etc/nginx/nginx.conf
#COPY --from=build /app/dist/gesco-app/ /usr/share/nginx/html
#docker build -t eu.gcr.io/gcp-develobear-project/clear-architecture-angular:1.0 .