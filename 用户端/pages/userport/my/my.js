// pages/userport/my/my.js
const app=getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    unread:0,
    sex:1,
    type: 1,
    userInfo:null,
    imgUrl: app.ImageHost,
    avtar: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1544422030851&di=6f08e3e4bb29548302a95f5c4892f79c&imgtype=jpg&src=http%3A%2F%2Fimg2.imgtn.bdimg.com%2Fit%2Fu%3D2177114997%2C30575453%26fm%3D214%26gp%3D0.jpg'
  },
  
  // 个人设置
  go_write(){
    wx.navigateTo({
      url: '/pages/userport/write/write',
    })
  },
  out(){
    app.config.ajax('POST', {
      token: app.globalData.user_token,
    }, 'user/user/login_out', res => {
      wx.clearStorage('user_token')
      app.globalData.user_token=''
      wx.redirectTo({
        url: '/pages/userport/login/login',
        success: function (res) { },
        fail: function (res) { },
        complete: function (res) { },
      })
    })
    
  },
  // 跳转医务中心
  tointroduce() {
    wx.navigateTo({
      url: '/pages/userport/introduce/introduce',
    })
  }, 
  //获取个人信息
  getUserInfo(){
     app.config.ajax('POST', {
       token:app.globalData.user_token,
     }, 'user/user/user_info', res => {
       this.setData({
         userInfo:res.data.data
       })
    })
  },
  // 首页
  index(){
    wx.navigateTo({
      url: '/pages/userport/index/index',
    })
  },
  // 我的预约
  mydata(){
    wx.navigateTo({
      url: '/pages/userport/mydata/mydata',
    })
  },
  // 跳转消息页面
  toMessges() {
    wx.navigateTo({
      url: '/pages/userport/message/message',
    })
  },
  // 选择性别
  select_sex(e){
    this.setData({
      sex: e.currentTarget.dataset.sex
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
  //获取未读消息
  gitUnread() {
    app.config.ajax('POST', {
      token: app.globalData.user_token
    }, 'user/index/unread_count', res => {
      this.setData({
        unread: res.data.data.unread
      })
    })
  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    this.getUserInfo()
    this.gitUnread()
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