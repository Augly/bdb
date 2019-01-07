// pages/userport/mydata/mydata.js
const app=getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    statusType: 'ready',
    mask:false,
    page:1,
    id:'',
    finishlist:[],
    readylist:[],
    warnList:[],
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
      url: '/pages/userport/finish/finish?type=' + e.currentTarget.dataset.type + '&id=' + e.currentTarget.dataset.id,
    })
  },
  // 删除已取消
  waitIngdel(e){
    this.setData({
      id:e.detail.myid,
      mask: true,
      del: true
    })
  },
  //删除已完成
  finishdel(e) {
    this.setData({
      id: e.detail.myid,
      mask: true,
      del: true
    })
  },
  //确认删除
  sure(e){
    app.config.ajax('POST', {
      token: app.globalData.user_token,
      subscribe_id: this.data.id
    }, 'user/user/subscribe_del', res => {
      this.getfinishList()
      this.setData({
        mask: false,
        delSuccess: true
      })
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
  //获取我的已预约列表
  getreadyList(){
    app.config.ajax('POST', {
      token: app.globalData.user_token,
      page:this.data.page
    }, 'user/user/my_subscribe', res => {
      if (res.data.data.length > 0) {
        this.setData({
          page: 1 + this.data.page,
          readylist: res.data.data.map(item => {
            item.subscribe_reservetime = app.config.timeForm(item.subscribe_reservetime).btTime
            item.subscribe_createtime = app.config.timeForm(item.subscribe_createtime).btTime
            return item
          })
        })
      } else {
        app.config.mytoast('暂无更多数据')
      }
    })
  },
  //获取我的已完成列表
  getfinishList() {
    app.config.ajax('POST', {
      token: app.globalData.user_token,
      page: this.data.page
    }, 'user/user/my_subscribe_complete', res => {
      if (res.data.data.length > 0) {
        this.setData({
          page: 1 + this.data.page,
          finishlist: res.data.data.map(item => {
            item.subscribe_reservetime = app.config.timeForm(item.subscribe_reservetime).btTime
            item.subscribe_createtime = app.config.timeForm(item.subscribe_createtime).btTime
            return item
          })
        })
      } else {
        app.config.mytoast('暂无更多数据')
      }
    })
  },
  //获取我的已取消列表
  getwarnList() {
    app.config.ajax('POST', {
      token: app.globalData.user_token,
      page: this.data.page
    }, 'user/user/my_subscribe_cancel', res => {
      if (res.data.data.length>0){
        this.setData({
          page: 1 + this.data.page,
          warnList: res.data.data.map(item => {
            item.subscribe_reservetime = app.config.timeForm(item.subscribe_reservetime).btTime
            item.subscribe_createtime = app.config.timeForm(item.subscribe_createtime).btTime
            return item
          })
        })
      }else{
        app.config.mytoast('暂无更多数据')
      }
    })
  },
  ready() {
    this.setData({
      statusType: 'ready',
      page:1
    })
    this.getreadyList()
  },
  finish() {
    this.setData({
      statusType: 'finish',
      page: 1
    })
    this.getfinishList()
  },
  waitIng() {
    this.setData({
      statusType: 'waitIng',
      page: 1
    })
    this.getwarnList()
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
    this.getreadyList()
    // this.getwarnList()
    // this.getfinishList()
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
    wx.showNavigationBarLoading()

    if (this.data.statusType == 'ready') {
      this.getreadyList()
    } else if (this.data.statusType == 'finish') {
      this.getfinishList()
    } else {
      this.getwarnList()
    }
    wx.hideNavigationBarLoading()
    // 停止下拉动作
    wx.stopPullDownRefresh()
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})