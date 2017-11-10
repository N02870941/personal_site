echo "Pushing to Dockerhub..."

if [ [$TRAVIS_BRANCH == "master"] ]; then
  echo "master"
else
  echo "not master"
fi
