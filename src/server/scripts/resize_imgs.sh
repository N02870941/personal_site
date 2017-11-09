#!/bin/bash

create_folder() {
  # if the bin folder does not exist
  if [ ! -d $1 ]; then
    mkdir $1
  fi
}


# Creates thumbnails by shrinking photo by 25%
shrink_images() {
  create_folder $2
  command cd $2
  command cp $1/* .

  # Max height 400, maintain aspect ration
  mogrify -geometry x256 -quality 100 -path $2 $1/*.jpg

  mogrify -geometry x2506 -quality 100 -path $2 $1/*.JPG

  mogrify -geometry x256 -quality 100 -path $2 $1/*.png
}

shrink_images $1 $2
