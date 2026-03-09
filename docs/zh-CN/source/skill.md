# 常见技巧

## 1. 数据乱码转gb2312

```js:line-numbers{4,6}
import iconv from 'iconv';
import axios from 'axios';
const resp = await axios.get(url, {
  responseType: 'arraybuffer', // node环境
});
return iconv.decode(resp.data, 'gb2312');
```

## 2. 禁用https证书校验

```js:line-numbers{8}
import axios from 'axios';
const config = {
  method: 'POST',
  url: 'https://www.moedm.net/index.php/api/vod',
  headers: {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36 Edg/126.0.0.0',
  },
  rejectUnauthorized:false, //关闭证书校验
  data: {}
};
const resp = await axios(config)
```

## 3. 字符串转对象

```js:line-numbers{2}
const code = '[1,3,4]'; // typeof string
const jsonCode = new Function(`return ${code}`)(); // typeof object
```

## 4. 获取dom列表转字符串

> 常用于提取演员数据

```js:line-numbers{26-28}
const html = `
<div class="persons">
  <div class="person" itemprop="actor" itemscope="" itemtype="http://schema.org/Person">
      <meta itemprop="name" content="Elijah Wood">
      <div class="img">
          <a href="https://www.4kvm.org/cast/elijah-wood"><img alt="Elijah Wood isFrodo" src="https://gimg0.baidu.com/gimg/app=2001&amp;n=0&amp;g=0n&amp;fmt=jpeg&amp;src=image.tmdb.org/t/p/w92/7UKRbJBNG7mxBl2QQc5XsAh6F8B.jpg"></a>
      </div>
      <div class="data">
          <div class="name"><a itemprop="url" href="https://www.4kvm.org/cast/elijah-wood">Elijah Wood</a></div>
          <div class="caracter">Frodo</div>
      </div>
  </div>
  <div class="person" itemprop="actor" itemscope="" itemtype="http://schema.org/Person">
      <meta itemprop="name" content="Ian McKellen">
      <div class="img">
          <a href="https://www.4kvm.org/cast/ian-mckellen"><img alt="Ian McKellen isGandalf" src="https://gimg0.baidu.com/gimg/app=2001&amp;n=0&amp;g=0n&amp;fmt=jpeg&amp;src=image.tmdb.org/t/p/w92/5cnnnpnJG6TiYUSS7qgJheUZgnv.jpg"></a>
      </div>
      <div class="data">
          <div class="name"><a itemprop="url" href="https://www.4kvm.org/cast/ian-mckellen">Ian McKellen</a></div>
          <div class="caracter">Gandalf</div>
      </div>
  </div>
</div>
`;

pdfa(html, ".persons .person")
  .map((item) => pdfh(item, "meta&&content"))
  .join(","),
```

## 5. 代码串获取内容

> 常用于截取内容后是一段代码串, 但不想使用正则提取

```js:line-numbers{2}
const html = `var name = "zyplayer"; name = "zyfun";`;
eval(html);
console.log(name);
```

## 6. 代码自执行

> 常用于加密代码执行补充环境且避免污染全局变量

```js:line-numbers{34}
// 加密代码
const code = function() {
  var _0x30e6a9 = "e11ed29b";
  function _0x52e1af(_0x174b0c, _0x4fda13) {
    var _0x550aaa = atob(_0x174b0c);
    for (var _0x488b1e, _0x4bd62c = [], _0x11662e = 0, _0x27b014 = "", _0x428133 = 0; 256 > _0x428133; _0x428133++) {
      _0x4bd62c[_0x428133] = _0x428133;
    }
    for (_0x428133 = 0; 256 > _0x428133; _0x428133++) {
      _0x11662e = (_0x11662e + _0x4bd62c[_0x428133] + _0x4fda13.charCodeAt(_0x428133 % _0x4fda13.length)) % 256;
      _0x488b1e = _0x4bd62c[_0x428133];
      _0x4bd62c[_0x428133] = _0x4bd62c[_0x11662e];
      _0x4bd62c[_0x11662e] = _0x488b1e;
    }
    for (b = _0x11662e = _0x428133 = 0; b < _0x550aaa.length; b++) {
      _0x428133 = (_0x428133 + 1) % 256;
      _0x11662e = (_0x11662e + _0x4bd62c[_0x428133]) % 256;
      _0x488b1e = _0x4bd62c[_0x428133];
      _0x4bd62c[_0x428133] = _0x4bd62c[_0x11662e];
      _0x4bd62c[_0x11662e] = _0x488b1e;
      _0x27b014 += String.fromCharCode(_0x550aaa.charCodeAt(b) ^ _0x4bd62c[(_0x4bd62c[_0x428133] + _0x4bd62c[_0x11662e]) % 256]);
    }
    return _0x27b014;
  }
  if (!JSON.decrypt || typeof JSON.decrypt !== "function") {
    Object.defineProperty(JSON, "decrypt", {
      "value": function (_0x58f264) {
        var _0x2da9b8 = _0x52e1af(_0x58f264, _0x30e6a9);
        return this.parse(_0x2da9b8);
      }
    });
  }
}
(code)(); // 执行后JSON对象会挂载decrypt方法
console.log(JSON);
```

## 7. 时间戳

```js:line-numbers
// 毫秒级时间戳(13位)
new Date().getTime();
new Date().valueOf();
Date.now();
+new Date();
// 秒级时间戳(10位)
Math.floor(new Date().getTime() / 1000);
```

## 8. 生成唯一标识(uuid4)

> 常用于生成唯一值id, 如下为三种算法, 可选其一

