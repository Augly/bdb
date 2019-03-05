// pages/userport/my/my.js
const app=getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrl: app.ImageHost,
    unread:0,
  },
  changesA() {
    wx.chooseImage({
      count: 1,
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
      success: (res) => {
        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
        // var tempFilePaths = res.tempFilePaths
        this.setData({
          avtar: res.tempFilePaths[0]
        })
      }
    })

  },
  //获取未读消息
  gitUnread() {
    app.config.ajax('POST', {
      token: app.globalData.user_token
    }, 'doctor/index/unread_count', res => {
      this.setData({
        unread: res.data.data.unread
      })
    })
  },
  //退出登陆
  out() {
    app.config.ajax('POST', {
      token: app.globalData.user_token,
    }, 'doctor/user/login_out', res => {
      wx.clearStorage('user_token')
      app.globalData.user_token = ''
      wx.redirectTo({
        url: '/pages/doctor/login/login',
        success: function (res) { },
        fail: function (res) { },
        complete: function (res) { },
      })
    })

  },
  mydata(){
    wx.navigateTo({
      url: '/pages/doctor/date/date',
    })
  },
  go_message(){
    wx.navigateTo({
      url: '/pages/doctor/message/message',
    })
  },
  index(){
    wx.navigateTo({
      url: '/pages/doctor/index/index',
    })
  },
  info(){
    wx.navigateTo({
      url: '/pages/doctor/write/write',
    })
  },
  //获取个人信息
  getUserInfo() {
    app.config.ajax('POST', {
      token: app.globalData.user_token,
    }, 'doctor/user/doctor_info', res => {
      this.setData({
        userInfo: res.data.data
      })
      this.gitUnread()
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

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    this.getUserInfo()
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
//onShareAppMessage: function() {}
})