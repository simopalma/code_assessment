module.exports = function (grunt) {
    grunt.initConfig({
   'path_input':{
      'js_assets':'../public/assets/javascript'
   },
   'files_javascript':{
      'assets':[
         '<%= path_input.js_assets %>/common.js'
      ]
   },
   'less':{
      'development':{
         'options':{
            'compress':true
         },
         'files':{
            '../public/assets/stylesheet/style.css':['../public/assets/less/main.less'],
            '../public/assets/stylesheet/layout.css':['../public/assets/less/layout.less']
         }
      }
   },
   'uglify': {
       "options":{
          "mangle":false
       },
       'my_target': {
           'files': {
               '<%= path_input.js_assets %>/output.min.js': ['<%= path_input.js_assets %>/jsonData.js','<%= path_input.js_assets %>/common.js','<%= path_input.js_assets %>/events.js']
           }
       }
   },
   'watch':{
      'styles':{
         'files':[
            '../public/assets/less/*.less'
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

grunt.registerTask('default', ['less','watch']);

}
