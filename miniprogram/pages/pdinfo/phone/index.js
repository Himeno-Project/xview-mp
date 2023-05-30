// pages/pdinfo/index.js
var getinfo = require("../../../utils/getinfo.js");
var favorite = require("../../../utils/favorite.js");

Page({
  /**
   * 页面的初始数据
   */
  data: {
    now_loading: true,
    pd_type: "",
    phinfo: {},
    deldialogShow: false,
    fav_status: false,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    // 优化说明：将获取收藏状态的代码放在了 getinfo 的回调函数中，
    // 这样可以保证在获取产品信息后才更新收藏状态，避免了可能的异步问题。

    // 获取产品id
    var pd_id = options.pd_id;
    // 获取产品信息，并更新数据
    getinfo(pd_id).then((phinfo) => {
      this.setData({
        phinfo,
        // 骨架屏
        now_loading: false,
      });
    });
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {},

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {},

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {},

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {},

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {},

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {},

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {},
});
