# 插件(实验性)

::: tip 说明

- 插件中心用于扩展软件的不足性，为用户提供更多功能。
- 该功能在软件中集成了`npm`包管理工具。

:::

## 1. 插件分类

插件分类目前分为 `系统插件`、`视图插件` 和 `混合插件`, 下面分别介绍这插件的区别和作用。

1. 系统插件: 可能无UI界面, 安装完成后, 插件会启动自己后端服务, 并提供端口供用户使用。
2. 视图插件: 都会有UI界面, 用于和用户交互, 不具备启动服务能力。
3. 混合插件: 同时提供UI界面和后端服务。

## 2. 系统插件

### 2.1. 目录结构

```
system-plugin-demo
├─ package.json
├─ index.js
├─ README.md
```

### 2.2. 文件说明

#### 2.2.1. `package.json`

```json:line-numbers
{
  "name": "system-plugin-demo",
  "pluginName": "系统插件demo",
  "version": "0.0.0",
  "description": "这是一个系统插件demo",
  "logo": "https://xxxx/upload/xxxb13xxx.png",
  "author": "zyfun",
  "main": "index.js",
  "pluginType": "system"
}
```

| 字段        | 说明                                | 备注         |
| ----------- | ----------------------------------- | ------------ |
| name        | npm包名称                           | `必填`       |
| pluginName  | 显示名称                            | `必填`       |
| version     | 版本                                | 默认:`0.0.0` |
| description | 描述这个插件的作用                  | 默认:空      |
| logo        | 图标                                | 默认:空      |
| author      | 作者                                | 默认:空      |
| main        | 入口文件, 一般为`index.js`          | `必填`       |
| pluginType  | 插件类型, 枚举: `system`,`ui`,`mix` | `system`     |

#### 2.2.2. `index.js`

入口文件

- 开发代码必须在入口文件中提供`start`和`stop`方法, 分别对应插件的启动和停止
- 不得提供`5173`端口[主程序开发端口] | `9978`[主程序后端接口]

::: code-group

```js:line-numbers [esm]
··· 自定义code

export { start, stop }
```

```js:line-numbers [commonjs]
··· 自定义code

module.exports { start, stop }
```

:::

#### 2.2.3. `README.md`

项目一些描述

```md
# 系统插件demo

## 这是一个史无前例的系统插件

## 启动后将提供 5777 端口提供服务

...
```

### 2.3. 设计架构

启动逻辑

```js:line-numbers
import workerpool from 'workerpool';
import { resolve } from 'path';

const manageModule = async (entryBasePath: string, modulePath: string, method: 'stop' | 'start'): Promise<boolean> => {
  const workerpool = await import('workerpool');

  const hasLifecycle = (obj: unknown, method: 'start' | 'stop'): obj is Record<typeof method, () => unknown> => {
    return typeof obj === 'object' && obj !== null && typeof (obj as any)[method] === 'function';
  };

  try {
    process.chdir(entryBasePath);

    let rawMod;
    if (method === 'start') {
      rawMod = await import(modulePath);
      globalThis.entryModule = rawMod;
    } else if (method === 'stop') {
      rawMod = globalThis.entryModule;
    }

    if (!rawMod) {
      console.warn(`Module not found`);
      return false;
    }

    const cand1 = rawMod?.default ?? undefined;
    const cand2 = (() => {
      const { default: _default, ...rest } = rawMod;
      return Object.keys(rest).length > 0 ? rest : undefined;
    })();

    let mod = {};
    if (hasLifecycle(cand1, method)) mod = cand1;
    if (hasLifecycle(cand2, method)) mod = cand2;

    if (mod && typeof mod === 'object' && Object.keys(mod).length === 0) {
      console.warn(`Module not implement ${method} method`);
      return false;
    }

    const fn = mod?.[method];
    if (typeof fn === 'function') {
      const resp = await fn();
      return !!resp; // 布尔
    }

    return false;
  } catch (error) {
    console.error(`Module execution failed for ${method}`, (error as Error).message);
    return false;
  }
};

const pluginInfo = {}; // 插件信息
const entryBasePath = fileURLToPath(dirname(pluginInfo.main));

const pool = workerpool.pool();

// 启动
await pool.exec(manageModule, [entryBasePath, pluginInfo.main, 'start']);

// 停止
await pool.exec(manageModule, [entryBasePath, pluginInfo.main, 'stop']);
pool.terminate();
```

## 3. 视图插件

### 3.1. 目录结构

```
ui-plugin-demo
├─ package.json
├─ index.html
```

### 3.2. 文件说明

#### 3.2.1. `package.json`

```json:line-numbers
{
  "name": "ui-plugin-demo",
  "pluginName": "视图插件demo",
  "version": "0.0.0",
  "description": "这是一个视图插件demo",
  "logo": "https://xxxx/upload/xxxb13xxx.png",
  "author": "zyfun",
  "web": "index.html",
  "pluginType": "ui"
}
```

| 字段        | 说明                                | 备注         |
| ----------- | ----------------------------------- | ------------ |
| name        | npm包名称                           | `必填`       |
| pluginName  | 显示名称                            | `必填`       |
| version     | 版本                                | 默认:`0.0.0` |
| description | 描述这个插件的作用                  | 默认:空      |
| logo        | 图标                                | 默认:空      |
| author      | 作者                                | 默认:空      |
| web         | 入口文件, 一般为`index.html`        | `必填`       |
| pluginType  | 插件类型, 枚举: `system`,`ui`,`mix` | `ui`         |

#### 3.2.2. `index.html`

插件的入口文件

- 运行环境为纯浏览器(浏览器该有的限制都有)
- 需要后端请求发送请求头可走接口`http://127.0.0.1:9978/api/v1/system/req`
- 无跨域限制, 底层已篡改
- 本地静态资源用相对路径

##### 3.2.2.1. **纯html开发**

::: code-group

```html:line-numbers [index.html]
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./xxx.css">
    <title>Html App</title>
  </head>
  <body>
    <div id="app">
      ...
    </div>
    <script src="./main.js"></script>
  </body>
</html>
```

```js:line-numbers [main.js]
...

console.log('hello world');
```

:::

##### 3.2.2.2. **工程化开发案例**

::: code-group

```js:line-numbers [vite.config.js]
import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
  base: './', // 设置基础路径为当前目录, 重要[否则加载路径不对]
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src/assets') // 自己设置别名[可选]
    }
  }
});
```

```js:line-numbers [package.json]
{
  ...
  "scripts": {
    "dev": "vite",
    "build": "vite build"
  },
  "devDependencies": {
    "vite": "^7.3.1",
  }
}
```

```html:line-numbers [index.html]
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Vite App</title>
  </head>
  <body>
    <div id="app">
      ...
    </div>
    <script type="module" src="./src/main.js"></script>
  </body>
</html>
```

```js:line-numbers [main.js]
...

console.log('hello world');
```

:::

1. 编译

```bash
npm run build
```

2. 整理文件

`dist`目录下新建一个`package.json`文件, 需配置相关插件信息, `dist`目录即为插件的结果

### 3.3. 设计架构

::: code-group

```js:line-numbers {3-8} [vite.config.js]
...
plugins: [
  vue({
    template: {
      compilerOptions: {
        isCustomElement: (tag) => tag === 'webview'
      },
    },
  })
]
```

```js:line-numbers {5} [main.js]
new BrowserWindow({
  ...
  webPreferences: {
    ...
    webviewTag: true
  },
});
```

```js:line-numbers [index.vue]
<webview
  src="file:///xxxx"
  disablewebsecurity
  allowpopups
  nodeIntegration
/>
```

:::
