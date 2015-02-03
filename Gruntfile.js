/*
 * grunt-protractor-invoker
 * 
 *
 * Copyright (c) 2015 stoneChen
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    // Configuration to be run (and then tested).
    protractor_invoker: {
      e2e: {
          configFile: 'test/protractor.conf.js'
      }
    }
  });

  // Actually load this plugin's task(s).
  grunt.loadTasks('tasks');

  grunt.registerTask('default', ['protractor_invoker']);

};
