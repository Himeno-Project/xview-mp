// 因为普通版也用了 SASS 所以这个也加了 SASS 插件，虽然不太能用的上。
// 之前用了 TS 插件，引入模块的时候提示不可用，JS 倒是没问题。

// secret.js 是微信云托管的密钥，因此不开源。去掉密钥的 secret.js 为 secret_public.js。
var secret = require("./utils/secret.js");

App({
  onLaunch: function () {
    wx.cloud.init({
      env: secret.getProdId(),
    });
  },
  
  onShow() {
    const updateManager = wx.getUpdateManager();
    updateManager.onCheckForUpdate(function (res) {
      // 请求完新版本信息的回调
      if (res.hasUpdate) {
        wx.showModal({
          title: "有新版本",
          content: "检测到新版本，您应该更新小程序至最新版本。",
          confirmText: "更新",
          success(res) {
            if (res.confirm) {
              updateManager.applyUpdate();
            } else if (res.cancel) {
              console.log("用户点击取消");
            }
          },
        });
      }
    });
  },

  onload() {},
});
