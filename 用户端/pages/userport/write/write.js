// pages/userport/write/write.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name: '测试',  //姓名
    phone: '17633369350',  //手机号
    age: '',  //年龄
    email: '', //邮箱 
    sex: 1
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
    wx.navigateBack({
      delta: 1,
    })
  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})