// pages/wait/wait.js
Page({
  data:{

  },

  onLoad: function () {
    this.setData({
      fuzzy:getApp().globalData.fuzzy,
      url:getApp().globalData.url
    })
  },

  fuzzyJump(e){
    console.log("click:"+e.target.dataset.name)
    wx.showLoading({
      title:"数据正在加载",
      mask:true
    })
    wx.request({
      url: this.data.url,
    data:{
      hint:"query",
      message:e.target.dataset.name
    },
    success:(result)=>{
      getApp().globalData.opt=result.data
      wx.navigateTo({
        url: '../echart/echarts/echarts',
      })
      wx.hideLoading()
    },
    })
  },
})