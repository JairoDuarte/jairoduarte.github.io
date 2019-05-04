module.exports = function(grunt) {
    // Project configuration
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            options: {
                banner: '/* <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            build: {
                src: 'resume/js/main.js',
                dest: 'resume/js/main.min.js'
            }
        },
        cssmin: {
            target: {
                files: {
                    'resume/css/style.min.css': 'resume/css/style.css'
                }
            }
        }
    });

    // Load the plugin that provides the uglify task
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');

    // Default task(s).
    grunt.registerTask('default', [
        'uglify',
        'cssmin'
    ]);
};