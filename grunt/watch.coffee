# 
# Watches for changes in the assigned tasks and reloads localHost when it detects these changes with the latest code
# https://github.com/gruntjs/grunt-contrib-watch
# 
# =============================================

module.exports =
  options: livereload: true
  files: [ 'public' ]
  grunt: files: [ 'Gruntfile.js' ]
  jade:
    cwd: 'application/'
    files: ['**/*.jade']
    tasks: [ 'jade' ]
  sass:
    cwd: 'application/'
    files: [ '**/*.scss' ]
    tasks: [ 'sass' ]
  coffee:
    cwd: 'application/'
    files: [ '**/*.coffee' ]
    tasks: [ 'coffee' ]