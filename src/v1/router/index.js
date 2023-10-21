const { Router } = require('express');
const router = new Router();

router.use('/todos',  require('./todoRoutes'));

module.exports = router;