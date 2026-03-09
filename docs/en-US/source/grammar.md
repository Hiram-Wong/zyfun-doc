# Grammar

Understand the syntax to better work with the tools to complete the development process.

## 1. Learn

### 1.1. Basic

#### 1.1.1. Dom

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

- `div a span li`: Generic container labels
- `class id data-id`: Attribute
  - `class`: Element provide class name
  - `id`: Element provide a unique identifier
  - `data-id`: Element provide custom data
- Child-parent element
  - Child element: Elements that contain other elements. e.g. `<div class="items">`
  - Pparent element: Elements that are contained by other elements. e.g. `<a class="item">`

#### 1.1.2. js

::: details Click to learn

```js:line-numbers
// Variable
var name = "zy"; // Global variable, can be defined repeatedly, can be assigned repeatedly.
let age = 25; // Local variable, cannot be defined repeatedly, can be assigned repeatedly.
const PI = 3.14; // Local variable, non-repeatable definitions, non-repeatable assignments

// Data type
typeof 123; // number
typeof "123"; // string
typeof true; // boolean
typeof null; // object
typeof undefined; // undefined
typeof { name: "zy" }; // object
typeof [1, 2, 3]; // object
typeof function () {}; // function

// Operator
let a = 5;
let b = 2;
console.log(a + b); // Addition Output: 7
console.log(a - b); // Subtraction Output: 3
console.log(a * b); // Multiplication Output: 10
console.log(a / b); // Division Output: 2.5
console.log(a % b); // Balance Output: 1
console.log(a ** b); // Power Operations Output: 25

// Comparison operator
// Double equals sign will convert to number before judgment, triple equals sign will additionally judge the data type
console.log(a == b); // equal Output: false
console.log(a != b); // ne Output: true
console.log(a > b); // gt Output: true
console.log(a < b); // lt than Output: false
console.log(a >= b); // ge Output: true
console.log(a <= b); // le Output: false

// String
let str = "Hello World!";
console.log(str.length); // Length Output: 12
console.log(str.indexOf("World")); // Find first letter subscript Output: 6
console.log(str.slice(6, 11)); // Intercept string (start position, length) Output: World
console.log(str.replace("World", "zy")); // Replace string Output: Hello zy!
console.log(str.toUpperCase()); // Capitalize Output: HELLO WORLD!
console.log(str.toLowerCase()); // Lowercase Output: hello world!
console.log(str.split(" ")); // Splite Output: ["Hello", "World!"]

// Array
let cars = ["BMW", "Volvo", "Saab"];
console.log(cars.length); // Length Output: 3
console.log(cars[0]); // Accessing first element Output: BMW
cars.push("Audi"); // Add elements to end of array Output: ["BMW", "Volvo", "Saab", "Audi"]
cars.pop(); // Delete last element of array Output: ["BMW", "Volvo", "Saab"]
cars.shift(); // Delete first element of array Output: ["Volvo", "Saab"]
cars.unshift("Audi"); // Adds an element to first element of array Output: ["Audi", "Volvo", "Saab"]

// Object
let person = { name: "zy", age: 25, city: "Shanghai" };
console.log(person.name); // Access object properties Output: zy
person.age = 26; // Modify object attribute value Output: { name: "zy", age: 26, city: "Shanghai" }
delete person.city; // Delete object attributes Output: { name: "zy", age: 26 }

// Function
function sayHello() {
  console.log("Hello World!");
}
sayHello(); // Output: Hello World!

function add(a, b) {
  return a + b;
}
console.log(add(3, 5)); // Output: 8

// Conditional statements
let age = 25;
if (age >= 18) {
  console.log("Adult");
} else if (age >= 12) {
  console.log("Teenager");
} else {
  console.log("Children");
} // Output: Adult

// Circular statements
for (let i = 0; i < 5; i++) {
  console.log(i);
} // Output: 0 1 2 3 4

// Exception handling
try {
  throw "An error!";
} catch (error) {
  console.log(error);
} // Output: An error!
```

:::

### 1.2. Cheerio

::: code-group

```js:line-numbers [css-selector.js]
const cheerio = require('cheerio');
const html = `
<div id="container">
  <ul class="list">
    <li class="item-0">first item</li>
  </ul>
</div>
`;
const $ = cheerio.load(html);
console.log($('#container .list li').text()); // Output the content of nested <li> elements

// Output
// first item
```

