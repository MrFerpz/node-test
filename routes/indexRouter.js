const { Router } = require('express');
indexRouter = Router();

indexRouter.get("/", (req, res) => res.sendFile("/Users/fredpy/repos/basic-node-site/index.html"));

module.exports = indexRouter;