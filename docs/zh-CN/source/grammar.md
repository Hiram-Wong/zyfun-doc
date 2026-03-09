# 写源语法

了解语法才能更好的配合工具完成开发流程。

## 1. 深入浅出

### 1.1. 基本认识

#### 1.1.1. dom基础

```js
<div class="items">
  <a class="item" id="1">
    first item
  </a>
  <span class="item" id="2">
    second item
  </span>
  <li class="item" id="3" data-id="123">
    third item
  </li>
</div>
```

- `div a span li`: 通用的容器标签
- `class id data-id`: 属性
  - `class`: 元素类名
  - `id`: 元素提供唯一的标识符
  - `data-id`: 元素提供自定义数据
- 子元素和父元素
  - 父元素: 包含其他元素的元素。例如`<div class="items">`
  - 子元素: 被其他元素包含的元素。例如`<a class="item">`

#### 1.1.2. js基础

::: details 点我展开学习

```js:line-numbers
// 变量
var name = "zy"; // 全局变量, 可重复定义, 可以重复赋值
let age = 25; // 局变量, 不可重复定义, 可以重复赋值
const PI = 3.14; // 局常量, 不可重复定义, 不可重复赋值

// 数据类型
typeof 123; // number
typeof "123"; // string
typeof true; // boolean
typeof null; // object
typeof undefined; // undefined
typeof { name: "zy" }; // object
typeof [1, 2, 3]; // object
typeof function () {}; // function

// 运算符
let a = 5;
let b = 2;
console.log(a + b); // 加法 输出: 7
console.log(a - b); // 减法 输出: 3
console.log(a * b); // 乘法 输出: 10
console.log(a / b); // 除法 输出: 2.5
console.log(a % b); // 取余 输出: 1
console.log(a ** b); // 幂运算 输出: 25

// 比较运算符
// 双等号会先转化为数字再判断, 三等号会额外判断数据类型
console.log(a == b); // 等于 输出: false
console.log(a != b); // 不等于 输出: true
console.log(a > b); // 大于 输出: true
console.log(a < b); // 小于 输出: false
console.log(a >= b); // 大于等于 输出: true
console.log(a <= b); // 小于等于 输出: false

// 字符串
let str = "Hello World!";
console.log(str.length); // 长度 输出: 12
console.log(str.indexOf("World")); // 查找第一个字母下标 输出: 6
console.log(str.slice(6, 11)); // 截取字符串(开始位置, 长度) 输出: World
console.log(str.replace("World", "zy")); // 替换字符串 输出: Hello zy!
console.log(str.toUpperCase()); // 转大写 输出: HELLO WORLD!
console.log(str.toLowerCase()); // 转小写 输出: hello world!
console.log(str.split(" ")); // 字符串分割(分隔字符) 输出: ["Hello", "World!"]

// 数组
let cars = ["BMW", "Volvo", "Saab"];
console.log(cars.length); // 长度 输出 3
console.log(cars[0]); // 访问第一个元素 输出 BMW
cars.push("Audi"); // 添加元素到数组末尾 输出 ["BMW", "Volvo", "Saab", "Audi"]
cars.pop(); // 删除数组末尾元素 输出 ["BMW", "Volvo", "Saab"]
cars.shift(); // 删除数组第一个元素 输出 ["Volvo", "Saab"]
cars.unshift("Audi"); // 添加元素到数组第一个元素 输出 ["Audi", "Volvo", "Saab"]

// 对象
let person = { name: "zy", age: 25, city: "Shanghai" };
console.log(person.name); // 访问对象属性 输出 zy
person.age = 26; // 修改对象属性值 输出 { name: "zy", age: 26, city: "Shanghai" }
delete person.city; // 删除对象属性 输出 { name: "zy", age: 26 }

// 函数
function sayHello() {
  console.log("Hello World!");
}
sayHello(); // 输出 Hello World!

function add(a, b) {
  return a + b;
}
console.log(add(3, 5)); // 输出 8

// 条件语句
let age = 25;
if (age >= 18) {
  console.log("成年人");
} else if (age >= 12) {
  console.log("青少年");
} else {
  console.log("儿童");
} // 输出 成年人

// 循环语句
for (let i = 0; i < 5; i++) {
  console.log(i);
} // 输出 0 1 2 3 4

// 异常处理
try {
  throw "An error!";
} catch (error) {
  console.log(error);
} // 输出 An error!
```

:::

### 1.2. Cheerio

::: code-group

```js:line-numbers [选择器.js]
const cheerio = require('cheerio');
const html = `
<div id="container">
  <ul class="list">
    <li class="item-0">first item</li>
  </ul>
</div>
`;
const $ = cheerio.load(html);
console.log($('#container .list li').text()); // 输出嵌套的 <li> 元素的内容

// 输出内容
// first item
```

```js:line-numbers [子元素.js]
const cheerio = require('cheerio');
const html = `
<div id="container">
  <ul class="list">
    <li class="item-0">first item</li>
    <li class="item-1"><a href="link2.html">second item</a></li>
    <div class="item-2 active"><a href="link3.html"><span class="bold">third item</span></a></div>
  </ul>
</div>
`;
const $ = cheerio.load(html);
const items = $('.list');
// 查找所有 <li> 子元素
items.find('li').each((index, element) => console.log($(element).html()));
// 查找所有子元素
items.children().each((index, element) => console.log($(element).html()));
// 查找所有子元素中带有 class="active" 的元素
items.children('.active').each((index, element) => console.log($(element).html()));
// 查找第二个子元素
items.children().eq(1).each((index, element) => console.log($(element).html()));

// 输出内容
// first item
// <a href="link2.html">second item</a>

// first item
// <a href="link2.html">second item</a>
// <a href="link3.html"><span class="bold">third item</span></a>

// <a href="link3.html"><span class="bold">third item</span></a>

// <a href="link2.html">second item</a>
```

