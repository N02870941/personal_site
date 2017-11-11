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

# Deploys to development environment
deploy_dev() {

  echo "Deploying to dev"

  curl -H "Content-Type: application/json" -X POST -d '{"tag":"dev-latest"}' http://jabaridash.com:8082
}

#-------------------------------------------------------------------------------

# Deploys to production environment
deploy_prod() {

  echo "Deploying to prod"

  curl -H "Content-Type: application/json" -X POST -d '{"tag":"latest"}' http://jabaridash.com:8082
}

#-------------------------------------------------------------------------------

deploy() {

  branch=$TRAVIS_BRANCH

  # Don't deploy, it will get deployed when the
  # pull request is complete
  if [ "$TRAVIS_PULL_REQUEST" == "true" ]; then
    exit 0

  elif [ "$branch" == "master" ]; then
    deploy_prod
    exit 0

  elif [ "$branch" == "dev" ]; then
    deploy_dev
    exit 0

  # If the branch is not dev or master
  else
    echo "branch '$branch' is not supported"
    exit 1

  fi
}

#-------------------------------------------------------------------------------

deploy
