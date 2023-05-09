Component({
  data: {
    value: 'index',
    list: [{
      icon: 'home',
      value: 'index',
      label: '首页',
      props: 'default'
    }, {
      icon: 'tips',
      value: 'pdlist',
      label: '现有',
      props: 'pd_type=allist'
    }, {
      icon: 'user',
      value: 'user',
      label: '我的',
      props: 'default'
    }, {
      icon: 'chat',
      value: 'about',
      label: '关于',
      props: 'default'
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
    handleChange({
      detail
    }) {
      const {
        value,
        props
      } = detail;
      wx.switchTab({
        url: `/pages/${value}/index?${props}`,
      });
    },
  },
});