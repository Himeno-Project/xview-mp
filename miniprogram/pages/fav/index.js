// pages/fav/index.js

const favorite = require("../../utils/favorite.js");
const http = require("../../utils/http.js");

Page({

  /**
   * 页面的初始数据
   */
  data: {
    favList: [],
    favInfo: [],
    emptyFav: false,
    cledialogShow: false
  },

  onDelete(e) {
    var nowid = e.currentTarget.dataset.pd_id
    favorite.removeFavorite(nowid)
    this.showList()
  },

  cleClick() {
    this.setData({ cledialogShow: true })
  },

  onClear() {
    favorite.clearFavorites();
    this.closeDialog();
    this.showList();
  },

  closeDialog() {
    this.setData({ cledialogShow: false })
  },

  async showList() {
    // 将收藏夹中的数据提交给后端
    var favList = favorite.getFavorites();

    // 判断收藏是否为空或者空数组，设置data对象的emptyFav属性
    this.setData({
      emptyFav: !favList || favList.length == 0
    })
    // 只有收藏状态非空的时候才会考虑调接口，减轻服务器压力
    if (!this.data.emptyFav) {
      wx.showLoading({
        title: '正在加载...',
      })
      // 使用 async/await 语法简化异步操作
      const res = await http.cloudPost("/api/model-query/models/by-id", favList);
      // 设置data对象的 favInfo 属性为返回的数据
      this.setData({ favInfo: res.data.data });
      // 打印数据
      console.log(this.data.favInfo);
      // 隐藏加载提示
      wx.hideLoading()
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

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
    this.showList();
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