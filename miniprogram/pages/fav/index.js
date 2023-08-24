// pages/fav/index.js

const favorite = require("../../utils/favorite.js");
const http = require("../../utils/http.js");

Page({
  /**
   * 页面的初始数据
   */
  data: {
    now_loading: false,
    favList: [],
    favInfo: [],
    emptyFav: false,
    cledialogShow: false,
  },

  // 收藏夹删除操作
  async onDelete(e) {
    // 使用 const 声明常量，避免变量被修改
    const nowid = e.currentTarget.dataset.pd_id;
    // 使用 await 等待异步操作完成，避免回调地狱
    await favorite.removeFavorite(nowid);
    // 刷新列表
    this.showList();
  },

  // 清空收藏夹点击事件
  cleClick() {
    // 显示对话框
    this.setData({
      cledialogShow: true,
    });
  },

  // 收藏夹清空操作
  async onClear() {
    // 使用 await 等待异步操作完成，避免回调地狱
    await favorite.clearFavorites();
    this.closeDialog();
    // 刷新列表
    this.showList();
  },

  closeDialog() {
    // 只需要将 cledialogShow 标记为 false 就可以
    this.setData({
      cledialogShow: false,
    });
  },

  async showList() {
    // 将收藏夹中的数据提交给后端
    const favList = favorite.getFavorites();

    // 判断收藏是否为空或者空数组，设置data对象的emptyFav属性
    this.setData({
      emptyFav: !favList || favList.length === 0,
    });

    // 只有收藏状态非空的时候才会考虑调接口，减轻服务器压力
    if (!this.data.emptyFav) {
      let timeout = setTimeout(() => {
        this.setData({
          now_loading: true,
        });
      }, 300);

      // 使用 try/catch 捕获可能的错误，避免程序崩溃
      try {
        // 使用 async/await 语法简化异步操作
        const res = await http.cloudPost(
          "/api/model-query/models/by-id",
          favList
        );
        // 设置 data 对象的 favInfo 属性为返回的数据
        this.setData(
          {
            favInfo: res.data.data,
          },
          () => {
            clearTimeout(timeout);
          }
        );
        // 打印数据
        console.log(this.data.favInfo);
      } catch (err) {
        clearTimeout(timeout);
        // 处理错误情况，例如提示用户或者记录日志
        console.error(err);
      } finally {
        // 隐藏加载提示
        this.setData({
          now_loading: false,
        });
      }
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
  onShow() {
    this.showList();
  },

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
