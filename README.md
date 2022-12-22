<h1 align="center">
🌐 MERN Stack
</h1>
<p align="center">
MongoDB, Expressjs, React, Nodejs
</p>


> MERN is a fullstack implementation in MongoDB, Expressjs, React, Nodejs.

MERN stack is the idea of using Javascript/Node for fullstack web development.

## clone
```terminal
$ git clone https://github.com/andrewkukhar/time-track.git
```

## project structure
```terminal
client/ - frontend
config/ - backend configuration
middleware/ backend connection to frontend
models/ - schemes
routes/ - api
app.js - runnig
```

## Start local

```terminal
$ cd time-track  // go to project folder
$ npm i && npm run client:install   // npm install packages
$ npm run dev // run it development
$ npm run start // this will run on cloud environment as AWS
```

## Deploy App to [Heroku](https://dashboard.heroku.com/)
Go to Heroku and create app, then:
If you haven't already, log in to your Heroku account and follow the prompts to create a new SSH public key.
```terminal
$ heroku login
```
# Create a new Git repository
Initialize a git repository in a new or existing directory
```terminal
$ cd <my-project>/
$ git init
$ heroku git:remote -a <project-name>
```
# Existing Git repository
For existing repositories, simply add the heroku remote
```terminal
$ heroku git:remote -a <repo-name>
```

Deploy your application
Or
Commit your code to the repository and deploy it to Heroku using Git.
```terminal
$ git add .
$ git commit -am "make it better"
$ git push heroku main
```


## Standard

[![JavaScript Style Guide](https://cdn.rawgit.com/standard/standard/master/badge.svg)](https://github.com/standard/standard)

## BUGs or comments

[Create new Issues](https://github.com/andrewkukhar/time-track/issues) (preferred)

Email Me: andriikukharv@gmail.com (welcome, say hi)

## Author
[AK](https://ka-webdev.space)