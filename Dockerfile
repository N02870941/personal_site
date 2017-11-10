FROM node:latest

# Create labels
LABEL version="0.0.0"
LABEL description="Docker image for my personal_website"
LABEL maintainer "Jabari Dash"

# Create the working directory
RUN mkdir -p /usr/personal_website/src
WORKDIR /usr/personal_website/src

# Copy all the source to the container
COPY src/ ./

# Install app dependencies
RUN npm install
RUN bower install

# Switch to the server folder
WORKDIR server

CMD [ "node", "server.js" ]

# Port we want to expose
EXPOSE 8080
