Component({
  data: {
    value: 'index',
    list: [{
      icon: 'home',
      value: 'index',
      label: '首页',
    }, {
      icon: 'tips',
      value: 'pdlist',
      label: '现有',
    }, {
      icon: 'user',
      value: 'user',
      label: '我的',
    }, {
      icon: 'chat',
      value: 'about',
      label: '关于'
    }]
  },

  lifetimes: {
    ready() {
      const pages = getCurrentPages();
      const curPage = pages[pages.length - 1];

      if (curPage) {
        const nameRe = /pages\/(\w+)\/index/.exec(curPage.route);
        console.log(`nameRe is : ${nameRe}`);
        if (nameRe && nameRe[1]) {
          this.setData({
            value: nameRe[1]
          });
        }
      }
    }
  },

  methods: {
    handleChange({ detail }) {
      const { value } = detail;
      wx.switchTab({
        url: `/pages/${value}/index`,
      });
    },
  },
});
