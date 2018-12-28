// pages/userport/login/login.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    code: '发送',
    code_tips: false,
    pic_code_wrap:false
  },
  close_code(){
    this.setData({
      pic_code_wrap: false
    })
  },
  index_page(res){
    wx.navigateTo({
      url: '/pages/doctor/index/index',
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
  },
  login_btn(res) {
    this.setData({
      pic_code_wrap:true
    })
  },
  SendCode: function() {
    //验证码读秒
    if (this.data.code == '发送') {
      this.setData({
        code: 60,
        code_tips: true,
      })
      let st = setInterval(() => {
        let n = this.data.code--
          if (n == 1) {
            this.setData({
              code: '发送'
            })
            clearInterval(st)
          } else {
            n--
            this.setData({
              code: n
            })
          }
      }, 1000)
    }
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