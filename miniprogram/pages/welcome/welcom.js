// pages/welcome/welcom.js
Page({

  onload(){
    wx.showShareMenu({
      withShareTicket: true,
      menus: ['shareAppMessage', 'shareTimeline']
    })
  },

  toscholar(){
    wx.navigateTo({
      url: '../index/index',
    })
  },
    
  toevolution(){
    wx.navigateTo({
      url: '../topic/post/post',
    })
}
})