// pages/topic/tpcSpan/tpcSpan.js
import * as echarts from "../../../ec-canvas/echarts"
let chart = null
Page({
  data: {
    klineChart:{
      onInit:klineChart
    },
  },

  
})

function klineChart(canvas,width,height,dpr){
  chart = echarts.init(canvas,null,{
    width:width,
    height:height,
    devicePixelRatio:dpr
  })
  canvas.setChart(chart)
  chart.setOption(getApp().globalData.tpcOpt[2])
  return chart
}