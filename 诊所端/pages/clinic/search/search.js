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
    readylist:[]
  },
  // 拨打电话
  telnum(){
    wx.makePhoneCall({
      phoneNumber: '15698542346',
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
      success: function(res) {},
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
    // console.log(e.currentTarget.dataset.style)
    wx.navigateTo({
      url: '/pages/clinic/order_detail/order_detail?style='+e.currentTarget.dataset.style,
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
    this.getreadylist()
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
  getreadylist(){
    app.config.ajax('POST',{
      token:app.globalData.user_token
    },'hospital/index/my_subscribe',res=>{
      this.setData({
        readylist:res.data.data
      })
    })
  },
  getfinishlist(){
    app.config.ajax('POST', {
      token: app.globalData.user_token
    }, 'hospital/index/my_subscribe_complete', res => {
      this.setData({
        finishlist: res.data.data
      })
    })
  },
  getcendellist(){
    app.config.ajax('POST', {
      token: app.globalData.user_token
    }, 'hospital/index/my_subscribe_cancel', res => {
      this.setData({
        cendellist: res.data.data
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