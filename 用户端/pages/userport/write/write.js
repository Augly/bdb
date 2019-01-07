// pages/userport/write/write.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imhUrl: app.ImageHost,
    user_portrait:'',
    name: '测试',  //姓名
    phone: '17633369350',  //手机号
    age: '',  //年龄
    email: '', //邮箱 
    sex: 1,
    height:0,
  },
  //获取个人信息
  getUserInfo() {
    app.config.ajax('POST', {
      token: app.globalData.user_token,
    }, 'user/user/user_info', res => {
      this.setData({
        name: res.data.data.user_realname,
        phone: res.data.data.user_phone,
        sex: res.data.data.user_sex,
        age: res.data.data.user_age,
        email: res.data.data.user_email,
        user_portrait: res.data.data.user_portrait
      })
    })
  },
  //修改个人信息
  saveUserInfo(){
    app.config.ajax('POST', {
      token: app.globalData.user_token,
      realname: this.data.name,
      age: this.data.age,
      sex:this.data.sex,
      email: this.data.email,
      portrait: this.data.user_portrait,
    }, 'user/user/user_info_update', res => {
      app.config.mytoast('修改资料成功，即将返回',res=>{
        wx.navigateBack({
          delta: 1,
        })
      })
    })
  },
  getHeight(e){
    console.log(e.detail.height)
    this.setData({
      height: 20
    })
  },
  burHeight(){
    this.setData({
      height: 0
    })
  },
  changesA() {
    wx.chooseImage({
      count: 1,
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
      success: (res) => {
        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
       app.config.ajax(
          'img',
          {
            token:app.globalData.user_token
          },
          'user/user/upload_img',
          res => {
            this.setData({
              user_portrait: res.data.path
            })
          },
          res => { },
          res => { },
          res.tempFilePaths[0]
        )
      }
    })
  },
  // 选择性别
  select_sex(e) {
    this.setData({
      sex: e.currentTarget.dataset.sex
    })
  },
  //输入姓名
  getName(e) {
    this.setData({
      name: e.detail.value
    })
  },
  //输入手机号
  getPhone(e) {
    this.setData({
      phone: e.detail.value
    })
  },
  //输入年龄
  getAge(e) {
    this.setData({
      age: e.detail.value
    })
  },
  //输入邮箱
  getEmail(e) {
    this.setData({
      email: e.detail.value
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
  //保存个人信息
  save() {
    if (this.data.name == '') {
      app.config.mytoast('请输入您的姓名')
      return false
    }
    if (this.data.phone == '') {
      app.config.mytoast('请输入您的手机号')
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
  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})