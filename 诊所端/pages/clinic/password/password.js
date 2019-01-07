// pages/clinic/password/password.js
const app=getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    passwrod:'',
    spassword:'',
    oldpassword:'',
    tips:false,
    success:false,
  },
  passwrod(e){
    this.setData({
      passwrod: e.detail.value
    })
  },
  getpasswrod(e){
    this.setData({
      oldpassword: e.detail.value
    })
  },
  samepass(e) {
    this.setData({
      spassword: e.detail.value
    })
    console.log(this.data.spassword)
  },
  submit(){
    if (this.data.oldpassword==''){
      app.config.mytoast('请输入原密码')
      return false
    }
    if (this.data.passwrod == '') {
      app.config.mytoast('请输入新密码')
      return false
    }
    if (this.data.spasswrod == '') {
      app.config.mytoast('请再次输入新密码')
      return false
    }
    if (this.data.passwrod != this.data.spassword){
      this.setData({
        tips:true
      })
    }else{
      app.config.ajax('POST', {
        token: app.globalData.user_token,
        old_pass: this.data.oldpassword,
        new_pass:this.data.spasswrod
      }, 'hospital/user/set_pass', res => {
        this.setData({
          success: true
        })
        // setTimeout(res=>{
        //   wx.navigateBack({
        //     delta: 1,
        //   },500)
        // })
      })
    }
  },
  close_success() {
    this.setData({
      success: false,
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