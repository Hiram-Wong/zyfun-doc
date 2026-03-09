# 软件介绍

::: tip 重要提醒

- 仅本站与Github发布, 请勿上当受骗!
- 请各管理者不要费力宣传及引流本软件!
- 请务必支持`正版版权`, 我们不提倡盗版!
- 开始前, 请务必`详读并同意用户协议`, 确保遵守相关规定!
- 此软件仅供学习交流使用, 请勿用于商业用途, 否则后果自负, 请在下载后24小时内删除!
- 本文档适用于最新版软件, 老版本可能部分布局存在差异!
  :::

## 1. 简介

> 名称说明: `zyfun`[新名称 >=3.3.8] `zyplayer`[老名称 <=3.3.7]

`zyfun`是一款免费、极简、全能的跨平台影音管家，一站式管理 T1-T4 全类型资源，内置多核播放器随心切换。独家老板键，一键隐身摸鱼无忧。用观影发现世界！

### 1.1. logo含义

![logo含义](/guide/app/logoExplain.png)

### 1.2. 架构

![架构](/guide/app/arch.png)

### 1.3. AI知识库(支持提问)

- [由readmex提供支持[点我前往]](https://readmex.com/Hiram-Wong/ZyPlayer)
- [由deepwiki提供支持[点我前往]](https://deepwiki.com/Hiram-Wong/zyfun)
- [由zread提供支持[点我前往]](https://zread.ai/Hiram-Wong/zyfun)

## 2. 预览

::: details 点我查看部分截图
| 影视 | 直播 |
| :-----------------------------------------: | :--------------------------------------: |
| ![影视](/guide/app/app-film.png) | ![直播](/guide/app/app-live.png) |
| **历史** | **播放** |
| ![历史](/guide/app/app-history.png) | ![播放](/guide/app/app-play.png) |
:::

## 3. 安装

### 3.1. 兼容性

> 如下为物理机+虚拟机测试(含x86+arm)

> 国产系统涉及 `UOS(deepin)` `Anolis(阿里龙蜥)` `Kylin(中标麒麟)` `openEuler(华为欧拉)` `SuperRed(万里红)`

| 测试平台 |                                                                                                        操作系统(版本)[芯片架构]                                                                                                         |
| :------: | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
| windows  |                                                                                                    `win10[arm]` `win11[arm｜x86_64]`                                                                                                    |
|   mac    |                                                                                                         `Sequoia(15.1)[m1-pro]`                                                                                                         |
|  linux   | `Ubuntu 20.04 LTS[arm]` `Anolis OS8.9[arm]` `UOS v20(1070)[arm]` `Kali(2022.1)[arm]` `Cinnamon 5.6.8[x86_64]` `Kylin SP1(2403)[arm]` `openEuler-24.03-LTS[arm] + UKUI` `ElementaryOS 8[x86_64]` `Mint 22[x86_64]` `SuperRed 32[x86_64]` |
| chromos  |                                                                                                           `FydeOS 19[x86_64]`                                                                                                           |

::: details 点我查看部分测试截图
| Ubuntu 20.04 LTS[arm] | Anolis OS8.9[arm] |
| :-------------------------------------------------------------: | :------------------------------------------------------------: |
| ![Ubuntu](/guide/app/test-linux-ubuntu.png) | ![Anolis](/guide/app/test-linux-anolis.png) |
| **UOS v20(1070)[arm]** | **Kali[arm]** |
| ![UOS](/guide/app/test-linux-uos.png) | ![Kali](/guide/app/test-linux-kali.png) |
| **Kylin SP1(2403)[arm]** | **openEuler-24.03-LTS[arm]** |
| ![Kylin](/guide/app/test-linux-kylin.png) | ![openEuler](/guide/app/test-linux-openEuler.png) |
| **ElementaryOS 8[x86_64]** | **Mint 22[x86_64]** |
| ![ElementaryOS](/guide/app/test-linux-elementaryos.png) | ![Mint](/guide/app/test-linux-mint.png) |
| **SuperRed 32[x86_64]** | **FydeOS 19[x86_64]** |
| ![SuperRed](/guide/app/test-linux-superred.png) | ![FydeOS](/guide/app/test-fydeos.png) |
:::

### 3.2. 下载

> **开发版下载**: 需登录Github账号

> **最低要求**: 和chromium内核要求保持一致

| 操作系统 | x64 | arm64 | loong64 | 发行版                                                                                                                                                                                                                      | 开发版                                                                            | 最低要求   |
| :------: | :-: | :---: | :-----: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | ---------- |
| Windows  | ✅  |  ✅   |   ➖    | [GitHub](https://github.com/Hiram-Wong/zyfun/releases)                                                                                                                                                                      | [GitHub](https://github.com/Hiram-Wong/zyfun/actions/workflows/nightly-build.yml) | >= win10   |
|  MacOS   | ✅  |  ✅   |   ➖    | [GitHub](https://github.com/Hiram-Wong/zyfun/releases)                                                                                                                                                                      | [GitHub](https://github.com/Hiram-Wong/zyfun/actions/workflows/nightly-build.yml) | >= macOS12 |
|  Linux   | ✅  |  ✅   |   ❌    | [GitHub](https://github.com/Hiram-Wong/zyfun/releases) <br/> [如意玲珑应用商店](https://store.linyaps.org.cn/) <br/> [AUR软件包](https://aur.archlinux.org/packages?O=0&SeB=nd&K=zyfun&outdated=&SB=p&SO=d&PP=50&submit=Go) | [GitHub](https://github.com/Hiram-Wong/zyfun/actions/workflows/nightly-build.yml) |            |
| Harmony  | ❌  |  ❌   |   ➖    |                                                                                                                                                                                                                             |

### 3.3. 常见问题

#### 3.3.1. MacOS 安装后打开提示「文件已损坏」

```bash
sudo spctl --master-disable
sudo xattr -cr /Applications/zyfun.app
```

#### 3.3.2. Linux Appimage运行失败

> Running as root without --no-sandbox is not supported

```bash
./zyfun.AppImage --no-sandbox
```

> dlopen()：error loading libfuse.so.2

```bash
sudo apt-get install libfuse2
```

> Exiting GPU process due to errors during initialization

```bash
xhost +
```

#### 3.3.3. Linux deb包安装失败

> Package libnss3-1d is not installed

```bash
sudo apt-get install libnss3-1d
```

> Package libxss1 is not installed

```bash
sudo apt-get install libxss1
```

#### 3.3.4. Linux rpm包安装失败

> Dependency check failed libXScrnSaver is needed

```bash
sudo yum install epel-release
sudo yum install libXScrnSaver
```

> Dependency check failed xdg-utils is needed

```bash
sudo yum install xdg-utils
```

## 4. 路径

### 4.1. 默认路径

- **MacOS**:
  - 数据库/文件/插件/日志 路径: `~/Library/Application Support/zyfun/`
  - 二进制 路径: `~/.zy/bin/`
- **Linux**:
  - 数据库/文件/插件/日志 路径: `~/.config/zyfun/`
  - 二进制 路径: `~/.zy/bin/`
- **Windows**:
  - 数据库/文件/插件/日志 路径: `%USERPROFILE%\AppData\Roaming\zyfun\`
  - 二进制 路径: `%USERPROFILE%\.zy\bin\`
  <!-- - **OpenHarmony**:
  - 数据库/文件/插件/日志 路径: `/data/storage/zyfun/base/files/log`
  - 二进制 路径: `~/.zy/bin/`-->

### 4.2. 自定义路径

#### 4.2.1.查看自定义路径

参考默认路径

#### 4.2.2. 配置方法[重新安装需重新设置]

> 将 `{custom_path}` 替换为所需路径; `--user-data-dir` 前面有空格

- MacOS:
  ```bash
  appname=zyfun
  cd "/Applications/$appname.app/Contents/MacOS/"
  sudo mv "$appname" $appname.real
  sudo printf '#!/bin/bash\ncd "/Applications/%s.app/Contents/MacOS"\n"/Applications/%s.app/Contents/MacOS/%s.real" --user-data-dir="{custom_path}"' "$appname" "$appname" "$appname" > $appname
  sudo chmod +x $appname
  ```
  ![MacCustomPath](/guide/app/mac-custom-path.png)
- Linux:
  - Appimage
  ```bash
  ./zyfun.AppImage --user-data-dir={custom_path}
  ```
  ![LinuxCustomPath](/guide/app/linux-custom-path-appimage.png)
  - deb
    > 暂未找到方案
- Windows:
  ```bash
  右键属性->目标->末尾添加 --user-data-dir="{custom_path}"
  ```
  ![WinCustomPath](/guide/app/win-custom-path.png)

## 5. 历程

- 2.x 版本为`ZY-Player`由`@Hunlongyu`首发
  - 数据源仅支持`xml`
- 3.x 版本为`ZyPlayer`由`@Hiram-Wong`二开
  - Icon图标由`@fourbeauty`设计贡献
  - 数据源支持多种格式
    - `[t0]xml` `[t1]json` `[t3]py`由`@Hiram-Wong`提供技术支持
    - `[t3]drpy` `[t4]hipy` `t4[drpyS]`由`@hjdhnx`提供技术支持
    - `csp_xbpq` `csp_xyq` `csp_appysv2`由`@LoyDgIk` `@α`提供技术支持
    - `catvod[nodejs]`由`开源项目@catvod`提供技术支持
  - 集成多播放器
    - 内置`xgplayer` `artplayer` `oplayer` ~~`nplayer`~~ ~~`dplayer`~~
    - 支持调用系统播放器
  - **破坏性(重要说明)**
    - `<=3.3.7` 所有功能基于前端(含webworker), 数据为json文件 [`兼容性好`]
    - `>3.3.7 & <=3.4.1` 前后端分离(含fork线程), 数据为`pglite数据库` [`符合设计逻辑` `兼容性有所降低`]
    - `>3.3.8 & >=3.4.1` 数据为`sqlite`

