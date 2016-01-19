module.exports = function(grunt) {
    grunt.initConfig({
        exec: {
            jest: 'node node_modules/jest-cli/bin/jest'
        },
        watch: {
            files: ['./app/assets/javascripts/**/*.js'],
            tasks: ['exec:jest']
        }
    });
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-exec');
}