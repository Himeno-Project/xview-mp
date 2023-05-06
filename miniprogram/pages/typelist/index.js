// pages/detail/detail.ts
var http = require("../../utils/http.js");

Page({

  /**
   * 页面的初始数据
   */
  data: {
    pd_type: '',
    dtinfo: {}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    var pd_type = options.pd_type
    console.log("调试：接收的参数（产品类型）是 " + pd_type)

    wx.showLoading({
      title: '正在加载',
    })

    http.cloudGet("/api/model-query/models/" + pd_type).then((res) => {
        console.log(res.data.data);
        let dtinfo = res.data.data

        this.setData({
            dtinfo,
            pd_type
          }),
          
          console.log(dtinfo)
        wx.hideLoading()
      },
      //console.log(dtname)
    )
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