```js:line-numbers [父元素.js]
const cheerio = require('cheerio');
const html = `
<div id="container">
  <ul class="list">
    <li class="item-0">first item</li>
    <li class="item-1"><a href="link2.html">second item</a></li>
    <li class="item-2 active"><a href="link3.html"><span class="bold">third item</span></a></li>
    <li class="item-3 active"><a href="link4.html">fourth item</a></li>
    <li class="item-4"><a href="link5.html">fifth item</a></li>
  </ul>
</div>
`;
const $ = cheerio.load(html);
const items = $('.list');
console.log(items.parent().html()); // 查找父元素

// 输出内容
// <div id="container">
//  <ul class="list">
//    <li class="item-0">first item</li>
//    <li class="item-1"><a href="link2.html">second item</a></li>
//    <li class="item-2 active"><a href="link3.html"><span class="bold">third item</span></a></li>
//    <li class="item-3 active"><a href="link4.html">fourth item</a></li>
//    <li class="item-4"><a href="link5.html">fifth item</a></li>
//  </ul>
// </div>
```

```js:line-numbers [祖先元素.js]
const cheerio = require('cheerio');
const html = `
<div class="wrap">
  <div id="container">
    <ul class="list">
      <li class="item-0">first item</li>
      <li class="item-1"><a href="link2.html">second item</a></li>
      <li class="item-2 active"><a href="link3.html"><span class="bold">third item</span></a></li>
      <li class="item-3 active"><a href="link4.html">fourth item</a></li>
      <li class="item-4"><a href="link5.html">fifth item</a></li>
    </ul>
  </div>
</div>
`;
const $ = cheerio.load(html);
const items = $('.list');
console.log(items.parents().html()); // 查找所有祖先元素
console.log(items.parents('.wrap').html()); // 查找带有 class="wrap" 的祖先元素

// 输出内容
// <ul class="list">
//   <li class="item-0">first item</li>
//   <li class="item-1"><a href="link2.html">second item</a></li>
//   <li class="item-2 active"><a href="link3.html"><span class="bold">third item</span></a></li>
//   <li class="item-3 active"><a href="link4.html">fourth item</a></li>
//   <li class="item-4"><a href="link5.html">fifth item</a></li>
// </ul>

// <div class="wrap">
//   <div id="container">
//     <ul class="list">
//       <li class="item-0">first item</li>
//       <li class="item-1"><a href="link2.html">second item</a></li>
//       <li class="item-2 active"><a href="link3.html"><span class="bold">third item</span></a></li>
//       <li class="item-3 active"><a href="link4.html">fourth item</a></li>
//       <li class="item-4"><a href="link5.html">fifth item</a></li>
//     </ul>
//   </div>
// </div>
```

```js:line-numbers [兄弟元素.js]
const cheerio = require('cheerio');
const html = `
<div class="wrap">
  <div id="container">
    <ul class="list">
      <li class="item-0">first item</li>
      <li class="item-1"><a href="link2.html">second item</a></li>
      <li class="item-2 active"><a href="link3.html"><span class="bold">third item</span></a></li>
      <li class="item-3 active"><a href="link4.html">fourth item</a></li>
      <li class="item-4"><a href="link5.html">fifth item</a></li>
    </ul>
  </div>
</div>
`;
const $ = cheerio.load(html);
const li = $('.list .item-2.active');
// 查找所有兄弟元素
li.siblings().each((index, element) => console.log($(element).html()));
// 查找带有 class="active" 的兄弟元素
li.siblings('.active').each((index, element) => console.log($(element).html()));

// 输出内容
// first item
// <a href="link2.html">second item</a>
// <a href="link4.html">fourth item</a>
// <a href="link5.html">fifth item</a>

// <a href="link4.html">fourth item</a>
```

```js:line-numbers [遍历.js]
const cheerio = require('cheerio');
const html = `
<div class="wrap">
  <div id="container">
    <ul class="list">
      <li class="item-0">first item</li>
      <li class="item-1"><a href="link2.html">second item</a></li>
      <li class="item-2 active"><a href="link3.html"><span class="bold">third item</span></a></li>
      <li class="item-3 active"><a href="link4.html">fourth item</a></li>
      <li class="item-4"><a href="link5.html">fifth item</a></li>
    </ul>
  </div>
</div>
`;
const $ = cheerio.load(html);
$('.list li').each((index, element) => {
  console.log($(element).html()); // 遍历所有 <li> 元素
});

// 输出内容
// first item
// <a href="link2.html">second item</a>
// <a href="link3.html"><span class="bold">third item</span></a>
// <a href="link4.html">fourth item</a>
// <a href="link5.html">fifth item</a>
```

```js:line-numbers [获取属性.js]
const cheerio = require('cheerio');

const html = `
<div class="wrap">
  <div id="container">
    <ul class="list">
      <li class="item-0">first item</li>
      <li class="item-1"><a href="link2.html">second item</a></li>
      <li class="item-2 active"><a href="link3.html">fourth-item<i>123</i><font>456</font></a></li>
      <li class="item-3 active"><a href="link4.html"><span class="bold">third item</span></a></li>
      <li class="item-4"><a href="link5.html">fifth item</a></li>
    </ul>
  </div>
</div>
`;
const $ = cheerio.load(html);
const a = $('.item-2.active a');
console.log(a.attr('href')); // 获取属性值
console.log(a.text()); // 获取文本内容
console.log(a.contents().filter(function () {
  return this.nodeType === 3; // 筛选文本节点
}).text()); // 获取纯文本内容，排除子元素
console.log(a.clone().find('font').remove().end().text()); // 移除 <font> 元素后获取文本内容
console.log(a.html()); // 获取内部 HTML 内容
console.log(a.prop('outerHTML')); // 获取外部 HTML 内容

// 输出内容
// link3.html
// fourth-item123456
// fourth-item
// fourth-item123
// fourth-item<i>123</i><font>456</font>
// <a href="link3.html">fourth-item<i>123</i><font>456</font></a>
```

