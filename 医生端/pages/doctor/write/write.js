// pages/userport/my/my.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    mask: false,
    must: false,
    success: false,
    name: '',  //姓名
    sexindex: 1,   //性别
    wxchat: '',  //微信号
    email: '', //邮箱
    age: 20,  //年龄
    phone: '',  //手机号
    imgUrl: app.ImageHost,
    doctor_portrait: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1544422030851&di=6f08e3e4bb29548302a95f5c4892f79c&imgtype=jpg&src=http%3A%2F%2Fimg2.imgtn.bdimg.com%2Fit%2Fu%3D2177114997%2C30575453%26fm%3D214%26gp%3D0.jpg'
  },
  changesA() {
    wx.chooseImage({
      count: 1,
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
      success: (res) => {
        app.config.ajax(
          'img',
          {
            token: app.globalData.user_token
          },
          'doctor/user/upload_img',
          res => {
            app.config.mytoast('图片上传成功!')
            this.setData({
              doctor_portrait: res.data.path
            })
            console.log()
          },
          res => { },
          res => { },
          res.tempFilePaths[0]
        )
      }
    })

  },
  //获取个人信息
  getUserInfo() {
    app.config.ajax('POST', {
      token: app.globalData.user_token,
    }, 'doctor/user/doctor_info', res => {
      this.setData({
        name: res.data.data.doctor_realname,
        phone: res.data.data.doctor_phone,
        sexindex: res.data.data.doctor_sex,
        age: res.data.data.doctor_age,
        wxchat: res.data.data.doctor_wechat,
        email: res.data.data.doctor_email,
        doctor_portrait: res.data.data.doctor_portrait
      })
    })
  },
  //修改个人信息
  saveUserInfo() {
    app.config.ajax('POST', {
      token: app.globalData.user_token,
      realname: this.data.name,
      age: this.data.age,
      sex: this.data.sexindex,
      email: this.data.email,
      portrait: this.data.doctor_portrait,
      wechat: this.data.wxchat
    }, 'doctor/user/doctor_info_update', res => {
      app.config.mytoast('修改资料成功，即将返回', res => {
        wx.navigateBack({
          delta: 1,
        })
      })
    })
  },
  // 选择性别
  select_sex(e) {
    this.setData({
      sexindex: e.currentTarget.dataset.sex
    })
  },
  nameinput(e) {
    this.setData({
      name: e.detail.value
    })
  },
  getwxchat(e) {
    this.setData({
      wxchat: e.detail.value
    })
  },
  getAge(e) {
    this.setData({
      age: e.detail.value
    })
  },
  getEmail(e) {
    this.setData({
      email: e.detail.value
    })
    
  },
  save() {
    if (this.data.name == '') {
      this.setData({
        mask: true,
        must: true
      })
      return false
    }
    if (this.data.wxchat == '') {
      this.setData({
        mask: true,
        must: true
      })
      return false
    }
    if (this.data.age == '') {
      app.config.mytoast('请输入您的年龄')
      return false
    }
    if (this.data.email == '') {
      app.config.mytoast('请输入您的邮箱')
      return false
    }
    this.saveUserInfo()
    // if (this.data.wxchat==''||this.data.name==''){
    //   this.setData({
    //     mask:true,
    //     must:true
    //   })
    //   return false
    // }else{
    //   this.setData({
    //     mask: true,
    //     success: true
    //   })
    // }
  },
  close() {
    this.setData({
      mask: false,
      success: false,
      must: false
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getUserInfo()
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