echo "Pushing to Dockerhub..."

branch=$TRAVIS_BRANCH

if [ "$branch" == "master" ]; then
  echo "Pushing to $branch branch"
  docker push jabaridash/personal_website:latest

elif [ "$branch" == "dev" ]; then
  echo "Pushing to $branch branch"
  docker push jabaridash/personal_website-dev:latest

else
  echo "branch '$branch' is not supported"

fi
