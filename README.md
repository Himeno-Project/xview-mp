# XView MP 微信小程序

Codename XView MP （以下称为 xview-mp）是 Himeno Project 小米产品信息收集站的小程序前端。基于腾讯 T-Design 开源组件库，使用 NPM 进行包管理，使用 SCSS 作为 CSS 的预处理器。 小程序使用的后端采用微信云托管服务，基于 C#。

## 运行和配置

确保安装 node.js，然后在微信开发者工具中导入项目。

打开内建终端，输入

```
cd miniprogram
npm install -S
```

安装依赖，然后打开工具栏的 "构建 npm" 进行构建，方可使用。

如果依赖更新，npm 也要重新构建。

## TO-DO LIST

- ~~收藏夹的实现和完善~~
- ~~类别页搜索的实现和完善~~
- ~~列出所有现有产品~~
- ~~从所有现有产品中搜索内容~~
- ~~产品页面模块完成合理的组件化~~
- ~~菜单层级优化~~
- ~~产品信息页项目仍然需要完善~~
- 列表分页优化
- 视情况推出 Flutter 版本，Flutter 将支持国际化
- 完成公测之前的准备

## 关于代码风格

小程序使用了 Prettier 插件进行代码整理，请在拉取代码时使用相同插件以保证代码风格一致。

## 已知 Bug 和 Bug 反馈

点击 Issues 菜单查询已知 Bug 和反馈新 Bug。

请在反馈 Bug 之前确认该 Bug 是来自于上游组件还是小程序本身。如果来自于微信、组件库、SCSS等上游项目，这个我们无法修复，请反馈到上游。但是一旦上游修复了这些 Bug，我们将予以更新并公告修复。

## 文档说明

详见 `docs` 文件夹。

## 著作权

Copyright 2023 Himeno Project（姬野计画） All Rights Reserved.

代码本体基于 MIT 许可协议授权。
