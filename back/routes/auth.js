const { Router } = require('express');

const router = Router();
const connection = require('../conf');

router.post('/signup', (req, res) => {
  connection.query('INSERT INTO user SET ?', req.body, (err) => {
    if (err) {
      console.log(err);
      res.sendStatus(500);
    } else {
      res.sendStatus(201);
    }
  });
});

module.exports = router;
