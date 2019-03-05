// pages/userport/cancle/cancle.js
const app=getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    del_success: false,
    imgUrl: app.ImageHost
  },
  //我的预约详情
  getData() {
    app.config.ajax('POST', {
      token: app.globalData.user_token,
      subscribe_id:this.data.id   //预约id
    }, 'user/user/subscribe_info', res => {
      res.data.data.allPrice = Number(res.data.data.subscribe_goodsprice) * res.data.data.subscribe_goodsnum
      res.data.data.subscribe_canceltime = app.config.timeForm(res.data.data.subscribe_canceltime).btTime
      res.data.data.subscribe_createtime = app.config.timeForm(res.data.data.subscribe_createtime).btTime
      res.data.data.subscribe_reservetime = app.config.timeForm(res.data.data.subscribe_reservetime).btTime
      res.data.data.subscribe_paytime = app.config.timeForm(res.data.data.subscribe_paytime).btTime
      this.setData({
        info: res.data.data
      })
    })
  },
  cancle() {
    app.config.ajax('POST', {
      token: app.globalData.user_token,
      subscribe_id: this.data.id   //预约id
    }, 'user/reserve/cancel', res => {
      this.setData({
        del_success: true,
        type:'waitIng'
      })
    })
  },
  close_success() {
    this.setData({
      del_success: false
    })
    wx.navigateBack({
      delta: 1,
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      type:options.type,
      id:options.id
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    this.getData()
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