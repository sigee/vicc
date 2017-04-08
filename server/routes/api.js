const express = require('express');
const router = express.Router();
const Viccek = require('../models/models').Vicc;
const jwt = require('express-jwt');

const authCheck = jwt({
  secret: new Buffer('a9nGnxcyCDnPEQV3wPLKkoKY6q-gF_EkQwOPcVMIdqOiann8GSL-1Exm60uqFAXg', 'base64'),
  audience: 'Fi8d0QJl68I1Y1DKN9Jsl9fB2hGnxmb0',
  credentialsRequired: true
});



router.post('/registration', function(req, res, next) {
  return res.send('User Registered!');
});

router.get('/', function (req, res, next) {
  res.status(200);
  res.json({
    message: 'Hungarian joke database api 0.0.1'
  });
});

router.get('/viccek/:page', function (req, res, next) {
  let viccek = {};
  Viccek.find({})
    .limit(4)
    .skip(req.params.page * 4)
    .exec(function (err, data) {
      if (err) {
        let error = new Error('Database error');
        error.status = 500;
        next(error);
      }
      viccek.data = data;
      res.json(viccek);
      res.status(200);
    })
});

router.get('/random', function (req, res, next) {
  let viccek = {};
  Viccek.aggregate({
      $sample: {
        size: 1
      }
    })
    .exec(function (err, data) {
      if (err) {
        let error = new Error('Database error');
        error.status = 500;
        next(error);
      }
      viccek.data = data;
      res.json(viccek);
      res.status(200);
    })
});

router.get('/viccek/:tag/:page', function (req, res, next) {
  let viccek = {};
  Viccek.find({
      tag: req.params.tag
    })
    .limit(5)
    .skip(req.params.page * 5)
    .exec(function (err, data) {
      if (err) {
        let error = new Error('Database error');
        error.status = 500;
        next(error);
      }
      viccek.data = data;
      res.json(viccek);
      res.status(200);
    });
});

router.get('/kereses/:id', function (req, res, next) {
  let vicc = {};
  Viccek.find({
      _id: req.params.id
    })
    .exec(function (err, data) {
      if (err) {
        let error = new Error('Database error');
        error.status = 500;
        next(error);
      }
      vicc.data = data;
      /*res.header('Access-Control-Allow-Origin', 'https://viccek.herokuapp.com');
      res.header('Access-Control-Allow-Origin', 'http://localhost:4200');*/
      res.json(vicc);
      res.status(200);
    });
});

//Vicc post route
router.put('/viccek/:id', authCheck, function (req, res, next) {

  if (req.params.rate < 1 || req.params.rate > 10) {
    let err = new Error('Rating point from 1 to 10 are acceptable')
    err.status = 401;
    return next(err);
  } else {

    let rate = req.params.rate;
    Viccek.findById(req.params.id)
      .exec(function (err, vicc) {
        vicc.rate.push(req.params.rate)
        vicc.save(function (err, result) {
          if (err) {
            return next(err);
          } else {
            res.status(201);
            res.location('/viccek/' + req.params.id);
            res.end();
          }
        });
      });
  }
});

//Vicc rate post route
router.put('/viccek/:id/:rate', authCheck, function (req, res, next) {

  if (req.params.rate < 1 || req.params.rate > 10) {
    let err = new Error('Rating point from 1 to 10 are acceptable')
    err.status = 401;
    return next(err);
  } else {

    let rate = req.params.rate;
    Viccek.findById(req.params.id)
      .exec(function (err, vicc) {
        vicc.rate.push(req.params.rate)
        vicc.save(function (err, result) {
          if (err) {
            return next(err);
          } else {
            res.status(201);
            res.location('/viccek/' + req.params.id);
            res.end();
          }
        });
      });
  }
});



//Vicc post route
router.post('/viccek', authCheck, function (req, res, next) {
  let vicc = new Viccek(req.body);
  vicc.save(function (err) {
    if (err) {
      return next(err);
    } else {
      console.log('Vicc saved');
      res.status(201);
      res.location('/');
      res.json(vicc);
    }
  });
});

//Vicc delete
router.delete('/viccek/:id', authCheck, function (req, res, next) {
  Viccek.findById(req.params.id)
    .remove()
    .exec(function (err, data) {
      if (err) {
        return next(err);
      } else {
        console.log('Vicc deleted');
        res.status(204);
        res.end();
      }
    });
});

module.exports = router;
