# 静态筛选

静态筛选用于简化写源中筛选部分的手动拼接筛选繁琐。

## 1. 顶栏

- 示例: 加载示例配置到配置项中(可能失效)

## 2. 操作

### 2.1. 源码

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

![source](/source/sift/source.png)

### 2.2. 分类

从源码中按规则匹配分类。

::: warning 注意

必须先获取源码，否则不执行

:::

::: info 参数说明

- 类名: title字段(&分隔)[可选]
  - 分隔长度应和类标识保持一致
  - 为空则按大类标识匹配, 不为空时则递补增加自定义
  - 为空时执行后将自动递补获取的结果
- 类标识: id字段(&分隔)[可选]
  - 分隔长度应和类标识保持一致
  - 为空则按大类标识匹配, 不为空时则递补增加自定义
  - 为空时执行后将自动递补获取的结果
- 大类: dom元素(;分隔)[必传]
  - 分隔后顺序语法分别标识`title | id | surl | match`
- 排除: 大类执行后排除的类名字段(|分隔)[可选]
- 链接: 用于请求不同大类地址[必传]
  - 链接中唯一标识(大类获取的id字段)需替换为`fyclass`

:::

::: details 点我查看示例数据返回

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

### 2.3. 筛选

从源码中按规则匹配筛选。

#### 2.3.1. 生成筛选列表

::: warning 注意

- 必须先获取源码，否则不执行
- 仅生成类型, 不生成规则

:::

::: info 参数说明

- 选择器: 父元素(; 分隔)[必传]
  - 不同类型换行输入
- 详细筛选: 子元素(; 分隔)[必传]
  - 分隔后顺序语法分别标识`key | name | type | title | url`
  - 上一个空规则需补足;分隔符

:::

![sift-make](/source/sift/sift-make.png)

#### 2.3.2. 当前筛选

::: warning 注意

必须先获取源码，否则不执行

:::

::: info 参数说明

> 不传则使用默认参数

- 键移除: 筛选执行后排除的类名字段(|分隔)[可选]
- 年份: 正则表达式[可选]
- 语言: 正则表达式[可选]
- 字母: 正则表达式[可选]
- 类型: 正则表达式[可选]
- 剧情: 正则表达式[可选]
- 地区: 正则表达式[可选]
- 排序: 正则表达式[可选]

:::

::: details 点我查看示例数据返回

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

### 2.4. 最终筛选

从大类和筛选组合出最终结果。

::: warning 注意

- 必须先获取源码, 且获得大类规则, 否则不执行
- 由于是并发请求, 网站可能有限制, 如失败可利用大类排除减少并发数量, 最后手动拼接

:::

::: details 点我查看示例数据返回

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

## 3. 输出

::: tip 提示

支持ctrl+f搜索关键词

:::

![output](/source/sift/output.png)
