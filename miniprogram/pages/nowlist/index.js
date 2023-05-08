Page({
  data: {
    yrinfo:{},
    indexList: [],
    list: [{
      index: 'A',
      children: ['阿坝', '阿拉善', '阿里', '安康', '安庆', '鞍山', '安顺', '安阳', '澳门'],
    }]
  },

  onload(options) {
    http.cloudGet("/api/model-query/group").then((res) => {
      console.log(res.data.data);
      let yrinfo = res.data.data
      this.setData({
        yrinfo
      })
      console.log(yrinfo)
      wx.hideLoading()
    }, )
  },

  onReady() {
    this.setData({
      indexList: this.data.list.map((item) => item.index),
    });
  },

  onSelect(e) {
    const {
      index
    } = e.detail;

    console.log(index);
  },
});