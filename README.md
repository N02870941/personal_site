# Personal Site

Here you will find all of the code that powers my [jabaridash.com](jabaridash.com). If you want to see how I implemented it, you want to use some of the code as a template for your own site, or if you are just interested in downloading the code and playing around it with, keep reading.

## Requirements
Below are all of the required softwares for running the website locally or on a remote server.

### JavaScript Dependencies (Required)
These are the base dependencies for JavaScript. The rest will be installed locally through npm.

- [nodejs](https://nodejs.org/en/download/package-manager/)
- [npm (Node Package Manager)](https://www.npmjs.com/get-npm)

### Operating System (Recommended)
This software is written on and for Unix based systems. It will work on Windows, but the photos will not scale properly because the backend server scripts are written in bash.

- Unix based Operating System (Linux or Mac)

### Container Software (Optional)
To run this app in Docker, or on a server, the only requirement is that your server has Docker installed.

- [Docker](https://docs.docker.com/engine/installation/)

## Installation
    git clone https://github.com/N02870941/personal_site.git

    cd personal_website

    npm install -g gulp

    npm install

## Running the Application
All of the following instructions assume that you are in the `personal_site` directory

### Running with Gulp
This has browser-sync (auto reload) enabled, and will run the app on port 3000. I recommend running the app with `gulp` when developing to see changes happen in real-time, rather than manually restarting the node server, and reloading the page for each edit that you make.

    gulp start

### Running with Node  
If you do not want browser-sync, you can simply run the app on port 8080 via `node`.

    node server.js

### Running with Docker Compose
If you want to run the server on port 8080 using `docker-compose`, you may execute the following:

    docker-compose up

### Running with Docker  
If you want to run the server on port 8080 via `docker`, you may execute the following:

1. Build the image and tag it as the latest

        docker build -t jabari_dash/personal_website:latest .

2. Get the list of Docker images

        docker images

3. Copy and paste the latest image's id
Run the latest image on port localhost:8080

        docker run --rm -p 8080:8080 <image id>

**Note:** This application was not developed on, nor intended to run on Windows machines. Currently, the server-side script that resizes images is only compatible on Unix-based machines.
