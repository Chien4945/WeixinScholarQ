// pages/echarts/echarts.js
var app=getApp()
import * as echarts from "../../ec-canvas/echarts"
let chart = null

Page({
  data: {
    ecLine:{
      onInit:LineChart
    },
    ecGraph:{
      onInit:GraphChart
    },
    profile:{},

      
  },
  onLoad:function(){
    var pubs =getApp().globalData.opt[3]["publications"]
    var pubNew =[]
    if (pubs.length <6){
      this.setData({
        publications:getApp().globalData.opt[3]["publications"]
      })
    }else{
      var i = pubs.length-1
      var j = pubs.length-7
      for(;i>j;--i){
        pubNew.push(pubs[i])
      }
      this.setData({
        publications:pubNew
      })
    }
    this.setData({
      profile:getApp().globalData.opt[0],
      domain:getApp().globalData.opt[0]["domain"].join("; "),
      affiliation:getApp().globalData.opt[0]["affiliation"]
    })
    console.log(this.data.publications)
  },

  morePub(){
    console.log("MORE")
    wx.navigateTo({
      url: '../allpub/allpub',
    })
  }

})

function LineChart(canvas,width,height,dpr){
  chart = echarts.init(canvas,null,{
    width:width,
    height:height,
    devicePixelRatio:dpr
  })
  canvas.setChart(chart)
  chart.setOption(getApp().globalData.opt[1])
  return chart
}

function GraphChart(canvas,width,height,dpr){
  chart = echarts.init(canvas,null,{
    width:width,
    height:height,
    devicePixelRatio:dpr
  })
  canvas.setChart(chart)
  chart.setOption(getApp().globalData.opt[2])
  return chart
}
