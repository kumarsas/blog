###   Contine from Readme2.txt  ####

4) Now We will see how to access Static Content in our Express Server

	a) Create a "public" folder in your working directory

		cd public and then create an index.html file inside public folder

		We will create a basic index.html page like below

		################
		<!DOCTYPE html>
		<html>
		  <head>
		    <meta charset="utf-8">
		    <meta http-equiv="X-UA-Compatible" content="IE=edge">
		    <meta name="viewport" content="width=device-width, initial-scale=1">
		    
		    <title>My App</title>

		  </head>
		  <body>
		      <h2>We Just Accessed index.html from our web server</h2>
		  </body>
		</html>
		##################

		Save the file and move back to your working folder.

	b) Open your "app.js" file, and add the below line just above the listen line.

		// app.use( express.static(__dirname + '/public' )); //

		Restarted the server by getting out of current connection (ctrl+c)
		and again running "node app.js"

		you will see that the server started again.

		Now when you access "http://localhost:3000/index.html" in your browser, you will the heading that we printed in index.html

		Again Congrates. You can access Static Contents as well in your server.