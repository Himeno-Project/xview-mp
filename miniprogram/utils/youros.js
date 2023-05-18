// Made By Luke Na
// 2023.05.05

// 以数组的方式输出
const getyouros = () => {
  const {
    brand,
    system,
    model,
    screenWidth,
    screenHeight
  } = wx.getSystemInfoSync();

  return [brand, system, model, screenWidth, screenHeight];
}

// 调用函数并赋值给变量
const youros = getyouros();

// 导出变量
module.exports = youros;