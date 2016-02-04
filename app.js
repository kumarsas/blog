var express = require('express');

var app = express();

var PORT = process.Env.PORT || 3000;

app.get('/', function( req, res ){
	res.send('Hello World!!');
})

app.use( express.static(__dirname + '/public' ));

app.listen( PORT, function(){
	console.log( "Express Server Running on Port " + PORT)
})