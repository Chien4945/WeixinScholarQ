// pages/wait/wait.js
Page({
  data:{

  },

  onLoad: function () {
    this.setData({
      fuzzy:getApp().globalData.fuzzy.join(";   ")
    })
  },
})