// pages/about/about.js

import http from "../../utils/http";

Page({
  /**
   * 页面的初始数据
   */
  data: {
    card_count: 0,
    about_info: {},
  },

  handleTap(e) {
    var card_count = this.data.card_count;

    this.setData({
      card_count: card_count + 1,
    });

    // 点击五次之后跳转到彩蛋
    if (this.data.card_count == 5) {
      wx.navigateTo({
        url: "/pages/about/why_not_js/index",
      });
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  async onLoad() {
    const about_data = await http.cloudReq(
      "/api/page-data/page-data/about",
      null,
      "GET"
    );

    this.setData({
      about_info: about_data.data.data.data,
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