```js:line-numbers [child-element.js]
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
// Find all <li> children
items.find('li').each((index, element) => console.log($(element).html()));
// Find all child elements
items.children().each((index, element) => console.log($(element).html()));
// Finds all elements with class="active" in their children.
items.children('.active').each((index, element) => console.log($(element).html()));
// Find the second child element
items.children().eq(1).each((index, element) => console.log($(element).html()));

// Output
// first item
// <a href="link2.html">second item</a>

// first item
// <a href="link2.html">second item</a>
// <a href="link3.html"><span class="bold">third item</span></a>

// <a href="link3.html"><span class="bold">third item</span></a>

// <a href="link2.html">second item</a>
```

```js:line-numbers [parent-element.js]
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
console.log(items.parent().html()); // Find parent element

// Output
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

```js:line-numbers [ancestor-element.js]
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
console.log(items.parents().html()); // Find all ancestral elements
console.log(items.parents('.wrap').html()); // Finds ancestor elements with class="wrap"

// Output
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

```js:line-numbers [brother-element.js]
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
// Find all sibling elements
li.siblings().each((index, element) => console.log($(element).html()));
// Find the brother element with class="active"
li.siblings('.active').each((index, element) => console.log($(element).html()));

// Output
// first item
// <a href="link2.html">second item</a>
// <a href="link4.html">fourth item</a>
// <a href="link5.html">fifth item</a>

// <a href="link4.html">fourth item</a>
```

```js:line-numbers [traversal.js]
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
  console.log($(element).html()); // Traverse all <li> elements
});

// Output
// first item
// <a href="link2.html">second item</a>
// <a href="link3.html"><span class="bold">third item</span></a>
// <a href="link4.html">fourth item</a>
// <a href="link5.html">fifth item</a>
```

```js:line-numbers [get-property.js]
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
console.log(a.attr('href')); // Get attribute value
console.log(a.text()); // Get text content
console.log(a.contents().filter(function () {
  return this.nodeType === 3; // Filter text node
}).text()); // Get plain text content, excluding child elements
console.log(a.clone().find('font').remove().end().text()); // Get text content after removing the <font> element
console.log(a.html()); // Get internal HTML content
console.log(a.prop('outerHTML')); // Get outer HTML content

// Output
// link3.html
// fourth-item123456
// fourth-item
// fourth-item123
// fourth-item<i>123</i><font>456</font>
// <a href="link3.html">fourth-item<i>123</i><font>456</font></a>
```

:::

### 1.3. Parse Dom

- pdfa: get property
- pdfh: get list

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
console.log(pdfh(html, '.item-2 a&&href')); // get attribute value href
console.log(pdfh(html, '.item-2&&Text')); // get text content Text
console.log(pdfh(html, '.item-2--i--font&&Text')); // get plain text content, exclude <i> and <font >sub-elements
console.log(pdfh(html, '.item-2--font&&Text')); // gettext after removing the <font> element
console.log(pdfh(html, '.item-2 a')); // get internal HTML content
console.log(pdfh(html, '.item-2')); // get outer HTML content

// Output
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
console.log(pdfa(html, '#container ul.list li')); // Get all the li elements

