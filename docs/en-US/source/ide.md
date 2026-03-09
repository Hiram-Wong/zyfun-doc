# IDE

The importance of a source writing tool is that it greatly simplifies the developer's workflow in developing sources. You can easily debug individual rules and quickly complete the source writing process.

> [Practical video](https://www.alipan.com/s/FjAW7STJeQP)

::: warning Wran

- If there is a debug (i.e., the site key is debug) source, the first time you open the Write Source tool, it will load the debug data by default.
- If you have already opened the Write Source tool and deleted the debug (i.e., the site key is debug) source, it will report an error, please refresh the software.
- The execution logic is not the same in different modes, and the file paths are also related, **`Please choose the mode according to the actual situation`**.

:::

## 1. Top bar

- Adapter: Load different adapters
- Init:
  - Manual
  - Automatic: triggered automatically after each editor content modification
- Templates: load templates according to adapters (may not have templates)
- File:
  - Directory: Jump folder according to adapter
  - Import: Import file according to adapter
  - Export: Export file according to adapter
- Decode: Editor encrypted content is decoded according to adapter rules (may not have decoder)
- Debugging: See the actual effect
- Help: Help documentation

## 2. Editor

- ①: Navigation
  - Editor: Used to edit rule code for viewing
  - Web Source: For editing and viewing the html code
- ②: Code active edit area for editing source code

::: tip Info

- Support `ctrl+f` search keywords
- Drag and drop files to display content directly
- Right-click `Format Document` option to format and beautify code.

:::

![edit](/source/ide/edit.png)

## 3. Action

### 3.1. Dom

#### 3.1.1. Source

Input url, by requesting the address to get the source code, will be output in the source code, easy to view the source code dom structure, applicable to the acquisition of source code.

::: info request

> Click □ config

- Encode: `UTF-8(Default)` | `GBK` | `GB2312` | `GB18030`
- URI: `https://xx.xx` | `http://xx.xx`
- Header: value typeof json
  ```json
  { "User-Agent": "zyfun" }
  ```
- Type(not get method): `application/json(Default)` | `application/x-www-form-urlencoded`
- Body(not get method): value typeof json
  ```json
  { "key": "01b97b" }
  ```

:::

![source](/source/ide/source.png)

#### 3.1.2. Pdfa

Input pdfa rule, match the source code content, the output result is a list.

::: warning Wran

Must get the source code first, otherwise it won't work.

:::

![pdfa](/source/ide/pdfa.png)

#### 3.1.3. Pdfh

Input pdfh rule, match the source code content, will be output in the rules.

::: warning Wran

Must get the source code first, otherwise it won't work.

:::

![pdfh](/source/ide/pdfh.png)

### 3.2. Data

#### 3.2.1. Init

The editor content is initialized according to the adapter.

::: details Click to see example data return

```json
{
  "api": "http://127.0.0.1:5757/api/debug",
  "ext": "",
  "categoryfilter": []
}
```

:::

![init](/source/ide/init.png)

#### 3.2.2. Home

Initialized and matched by home rules.

::: warning Wran

Must be initialized first or it won't take effect.

:::

::: details Click to see example data return

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

#### 3.2.3. HomeVod

Initialized and matched by homevod rules.

::: warning Wran

Must be initialized first or it won't take effect.

:::

::: details Click to see example data return

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

#### 3.2.4. Category

Initialized and matched by category rules.

::: warning Wran

Must be initialized first or it won't take effect.

:::

::: info Info

- t: Category identification (based on the type_id of the class field of the categorized data)[required]
- f: Filter conditions (based on n in the key and value fields of the filters field of the categorized data)[optional]
- pg: page[optional]

:::

::: details Click to see example parameters

- t: "movies"
- f: "{class: '国产剧', area: '内地', year: '2024'}"
- pg: 1

:::

::: details Click to see example data return

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

#### 3.2.5. Detail

Initialized and matched by detail rules.

::: warning Wran

Must be initialized first or it won't take effect.

:::

::: info Info

- ids: Detail unique identifier(vod_id field)[required]

:::

::: details Click to see example parameters

- ids: "/movies/hdx"

:::

::: details Click to see example data return

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

#### 3.2.6. Search

Initialized and matched by search rules.

::: warning Wran

Must be initialized first or it won't take effect.

:::

::: info Info

- wd: search keyword[required]
- pg: page[optional]

:::

::: details Click to see example parameters

- wd: "鱿鱼"
- pg: 1

:::

::: details Click to see example data return

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

#### 3.2.7. Play

Initialized and matched by play rules.

::: warning Wran

Must be initialized first or it won't take effect.

:::

::: info Info

- flag: Line (based on the details data vod_play_from field, where multiple lines are separated by $)[required]
- play: Selection of episodes (according to the details of the data vod_play_url field episode number link, where multiple lines when $ $ $ $ separation, different episodes # separated in front of the name of the episode followed by the link)[required]

:::

::: details Click to see example parameters

```
- flag: "alists"
- play: "mvsource=0&id=164720&type=hls"
```

:::

::: details Click to see example data return

```json
{
  "parse": 0,
  "url": "https://play.xxx.life/m3/df635771739396055/42NjdhYzZiMTcyZWE5OSQyNTI4JDEkMTczOTM1Mjg1NQ67ac6b172ea95.m3u8"
}
```

:::

![play](/source/ide/play.png)

#### 3.2.8. Proxy

Initialized and matched by proxy rules.

::: warning Wran

Must be initialized first or it won't take effect.

:::

::: info Info

- url: Local proxy(Must start with `http://127.0.0.1:9978/proxy`)[required]

:::

::: details Click to see example parameters

- url: "http://127.0.0.1:9978/proxy?do=js&url=http://media.xxx.com/20240428/30653_a4ea8975/index.m3u8"

:::

::: details Click to see example data return

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

#### 3.2.9. Proxy Upload

Store a temporary cache of the edited content through the back-end api interface and generate the interface.

::: info Info

- url: Local proxy(Must start with `http://127.0.0.1:9978/proxy`)[required]
- upload: [Status code, Content-Type, Response content]

:::

::: details Click to see example parameters

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

## 4. Output

![output](/source/ide/output.png)

- ①: Tab
  - Test Result: Output test results after operation of the operation area
  - Logger: Outputting logs during operation of the operation area
- ②: Action
  - Reconnect(Only when choose Logger): Reconnecting to the log server
  - Clear: Clear output content
- ③: Data output(Also output a copy to the console)
