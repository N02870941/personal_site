#!/bin/sh

# Creates thumbnails by shrinking photo by 25%
shrink_images() {
  mogrify -resize 25% -quality 100 -path $2 $1/*.jpg
}

shrink_images $1 $2
