/*
 * grunt-cakeTpl
 * https://github.com/linuxenko/grunt-cakeTpl
 *
 * Copyright (c) 2014 Svetlana Linuxenko
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  var comment = require('./lib/comment').init(grunt);

  // Please see the Grunt documentation for more information regarding task
  // creation: http://gruntjs.com/creating-tasks

  grunt.registerMultiTask('cakeTpl', 'HTML templates builder', function() {
    // Merge task-specific and/or target-specific options with these defaults.
    var options = this.options({
      scope : '$c.tpl'
    });

    // Iterate over all specified file groups.
    this.files.forEach(function(f) {
      // Concat specified files.
      var src = f.src.filter(function(filepath) {
        // Warn on and remove invalid source files (if nonull was set).
        if (!grunt.file.exists(filepath)) {
          grunt.log.warn('Source file "' + filepath + '" not found.');
          return false;
        } else {
          return true;
        }
      }).map(function(filepath) {

        if (grunt.file.isDir(filepath)) {
          return;
        }

        var src = grunt.file.read(filepath)
          .replace(/\s{1,}/gi,' ')
          .replace(/"/gi, '\\"')
          .replace(/'/gi,"\\'")
        ;
        var filename = filepath.match('^.+\\/(.+?)(?=\\.[^.]*$|$)')[1];
  
        return options.scope + '.' + filename + ' = "' + src + '";';
      }).join("\r\n");

      // Write the destination file.
      grunt.file.write(f.dest, src);

      // Print a success message.
      grunt.log.writeln('File "' + f.dest + '" created.');
    });
  });

};
