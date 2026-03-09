# 贡献代码

## 1. 开源协议

[AGPL-3.0](https://www.gnu.org/licenses/agpl-3.0)

## 2. 开发编译

- Editor: [VS Code](https://code.visualstudio.com)
- Linter: [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- Formatter: [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

### 2.1. 安装Node.js

下载并安装 [Node.js v22.x.x](https://nodejs.org/en/download)

### 2.2. 安装pnpm

```bash
corepack enable
corepack prepare pnpm@10.27.0 --activate
```

### 2.3. 安装依赖

```bash
pnpm install
```

### 2.4. 设置环境变量

```bash
cp .env.example .env
```

### 2.5. 启动

```bash
pnpm dev
```

### 2.6. 调试

```bash
pnpm debug
```

打开浏览器访问 `chrome://inspect` 进行调试

### 2.7. 测试

```bash
pnpm test
```

### 2.8. 编译

```bash
# For windows
$ pnpm build:win

# For macOS
$ pnpm build:mac

# For Linux
$ pnpm build:linux
```

## 3. 架构说明

- MacOS(dmg)：arm64[Applechip]、x64[Intel]、universal[通用-不区分架构]
- Windows(exe)：arm64[骁龙]、x64[Intel、Amd]、win-版本号.exe(通用-不区分架构)
- Linux(image、deb、rpm)：arm64[鲲鹏、飞腾]、x64[兆兴]

## 4. 依赖说明

- 部分依赖可能依赖github, 需要科学上网
  - 启用淘宝镜像, 部分依赖可能404, 需切换到npm官方镜像
  - 编译涉及`electron-builder.yml`文件`electronDownload`字段
- 兼容win7说明
  - Electron 23 将包含 Chromium 110, 不再支持Windows(7/8/8.1)[点我查看](https://www.electronjs.org/zh/blog/windows-7-to-8-1-deprecation-notice)
  - Electron 23 起不再支持 Win 7/8/8.1, 推荐`"electron": "~22.3.27"`
  - Electron 23 以下不支持升级fastif及相关插件, 最高版本为`4.x`
  - Electron 23 以下不支持升级cheerio, 最高版本为`1.0.0-rc.12`
  - Electron 23 以下puppeteer存在兼容性问题, 推荐`"puppeteer-core": "~21.3.8", "puppeteer-in-electron": "^3.0.5"`
- 启用HEVC硬解码说明 [点我查看](https://github.com/StaZhu/enable-chromium-hevc-hardware-decoding/blob/main/README.zh_CN.md)
- 同步库说明
  - sync-fetch:
    - 渲染进程 + webworker线程运行
    - 主进程 + fork线程运行
  - sync-request: 主进程 + fork线程运行
    - tree-kill结束(普通结束可能结束不干净, 导致游离进程过多)
    - sync-rpc子进程启动报错(参考[issue](https://github.com/ForbesLindesay/sync-rpc/issues/3))
- 插件模块说明
  - `"npm": "7.24.2"` 之后的不再支持调用`npm`命令
- `monaco-editor`无法粘贴
  - 方案1: `win.webContents.paste()`, 该方案监听`ctrl+v`会导致普通输入框重复粘贴, 建议监听其他快捷键则正常(改编使用者习惯)
  - 方案2: `editor.addAction`或`editor.onKeyDown`监听键盘按下事件, 该方案需手动写逻辑, 仅编辑器主体粘贴生效
  - 方案3: `"monaco-editor": "^0.45.0"`及以下版本, 参考[issue](https://github.com/microsoft/monaco-editor/issues/4855)
  - 方案4: `Electron`配置`nodeIntegration: true`和`contextIsolation: false`会导致粘贴失效, 配置参数取反
- `child_process`说明
  - `windows`换行符为`\r\n`, `mac`和`linux`为`\n`
  - `windows`执行结果乱码, 需`chcp 65001`设置编码, 如获取目录数据`chcp 65001 | dir`(`|`的作用为执行`dir`继承`chcp 65001`的`utf-8`编码)
  - `"electron-builder": "^25.1.8"`之后的编译器存在打包后`child_process`启动失败问题
- 文件操作说明
  - `FileSystemAccessAPI`受浏览器沙箱限制, 无法访问系统目录
  - 可以使用`Electron`提供的`dialog`方法配合`fs`进行操作

## 5. PR说明

1. 创建有关功能的问题，如新组件。
2. 将 repo 分支到自己的账户。
3. 克隆你的分叉。
4. 在 main 基础上创建一个新分支，如果要添加新组件，分支名称格式应为 component-[组件名称]。(例如 component-steps)，而提交信息的格式应为 [组件名称]：关于提交的信息。
5. 确保运行 build 会输出正确的文件。
6. 在创建 PR 之前进行重置，以保持提交历史清晰。(合并请求至分支 main)
7. 提供一些关于 PR 的说明。
