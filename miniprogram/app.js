// 因为普通版也用了 SASS 所以这个也加了 SASS 插件，虽然不太能用的上。
// 之前用了 TS 插件，引入模块的时候提示不可用，JS 倒是没问题。

var http = require("./utils/http.js");
var secret = require("./utils/secret.js")

App({
  onLaunch: function () {
    wx.cloud.init({
      appid: secret.getAppid(),
      envid: secret.getProdId(),
    })

    $http.cloudGet("/api/model-query/phone-models").then((res)=>console.log(res))
  },
  onShow() {},

  onload() {

  }
});