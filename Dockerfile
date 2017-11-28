FROM node:latest

# SET UP LABELS
#-------------------------------------------------------------------------------

# Create labels
LABEL description="Docker image for my personal_site"
LABEL maintainer "Jabari Dash"

# SETUP ENVIRONMENT VARIABLES
#-------------------------------------------------------------------------------



# COPY FILES INTO DOCKER IMAGE
#-------------------------------------------------------------------------------

# Create the working directory
RUN mkdir -p /usr/personal_site/src
WORKDIR /usr/personal_site/src

# Copy all the source to the container
COPY src/ ./

# INSTALL DEPENDENCIES
#-------------------------------------------------------------------------------

# Install dependencies via npm
RUN npm install

# install bower via npm
RUN npm install --global bower

# Install dependencies via bower
RUN bower install --allow-root

# START THE APP
#-------------------------------------------------------------------------------

# Switch to the server folder
WORKDIR server

# Start the node server
CMD [ "node", "server.js" , "8080"]

# Port we want to expose
EXPOSE 8080
