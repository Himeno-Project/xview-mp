// Made By XiaoHe321
// 2023.05.05

var secret = require("./secret.js")

const app = getApp()

const cloudGet = (url) => {
  return wx.cloud.callContainer({
    "config": {
      "env": secret.getProdId()
    },
    "path": url,
    "header": {
      "X-WX-SERVICE": "mi-tracker",
      'X-WX-EXCLUDE-CREDENTIALS': 'unionid, from-openid, from-appid, from-unionid'
    },
    "method": "GET",
  })
}

const cloudPost = (url, data) => {
  return wx.cloud.callContainer({
    "config": {
      "env": secret.getProdId()
    },
    "data": data,
    "path": url,
    "header": {
      "X-WX-SERVICE": "mi-tracker",
      'X-WX-EXCLUDE-CREDENTIALS': 'unionid, from-openid, from-appid, from-unionid'
    },
    "method": "POST",
  })
}

module.exports = {
  cloudGet,
  cloudPost
}