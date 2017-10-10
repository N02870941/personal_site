# Personal Site

Here you will find all of the code that powers my personal website. If you are interested in downloading the code and playing around it with, keep reading.

## Requirements
- nodejs
- npm (Node Package Manager)
- Unix based Operating System (Linux or Mac)
- Docker Community Edition (Optional)

## Installation
    git clone https://github.com/N02870941/personal_site.git
    
    cd personal_website
 
    npm install -g gulp
    
    npm install
    
## Running the Application

### Running with Gulp
This has browser-sync (auto reload) enabled, and will run the app on port 3000. I recommend running the app with gulp when developing to see changes happen in real-time, rather than manually restarting the node server, and reloading the page.

    gulp start

### Running with Node  
If you do not want browser-sync, you can simply run the app via nodeJs. This will run the app on port 8080.

    node server.js

### Running with Docker  
If you want to run the server as a Docker container, you may excecute the following:

1. Build the image and tag it as the latest

        docker build -t jabari_dash/personal_website:latest .
    
2. Get the list of Docker images

        docker images
    
3. Copy and paste the latest image's id
Run the latest image on port localhost:8080

        docker run -p 8080:8080 <image id>
    

**Note:** This application was not developed on intended to run on Windows machines. Currently, the server-side script that resizes images is only compatible on Unix-based machines.