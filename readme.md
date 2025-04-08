docker run --rm -it \
  -v "$(pwd)":/github/workspace \
  -v /var/run/docker.sock:/var/run/docker.sock \
  catthehacker/ubuntu:act-latest -j build