// Output
[
  "<li class="item-0">first item</li>",
  "<li class="item-1"><a href="link2.html">second item</a></li>",
  "<li class="item-2 active"><a href="link3.html">fourth-item<i>123</i><font>456</font></a></li>",
  "<li class="item-3 active"><a href="link4.html"><span class="bold">third item</span></a></li>",
  "<li class="item-4"><a href="link5.html">fifth item</a></li>"
]
```

:::

## 2. Template

### 2.1. drpy

[Document](https://github.com/hjdhnx/drpy-node/blob/main/docs/ruleDesc.md)

#### 2.1.1. Property

```js:line-numbers
var rule = {
  类型: "影视", // 影视|听书|漫画|小说
  title: "", // Rule title
  编码: "", // Default: utf-8
  搜索编码: "", // Default: utf-8, takes precedence over global encoding attributes, e.g. if the source encoding of a web page is gbk, specify utf-8 to search for a separate encoding.
  host: "", // Domain root of the page, with http headers like https://www,baidu.com
  hostJs: 'let html=request(HOST,{headers:{"User-Agent":PC_UA}});let src = jsp.pdfh(html,"ul&&li&&a&&href");HOST=src.replace("/index.php","")', // Web page domain root dynamic crawl js code, through the HOST=assignment
  homeUrl: "/latest/", // A link to the home page of the site, either a full path or a relative path, for referral acquisition fyclass is the category label fypage is the number of pages
  url: "/fyclass/fypage.html[/fyclass/]", // Links to the category pages of the site, either full or relative paths, for category fetching fyclass is the category label fypage is the number of pages
  detailUrl: "https://yanetflix.com/voddetail/fyid.html", // Not Required, Secondary Details Splice Link
  searchUrl: "", // Search link can be a full path or relative path, used for searching to get ** for the search term fypage for the number of pages
  searchable: 0, // Switch search, 0(default): off, 1: on
  quickSearch: 0, // Switch quick search, 0(default): off, 1: on
  filterable: 0, // Switch filter, 0(default): off, 1: on
  filter: {}, // Filter criteria dictionary
  filter_def: {
    douyu: {
      area: "一起看",
      other: "..",
    },
    huya: {
      area: "影音馆",
      other: "..",
    },
  }, // Dictionary of default filter conditions (different categories can specify different default values for the same filter parameters)
  // Filter site pass reference, will be automatically passed to the category link under (the example of the url parameter) - url parameter for fyfilter
  filter_url: "style={{fl.style}}&zone={{fl.zone}}&year={{fl.year}}&fee={{fl.fee}}&order={{fl.order}}",
  headers: {
    "User-Agent": "MOBILE_UA", // MOBILE_UA｜PC_UA｜UA｜UC_UA｜IOS_UA, custom
    Cookie: "searchneed=ok",
  }, // Default: {}
  hikerListCol:"avatar", // [Hiker exclusive]First level list style
  hikerClassListCol:"avatar", // [Hiker exclusive]Recommended List Styles
  timeout: 5000, // Default: 3000
  class_name: "电影&电视剧&动漫&综艺", // Static Category Name Splicing(& Separation)
  class_url: "1&2&3&4", // Static Category Logo Splicing(& Separation)
  class_parse: "#side-menu:lt(1) li;a&&Text;a&&href;com/(.*?)/", // Dynamic Category Fetch List; Title; Link; Regular Extraction Don't add semicolon after regular if you don't need it
  cate_exclude: "", // In addition to the global filter you need to filter which headings are not considered to be categorized
  tab_exclude: '更多|APP专属', // [Optional] Filter line(| separation), default: ''
  tab_remove: ['tkm3u8'], // [Optional] Remove lines and related anthology
  tab_order: ["lzm3u8", "wjm3u8", "1080zyk", "zuidam3u8", "snm3u8"], // The order of the lines, according to the order of the inside first, not written in the order of the back
  tab_rename: { lzm3u8: '量子', kuaikan: '快看' }, // [Optional] Static line name substitution, for example: lzm3u8->quantum resources
  play_parse: true, // [Optional] Server Parse Playback
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
  pagecount: { "1": 1, "2": 1, "3": 1, "4": 1, "5": 1, "7": 1 }, // Controls the total number of pages in different categories, default 999
  lazy: "", // Custom sniffer
  limit: 6, // Number of recommendations displayed on the home page
  double: true, // Switch Double-layer list positioning, true: on, false(default): off
  图片来源: "@Referer=http://www.jianpianapp.com@User-Agent=jianpian-version350", // Double-layer list positioning
  图片替换: "https://www.keke6.app/=>https://vres.a357899.cn/", // Replace image link, original text => destination text
  // Js write, only js mode 1 works. It can be used for code to dynamically get a global cookie or something like that.
  // The available variables are rule_fetch_params, rule, and basic web access operations such as request and post.
  预处理: 'rule_fetch_params.headers.Cookie = "xxxx";',
  // Similar to Hiker Level 1 list; title; image; description; link; details where the last parameter is optional
  // In the case of two-tier targeting, the recommended code for the second semicolon is also the code for the second tier of targeting lists.
  推荐: ".col-sm-6;h3&&Text;img&&data-src;.date&&Text;a&&href",
  一级: ".col-sm-6;h3&&Text;img&&data-src;.date&&Text;a&&href", // Similar to Hiker Level 1 list; title; image; description; link; details where the last parameter is optional
  二级访问前: 'let jump=request(MY_URL).match(/href="(.*?)"/)[1];log(jump);MY_URL=urljoin2(MY_URL,jump)', // Secondary launch pre-processing logic. Solve the special case that the link given by the first level is not the real source code of the second level but the source code of the redirected link of the front-end
  // *: indicates that the rule has no secondary, directly take the link of the first level to sniff.
  // title: Title; Type
  // desc: Main Message;Year;Region;Actor;Director
  // { title:'',img:'',desc:'',content:'',tabs:'',lists:'',tab_text:'body&&Text',list_text:'body&&Text',list_url:'a&&href'} Same as Hiker level II
  二级: "*",
  搜索: "*", // Search can be *, integrated first-level, or the same writing method as first-level list; title; picture; description; link; details
  proxy_rule: `js:
    input = [200, 'text;plain', 'hello drpy']
  `, // Local proxy rules, can be used to modify the text of m3u8 files to return to the proxy file address after de-advertising, can also proxy encrypted images
  sniffer: 1, // Switch sniffer, 0: off, 1: on
  isVideo: "http((?!http).){26,}\\.(m3u8|mp4|flv|avi|mkv|wmv|mpg|mpeg|mov|ts|3gp|rm|rmvb|asf|m4a|mp3|wma)", // Auxiliary sniffing rules
  // Auxiliary sniffing rules js write
  isVideo: `js:
    if (/m3u8/.test(input)) {
      input = true
    } else {
      input = false
    }
  `,
};

