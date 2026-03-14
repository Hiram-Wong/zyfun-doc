# 软件数据

::: tip 说明

- 数据格式是软件非常重要的一部分
- 请**严格按照数据结构**填写, 避免不必要的报错`(如数据字段类型不匹配)`
- 数据合并
  - `<3.3.9`版本: 请先手动导出后编辑数据后导入`(软件直接导入为覆盖数据)`
  - `>=3.3.9`版本: 选择追加导入`(不会过滤数据, 请自行删除重复数据)`

:::

## 1. 配置格式

::: details 点我展开查看数据格式

```json:line-numbers
{
  "analyze": [
    {
      "id": "fddfb425-6fd9-0b39-459f-a21f69739a6e", // 数据唯一uuid标识(不可重复)
      "key": "51793af6-c923-5504-85db-0ef686624dec", // <3.4.0 启用> 业务唯一标识(不可重复)
      "name": "Parse", // 名称(展示用)
      "url": "https://xxx.top/?jx=", // <3.4.1 **弃用**> 解析源地址(仅兼容旧版本)
      "api": "https://xxx.top/?jx=", // <3.4.1 启用> 解析源地址(推荐使用)
      "type": 0, // 解析类型(<=3.4.0: 0=web,1=json | >=3.4.1: 1=web,2=json)
      "flag": [], // <3.4.1 启用> 解析线路/标签标识
      "headers": {}, // <3.4.0 启用> 请求头配置(预留字段)
      "script": "", // <3.4.1 启用> 执行脚本，仅 type=web 时生效
      "isActive": true, // 是否启用(true=启用,false=禁用)
      "createdAt": 1768310498000, // <3.4.1 启用> 创建时间戳(ms)
      "updatedAt": 1768310498000 // <3.4.1 启用> 更新时间戳(ms)
    }
  ],
  "iptv": [
    {
      "id": "fddfb425-6fd9-0b39-459f-a21f69739a6e", // 数据唯一uuidv标识(不可重复)
      "key": "51793af6-c923-5504-85db-0ef686624dec", // <3.4.0 启用> 业务唯一标识(不可重复)
      "name": "Iptv", // 名称(展示用)
      "url": "https://xxx.com/m3u/iptv.m3u", // <3.4.1 **弃用**> 直播源地址(仅兼容旧版本)
      "api": "https://xxx.com/m3u/iptv.m3u", // <3.4.1 启用> 直播源地址(推荐使用)
      "type": 1, // 解析类型(<=3.4.0: remote=远程,local=本地, manual=文本 | >=3.4.1: 1=远程,2=本地,3=文本)
      "epg": "https://epg.112114.eu.org/?ch={name}&date={date}", // 电子节目单地址[string]
      "logo": "https://epg.112114.eu.org/logo/{name}.png", // 台标地址[string] - 3.3.8启用该参数
      "headers": {}, // <3.4.0 启用> 请求头配置(预留字段)
      "isActive": true, // 是否启用(true=启用,false=禁用)
      "createdAt": 1768310498000, // <3.4.1 启用> 创建时间戳(ms)
      "updatedAt": 1768310498000 // <3.4.1 启用> 更新时间戳(ms)
    }
  ],
  "channel": [
    {
      "id": "fddfb425-6fd9-0b39-459f-a21f69739a6e", // 数据唯一uuidv4标识(不可重复)
      "name": "Channel", // 名称(展示用)
      "url": "https://xxx.com/m3u/iptv.m3u8", // <3.4.1 **弃用**> 播放地址(仅兼容旧版本)
      "api": "https://xxx.com/m3u/iptv.m3u8", // <3.4.1 启用> 播放地址(推荐使用)
      "logo": "https://xxx.com/logo/xxx.png", // <3.4.1 启用> 台标地址
      "playback": "", // <3.4.1 启用> 预留回播参数
      "group": "默认", // 分组
      "createdAt": 1768310498000, // <3.4.1 启用> 创建时间戳(ms)
      "updatedAt": 1768310498000 // <3.4.1 启用> 更新时间戳(ms)
    }
  ],
  "sites": [
    {
      "id": "fddfb425-6fd9-0b39-459f-a21f69739a6e", // 数据唯一uuidv4标识(不可重复)
      "key": "51793af6-c923-5504-85db-0ef686624dec", // <3.4.0 启用> 业务唯一标识(不可重复)
      "name": "Film", // 名称(展示用)
      "api": "https://www.xxx.com/api.php/provide/vod/", // 接口地址
      "playUrl": "", // 配合解析去url地址
      "search": 0, // 是否支持搜索(<=3.4.0: 0= 关闭,1=聚合搜索,2=仅搜索 | >=3.4.1: true= 开启,false=关闭)
      "group": "切片", // 分组
      "type": 1, // 适配器类型(0=T0_XML,1=T1_JSON,6=T4_DRPYS,7=T3_DRPY,8=T4_CATVOD,9=T3_XBPQ,10=T3_XYQ,11=T3_APPYSV2,12=T3_PY,13=T3_ALIST)
      "ext": "", // 扩展参数
      "categories": "电视,影视", // 按顺序展示所配置的分类 不配置则默认展示所有分类[string]
      "isActive": true // 是否启用(true=启用,false=禁用)
      "createdAt": 1768310498000, // <3.4.1 启用> 创建时间戳(ms)
      "updatedAt": 1768310498000 // <3.4.1 启用> 更新时间戳(ms)
    }
  ],
  "drive": [
    {
      "id": "fddfb425-6fd9-0b39-459f-a21f69739a6e", // 数据唯一uuidv4标识(不可重复)
      "key": "51793af6-c923-5504-85db-0ef686624dec", // <3.4.0 启用> 业务唯一标识(不可重复)
      "name": "alist", // 名称(展示用)
      "server": "http://alist.xxx.pro/", // 网盘地址
      "showAll": false, // 是否展示全部(true=全部,false=仅视频)
      "startPage": "", // 开始页路径
      "search": false, // 是否支持搜索(true=启用,false=禁用)
      "headers": "{}", // 请求头(预留字段)
      "params": "{}", // 参数(预留字段)
      "isActive": true // 是否启用(true=启用,false=禁用)
    }
  ], // <3.4.1 **弃用**>
  "setting": [
    {
      "version": "3.3.2", // <3.2.2 启用> 当前版本(一定要根据实际填写,不然数据库执行会报错)
      "theme": "system", // 主题 (<=3.4.0: auto=跟随系统,light=亮色,dark=暗色 | system=跟随系统,light=亮色,dark=暗色)
      "lang": "zh_CN", // <3.3.4 启用> 语言(<=3.4.0: zh_CN=简体中文,en_US=英文 | system=更随系统,zh_CN=简体中文,zh_TW=繁体中文,en_US=英文)
      "zoom": 1, // <3.4.1 启用> 界面缩放比例(预留)
      "proxy": {
        "type": "none", // 代理类型(system=系统代理,custom=自定义代理,direct=直连)
        "url": "", // 代理地址(支持socks5/http/https协议)
        "bypass": "" // 忽略主机名
      }, <3.4.1 启用> 代理设置
      "defaultHot": "kylive", // <3.4.1 **弃用**> 热搜(kylive=酷云数据,enlightent=云合数据)
      "hot": "kylive", // <3.4.1 启用> 热搜(baidu=百度,douban=豆瓣,enlightent=云合,komect=移动爱家,kylive=酷云,quark=夸克)
      "defaultSearchRecommend": "site", // 搜索推荐 site:站点 quark:夸克 baidu:百度 douban:豆瓣  弃用
      "defaultSearchType": "site", // <3.4.1 **弃用**> 全局搜索模式 site:本站 group:组内 all:全部
      "defaultFilterType": false, // <3.3.7 启用, 3.4.1 **弃用**> 影视搜索过滤关键词
      "site": {
        "searchMode": "site", // 全局搜索模式 site:本站 group:组内 all:全部
        "filterMode": false, // 影视搜索过滤关键词
      }, // <3.4.1 启用> 影视设置
      "defaultIptvEpg": "https://epg.112114.eu.org/?ch={name}&date={date}", // <3.4.1 **弃用**> iptv电子节目单(name=频道名称 date=日期)
      "defaultIptvLogo": "https://epg.112114.eu.org/logo/{name}.png", // <3.4.1 **弃用**> iptv台标(name=频道名称)
      "iptvSkipIpv6": true, // <3.3.8 **弃用**> iptv是否跳过ipv6节目
      "iptvMarkIp": true, // <3.3.8 启用, 3.4.1 **弃用**> iptv标识IP类型
      "iptvThumbnail": true, // <3.4.1 **弃用**> iptv是否显示缩略图
      "iptvStatus": true, // <3.3.8 **弃用**> iptv是否检测延迟
      "iptvDelay": true, // <3.3.8 启用, 3.4.1 **弃用**> iptv是否检测延迟
      "live": {
        "ipMark": true, // IP类型
        "thumbnail": false, // 缩略图
        "delay": false, // 延迟测速
        "epg": "https://epg.112114.eu.org/?ch={name}&date={date}", // 电子节目单(name=频道名称 date=日期)
        "logo": "https://epg.112114.eu.org/logo/{name}.png", // 台标(name=频道名称)
      }, // <3.4.1 启用> 直播设置
      "defaultSite": "51793af6-c923-5504-85db-0ef686624dec", // site 默认源标识
      "defaultIptv": "993841fe-5e91-5e5d-35d6-5be81822960b", // iptv 默认源标识
      "defaultAnalyze": "fddfb425-6fd9-0b39-459f-a21f69739a6e", // analyze 默认源标识
      "defaultDrive": "3293dc45-cf14-9c66-3028-5b7765b240b7", // <3.4.1 **弃用**> drive 默认源标识
      "defaultViewCasual": "", // <3.3.4 启用 3.3.5 **弃用**> 随心看
      "barrage": {
        "url": "", // 弹幕地址
        "id": "name", // 弹幕接口返回数据对应的id
        "key": "danmuku", // 弹幕接口返回数据对应的key
        "support": ["qq", "qiyi", "youku", "mgtv"], // 弹幕支持的线路
        "start": "0", <3.4.1 **弃用**> // 返回数据对应的开始时间下标
        "time": 0, // <3.4.1 启用> 返回数据对应的开始时间下标
        "mode": "1", // <3.4.1 **弃用**> 返回数据对应的位置下标
        "type": 1, // <3.4.1 启用> 返回数据对应的位置下标
        "color": 2, // 返回数据对应的颜色下标(<=3.4.0: string | >=3.4.1: number)
        "content": "4" // <3.4.1 **弃用**> 返回数据对应的内容下标
        "text": 4 // <3.4.1 启用> 返回数据对应的内容下标
      }, // <3.3.4 启用> 弹幕参数
      "analyzeFlag": ["youku", "qq", "iqiyi", "qiyi", "letv", "leshi", "sohu", "tudou", "pptv", "mgtv", "imgo"], // <3.4.1 **弃用**> 解析标识
      "broadcasterType": "xgplayer", // <3.3.4 **弃用**> 播放器(xgplayer=西瓜播放器,dplayer=呆呆播放器,custom=调外部播放器)
      "externalPlayer": "", // <3.3.4 **弃用**> 调外部播放器(类型为custom启用)
      "playerMode": {
        "type": "xgplayer", // 播放器(xgplayer=西瓜播放器,artplayer=艺术播放器,custom=调外部播放器)
        "external": "" // 调外部播放器(类型为custom启用)
      }, // <3.3.4 启用, 3.4.1 **弃用**>
      "player": {
        "type": "xgplayer", // 播放器(xgplayer=西瓜播放器,artplayer=艺术播放器,custom=调外部播放器)
        "external": "" // 调外部播放器(类型为custom启用)
      }, // <3.4.1 启用>
      "softSolution": false, // 软解(预留字段 true=启用,false=禁用)
      "skipStartEnd": false, // <3.3.5 **弃用**> 是否跳过首尾空白
      "agreementMask": true, // <3.4.1 **弃用**> 是否同意协议
      "disclaimer": true, // <3.4.1 启用> 是否同意协议
      "recordShortcut": "Shift+Command+Z", // <3.4.1 **弃用**> 老板键
      "bossKey": "Shift+Command+Z", // <3.4.1 启用> 老板键
      "snifferType": "pie", // <3.3.4 **弃用**> 嗅探模式(pie=内置嗅探,iframe=原生嗅探)
      "snifferMode": {
        "type": "pie", // 嗅探模式(pie=内置嗅探,custom=三方嗅探)
        "url": "" // 三方嗅探接口(类型为custom时启用)
      }, // <3.3.4 启用, 3.4.1 **弃用**>
      "sniffer": {
        "type": "cdp", // 嗅探模式(cdp=内置嗅探,custom=三方嗅探)
        "url": "" // 三方嗅探接口(类型为custom时启用)
      }, // <3.4.1 启用>
      "selfBoot": false, // <3.4.1 **弃用**> 是否开机自启动
      "autoStart": false, // <3.4.1 启用> 是否开机自启动
      "hardwareAcceleration": true, // 是否启用硬件加速
      "ua": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Safari/537.36", // User-Agent
      "dns": "" // <3.3.7 启用> DNS-over-HTTP
      "webdavUrl": "https://dav.jianguoyun.com/dav/", // <3.3.4 **弃用**> webdav同步盘地址
      "webdavUsername": "", // <3.3.4 **弃用**> webdeav用户名
      "webdavPassword": "", // <3.3.4 **弃用**> webdav密码
      "webdav": {
        "sync": false, // 自动同步
        "data": {
          "url": "https://dav.jianguoyun.com/dav/", // webdav同步盘地址
          "user": "", // webdav用户名
          "password": "" // webdav密码
        }
      }, // <3.3.4 启用, 3.4.1 **弃用**>
      "cloud": {
        "sync": false, // 自动同步
        "type": "webdav", // 备份类型(webdav=webdav同步盘, icloud=icloud云盘仅mac)
        "data": {
          "url": "https://dav.jianguoyun.com/dav/", // webdav同步盘地址
          "user": "", // webdav用户名
          "password": "" // webdav密码
        } // 仅类型为webdav启用
      }, // <3.4.1 启用>
      "ai": {
        "server": "",  // AI服务器地址
        "key": "", // API密钥
        "model": "gpt-3.5-turbo" // 模型名称
      }, // <3.3.5 启用, 3.4.1 **弃用**>
      "aigc": {
        "type": "openai", // AI类型(仅支持openai)
        "server": "",  // AI服务器地址
        "key": "", // API密钥
        "model": "gpt-3.5-turbo" // 模型名称
      }, // <3.4.1 启用> AI设置
      "timeout": 5000, // <3.3.5 启用> 全局请求超时(ms)
      "restoreWindowPositionAndSize": false, // <3.3.7 **弃用**> 是否记录窗口位置
      "windowPosition": {
        "status": false, // 是否记录窗口位置
        "position": {
          "width": 1000,
          "height": 640
        }, // <3.3.7 **弃用**> 窗口位置
        "position_main": {
          "width": 1000,
          "height": 640
        }, // <3.3.7 启用> 记录主窗口位置
        "position_play": {
          "width": 875,
          "height": 550
        } // <3.3.7 启用> 记录播放窗口位置
      }, // <3.4.1 **弃用**>
      "debug": false, // <3.3.7 启用> 用于部分调试
    }
  ]
}
```

