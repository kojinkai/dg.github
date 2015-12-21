dachisgroupuk.github.io
=======================

[1]: http://jekyllrb.com/  "Jekyll"
[2]: http://daringfireball.net/projects/markdown/basics/ "Markdown Basics"
[3]: http://sass-lang.com/ "SASS Language Stylesheets"
[4]: http://gruntjs.com/   "Grunt JS"

Welcome to the Dachis Group Tech Team's organisation page.  Please read on for details on how to install and modify the page.

###About Jekyll

[Jekyll][1] is a Ruby Gem written by the staff at Github and powers Github Pages.  It is a site generator capable of generating both static sites and blogs.  Content can be added via the [Markdown][2] language and pulled automatically into the content section.  Blog posts can be added the same way.  No databases, just content.

It comes recommended by Github and is easy to work with. Seems legit.

##Installation

Installation is pretty straightforward:

Clone the repo

	git clone git@github.com:dachisgroupuk/dachisgroupuk.github.io.git

Install Jekyll

	gem install jekyll

cd to the project directory and run it

	cd dglabs && jekyll serve --watch

###Gem Dependencies

Other than Jekyll, the only RubyGem dependency is [SASS][3]:

	gem install sass

This will allow you to use the sass compiler which can be set to watch for changes while developing.

Run the following from root:

	sass --watch sass/.:assets/css

**Please note:** this will compile everything to a single, un-minified file in the /assets/css directory which is linked from the templates.  Additional SASS files should be prefixed with an _underscore to ensure that the SASS is compiled without creating a separate file in the destination folder.

###Node Modules, NPM Dependencies and grunt.js

[grunt.js][4] is a JavaScript task runner. We are using it for automating CSS and JS minification, JS linting and JS concatenation. It can be used to run unit tests too, if necessary.

You will need to install node and npm in your system.  The best way is to install them with homebrew.  This will give you both node and npm:

	brew install node

Then, install the grunt-cli globally into your system to access the grunt commands from the command line:

	npm install -g grunt-cli

You should now be able to run
	
	grunt

Which will compress, minify and lint everything into the /assets/ directory.  Run grunt before deployment, or just when you want to test your code.  Grunt tasks are configurable via gruntfile.js

Thats it, good to go.  Pushing changes to the master branch of the repository will trigger a release.