FROM node:latest

WORKDIR ~/personal_website

# Install app dependencies
COPY package.json .

COPY package.json package-lock.json ./

RUN npm install

# Bundle app source
COPY . .

# Port we want to expose
EXPOSE 8080

CMD [ "npm", "start" ]
