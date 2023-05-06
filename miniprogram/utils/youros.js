// Made By Luke Na
// 2023.05.05

const app = getApp();

// 以数组的方式输出

const youros = () => {
    const nowbrand = wx.getSystemInfoSync().brand
    const nowos = wx.getSystemInfoSync().system
    const nowmodel = wx.getSystemInfoSync().model
    const scrwidth = wx.getSystemInfoSync().screenWidth
    const scrheight = wx.getSystemInfoSync().screenHeight
    
    return [nowbrand, nowos, nowmodel, scrwidth, scrheight]
}

module.exports = youros