```

#### 2.1.2. Inherit

`mxpro` `mxone5` `首图` `首图2` `默认` `vfed` `海螺3` `海螺2` `短视` `短视2` `采集1`

##### 2.1.2.1. Old

```js
var rule = Object.assign(muban.mxpro, {
  title: 'netflix',
  host: 'https://yanetflix.com',
  url: '/index.php/vod/show/id/fyclass/page/fypage.html',
  class_parse: `.navbar-items li:gt(1):lt(6);a&&Text;a&&href;.*/(.*?).html`
})
```

##### 2.1.2.2. New

```js
var rule = {
  title: 'cokemv',
  模板: 'mxpro',
  host: 'https://cokemv.me',
  class_parse: `.navbar-items li:gt(1):lt(7);a&&Text;a&&href;/(\\d+).html`
}
```

##### 2.1.2.3. Auto

> Note: Auto-matching only supports templates that can get categorized templates from HOST, `采集1`, `短视2` and other api templates can't be matched.

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

#### 2.1.3. Regex

- The attribute class_parse takes [3] as the regular string for the classification after separating it by. Here the regular is different from the js `/.*/`, but since it is a string, it needs to implement the string standard.
  - If you want to realize `/(\d+)/`, then the string is written as `(\\d+)`
  - The principle is `new RegExp('(\\d+)') = /(\d+)/`
- The attribute lazy is implemented as pure js code, there is no regular escaping problem.
- If the corresponding value of the attribute is a string, it can be wrapped in backquotes `` to avoid the problem of mixing single and double quotes and other escaping issues.

#### 2.1.4. Built-in

`input` `html` `VODS` `VOD` `TABS` `LISTS` `MY_CATE` `MY_FL` `getProxyUrl`

#### 2.1.5. Proxy

The proxy_rule parameter assignment is formatted as a three-element list `[Response Code, Response Header, Response Body]`.

```js
input = [200, 'application/vnd.apple.mpegurl', 'm3u8 content']
```

#### 2.1.6. Rsa

```js
RSA.encode(data, key, option)
RSA.decode(data, key, option)
```

### 2.2. drpyS

[Document](https://github.com/hjdhnx/drpy-node/blob/main/docs/ruleAttr.md)

#### 2.2.1. Property

```js:line-numbers
var rule = {
  类型: '影视', // [Optional] Type, 影视(默认)|漫画|小说
  title: 'xxx', // Rule title
  host: 'https://www.xx.com', // [Optional] Source primary domain name, default: ''
  homeUrl: '', // [optional] link to source homepage, this.input as referral, default: ''
  class_name: '电视剧&电影&动漫', // [Optional] static category name splicing(& delimited), default: ''
  class_url: '2&1&3', // [Optional] static categorized identifier splicing(& delimited), default: ''
  cate_exclude: '首页|更多', // [Optional] Filter by category(| delimited), default: ''
  url: '/show/fyclass-------fypage---.html?fyfilter', // [Optional] Source first-level list link, fyclass identification classification id|fypage identification number|fyfilter identification filtering, default: ''
  filter_url: 'fyclass-{{fl.area}}--{{fl.class}}-----fypage---{{fl.year}}', // [Optional] Filter link, {{fl.xxx}} identifies the filter criteria (where xxx is the filter attribute)
  filter_json: { area: '1', class: '2', year: '3' }, // [Optional] Filter categorized mapping table, either object or gzipped string
  filter_def: {
    douyu: {
      area: "一起看",
      other: "..",
    },
    huya: {
      area: "影音馆",
      other: "..",
    },
  }, // [Optional] Dictionary of default filter conditions (different categories can specify different default values for the same filter parameters)
  filter: '', // [Optional] Filter data, either object or gzipped string.
  searchUrl: '/nk/**----------fypage---.html', // [Optional] Source search link, **Identifies the search term｜fypage identifies the number of pages, default is ''
  searchable: 0, // Switch search, 0(default): off, 1: on
  quickSearch: 0, // Switch quick search, 0(default): off, 1: on
  filterable: 0, // Switch filter, 0(default): off, 1: on
  headers: {
    "User-Agent": "MOBILE_UA", // MOBILE_UA｜PC_UA｜UA｜UC_UA｜IOS_UA, custom
    Cookie: "drpys=nb",
  }, // [Optional] Default: {}
  tab_exclude: '更多|APP专属', // [Optional] Filter line(| separation), default: ''
  tab_remove: ['tkm3u8'], // [Optional] Remove lines and related anthology
  tab_order: ['lzm3u8', 'zuidam3u8'], // [Optional] The order of the lines, according to the order of the inside first, not written in the order of the back
  tab_rename: { lzm3u8: '量子', kuaikan: '快看' }, // [Optional] Static line name substitution, for example: lzm3u8->quantum resources
  timeout: 5000, // [Optional] Default: 3000
  play_parse: true, // [Optional] Server Parse Playback
  double: true, // [Optional] Switch Double-layer list positioning, true: on, false(default): off
  hostJs: async function () {
    // [Optional] Dynamic domain grabber function, highest priority, affects subsequent relative links, only returns the domain name, does nothing else.
    // this can only be used as a function, not as an arrow.
    // HOST identifier homeUrl
    const { HOST } = this;

    // At least the parameters returned
    return HOST // Return domain
  },
  预处理: async function () {
    // The priority is slightly lower than hostJs, and it will only be executed once when the source is initialized. It can be used to dynamically obtain cookies, etc.
    // This can only use the function function, not the arrow function.
  },
  lazy: async function (flag, id, flags) {
    // [Optional] sniff-free function, used to handle lazy loading, usually used for m3u8 files.
    // flag identifies the line name｜id identifies the unique feature｜flags are generally ignored.
    // this can only be used as a function, not as an arrow.
    // flag=MY_FLAG identifies the line name｜input=MY_URL identifies the url processed by the system｜HOST identifies the rule.host｜fetch_params identifies the deep copy rule.rule_fetch_params.
    // pdfa, pdfh, pd, pjfh, pjfa, pj is a series of handler functions
    const { MY_FLAG, flag, input, MY_URL, HOST, fetch_params, pdfa, pdfh, pd, pjfh, pjfa, pj } = this;

    // At least the parameters returned
    // url: address, parse: 0:disable｜1:enable
    return { url: input, parse: 0 }
  },
  class_parse: async function () {
    // [Optional] Dynamic classification processing logic, generally combined with static classification (class_name & class_url) and first-level static filtering (filter & filter_url).
    // input=MY_URL identifies system processed url｜HOST identifies rule.host｜classes identifies system processed category｜filters identifies rule.filter｜cate_exclude identifies rule. flag｜fetch_params identifies the deep copy rule.rule_fetch_params
    // pdfa, pdfh, pd, pjfh, pjfa, pj is a series of handler functions
    const { input, MY_URL, HOST, classes, filters, cate_exclude, home_flag, fetch_params, pdfa, pdfh, pd, pjfh, pjfa, pj } = this;

    // At least the parameters returned
    // class: [{type_name: '', type_id: ''}]｜filters: {}
    return { class: [{ type_name: '', type_id: '' }], filters: {} }
  },
  推荐: async function (tid, pg, filter, extend) {
    // [Optional] Homepage recommendation processing logic section
    // tid identifies the category｜pg identifies the number of pages｜filter identifies the filter｜extend identifies the extension
    // input=MY_URL identifies the url processed by the system｜HOST identifies the rule.host｜double identifies the double positioning｜fetch_params identifies the deep copy rule.rule_fetch_params
    // pdfa, pdfh, pd, pjfh, pjfa, pj is a series of handler functions
    const { input, MY_URL, HOST, double, fetch_params, pdfa, pdfh, pd, pjfh, pjfa, pj } = this;

    // At least the parameters returned, The following are the least returned parameters.
    // Return method 1
    return [{vod_id: 1, vod_name: 'xxx', vod_remarks: '', vod_pic: 'https://xx.xx.xx/xx.png', ... }]
    // Return method 2
    return setResult([{url: 1, title: 'xxx', desc: '', pic_url: 'https://xx.xx.xx/xx.png'}])
  },
  一级: async function (tid, pg, filter, extend) {
    // First-level list processing logic section
    // tid identifies the category｜pg identifies the number of pages｜filter identifies the filter｜extend identifies the extension
    // MY_CATE identifies the category | MY_FL identifies the extend | input=MY_URL identifies the url processed by the system | HOST identifies the rule.host | MYPAGE identifies the number of pages | fetch_params identifies the deep copy rule.rule_fetch_params
    // pdfa, pdfh, pd, pjfh, pjfa, pj is a series of handler functions
    const { MY_CATE, MY_FL, input, MY_URL, HOST, MY_PAGE, fetch_params, pdfa, pdfh, pd, pjfh, pjfa, pj } = this;

    // At least the parameters returned, The following are the least returned parameters.
    // Return method 1
    return [{vod_id: 1, vod_name: 'xxx', vod_remarks: '', vod_pic: 'https://xx.xx.xx/xx.png', ... }]
    // Return method 2
    return setResult([{url: 1, title: 'xxx', desc: '', pic_url: 'https://xx.xx.xx/xx.png'}])
  },
  二级: async function (ids) {
    // Detailed processing logic part
    // ids identifies the first-level list id, and the type is an array
    // input=MY_URL identification system processing url|vid=orId identification ids[0] or take 1 by $| fyclass identification id by $ separation 0| HOST identification rule.host|detailUrl identification rule .detailUrl|fetch_params identification deep copy rule.rule_fetch_params
    // pdfa, pdfh, pd, pjfh, pjfa, pj is a series of handler functions
    const { input, vid, orId, fyclass, MY_URL, HOST, fetch_params, pdfa, pdfh, pd, pjfh, pjfa, pj } = this;

    // At least the parameters returned
    return { vod_play_from: 'xxx', vod_play_url: 'xxx', ... }
  },
  搜索: async function (wd, quick, pg) {
    // Search processing logic section
    // wd identifies the search term｜quick identifies if it is a quick search｜pg identifies the number of pages
    // this can only be used as a function, not as an arrow.
    // MY_PAGE identifies the page number｜KEY identifies the search term｜input=MY_URL identifies the url processed by the system｜HOST identifies the rule.host｜detailUrl identifies the rule.detailUrl｜fetch_params identifies the deep copy of the rule.rule_fetch_params
    // pdfa, pdfh, pd, pjfh, pjfa, pj is a series of handler functions
    const { MY_PAGE, KEY, input, MY_URL, HOST, detailUrl, fetch_params, pdfa, pdfh, pd, pjfh, pjfa, pj } = this;

    // At least the parameters returned, The following are the least returned parameters.
    // Return method 1
    return [{vod_id: 1, vod_name: 'xxx', vod_remarks: '', vod_pic: 'https://xx.xx.xx/xx.png', ... }]
    // Return method 2
    return setResult([{url: 1, title: 'xxx', desc: '', pic_url: 'https://xx.xx.xx/xx.png'}])
  },
  proxy_rule: async function (params) {
    // [Optional] Proxy rule processing logic section
    // params identifies the parameter url incoming parameters

    // At least the parameters returned
    return [200, "text/text", m3u8]; // [status code, response header, response content]
  },
  action: async function (action, value) {
    // [Optional] Action processing logic part, supported by some shells

    // At least the parameters returned, The following are the least returned parameters.
    // Return method 1
    return JSON.stringify({
      action: {
        actionId: 'quarkCookieError', // action id
        id: 'cookie', // id
        type: 'input', // type
        title: '夸克Cookie', // title
        width: 300, // width
        button: 0, // 0:Close button 1:Cancel button 2:OK and Cancel 3.OK, Cancel, Reset 4.OK, Cancel, Reset, Preview
        imageUrl: 'https://preview.qiantucdn.com/xxx.png', // image url
        imageHeight: 200, // image height
        imageType: 'card_pic_3', // image type
        msg: 'timeout' // msg
      }
    });
    // Return method 2
    return 'xxx...'
  }
}
```

#### 2.2.2. Built-in

```ts:line-numbers
const sandbox = {
  console, // console
  WebAssembly, // WebAssembly
  setTimeout, // setTimeout
  setInterval, // setInterval
  clearTimeout, // clearTimeout
  clearInterval, // clearInterval
  TextEncoder, // TextEncoder
  TextDecoder, // TextDecoder
  performance, // performance
}

