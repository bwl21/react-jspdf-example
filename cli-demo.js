// we need these polyfills
// see https://stackoverflow.com/questions/30694428/jspdf-server-side-node-js-usage-using-node-jspdf

global.window = {document: {createElementNS: function(){return {}} }};
global.navigator = {};

fs = require("fs")
html2pdf = require('html2pdf')

// choose one of the following three to play around

//jsPDF = require("jspdf")                       // this is the official npm module - it works but is old jspdf
//jsPDF = require("./jspdf_aa/jspdf.debug.js")
jsPDF = require("./jspdf_aa/jspdf.node.debug.patched.js").jsPDF  // this works
//jsPDF = require("./jspdf_aa/jspdf.node.debug.js")

debugger;




doc = new jsPDF('p', 'mm', 'a4')

doc.setFontSize(40);
doc.line(0, 20, 210, 20)
doc.text(["lhf .7", 'test', 'test'], 10, 20, {lineHeightFactor: 0.7});
doc.text(['lhf 1', 'test', 'test', 'test'], 50, 20, {lineHeightFactor: 1});
doc.text(['lhf 0', 'test', 'test', 'test'], 90, 20, {lineHeightFactor: 0});
doc.text(['hanging', 'test', 'test', 'test'], 130, 20, {baseline: 'hanging'});

doc.line(0, 100, 210, 100)
doc.setFontSize(10);
doc.text(["My", 'size 10', 'size 10'], 10, 100, {baseline: 'hanging'});
doc.setFontSize(20);
doc.text(['My', 'size 20', 'test', 'test'], 50, 100, {baseline: 'hanging'});
doc.setFontSize(30);
doc.text(['My', 'size 30', 'test', 'test'], 90, 100, {baseline: 'hanging'});
doc.setFontSize(40);
doc.text(['My', 'size 40', 'test', 'test'], 130, 100, {baseline: 'hanging'});

doc.line(0, 200, 210, 200)
doc.setFontSize(20);
doc.text(["My", 'bottom'], 10, 200, {baseline: 'bottom'});
doc.text(["My", 'top'], 40, 200, {baseline: 'top'});
doc.text(["My", 'middle'], 60, 200, {baseline: 'middle'});
doc.text(["My", 'hanging'], 90, 200, {baseline: 'hanging'});
doc.text(["My", 'alphabetic'], 120, 200, {baseline: 'alphabetic'});
doc.text(["My", 'ideographic'], 160, 200, {baseline: 'ideographic'});


var result = doc.output();

var encoding = require("encoding")
var buffer = encoding.convert(result, 'Latin-1')
fs.writeFileSync('cli-demo-output.pdf', buffer)


