Component({
  data: {
    value: 'index',
    list: [{
      icon: 'home',
      value: 'index',
      label: '首页'
    }, {
      icon: 'user',
      value: 'fav',
      label: '收藏'
    },{
      icon: 'user',
      value: 'my',
      label: '我的'
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
    
      /* 
      优化说明：
      在 ready 函数中，使用可选链运算符来获取 nameRe 数组中的第一个元素，这样可以避免在数组为空时出现错误。
      在 ready 函数中，使用解构赋值来获取 nameRe?.[1] 的值，并且使用了常量来存储该值，这样可以使代码更加简洁易读。 
      */

      if (curPage) {
        const nameRe = /pages\/(\w+)\/index/.exec(curPage.route);
        console.log(`URL is: ${nameRe}`);
        const value = nameRe?.[1];
        if (value) {
          this.setData({ value });
        }
      }
    }
  },

  methods: {
    handleChange({
      detail
    }) {
      const {
        value
      } = detail;
      wx.switchTab({
        url: `/pages/${value}/index`,
      });
    },
  },
});