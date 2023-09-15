// pages/pdinfo/index.js

import http from "../../utils/http";

Page({
  /**
   * 页面的初始数据
   */
  data: {
    now_loading: true,
    pd_type: "",
    pd_id: "",
    pdinfo: {},
    deldialogShow: false,
  },

  get_pdinfo(nowid) {
    // 获取产品信息，并更新数据
    http
      .cloudReq(`/api/model-query/detail/${nowid}`, null, "GET")
      .then((res) => {
        const pdinfo = res.data.data;
        //let {};
        this.setData({
          pdinfo,
          now_loading: false,
        });
      });
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    // 获取产品id
    let that = this;
    const pd_id = options.pd_id;
    this.setData(
      {
        pd_id: pd_id,
      },
      function () {
        that.selectComponent("#pdfav").refreshStatus();
      }
    );
    this.get_pdinfo(pd_id);
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
