const express = require('express');
const app = express();
const authorRouter = require('./routes/authorRouter');
const bookRouter = require('./routes/bookRouter');
const indexRouter = require('./routes/indexRouter');
const errRouter = require('./routes/errRouter')

app.use("/", indexRouter);
app.use("/author", authorRouter);
app.use("/book", bookRouter);
app.use("*", errRouter)

// app.get("/", (req, res) => res.send("Hello world!"))
// app.get("/index.html", (req, res) => res.sendFile("/Users/fredpy/repos/basic-node-site/index.html"))
// app.get("/about.html", (req, res) => res.sendFile("/Users/fredpy/repos/basic-node-site/about.html"))
// app.get("/contact-me.html", (req, res) => res.sendFile("/Users/fredpy/repos/basic-node-site/contact-me.html"))

const PORT = 3050;
app.listen(PORT, () => {
  console.log(`My first Express app - listening on port ${PORT}!`);
});
