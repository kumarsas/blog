#####We are going to create a Basic BLOG using AngularJs
	and using NodeJs for Deplyong to Heroku#####

It will be a node Js app. First get nodeJs Installed on your machine

1) Create a node Js App
	Open Terminal in Mac, Commod Prompt in Windows
	Go to your working folder.
	We will use npm . npm is nothing but the package manager for nodejs

	// npm init // 

	To Initialize the node Js app
	This will ask to enter the details like name, description
	you can just "Enter" , "Enter", ...

	It will create a "Package.json" file which has the list of details 
	of your node project. This can be edited anytime using your editor.

	You can open your favourite editor. I am using "Sublime text".
	Open the project folder in your editor and you will see "package.json"
	file created.

2) Install Dependencies
	As we will use one of the node modules "express" to start our local server, We will need to install "express" and for that we will use the "npm" . 

	Installing Express.
	In your working folder, type the below to install 

	"--save" option will make sure that we have the express dependency entry in "package.json" file

	// npm install express --save //

	After running the above command , you will see an entry in 
	"package.json" file with the dependency of express like below.

	Also there will be a new folder created with the name "node_modules"
	inside which you will see express folder and its related files.

	//	"dependencies": {
    		"express": "^4.13.4"
  		}
  	//