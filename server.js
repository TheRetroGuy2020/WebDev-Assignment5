/*
 * Write your routing code in this file.  Make sure to add your name and
 * @oregonstate.edu email address below.
 *
 * Name: Christian Bryant
 * Email: Hidden
 */

var path = require('path');
var express = require('express');
var handlebarsE = require('express-handlebars')
var twitData = require('./twitData.json')

var app = express();
var port = process.env.PORT || 3000;

app.engine('handlebars', handlebarsE({ defaultLayout: null }))
app.set('view engine', 'handlebars')

app.get('/', function(req,res,next){
  // res.status(200).sendFile(path.join(__dirname, 'public', 'index.html'));
  res.status(200).render('twitpage', {
    twits : twitData
  })
})

app.use(express.static('public'));

app.get('/index', function(req,res,next){
  // res.status(200).sendFile(path.join(__dirname, 'public', 'index.html'));
  res.status(200).render('twitpage', {
    twits : twitData
  })
})

app.get('/twits/:number', function(req,res,next){
  // res.status(200).sendFile(path.join(__dirname, 'public', 'index.html'));
  var number = req.params.number
  if(number <= twitData.length){
    res.status(200).render('twitpage', {
      singleTweet : true,
      twits : twitData[number]
    })
  }
  else{
    next()
  }
})

app.get('*', function (req, res) {
  res.status(404).render('twitpage', {
    errorBool : true
  })
});

app.listen(port, function () {
  console.log("== Server is listening on port", port);
});
