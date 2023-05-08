// Made By Luke Na
// 2023.05.05

// 以数组的方式输出
const youros = () => {
  const {
    brand,
    system,
    model,
    screenWidth,
    screenHeight
  } = wx.getSystemInfoSync();

  return [brand, system, model, screenWidth, screenHeight];
}

module.exports = youros;