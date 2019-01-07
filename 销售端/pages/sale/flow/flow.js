// pages/sale/salelist/salelist.js
const app=getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    page:1,
    list: [],
    null_list: false,
    array: [],
    index: 0,
    date: '2019-01-01',
    datetwo: '2019-01-01',
  },
  bindPickerChange(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index: e.detail.value
    })
    this.gitData()
  },
  bindDateChange(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      date: e.detail.value,
      datetwo: e.detail.value,
    })
    this.gitData()
  },
  bindTwoDateChange(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      datetwo: e.detail.value
    })
    this.gitData()
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.gitArray()
  },
  gitData(){
    app.config.ajax('POST', {
      token: app.globalData.user_token,
      start_date: this.data.date,   //开始时间，
      end_date: this.data.datetwo,   //结束时间，
      goods_id: this.data.array[this.data.index].goods_id,
      page:this.data.page   //商品id
    }, 'sell/index/statement_direction', res => {
      if(res.data.data.length>0){
        this.setData({
          list: res.data.data,
          page:1+this.data.page
        })
      }else{
        app.config.mytoast('暂无更多数据')
      } 
    })
  },
  gitArray() {
    app.config.ajax('POST', {
      token: app.globalData.user_token,
    }, 'sell/index/goods_list', res => {
      this.setData({
        array: res.data.data
      })
      this.gitData()
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {
    wx.showNavigationBarLoading()
    this.gitData()
    setTimeout(res=>{
      wx.hideNavigationBarLoading()
      // 停止下拉动作
      wx.stopPullDownRefresh()
    },1000)
   
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})