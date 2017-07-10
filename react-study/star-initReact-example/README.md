# star-initReact-example

A demo with star-initReact-example


##效果截图
>* 首页

![首页](https://raw.githubusercontent.com/pookpal/star-initReact-example/master/screenshots/1.png)

>* 列表页

![播放页](https://raw.githubusercontent.com/pookpal/star-initReact-example/master/screenshots/2.png)

>* 弹框

![播放页](https://raw.githubusercontent.com/pookpal/star-initReact-example/master/screenshots/3.png)

>* 表格组件

![播放页](https://raw.githubusercontent.com/pookpal/star-initReact-example/master/screenshots/4.png)

>* echart

![播放页](https://raw.githubusercontent.com/pookpal/star-initReact-example/master/screenshots/5.png)


## 使用技术和实现功能
1. webpack + React +React-router + React-redux +ES6 + ant-design
2. React热替换
3. 国际化
4. 整合Echart
5. 自定义ant-design主题和局部样式



## 测试账号
admin
123456

## 准备环境

```bash

$ git clone git@github.com:pookpal/star-initReact-example.git
$ npm install -g webpack rimraf 
$ cd star-initReact-example
$ npm install

//mac环境下命令行
$ npm run dev:mac   //MAC环境下面打包部署命令
$ npm run build:mac  // MAC环境下打包部署命令


//window环境下命令行
D:\www\star-initReact-example> npm run dev:win   // window下面开发调试
D:\www\star-initReact-example> npm run build:win  // window环境下打包部署命令







```

想要更好的开发体验，还需安装两个 Chrome 插件：[Redux DevTools](https://chrome.google.com/webstore/detail/lmhkpmbekcpmknklioeibfkpmmfibljd) 和 [LiveReload](https://chrome.google.com/webstore/detail/livereload/jnihajbhpnppcggbcgedagnkighmdlei) 。

## 启动调试

```bash
### 此演示脚本为mac环境下运行
$ npm run dev:mac
```

## 打包构建代码

```bash
### 此演示脚本为mac环境下运行
// 生成国际化文件供配置
$ npm run build:i18n-js:mac

// 配置国际化文件后打包构建生成最终部署代码
$ npm run build:mac

```

## 目录结构

```
.
├── /dist/               # 构建输出的文件会在这里
├── /scripts/            # 生成国际化配置文件脚本
├── /node_modules/       # 第三方类库和工具
├── /src/                # 应用源码
├ ├── /assets/           # 静态资源文件
│ ├── /components/       # React components
│ ├── /entries/          # 应用入口
│ ├── /locale/           # 国际化配置文件,会自动生成
│ ├── /route/            # 路由信息
│ ├── /store/            # redux 
│ ├── /styles/           # 全局样式 
│ ├── /temp/             # 临时文件，会自动生成
│ └── /views/            # 页面组件
├── .babelrc             # 配置 babel
├── webpack.config.js    # 扩展开发调试 webpack 配置
├── webpack.production.config.js    # 扩展打包构建 webpack 配置
└── package.json         # 配置入口文件、依赖和 scripts
```


## 内置类库

- [react](https://github.com/facebook/react)
- [redux](https://github.com/reactjs/redux)
- [redux-actions](https://github.com/acdlite/redux-actions)
- [react-router](https://github.com/reactjs/react-router)
- [classnames](https://github.com/JedWatson/classnames)
- [react-router](https://github.com/reactjs/react-router)
- [react-router-redux](https://github.com/reactjs/react-router-redux)

## 工具特性

热替换和 LiveReload

> 基于 [Webpack Vanilla HMR](https://webpack.github.io/docs/hot-module-replacement-with-webpack.html)，支持 `components`, `router`, `views` 目录的模块热替换，其余目录的修改则会自动刷新页面。

> CSS 的自动刷新需通过 [LiveReload](https://chrome.google.com/webstore/detail/livereload/jnihajbhpnppcggbcgedagnkighmdlei) Chrome 插件配合使用。

> - [Why Vanilla HMR](https://github.com/reactjs/redux/pull/1455)

支持 css-modules

> src/components和src/views中的 less 文件会被解析为 css-modules

## License
MIT

