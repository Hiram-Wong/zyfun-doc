# Sniffer

## 1. Summarize

This project integrates [Puppeteer](https://github.com/puppeteer/puppeteer) library to [Electron](https://www.electronjs.org/) In the application, a powerful and flexible web resource sniffing solution has been created, especially focusing on the automatic detection and extraction of network video resources (such as `.m3u8`, `.mp4`, etc.). With Electron's desktop application development capabilities and Puppeteer's browser control technology, this system design realizes intelligent capture and analysis of specific types of network resources, providing powerful tools for multimedia content analysis, data acquisition and other fields.

> The lawful use of sniffing technology must follow a strict legal framework and ethical code to ensure that all actions are fully authorized and carried out for legitimate purposes.

## 2. Selection

### 2.1. Electron

- **Function**：Serves as the main framework that allows the development of cross-platform desktop applications using web technologies (JavaScript, HTML, CSS).
- **Features**：Provides a base runtime environment that integrates the Puppeteer execution environment with system-level functionality.

### 2.2. Puppeteer

- **Function**：Node.js library to control Chromium or Chrome browsers via the DevTools protocol.
- **Features**：Page automation control, screenshots, web request interception, page analytics, and more.

### 2.3. Puppeteer-In-Electron (pie)

- **Function**: Serves as a bridge to ensure that Puppeteer works smoothly within the Electron application.
- **Features**: Simplifies the integration process and improves the compatibility and stability of Puppeteer within the Electron environment.

## 3. Application scenario

- **Performance analysis**: simulate user behavior and evaluate page loading performance.
- **Automated testing**: automated validation of web page elements and functionality.

## 4. Sample code

> Please do not use it for commercial purposes

- Recommended version
  - h264 + hevc + win8+: `"puppeteer-core": "~21.3.8"` + `"puppeteer-in-electron": "^3.0.5"` + `"electron": "~22.3.27"`
  - h264 + win7+`"puppeteer-core": "^22.10.0"` + `"puppeteer-in-electron": "^3.0.5"` + `"electron": "^19.1.9"`

Refer to [github](https://github.com/Hiram-Wong/zyfun/blob/main/src/main/services/CdpElectron.ts)

## 5. Conclusion

Puppeteer-In-Electron Sniffer combines the power of Puppeteer and the cross-platform advantages of Electron to provide developers with a highly customizable and efficient solution for sniffing web resources. Whether it's content analysis, data crawling or performance testing, the system provides solid technical support to facilitate diverse application development needs.
