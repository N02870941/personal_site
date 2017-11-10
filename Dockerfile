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

# Install dependencies via npm
RUN npm install

# install bower via npm
RUN npm install --global bower

# Install dependencies via bower
RUN bower install --allow-root

# Switch to the server folder
WORKDIR server

# Start te node server
CMD [ "node", "server.js" ]

# Port we want to expose
EXPOSE 8080
