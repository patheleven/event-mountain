
/**
 * Module dependencies.
 */

var express = require('express'),
    i18n = require("i18n");

i18n.configure({
  // setup some locales - other locales default to en silently
  locales:['en', 'es'],

  // where to register __() and __n() to, might be "global" if you know what you are doing
  register: global
});
var app = module.exports = express.createServer();

// Configuration

app.configure(function(){
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(i18n.init);
  app.use(app.router);
  app.use(express.static(__dirname + '/public'));
});

app.configure('development', function(){
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true })); 
});

app.configure('production', function(){
  app.use(express.errorHandler()); 
});

i18n.setLocale('en');
// Routes

app.get('/', function(req, res){
  res.render('index', {
    title: __('Event Mountain - Home'),
    subtitle: __('Because every mountain has its valleys')
  });
});

app.get('/cylicon', function(req, res){
  res.render('cylicon', {
    title: __('Event Mountain - Cylicon Valley'),
    subtitle: __('Hello from Cylicon Valley, Valladolid, Spain')
  });
});

app.get('/bellota', function(req, res){
  res.render('bellota', {
    title: __('Event Mountain - Bellota Valley'),
    subtitle: __('Hello from Bellota Valley, Extremadura, Spain')
  });
});

app.get('/cachirulo', function(req, res){
  res.render('cachirulo', {
    title: __('Event Mountain - Cachirulo Valley'),
    subtitle: __('Hello from Cachirulo Valley, Aragon, Spain')
  });
});

var port = process.env.PORT || 3000;
app.listen(port);
console.log("Express server listening on port %d in %s mode", app.address().port, app.settings.env);
