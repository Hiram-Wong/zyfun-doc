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

### 2.2. drpyS

#### 2.2.1. 属性说明

[文档](https://github.com/hjdhnx/drpy-node/blob/main/docs/ruleAttr.md)

#### 2.2.2. 内置参数

[源码](https://github.com/hjdhnx/drpy-node/blob/main/libs/drpyS.js)

注入参数 `sandbox` `utilsSanbox` `drpySanbox` `drpyCustomSanbox` `libsSanbox`

#### 2.2.3 MCP

> 如下为`Cherry Studio`示例

1. 配置AI模型: [文档](https://docs.cherry-ai.com/pre-basic/providers)

   ![mcp-model](/source/grammar/mcp-model.png)

2. 配置MCP: [文档](https://docs.cherry-ai.com/advanced-basic/mcp/config)
   1. 下载DXT包 [下载链接](https://github.com/hjdhnx/drpy-node/tree/main/drpy-node-mcp)
   2. MCP服务器->添加->导入DXT包->选择文件->确定->修改环境变量(ROOT=实际drpys路径)->保存

   ![drpys-mcp-config](/source/grammar/drpys-mcp-config.png)

3. 验证

   🔨->手动->Drpy Node MCP(选中绿色)->发送`/list_sources`

   ![drpys-mcp-verify.png](/source/grammar/drpys-mcp-verify.png)