const utilsSanbox = {
  sleep(ms: number), // Delay function
  sleepSync(ms: number), // Delay function with sync
  utils, // Provide methods
  // sleep｜sleepSync｜computeHash｜deepCopy｜urljoin｜urljoin2｜joinUrl｜naturalSort｜$js|getTitleLength|getNowTime|keysToLowerCase|updateQueryString|naturalSortAny
  misc, // Provide methods
  // rand｜randStr｜randUUID｜randMAC｜randDevice｜randDeviceWithId｜MOBILE_UA｜PC_UA｜UA｜UC_UA｜IOS_UA｜MAC_UA｜formatPlayUrl｜formatPlayUrl2｜stripHtmlTag｜fixUrl｜jsonParse
  computeHash(content: string), // hash
  deepCopy(obj: Object), // lodash.cloneDeep
  urljoin(fromPath: string, nowPath: string), // Splicing url
  urljoin2, // urljoin
  joinUrl, // urljoin
  naturalSort(arr: Array, key: string, customOrder: Array = []), // Natural sorting
  $js, // Provide toString(func) method, function to string
  $, // Sandbox global variables
  pupWebview, // Provide methods
  // gotoHtml(config)｜ gotoCookie(config)｜type(selector, text, options = {})｜gotoclick(selector)｜pdf(path, options = {})｜getTitle()｜getUrl()｜evaluate(fn, ...args)｜gotoText(selector)｜gotoAttribute(selector, attribute)｜waitForSelector(selector, options = {})｜close()
  getProxyUrl, // Proxy url
  hostUrl, // Domain
  fServer, // Server
  getContentType(filePath: string), // Get Content-Type according to the suffix of the file path or name
  getMimeType(ext: string), // Returns the MIME type based on the extension
  getParsesDict(host: string) // The function reads the parsing information from the configuration file and returns an array of parsing objects according to the host address provided
}

