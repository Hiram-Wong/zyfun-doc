# Contribute

## 1. License

[AGPL-3.0](https://www.gnu.org/licenses/agpl-3.0)

## 2. Development

- Editor: [VS Code](https://code.visualstudio.com)
- Linter: [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- Formatter: [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

### 2.1. Setup Node.js

Download and install [Node.js v22.x.x](https://nodejs.org/en/download)

### 2.2. Setup pnpm

```bash
corepack enable
corepack prepare pnpm@10.27.0 --activate
```

### 2.3. Install Dependencies

```bash
pnpm install
```

### 2.4. Set ENV

```bash
cp .env.example .env
```

### 2.5. Start

```bash
pnpm dev
```

### 2.6. Debug

```bash
pnpm debug
```

Then input `chrome://inspect` in browser

### 2.7. Test

```bash
pnpm test
```

### 2.8. Build

```bash
# For windows
$ pnpm build:win

# For macOS
$ pnpm build:mac

# For Linux
$ pnpm build:linux
```

## 3. Arch

- MacOS(dmg)：arm64[Applechip]、x64[Intel]、universal[Generic]
- Windows(exe)：arm64[Snapdragon]、x64[Intel、Amd]、win-version.exe(Generic)
- Linux(image、deb、rpm)：arm64[Kunpeng、 PHYTIUM]、x64[Zhaoxin]

## 4. Dependence

- Some of the dependencies may depend on github, which requires a scientific connection
  - Enable Taobao mirrors, some dependencies may be 404, you need to switch to the official npm mirrors.
  - Compilation involves `electron-builder.yml` file `electronDownload` field.
- Compatible with Win7 Description
  - Electron 23 will include Chromium 110, no longer supports Windows (7/8/8.1) [click me to view](https://www.electronjs.org/zh/blog/windows-7-to-8-1-deprecation-notice)
  - Electron 23 will no longer support Win 7/8/8.1 from now on, recommend `"electron":"~22.3.27"`
  - Electron 23 below does not support upgrading fastif and related plugins, the highest version is `4.x`.
  - Upgrading cheerio is not supported under Electron 23, the highest version is `1.0.0-rc.12`.
  - Compatibility issues with puppeteer under Electron 23, recommended `"puppeteer-core":"~21.3.8", "puppeteer-in-electron":"^3.0.5"`.
- Enabling HEVC hard decoding instructions [click me to view](https://github.com/StaZhu/enable-chromium-hevc-hardware-decoding/blob/main/README.zh_CN.md)
- Synchronization library description
  - sync-fetch:
    - Synchronous HTTP request library
    - Renderer process + webworker thread running
  - sync-request:
    - main process + fork thread running
    - tree-kill termination (normal termination may not be clean, resulting in too many stray processes)
    - sync-rpc sub-process startup error (refer to [issue](https://github.com/ForbesLindesay/sync-rpc/issues/3))
- Plugin module description
  - `"npm": "7.24.2"` After that, the call `npm` command is no longer supported.
- `monaco-editor` unable to paste
  - Option 1: `win.webContents.paste()`, this option listens to `ctrl+v` will cause the normal input box to repeat the paste, it is recommended to listen to other shortcuts will be normal (adapted from user's habit).
  - Option 2: `editor.addAction` or `editor.onKeyDown` listens to keyboard press event, this option need to manually write the logic, only the editor body paste effective.
  - Option 3: `"monaco-editor":"^0.45.0"` and below, refer to [issue](https://github.com/microsoft/monaco-editor/issues/4855)
  - Option 4: `Electron` configuration `nodeIntegration: true` and `contextIsolation: false` will cause paste to fail, configure parameter to be reversed.
- `child_process` description
  - Line breaks are `\r\n` for `windows`, `\n` for `mac` and `linux`.
  - `windows` execution result is garbled, need `chcp 65001` to set encoding, such as get directory data `chcp 65001 | dir` (`|` role is to execute `dir` inherits `utf-8` encoding from `chcp 65001`)
  - Compilers after `"electron-builder":"^25.1.8"` fail to start `child_process` after packaging.
- Description of file operations
  - `FileSystemAccessAPI` is limited by browser sandbox, cannot access system directory.
  - You can use the `dialog` method provided by `Electron` with `fs`.

## 5. PR

1. Create questions about functionality, such as new components.
2. Branch the repo to your own account.
3. Clone your fork.
4. Create a new branch on top of main. If you want to add a new component, the branch name should be in the format component-[component-name]. (e.g. component-steps), and the commit message should be [component-name]: information about the commit.
5. Make sure that running build outputs the correct files.
6. Do a reset before creating the PR to keep the commit history clear. (merge request to branch main)
7. Provide some notes on PRs.
