echo "Pushing to Dockerhub..."

branch=$TRAVIS_BRANCH

if [ "$branch" == "master" ]; then
  echo "Pushing to $branch branch"

elif [ "$branch" == "dev" ]; then
  echo "Pushing to $branch branch"

else
  echo "branch '$branch' is not supported"

fi
