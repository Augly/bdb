// pages/userport/message/message.js
const app=getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    page:1,
    list:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getData()
  },
  getData(){
    app.config.ajax('POST', {
      token: app.globalData.user_token,
      page: this.data.page
    }, 'user/user/my_message', res => {
      let s=this.data.list
      if (res.data.data.length > 0) {
        this.setData({
          list: s.concat(res.data.data.map(item=>{
            item.message_createtime = app.config.timeForm(item.message_createtime).btTime
          })),
          page: 1 + this.data.page
        })
      } else {
        app.config.mytoast('暂无更多数据')
      }
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
    wx.showNavigationBarLoading()
    this.getData()

    wx.hideNavigationBarLoading()
    // 停止下拉动作
    wx.stopPullDownRefresh()
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    this.setData({
      page:1,
      list:[]
    })
    this.getData()
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})