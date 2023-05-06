// pages/pdinfo/index.js
var http = require("../../../utils/http.js");

Page({
    
    /**
     * 页面的初始数据
     */
    data: {
      pd_type: '',
      phinfo: {}
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
      var pd_id = options.pd_id
      console.log("now id is:" + pd_id)

      wx.showLoading({
        title: '正在加载',
      })
  
      http.cloudGet("/api/model-query/phone/" + pd_id).then((res) => {
          console.log(res.data.data);
          let phinfo = res.data.data
  
          this.setData({
              phinfo,
              pd_id
            }),
            
            console.log(phinfo)
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