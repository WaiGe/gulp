var gulp = require('gulp'),
    htmlmin = require('gulp-htmlmin'),
    cssmin = require('gulp-minify-css'),
    uglify = require('gulp-uglify');
gulp.task('testHtmlmin', function () {
    var options = {
        removeComments: true,//清除HTML注释
        collapseWhitespace: true,//压缩HTML
        collapseBooleanAttributes: true,//省略布尔属性的值 <input checked="true"/> ==> <input />
        removeEmptyAttributes: true,//删除所有空格作属性值 <input id="" /> ==> <input />
        removeScriptTypeAttributes: true,//删除<script>的type="text/javascript"
        removeStyleLinkTypeAttributes: true,//删除<style>和<link>的type="text/css"
        minifyJS: true,//压缩页面JS
        minifyCSS: true//压缩页面CSS
    };
    gulp.src('views/*.html')
        .pipe(htmlmin(options))
        .pipe(gulp.dest('dist/'));
});


gulp.task('testCssmin', function () {
    gulp.src('css/*.css')
        .pipe(cssmin({
            advanced: true,//类型：Boolean 默认：true [是否开启高级优化（合并选择器等）]
            compatibility: 'ie7',//保留ie7及以下兼容写法 类型：String 默认：''or'*' [启用兼容模式； 'ie7'：IE7兼容模式，'ie8'：IE8兼容模式，'*'：IE9+兼容模式]
            keepBreaks: true,//类型：Boolean 默认：false [是否保留换行]
            keepSpecialComments: '*'
            //保留所有特殊前缀 当你用autoprefixer生成的浏览器前缀，如果不加这个参数，有可能将会删除你的部分前缀
        }))
        .pipe(gulp.dest('dist'));
});

gulp.task('jsmin', function () {
    gulp.src(['js/*.js']) //多个文件以数组形式传入
        .pipe(uglify({mangle: true, compress: true}))
        .pipe(gulp.dest('dist'));
});

gulp.task('default', ['testHtmlmin', 'testCssmin', 'jsmin'], function () {
    
});