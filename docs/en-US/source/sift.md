# Sift

Static filtering is used to simplify the manual splicing and cumbersome filtering of the filtered part in the writing source.

## 1. Top bar

- Demo: Load sample configuration into configuration item (may not work)

## 2. Action

### 2.1. Source

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

![source](/source/sift/source.png)

### 2.2. Category

Match the categories by rules from the source code.

::: warning Wran

Must get the source code first, otherwise it will not be executed.

:::

::: info Info

- ClassName: title field (& delimited)[optional]
  - Separation lengths should be consistent with class identifiers.
  - If it is empty, then match by category, if it is not empty, then add customization incrementally.
  - If empty, the result will be automatically recursive after execution.
- ClassUrl: Id field (& delimited)[optional]
  - Separation lengths should be consistent with class identifiers.
  - If it is empty, then match by category, if it is not empty, then add customization incrementally.
  - If empty, the result will be automatically recursive after execution.
- Class: Dom element (; separation)[requried]
  - The post-separation sequential syntax identifies separately `title | id | surl | match`
- ClassExclude: Class name field excluded after large class execution(| delimited)[optional]
- Link: Used to request a different broad class of addresses [requried]
  - Unique identifier (id field for large class fetches) in links needs to be replaced with `fyclass`

:::

::: details Click to show example

```json
[
  {
    "title": "电影",
    "uuid": "28",
    "path_url": "/index.php/vod/type/id/28.html",
    "source_url": "https://www.xxx.xyz/index.php/vod/show/id/28.html"
  },
  {
    "title": "电视剧",
    "uuid": "24",
    "path_url": "/index.php/vod/type/id/24.html",
    "source_url": "https://www.xxx.xyz/index.php/vod/show/id/24.html"
  }
]
```

:::

![category](/source/sift/category.png)

### 2.3. Sift

Filter by rule matching from source code.

#### 2.3.1. Sift rule

::: warning Warn

- Must get the source code first, otherwise it will not be executed.
- Generate types only, not rules.

:::

::: info Info

- Parent Selector: parent element(; delimited)[requried]
  - Different types of line feed input
- Children Selector: children element(; delimited)[requried]
  - The post-separation sequential syntax identifies separately `key | name | type | title | url`
  - Previous Empty rules need to be complemented; separators

:::

![sift-make](/source/sift/sift-make.png)

#### 2.3.2. Current sift

::: warning Warn

Must get the source code first, otherwise it will not be executed.

:::

::: info Info

> Must get the source code first, otherwise it will not be executed.

- ExcludeKeys: Filtering of class name fields excluded after execution (| delimited)[optional]
- year: Regular Expressions [optional]
- lang: Regular Expressions [optional]
- letter: Regular Expressions [optional]
- type: Regular Expressions [optional]
- plot: Regular Expressions [optional]
- area: Regular Expressions [optional]
- by: Regular Expressions [optional]

:::

::: details Click to show example

```json
[
  {
    "key": "年份",
    "name": "年份",
    "value": [
      {
        "n": "全部",
        "v": ""
      },
      {
        "n": "2023",
        "v": "/year/2023"
      }
    ]
  }
]
```

:::

![sift-current](/source/sift/sift-current.png)

### 2.4. Final sift

The final results are combined from the broad categories and filters.

::: warning Wran

- Must get the source code first, and get the general class rules, otherwise it won't be executed.
- Due to concurrent requests, the site may have a limit, such as failure to reduce the number of concurrent use of large categories of exclusion, and finally manually splicing.

:::

::: details Click to show example

```json
{
  "28": [
    {
      "key": "class",
      "name": "类型",
      "value": [
        {
          "n": "全部",
          "v": "类型"
        },
        {
          "n": "动作片",
          "v": "动作片"
        },
        {
          "n": "喜剧片",
          "v": "喜剧片"
        }
      ]
    }
  ],
  "24": [
    {
      "key": "class",
      "name": "类型",
      "value": [
        {
          "n": "全部",
          "v": "类型"
        },
        {
          "n": "国产剧",
          "v": "国产剧"
        },
        {
          "n": "港台剧",
          "v": "港台剧"
        }
      ]
    }
  ]
}
```

:::

![sift-final](/source/sift/sift-final.png)

## 3. Output

::: tip Info

Support ctrl+f search keywords.

:::

![output](/source/sift/output.png)
