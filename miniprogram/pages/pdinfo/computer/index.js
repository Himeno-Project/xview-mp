// pages/pdinfo/computer/index.js
var getinfo = require("../../../utils/getinfo.js")

Page({

    /**
     * 页面的初始数据
     */
    data: {
      pd_type: '',
      pcinfo: {}
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
      var pd_type = options.pd_type
      var pd_id = options.pd_id
  
      getinfo(pd_type, pd_id).then((pcinfo) => {
        this.setData({
          pcinfo,
          pd_id,
          pd_type
        })
      })
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