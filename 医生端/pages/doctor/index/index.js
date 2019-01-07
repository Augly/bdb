// pages/doctor/index/index.js
const app=getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    unread:0,
    info_popup:false,
    imgurl: app.ImageHost,
    mask:false,
    avtar: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1544422030851&di=6f08e3e4bb29548302a95f5c4892f79c&imgtype=jpg&src=http%3A%2F%2Fimg2.imgtn.bdimg.com%2Fit%2Fu%3D2177114997%2C30575453%26fm%3D214%26gp%3D0.jpg'
  },
//消息页面
  toMessges(){
    wx.navigateTo({
      url: '/pages/doctor/message/message',
    })
  },
  my(){
    wx.navigateTo({
      url: '/pages/doctor/my/my',
    })
  },
  //获取个人信息
  getUserInfo() {
    app.config.ajax('POST', {
      token: app.globalData.user_token,
    }, 'doctor/user/doctor_info', res => {
      this.setData({
        mask: res.data.data.doctor_sex == 0 ? true : false,
        userInfo: res.data.data
      })
    })
  },
  //获取未读消息
  // gitUnread() {
  //   app.config.ajax('POST', {
  //     token: app.globalData.user_token
  //   }, 'user/index/unread_count', res => {
  //     this.setData({
  //       unread: res.data.data.unread
  //     })
  //   })
  // },
  sure() {
    wx.navigateTo({
      url: '/pages/doctor/write/write',
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
        app.globalData.user_token = ''
        wx.redirectTo({
          url: '/pages/doctor/login/login',
          success: function (res) { },
          fail: function (res) { },
          complete: function (res) { },
        })
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