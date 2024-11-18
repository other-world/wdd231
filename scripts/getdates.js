//console.log("Hello World");
//document = "getdates.js";
let yr = new Date().getFullYear();
let lastModified = document.lastModified;
const author = "Jamie Cummings";
const place = "Utah, USA";

// \u00A9 is the unicode for the copywrite symbol
//document.getElementById("copywrite").innerHTML = `\u00A9 ${yr} | ${author} | ${place}`;
//document.getElementById("modified").innerHTML = `Last Modified ${lastModified}`;

// Trying the Javascript using hte querySelector instead of getElementById
document.querySelector('#copywrite').innerHTML = `\u00A9 ${yr} | ${author} | ${place}`;
document.querySelector('#lastModified').innerHTML = `Last Modified ${lastModified}`;
