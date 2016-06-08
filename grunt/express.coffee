# 
# Creates an Express server to view the project locally on.
# http://expressjs.com/
# 
# =============================================

module.exports = all: options:
  port: 9000
  hostname: 'localhost'
  bases: [ './public' ]
  livereload: true