const drpySanbox = {
  jsp, // Class jsoup object
  pdfh(html: string, parse: string, base_url: string = ''), // Get HTML attributes or text
  pd(html: string, parse: string, base_url: string = ''), // Processes HTML content and parses it into the specified format
  pdfa(html: string, parse: string), // Parsing HTML content as an array
  jsoup, // Class jsoup object
  pdfl(html: string, parse: string, list_text: Array, list_url: Array, url_key: string),
  pjfh(html: string, parse: string, addUrl: boolean = false), // Processes HTML content and parses it into the specified format
  pj(html: string, parse: string), // Parse HTML content as an object
  pjfa(html: string, parse: string), // Processes HTML content and parses it into the specified format
  pq(html: string), // Convert HTML strings to jsoup objects
  local, // Provide methods
  // get(storage, key)｜set(storage, key, val)｜delete(storage, key)
  md5X(text: string), // md5
  rsaX(mode: string, pub: boolean, encrypt: boolean, input: string|Buffer, inBase64: boolean, key: string, outBase64: string|Buffer), // rsa
  aesX(mode: string, encrypt: boolean, input: string, inBase64: boolean, key: string, iv: string|null, outBase64: string|Buffer), // aes
  desX(mode: string, encrypt: boolean, input: string, inBase64: boolean, key: string, iv: string|null, outBase64: string|Buffer), // des
  req(url: string, obj: Object), // Request, base: http/https
  _fetch, // Request, base: fetch
  XMLHttpRequest, // Request, base: xhr
  simplecc, // Grammar analysis, base: simplecc-wasm
  AIS, // Aigc, provide methods: spark, deepseek, kimi
  batchFetch, // Batch request
  JSProxyStream, // Proxy stream
  JSFile(path: string), //  Provide methods
  // path｜open｜read｜write(arraybuffer: ArrayBuffer, position: number)｜close｜move(newPath: string)｜copy(newPath: string)｜delete｜exist｜size
  js2Proxy(dynamic: boolean, siteType: string, site: string, url: string, headers: Object), // Convert dynamic parameters and request information into proxy URL
  log(..args), // console.log
  print(..args), // console.log
  jsonToCookie(json: Object), // Convert JSON objects into cookie strings
  cookieToJson(cookieString: string), // Convert the cookie string back to JSON object
  runMain(main_func_code: string, arg: any), // Run main function
};

