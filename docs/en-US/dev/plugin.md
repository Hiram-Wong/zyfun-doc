# Plugin(experimental)

::: tip info

- Plug-in Center is used to extend the insufficiency of the software and provide more functions to the users.
- This feature integrates the `npm` package management tool into the software.

:::

## 1. Category

Plugin are currently categorized into `System Plugin`, `Ui Plugin` and `Mix Plugin`, and the differences between these plug-ins and their functions are described below.

1. System plugin: there may be no UI interface, after installation, the plug-in will start their own back-end services, and provide ports for users to use.
2. View plugin: will have a UI interface, used to interact with the user, does not have the ability to start services.
3. Mix plugin: both UI interface and back-end services provided

## 2. System plugin

### 2.1. Tree

```
system-plugin-demo
├─ package.json
├─ index.js
├─ README.md
```

### 2.2. File info

#### 2.2.1. `package.json`

```json:line-numbers
{
  "name": "system-plugin-demo",
  "pluginName": "system demo",
  "version": "0.0.0",
  "description": "this is a system plugin demo",
  "logo": "https://xxxx/upload/xxxb13xxx.png",
  "author": "zyfun",
  "main": "index.js",
  "pluginType": "system"
}
```

| field       | info                                 | remark           |
| ----------- | ------------------------------------ | ---------------- |
| name        | npm package name                     | `required`       |
| pluginName  | Display name                         | `required`       |
| version     | version                              | default: `0.0.0` |
| description | Describe what this plugin does       | default: ` `     |
| logo        | logo                                 | default: ` `     |
| author      | author                               | default: ` `     |
| main        | Entry file, Generally for `index.js` | `required`       |
| pluginType  | type, enum: `system`,`ui`,`mix`      | `system`         |

#### 2.2.2. `index.js`

Entry file

- The development code must provide `start` and `stop` methods in the entry file, corresponding to the start and stop of the plugin, respectively.
- Do not provide port `5173` [main program development port] | `9978` [main program backend interface].

::: code-group

```js:line-numbers [esm]
··· custom code

export { start, stop }
```

```js:line-numbers [commonjs]
··· custom code

module.exports { start, stop }
```

:::

#### 2.2.3. `README.md`

Some description of the project

```md
# System plugin demo

## This is an unprecedented system plugin

## When launched, it will provide services on port 5777.

...
```

### 2.3. Construct

Startup logic

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
      return !!resp; // boolean
    }

    return false;
  } catch (error) {
    console.error(`Module execution failed for ${method}`, (error as Error).message);
    return false;
  }
};

const pluginInfo = {}; // plugin info
const entryBasePath = fileURLToPath(dirname(pluginInfo.main));

const pool = workerpool.pool();

// start
await pool.exec(manageModule, [entryBasePath, pluginInfo.main, 'start']);

// stop
await pool.exec(manageModule, [entryBasePath, pluginInfo.main, 'stop']);
pool.terminate();
```

## 3. Ui plugin

### 3.1. Tree

```
ui-plugin-demo
├─ package.json
├─ index.html
```

### 3.2. File info

#### 3.2.1. `package.json`

```json:line-numbers
{
  "name": "ui-plugin-demo",
  "pluginName": "ui demo",
  "version": "0.0.0",
  "description": "this is a ui plugin demo",
  "logo": "https://xxxx/upload/xxxb13xxx.png",
  "author": "zyfun",
  "web": "index.html",
  "pluginType": "ui"
}
```

| field       | info                                   | remark           |
| ----------- | -------------------------------------- | ---------------- |
| name        | npm package name                       | `required`       |
| pluginName  | Display name                           | `required`       |
| version     | version                                | default: `0.0.0` |
| description | Describe what this plugin does         | default: ` `     |
| logo        | logo                                   | default: ` `     |
| author      | author                                 | default: ` `     |
| web         | Entry file, Generally for `index.html` | `required`       |
| pluginType  | type, enum: `system`,`ui`,`mix`        | `ui`             |

#### 3.2.2. `index.html`

Entry file

- The operating environment is browser-only (all the limitations of a browser are present).
- Need back-end request to send the request header can go to the interface `http://127.0.0.1:9978/api/v1/system/req`.
- No cross-domain restrictions, the bottom has been tampered with
- Local static resources with relative path

##### 3.2.2.1. **Pure html development case**

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

##### 3.2.2.2. **Engineering development case**

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

1. build

```bash
npm run build
```

2. Collate

Create a new `package.json` file in the `dist` directory, and configure the plugin information, The `dist` directory is the result of the plugin.

### 3.3. Construct

#### 3.3.1. 选型

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
