// pages/introduce/introduce.js
const app=getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: [
      '/images/4.png',
      '/images/5.png'
    ],
    imgUrl: app.ImageHost,
    indicatorDots: false,
    autoplay: false,
    interval: 1000,
    duration: 800,
    info:null
  },

  // 首页
  index() {
    wx.navigateTo({
      url: '/pages/userport/index/index',
    })
  },
  // 跳转我的
  my() {
    wx.navigateTo({
      url: '/pages/userport/my/my',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      hosId: options.hosId
    })
    this.getInfo()
  },
  //获取诊所详情
  getInfo(){
    app.config.ajax('POST', {
      token: app.globalData.user_token,
      hospital_id: this.data.hosId   //诊所id
    }, 'user/hospital/hospital_info', res => {
      this.setData({
        imgUrls: [res.data.data.hospital_patternmaking],
        info:res.data.data
      })
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
    wx.setNavigationBarTitle({
      title: '领医介绍',
      success: function (res) { },
      fail: function (res) { },
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