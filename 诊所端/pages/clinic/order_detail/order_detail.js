// pages/clinic/order_detail/order_detail.js
const app=getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    mask: false,
    imgUrl: app.ImageHost,
    array: ['人血白蛋白', '免疫球蛋白'],
    index:0,
    arraytwo: ['50ml', '100ml'],
    indextwo: 0,
    arraythree: [1, 2,3,4,5,6,7,8,9,10],
    indexthree: 0,
    style:true,
    time_text:''
  },
  submit() {
    this.setData({
      mask: true
    })

  },
  bindPickerChange(e) {
    this.setData({
      index: e.detail.value
    })
  },
  bindPickerChangetwo(e) {
    this.setData({
      indextwo: e.detail.value
    })
  },
  bindPickerChangethree(e) {
    this.setData({
      indexthree: e.detail.value
    })
  },
  cancle() {
    this.setData({
      mask: false
    })
  },
  go_search() {
    this.setData({
      mask: false
    })
    wx.navigateBack({
      delta: 1,
    })

    // wx.navigateTo({
    //   url: '/pages/clinic/search/search',
    // })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    // 根据页面传值判断是否显示底部按钮
    var styles  = options.style
    if(styles==0){
      this.setData({
        style:true,
        time_text:''
      })
    } else if (styles == 1) {
      this.setData({
        style: false,
        time_text: '完成时间'
      })
    } else if (styles == 2) {
      this.setData({
        style: false,
        time_text: '取消时间'
      })
    }
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})