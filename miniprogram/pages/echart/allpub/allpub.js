// pages/allpub/allpub.js
Page({

  data: {
    publications:[]
  },


  onLoad: function () {
    this.setData({
      publications:getApp().globalData.opt[3]["publications"].reverse()
    })
  },

})