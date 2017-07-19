//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    length: 0
  },
  //事件处理函数
  handleInput: function(event){
    this.setData({
      length: event.detail.value.length
    })
    console.log(event.detail.value);
  },
  //按钮动作
  handleCancle: function(event){
    wx.navigateBack({
      delta: 1
    })
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
  }
})