:::

## 2. 配置示例

### 2.1. 快捷配置

> 设置 -> 数据配置 - 快捷配置

| 类型      |                    截图                    | 备注                    |
| --------- | :----------------------------------------: | ----------------------- |
| Tvbox     |    ![tvbox](/guide/data/easy-tvbox.png)    | 仅兼容部分数据          |
| Catvod    |   ![catvod](/guide/data/easy-catvod.png)   | 仅支持node环境,不要打包 |
| Drpy(js0) | ![drpy_js0](/guide/data/easy-drpy_js0.png) | 仅支持老版js0模式       |

### 2.2. 影视

> 设置 -> 影视配置

| 类型            |                        截图                        | 必填参数              | 备注                    |
| --------------- | :------------------------------------------------: | --------------------- | ----------------------- |
| T0[xml]         |        ![xml](/guide/data/site-t0[xml].png)        | 接口                  |                         |
| T1[json]        |       ![json](/guide/data/site-t1[json].png)       | 接口                  |                         |
| T3[js_drpy]     |    ![js_drpy](/guide/data/site-t3[js_drpy].png)    | 扩展:接口或规则字符串 |                         |
| T3[csp_xbpq]    |   ![csp_xbpq](/guide/data/site-t3[csp_xbpq].png)   | 扩展:接口或规则字符串 |                         |
| T3[csp_xyq]     |    ![csp_xyq](/guide/data/site-t3[csp_xyq].png)    | 扩展:接口或规则字符串 |                         |
| T3[js_catopen]  | ![js_catopen](/guide/data/site-t3[js_catopen].png) | 接口                  |                         |
| T3[csp_appysv2] |  ![catvod](/guide/data/site-t3[csp_appysv2].png)   | 扩展:接口或规则字符   |                         |
| T3[py]          |         ![py](/guide/data/site-t3[py].png)         | 接口                  | 需安装`python`环境      |
| T3[alist]       |      ![alist](/guide/data/site-t3[alist].png)      | 扩展:规则字符         |                         |
| T4[drpy_js0]    |   ![drpyjs0](/guide/data/site-t4[drpy_js0].png)    | 接口                  |                         |
| T4[drpys]       |      ![drpys](/guide/data/site-t4[drpys].png)      | 接口                  |                         |
| T4[catvod]      |     ![catvod](/guide/data/site-t4[catvod].png)     | 接口                  | 仅支持node环境,不要打包 |

