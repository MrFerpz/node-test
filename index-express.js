const express = require('express');
const app = express();

app.get("/", (req, res) => res.send("Hello world!"))
app.get("/index.html", (req, res) => res.sendFile("/Users/fredpy/repos/basic-node-site/index.html"))
app.get("/about.html", (req, res) => res.sendFile("/Users/fredpy/repos/basic-node-site/about.html"))
app.get("/contact-me.html", (req, res) => res.send("/Users/fredpy/repos/basic-node-site/contact-me.html"))

const PORT = 3050;
app.listen(PORT, () => {
  console.log(`My first Express app - listening on port ${PORT}!`);
});
