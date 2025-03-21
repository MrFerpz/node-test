const { Router } = require('express');
const { getAuthorById } = require('../controllers/authorController')
const authorRouter = Router();

authorRouter.get("/", (req, res) => res.send("Welcome to the author homepage."));
authorRouter.get("/:authorId", getAuthorById)
// getAuthorById from the controller handles the logic and replaces the prior method we defined

    // (req, res) => {
    // console.log(req.params);
    // const {authorId} = req.params;
    // res.send(`Author ID: ${authorId}`);
;

module.exports = authorRouter;