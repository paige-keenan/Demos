# 
# Automatically opens the localHost server once loades when you type ```grunt``` into your Terminal
# http://sass-lang.com/
# 
# =============================================

module.exports = 
	dist: 
		files: [{
			expand: true,
			cwd: 'application/',
			src: ['**/*.scss'],
			dest: 'public/',
			ext: '.css'
		}]
