// pages/sale/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    mask:true,
  },
  // 二维码
  go_code(){
    wx.navigateTo({
      url: '/pages/sale/code/code',
    })
  },
  // 诊所统计
  go_clinic() {
    wx.navigateTo({
      url: '/pages/sale/clinic/clinic',
    })
  },
  // 流量统计
  go_flow(){
    wx.navigateTo({
      url: '/pages/sale/flow/flow',
    })
  },
  // 销量统计
  go_saleinfo(){
    wx.navigateTo({
      url: '/pages/sale/salelist/salelist',
    })
  },
  // 消息
  go_message() {
    wx.navigateTo({
      url: '/pages/sale/message/message',
    })
  },
  go_my() {
    wx.navigateTo({
      url: '/pages/sale/my/my',
    })
  },
  go_date(){
    wx.navigateTo({
      url: '/pages/sale/date/date',
    })
  },
  del_submit(){
    wx.navigateTo({
      url: '/pages/sale/my/my',
    })
  },
  close_code(){
    this.setData({
      mask:false
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