:::

### 1.3. pd规则

- pdfa: 获取属性值
- pdfh: 获取列表

::: code-group

```js:line-numbers [pdfh.js]
const html = `
<div class="wrap">
  <div id="container">
    <ul class="list">
      <li class="item-0">first item</li>
      <li class="item-1"><a href="link2.html">second item</a></li>
      <li class="item-2 active"><a href="link3.html">fourth-item<i>123</i><font>456</font></a></li>
      <li class="item-3 active"><a href="link4.html"><span class="bold">third item</span></a></li>
      <li class="item-4"><a href="link5.html">fifth item</a></li>
    </ul>
  </div>
</div>
`;
console.log(pdfh(html, '.item-2 a&&href')); // 获取属性值 href
console.log(pdfh(html, '.item-2&&Text')); // 获取文本内容 Text
console.log(pdfh(html, '.item-2--i--font&&Text')); // 获取纯文本内容，排除 <i> 和 <font>子元素
console.log(pdfh(html, '.item-2--font&&Text')); // 移除 <font> 元素后获取文本内容
console.log(pdfh(html, '.item-2 a')); // 获取内部 HTML 内容
console.log(pdfh(html, '.item-2')); // 获取外部 HTML 内容

// 输出
// link3.html
// fourth-item123456
// fourth-item
// fourth-item123
// <a href="link3.html">fourth-item<i>123</i><font>456</font></a>
// <li class="item-2 active"><a href="link3.html">fourth-item<i>123</i><font>456</font></a></li>
```

```js:line-numbers [pdfa.js]
const html = `
<div class="wrap">
  <div id="container">
    <ul class="list">
      <li class="item-0">first item</li>
      <li class="item-1"><a href="link2.html">second item</a></li>
      <li class="item-2 active"><a href="link3.html">fourth-item<i>123</i><font>456</font></a></li>
      <li class="item-3 active"><a href="link4.html"><span class="bold">third item</span></a></li>
      <li class="item-4"><a href="link5.html">fifth item</a></li>
    </ul>
  </div>
</div>
`;
console.log(pdfa(html, '#container ul.list li')); // 获取所有li元素

// 输出
[
  "<li class="item-0">first item</li>",
  "<li class="item-1"><a href="link2.html">second item</a></li>",
  "<li class="item-2 active"><a href="link3.html">fourth-item<i>123</i><font>456</font></a></li>",
  "<li class="item-3 active"><a href="link4.html"><span class="bold">third item</span></a></li>",
  "<li class="item-4"><a href="link5.html">fifth item</a></li>"
]
```

:::

## 2. 模板规则

### 2.1. drpy

