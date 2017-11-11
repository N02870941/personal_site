#!/bin/bash

# Checks the exit status of
# the last command that ran
check_exit_status() {
  # If the previous command was
  # not successful, then the whole
  # script failed
  if [ $? -ne 0 ]; then
    exit 1
  fi
}

#-------------------------------------------------------------------------------

# Logs into docker
docker_login() {
  docker login -u "$DOCKER_USERNAME" -p "$DOCKER_PASSWORD"

  # Make sure that docker
  # logged in properly
  check_exit_status
}

#-------------------------------------------------------------------------------

# Push an image to docker.io
docker_push() {

  # Log into docker
  docker_login

  echo "Pushing to $branch branch"
  docker push $1

  # Make sure that it was successful
  check_exit_status
}

#-------------------------------------------------------------------------------

# Determine what to do depending on the branch that we are on
check_branch() {

  echo "Checking which branch we are on..."

  # Get the branch that
  # the travis script
  # is currently being run from
  branch=$TRAVIS_BRANCH

  # If we are in the master branch
  if [ "$branch" == "master" ]; then

    # Rename image so it goes to proper docker.io repo
    docker tag jabaridash/personal_site:latest jabaridash/personal_website:latest

    docker_push jabaridash/personal_website:latest

    check_exit_status

    exit 0

  # If we are in the dev branch
  elif [ "$branch" == "dev" ]; then

    # Rename image so it goes to proper docker.io repo
    docker tag jabaridash/personal_site:latest jabaridash/personal_site:dev-latest

    # Call docker_push()
    docker_push jabaridash/personal_site:dev-latest

    check_exit_status

    exit 0

  # If the branch is not dev or master
  else
    echo "branch '$branch' is not supported"
    exit 1

  fi
}

check_branch
