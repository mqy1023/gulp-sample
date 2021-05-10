
# gulp 篇

> 核心

**定义任务 -> 输入文件 -> 处理文件 -> 输出 -> 完成任务**


> 常用

开发热编译、浏览器自动刷新、编译css、压缩js


### 插件

#### 一、gulp-autoprefixer

使用gulp-autoprefixer根据设置浏览器版本自动处理浏览器前缀。使用它我们可以不必考虑各浏览器兼容前缀，在写完后再自动处理。


##### gulp-autoprefixer的常用选项

* 1、browsers (array)：浏览器列表


|参数|详解|
|  ----  | ----  |
|last 2 versions|主流浏览器的最新两个版本|
| > 2% |全球统计前2%的使用率的浏览器|

* 2、cascade (boolean): 如果css未压缩，是否美化属性值，默认值为：true

比如：
```css
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
```

* 3、add (boolean): 是否应该加前缀，默认值为：true

* 4、remove (boolean): 是否去掉不必要（过时）的前缀 默认值为：true

#### 二、gulp-load-plugins

是一款批量引入package.json文件中的依赖项工具，有了这个插件您不必在gulfile.js中手动引入每个gulp插件了

##### 引入`gulp-load-plugins`之前：

```javascript
const gulp = require('gulp');
const gulpJshint = require('gulp-jshint');
const gulpConcat = require('gulp-concat');
```

##### 引入`gulp-load-plugins`之后：

```javascript
const gulp = require('gulp');
const plugins = require('gulp-load-plugins')();
const gulpJshint = plugins.jshint;
// 或者直接使用plugins.concat; 
```


