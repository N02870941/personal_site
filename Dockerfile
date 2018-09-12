FROM node:8.7

RUN mkdir -p /usr/personal_site/src
WORKDIR /usr/personal_site/src

COPY src/ ./

RUN npm install

RUN npm install --global bower

RUN bower install --allow-root

WORKDIR server

CMD [ "node", "server.js" , "80"]

EXPOSE 80
