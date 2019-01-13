// pages/userport/search/search.js
const app=getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    choose:true,
    medicine_list:3,
    nav:1,
    mask: false,
    cendelmask:false,
    delSuccess: false,
    imgUrl: app.ImageHost,
    cendellist:[],
    finishlist:[],
    readylist:[],
    key:''
  },
  // 拨打电话
  telnum(e){
    wx.makePhoneCall({
      phoneNumber: e.currentTarget.dataset.tel,
    })
  },
  getValue(e){
    this.setData({
      key:e.detail.value
    })
  },
  // 诊所中心
  go_center(){
    wx.navigateTo({
      url: '/pages/clinic/center/center',
    })
  },
  // 删除
  del() {
    this.setData({
      mask: true
    })
  },
  del_cancle(){
    this.setData({
      mask: true
    })
  },
  //确认删除
  sure(e) {
    console.log(e.detail.id)
    this.setData({
      mask: false,
      delSuccess: true
    })
  },
  surecendel(e) {
    console.log(e.detail.id)
    this.setData({
      cendelmask: false,
      delSuccess: true
    })
  },
  saoCode(){
    wx.scanCode({
      onlyFromCamera: true,
      scanType: [],
      success: function(res) {
        console.log(res)
      },
      fail: function(res) {},
      complete: function(res) {},
    })
  },


  go_message(){
    wx.navigateTo({
      url: '/pages/clinic/message/message',
    })
  },
  go_groder(e){
    wx.navigateTo({
      url: '/pages/clinic/order_detail/order_detail?style=' + e.currentTarget.dataset.style + '&id=' + e.currentTarget.dataset.id,
    })
  },
  dataed(){
    this.setData({
      nav:1
    })
    this.getreadylist()
  },
  finish() {
    this.setData({
      nav: 2
    })
    this.getfinishlist()
  },
  cancle(){
    this.setData({
      nav: 3
    })
    this.getcendellist()
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.getStorage({
      key: 'user_token',
      success: res => {
        app.globalData.user_token = res.data
        this.getreadylist()
      },
      fail: res => {
        app.globalData.user_token = ''
        wx.redirectTo({
          url: '/pages/clinic/login/login',
          success: function (res) { },
          fail: function (res) { },
          complete: function (res) { },
        })
      },
      complete: function (res) { },
    })
   
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },
  getlist(){
    if(this.data.nav==1){
      this.getreadylist()
    } else if (this.data.nav == 1){
      this.finishlist()
    }else{
      this.cendellist()
    }
  },
  getreadylist(){
    app.config.ajax('POST',{
      token:app.globalData.user_token,
      key:this.data.key
    },'hospital/index/my_subscribe',res=>{
      this.setData({
        readylist:res.data.data.map(item=>{
          item.subscribe_reservetime = app.config.timeForm(item.subscribe_reservetime).btTime
          return item
        })
      })
    })
  },
  getfinishlist(){
    app.config.ajax('POST', {
      token: app.globalData.user_token,
      key: this.data.key
    }, 'hospital/index/my_subscribe_complete', res => {
      this.setData({
        finishlist: res.data.data.map(item => {
          item.subscribe_reservetime = app.config.timeForm(item.subscribe_reservetime).btTime
          return item
        })
      })
    })
  },
  getcendellist(){
    app.config.ajax('POST', {
      token: app.globalData.user_token,
      key: this.data.key
    }, 'hospital/index/my_subscribe_cancel', res => {
      this.setData({
        cendellist: res.data.data.map(item => {
          item.subscribe_reservetime = app.config.timeForm(item.subscribe_reservetime).btTime
          return item
        })
      })
    })
  },
  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})