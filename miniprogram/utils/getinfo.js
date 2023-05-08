// Luke Na
// 2023.05.08

// 因为每一个页面获取信息的方式大致相同，因此这一部分也可以共用。

var http = require("./http.js")

async function getinfo(now_type, now_id) {
  console.log("now id is:" + now_id)

  wx.showLoading({
    title: '正在加载',
  })

  try {
    const res = await http.cloudGet("/api/model-query/detail/" + now_type + "/" + now_id);
    var nowinfo = res.data.data;
    wx.hideLoading();
    return nowinfo;
  } catch (error) {
    wx.showToast({
      title: '接口调用失败',
      icon: 'error',
      duration: 2000
    })
    console.error(error);
  }
}

module.exports = getinfo