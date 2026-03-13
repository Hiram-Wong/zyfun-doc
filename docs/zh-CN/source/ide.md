# 写源工具

写源工具的重要性在于它极大地简化了开发者在开发源的工作流程。可以轻松的调试各个规则，快速完成源的编写流程。

> [实战视频](https://www.alipan.com/s/FjAW7STJeQP)

::: warning 注意

- 如果存在debug(即站点中key为debug)源, 则首次打开写源工具, 默认会加载debug数据。
- 如果已经打开过写源工具, 删除了debug(即站点中key为debug)源, 则会报错, 请刷新软件。
- 不同模式下执行逻辑不一致, 同时也关联了文件路径等, **`请根据实际情况选择模式`**。

:::

## 1. 顶栏

- 适配器: 加载不同的适配器
- 初始化:
  - 手动
  - 自动(每次编辑器内容修改后自动触发)
- 模板: 根据适配器加载模板(可能无模板)
- 文件:
  - 目录: 根据适配器跳转文件夹
  - 导入: 导入文件
  - 导出: 导出文件
- 解码: 编辑器加密内容根据适配器规则解码(可能无解码器)
- 调试: 查看实际效果
- 帮助: 帮助文档

## 2. 编辑

- 导航栏
  - 编辑器: 用于编辑查看规则代码
  - 网页源码: 用于编辑查看html代码
- 代码活动编辑区，用于编辑源代码

::: tip 提示

- 支持 `ctrl+f` 搜索关键词
- 拖拽文件可直接展示内容
- 右键 `Format Document` 可格式化美化代码

:::

![edit](/source/ide/edit.png)

## 3. 操作

### 3.1. 节点

#### 3.1.1. 源码

输入url，通过请求该地址获取源代码，将于源代码中输出，方便查看源代码dom结构，适用于源代码的获取。

::: info 请求参数说明

> 点击 □ 设置

- 响应编码: `UTF-8(默认)` | `GBK` | `GB2312` | `GB18030`
- 地址栏: `https://xx.xx` | `http://xx.xx`
- 请求头: json格式
  ```json
  { "User-Agent": "zyfun" }
  ```
- 请求类型(除GET方法): `application/json(默认)` | `application/x-www-form-urlencoded`
- 请求体(除GET方法): json格式
  ```json
  { "key": "01b97b" }
  ```

:::

![source](/source/ide/source.png)

#### 3.1.2. 列表

输入pdfa规则，匹配源代码内容，输出结果为列表。

::: warning 注意

必须先获取源代码，否则不生效

:::

![pdfa](/source/ide/pdfa.png)

#### 3.1.3. 节点

输入pdfh规则，匹配源代码内容。

::: warning 注意

必须先获取源代码，否则不生效

:::

![pdfh](/source/ide/pdfh.png)

### 3.2. 数据

#### 3.2.1. 初始化

编辑器内容根据适配器初始化。

::: details 点我查看示例数据返回

```json
{
  "api": "http://127.0.0.1:5757/api/debug",
  "ext": "",
  "categoryfilter": []
}
```

:::

![init](/source/ide/init.png)

#### 3.2.2. 分类

初始化后按分类规则匹配。

::: warning 注意

必须先初始化，否则不生效

:::

::: details 点我查看示例数据返回

```json
{
  "class": [
    {
      "type_id": "movies",
      "type_name": "电影"
    }
  ],
  "filters": {}
}
```

:::

![home](/source/ide/home.png)

#### 3.2.3. 首页

初始化后按首页规则匹配。

::: warning 注意

必须先初始化，否则不生效

:::

::: details 点我查看示例数据返回

```json
{
  "page": 1,
  "pagecount": 1,
  "total": 1,
  "list": [
    {
      "vod_id": "/tvshows/yyyx",
      "vod_name": "鱿鱼游戏",
      "vod_pic": "https://www.xxx.org/wp-content/uploads/2025/02/kuQO3bcg17t9wDSUXHF1oBOkZVl-185x278.jpg",
      "vod_remarks": "2021"
    }
  ]
}
```

:::

![homevod](/source/ide/homevod.png)

#### 3.2.4. 列表

初始化后按列表规则匹配。

::: warning 注意

必须先初始化，否则不生效

:::

::: info 参数说明

- t: 分类标识(根据分类数据class字段的type_id)[必传]
- f: 筛选条件(根据分类数据filters字段key和value字段中的n)[可选]
- pg: 页数[可选]

:::

::: details 点我查看示例数据

- t: "movies"
- f: "{class: '国产剧', area: '内地', year: '2024'}"
- pg: 1

:::

::: details 点我查看示例数据返回

```json
{
  "page": 1,
  "pagecount": 999,
  "total": 1,
  "list": [
    {
      "vod_id": "/movies/hdx",
      "vod_name": "好东西",
      "vod_pic": "https://www.xxx.org/wp-content/uploads/2025/02/kuQO3bcg17t9wDSUXHF1oBOkZVl-185x278.jpg",
      "vod_remarks": "Nov. 09, 2024"
    }
  ]
}
```

:::

![category](/source/ide/category.png)

#### 3.2.5. 详情

根据编辑器内容初始化源代码。

::: warning 注意

必须先初始化，否则不生效

:::

::: info 参数说明

- ids: 详情唯一标识(vod_id字段)[必传]

:::

::: details 点我查看示例数据

- ids: "/movies/hdx"

:::

::: details 点我查看示例数据返回

```json
{
  "page": 1,
  "pagecount": 1,
  "total": 1,
  "list": [
    {
      "vod_id": "/movies/hdx",
      "vod_name": "好东西",
      "vod_pic": "https://www.xxx.org/wp-content/uploads/2025/02/kuQO3bcg17t9wDSUXHF1oBOkZVl-185x278.jpg",
      "type_name": "剧情,爱情",
      "vod_year": "Nov. 09, 2024",
      "vod_remarks": "",
      "vod_actor": "邵艺辉,宋佳,钟楚曦,曾慕梅,章宇,赵又廷,任彬,张弛,周野芒,王菊,孔连顺",
      "vod_director": "邵艺辉",
      "vod_content": "单亲妈妈王铁梅带小孩王茉莉搬到新家后，结识了邻居小叶，两位性格迥异的女性，一个坚强，一个柔软，一个擅长给人当妈，一个擅长随时撒谎，面对旧创伤和新挑战，她们彼此温暖互相慰藉的故事。",
      "vod_play_from": "alists",
      "vod_play_url": "正片$mvsource=0&id=164720&type=hls"
    }
  ]
}
```

:::

![detail](/source/ide/detail.png)

#### 3.2.6. 搜索

根据编辑器内容初始化源代码。

::: warning 注意

必须先初始化，否则不生效

:::

::: info 参数说明

- wd: 搜索关键词[必传]
- pg: 页数[仅数字类型]

:::

::: details 点我查看示例数据

- wd: "鱿鱼"
- pg: 1

:::

::: details 点我查看示例数据返回

```json
{
  "page": 1,
  "pagecount": 10,
  "total": 100,
  "list": [
    {
      "vod_id": "/tvshows/yyyx",
      "vod_name": "鱿鱼游戏",
      "vod_pic": "https://www.xxx.org/wp-content/uploads/2025/02/kuQO3bcg17t9wDSUXHF1oBOkZVl-185x278.jpg",
      "vod_remarks": "电视"
    }
  ]
}
```

:::

![search](/source/ide/search.png)

#### 3.2.7. 播放

根据编辑器内容初始化源代码。

::: warning 注意

必须先初始化，否则不生效

:::

::: info 参数说明

- flag: 线路(根据详情数据vod_play_from字段, 其中多条线路时$分隔)[必传]
- play: 选集(根据详情数据vod_play_url字段集数链接, 其中多条线路时$$$分隔，不同集数#分隔前面时集数名称后面是链接)[必传]

:::

::: details 点我查看示例数据

```
- flag: "alists"
- play: "mvsource=0&id=164720&type=hls"
```

:::

::: details 点我查看示例数据返回

```json
{
  "parse": 0,
  "url": "https://play.xxx.life/m3/df635771739396055/42NjdhYzZiMTcyZWE5OSQyNTI4JDEkMTczOTM1Mjg1NQ67ac6b172ea95.m3u8"
}
```

:::

![play](/source/ide/play.png)

#### 3.2.8. 代理

根据编辑器内容初始化源代码。

::: warning 注意

必须先初始化，否则不生效

:::

::: info 参数说明

- url: 本地代理(必须以 `http://127.0.0.1:9978/proxy` 开头)[必传]

:::

::: details 点我查看示例数据

- url: "http://127.0.0.1:9978/proxy?do=js&url=http://media.xxx.com/20240428/30653_a4ea8975/index.m3u8"

:::

::: details 点我查看示例数据返回

```json
[
  200,
  "application/vnd.apple.mpegurl",
  "
  #EXTM3U
  #EXT-X-VERSION:3
  #EXT-X-ALLOW-CACHE:YES
  #EXT-X-MEDIA-SEQUENCE:170471784
  #EXT-X-TARGETDURATION:10
  #EXT-X-PROGRAM-DATE-TIME:2024-01-11T20:43:53+08:00
  #EXTINF:10.000, no desc
  http://gctxyc.liveplay.xxx.com/gc/gllj01_1_md-170471784.ts
  #EXT-X-PROGRAM-DATE-TIME:2024-01-11T20:44:03+08:00
  #EXTINF:10.000, no desc
  http://gctxyc.liveplay.xxx.com/gc/gllj01_1_md-170471785.ts
  #EXT-X-PROGRAM-DATE-TIME:2024-01-11T20:44:13+08:00
  #EXTINF:10.000, no desc
  http://gctxyc.liveplay.xxx.com/gc/gllj01_1_md-170471786.ts
  #EXT-X-PROGRAM-DATE-TIME:2024-01-11T20:44:23+08:00
  #EXTINF:10.000, no desc
  http://gctxyc.liveplay.xxx.com/gc/gllj01_1_md-170471787.ts
  "
]
```

:::

![proxy](/source/ide/proxy.png)

#### 3.2.9. 代理上传

将编辑完的内容通过后端api接口存储临时缓存并生成接口。

::: info 参数说明

- url: 本地代理(必须以 `http://127.0.0.1:9978/proxy` 开头)[必传]
- upload: [状态码, Content-Type, 响应内容]

:::

::: details 点我查看示例数据

- url: "http://127.0.0.1:9978/proxy?do=js&url=http://media.xxx.com/20240428/30653_a4ea8975/index.m3u8"
- text:
  ```json
  [
    200,
    "application/vnd.apple.mpegurl",
    `
    #EXTM3U
    #EXT-X-VERSION:3
    #EXT-X-ALLOW-CACHE:YES
    #EXT-X-MEDIA-SEQUENCE:170471784
    #EXT-X-TARGETDURATION:10
    #EXT-X-PROGRAM-DATE-TIME:2024-01-11T20:43:53+08:00
    #EXTINF:10.000, no desc
    http://gctxyc.liveplay.xxx.com/gc/gllj01_1_md-170471784.ts
    `
  ]
  ```

:::

![proxy-upload](/source/ide/proxy-upload.png)

## 4. 输出

![output](/source/ide/output.png)

- ①: 选项卡
  - 测试结果: 操作区操作后输出测试结果
  - 日志: 操作区操作中输出日志
- ②: 操作
  - 重连(仅选取日志时): 重连日志服务器
  - 清空: 清空输出内容
- ③: 数据输出(同时输出一份到控制台)
