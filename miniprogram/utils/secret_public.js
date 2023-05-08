function getProdId() {
  return "";
}

function getAppid() {
  return wx.getAccountInfoSync().miniProgram.appId;
}

module.exports = {
  getProdId,
  getAppid
}