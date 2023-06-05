# Mp3Tagger

Allows you to manage mp3 tags on your filesystem.  
Also allows you to bulk rename files based on patterns (TODO)

> node v18.16.0  
> npm 9.5.1

Made for windows file system paths

Make sure your directories only contain music files and not hidden system files (otherwise recursive folder scanning features won't work)

### Running
1. cd into client and server and `npm i` both
1. then `npm run start` both
1. then browse `localhost:4200`


### Known Bugs
1. If a song is loaded in and a new song is loaded on top and that new song does not have a metadata, the ui will display the first loaded metadata for that field.
1. Not a bug, but horrible efficiency: running Rename All Files will rename all files even if they already match the new filename
1. Not a bug, but bad efficiency: Find Missing Tags will reread all files so large libraries that have multiple missing tags towards the end will require scanning more than necessary scanning
1. Logging is pretty garbage and not consistant.

### Future work ideas
1. Allow modification of thumbnails.