const drpyCustomSanbox = {
  MOBILE_UA, // Android ua, Default: 'Mozilla/5.0 (Linux; Android 11; Pixel 5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.91 Mobile Safari/537.36';
  PC_UA, // chrome ua, Default: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.54 Safari/537.36';
  UA, // Mozilla ua, Default: 'Mozilla/5.0';
  UC_UA, // UC ua, Default: 'Mozilla/5.0 (Linux; U; Android 9; zh-CN; MI 9 Build/PKQ1.181121.001) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/57.0.2987.108 UCBrowser/12.5.5.1035 Mobile Safari/537.36';
  IOS_UA, // Iphone ua, Default: 'Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1';
  RULE_CK, // The key value of the source cookie, Default: 'cookie'
  CATE_EXCLUDE, // Classification and exclusion, Default: '首页|留言|APP|下载|资讯|新闻|动态'
  TAB_EXCLUDE, // Line name exclusion, Default: '猜你|喜欢|下载|剧情|榜|评论'
  OCR_RETRY, // Number of retries for OCR recognition failure, Default: 3
  OCR_API, // OCR api, Default: 'https://api.nn.ci/ocr/b64/text'
  nodata, // No data return value
  SPECIAL_URL, // Regular expressions determine whether it is a special link, Default: /^(ftp|magnet|thunder|ws):/
  setResult(d: Array), // Set the result function to convert the input data into an array of a specific format
  setHomeResult(res: Object), // setResult
  setResult2(res: Object), // Set the results and return to the list of results
  urlDeal(vipUrl: string), // Deal url
  tellIsJx(url: string), // Judge whether it is necessary to analyze
  urlencode(str: string), // Use base64 encoding for url compilation
  encodeUrl(str: string), // encodeURI
  uint8ArrayToBase64(uint8Array: Uint8Array), // Convert Uint8Array to Base64-encoded string
  Utf8ArrayToStr(array: Uint8Array), // Convert UTF-8-encoded byte arrays into string
  gzip(str: string), // gzip encode
  ungzip(str: string), // gzip decode
  encodeStr(input: string, encoding: string), // str encode
  decodeStr(input: string, encoding: string), // str decode
  getCryptoJS(), // CryptoJS
  RSA, // rsa, provide methods: ncode(data, key, option)｜decode(data, key, option)
  fixAdM3u8Ai(m3u8_url: string, headers: Object), // Remove m3u8 ads
  forceOrder(lists: Array, key: string, option: function), // Forced positive order algorithm
  getQuery(url: string), // The linked query request is converted into the object dictionary object of js.
  stringify, // JSON.stringify
  dealJson(html: string), // The linked query request is converted into the object dictionary object of js.
  OcrApi, // CAPTCHA recognition logic, provide methods: api｜classification(img)
  getHome(url: string), // Get the host of the link (full link with http protocol)
  buildUrl(url: string, obj: Object), // Get parameter compilation link
  keysToLowerCase(obj: Object), // String to object
  parseQueryString(query: string), // String to object
  encodeIfContainsSpecialChars(value: string), // URL need to be transcoded strings
  objectToQueryString(obj: Object), // Object to string
};

