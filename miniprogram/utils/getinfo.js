// Luke Na
// 2023.05.08 建
// 2023.05.28 更

// 因为每一个页面获取信息的方式大致相同，因此这一部分也可以共用。

const http = require("./http.js");

async function getinfo(now_id) {
  let res;

  try {
    res = await http.cloudGet(`/api/model-query/detail/${now_id}`);
  } catch (error) {
    wx.showToast({
      title: "接口调用失败",
      icon: "error",
      duration: 2000,
    });
    console.error(error);
    // 返回一个空值，结束函数执行
    return;
  }

  return res.data.data;
}

module.exports = getinfo;