#!/bin/bash

create_folder() {
  # if the bin folder does not exist
  if [ ! -d $1 ]; then
    mkdir $1
  fi
}

#-------------------------------------------------------------------------------

# Converts all images
# with .JPG extension
# to have .jpg extension
JPG_to_jpg() {

  # See if there are
  # .JPG files in the directory
  ls $1/*.JPG

  # Save the exit status
  exit_status=$?

  # If exit_status == 0, then files
  # with that extension were found,
  # So we will convert them
  if [ $exit_status -eq 0 ]; then

    # Loop through each file with
    # the .JPG extension
    for file in $1/*.JPG

      # Convert it's extension
      do
        echo "converting $file to ${file%.JPG}.jpg"
        cp "$file" "${file%.JPG}.jpg"
      done
  fi
}

#-------------------------------------------------------------------------------

# Creates thumbnails by shrinking photo by 25%
shrink_images() {
  create_folder $2

  # Copy all the files from the input
  # directory into the output directory
  # TODO - See why thumbnal (not copied) error shows
  command cp $1/* $2

  # See if there are
  # .JPG files in the directory
  ls $1/*.jpg

  # Save the exit status
  exit_status=$?

  # If exit_status == 0, then files
  # with that extension were found,
  # So we will convert them
  if [ $exit_status -eq 0 ]; then

    echo "Resizing jpg files in $1"

    # Max height 400, maintain aspect ration
    mogrify -geometry x256 -quality 100 -path $2 $1/*.jpg
  fi

  # See if there are
  # .png files in the directory
  ls $1/*.png

  # Save the exit status
  exit_status=$?

  # If exit_status == 0, then files
  # with that extension were found,
  # So we will convert them
  if [ $exit_status -eq 0 ]; then

    echo "Resizing png files in $1"

    # Max height 400, maintain aspect ration
    mogrify -geometry x256 -quality 100 -path $2 $1/*.png
  fi
}

# JPG_to_jpg $1

shrink_images $1 $2
