const express = require('express');
const path = require("node:path");

const authorRouter = require('./routes/authorRouter');
const bookRouter = require('./routes/bookRouter');
const indexRouter = require('./routes/indexRouter');
const errRouter = require('./routes/errRouter')

const app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
const assetsPath = path.join(__dirname, "public");
app.use(express.static(assetsPath));

const links = [
  { href: "/", text: "Home"},
  { href: "about", text: "About"}
];

const users = ["Rose", "Cake", "Biff"]

app.get("/", (req, res) => {
  res.render("index", { links: links, users: users })
});

app.get("/about", (req, res) => {
  res.render("about", { aboutInfo: "Welcome to the about page."})
})

// app.use("/", indexRouter);
// saying that when we're on / path, we run indexRouter function
// calling indexRouter listens for a GET request, resulting in sending a file

app.use("/author", authorRouter);
app.use("/book", bookRouter);
app.use("*", errRouter)

// app.get("/", (req, res) => res.send("Hello world!"))
// app.get("/index.html", (req, res) => res.sendFile("/Users/fredpy/repos/basic-node-site/index.html"))
// app.get("/about.html", (req, res) => res.sendFile("/Users/fredpy/repos/basic-node-site/about.html"))
// app.get("/contact-me.html", (req, res) => res.sendFile("/Users/fredpy/repos/basic-node-site/contact-me.html"))

app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).send(err);
});

const PORT = 3050;
app.listen(PORT, () => {
  console.log(`My first Express app - listening on port ${PORT}!`);
});
