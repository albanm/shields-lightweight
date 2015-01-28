var gulp = require('gulp');
var deploy = require('gulp-gh-pages');
var exec = require('child_process').exec;
var fs = require('fs');
var lcov2badge = require('lcov2badge');

gulp.task('mkdir-build', function(callback){
	fs.exists('build', function(exists){
		if (!exists) {
			fs.mkdir('build', callback);
		} else {
			callback();
		}
	});
});

///////////////
//Test coverage

gulp.task('test-cover', ['mkdir-build'], function(callback) {
    exec('./node_modules/.bin/istanbul cover --dir ./build/coverage ./node_modules/.bin/_mocha', callback);
});
gulp.task('cover-badge', ['test-cover'], function(callback) {
    lcov2badge.badge('./build/coverage/lcov.info', function(err, svgBadge){
    	if (err) return callback(err);
    	fs.writeFile('./build/coverage/badge.svg', svgBadge, callback);
    });
});

//////////////
//Test results

gulp.task('test-badge', ['mkdir-build'], function(callback) {
  exec('./node_modules/mocha/bin/_mocha --reporter mocha-reporter-badge > build/mocha-badge.svg', callback);
});


////////
// Lint

gulp.task('jshint', function(callback) {
  exec('jshint .', function(err, stdout, stderr){
  	if (err) return callback(err);
  	console.log(stdout);
  	console.log(stderr);
  	callback();
  });
});
gulp.task('jshint-html', ['mkdir-build'], function(callback) {
  exec('jshint . --reporter node_modules/jshint-html-reporter/reporter.js > build/jshint.html', callback);
});
gulp.task('jshint-badge', ['mkdir-build'], function(callback) {
  exec('jshint . --reporter node_modules/jshint-reporter-badge/index.js > build/jshint-badge.svg', callback);
});
gulp.task('lint', ['jshint', 'jshint-html', 'jshint-badge']);

////////////////////////
//Deployment on gh-pages

gulp.task('git-config', function(callback){
	exec('git config --global user.email "alban.mouton@gmail.com" && git config --global user.name "Alban Mouton through Travis-CI"', callback);
});

gulp.task('deploy-build', ['cover-badge', 'git-config'], function() {
	var deployOptions = {
		cacheDir: './build/repos/shields-lightweight'
	};
	if (process.env.githubToken) {
		console.log('"githubToken" environment variable found, use it to authenticate to github');
		deployOptions.remoteUrl = 'https://' + process.env.githubToken + '@github.com/albanm/lcov2badge';
	}
	return gulp.src('./build/**/*')
		.pipe(deploy(deployOptions));
});


gulp.task('default', ['cover-badge', 'test-badge', 'lint']);