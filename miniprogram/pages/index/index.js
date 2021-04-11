// index.js
// 获取应用实例

Page({

  data: {
    url:getApp().globalData.url
  },

  onLoad(){
    wx.showShareMenu({
      withShareTicket: true,
      menus: ['shareAppMessage', 'shareTimeline']
    })
  },
  


  noinputalert() {
    wx.showToast({
      title: '请输入待查询信息',
      icon: "none",    
      duration: 2000,  
    })
  }
})
