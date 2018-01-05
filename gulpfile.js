const gulp = require('gulp');
const webserver = require('gulp-webserver');
const path = require('path');
const fs = require('fs');
gulp.task('web', function () {
    gulp.src('.')
    .pipe(webserver({
        host:'localhost',
        port:8080,
        fallback:'index.html'
    }))
});
function gets (res, file) {
    fs.exists(file, function (exist) {
        if (!exist) {
            return;
        }
        fs.readFile(file, function (error, data) {
            if(error) {
                res.end('error');
            } else {
                res.end(data);
            }
        });
    });
}
gulp.task('server', function () {
    gulp.src('.')
    .pipe(webserver({
        host:'localhost',
        port:8008,
        livereload: true,
        middleware:function (req, res, next) {
            var pathname = req.url.split('/')[1];
            var file = path.join(process.cwd(), 'Data', pathname+'.json');
            // console.log(pathname, file)
            res.writeHead(200, {
                "Content-Type":'text/json;charset=utf8',
                "Access-Control-Allow-Origin": "*"
            });
            switch(req.url) {
                case '/index':
                    gets(res, file);
                    break;
                case '/carousel':
                    gets(res, file);
                    break;
            }
        }
    }))
});
gulp.task('default', function () {
    gulp.start(['web', 'server']);
});