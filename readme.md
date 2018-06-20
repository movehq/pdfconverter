# MoveHQ PDF Converter
#### Initial contributions by [bsmith08091](https://github.com/bsmith08091) and [Jiinxt](https://github.com/Jiinxt).

MoveHQ PDF Converter is a tool written in NodeJS utilizing Docker that allows you to create PDF's from any web page. Works on and offline.

## Downloading the Container
`docker pull movehq/pdfconverter:latest`

## Running the Container
`docker run -v $yoursavedirectory:/print -e source=$urltoconvert -e destination=$filename movehq/pdfconverter:latest`

**\$yoursavedirectory** = The directory you want to save you pdf in. Note that you should **not** change the `:/print` portion.  
**\$urltoconvert** = The url, including http:// or https://, you wish to convert to a PDF.  
**\$filename** = the name of the file you wish to save, this is optional will save as google.pdf if not included.

example:
`docker run -v $PWD/print:/print -e source=https://www.movehq.com/ -e destination=movehq movehq/pdfconverter:latest`

#####  Released under MIT license.