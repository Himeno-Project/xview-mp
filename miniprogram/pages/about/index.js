// pages/about/about.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    card_count: 0,
    about_info: {
      project_name: "XView MP 开发版",
      project_des:
        "一个小米产品软硬件信息的收集站，仅此而已。源于一场无端的遐想，始于一片前人的后土。怀揣着早已忘记为什么出发的情节，追寻心中的一片海，寻觅着时光的足迹。",
      cell_desc: [
        {
          title: "关于项目",
          desc:
            "本项目是非盈利性质的不带有付费推广的小米产品信息收集站。基于 T-Design 开源组件库构建。",
        },
        {
          title: "隐私",
          desc:
            "本项目承诺不收集您的隐私。项目中读取的个人信息和系统信息均来自微信官方 API，并不会上传。",
        },
        {
          title: "著作权",
          desc:
            "本项目所收集的产品信息禁止用于盈利。本项目和小米科技没有关联，产品的商标属于小米科技有限责任公司所有。",
        },
      ],
      icon_cell_desc: [
        {
          icon: "logo-wechat",
          title: "微信公众号",
          note: "@Himeno-Project",
        },
        {
          icon: "logo-github-filled",
          title: "GitHub",
          note: "@Himeno-Project",
        },
      ],
    },
  },

  handleTap(e) {
    var card_count = this.data.card_count;

    this.setData({
      card_count: card_count + 1,
    });
    // 点击五次之后跳转到彩蛋
    if (this.data.card_count == 5) {
      wx.navigateTo({
        url: "/pages/about/why_not_js/index",
      });
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {},

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