## 3. 其他说明

### 3.1. [t3]drpy

1. 上传本地包
   1. 实验室->写源工具->模式`T3[js_drpy]`
   2. 实验室->写源工具->文件->目录[`会打开一个文件夹`]
   3. `drpy_dzlive`整个文件夹丢到上一步打开的文件夹
   4. 订阅链接: `http://127.0.0.1:9978/api/v1/file/film/make/file/drpy_dzlive`
2. 导入数据: 设置->数据配置->快捷配置->选择tvbox并输入订阅链接->追加/覆盖

![drpy](/guide/data/other-drpy.png)

### 3.2. [t4]drpys

1. 安装插件
   1. 获取插件代码: 浏览器打开[drpy-node repo](https://github.com/hjdhnx/drpy-node)->code->Download ZIP
      ![drpys-repo](/guide/data/other-drpys-repo.png)
   2. 导入插件: 实验室->扩展程序->安装->前往指定目录->解压上一步获取的压缩包->重命名为drpy-node->选择框选择drpy-node->点击安装
      ![drpys-plugin](/guide/data/other-drpys-plugin.png)
   3. 启动插件: 点击状态开关
      ![drpys-start](/guide/data/other-drpys-start.png)
   4. 获取订阅链接: 浏览器打开`http://127.0.0.1:5757`->右键`本地配置接口-动态本地`->复制链接地址
      ![drpys-link](/guide/data/other-drpys-link.png)
2. 导入数据: 设置->数据配置->快捷配置->选择tvbox并输入订阅链接->追加/覆盖
   ![drpys-import](/guide/data/other-drpys-import.png)

### 3.3. [t3]py

1. 安装uv模块: 实验室->扩展程序->环境->选择uv模块安装
   ![py-uv](/guide/data/other-py-uv.png)
2. 导入数据
   1. 上传本地包
      1. 实验室->写源工具->模式`T3[py]`
      2. 实验室->写源工具->文件->目录[`会打开一个文件夹`]
      3. 在上一步打开的文件夹中创建一个`py`文件夹, 并将数据复制到该文件夹内
      4. 订阅链接: `http://127.0.0.1:9978/api/v1/file/film/auto/file/py`
         ![py-folder](/guide/data/other-py-folder.png)
   2. 导入数据: 设置->数据配置->快捷配置->选择tvbox并输入订阅链接->追加/覆盖
      ![py-import](/guide/data/other-py-import.png)
3. 初始化: 影视->选择一个py源将自动初始化所需环境

::: details 点我查看自动初始化失败处理方法

二进制路径请前往[软件介绍-路径](/zh-CN/guide/introduction#_4-路径)查看

```bash
# windows
cd {install path}/resources/app.asar.unpacked/resources/t3PyBase
{binary path}/uv.exe sync --native-tls

# mac
cd {install path}/Resources/app.asar.unpacked/resources/t3PyBase
{binary path}/uv sync --native-tls

# linux
cd {install path}/resources/app.asar.unpacked/resources/t3PyBase
{binary path}/uv sync --native-tls
```

:::

::: details 点我查看安装自定义依赖

二进制路径请前往[软件介绍-路径](/zh-CN/guide/introduction#_4-路径)查看

```bash
# windows
cd {install path}/resources/app.asar.unpacked/resources/t3PyBase
# 修改pyproject.toml文件dependencies字段
{binary path}/uv.exe sync --native-tls

# mac
cd {install path}/Resources/app.asar.unpacked/resources/t3PyBase
# 修改pyproject.toml文件dependencies字段
{binary path}/uv sync --native-tls

# linux
cd {install path}/resources/app.asar.unpacked/resources/t3PyBase
# 修改pyproject.toml文件dependencies字段
{binary path}/uv sync --native-tls
```

:::

### 3.4. 源动力

1. 获取订阅链接
   1. 使用邮箱注册账户[有账号则跳过]
   2. 登录账户
   3. 输入授权的ip地址点击订阅
   4. 在弹窗中获取订阅链接
2. 导入数据: 设置->数据管理->快捷配置->选择tvbox+输入订阅链接->覆盖/追加

![sourcepower](/guide/data/other-sourcepower.png)
