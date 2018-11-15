const gulp = require("gulp"),
  sass = require("gulp-sass"),
  imagemin = require("gulp-imagemin"),
  // image = require('gulp-image'),
  concat = require("gulp-concat"),
  uglify = require("gulp-uglify"),
  rename = require('gulp-rename'),
  Minimize = require('gulp-minimize'),
  stripCssComments = require('gulp-strip-css-comments'),
  // hash = require('gulp-hash'),
  // cache = require('gulp-cache'),
  // htmltidy = require('gulp-htmltidy'),
  autoprefixer = require("gulp-autoprefixer"),
  browserSync = require("browser-Sync").create();

gulp.task("sass", function() {
  gulp
    .src([

         "node_modules/animate.css/animate.css",
         "node_modules/bootstrap/scss/bootstrap.scss",
         "node_modules/font-awesome/scss/font-awesome.scss",
         "src/scss/main.scss",

    ])
    .pipe(
      sass({
        outputStyle: "compressed"
      })
    )

    .pipe(concat( 'main.css'))
    .pipe(stripCssComments())
    .pipe(autoprefixer())
    .pipe(gulp.dest("assets/css"))
    .pipe(browserSync.stream());
});




gulp.task("js", () => {
  gulp.src([

      "src/js/jquery-2.2.4.min.js",
      "node_modules/jquery/dist/jquery.min.js",
      "node_modules/popper.js/dist/umd/popper.min.js",
      "node_modules/bootstrap/dist/js/bootstrap.min.js",
      "src/js/wow.min.js",
      "src/js/app.js"

    ])
    .pipe(concat("main.js"))
    .pipe(uglify())

    .pipe(gulp.dest("assets/js"))
    .pipe(browserSync.stream());
});

gulp.task('html', function() {
	gulp.src('index.html')
	.pipe(Minimize())
	.pipe(rename('index.min.html'))
	.pipe(gulp.dest('.'));
});




// gulp.task('tidy', function() {
//   gulp.src('index.html')
//         .pipe(htmltidy())
//         .pipe(gulp.dest('.'));
// });


// gulp.task('tidy', function() {
//   gulp.src('index.html')
//         .pipe(htmltidy({doctype: 'html5',
//                        hideComments: true,
//                        indent: false}))
//                        .pipe(gulp.dest('.'));
// });



gulp.task("imagemin", () => {
   gulp.src("src/images/*")
    .pipe(imagemin({
      optimizationLevel:10, progressive: true, interlaced: true
    }))
    .pipe(gulp.dest("assets/images"));

});


gulp.task('fonts', function() {
   gulp.src('src/fonts/**/*')
  .pipe(gulp.dest('assets/fonts'))
})

gulp.task("serve", () => {
  browserSync.init({
    server: "./"
  });
  gulp.watch("src/scss/*.scss", ["sass"]);
  gulp.watch("src/images/*.images", ["images"]);
  gulp.watch("src/js/app.js", ["js"]);
  gulp.watch("*.html").on("change", browserSync.reload);
});

gulp.task("default", ["sass", "js", "imagemin", "serve", "html", "fonts"]);

// ,"tidy"
