var apiFiles = [__dirname + "/myapp/hello/world.js"];
var data = {};
apiFiles.forEach(function (filePath) {
  var apiContent = require(filePath);

  var url = filePath.split("_mockserver/")[1]; // e.g. comments.js
  url =
    url.slice(url.length - 9) === "/index.js"
      ? url.slice(0, url.length - 9) // remove /index.js
      : url.slice(0, url.length - 3); // remove .js

  urlPath = url.replace(/\//g, "-");

  data[urlPath] = apiContent;
});

module.exports = function () {
  return data;
};
