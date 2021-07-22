var express = require('express');
var router = express.Router();
var pool = require('./pool')

/* GET home page. */
router.get('/addnewrecord', function (req, res, next) {
  pool.query("insert into userdata(name,phone ,email) values(?,?,?)", [req.body.name, req.body.phone, req.body.email],function(err,result) {
  if (err) {
    console.log(err)
    return res.status(500).json({ 'RESULT': false })
  }
  else {
    // console.log(result)
    if (result.affectedRows >= 1) {
      return res.status(200).json({ 'RESULT': true })
    }

    else {
      return res.status(400).json({ 'RESULT': false })
    }

  }
})

});

module.exports = router;
