module.exports = function (grunt) {
    grunt.initConfig({
   'path_input':{
      'js_assets':'../src/javascript',
      'less_assets':'../src/less',
      'demo_path':'../demo'
   },
   'less':{
      'development':{
         'options':{
            'compress':true
         },
         'files':{
            '<%= path_input.demo_path %>/assets/stylesheet/style.css':['<%= path_input.less_assets %>/main.less'],
            '<%= path_input.demo_path %>/assets/stylesheet/layout.css':['<%= path_input.less_assets %>/layout.less']
         }
      }
   },
   'uglify': {
       "options":{
          "mangle":false
       },
       'my_target': {
           'files': {
               '<%= path_input.demo_path %>/assets/javascript/output.min.js': ['<%= path_input.js_assets %>/jsonData.js','<%= path_input.js_assets %>/common.js','<%= path_input.js_assets %>/events.js']
           }
       }
   },
   'cssmin': {
       'target': {
           'files': [{
               'expand': true,
               'cwd': '../public/assets/stylesheet',
               'src': ['*.css', '!*.min.css'],
               'dest': '<%= path_input.demo_path %>/assets/stylesheet',
               'ext': '.min.css'
           }]
       }
   },
   'watch':{
      'styles':{
         'files':[
            '<%= path_input.less_assets %>/*.less'
         ],
         'tasks':[
            'less'
         ],
         'options':{
            'nospawn':true
         }
      }
  }
});

grunt.loadNpmTasks('grunt-contrib-less');
grunt.loadNpmTasks('grunt-contrib-watch');
grunt.loadNpmTasks('grunt-contrib-uglify');
grunt.loadNpmTasks('grunt-contrib-cssmin');

grunt.registerTask('default', ['less','watch']);

}
