// pages/topic/tpcWords/tpcWords.js
Page({


  data: {

    Index:{},
    Length:{},
    toShow:{},
  },

  onLoad(){
    var globalOpt = getApp().globalData.tpcWd.opt
    var index = getApp().globalData.tpcWd.index
    var wdOpt =[]
    for (let i=0;i< getApp().globalData.tpcWd.opt.length;++i){
      var tmp ={}
      tmp.word = globalOpt[i].word
      tmp.sentence = globalOpt[i].sentences[index%globalOpt[i].sentences.length]
      wdOpt.push(tmp)
    }
    getApp().globalData.tpcWd.index = index +1
    console.log(this.data)
    this.setData({
      wordOpt:wdOpt
    })
  
  },

  refresh(e){
    const pages = getCurrentPages()
    const perpage = pages[pages.length - 1]
    perpage.onLoad() 
  }
})