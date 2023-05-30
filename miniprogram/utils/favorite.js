// 收藏夹功能的实现

/* 
优化说明：
抽取了一个公共的函数 getFavorites 来获取收藏列表，这样可以避免重复的代码和减少存储空间的占用。
在 isFavorite 函数中直接返回布尔值，而不是使用 if-else 语句，这样可以简化代码的逻辑和可读性。
在 addFavorite 和 removeFavorite 函数中使用了 isFavorite 函数来判断是否已经收藏过，
这样可以避免重复添加或者删除失败的情况。 
*/

// 设置收藏夹更改状态
function setFavChange(opt) {
  // 使用布尔值作为参数，避免字符串比较
  wx.setStorageSync("fav_status", opt);
}

// 检查收藏夹是否被更改
function checkFavChange() {
  // 直接返回布尔值，无需判断
  return wx.getStorageSync("fav_status");
}

// 获取收藏列表
function getFavorites() {
  return wx.getStorageSync("favorites") || [];
}

// 判断是否已经收藏过
function isFavorite(id) {
  let favorites = getFavorites();
  console.log(favorites);
  // 直接返回布尔值，无需使用 if-else 语句
  return favorites.indexOf(id) !== -1;
}

// 添加收藏
function addFavorite(id) {
  let favorites = getFavorites();
  // 判断是否已经收藏过，避免重复添加
  if (isFavorite(id)) {
    wx.showToast({
      title: "已经收藏",
      icon: "error",
    });
  } else {
    favorites.push(id);
    wx.setStorageSync("favorites", favorites);
    wx.showToast({
      title: "收藏成功",
      icon: "success",
    });
  }
}

// 删除收藏
function removeFavorite(id) {
  let favorites = getFavorites();
  let index = favorites.indexOf(id);
  // 判断是否存在该收藏，避免删除失败
  if (index !== -1) {
    favorites.splice(index, 1);
    wx.setStorageSync("favorites", favorites);
    wx.showToast({
      title: "成功取消收藏",
      icon: "success",
    });
  } else {
    wx.showToast({
      title: "取消收藏失败",
      icon: "error",
    });
  }
}

// 清空收藏
function clearFavorites() {
  wx.removeStorageSync("favorites");
}

module.exports = {
  setFavChange,
  checkFavChange,
  getFavorites,
  isFavorite,
  addFavorite,
  removeFavorite,
  clearFavorites,
};
