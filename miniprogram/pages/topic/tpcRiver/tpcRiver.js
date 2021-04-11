// pages/topic/tpcRiver/tpcRiver.js
import * as echarts from "../../../ec-canvas/echarts"
let chart = null
Page({

  data: {
    rvGraph:{
      onInit:RiverChart
    },
  },

  simplifyTpc(){
    wx.navigateTo({
      url: '../tpcSpan/tpcSpan',
    })
  },

  onload(){
    console.log("join")
    console.log(getApp().globalData.tpcRv.river)
  }

})

function RiverChart(canvas,width,height,dpr){
  chart = echarts.init(canvas,null,{
    width:width,
    height:height,
    devicePixelRatio:dpr
  })
  canvas.setChart(chart)
  chart.setOption(getApp().globalData.tpcRv.river)
  return chart
}