echo "Pushing to Dockerhub..."

docker images

# Get the branch that
# the travis script
# is currently being run from
branch=$TRAVIS_BRANCH

# If we are in the master branch
if [ "$branch" == "master" ]; then
  echo "Pushing to $branch branch"
  docker push jabaridash/personal_website:latest

  # If the previous command was
  # not successful, then the whole
  # script failed
  if [ $? -ne 0 ]; then
    exit 1
  fi

# If we are in the dev branch
elif [ "$branch" == "dev" ]; then
  echo "Pushing to $branch branch"
  docker push jabaridash/personal_website-dev:latest

  # If the previous command was
  # not successful, then the whole
  # script failed
  if [ $? -ne 0 ]; then
    exit 1
  fi

# If the branch is not dev or master
else
  echo "branch '$branch' is not supported"
  exit 1

fi
