// 收藏夹功能的实现
import Message from 'tdesign-miniprogram/message/index';

// 判断是否已经收藏过
function isFavorite(id) {
  let favorites = wx.getStorageSync('favorites') || []
  console.log(favorites)
  if (favorites.indexOf(id) === -1) {
    return false;
  } else {
    return true;
  }
}

// 添加收藏
function addFavorite(id) {
  let favorites = wx.getStorageSync('favorites') || []
  if (favorites.indexOf(id) === -1) {
    favorites.push(id)
    wx.setStorageSync('favorites', favorites)
    wx.showToast({
      title: '收藏成功',
      icon: 'success'
    })
  } else {
    wx.showToast({
      title: '已经收藏',
      icon: 'error'
    })
  }
}

// 删除收藏
function removeFavorite(id) {
  let favorites = wx.getStorageSync('favorites') || []
  let index = favorites.indexOf(id)
  if (index !== -1) {
    favorites.splice(index, 1)
    wx.setStorageSync('favorites', favorites)
    wx.showToast({
      title: '成功取消收藏',
      icon: 'success'
    })
  } else {
    wx.showToast({
      title: '取消收藏失败',
      icon: 'error'
    })
  }
}

// 清空收藏
function clearFavorites() {
  wx.removeStorageSync('favorites')
}

module.exports = {
  isFavorite,
  addFavorite,
  removeFavorite,
  clearFavorites
}