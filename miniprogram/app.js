// 因为普通版也用了 SASS 所以这个也加了 SASS 插件，虽然不太能用的上。
// 之前用了 TS 插件，引入模块的时候提示不可用，JS 倒是没问题。

// secret.js 是微信云托管的密钥，因此不开源。去掉密钥的 secret.js 为 secret_public.js。
var secret = require("./utils/secret.js")

App({
  onLaunch: function () {
    wx.cloud.init({
      appid: secret.getAppid(),
      envid: secret.getProdId(),
    })
  },
  onShow() {},

  onload() {

  }
});