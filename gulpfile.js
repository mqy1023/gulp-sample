const { src, dest, series, watch } = require('gulp')
const del = require('del')

const browserSync = require("browser-sync").create()
const reload = browserSync.reload

const plugins = require("gulp-load-plugins")()

// 压缩js uglifyjs
function js(cb) {
  src('js/*.js')
    .pipe(plugins.uglify())
    .pipe(dest('./dist/js'))
    .pipe(reload({ stream: true }))
  cb()
}

// 对scss/less编译，压缩输出css
function css(cb) {
  src('css/*.scss')
    .pipe(plugins.sass({ outputStyle: "compressed" }))
    .pipe(plugins.autoprefixer({
      cascade: false,
      remove: false
    }))
    .pipe(dest("./dist/css"))
    .pipe(reload({ stream: true }))
  cb()
}

// 监听文件的变化
function watcher() {
  watch("js/*.js", js)
  watch("css/*.scss", css)
}

// 删除dist目录
function clean(cb) {
  del('./dist')
  cb()
}

function serve(cb) {
  browserSync.init({
    server: {
      baseDir: "./"
    }
  })
  cb()
}

// tasks
// npx gulp --tasks 查看所有任务
exports.scripts = js
exports.styles = css
exports.clean = clean

exports.default = series([
  clean, js, css, serve
])
