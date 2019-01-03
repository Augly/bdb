// pages/userport/index/index.js
const app=getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    banner_list: [
      '/images/14.png',
      '/images/14.png',
      '/images/14.png'
    ],
    goodsList:[],
    history:[],
    unread:0,
    mask:true
  },
  sure(){
    wx.switchTab({
      url: '/pages/userport/my/my',
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
  },
  toyyed(){
    console.log(1)
    wx.navigateTo({
      url: '/pages/userport/finish/finish?type=finish',
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
  },
  toclic(){
    wx.navigateTo({
      url: '/pages/userport/search/search',
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
  },
  // 历史列表
  go_list(){
    wx.navigateTo({
      url: '/pages/userport/mydata/mydata?type=finish',
    })
  },
  tores(){
    wx.navigateTo({
      url: '/pages/userport/salemedicine/salemedicine',
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
  },
  // 跳转我的
  my(){
    wx.navigateTo({
      url: '/pages/userport/my/my',
    })
  },
  // 跳转更多药品
  more_medicine(){
    wx.navigateTo({
      url: '/pages/userport/medicinelist/medicinelist',
    })
  },  
  // 跳转医务中心
  tointroduce(){
    wx.navigateTo({
      url: '/pages/userport/introduce/introduce',
    })
  },  
  // 跳转message
  toMessges(){
    wx.navigateTo({
      url: '/pages/userport/message/message',
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  //获取首页轮播图
  gitBanner(){
    app.config.ajax('POST', {
      token: app.globalData.user_token
    }, 'user/index/banner_list', res => {
      this.setData({
        banner_list: res.data
      })
    })
  },
  //获取我的预约
  gitHistorySubscribe() {
    app.config.ajax('POST', {
      token: app.globalData.user_token
    }, 'user/index/history_subscribe', res => {
      this.setData({
        history: res.data
      })
    })
  },
  //获取首页药品
  gitGoods() {
    app.config.ajax('POST', {
      token: app.globalData.user_token
    }, 'user/index/goods_list', res => {
      this.setData({
        goodsList: res.data
      })
    })
  },
  //获取未读消息
  gitUnread(){
    app.config.ajax('POST', {
      token: app.globalData.user_token
    }, 'user/index/goods_list', res => {
      this.setData({
        unread: res.data.unread
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