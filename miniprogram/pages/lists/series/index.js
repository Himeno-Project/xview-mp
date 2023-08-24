// pages/lists/series/index.js
const http = require("../../../utils/http.js");
Page({
  /**
   * 页面的初始数据
   */
  data: {
    now_loading: true,
    pd_type: "",
    page_type: "",
    list_type: "",
    series_id: "",
    seriesinfo: {},
    serieslist: {},
    search_value: "",
  },

  search(e) {
    this.show_device_list(this.data.search_value);
  },

  search_change(e) {
    if (e.detail.value === "") {
      this.show_device_list();
    }
  },

  show_series_info() {
    http
      .cloudGet(
        `/api/model-query/models/${this.data.list_type}/${this.data.series_id}`
      )
      .then((res) => {
        let seriesinfo = res.data.data.series;
        this.setData({
          seriesinfo,
        });
      });
  },

  show_device_list(search_text = "") {
    http
      .cloudGet(
        `/api/model-query/models/${this.data.list_type}/${
          this.data.series_id
        }/${encodeURIComponent(search_text)}`
      )
      .then((res) => {
        let serieslist = res.data.data.list;
        this.setData({
          serieslist,
          now_loading: false,
        });
      });
  },

  onBack(e) {
  },

  /**
   * 生命周期函数--监听页面加载
   */

  onLoad(options) {
    const list_type = options.pd_type;
    const series_id = options.series_id;
    console.log(options);
    console.log(list_type);
    console.log(series_id);

    this.setData({
      list_type,
      series_id,
    });

    console.log(list_type);
    console.log(series_id);
    this.show_series_info();
    this.show_device_list();
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
