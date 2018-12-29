// pages/userport/login/login.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    code_tips: false,
    phone:'',  //手机号
    password:''  //密码
  },
  getPhone(e) {
    //获取手机号
    this.setData({
      phone: e.detail.value
    })
  },
  getPassWord(e) {
    //获取图片验证码输入
    this.setData({
      password: e.detail.value
    })
  },
  login_btn(){
    if(this.data.phone==''){
      app.config.mytoast('请输入正确的手机号')
      return false
    }
    if (this.data.password == '') {
      app.config.mytoast('请输入密码')
      return false
    }
    wx.switchTab ({
      url: '/pages/clinic/search/search',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

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