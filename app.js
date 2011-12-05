
/**
 * Module dependencies.
 */

var express = require('express');

var app = module.exports = express.createServer();

// Configuration

app.configure(function(){
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(__dirname + '/public'));
});

app.configure('development', function(){
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true })); 
});

app.configure('production', function(){
  app.use(express.errorHandler()); 
});

// Routes

app.get('/', function(req, res){
  res.render('index', {
    title: 'Event Mountain - Home',
    subtitle: 'Because every mountain has its valleys'
  });
});

app.get('/cylicon', function(req, res){
  res.render('cylicon', {
    title: 'Event Mountain - Cylicon Valley',
    subtitle: 'Hello from Cylicon Valley, Valladolid, Spain'
  });
});

app.get('/bellota', function(req, res){
  res.render('bellota', {
    title: 'Event Mountain - Bellota Valley',
    subtitle: 'Hello from Bellota Valley, Extremadura, Spain'
  });
});

app.get('/cachirulo', function(req, res){
  res.render('cachirulo', {
    title: 'Event Mountain - Cachirulo Valley',
    subtitle: 'Hello from Cachirulo Valley, Aragon, Spain'
  });
});

var port = process.env.PORT || 3000;
app.listen(port);
console.log("Express server listening on port %d in %s mode", app.address().port, app.settings.env);
