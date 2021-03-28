// pages/post/post.js
var app = getApp()
Page({

  data: {
    url:app.globalData.url
  },

  onLoad(){
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
      }
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
      wx.navigateTo({
        url: '../echart/echarts/echarts',
      })
    }  
  },

  navi0(){
    console.log (this.data.recommand[0])
      wx.request({
        url: this.data.url,
      data:{
        hint:"query",
        message:this.data.recommand[0]
      },
      success:(result)=>{
        getApp().globalData.opt=result.data
        console.log(result.data)
        this.pageJump(result.data)
      },
      })
  },

  navi1(){
    console.log (this.data.recommand[1])
      wx.request({
        url: this.data.url,
      data:{
        hint:"query",
        message:this.data.recommand[1]
      },
      success:(result)=>{
        getApp().globalData.opt=result.data
        console.log(result.data)
        this.pageJump(result.data)
      },
      })
  },
  navi2(){
    console.log (this.data.recommand[2])
      wx.request({
        url: this.data.url,
      data:{
        hint:"query",
        message:this.data.recommand[2]
      },
      success:(result)=>{
        getApp().globalData.opt=result.data
        console.log(result.data)
        this.pageJump(result.data)
      },
      })
  },
  navi3(){
    console.log (this.data.recommand[3])
      wx.request({
        url: this.data.url,
      data:{
        hint:"query",
        message:this.data.recommand[3]
      },
      success:(result)=>{
        getApp().globalData.opt=result.data
        console.log(result.data)
        this.pageJump(result.data)
      },
      })
  },
  navi4(){
    console.log (this.data.recommand[4])
      wx.request({
        url: this.data.url,
      data:{
        hint:"query",
        message:this.data.recommand[4]
      },
      success:(result)=>{
        getApp().globalData.opt=result.data
        console.log(result.data)
        this.pageJump(result.data)
      },
      })
  },
  navi5(){
    console.log (this.data.recommand[5])
      wx.request({
        url: this.data.url,
      data:{
        hint:"query",
        message:this.data.recommand[5]
      },
      success:(result)=>{
        getApp().globalData.opt=result.data
        console.log(result.data)
        this.pageJump(result.data)
      },
      })
  },
  
})
