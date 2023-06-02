// components/x-navbar/x-navbar.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    is_show_capsule: {
      type: Boolean,
      value: true
    }
  },

  /**
   * 组件的初始数据
   */
  data: {},
  /**
   * 组件的方法列表
   */
  methods: {
    onBack() {
      wx.navigateBack({
        delta: 1
      });
    },
    onGoHome() {
      wx.reLaunch({
        url: "../../pages/index/index",
      });
    },
  },
});
