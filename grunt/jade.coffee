# 
# Creates an Express server to view the project locally on.
# http://jade-lang.com/
# 
# =============================================

module.exports = 
	jade: {
	  options: {
	  	pretty: true
	  },	
		files: [{
			expand: true,
			flatten: false,
			cwd: 'application/',
			src: ['**/*.jade'],
			dest: 'public/',
			ext: '.html'
		}]
	}
  
