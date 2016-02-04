###   Contine from Readme.txt  ####

3) Running your First NodeJs App using express

	a) Create a new file named "app.js"

		//Adding express to our app
		var express = require('express');

		//Getting the instance of express.
		var app = express();

		//Defining a constant to initialize PORT
		var PORT = 3000;

		//The below Defines a route with a callback function
		//Callback function require a request and response parameter.
		//Below we are sending a "Hello World" Response whne there  is a //request for "/" . 
		
		app.get('/', function( req, res ){
			res.send('Hello World!!');
		})

		//Now we need to listen on a PORT using the below code . It also //has a callback function which mentions that the Express Server //started on a port.

		app.listen( PORT, function(){
			console.log( "Express Server Running on Port " + PORT)
		})


	b) Go to your terminal in your project folder where you have app.js.
	 	Run "node app.js"

	 	You will see in the terminal log that "Express Server Started Running on Port 3000"

	 	Now open your favourite Browser and open local host by typing 
	 	"http://localhost:3000/" and running it in the browser.

	 	You will see "Hello World printed out on your screen"
	 	
	 	Congratulation on your first Express Js Server
