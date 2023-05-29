// components/x-skel/x-skel.js
Component({
  /**
   * 组件的属性列表
   */

  // 属性只能接受 list(列表) 和 detail （产品页） 两种
  properties: {
    skstyle: ''
  },

  /**
   * 组件的初始数据
   */
  data: {
    list_for_count: 6,
    detail_for_count: 2,
    rowColsImage: [{
      size: '96rpx',
      type: 'rect'
    }],
    rowColsContent: [{
      width: '50%'
    }, {
      width: '100%'
    }],
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})