// pages/index/index.ts

const youros = require("../../utils/youros.js");
const http = require("../../utils/http.js");

Page({
  /**
   * 页面的初始数据
   */
  data: {
    now_loading: true,
    nowbrand: "",
    nowos: "",
    nowmodel: "",
    scrwidth: "",
    scrheight: "",
    rd_type: "",
    rd_id: "",
    typemenu: [],
  },

  // 获取动态菜单
  get_dyn_menu() {
    http.cloudGet("/api/model-query/types").then((res) => {
      let typemenu = res.data.data;
      this.setData({
        typemenu,
      });
    });
  },

  // 随机获取产品ID然后进入之
  get_random_id() {
    http.cloudGet("/api/model-query/models/random-id").then((res) => {
      let productType = res.data.data.pd_type;
      let productId = res.data.data.pd_id;

      this.setData({
        rd_id: productId,
        rd_type: productType,
      });
    });
  },

  /**
   * 生命周期函数--监听页面加载
   */
  async onLoad() {
    // 加载系统信息
    const [brand, system, model, screenWidth, screenHeight] = youros;
    await this.setData({
      nowbrand: brand,
      nowos: system,
      nowmodel: model,
      scrwidth: screenWidth,
      scrheight: screenHeight,
    });

    // 对于电脑的处理
    if (this.data.nowbrand == "microsoft") {
      this.setData({
        nowbrand: "PC",
      });
    } else if (this.data.nowbrand.startsWith("Mac")) {
      this.setData({
        nowbrand: "Macintosh",
      });
    } else if (this.data.nowbrand == "apple") {
      // 新版微信客户的判断
      this.setData({
        nowbrand: "Macintosh",
      });
    }

    this.get_dyn_menu();

    this.setData({ now_loading: false });
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {},

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {
    // 在页面显示的时候调取随机产品接口 ID
    this.get_random_id();
  },
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