```js:line-numbers
const generateUUID = () => {
  if (crypto && typeof crypto.randomUUID === "function") {
    // 算法一: randomUUID
    return crypto.randomUUID();
  } else if (crypto && typeof crypto.getRandomValues === "function") {
    // 算法二: getRandomValues填充
    return "10000000-1000-4000-8000-100000000000".replace(/[018]/g, (c) =>
      (
        +c ^
        (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (+c / 4)))
      ).toString(16)
    );
  } else {
    // 算法三: Math.random填充
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
      /[xy]/g,
      function (c) {
        const r = (Math.random() * 16) | 0,
          v = c == "x" ? r : (r & 0x3) | 0x8;
        return v.toString(16);
      }
    );
  }
}
```

## 9. JSONP数据处理

> 常用于跨域环境获取数据

```js:line-numbers{6,10,16}
// 方案1: 挂载jsonpCallback
import axios from 'axios';
// 生成名(可固定，可随机), 参考ajax生成规则(规避不必要检查)
const jsonpCallback = "jQuery" + (Math.random() + "").replace(".", "") + "_" + new Date().getTime();
// 挂载jsonpCallback, 推荐浏览器挂载window node挂载globalThis
globalThis[jsonpCallback] = function (data) { return data };
// 发送jsonp请求接收数据, 数据为jsonpCallback(xxx)函数返回值
const { data }  = await axios.get(url);
// 获取数据
const res = eval(data);

// 方案2: 空jsonpCallback函数
import axios from 'axios';
const { data }  = await axios.get(url);
// 获取数据
const res = eval(`${data}`);
```

## 10. 随机字符串

```js:line-numbers
/**
 * 生成随机字符串
 * 开启强制校验, 数据`长度必须>=类型数`, 否则返回空字符串
 * 自定义字符不支持 emoji 字符
 *
 * @param {Object} options 配置项
 * @param {Number} options.length 随机字符串长度 默认16
 * @param {Boolean} options.includeUppercase 是否包含大写字母 默认true
 * @param {Boolean} options.includeLowercase 是否包含小写字母 默认true
 * @param {Boolean} options.includeNumbers 是否包含数字 默认true
 * @param {Boolean} options.includeSpecialCharacters 是否包含特殊字符 默认true
 * @param {String} options.customCharacters 自定义字符 默认空
 * @param {Boolean} options.ensureAtLeastOne 是否确保每种类型至少有一个字符 默认false
 * @returns {String} 随机字符串
 */

function generateRandomStr(options) {
  options = options || {};

  var length = options.length || 16;
  var includeUppercase = options.includeUppercase !== false;
  var includeLowercase = options.includeLowercase !== false;
  var includeNumbers = options.includeNumbers !== false;
  var includeSpecialCharacters = options.includeSpecialCharacters !== false;
  var customCharacters = options.customCharacters || "";
  var ensureAtLeastOne = options.ensureAtLeastOne || false;

  // 定义字符集
  var typeMap = {
    uppercase: includeUppercase ? "ABCDEFGHIJKLMNOPQRSTUVWXYZ" : "",
    lowercase: includeLowercase ? "abcdefghijklmnopqrstuvwxyz" : "",
    number: includeNumbers ? "0123456789" : "",
    special: includeSpecialCharacters ? "!@#$%^&*()_+-=[]{}|;:,.<>?" : "",
    custom: customCharacters
  };

  // 获取所有启用的字符类型
  var enabledTypes = [];
  for (var key in typeMap) {
    if (typeMap[key]) {
      enabledTypes.push(key);
    }
  }

  // 验证输入
  if (!enabledTypes.length || length <= 0) {
    return "";
  }
  if (ensureAtLeastOne && length < enabledTypes.length) {
    return "";
  }

  // 构建所有字符集
  var allChars = enabledTypes.map(function (type) {
    return typeMap[type];
  }).join("");

  // 生成随机字符串
  var result = [];

  // 确保每种类型至少有一个字符
  if (ensureAtLeastOne) {
    enabledTypes.forEach(function (type) {
      var char = typeMap[type].charAt(Math.floor(Math.random() * typeMap[type].length));
      result.push(char);
    });
  }

  // 填充剩余的字符
  var remainingLength = length - result.length;
  for (var i = 0; i < remainingLength; i++) {
    var char = allChars.charAt(Math.floor(Math.random() * allChars.length));
    result.push(char);
  }

  // 打乱结果（Fisher–Yates shuffle）
  for (var i = result.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }

  return result.join('');
}

// 使用示例
generateRandomStr(); // 生成随机字符串-'RTtU#VhdYT)D)edT'
generateRandomStr({ length: 10 }); // 生成长度10的随机字符串-'Z,9DXkRU>P'
generateRandomStr({ includeUppercase: false }); // 生成不包含大写字母的随机字符串-'mx_?6c;?ud2)@ctn'
generateRandomStr({ includeLowercase: false }); // 生成不包含小写字母的随机字符串-'ZYQE=Y[1B#_28Y.,'
generateRandomStr({ includeNumbers: false }); // 生成不包含数字的随机字符串-'}cYgARKJMF.b}@fM'
generateRandomStr({ specialCharacters: false }); // 生成不包含特殊字符的随机字符串-'HkjV@cD?;US.M&z#'
generateRandomStr({ customCharacters: "①②③" }); // 生成包含自定义字符的随机字符串-'Ls)R[PucK%②,7DFn'
generateRandomStr({ length: 32, includeUppercase: false, customCharacters: "①②③" }); // 生成长度32不含大写包含自定义字符的随机字符串-'l3&#ke,%,?xz@g^[5<x②j0③;eu=at③#='
generateRandomStr({ length: 5, customCharacters: "▼①あ我βǎ癶ⅷ", ensureAtLeastOne: true }); // 生成长度5包含所有类型随机字符串(强制校验)-'.Zfあ3'
```
