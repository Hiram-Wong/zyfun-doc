# 播放器

## 1. 系统概述

本项目对市面上主流视频播放器技术的基础整合, 旨在成为视频播放领域的`“瑞士军刀”`, 打造既统一又灵活的播放解决方案，满足多样化的业务场景。

## 2. 技术选型

- **[VidstackPlayer](https://github.com/vidstack/player)(Star:1.8k)**: 构建并发布可用于生产的视频或音频播放器！功能强大、可定制、易于访问。作为备受推崇的Plyr3.X和Vime5.X的继承者。
- **[Plyr](https://github.com/sampotts/plyr)(现合入Vidstack Star:25.5k)**: 一个简单、轻量级、可访问和可定制的支持现代浏览器的 HTML5、YouTube和Vimeo媒体播放器。
- **[Vime](https://github.com/vime-js/vime)(现合入Vidstack Star:2.7k)**: 可定制、可扩展、可访问和框架无关的媒体播放器。
- **[DPlayer](https://dplayer.diygod.dev/zh)(Star:15.1k)**：一个简洁、易用的 HTML5 视频播放器，支持弹幕功能，常用于视频网站和在线教育平台。
  - **[分支-@tsukumijima](https://www.github.com/tsukumijima/DPlayer)**
- **[XgPlayer](https://h5player.bytedance.com/)(Star:7.9k)**：字节开源的一款带解析器、能节省流量的HTML5视频播放器。
- **[ArtPlayer](https://artplayer.org/document)(Star:2.3k)**：现代和功能齐全的HTML5视频播放器。
- **[NPlayer](https://nplayer.js.org/docs/)(Star:1.2k)**：可定制、插件化、响应式（支持移动、平板等多种设备）的弹幕视频播放器。
- **[MuiPlayer](https://github.com/muiplayer/hello-muiplayer)(Star:489)**：一款优秀的 HTML5 视频播放器组件。

> [TcPlayer](https://cloud.tencent.com/document/product/266/58772)、[AliPlayer](https://help.aliyun.com/zh/vod/developer-reference/integration)、[VePlayer](https://demo.volcvideo.com/common/veplayer/basic/example?tab=function-display), 这些均为商业播放器, 会上报云端数据。

## 3. 兼容性

> 仅代表自己使用后的感受, 没有数据支撑。

- **H266**：AliPlayer(授权)
- **H265**：VePlayer > XgPlayer > AliPlayer(授权) > (DPlayer|NPlayer|ArtPlayer)
- **其他**：VePlayer > TcPlayer > (DPlayer|NPlayer|ArtPlayer) > AliPlayer
- DPlayer 和 NPlayer 和 ArtPlayer 都需基于[hls.js](https://github.com/video-dev/hls.js)|[flv.js](https://github.com/Bilibili/flv.js)|[webtorrent](https://github.com/webtorrent/webtorrent)|[dash](https://github.com/Dash-Industry-Forum/dash.js)扩展，因此兼容性一致。
- TcPlayer：5.0版本后需要注册账号后才能使用
- VePlayer：必须配置日志上传id才能使用(可使用官方demo的ID: 348293)
- XgPlayer：`xgplayer-flv.js`=`flv.js`，`xgplayer-hls.js`=`hls.js`; h264`xgplayer-hls.js`和`xgplayer-flv.js`兼容性好一些，h265自研库`xgplayer-hls`和`xgplayer-flv`兼容性好一些
- VePlayer和XgPlayer均支持软解和硬解，虽然是同一底层但VePlayer软解明显比XgPlayer好用
- VidstackPlayer|Plyr|Vime不支持`flv.js`和`webtorrent`
- MuiPlayer：弹幕功能需购买专业版本
- [Chrome启用HEVC硬解码说明](https://github.com/StaZhu/enable-chromium-hevc-hardware-decoding/blob/main/README.zh_CN.md)
- [HEVC测试地址](https://lf3-cdn-tos.bytegoofy.com/obj/tcs-client/resources/video_demo_hevc.html)
- [Chrome渲染引擎导致黑屏](https://zhuanlan.zhihu.com/p/666477298)

## 4. 架构设计

### 4.1. 核心模块

- **播放器抽象层**：设计一个统一的播放器接口，该接口封装了各播放器库的公共方法和属性，如 play(), pause(), seek() 等，确保上层应用无需关心底层使用的是哪个播放器。
- **适配器层**：针对每个播放器（XGPlayer、DPlayer、NPlayer、ArtPlayer）开发适配器模块，将它们的功能映射到统一接口上，实现对特定播放器特性的调用和配置。
- **配置管理器**：提供一个中心化的配置管理系统，允许通过简单dom操作定制播放器皮肤、图标等。
- **资源加载器**：实现动态加载不同播放器库的逻辑，根据目标平台或用户需求自动选择最适合的播放器实现。

### 4.2. 遇到小坑

- **Dplayer弹幕不动**：css配置
  ```css
  .dplayer-danmaku .dplayer-danmaku-right.dplayer-danmaku-move {
    will-change: transform;
    -webkit-animation-name: 'danmaku'; /* 兼容性问题，需要加上-webkit- */
    animation-name: 'danmaku';
    -webkit-animation-timing-function: linear;
    animation-timing-function: linear;
    -webkit-animation-play-state: paused;
    animation-play-state: paused;
  }
  ```
- **Dplayer方法及功能缺失**: `off取消监听`扩展详见`CustomDPlayer`，画中画扩展详见`handlePipClick`
- **Dplayer弹幕问题**:
  - 在大量弹幕数据下, 请勿开启海量弹幕[炮火模式], 应设置`unlimited: false`, 否则会造成主进程阻塞, 个人测试1w条数据毕现
  - 开启海量弹幕再使用`seek`方法, 会导致`seek`前的弹幕重叠显示, 而不是直接跳过`seek`前弹幕内容
- **Dplayer播放下集获取不到真实地址**: `dp.video.currentSrc`获取的不是真实地址, 需使用`dp.options.video.url`获取, 但是切换地址后该值不会变需要在`dp.seitchVideo`后手动赋值
- **取消时间变动监听进度条不动**: 如果`off`事件全局取消`timeupdate`会将组件内部事件也清空, 导致`Nplayer`和`DPlayer`在使用切换下集时画面正常, 进度条渲染不变
- **暂停事件**: 触发暂停事件后, 时间变动监听不会立即暂停，实测会多出一次数据返回，且数据和最后一次返回一致
- **ArtPlayer发送弹幕显示两条**: `art.on('artplayerPluginDanmuku:emit', () => {art.plugins.artplayerPluginDanmuku.emit({})})`, 不用在监听发送事件在发送一次
- **ArtPlayer实例**:
  - 初始化两个实例挂载在同一个DOM上会导致报错, 多次创建要么先做判断，要么不挂在同一DOM元素上
  - `不要用vue中的ref响应式代理实例`否则会发现不生效, 应该用`shallowRef`或`let一个变量`
- **shaka-player-ts类型报错**
  - 解决方案1: 创建`global.d.ts`
    ```ts
    declare module 'shaka-player/dist/shaka-player.compiled' {
      export = shaka
    }
    ```
  - 解决方案2: 补丁 - 缺点补丁和版本号要一致, 补丁可能不能及时

    ```text
    # 补丁链接: https://gist.github.com/Security2431/2b28f17e11870bb4b0e347673e16d5ba#comments

    1. Run npm i -D patch-package.
    2. Download and move the shaka-player+4.3.4.patch file to /patches/shaka-player+4.3.4.patch in the root directory.
    3. Add "scripts": {"postinstall": "patch-package"} in package.json. This make patches to be applied each time people run npm install.
    4. Delete node_modules folder and execute npm install.
    ```

## 5. 示例代码

参考[github](https://github.com/Hiram-Wong/zyfun/tree/main/src/renderer/src/components/multi-player)

## 6. 结语

集成多播放器是一个吃力的事情, 就是文档方法搬运工。
