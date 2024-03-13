//const gulp = require("gulp");
const { series, src, dest, task, watch } = require("gulp");

const fileinclude = require("gulp-file-include");
const extender = require('gulp-html-extend')
const postcss = require('gulp-postcss');
const tailwindcss = require('tailwindcss');
const concat = require('gulp-concat');
var sass = require('gulp-sass')(require('sass'));


function html(done) {
  return src("./src/*.html")
    .pipe(fileinclude({
      prefix: "@@",
      basepath: "@file"
    }))
    .pipe(extender({annotations:true,verbose:false}))
    .pipe(dest("./dist"));
}

function img() {
  return src("./src/img/**/*.*")
    .pipe(dest("./dist/img"));
}

function css() {
  return src([
    './src/**/*.css',
    './src/**/*.scss'
  ])
  .pipe( postcss([
      require('tailwindcss/nesting'),
      tailwindcss( './tailwind.config.js'),
      require( 'autoprefixer')
    ]),
  )
  .pipe(sass())
  .pipe(concat('style.css'))
  .pipe(dest('./dist/'))
}

function js() {
  return src("./src/**/*.js")
    .pipe(concat("script.js"))
    .pipe(dest("./dist/js/"));
}


task('default', series(html,css,js, img));

watch("src/**/*.{html,js,css,scss,png,svg}", series(html,css,js,img));