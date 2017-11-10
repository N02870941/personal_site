echo "Pushing to Dockerhub..."

if [ [$TRAVIS_BRANCH == "master"] ]; then
  echo "Pushing to $TRAVIS_BRANCH branch"

elif [ [$TRAVIS_BRANCH == "dev"] ]; then
  echo "Pushing to $TRAVIS_BRANCH branch"

else
  echo "branch '$TRAVIS_BRANCH' is not supported"

fi
