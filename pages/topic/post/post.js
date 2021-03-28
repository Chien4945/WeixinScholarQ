// pages/topic/post/post.js
Page({
  data: {
    journalItems: [
      {name: 'arXiv/CS', value: 'arXiv/CS'},
      {name: 'other', value: 'other'},
    ],
    showItems:[
      {name:'热点演化河流'},
      {name:'热点主题词'}
    ],
    hidden: false,
    start_selected:false,
    over_selected:false,
    startDate:0,
    overDate:0,
    journalSelect:null,
    showSelect:null
  },


  radioChange(e) {
    const checked = e.detail.value
    const saveItem = e.target.dataset.part+"Select"
    this.setData({
      [saveItem]:checked,
    })
    console.log(e.target.dataset.part+"Select:"+checked)
  },

  changeDate(e){
    const point = e.target.dataset.point
    const setdata = point+"Date"
    const setflag = point+"_selected"
    this.setData({
      [setflag]:true,
      [setdata]:e.detail.value,
    })
    console.log("选择"+point+"日期:"+e.detail.value)
  },


  goVisual(){
    if (this.data.journalSelect===null){
      wx.showToast({
        title: '请选择刊物',
        icon: 'error',
        duration: 2000
      }) 
    }
    else if (this.data.showSelect===null){
      wx.showToast({
        title: '请选择视图',
        icon: 'error',
        duration: 2000
      })
    }
    else{
      if (this.data.startDate===0){
        wx.showToast({
          title: '请选择起始时间',
          icon: 'error',
          duration: 2000
        })
      }
      else if(this.data.overDate===0){
        wx.showToast({
          title: '请选择结束时间',
          icon: 'error',
          duration: 2000
        })
      }
      else if(this.data.startDate>=this.data.overDate){
        wx.showToast({
          title: '时间跨度错误',
          icon: 'error',
          duration: 2000
        })
      }
    }
    if(this.data.journalSelect==="other"){
      wx.showToast({
        title: '此刊物待添加',
        icon: 'error',
        duration: 2000
      })
    }
    else{
      var timeSpan={
        startDate:this.data.startDate,
        overDate:this.data.overDate
      }
      if(this.data.showSelect==="热点演化河流"){
        wx.request({
          url: getApp().globalData.url,
        data:{
          hint:"Topic",
          message:"river",
          timespan:timeSpan
        },
        success:(result)=>{
          getApp().globalData.tpcOpt=result.data
          this.jumptopic(result.data)
          console.log("Result:"+result.data)
        },
        })        
      }
      else if (his.data.showSelect==="热点演化河流"){
        wx.request({
          url: getApp().globalData.url,
        data:{
          hint:"Topic",
          message:"words",
          timespan:timeSpan
        },
        success:(result)=>{
          getApp().globalData.tpcOpt=result.data
          this.jumptopic(result.data)
          console.log("Result:"+result.data)
        },
        })   
      }
    }

  },


  jumptopic(message,position){
    console.log("message:"+message)
    const urlTo = "../"+position+"/"+position
    if (message[0]['flag'] == true){
      wx.navigateTo({
        url: urlTo,
      })
    }
    else{
      wx.navigateTo({
        url:"../../sorry/fileloss/fileloss",
      })
    }
  },


}
)