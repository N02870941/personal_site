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
}

#-------------------------------------------------------------------------------

# Deploys to production environment
deploy_prod() {

  echo "Deploying to prod"
}

#-------------------------------------------------------------------------------

deploy() {
  if [ "$TRAVIS_BRANCH" == "master" ]; then
    deploy_prod
    exit 0

  elif [ "$TRAVIS_BRANCH" == "dev" ]; then
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