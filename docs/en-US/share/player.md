# Player

## 1. Summarize

This project is the basic integration of the mainstream video player technology on the market, aiming to become the `Swiss Army Knife` in the field of video playback, to create both unified and flexible playback solutions to meet the diverse business scenarios.

## 2. Selection

- **[VidstackPlayer](https://github.com/vidstack/player)(Star:1.8k)**: Build and publish production-ready video or audio players! Powerful, customizable and easy to access. Serves as a successor to the highly respected Plyr 3.X and Vime 5.X.
- **[Plyr](https://github.com/sampotts/plyr)(Join Vidstack Star:25.5k)**: A simple, lightweight, accessible and customizable HTML5, YouTube and Vimeo media player with support for modern browsers.
- **[Vime](https://github.com/vime-js/vime)(Join Vidstack Star:2.7k)**: Customizable, extensible, accessible and framework-agnostic media player.
- **[DPlayer](https://dplayer.diygod.dev/zh)(Star:15.1k)**：A simple, easy-to-use HTML5 video player with pop-up support, commonly used in video websites and online education platforms.
  - **[Branch-@tsukumijima](https://www.github.com/tsukumijima/DPlayer)**
- **[XgPlayer](https://h5player.bytedance.com/)(Star:7.9k)**： Bytedance open source a traffic-saving HTML5 video player.
- **[ArtPlayer](https://artplayer.org/document)(Star:2.3k)**：Modern and fully functional HTML5 video player.
- **[NPlayer](https://nplayer.js.org/docs/)(Star:1.2k)**：Customizable, plug-in, responsive (supports multiple devices such as mobile, tablet, etc.) pop-up video player.
- **[MuiPlayer](https://github.com/muiplayer/hello-muiplayer)(Star:489)**：An excellent HTML5 video player component.

> [TcPlayer](https://cloud.tencent.com/document/product/266/58772)、[AliPlayer](https://help.aliyun.com/zh/vod/developer-reference/integration)、[VePlayer](https://demo.volcvideo.com/common/veplayer/basic/example?tab=function-display) these are commercial players that report data to the cloud.

## 3. Compatibility

> This is just a reflection of my own experience, and is not supported by data.

- **H266**：AliPlayer(auth)
- **H265**：VePlayer > XgPlayer > AliPlayer(auth) > (DPlayer|NPlayer|ArtPlayer)
- **Other**：VePlayer > TcPlayer > (DPlayer|NPlayer|ArtPlayer) > AliPlayer
- DPlayer 和 NPlayer 和 ArtPlayer 都需基于[hls.js](https://github.com/video-dev/hls.js)|[flv.js](https://github.com/Bilibili/flv.js)|[webtorrent](https://github.com/webtorrent/webtorrent)|[dash](https://github.com/Dash-Industry-Forum/dash.js)扩展，因此兼容性一致。
- TcPlayer：After version 5.0, Need to register an account before you can use it
- VePlayer：Must config log upload id(official demo's ID: 348293)
- XgPlayer：`xgplayer-flv.js`=`flv.js`，`xgplayer-hls.js`=`hls.js`; h264 scene `xgplayer-hls.js` `xgplayer-flv.js` better compatibility，h265 scene`xgplayer-hls` `xgplayer-flv` better compatibility
- Both VePlayer and XgPlayer support both soft and hard solving, although it is the same underlying layer but VePlayer soft solving is obviously better than XgPlayer.
- VidstackPlayer|Plyr|Vime not support `flv.js` and `webtorrent`
- MuiPlayer: The pop-up feature requires the purchase of the Pro version
- [Chrome enables hevc](https://github.com/StaZhu/enable-chromium-hevc-hardware-decoding/blob/main/README.zh_CN.md)
- [HEVC test](https://lf3-cdn-tos.bytegoofy.com/obj/tcs-client/resources/video_demo_hevc.html)
- [Render black screen](https://zhuanlan.zhihu.com/p/666477298)

## 4. Construct

### 4.1. Core

- **Player Abstraction Layer**: Design a unified player interface, which encapsulates the public methods and properties of each player library, such as play(), pause(), seek(), etc., to ensure that the upper-layer applications do not need to care about which player is used in the bottom layer.
- **Adapter Layer**: Develop adapter modules for each player (XGPlayer, DPlayer, NPlayer, ArtPlayer), mapping their functions to a unified interface to realize the invocation and configuration of specific player features.
- **Configuration Manager**: Provides a centralized configuration management system that allows customization of player skins, icons, etc. through simple dom operations.
- **Resource Loader**: implements the logic of dynamically loading different player libraries, automatically selecting the most suitable player implementation according to the target platform or user requirements.

### 4.2. Bug

- **Dplayer pop-ups don't move**：css config
  ```css
  .dplayer-danmaku .dplayer-danmaku-right.dplayer-danmaku-move {
    will-change: transform;
    -webkit-animation-name: 'danmaku'; /* Compatibility issues, need to add -webkit- */
    animation-name: 'danmaku';
    -webkit-animation-timing-function: linear;
    animation-timing-function: linear;
    -webkit-animation-play-state: paused;
    animation-play-state: paused;
  }
  ```
- **Dplayer methods and features missing**: `off cancel listener` extension detailed in `CustomDPlayer`, paint-in-picture extension detailed in `handlePipClick`.
- **Dplayer popup issue**:
  - In a large amount of popup data, please do not turn on the massive popup [fire mode], should be set to `unlimited: false`, otherwise it will cause the main process blocking, personal test 1w data now!
  - If you use the `seek` method with massive popups on, it will cause the popups before `seek` to overlap, instead of skipping the content of the popups before `seek`.
- **Dplayer can't get real address when playing next episode**: `dp.video.currentSrc` doesn't get real address, need to use `dp.options.video.url` to get it, but it won't change after switching address, you need to manually assign the value after `dp.stitchVideo`.
- **Cancel the timeupdate listener to keep the progress bar still**: If the `off` event is globally canceled, `timeupdate` will clear the component's internal events as well, resulting in a normal screen for `Nplayer` and `DPlayer` and the progress bar rendering will remain unchanged when switching between the next episodes.
- **pause event**: after triggering the pause event, timeupdate will not be paused immediately, but will return data one more time, and the data will be the same as the last time.
- **ArtPlayer sends a popup to show two lines**: `art.on('artplayerPluginDanmuku:emit', () => {art.plugins.artplayerPluginDanmuku.emit({})})`, don't need to listen to the send event in send once in the send event.
- **ArtPlayer instance**:
  - Initializing two instances mounted on the same DOM will result in an error, multiple creations should either be judged first or not be mounted on the same DOM element.
  - `Don't use vue's ref responsive proxy instance` or you'll find it won't work, use `shallowRef` or `let a variable`.
- **shaka-player ts type error**
  - Solution1: create `global.d.ts`
    ```ts
    declare module 'shaka-player/dist/shaka-player.compiled' {
      export = shaka
    }
    ```
  - Solution2: Patch - Disadvantage patch and version number should be the same, the patch may not be in time

    ```text
    # Patch Link: https://gist.github.com/Security2431/2b28f17e11870bb4b0e347673e16d5ba#comments

    1. Run npm i -D patch-package.
    2. Download and move the shaka-player+4.3.4.patch file to /patches/shaka-player+4.3.4.patch in the root directory.
    3. Add "scripts": {"postinstall": "patch-package"} in package.json. This make patches to be applied each time people run npm install.
    4. Delete node_modules folder and execute npm install.
    ```

## 5. Sample code

Refer to [github](https://github.com/Hiram-Wong/zyfun/tree/main/src/renderer/src/components/multi-player)

## 6. Conclusion

Integrating multiple players is a hard thing, that is, the document method porter.
