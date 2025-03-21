const { Router } = require('express');
const bookRouter = Router();

bookRouter.get("/", (req, res) => res.send("Welcome to the book homepage."));
bookRouter.get("/:bookId", (req, res) => {
    const {bookId} = req.params;
    res.send(`Book ID: ${bookId}`);
});

module.exports = bookRouter;