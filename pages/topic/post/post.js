// pages/topic/post/post.js
Page({
  data: {
    numRange:[5,10,15],
    journalItems: [
      {name: 'arXiv/CS', value: 'arXiv/CS',id:0},
      {name: 'other', value: 'other',id:1},
    ],
    showItems:[
      {name:'热点演化河流',id:0},
      {name:'热点主题词',id:1}
    ],
    hidden: false,
    start_selected:false,
    over_selected:false,
    startDate:0,
    overDate:0,
    journalSelect:null,
    showSelect:null,
    numSelect:false,
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

  changeNum(e){
    const indexNum = e.detail.value
    this.setData({
      selectNum:this.data.numRange[indexNum],
      numSelect:true
    })
    console.log("选择主题个数:"+this.data.numRange[indexNum])
  },



  goVisual(){
    console.log(this.data)

    if (this.data.journalSelect===null){
      wx.showToast({
        title: '请选择刊物',
        icon: 'error',
        duration: 2000
      }) 
      return false
    }
    if (this.data.showSelect===null){
      wx.showToast({
        title: '请选择视图',
        icon: 'error',
        duration: 2000
      })
      return false
    }
    if (this.data.numSelect ===false){
      wx.showToast({
        title: '请选择主题数',
        icon: 'error',
        duration: 2000
      })
      return false
    }
    if (this.data.startDate===0){
      wx.showToast({
        title: '请选择起始时间',
        icon: 'error',
        duration: 2000
      })
      return false
    }
    if(this.data.overDate===0){
      wx.showToast({
        title: '请选择结束时间',
        icon: 'error',
        duration: 2000
      })
      return false
    }
    if(this.data.startDate>=this.data.overDate){
      wx.showToast({
        title: '时间跨度错误',
        icon: 'error',
        duration: 2000
      })
      return false
    }
    if(this.data.journalSelect==="other"){
      wx.showToast({
        title: '此刊物待添加',
        icon: 'error',
        duration: 2000
      })
      return false
    }


    var timeSpan={
      startDate:this.data.startDate,
      overDate:this.data.overDate
    }
    
    if(this.data.showSelect==="热点演化河流"){
      wx.showLoading({
        title:"数据正在加载",
        mask:true
      })
      wx.request({
        url: getApp().globalData.url,
      data:{
        hint:"Topic",
        message:"river",
        numTopic:this.data.selectNum,
        timespan:timeSpan
      },
      success:(result)=>{
        console.log("主题河流配置接受完成.")
        console.log(result.data)
        this.jumpRiver(result.data,"tpcRiver")
        wx.hideLoading()
      },
      })        
    }
    else if (this.data.showSelect==="热点主题词"){
      wx.showLoading({
        title:"数据正在加载",
        mask:true,
      })
      wx.request({
        url: getApp().globalData.url,
      data:{
        hint:"Topic",
        message:"words",
        word:"all",
        numTopic:this.data.selectNum,
        timespan:timeSpan
      },
      success:(result)=>{
        console.log("主题词接受完成.")
        console.log(result.data)
        this.jumpRiver(result.data,"tpcWords")
        wx.hideLoading()
      },
      })   
    }

  },


  jumpRiver(message,position){
    const urlTo = "../"+position+"/"+position
    if (message['flag'] == true){
      if (position === "tpcWords"){
        getApp().globalData.tpcWd.opt=message.msg
      }
      else if (position === "tpcRiver"){
        getApp().globalData.tpcRv.river =message.river
        getApp().globalData.tpcRv.kline =message.kline
        console.log(message)
      }
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