Page({
  data: {
    indexList: [],
    list: [{
      index: 'A',
      children: ['阿坝', '阿拉善', '阿里', '安康', '安庆', '鞍山', '安顺', '安阳', '澳门'],
    } ]
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