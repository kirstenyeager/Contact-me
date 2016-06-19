'use strict';

module.exports = function (grunt) {

	// Load grunt tasks automatically
	require('load-grunt-tasks')(grunt);

	// Time how long tasks take. Can help when optimizing build times
	require('time-grunt')(grunt);

	var options = {
		config: {
			src: './grunt/*.js',
		},
		pkg: grunt.file.readJSON('package.json'),
		nodemon: {
			serve: {
				script: 'keystone.js',
				options: {
					ignore: ['node_modules/**'],
				},
			},
		},
	};

	var configs = require('load-grunt-configs')(grunt, options);

	// Project configuration.
	grunt.initConfig(configs);


	grunt.registerTask('dev', ['less', 'watch']);


	// default option to connect server
	grunt.registerTask('default', [
		'concurrent:dev',
	]);

};
