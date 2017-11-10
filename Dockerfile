FROM node:latest

WORKDIR ~/personal_website

# Install app dependencies
COPY src/package.json .

COPY src/package.json src/package-lock.json ./

WORKDIR ~/personal_website/src

RUN npm install

# Bundle app source
COPY . .

# Port we want to expose
EXPOSE 8080

# Switch to the server folder
WORKDIR src/server

CMD [ "node", "server.js" ]
