<div align="center">
    <a href="#" target="_blank">
    <img src="https://i.postimg.cc/bN7f4YY3/logo.png" alt="websee-logo" height="80">
    </a>
    <p>web-see 后台demo，主要用来演示错误还原功能，方式包括：定位源码、播放录屏、记录用户行为</p>
</div>

## 功能

1、使用 express 搭建静态服务器，模拟线上环境，通过获取.map 文件，实现定位源码的功能

2、server.js 中实现了 reportData（错误上报）、getmap（获取 map 文件）、getRecordScreenId（获取录屏信息）、 getErrorList（获取错误列表）的接口

3、用户可点击 'js 报错'、'异步报错'、'promise 错误' 按钮，上报对应的代码错误，后台实现代码错误还原

4、点击 'xhr 请求报错'、'fetch 请求报错' 按钮，上报接口报错信息

5、点击 '加载资源报错' 按钮，上报对应的资源报错信息

通过对这些错误的捕获与处理，了解监控平台的整体流程

注意：定位源码功能读取的是打包后 dist 中的.map 文件，打开控制台可以看到 fileName 的打印(对应的.map 文件路径)

## 安装

```bash
$ pnpm install
```

## 运行

```
$ pnpm run start
```

浏览器输入 http://localhost:8083

## 演示

后台页面

![sea.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/93521acd7dd0499295bcd336a8a55fbc~tplv-k3u1fbpfcp-watermark.image?)

演示效果

![web-see.gif](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/1ca730fd02164501a82eb492a6bf8583~tplv-k3u1fbpfcp-watermark.image?)
