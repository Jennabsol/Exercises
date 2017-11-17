module.exports = function foo(grunt) {
  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON("package.json"),
    watch: {
      scripts: {
        files: ["**/scripts/*.js", "!node_modules/**/*.js"],
        tasks: ["eslint", "browserify"],
        options: {
          spawn: false,
        },
      },
    },
    uglify: {
      options: {
        banner: "/*! <%= pkg.name %> <%= grunt.template.today('yyyy-mm-dd') %> */\n"
      },
      build: {
        files: [{
          expand: true,
          cwd: "build",
          src: "bundle.js",
          dest: "build",
          ext: ".min.js"
        }]
      }
    },
    browserify: {
      dist: {
        files: {
          "build/bundle.js": ["scripts/main.js"],
        },
      },
    },
    eslint: {
      src: [
        "**/scripts/*.js",
        "!node_modules/**/*.js",
      ],
    },
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks("grunt-contrib-uglify");
  grunt.loadNpmTasks("grunt-contrib-watch");
  grunt.loadNpmTasks("grunt-browserify");
  grunt.loadNpmTasks("grunt-eslint");

  // Default task(s).
  grunt.registerTask("default", ["watch", "uglify", "browserify", "eslint"]);
};