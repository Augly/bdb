// pages/clinic/center/center.js
const app=getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  go_password() {
    wx.navigateTo({
      url: '/pages/clinic/password/password',
    })
  },
  go_clinic(){
    wx.navigateTo({
      url: '/pages/clinic/clinic_info/clinic_info',
    })
  },
  go_message(){
    wx.navigateTo({
      url: '/pages/clinic/message/message',
    })
  },
  //退出登陆
  out() {
    app.config.ajax('POST', {
      token: app.globalData.user_token,
    }, 'hospital/user/login_out', res => {
      wx.clearStorage('user_token')
      app.globalData.user_token = ''
      wx.redirectTo({
        url: '/pages/clinic/login/login',
        success: function (res) { },
        fail: function (res) { },
        complete: function (res) { },
      })
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