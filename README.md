Event Mountain
==============

> Because every mountain has its valleys

This is the site that we plan on launching for our 11/11/11

Running locally
---------------

This is a [nodeJs](http://nodejs.org) application built with the [express framework](http://expressjs.com)

### Installing Node with homebrew
`brew install node`

### Installing npm, the node package manager
`curl http://npmjs.org/install.sh | sh`

### Installing express with npm
`npm install -g express`

### Installing libs to run the tests
`npm install coffee-script`
`npm install zombie`
`npm install -g jasmine-node`

### Resolving runtime dependencies
From the base directory of this app, run `npm install` 

### Starting the application
`node app.js`

If everything is OK, you should see this on the console:
`Express server listening on port 3000 in development mode`

### Running the tests
`make test`
