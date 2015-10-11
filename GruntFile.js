module.exports  = function(grunt) {

  grunt.initConfig({

    browserify: {
      dist: {
        options: {
          transform: [["babelify", {"nonStandard": true}]]
        },
        files: {
          "app/public/javascripts/build.js" : "app/views/components.js"
        }
      }
    }


  });

  grunt.registerTask('default',['browserify']);

  grunt.loadNpmTasks("grunt-browserify");

}
