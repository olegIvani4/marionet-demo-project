module.exports = function(grunt){
    "use strict";

    require("matchdep").filterDev("grunt-*").forEach(grunt.loadNpmTasks);

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        clean: {
            build: {
                src: [ 'app/css', 'app/js' ]
            }
        },

        copy: {
            build: {
                files: [
                    {
                        cwd: 'bower_components/',
                        src: [
                            'bootstrap/dist/css/bootstrap.min.css',
                        ],
                        dest: 'app/css/',
                        expand: true,
                        flatten: true
                    },
                    {
                        cwd: 'bower_components/',
                        src: [
                            'bootstrap/fonts/*',
                        ],
                        dest: 'app/fonts/',
                        expand: true,
                        flatten: true
                    }
                ]
            }
        },

        uglify: {
            options: {
                mangle: true
            },
            build: {
                files: {
                    'app/js/app.js': [
                        'bower_components/jquery/dist/jquery.js',
                        'bower_components/underscore/underscore.js',
                        'bower_components/backbone/backbone.js',
                        'bower_components/backbone.marionette/lib/backbone.marionette.js',
                        'src/js/app.js',
                        'src/js/models/*.js',
                        'src/js/collections/*.js',
                        'src/js/views/*.js',
                        'src/js/controllers/*.js',
                        'src/js/routers/*.js',
                        'src/js/start.js'
                    ]
                }
            }
        },

        less: {
            build: {
                options: {
                    paths: ['src/less']
                },
                files: {
                    "app/css/main.css": "src/less/main.less"
                }
            }
        },

        watch: {
            js: {
                files: ['src/js/**/*.js'],
                tasks: ['uglify']
            },
            less: {
                files: ['src/less/**/*.less'],
                tasks: ['less']
            }
        },

        browserSync: {
            dev: {
                bsFiles: {
                    src : [
                        'app/css/*.css',
                        'app/js/*.js',
                        'app/*.html'
                    ]
                },
                options: {
                    port: 5001,
                    watchTask: true,
                    proxy: "localhost:5000",
                    open: false
                }
            }
        },

        express: {
            options: {
                // Override defaults here
            },
            dev: {
                options: {
                    script: 'server/server.js'
                }
            }
        }
    });

    grunt.registerTask('build',  [
        'clean',
        'copy',
        'less',
        'uglify'
    ]);

    grunt.registerTask('default', [
        'build',
        'express:dev',
        'browserSync',
        'watch'
    ]);
};
