// components/x-fav/x-fav.js
const favorite = require("../../utils/favorite.js");

Component({
  /**
   * 组件的属性列表
   */
  properties: {
    x_pd_id: {
      type: String,
      value: "",
    },
  },

  /**
   * 组件的初始数据
   */
  data: {
    deldialogShow: false,
    fav_status: false,
  },

  /**
   * 组件的方法列表
   */
  methods: {
    refreshStatus() {
      this.setData({
        fav_status: favorite.isFavorite(this.properties.x_pd_id),
      });
    },

    favOperate() {
      // 获取当前的产品id
      var nowid = this.properties.x_pd_id;
      // 获取当前的收藏状态
      var fav_status = favorite.isFavorite(nowid);
      // 如果已经被收藏，弹出删除对话框
      if (fav_status) {
        this.setData({
          deldialogShow: true,
        });
      } else {
        // 如果没有被收藏，添加到收藏列表，并更新收藏状态
        favorite.addFavorite(nowid);
        this.setData({
          fav_status: true,
        });
      }
    },

    favRemove() {
      var nowid = this.properties.x_pd_id;
      favorite.removeFavorite(nowid);
      this.setData({
        fav_status: false,
      });
      this.closeDialog();
    },

    closeDialog() {
      this.setData({
        deldialogShow: false,
      });
    },
  },
});
