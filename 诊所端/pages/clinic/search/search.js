// pages/userport/search/search.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    choose:true,
    medicine_list:3,
    nav:1,
    mask: false,
    del: false,
    del_success: false
  },
  // 诊所中心
  go_center(){
    wx.navigateTo({
      url: '/pages/clinic/center/center',
    })
  },
  // 删除
  del() {
    this.setData({
      mask: true,
      del: true
    })
  },
  close_code() {
    this.setData({
      mask: false,
      del: false
    })
  },
  del_submit() {
    this.setData({
      mask: true,
      del: false,
      del_success: true
    })
  },
  close_success() {
    this.setData({
      mask: false,
      del: false,
      del_success: false
    })
  },
  go_message(){
    wx.navigateTo({
      url: '/pages/clinic/message/message',
    })
  },
  go_groder(){
    wx.navigateTo({
      url: '/pages/clinic/order_detail/order_detail',
    })
  },
  dataed(){
    this.setData({
      nav:1
    })
  },
  finish() {
    this.setData({
      nav: 2
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