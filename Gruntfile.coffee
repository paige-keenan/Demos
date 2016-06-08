module.exports = (grunt) ->

  require('load-grunt-config') grunt

  grunt.registerTask 'serve', [
    'express'
    'open'
    'watch'
    'jade'
    'coffee'
    'sass'
  ]