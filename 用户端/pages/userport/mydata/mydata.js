// pages/userport/mydata/mydata.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    statusType: 'ready',
    mask:false,
    delSuccess:false,
  },
  // 二维码
  go_code(){
    wx.navigateTo({
      url: '/pages/userport/code/code',
    })
  },
  // 已完成详情
  tofinish(e){
    wx.navigateTo({
      url: '/pages/userport/finish/finish?type=' + e.currentTarget.dataset.type,
    })
  },
  // 删除
  del(){
    this.setData({
      mask: true,
      del: true
    })
  },
  //确认删除
  sure(e){
    console.log(e.detail.id)
    this.setData({
      mask:false,
      delSuccess:true
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if(options.type){
      this.setData({
        statusType: options.type,
      });
    }
  },
  ready() {
    this.setData({
      statusType: 'ready'
    })
  },
  finish() {
    this.setData({
      statusType: 'finish'
    })
  },
  waitIng() {
    this.setData({
      statusType: 'waitIng'
    })
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