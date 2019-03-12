// pages/userport/index/index.js
const app = getApp()
Page({
  /**
   * 页面的初始数据
   */
  data: {
    banner_list: ['/images/14.png', '/images/14.png', '/images/14.png'],
    imgUrl: app.ImageHost,
    goodsList: [],
    history: [],
    unread: 0,
    mask: false
  },
  sure(e) {
    console.log(e)
    wx.switchTab({
      url: '/pages/userport/my/my',
      success: function (res) {},
      fail: function (res) {},
      complete: function (res) {},
    })
  },
  toyyed(e) {
    wx.navigateTo({
      url:
        '/pages/userport/finish/finish?type=ready&id=' +
        e.currentTarget.dataset.id,
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {}
    })
  },
  toclic(e) {
    wx.navigateTo({
      url: '/pages/userport/search/search?id=' + e.currentTarget.dataset.id,
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {}
    })
  },
  // 历史列表
  go_list() {
    wx.navigateTo({
      url: '/pages/userport/mydata/mydata?type=ready'
    })
  },
  tores() {
    wx.navigateTo({
      url: '/pages/userport/salemedicine/salemedicine',
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {}
    })
  },
  // 跳转我的
  my() {
    wx.navigateTo({
      url: '/pages/userport/my/my'
    })
  },
  //获取个人信息
  getUserInfo() {
    app.config.ajax(
      'POST',
      {
        token: app.globalData.user_token
      },
      'user/user/user_info',
      res => {
        this.setData({
          mask: res.data.data.user_isrevised == 1 ? true : false,
          userInfo: res.data.data
        })
      }
    )
  },
  // 跳转更多药品
  more_medicine() {
    wx.navigateTo({
      url: '/pages/userport/medicinelist/medicinelist'
    })
  },
  // 跳转医务中心
  tointroduce() {
    wx.navigateTo({
      url: '/pages/userport/introduce/introduce'
    })
  },
  // 跳转message
  toMessges() {
    wx.navigateTo({
      url: '/pages/userport/message/message'
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if (options.scene != undefined && options.scene != null) {
      const url = decodeURIComponent(options.scene).split('=')
      if (app.globalData.doctor_id != url[1]){
        app.globalData.doctor_id = url[1]
        wx.redirectTo({
          url: '/pages/userport/login/login',
          success: function (res) { },
          fail: function (res) { },
          complete: function (res) { },
        })
      }else{
        app.globalData.doctor_id = url[1]
      }
    }
  },
  //获取首页轮播图
  gitBanner() {
    app.config.ajax(
      'POST',
      {
        token: app.globalData.user_token
      },
      'user/index/banner_list',
      res => {
        this.setData({
          banner_list: res.data.data
        })
      }
    )
  },
  //获取我的预约
  gitHistorySubscribe() {
    app.config.ajax(
      'POST',
      {
        token: app.globalData.user_token
      },
      'user/index/history_subscribe',
      res => {
        this.setData({
          history: res.data.data
        })
      }
    )
  },
  //获取首页药品
  gitGoods() {
    app.config.ajax(
      'POST',
      {
        token: app.globalData.user_token
      },
      'user/index/goods_list',
      res => {
        this.setData({
          goodsList: res.data.data
        })
      }
    )
  },
  //获取未读消息
  gitUnread() {
    app.config.ajax(
      'POST',
      {
        token: app.globalData.user_token
      },
      'user/index/unread_count',
      res => {
        this.setData({
          unread: res.data.data.unread
        })
      }
    )
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {},

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {
    wx.getStorage({
      key: 'user_token',
      success: res => {
        app.globalData.user_token = res.data
        this.gitBanner()
        this.gitHistorySubscribe()
        this.gitGoods()
        this.gitUnread()
        this.getUserInfo()
      },
      fail: res => {
        app.globalData.user_token = ''
        wx.redirectTo({
          url: '/pages/userport/login/login',
          success: function(res) {},
          fail: function(res) {},
          complete: function(res) {}
        })
      },
      complete: function(res) {}
    })
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {},

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {},

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {},

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {},

  /**
   * 用户点击右上角分享
   */
  //onShareAppMessage: function () { }
})
