/*
 * grunt-cleandocs
 * 
 *
 * Copyright (c) 2014 Niels Nielsen
 * Licensed under the MIT license.
 */
'use strict';
var cleandocs = require('cleandocs');

module.exports = function(grunt) {

  grunt.registerMultiTask('cleandocs', 'Merge seperate documentation and source files to create literate coffee style documentation.', function() {
    var options = this.options({
      "docSuffix": ".md",
      "docTagStart": "#*c:",
      "docTagEnd": "*",
      "srcSuffix": ".coffee",
      "srcTagStart": "#*c:",
      "srcTagEnd": "*",
      "outputSuffix": ".litcoffee",
      "defaultTagOrder": ["untagged", "description"]
    });

    console.log("cleandocs options", options);
    cleandocs.processAllDirs(options);
  });

};
