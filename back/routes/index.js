const { Router } = require('express');

const router = Router();
const connection = require('../conf');

/* GET index page. */
router.post('/', (req, res) => {
  console.log('I am in POST signup');
});

module.exports = router;
