// pages/experiment/experiment.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    count:0,
    charlist:["zhang","jian","yang","yun"],
    char:"zhang"
  },

  onLoad(){
    console.log("refresh")
  },

  gopage(){
    wx.navigateTo({
      url: "../topic/post/post",
    })
  },
  click(e){
    const pages = getCurrentPages()
    const perpage = pages[pages.length - 1]
    perpage.onLoad()  
    // var c = this.data.count
    // c+=1
    // if (c>3){
    //   c=0
    // }
    // const cl = this.data.charlist
    // this.setData({
    //   count:c,
    //   char:cl[c]
    // })
  }
})

// 支持es4语法
var filter = {
	numberToFixed: function(value){
		return value.toFixed(2)
	}
}
// 导出对外暴露的属性
module.exports = {
	numberToFixed: filter.numberToFixed
}