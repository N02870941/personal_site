# Notes

A list of notes to recall

## CSS

All CSS goes in the folder `src/client/core/style`. If not, it will be inserted
into the minified css file. To use CSS for a specific page, use a component and
use the css attribute to point the given file. This creates a scope around that
css file for that given component.

## JS

- All pages are components
- All JS will be concatenated and minified into 1 file
