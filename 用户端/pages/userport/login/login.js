// pages/userport/login/login.js
const app = getApp()
Page({
  /**
   * 页面的初始数据
   */
  data: {
    codeStatua: '发送',    //验证码状态
    code_tips: false,
    pic_code_wrap: false,  //图形验证器
    imgUrl: app.ImageHost,  //图片前缀
    phone: '',     //手机号
    code: '',       //验证码
    picCode:'',   //图片验证码
    erroCode:false
  },
  close_code() {
    //关闭图片验证
    this.setData({
      pic_code_wrap: !this.data.pic_code_wrap
    })
  },
  getPhone(e) {
    //获取手机号
    this.setData({
      phone: e.detail.value
    })
  },
  getPicCode(e){
    //获取图片验证码输入
    this.setData({
      picCode:e.detail.value
    })
  },
  getCode(e) {
    //获取短信验证码
    this.setData({
      code: e.detail.value
    })
  },
  index_page() {
    if(this.data.picCode==''){
      this.setData({
        erroCode:true
      })
      return false
    }
    //验证码读秒并关闭图片验证
    if (this.data.codeStatua == '发送') {
      this.setData({
        pic_code_wrap: !this.data.pic_code_wrap
      })
      this.setData({
        codeStatua: 60,
        code_tips: true,
      })
      let st = setInterval(() => {
        let n = this.data.codeStatua--
        if (n == 1) {
          this.setData({
            codeStatua: '发送'
          })
          clearInterval(st)
        } else {
          n--
          this.setData({
            codeStatua: n
          })
        }
      }, 1000)
    }
  },
  login_btn(res) {
    //登陆输入判断成功
    if (this.data.phone == '') {
      app.config.mytoast('请输入正确的手机号!')
      return false
    }
    if(this.data.code==''){
      app.config.mytoast('请输入短信验证码!')
      return false
    }
    wx.switchTab({
      url: '/pages/userport/index/index',
    })
  },

  SendCode: function () {
    //开启图片验证码验证
    if (this.data.phone == '') {
      //验证手机号
      app.config.mytoast('请输入正确的手机号!')
      return false
    }

    if (this.data.codeStatua == '发送') {
      this.setData({
        pic_code_wrap: true
      })
    }

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