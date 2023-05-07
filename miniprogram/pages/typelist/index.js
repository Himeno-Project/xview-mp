// pages/detail/detail.ts
var http = require("../../utils/http.js");

Page({

  /**
   * 页面的初始数据
   */
  data: {
    pd_type: '',
    page_type: '',
    dtinfo: {}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

    // 因为考虑到了有些产品共用页面的情况（比如手机和平板，所以页面要相同）。
    var pd_type = options.pd_type
    var page_type = pd_type

    console.log("接收的参数（产品类型）是 " + pd_type)
    console.log("接收的参数（页面类型）是 " + page_type)

    wx.showLoading({
      title: '正在加载',
    })

    http.cloudGet("/api/model-query/models/" + pd_type).then((res) => {
        console.log(res.data.data);
        let dtinfo = res.data.data

        this.setData({
            dtinfo,
            page_type,
            pd_type
          }),

          console.log(dtinfo)
        wx.hideLoading()
      },

      //console.log(dtname)
    )

    // 手机和平板电脑共用一个详情页，因此这里重定向到手机
    if (page_type == 'tablet') {
      var page_type = 'phone'
      console.log("检测到平板类，修正后的参数（页面类型）是 " + page_type)
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