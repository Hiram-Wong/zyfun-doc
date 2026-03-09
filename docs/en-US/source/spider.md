# Spider

::: danger Warn

Crawlers need to be careful, do not use for illegal purposes.

:::

## 1. Open DevTool

- Method1: Press f12 to open the developer tool
- Method2: Trigger by clicking
  ![open-dev-tool](/source/spider/spider-openDevTool.png)

## 2. Panel Introduction

![info-1](/source/spider/spider-info-1.png)
![info-2](/source/spider/spider-info-2.png)
![info-3](/source/spider/spider-info-3.png)
![info-4](/source/spider/spider-info-4.png)
![info-5](/source/spider/spider-info-5.png)

## 3. Request detail

The request details field contains: `Headers` `Payload` `Response` `Preview` `Initiator` `Timing` `Cookie`.

### 3.1. Headers: Request General Information, Response Header, Request Header

![info-req-1](/source/spider/spider-reqinfo-1.png)

### 3.2. Payload: Request Parameters

![info-req-2](/source/spider/spider-reqinfo-2.png)
![info-req-3](/source/spider/spider-reqinfo-3.png)

### 3.3. Response: Server return content

![info-req-4](/source/spider/spider-reqinfo-4.png)

### 3.4. Preview: Response parsed content

> Such as: the return content is html tags, preview is parsed as html web page to display; return content is a resource class, may be the same as the two, such as css, js files are displayed file content.

![info-req-5](/source/spider/spider-reqinfo-5.png)

### 3.7. Initiator: The source that triggered the request

> Generally used for anti-crawler code encryption parameters debugging.

![info-req-6](/source/spider/spider-reqinfo-6.png)

### 3.6. Timing: Time consumed to complete the request

> Generally don't care.

![info-req-7](/source/spider/spider-reqinfo-7.png)

### 3.7. Cookie：Request and response cookies

![info-req-8](/source/spider/spider-reqinfo-8.png)

## 4. Anti-craw

- header
  - 1. User-Agent
  - 2. Referer
  - 3. Cookie
  - 4. Custom header
- ip
  - 1. using proxy pools
- waterpool
  - 1. 5s Shield - `Anomaly Parameters`
  - 2. Captcha - `Ocr Recognition`
  - 3. Slider
  - 4. Robot authentication - `Browser fingerprinting`
  - 5. Click validation - `Automation techniques`

## 5. Infinite debugger solution

To the web page to view the page when the network request found that the page into the debugger mode, continue to execute down, loop into the breakpoint debugging.

![info-debug](/source/spider/spider-debug-info.png)

### 5.1. Disable all breakpoints

Disable breakpoints first (`click to turn blue`) -> continue to next step (`click to turn ⏸`).

![info-debug-1](/source/spider/spider-debug-1.png)

### 5.2. Disable local breakpoints

Right-click at the top of the breakpoint code and select `Never pause here` or `Add conditional short point (advanced usage)`, `Become ? symbol`.

![info-debug-2](/source/spider/spider-debug-2.png)

### 5.3. File replacement

Find the original file, find the corresponding code, `Replace the file after deleting the debugger related logic` (here you can delete the contents of the setInterval timer).

![info-debug-3](/source/spider/spider-debug-3.png)

### 5.4. Function emptying

> Be sure to do this before the debugger enters (`tip you can set the network request to low 4g or 3g | or add the code in the first js file loaded`)

```js:line-numbers
// This is business code that has nothing to do with setInterval, so just leave it empty.
setInterval = function(){}
```

![info-debug-4](/source/spider/spider-debug-4.png)

### 5.5. Hook

> Be sure to do this before the debugger enters (`tip you can set the network request to low 4g or 3g | or add the code in the first js file loaded`)

```js:line-numbers
const _setInterval = setInterval;  // The original setInterval function is preserved
setInterval = function (a,b) {
    if (a.toString().indexOf('debugger') == -1) {
        return function() {}; // If 'debugger' is not included, an empty function is returned, which means that no action will be performed.
    } else {
        _setInterval(a,b);  // If 'debugger' is included, the original _setInterval function is used to set the timer.
    }
}

// The overridden method returns a string
Function.prototype.toString = function () {
    return `function ${this.name}() { [native code] }`
}
```

### 5.6. Block loading

- Some proxy tools can be used to block script requests with the filename developer_tools, for example.
- Electron is a chrome, using the electron interface capability to block
  ![info-debug-electron](/source/spider/spider-debug-electron.png)

## 6. Tool

Common Tools: `postman` `apifox` `httpie`

Tool to quickly send requests, facilitate debugging, and verify that data parameters are correct.

![httpid](/source/spider/spider-httpie.png)

## 7. Actual combat

> `qiuqiu` author share (**authorized**), the following content is only for the record and learn the knowledge of reptiles, prohibit commercial use.

### 7.1. Disabled console and F12

- URL: https://gaze.run/play/7c0fbeb7980215909a80fc4aab6d4dcf
- Solution: Replace the source code, change false to true, save and refresh the page.
  ```js:line-numbers
  document.onkeydown = function () {
      var e = window.event || arguments[0];
      if (e.keyCode == 123) {
          return false; // [!code --]
          return true; // [!code ++]
      }
  }
  ```

### 7.2. Console detection and page redirection

- URL: https://gaze.run/play/7c0fbeb7980215909a80fc4aab6d4dcf
- Key code:
  ```js:line-numbers
  devtoolsDetector.addListener(function(isOpen) {
      if(isOpen&&!Rain){
          self.location.href="https://baidu.com";
      }
  });
  ```
- Solution: Use hook script, replace the source code locally, and remove the corresponding detection code.
  ```js:line-numbers
  window.onbeforeunload = function () {
      debugger
  }
  ```

### 7.3. Infinite debugger

#### 7.3.1. Eval exec

- Key code
  ```js
  eval(atob('ZGVidWdnZXI='))
  ```
- Solution: hook script - `replace debugger keyword`
  ```js:line-numbers{3-6}
  (function() {
      var _eval = window.eval;
      window.eval = function(x) {
          _eval(x.replace("debugger;","  ; "));
      }; // Bypass debugger
      window.eval.toString = _eval.toString; // Anti-debugger detection
  })();
  ```

#### 7.3.2. Constructor to generate infinite debugger

- Solution: hook script - `rewrite debugger function`
  ```js:line-numbers
  AAA = Function.prototype.constructor;
  Function.prototype.constructor = function (a) {
      if (a == "debugger") {
          return function () {};
      }
      return AAA(a);
  }
  ```

#### 7.3.3. Disable breakpoints or js script loading

- Key Screenshots
  ![step1](/source/spider/debugger-disableDebug-1.png)
  ![step2](/source/spider/debugger-disableDebug-2.png)

#### 7.3.4. Right-click and choose not to stay here at all

> Some sites may have multiple breakpoints requiring multiple operations.

- URL: https://antispider8.scrape.center/
- Key Screenshots
  ![step1](/source/spider/debugger-disableDebug-3.png)

#### 7.3.5. The debugger is in the timer

- Key code:
  ```js:line-numbers{1}
  setInterval((function() {
      debugger ;console.log("debugger")
  }), 1e3)
  ```
- Solution: hook script - `Recognize the debugger reset function, other normal response timers`
  ```js:line-numbers{3-6}
  let _setInterval = setInterval
  setInterval = function(a, b) {
      if (a.toString().indexOf('debugger')== -1) {
          return null;
      }
      _setInterval(a, b)
  }
  ```