[文档](https://github.com/hjdhnx/drpy-node/blob/main/docs/ruleDesc.md)

#### 2.1.1. 属性说明

```js:line-numbers
var rule = {
  类型: "影视", // 影视|听书|漫画|小说
  title: "", // 规则标题
  编码: "", // 默认utf-8
  搜索编码: "", // 默认utf-8, 优先于全局编码属性, 比如网页源码编码是gbk, 这里指定utf-8搜索独立编码
  host: "", // 网页的域名根, 包含http头如 https://www,baidu.com
  hostJs: 'let html=request(HOST,{headers:{"User-Agent":PC_UA}});let src = jsp.pdfh(html,"ul&&li&&a&&href");HOST=src.replace("/index.php","")', // 网页域名根动态抓取js代码, 通过HOST=赋值
  homeUrl: "/latest/", // 网站的首页链接, 可以是完整路径或相对路径, 用于推荐获取 fyclass是分类标签 fypage是页数
  url: "/fyclass/fypage.html[/fyclass/]", // 网站的分类页面链接, 可以是完整路径或相对路径, 用于分类获取 fyclass是分类标签 fypage是页数
  detailUrl: "https://yanetflix.com/voddetail/fyid.html", // 非必填, 二级详情拼接链接
  searchUrl: "", // 搜索链接 可以是完整路径或者相对路径, 用于搜索获取 **代表搜索词 fypage代表页数
  searchable: 0, // 是否启用全局搜索,
  quickSearch: 0, // 是否启用快速搜索,
  filterable: 0, // 是否启用筛选,
  filter: {}, // 筛选条件字典
  // 默认筛选条件字典(不同分类可以指定同样筛选参数的不同默认值)
  filter_def: {
    douyu: {
      area: "一起看",
      other: "..",
    },
    huya: {
      area: "影音馆",
      other: "..",
    },
  },
  // 筛选网站传参,会自动传到分类链接下(本示例中的url参数)-url里参数为fyfilter
  filter_url: "style={{fl.style}}&zone={{fl.zone}}&year={{fl.year}}&fee={{fl.fee}}&order={{fl.order}}",
  headers: {
    "User-Agent": "MOBILE_UA",
    Cookie: "searchneed=ok",
  },
  hikerListCol:"avatar", // [海阔专属]一级列表样式
  hikerClassListCol:"avatar", // [海阔专属]推荐列表样式
  timeout: 5000, // 默认3000毫秒
  class_name: "电影&电视剧&动漫&综艺", // 静态分类名称拼接(&分隔)
  class_url: "1&2&3&4", // 静态分类标识拼接(&分隔)
  class_parse: "#side-menu:lt(1) li;a&&Text;a&&href;com/(.*?)/", // 动态分类获取 列表;标题;链接;正则提取 不需要正则的时候后面别加分号
  cate_exclude: "", // 除开全局过滤之外还需要过滤哪些标题不视为分类
  tab_exclude: "", // 除开全局动态线路名过滤之外还需要过滤哪些线路名标题不视为线路
  tab_remove: ["tkm3u8"], // 移除某个线路及相关的选集
  tab_order: ["lzm3u8", "wjm3u8", "1080zyk", "zuidam3u8", "snm3u8"], // 线路顺序, 按里面的顺序优先, 没写的依次排后面
  //线路名替换如: lzm3u8替换为量子资源
  tab_rename: {
    lzm3u8: "量子",
    1080zyk: "1080看",
    zuidam3u8: "最大资源",
    kuaikan: "快看",
    bfzym3u8: "暴风",
    ffm3u8: "非凡",
    snm3u8: "索尼",
    tpm3u8: "淘片",
    tkm3u8: "天空",
  },
  play_parse: true, // 服务器解析播放
  // play_json　传数组或者　类　true/false 比如 0,1 如果不传会内部默认处理 不传和传0可能效果不同
  // 效果等同说明: play_json:[{re:'*', json:{jx:0, parse:1}}], 等同于 play_json:0,
  play_json: [
    {
      re: "*",
      json: {
        jx: 1,
        parse: 1,
      },
    },
  ],
  pagecount: { "1": 1, "2": 1, "3": 1, "4": 1, "5": 1, "7": 1 }, // 控制不同分类栏目总页数, 默认999
  lazy: "", // 自定义免嗅
  limit: 6, // 首页推荐显示数量
  double: true, //是否双层列表定位,默认false
  图片来源: "@Referer=http://www.jianpianapp.com@User-Agent=jianpian-version350", // 对图片加请求头, 海阔专用, 普通规则请勿填写此键值
  图片替换: "https://www.keke6.app/=>https://vres.a357899.cn/", // 替换图片链接, 原文本=>目的文本
  // js写法，仅js模式1有效.可以用于代码动态获取全局cookie之类的
  // 可操作变量有 rule_fetch_params,rule,以及基础的网页访问request,post等操作
  预处理: 'rule_fetch_params.headers.Cookie = "xxxx";',
  // 类似海阔一级 列表;标题;图片;描述;链接;详情 其中最后一个参数选填
  // 如果是双层定位的话, 推荐的第2段分号代码也是第2层定位列表代码
  推荐: ".col-sm-6;h3&&Text;img&&data-src;.date&&Text;a&&href",
  一级: ".col-sm-6;h3&&Text;img&&data-src;.date&&Text;a&&href", // 类似海阔一级 列表;标题;图片;描述;链接;详情 其中最后一个参数选填
  二级访问前: 'let jump=request(MY_URL).match(/href="(.*?)"/)[1];log(jump);MY_URL=urljoin2(MY_URL,jump)', // 二级发起前处理逻辑。解决特殊情况一级给出的链接非二级真实源码而是前端重定向链接的源码
  // 二级 *表示规则无二级,直接拿一级的链接进行嗅探
  // 二级 title: 片名;类型
  // 二级 desc: 主要信息;年代;地区;演员;导演
  // 或者 { title:'',img:'',desc:'',content:'',tabs:'',lists:'',tab_text:'body&&Text',list_text:'body&&Text',list_url:'a&&href'} 同海阔dr二级
  二级: "*",
  搜索: "*", // 搜索可以是*,集成一级，或者跟一级一样的写法 列表;标题;图片;描述;链接;详情
  proxy_rule: `js:
    input = [200, 'text;plain', 'hello drpy']
  `, // 本地代理规则，可用于修改m3u8文件文本去广告后返回代理文件地址，也可以代理加密图片
  sniffer: 1, //是否启用辅助嗅探: 1,0
  isVideo: "http((?!http).){26,}\\.(m3u8|mp4|flv|avi|mkv|wmv|mpg|mpeg|mov|ts|3gp|rm|rmvb|asf|m4a|mp3|wma)", // 辅助嗅探规则
  // 辅助嗅探规则js写法
  isVideo: `js:
    if (/m3u8/.test(input)) {
      input = true
    } else {
      input = false
    }
  `,
};

```

#### 2.1.2. 模板继承

`mxpro` `mxone5` `首图` `首图2` `默认` `vfed` `海螺3` `海螺2` `短视` `短视2` `采集1`

##### 2.1.2.1. 老

```js
var rule = Object.assign(muban.mxpro, {
  title: 'netflix',
  host: 'https://yanetflix.com',
  url: '/index.php/vod/show/id/fyclass/page/fypage.html',
  class_parse: `.navbar-items li:gt(1):lt(6);a&&Text;a&&href;.*/(.*?).html`
})
```

##### 2.1.2.2. 新

```js
var rule = {
  title: 'cokemv',
  模板: 'mxpro',
  host: 'https://cokemv.me',
  class_parse: `.navbar-items li:gt(1):lt(7);a&&Text;a&&href;/(\\d+).html`
}
```

##### 2.1.2.3. 自动匹配

> 注意事项: 自动匹配只支持能从HOST获取分类模板站,`采集1`, `短视2`等api的模板无法匹配

```js
var rule = {
  模板: '自动',
  模板修改: $js.toString(() => {
    Object.assign(muban.自动.二级, {
      tab_text: 'div--small&&Text'
    })
  }),
  title: 'jqqzx',
  host: 'https://www.jqqzx.cc/',
  url: '/vodshow/id/fyclass/page/fypage.html',
  searchUrl: '/vodsearch**/page/fypage.html',
  class_parse: '.navbar-items li:gt(2):lt(8);a&&Text;a&&href;.*/(.*?)\.html',
  cate_exclude: '今日更新|热榜'
}
```

#### 2.1.3. 正则说明

- 属性class_parse按;分隔后取[3]为分类的正则字符串。这里的正则跟js的`/.*/`这种写法相比, 由于是字符串, 需要实现字符串标准
  - 如想实现`/(\d+)/`那么字符串写法为`(\\d+)`
  - 原理是`new RegExp('(\\d+)') = /(\d+)/`
- 属性lazy由于是纯js代码实现, 不存在正则转义问题。
- 属性对应值如果是字符串, 可以反引号``包起来, 避免内部出现单双引号混用等需转义问题

#### 2.1.4. js:内置变量

`input` `html` `VODS` `VOD` `TABS` `LISTS` `MY_CATE` `MY_FL` `getProxyUrl`

#### 2.1.5. 本地代理

proxy_rule参数赋值格式为三元素列表`[响应码, 响应头, 响应体]`

```js
input = [200, 'application/vnd.apple.mpegurl', 'm3u8分片']
```

#### 2.1.6. rsa加解密

```js
RSA.encode(data, key, option)
RSA.decode(data, key, option)
```

### 2.2. drpyS

[文档](https://github.com/hjdhnx/drpy-node/blob/main/docs/ruleAttr.md)

#### 2.2.1. 属性说明

```js:line-numbers
var rule = {
  类型: '影视', // [可选]类型, 影视(默认)|漫画|小说
  title: 'xxx', // 源标题, 无实际作用
  host: 'https://www.xx.com', // [可选]源主域名, 默认为''
  homeUrl: '', // [可选]源主页链接, 作为推荐的this.input, 默认为''
  class_name: '电视剧&电影&动漫', // [可选]静态分类名称拼接, &分隔, 默认为''
  class_url: '2&1&3', // [可选]静态分类标识拼接, &分隔, 默认为''
  cate_exclude: '首页|更多', // [可选]过滤分类, |分隔, 默认为''
  url: '/show/fyclass-------fypage---.html?fyfilter', // [可选]源一级列表链接, fyclass标识分类id｜fypage标识页数｜fyfilter标识筛选, 默认为''
  filter_url: 'fyclass-{{fl.area}}--{{fl.class}}-----fypage---{{fl.year}}', // [可选]筛选链接, {{fl.xxx}}标识筛选条件(其中xxx为筛选属性)
  filter_json: { area: '1', class: '2', year: '3' }, // [可选]筛选分类映射表, 可以是object也可以是gzip后的字符串
  filter_def: {
    douyu: {
      area: "一起看",
      other: "..",
    },
    huya: {
      area: "影音馆",
      other: "..",
    },
  }, // [可选]默认筛选条件字典(不同分类可以指定同样筛选参数的不同默认值)
  filter: '', // [可选]筛选数据, 可以是object也可以是gzip后的字符串
  searchUrl: '/nk/**----------fypage---.html', // [可选]源搜索链接, **标识搜索词｜fypage标识页数, 默认为''
  searchable: 1, // [可选]搜索, 0标识不启用(默认)｜1标识启用
  quickSearch: 0, // [可选]快搜, 0标识不启用(默认)｜1标识启用
  filterable: 1, // [可选]筛选, 0标识不启用(默认)｜1标识启用
  headers: {
    // 源请求带请求头, 完整支持所有的, 常带ua和cookies
    // 调用await request如果参数二不填会自动添加
    "User-Agent": "MOBILE_UA", // 内置 MOBILE_UA｜PC_UA｜UA｜UC_UA｜IOS_UA, 也可自行设置
    Cookie: "drpys=nb",
  }, // [可选] 默认为{}
  tab_exclude: '更多|APP专属', // [可选]过滤线路, |分隔, 默认为''
  tab_remove: ['tkm3u8'], // [可选]移除线路及相关的选集
  tab_order: ['lzm3u8', 'zuidam3u8'], // [可选]线路顺序, 按里面的顺序优先, 没写的依次排后面
  tab_rename: { lzm3u8: '量子', kuaikan: '快看' }, // [可选]静态线路名替, 换如: lzm3u8->量子资源
  timeout: 5000, // [可选]接口访问超时时间, 默认5000
  play_parse: true, // [可选]调用免嗅lazy函数, false标识不启用(默认)｜true标识启用
  double: true, // [可选]双层列表定位, false标识不启用(默认)｜true标识启用
  hostJs: async function () {
    // [可选] 动态抓域名函数, 优先级最高, 会影响后续相对链接, 只返回域名, 不要做其他事情
    // this只能使用function函数, 不能使用箭头函数
    // HOST标识homeUrl
    const { HOST } = this;

    // 如下为至少返回的参数
    return HOST // 返回域名
  },
  预处理: async function () {
    // 优先级略低于hostJs, 只会在源初始化的时候执行一次, 可可以用于动态获取cookie等
    // this只能使用function函数, 不能使用箭头函数
  },
  lazy: async function (flag, id, flags) {
    // [可选] 免嗅函数, 用于处理懒加载, 一般用于m3u8文件
    // flag标识线路名｜id标识唯一特征｜flags一般忽略
    // this只能使用function函数, 不能使用箭头函数
    // flag=MY_FLAG标识线路名｜input=MY_URL标识系统处理后的url｜HOST标识rule.host｜fetch_params标识深拷贝rule.rule_fetch_params
    // pdfa, pdfh, pd, pjfh, pjfa, pj 为系列处理函数
    const { MY_FLAG, flag, input, MY_URL, HOST, fetch_params, pdfa, pdfh, pd, pjfh, pjfa, pj } = this;

    // 如下为至少返回的参数
    // url: 播放地址, parse: 0标识不嗅探｜1标识嗅探
    return { url: input, parse: 0 }
  },
  class_parse: async function () {
    // [可选] 动态分类处理逻辑部分, 一般和静态分类(class_name & class_url)一级静态筛选(filter & filter_url)二选一
    // input=MY_URL标识系统处理后的url｜HOST标识rule.host｜classes标识系统处理后分类｜filters标识rule.filter｜cate_exclude标识rule.cate_exclude｜home_flag标识home_flag｜fetch_params标识深拷贝rule.rule_fetch_params
    // pdfa, pdfh, pd, pjfh, pjfa, pj 为系列处理函数
    const { input, MY_URL, HOST, classes, filters, cate_exclude, home_flag, fetch_params, pdfa, pdfh, pd, pjfh, pjfa, pj } = this;

    // 如下为至少返回的参数
    // class: [{type_name: '', type_id: ''}]｜filters: {}
    return { class: [{ type_name: '', type_id: '' }], filters: {} }
  },
  推荐: async function (tid, pg, filter, extend) {
    // [可选] 首页推荐处理逻辑部分
    // tid标识分类标识｜pg标识页数｜filter标识筛选｜extend标识扩展
    // input=MY_URL标识系统处理后的url｜HOST标识rule.host｜double标识双重定位｜fetch_params标识深拷贝rule.rule_fetch_params
    // pdfa, pdfh, pd, pjfh, pjfa, pj 为系列处理函数
    const { input, MY_URL, HOST, double, fetch_params, pdfa, pdfh, pd, pjfh, pjfa, pj } = this;

    // 设置结果方式任选其一, 如下为至少返回的参数
    // 返回方式1
    return [{vod_id: 1, vod_name: 'xxx', vod_remarks: '', vod_pic: 'https://xx.xx.xx/xx.png', ... }]
    // 返回方式2
    return setResult([{url: 1, title: 'xxx', desc: '', pic_url: 'https://xx.xx.xx/xx.png'}])
  },
  一级: async function (tid, pg, filter, extend) {
    // 一级列表处理逻辑部分
    // tid标识分类标识｜pg标识页数｜filter标识筛选｜extend标识扩展
    // MY_CATE标识分类标识｜MY_FL标识扩展｜input=MY_URL标识系统处理后的url｜HOST标识rule.host｜MYPAGE标识页数｜fetch_params标识深拷贝rule.rule_fetch_params
    // pdfa, pdfh, pd, pjfh, pjfa, pj 为系列处理函数
    const { MY_CATE, MY_FL, input, MY_URL, HOST, MY_PAGE, fetch_params, pdfa, pdfh, pd, pjfh, pjfa, pj } = this;

    // 设置结果方式任选其一, 如下为至少返回的参数
    // 返回方式1
    return [{vod_id: 1, vod_name: 'xxx', vod_remarks: '', vod_pic: 'https://xx.xx.xx/xx.png', ... }]
    // 返回方式2
    return setResult([{url: 1, title: 'xxx', desc: '', pic_url: 'https://xx.xx.xx/xx.png'}])
  },
  二级: async function (ids) {
    // 详情处理逻辑部分
    // ids标识一级列表id, 类型为数组
    // input=MY_URL标识系统处理后的url｜vid=orId标识ids[0]或按$分隔取1｜fyclass标识id按$分隔取0｜HOST标识rule.host｜detailUrl标识rule.detailUrl｜fetch_params标识深拷贝rule.rule_fetch_params
    // pdfa, pdfh, pd, pjfh, pjfa, pj 为系列处理函数
    const { input, vid, orId, fyclass, MY_URL, HOST, fetch_params, pdfa, pdfh, pd, pjfh, pjfa, pj } = this;

    // 如下为至少返回的参数
    return { vod_play_from: 'xxx', vod_play_url: 'xxx', ... }
  },
  搜索: async function (wd, quick, pg) {
    // 搜索处理逻辑部分
    // wd标识搜索词｜quick标识是否快搜｜pg标识页数
    // this只能使用function函数, 不能使用箭头函数
    // MY_PAGE标识页数｜KEY标识搜索词｜input=MY_URL标识系统处理后的url｜HOST标识rule.host｜detailUrl标识rule.detailUrl｜fetch_params标识深拷贝rule.rule_fetch_params
    // pdfa, pdfh, pd, pjfh, pjfa, pj 为系列处理函数
    const { MY_PAGE, KEY, input, MY_URL, HOST, detailUrl, fetch_params, pdfa, pdfh, pd, pjfh, pjfa, pj } = this;

    // 设置结果方式任选其一, 如下为至少返回的参数
    // 返回方式1
    return [{vod_id: 1, vod_name: 'xxx', vod_remarks: '', vod_pic: 'https://xx.xx.xx/xx.png', ... }]
    // 返回方式2
    return setResult([{url: 1, title: 'xxx', desc: '', pic_url: 'https://xx.xx.xx/xx.png'}])
  },
  proxy_rule: async function (params) {
    // [可选] 代理规则处理逻辑部分
    // params标识参数url传入参数

    // 如下为至少返回的参数
    // [状态码, 响应头, 响应内容];
    return [200, "text/text", m3u8];
  },
  action: async function (action, value) {
    // [可选] 动作处理逻辑部分, 部分壳子支持

    // 返回值需字符串, 设置结果方式任选其一
    // 返回方式1
    return JSON.stringify({
      action: {
        actionId: 'quarkCookieError', // 动作类型
        id: 'cookie', // 标识
        type: 'input', // 类型
        title: '夸克Cookie', // 标题
        width: 300, // 宽度
        button: 0, // 0:关闭按钮 1:取消按钮 2:确定和取消 3.确定、取消、重置 4.确定、取消、重置、预览
        imageUrl: 'https://preview.qiantucdn.com/xxx.png', // 图片地址
        imageHeight: 200, // 图片高度
        imageType: 'card_pic_3', // 图片类型
        msg: '扫码超时,请重进' // 提示信息
      }
    });
    // 返回方式 2
    return '我收到了...'
  }
}
```

#### 2.2.2. 内置参数

```ts:line-numbers
const sandbox = {
  console, // 日志打印, 同 console
  WebAssembly, // 允许使用原生 WebAssembly(这里即使不引用也可以在沙箱里用这个变量。写在这里骗骗自己吧)
  setTimeout, // 延时器, 同 setTimeout
  setInterval, // 定时器, 同 setInterval
  clearTimeout, // 清理延时器, 同 clearTimeout
  clearInterval, // 清理定时器, 同 clearInterval
  TextEncoder, // 编码器, 同 TextEncoder
  TextDecoder, // 解码器, 同 TextDecoder
  performance, // 高精度时间, 同 performance
}

const utilsSanbox = {
  sleep(ms: number), // 延时函数
  sleepSync(ms: number), // 延时函数同步
  utils, // 提供方法sleep｜sleepSync｜computeHash｜deepCopy｜urljoin｜urljoin2｜joinUrl｜naturalSort｜$js|getTitleLength|getNowTime|keysToLowerCase|updateQueryString|naturalSortAny
  misc, // 提供方法rand｜randStr｜randUUID｜randMAC｜randDevice｜randDeviceWithId｜MOBILE_UA｜PC_UA｜UA｜UC_UA｜IOS_UA｜MAC_UA｜formatPlayUrl｜formatPlayUrl2｜stripHtmlTag｜fixUrl｜jsonParse
  computeHash(content: string), // 计算hash
  deepCopy(obj: Object), // 深拷贝, 同lodash.cloneDeep
  urljoin(fromPath: string, nowPath: string), // 拼接url
  urljoin2, // 拼接url, 同urljoin
  joinUrl, // 拼接url, 同urljoin
  naturalSort(arr: Array, key: string, customOrder: Array = []), // 自然排序
  $js, // 提供toString(func)方法, 函数转字符串
  $, // 沙箱全局变量
  pupWebview, // puppeteer对象, 提供gotoHtml(config)｜ gotoCookie(config)｜type(selector, text, options = {})｜gotoclick(selector)｜pdf(path, options = {})｜getTitle()｜getUrl()｜evaluate(fn, ...args)｜gotoText(selector)｜gotoAttribute(selector, attribute)｜waitForSelector(selector, options = {})｜close()
  getProxyUrl, // 代理url
  hostUrl, // 主域名
  fServer, // 服务器
  getContentType(filePath: string), // 根据文件路径或名称的后缀获取 Content-Type
  getMimeType(ext: string), // 根据扩展名返回 MIME 类型
  getParsesDict(host: string) // 该函数根据提供的主机地址，从配置文件中读取解析信息并返回一个解析对象的数组
}

const drpySanbox = {
  jsp, // jsoup对象
  pdfh(html: string, parse: string, base_url: string = ''), // 获取 HTML 指定属性或者文本
  pd(html: string, parse: string, base_url: string = ''), // 处理 HTML 内容并解析为指定格式
  pdfa(html: string, parse: string), // 将 HTML 内容解析为数组
  jsoup, // jsoup对象
  pdfl(html: string, parse: string, list_text: Array, list_url: Array, url_key: string),
  pjfh(html: string, parse: string, addUrl: boolean = false), // 将 HTML 内容解析为指定格式
  pj(html: string, parse: string), // 将 HTML 内容解析为对象
  pjfa(html: string, parse: string), //将 HTML 内容解析为指定格式
  pq(html: string), // 将 HTML 字符串转换为 jsoup 对象
  local, // 提供方法 get(storage, key)｜set(storage, key, val)｜delete(storage, key)
  md5X(text: string), // md5
  rsaX(mode: string, pub: boolean, encrypt: boolean, input: string|Buffer, inBase64: boolean, key: string, outBase64: string|Buffer), // rsa
  aesX(mode: string, encrypt: boolean, input: string, inBase64: boolean, key: string, iv: string|null, outBase64: string|Buffer), // aes
  desX(mode: string, encrypt: boolean, input: string, inBase64: boolean, key: string, iv: string|null, outBase64: string|Buffer), // des
  req(url: string, obj: Object), // 网络请求, 基于 http及https
  _fetch, // 网络请求, 同fetch
  XMLHttpRequest, // 网络请求, 同xhr
  simplecc, // 语法解析, 同simplecc-wasm
  AIS, // ai模块, 提供 spark, deepseek, kimi
  batchFetch, // 批量请求
  JSProxyStream, // 代理流
  JSFile(path: string), // 提供方法 path[原始路径]｜open[打开]｜read[异步读取]｜write(arraybuffer: ArrayBuffer, position: number)[数据写入指定位置]｜flush[刷新缓冲区到磁盘]｜close[关闭]｜move(newPath: string)[移动]｜copy(newPath: string)[复制]｜delete[删除]｜exist[存在检测]｜size[文件大小]
  js2Proxy(dynamic: boolean, siteType: string, site: string, url: string, headers: Object), // 将动态参数和请求信息转换为代理 URL
  log(..args), // 日志, 同console.log
  print(..args), // 日志, 同console.log
  jsonToCookie(json: Object), // 将 JSON 对象转换为 cookie 字符串
  cookieToJson(cookieString: string), // 将 cookie 字符串转换回 JSON 对象
  runMain(main_func_code: string, arg: any), // 运行主函数
};

const drpyCustomSanbox = {
  MOBILE_UA, // 安卓手机ua, 默认值 'Mozilla/5.0 (Linux; Android 11; Pixel 5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.91 Mobile Safari/537.36';
  PC_UA, // 桌面chrome ua, 默认值 Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.54 Safari/537.36';
  UA, // Mozilla ua, 默认值 'Mozilla/5.0';
  UC_UA, // uc手机ua, 默认值 'Mozilla/5.0 (Linux; U; Android 9; zh-CN; MI 9 Build/PKQ1.181121.001) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/57.0.2987.108 UCBrowser/12.5.5.1035 Mobile Safari/537.36';
  IOS_UA, // 苹果手机ua, 默认值 'Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1';
  RULE_CK, // 源cookie的key值, 默认值 'cookie'
  CATE_EXCLUDE, // 分类排除, 默认值 '首页|留言|APP|下载|资讯|新闻|动态'
  TAB_EXCLUDE, // 线路名排除, 默认值 '猜你|喜欢|下载|剧情|榜|评论'
  OCR_RETRY, // OCR识别失败重试次数, 默认值 3
  OCR_API, // OCR接口地址, 默认值 'https://api.nn.ci/ocr/b64/text'
  nodata, // 无数据返回值
  SPECIAL_URL, // 正则表达式判断是否为特殊链接, 默认值 /^(ftp|magnet|thunder|ws):/
  setResult(d: Array), //  设置结果函数，将输入数据转换为特定格式的数组
  setHomeResult(res: Object), // 设置主页结果, 同setResult
  setResult2(res: Object), // 设置结果并返回结果列表
  urlDeal(vipUrl: string), // url处理
  tellIsJx(url: string), // 判断是否需要解析
  urlencode(str: string), // 将base64编码进行url编译
  encodeUrl(str: string), // url编码, 同encodeURI
  uint8ArrayToBase64(uint8Array: Uint8Array), // 将 Uint8Array 转换为 Base64 编码的字符串
  Utf8ArrayToStr(array: Uint8Array), // 将 UTF-8 编码的字节数组转换为字符串
  gzip(str: string), // gzip编码
  ungzip(str: string), // gzip解码
  encodeStr(input: string, encoding: string), // 字符串按指定编码
  decodeStr(input: string, encoding: string), // 字符串指定解码
  getCryptoJS(), // 装载CryptoJS, 无实际作用
  RSA, // rsa, 提供方法 encode(data, key, option)｜decode(data, key, option)
  fixAdM3u8Ai(m3u8_url: string, headers: Object), // 去除m3u8插播
  forceOrder(lists: Array, key: string, option: function), // 强制正序算法
  getQuery(url: string), // 链接的query请求转为js的object字典对象
  stringify, // 序列化JSON, 同JSON.stringify
  dealJson(html: string), // HTML 字符串换为 JSON 对象
  OcrApi, // 验证码识别逻辑, 提供api｜classification(img)
  getHome(url: string), // 获取链接的host(带http协议的完整链接)
  buildUrl(url: string, obj: Object), // get参数编译链接
  keysToLowerCase(obj: Object), // keys转小写
  parseQueryString(query: string), // 字符串转对象
  encodeIfContainsSpecialChars(value: string), // URL需要转码字符串
  objectToQueryString(obj: Object), // 对象转字符串
};

const libsSanbox = {
  matchesAll(str: string, pattern: RegExp, flatten: boolean), // 匹配字符串中所有符合给定正则表达式模式的子串
  cut(text: string, start: string, end: string, method: functiom, All: boolean), // 从给定文本中提取指定范围的子字符串
  gbkTool, // gbk编码解码函数
  CryptoJS, // cryptojs加解密工具, 同cryptojs
  CryptoJSW, // cryptojs-wasm加解密工具, 同cryptojs-wasm
  JSEncrypt, // jsencrypt加解密工具, 同jsencrypt
  NODERSA, // rsa加解密工具, 同node-rsa
  pako, // gzip加解密工具, 同pako
  JSON5, // JSON5工具, 在 JSON 基础上支持注释
  jinja, // jinja模板渲染
  template, // 模板
  batchExecute(tasks: {func: Function, param: Array, id: string}[], listener: Object, successCount: number, max_task: number = 0), // 批量执行任务的异步函数，支持并发控制和任务监听。
  atob(data: string), // base64解码, 同atob
  btoa(s: string), // base64编码, 同btoa
  base64Encode(text: string), // base64编码, 同CryptoJS.enc.Base64.stringify
  base64Decode(text: string), // base64解码, 同CryptoJS.enc.Utf8.stringify
  md5(text: string), // md5-32计算, 同CryptoJS.MD5
  rc4Encrypt(word: string, key: string), // rc4加密, 同CryptoJS.RC4.encrypt
  rc4Decrypt(word: string, key: string), // rc4解密, 同CryptoJS.RC4.decrypt
  rc4, // rc4, 同CryptoJS.RC4, 提供 encode(val, key, encoding = 'utf8', keyEncoding = 'utf8', outputEncode = 'base64')｜decode(val, key, encoding = 'utf8', keyEncoding = 'utf8', outputEncode = 'base64')
  rc4_decode(data: string, key: string = 'ffsirllq', t: number), // rc4解密
  randomUa, // 随机ua, 同 random-http-ua, 提供方法 generateUa(num = 1, opts = {})[随机生成浏览器的ua]
  jsonpath, // JSON对象中查询数据, 同jsonpathplus, 提供方法 query(jsonObject, path)[查询]
  hlsParser, // 同hls-parser
  axios, // 网络请求库, 同npm axios
  axiosX, // 网络请求库, 同axios单文件
  URL, // url处理库, 同URL
  pathLib, // 文件路径处理库, 提供方法 basename[获取文件名 同path.basename]｜extname[获取扩展名 同path.extname]｜ readFile(filename)[同步读文件],｜writeFile(filename, text)[同步写文件]
  qs, // url参数处理库, 同qs
  Buffer, // buffer处理库, 同buffer
  URLSearchParams, // url参数处理库, 同URLSearchParams
  COOKIE, // cookie处理库, 同cookie, 提供方法 parse, serialize, stringify
  ENV, // 环境变量处理库, 提供方法 get(key, _value = '', isObject = 0)[查询]｜set(key, value = "", isObject = 0)[设置]｜delete(key)[删除]
  _ENV, // 运行环境变量, 同process.env
  Quark, // 夸克网盘库逻辑
  UC, // UC网盘库逻辑
  Ali, // 阿里网盘库逻辑
  Cloud, // 移动189云盘库逻辑
  Yun, // 天翼139网盘库逻辑
  require, // require库, 同require
  WebSocket, // websocket库, 同ws
  WebSocketServer, // websocket服务库, 同ws.WebSocketServer
  zlib, // 用于缓冲区处理, 同node-zlib
  JSONbig, // 高精度JSON格式化, 同json-bigint
  JsonBig, // 高精度JSON格式化, 同json-bigint 参数{storeAsString: true}
  minizlib, // zlib流操作, 同minizlib
};
```
