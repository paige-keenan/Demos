# 
# Converts all CoffeeScript files into JavaScript for the server
# http://coffeescript.org/
# 
# =============================================

module.exports = 
	glob_to_multiple:
	  expand: true
	  flatten: false
	  cwd: 'application/'
	  src: [ '**/*.coffee' ]
	  dest: 'public/'
	  ext: '.js'