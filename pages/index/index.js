// index.js
// 获取应用实例

Page({

  data: {
    url:getApp().globalData.url
  },

  onLoad(){

  },


  noinputalert() {
    wx.showToast({
      title: '请输入待查询信息',
      icon: "none",    
      duration: 2000,  
    })
  }
})
