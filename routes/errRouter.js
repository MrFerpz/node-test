const { Router } = require('express');
const errRouter = Router();

errRouter.get("/", (req, res) => res.sendFile("/Users/fredpy/repos/basic-node-site/404.html"));

module.exports = errRouter;

