# 嗅探

## 1. 系统概述

本项目通过集成 [Puppeteer](https://github.com/puppeteer/puppeteer) 库到 [Electron](https://www.electronjs.org/) 应用程序中，创造了一个强大且灵活的网页资源嗅探解决方案，特别聚焦于自动检测与提取网络视频资源（如 `.m3u8`, `.mp4`, 等）。借助 Electron 的桌面应用开发能力与 Puppeteer 的浏览器操控技术，此系统设计实现了对特定类型网络资源的智能抓取与分析，为多媒体内容分析、数据采集等领域提供了有力工具。

> 合法使用嗅探技术，必须遵循严格的法律框架和道德规范，确保所有行为都得到充分授权，以正当目的进行。

## 2. 关键技术组件

### 2.1. Electron

- **功能**：作为主框架，允许使用Web技术（JavaScript, HTML, CSS）开发跨平台的桌面应用。
- **作用**：提供基础运行环境，整合Puppeteer执行环境与系统级功能。

### 2.2. Puppeteer

- **功能**：Node.js库，通过DevTools协议控制Chromium或Chrome浏览器。
- **用途**：页面自动化控制、截图、网络请求拦截、页面分析等。

### 2.3. Puppeteer-In-Electron (pie)

- **功能**：作为桥梁，确保Puppeteer能在Electron应用内顺畅运作。
- **特点**：简化集成过程，提升Puppeteer在Electron环境下的兼容性和稳定性。

## 3. 应用场景

- **性能分析**：模拟用户行为，评估页面加载性能。
- **自动化测试**：网页元素和功能的自动化验证。

## 4. 示例代码

> 请勿用于商业用途

- 推荐版本搭配
  - h264 + hevc + win8+: `"puppeteer-core": "~21.3.8"` + `"puppeteer-in-electron": "^3.0.5"` + `"electron": "~22.3.27"`
  - h264 + win7+`"puppeteer-core": "^22.10.0"` + `"puppeteer-in-electron": "^3.0.5"` + `"electron": "^19.1.9"`

参考[github](https://github.com/Hiram-Wong/zyfun/blob/main/src/main/services/CdpElectron.ts)

## 5. 结语

Puppeteer-In-Electron Sniffer 结合了Puppeteer的强大功能与Electron的跨平台优势，为开发者提供了一个高度自定义、高效能的网页资源嗅探方案。无论是内容分析、数据抓取还是性能测试，该系统均能提供坚实的技术支撑，促进多样化的应用开发需求。
