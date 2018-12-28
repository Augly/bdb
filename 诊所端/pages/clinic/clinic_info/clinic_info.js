// pages/clinic/clinic_info/clinic_info.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    mask: false,
    must: false,
    success: false,
    name: '',
    wxchat: '',
  },
  close() {
    this.setData({
      mask: false,
      success: false,
      must: false
    })
  },
  save() {
    if (this.data.wxchat == '' || this.data.name == '') {
      this.setData({
        mask: true,
        must: true
      })
    } else {
      this.setData({
        mask: true,
        success: true
      })
    }
  },
  // 数据绑定是否为空
  nameinput(e) {
    this.setData({
      name: e.detail.value
    })
  },
  wxchat(e) {
    this.setData({
      wxchat: e.detail.value
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