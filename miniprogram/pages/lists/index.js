// pages/lists/index.js
import http from "../../utils/http";

Page({
  /**
   * 页面的初始数据
   */
  data: {
    now_loading: true,
    pd_type: "",
    page_type: "",
    list_type: "",
    mylists: {},
  },

  async show_series_list() {
    const listData = await http.cloudGet(
      `/api/model-query/models/${this.data.list_type}`
    );
    this.setData({
      mylists: listData.data.data,
      now_loading: false,
    });
  },

  /**
   * 生命周期函数--监听页面加载
   */

  onLoad(options) {
    // 因为考虑到了有些产品共用页面的情况（比如手机和平板，所以页面要相同）。
    const listType = options.pd_type;
    console.log(`接收的参数（列表类型）是 ${listType}`);

    this.setData({
      list_type: listType,
    });

    this.show_series_list();
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
