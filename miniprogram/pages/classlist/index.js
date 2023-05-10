// pages/classlist/index.js
var http = require("../../utils/http.js");
Page({

  /**
   * 页面的初始数据
   */
  data: {
    pd_type: '',
    page_type: '',
    list_type: '',
    dtinfo: {},
    search_value: ''
  },


  search(e) {
    this.show_device_list(this.data.search_value)
  },

  search_change(e) {
    console.log(e)
    if (e.detail.value == "") {
      this.show_device_list();
    }
  },

  show_device_list(search_text = "") {
    http.cloudGet(`/api/model-query/models/${this.data.list_type}/${encodeURIComponent(search_text)}`).then((res) => {
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
    const pdType = options.pd_type;
    const listType = options.pd_type;
    let pageType = options.pd_type;

    console.log(`接收的参数（列表类型）是 ${listType}`);
    console.log(`接收的参数（产品类型）是 ${pdType}`);
    console.log(`接收的参数（页面类型）是 ${pageType}`);

    wx.showLoading({
      title: '正在加载',
    });

    // 手机和平板电脑共用一个详情页，因此这里重定向到手机 
    if (pageType === 'tablet') {
      pageType = 'phone';
      console.log(`检测到平板类，修正后的参数（页面类型）是 ${pageType}`);
    }

    /*
        优化说明：设置数据
        原来的代码中，先设置一遍整体的 setData 数据，
        再根据平板类的特殊情况修改数据再 setData，
        因此没有必要，优化为先修改，再统一 setData
    */

    this.setData({
      pd_type: pdType,
      list_type: listType,
      page_type: pageType,
    });

    this.show_device_list();
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