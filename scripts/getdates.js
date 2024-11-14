//console.log("Hello World");
//document = "getdates.js";
const yr = new Date().getFullYear();
const lastModified = document.lastModified;
const author = "Jamie Cummings";
const place = "Utah, USA";

// \u00A9 is the unicode for the copywrite symbol
document.getElementById("copywrite").innerHTML = `\u00A9 ${yr} | ${author} | ${place}`;
document.getElementById("modified").innerHTML = `Last Modified ${lastModified}`;