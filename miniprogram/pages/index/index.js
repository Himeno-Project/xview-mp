// pages/index/index.ts

const youros = require("../../utils/youros")

Page({
  /**
   * 页面的初始数据
   */
  data: {
    nowbrand: '',
    nowos: '',
    nowmodel: '',
    scrwidth: '',
    scrheight: '',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  async onLoad() {
    const [brand, system, model, screenWidth, screenHeight] = youros();
    await this.setData({
      nowbrand: brand,
      nowos: system,
      nowmodel: model,
      scrwidth: screenWidth,
      scrheight: screenHeight,
    });

    // 对于电脑的处理
    if (this.data.nowbrand == "microsoft") {
      this.setData({
        nowbrand: 'PC'
      })
    } else if (this.data.nowbrand.startsWith('Mac')) {
      this.setData({
        nowbrand: 'Macintosh'
      })
    } else if (this.data.nowbrand == "apple") { // 新版微信客户的判断
      this.setData({
        nowbrand: 'Macintosh'
      })
    } else if (this.data.nowbrand == "devtools") {
      this.setData({
        nowbrand: '开发者工具'
      })
    }
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