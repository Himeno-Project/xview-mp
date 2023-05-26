// pages/pdinfo/router/index.js

var getinfo = require("../../../utils/getinfo.js")
var favorite = require("../../../utils/favorite.js")

Page({

  /**
   * 页面的初始数据
   */
  data: {
    now_loading: true,
    pd_type: '',
    rtinfo: {},
    deldialogShow: false,
    fav_status: false
  },

  favOperate(e) {
    // 获取当前的产品id
    var nowid = e.currentTarget.dataset.pd_id
    // 获取当前的收藏状态
    var fav_status = favorite.isFavorite(nowid);
    // 如果已经被收藏，弹出删除对话框
    if (fav_status) {
      this.setData({
        deldialogShow: true
      });
    } else {
      // 如果没有被收藏，添加到收藏列表，并更新收藏状态
      favorite.addFavorite(nowid)
      this.setData({
        fav_status: true
      })
    }
  },

  favRemove(e) {
    var nowid = e.currentTarget.dataset.pd_id
    favorite.removeFavorite(nowid)
    this.setData({
      fav_status: false
    })
    this.closeDialog();
  },

  closeDialog() {
    this.setData({
      deldialogShow: false
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    // 优化说明：将获取收藏状态的代码放在了 getinfo 的回调函数中，
    // 这样可以保证在获取产品信息后才更新收藏状态，避免了可能的异步问题。

    // 获取产品id
    var pd_id = options.pd_id;
    // 获取产品信息，并更新数据
    getinfo(pd_id).then((rtinfo) => {
      this.setData({
        rtinfo,
        now_loading: false,
        // 获取收藏状态，并更新数据
        fav_status: favorite.isFavorite(pd_id)
      });
    });
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