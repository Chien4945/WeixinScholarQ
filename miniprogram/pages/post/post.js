// pages/post/post.js
var app = getApp()
Page({

  data: {
    url:app.globalData.url
  },

  onLoad(){
    wx.showLoading({
      title:"数据正在加载",
      mask:true
    })
    wx.request({
      url: this.data.url,
      data:{
        hint:"recommand",
        message:"null"
      },
      success:(result)=>{
        this.setData({
          recommand:result.data.recommand
        })
        wx.hideLoading()
      },
    })
  },

  getMassage(e){
    this.setData(
      {
        message:e.detail.value
      }
    )
  },

  exeMessage(e){
    const message =e.currentTarget.dataset.operation;
    console.log(message)
    if (!message){
      wx.showToast({
        title: '请输入待查询信息',
        icon: "none",     
        duration: 2000,  
      })
    }
    else{
      getApp().globalData.message = message;
      wx.showLoading({
        title:"数据正在加载",
        mask:true
      })
      wx.request({
        url: this.data.url,
      data:{
        hint:"query",
        message:message
      },
      success:(result)=>{
        getApp().globalData.opt=result.data
        console.log(result.data)
        this.pageJump(result.data)
        wx.hideLoading()
      },
      })
    }
  },

  pageJump(message){
    if (message.length == 1){
      if(message[0]["fuzzy"].length == 0){
        wx.navigateTo({
          url: '../sorry/cantfd/cantfd',
        })
      }
      else{
        getApp().globalData.fuzzy=message[0]["fuzzy"]
        console.log(getApp().globalData.fuzzy)
        wx.navigateTo({
          url: '../wait/wait',
        })
      }
    }
    else{
      wx.showLoading({
        title:"数据正在加载",
        mask:true
      })
      wx.navigateTo({
        url: '../echart/echarts/echarts',
      })
      wx.hideLoading()
    }  
  },

  navi(e){
    console.log(e.currentTarget.dataset.id)
    wx.showLoading({
      title:"数据正在加载",
      mask:true
    })
      wx.request({
        url: this.data.url,
      data:{
        hint:"query",
        message:this.data.recommand[Number(e.currentTarget.dataset.id)]
      },
      success:(result)=>{
        getApp().globalData.opt=result.data
        console.log(result.data)
        this.pageJump(result.data)
        wx.hideLoading()
      },
      })
  },
})
