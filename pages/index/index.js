// index.js
// 获取应用实例

Page({

  data: {
    url:getApp().globalData.url
  },

  onLoad(){

  },

  goTopic(){
    wx.request({
      url: this.data.url,
    data:{
      hint:"evolution",
      message:"null"
    },
    success:(result)=>{
      getApp().globalData.tpcOpt=result.data
      this.jumptopic(result.data)
      console.log(result.data)
    },
    })
    
  },

  jumptopic(message){
    if (message[0]['flag'] == true){
      wx.navigateTo({
        url: '../evolution/tpcRiver/tpcRiver',
      })
    }
    else{
      wx,navigator({
        url:"../sorry/fileloss",
      })
    }
  },

  noinputalert() {
    wx.showToast({
      title: '请输入待查询信息',
      icon: "none",    
      duration: 2000,  
    })
  }
})
