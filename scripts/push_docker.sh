
check_exit_status() {
  # If the previous command was
  # not successful, then the whole
  # script failed
  if [ $? -ne 0 ]; then
    exit 1
  fi
}

#-------------------------------------------------------------------------------


docker_login() {
  docker login -u "$DOCKER_USERNAME" -p "$DOCKER_PASSWORD"

  check_exit_status
}

#-------------------------------------------------------------------------------

docker_push() {

  # Log into docker
  docker_login

  echo "Pushing to $branch branch"
  docker push $1

  check_exit_status
}

#-------------------------------------------------------------------------------

check_branch() {

  echo "Checking which branch we are on..."

  # Get the branch that
  # the travis script
  # is currently being run from
  branch=$TRAVIS_BRANCH

  # If we are in the master branch
  if [ "$branch" == "master" ]; then

    docker_push jabaridash/personal_site:latest

    check_exit_status

    exit 0

  # If we are in the dev branch
  elif [ "$branch" == "dev" ]; then

    # Rename branch so it foes to proper docker.io repo
    docker tag jabaridash/personal_site:latest jabaridash/personal_site-dev:travis

    # Call docker_push()
    docker_push jabaridash/personal_site-dev:travis

    check_exit_status

    exit 0

  # If the branch is not dev or master
  else
    echo "branch '$branch' is not supported"
    exit 1

  fi
}

check_branch
