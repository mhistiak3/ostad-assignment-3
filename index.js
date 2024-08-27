const http = require("http");
const fs = require("fs");

// Create the server
const server = http.createServer((req, res) => {

  if (req.url === "/") {
    // Home Page
    res.write("This is the Home Page");
    res.end(); 
  } else if (req.url === "/about") {
    // About Page
    res.write("This is the About Page");
    res.end(); 
  } else if (req.url === "/contact") {
    // Contact Page
    res.write("This is the Contact Page");
    res.end();
  } else if (req.url === "/file-write") {
    // File Write
    fs.writeFile("demo.txt", "hello world", (err) => {
      if (err) {
        res.write("Failed to write file");
        res.end(); 
      } else {
        res.write("File written successfully");
        res.end();
      }
    });
  } else {
    res.statusCode = 404;
    res.write("Page not found");
    res.end(); 
  }
});
server.listen(5500, () => {
  console.log("Server is listening on port 5500");
});
