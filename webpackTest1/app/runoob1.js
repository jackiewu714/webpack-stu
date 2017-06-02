
// document.write("It works.")

//require CSS 文件的时候都要写 loader 前缀 !style!css!  --以前老版本写法
//require CSS 文件的时候都要写 loader 前缀 !style-loader!css-loader!  --新版本写法
// require("!style-loader!css-loader!./style.css");
require("./style.css");

document.write("小苹果 runoob1.js<br/>")

document.write(require("./runoob2.js"));