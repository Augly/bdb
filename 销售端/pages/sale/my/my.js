// pages/userport/my/my.js
const app=getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    mask: false,
    must: false,
    success: false,
    name: '',  //姓名
    sexindex:1,   //性别
    wxchat: '',  //微信号
    email: '', //邮箱
    age: 20,  //年龄
    phone: '',  //手机号
    imgUrl: app.ImageHost,
    sell_portrait: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1544422030851&di=6f08e3e4bb29548302a95f5c4892f79c&imgtype=jpg&src=http%3A%2F%2Fimg2.imgtn.bdimg.com%2Fit%2Fu%3D2177114997%2C30575453%26fm%3D214%26gp%3D0.jpg'
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
          'sell/user/upload_img',
          res => {
            app.config.mytoast('上传图片成功!')
            this.setData({
              sell_portrait: res.data.path
            })
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
    }, 'sell/user/sell_info', res => {
      this.setData({
        name: res.data.data.sell_realname,
        phone: res.data.data.sell_phone,
        sexindex: res.data.data.sell_sex,
        age: res.data.data.sell_age,
        wxchat: res.data.data.sell_wechat,
        email: res.data.data.sell_email,
        sell_portrait: res.data.data.sell_portrait
      })
    })
  },
  // 姓名
  nameinput(e) {
    this.setData({
      name: e.detail.value
    })
  },
  //获取手机号
  getPhone(e){
    this.setData({
      phone:e.detail.value
    })
  },
  //年龄
  getAge(e){
    this.setData({
      age: e.detail.value
    })
  },
  //邮箱
  getEmail(e){
    this.setData({
      email: e.detail.value
    })
  },
  //微信号
  getWechat(e) {
    this.setData({
      wxchat: e.detail.value
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
      portrait: this.data.sell_portrait,
      wechat: this.data.wxchat
    }, 'sell/user/sell_info_update', res => {
      this.setData({
        mask: true,
        success: true
      })
      // app.config.mytoast('修改资料成功，即将返回', res => {
      //   wx.navigateBack({
      //     delta: 1,
      //   })
      // })
    })
  },
  //保存
  save() {
    if (this.data.wxchat == '' || this.data.name == '') {
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
    // else {
    //   this.setData({
    //     mask: true,
    //     success: true
    //   })
      // setTimeout(()=>{
      //   wx.navigateBack({
      //     delta: 1,
      //   })
      // },1000)
    
  },
  //退出登陆
  out() {
    app.config.ajax('POST', {
      token: app.globalData.user_token,
    }, 'sell/user/login_out', res => {
      wx.clearStorage('user_token')
      app.globalData.user_token = ''
      wx.redirectTo({
        url: '/pages/sale/login/login',
        success: function (res) { },
        fail: function (res) { },
        complete: function (res) { },
      })
    })

  },
  close() {
    this.setData({
      mask: false,
      success: false,
      must: false
    })
  },
  // 首页
  go_index(){
    wx.navigateTo({
      url: '/pages/sale/index/index',
    })
  },
  // 选择性别
  select_sex(e){
    this.setData({
      sexindex: e.currentTarget.dataset.sex
    })
  },
  // 消息
  go_message(){
    wx.navigateTo({
      url: '/pages/sale/message/message',
    })
  },
  go_data(){
    wx.navigateTo({
      url: '/pages/sale/date/date',
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
//onShareAppMessage: function() {}
})