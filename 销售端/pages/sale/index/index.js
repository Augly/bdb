// pages/sale/index/index.js
const app=getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    mask:false,
  },
  // 二维码
  go_code(){
    wx.navigateTo({
      url: '/pages/sale/code/code',
    })
  },
  //获取个人信息
  getUserInfo() {
    app.config.ajax('POST', {
      token: app.globalData.user_token,
    }, 'sell/user/sell_info', res => {
      this.setData({
        mask: res.data.data.sell_isrevised==1?true:false,
      })
    })
  },
  sure(){
    wx.switchTab({
      url: '/pages/sale/my/my',
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
  },
  // 诊所统计
  go_clinic() {
    wx.navigateTo({
      url: '/pages/sale/clinic/clinic',
    })
  },
  // 流量统计
  go_flow(){
    wx.navigateTo({
      url: '/pages/sale/flow/flow',
    })
  },
  // 销量统计
  go_saleinfo(){
    wx.navigateTo({
      url: '/pages/sale/salelist/salelist',
    })
  },
  // 消息
  go_message() {
    wx.navigateTo({
      url: '/pages/sale/message/message',
    })
  },
  go_my() {
    wx.navigateTo({
      url: '/pages/sale/my/my',
    })
  },
  go_date(){
    wx.navigateTo({
      url: '/pages/sale/date/date',
    })
  }, 
  sure() {
    wx.switchTab({
      url: '/pages/sale/my/my',
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) { },
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    wx.getStorage({
      key: 'user_token',
      success: res => {
        app.globalData.user_token = res.data
        this.getUserInfo()
      },
      fail: res => {
        app.globalData.user_token = ''
        wx.redirectTo({
          url: '/pages/sale/login/login',
          success: function (res) { },
          fail: function (res) { },
          complete: function (res) { },
        })
      },
      complete: function (res) { },
    })
   
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    wx.getStorage({
      key: 'user_token',
      success: res => {
        app.globalData.user_token = res.data
        this.getUserInfo()
      },
      fail: res => {
        
      },
      complete: function (res) { },
    })
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