// pages/detail/detail.ts
var http = require("../../utils/http.js");
let pd_type = "";
let page_type = "";
Page({

  /**
   * 页面的初始数据
   */
  data: {
    pd_type: '',
    page_type: '',
    dtinfo: {},
    search_value: ''
  },


  search(e) {
    this.show_device_list(this.data.search_value)
  },

  search_change(e) {
    if (e.detail.value == "") {
      this.show_device_list();
    }
  },

  show_device_list(search_text = "") {
    http.cloudGet(`/api/model-query/models/${pd_type}/${encodeURIComponent(search_text)}`).then((res) => {
      console.log(res.data.data);
      let dtinfo = res.data.data
      this.setData({
        dtinfo
      })

      console.log(dtinfo)
      wx.hideLoading()
    })
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

    // 因为考虑到了有些产品共用页面的情况（比如手机和平板，所以页面要相同）。
    pd_type = options.pd_type
    page_type = pd_type

    console.log("接收的参数（产品类型）是 " + pd_type)
    console.log("接收的参数（页面类型）是 " + page_type)

    wx.showLoading({
      title: '正在加载',
    })

    // 手机和平板电脑共用一个详情页，因此这里重定向到手机
    if (page_type == 'tablet') {
      page_type = 'phone'
      console.log("检测到平板类，修正后的参数（页面类型）是 " + page_type)
    }

    this.show_device_list()
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