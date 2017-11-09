FROM node:latest

WORKDIR ~/personal_website

# Install app dependencies
COPY src/package.json .

COPY src/package.json src/package-lock.json ./

RUN npm install

# Bundle app source
COPY . .

# Port we want to expose
# TODO - SSL on port 443?
EXPOSE 8080

WORKDIR ~/personal_website/src

CMD [ "npm", "start" ]
