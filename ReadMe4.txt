###   Contine from ReadMe4.txt  ####

5) Before moving on we will delpoy this to Heroku.
	Before that we will need to install git on your machine

	#############
		Git Versioning System
	##############

		Install Git

		git init
			Initialized empty Git repository in your working directory

		Set Git config:

		git config --global user.name "Ashish Singh"
		git config --global user.email ashish19jan@gmail.com
		git config --global push.default matching
		git config --global alias.co checkout

		git status
			to know the files that are not saved yet. Not tracked by Git

		To save
			git add .

			then "git status", will give green bordered file names that are saved.

		We dont want to save "node_modles/". 
		This we can keep it in file ".gitignore"

		To remove from git
			git rm --cached -r node_modules

		To Commit
			git commit -a -m "Init Commit"

	