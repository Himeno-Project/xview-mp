// pages/about/about.js
Page({
  handleCopy({
    target
  }) {
    const {
      msg
    } = target.dataset;

    wx.setClipboardData({
      data: msg
    })
  },

  /**
   * 页面的初始数据
   */
  data: {
    card_count: 0
  },

  handleTap(e) {
    var card_count = this.data.card_count

    this.setData({
      card_count: card_count + 1
    })

    if (this.data.card_count == 3) {
      wx.navigateTo({
        url: '/pages/about/why_not_js/index'
      })
    }

    if (this.data.card_count > 3) {
      this.setData({
        card_count: 0
      })
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})