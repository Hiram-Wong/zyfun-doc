# Skill

## 1. Convert garbled data to gb2312

```js:line-numbers{4,6}
import iconv from 'iconv';
import axios from 'axios';
const resp = await axios.get(url, {
  responseType: 'arraybuffer', // node env
});
return iconv.decode(resp.data, 'gb2312');
```

## 2. Disable HTTPS certificate verification

```js:line-numbers{8}
import axios from 'axios';
const config = {
  method: 'POST',
  url: 'https://www.moedm.net/index.php/api/vod',
  headers: {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36 Edg/126.0.0.0',
  },
  rejectUnauthorized:false, // Disable certificate verification
  data: {}
};
const resp = await axios(config)
```

## 3. Convert string to object

```js:line-numbers{2}
const code = '[1,3,4]'; // typeof string
const jsonCode = new Function(`return ${code}`)(); // typeof object
```

## 4. Convert DOM list to string

> Commonly used to extract actor data

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

## 5. Code string to get content

> Commonly used to extract content from a code string without using regular expressions

```js:line-numbers{2}
const html = `var name = "zyplayer"; name = "zyfun";`;
eval(html);
console.log(name);
```

## 6. Self-executing code

> Commonly used to execute encrypted code in a supplementary environment and avoid polluting the global scope

```js:line-numbers{34}
// Encrypted code
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
(code)(); // After execution, the JSON object will have the decrypt method
console.log(JSON);
```

## 7. Timestamp

```js:line-numbers
// Millisecond-level timestamp (13 digits)
new Date().getTime();
new Date().valueOf();
Date.now();
+new Date();
// Second-level timestamp (10 digits)
Math.floor(new Date().getTime() / 1000);

+new Date();
// Second-level timestamp (10 digits)
Math.floor(new Date().getTime() / 1000);
```

## 8. Generate unique identifier (uuid4)

> Commonly used to generate unique IDs, here are three algorithms, you can choose one

```js:line-numbers
const generateUUID = () => {
  if (crypto && typeof crypto.randomUUID === "function") {
    // Algorithm 1: randomUUID
    return crypto.randomUUID();
  } else if (crypto && typeof crypto.getRandomValues === "function") {
    // Algorithm 2: getRandomValues
    return "10000000-1000-4000-8000-100000000000".replace(/[018]/g, (c) =>
      (
        +c ^
        (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (+c / 4)))
      ).toString(16)
    );
  } else {
    // Algorithm 3: Math.random
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

## 9. JSONP data handling

> Commonly used to fetch data in cross-domain environments

```js:line-numbers{6,10,16}
// Solution 1: Mount jsonpCallback
import axios from 'axios';
// Generate name (can be fixed or random), refer to ajax generation rules (to avoid unnecessary checks)
const jsonpCallback = "jQuery" + (Math.random() + "").replace(".", "") + "_" + new Date().getTime();
// Mount jsonpCallback, recommended to mount on window in browser or globalThis in Node
globalThis[jsonpCallback] = function (data) { return data };
// Send jsonp request to receive data, data is the return value of jsonpCallback(xxx) function
const { data }  = await axios.get(url);
// Get data
const res = eval(data);

// Solution 2: Empty jsonpCallback function
import axios from 'axios';
const { data }  = await axios.get(url);
// Get data
const res = eval(`${data}`);
```

## 10. Random string

```js:line-numbers
/**
 * Generate a random string
 * Enable strict validation, data `length must be >= number of types`, otherwise return an empty string
 * Custom characters do not support emoji characters
 *
 * @param {Object} options Configuration options
 * @param {Number} options.length Length of the random string, default is 16
 * @param {Boolean} options.includeUppercase Whether to include uppercase letters, default is true
 * @param {Boolean} options.includeLowercase Whether to include lowercase letters, default is true
 * @param {Boolean} options.includeNumbers Whether to include numbers, default is true
 * @param {Boolean} options.includeSpecialCharacters Whether to include special characters, default is true
 * @param {String} options.customCharacters Custom characters, default is empty
 * @param {Boolean} options.ensureAtLeastOne Whether to ensure at least one character of each type, default is false
 * @returns {String} Random string
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

  // Define character sets
  var typeMap = {
    uppercase: includeUppercase ? "ABCDEFGHIJKLMNOPQRSTUVWXYZ" : "",
    lowercase: includeLowercase ? "abcdefghijklmnopqrstuvwxyz" : "",
    number: includeNumbers ? "0123456789" : "",
    special: includeSpecialCharacters ? "!@#$%^&*()_+-=[]{}|;:,.<>?" : "",
    custom: customCharacters
  };

  // Get all enabled character types
  var enabledTypes = [];
  for (var key in typeMap) {
    if (typeMap[key]) {
      enabledTypes.push(key);
    }
  }

  // Validate input
  if (!enabledTypes.length || length <= 0) {
    return "";
  }
  if (ensureAtLeastOne && length < enabledTypes.length) {
    return "";
  }

  // Build all character sets
  var allChars = enabledTypes.map(function (type) {
    return typeMap[type];
  }).join("");

  // Generate random string
  var result = [];

  // Ensure at least one character of each type
  if (ensureAtLeastOne) {
    enabledTypes.forEach(function (type) {
      var char = typeMap[type].charAt(Math.floor(Math.random() * typeMap[type].length));
      result.push(char);
    });
  }

  // Fill the remaining characters
  var remainingLength = length - result.length;
  for (var i = 0; i < remainingLength; i++) {
    var char = allChars.charAt(Math.floor(Math.random() * allChars.length));
    result.push(char);
  }

  // Shuffle the result (Fisher–Yates shuffle)
  for (var i = result.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }

  return result.join('');
}

// Usage examples
generateRandomStr(); // Generate a random string-'RTtU#VhdYT)D)edT'
generateRandomStr({ length: 10 }); // Generate a random string of length 10-'Z,9DXkRU>P'
generateRandomStr({ includeUppercase: false }); // Generate a random string without uppercase letters-'mx_?6c;?ud2)@ctn'
generateRandomStr({ includeLowercase: false }); // Generate a random string without lowercase letters-'ZYQE=Y[1B#_28Y.,'
generateRandomStr({ includeNumbers: false }); // Generate a random string without numbers-'}cYgARKJMF.b}@fM'
generateRandomStr({ specialCharacters: false }); // Generate a random string without special characters-'HkjV@cD?;US.M&z#'
generateRandomStr({ customCharacters: "①②③" }); // Generate a random string with custom characters-'Ls)R[PucK%②,7DFn'
generateRandomStr({ length: 32, includeUppercase: false, customCharacters: "①②③" }); // Generate a random string of length 32 without uppercase letters but with custom characters-'l3&#ke,%,?xz@g^[5<x②j0③;eu=at③#='
generateRandomStr({ length: 5, customCharacters: "▼①あ我βǎ癶ⅷ", ensureAtLeastOne: true }); // Generate a random string of length 5 with all types (strict validation)-'.Zfあ3'
```
