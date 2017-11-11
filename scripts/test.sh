#!/bin/bash

# Ping losthost
nc -z localhost 8080

# If the exit status
# was 0, then test passed
if [ $? -eq 0 ]; then
  exit 0

# Otherwise test failed
else
  exit 1
fi