const libsSanbox = {
  matchesAll(str: string, pattern: RegExp, flatten: boolean), // Match all the substrings in the string that conform to the given regular expression pattern
  cut(text: string, start: string, end: string, method: functiom, All: boolean), // Extract a substring of the specified range from a given text
  gbkTool, // gbk
  CryptoJS, // cryptojs
  CryptoJSW, // cryptojs-wasm
  JSEncrypt, // jsencrypt
  NODERSA, // node-rsa
  pako, // pako
  JSON5, // JSON5
  jinja, // jinja
  template, // template
  batchExecute(tasks: {func: Function, param: Array, id: string}[], listener: Object, successCount: number, max_task: number = 0), // Asynchronous functions for batch execution of tasks with support for concurrency control and task listening
  atob(data: string), // atob
  btoa(s: string), // btoa
  base64Encode(text: string), // CryptoJS.enc.Base64.stringify
  base64Decode(text: string), // CryptoJS.enc.Utf8.stringify
  md5(text: string), // CryptoJS.MD5
  rc4Encrypt(word: string, key: string), // CryptoJS.RC4.encrypt
  rc4Decrypt(word: string, key: string), // CryptoJS.RC4.decrypt
  rc4, // CryptoJS.RC4, provide methods: encode(val, key, encoding = 'utf8', keyEncoding = 'utf8', outputEncode = 'base64')｜decode(val, key, encoding = 'utf8', keyEncoding = 'utf8', outputEncode = 'base64')
  rc4_decode(data: string, key: string = 'ffsirllq', t: number), // rc4 decode
  randomUa, // random-http-ua, provide methods: generateUa(num = 1, opts = {})[generate ua]
  jsonpath, // jsonpathplus, provide methods: query(jsonObject, path)[get]
  hlsParser, //hls-parser
  axios, // npm axios
  axiosX, // axios.min.js
  URL, // URL
  pathLib, // File path library
  // provide methods: basename[path.basename]｜extname[path.extname]｜ readFile(filename)[Sync file reading],｜writeFile(filename, text)[Sync file writing]
  qs, // qs
  Buffer, // buffer
  URLSearchParams, // URLSearchParams
  COOKIE, // cookie, provide methods: parse, serialize, stringify
  ENV, // env, provide methods: get(key, _value = '', isObject = 0)[get]｜set(key, value = "", isObject = 0)[set]｜delete(key)[delete]
  _ENV, // process.env
  Quark, // Quark Cloud Logic
  UC, // UC Cloud Logic
  Ali, // Ali Cloud Logic
  Cloud, // 189 Cloud Logic
  Yun, // 139 Cloud Logic
  require, // require
  WebSocket, // ws
  WebSocketServer, // ws.WebSocketServer
  zlib, // node-zlib
  JSONbig, // json-bigint
  JsonBig, // json-bigint {storeAsString: true}
  minizlib, // minizlib
};
```
