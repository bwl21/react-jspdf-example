# About this project

This project is a playground and demonstrator how to embed jsPDF in a react project

# usage

## play around with react

* clone this project
* open index.html in your browser
* play around
* inspect sources

## demo how to use with node (cli-demo)

* clone this project
* `npm install`
* debug with `npm test cli-demo.js` - this invokes ndb
* runt it with node cli-demo.js - this creates cli-demo-output.pdf

cli-demo uses the scripts from `jspdf_aa`:

* jspdf.node.debug.js - this is the original bundle
* jspdf.node.debug.patches.js - here all `module.exports = FOO` are replaced by `module.exports.FOO = FOO`
   this makes it work again
   
   