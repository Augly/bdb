// pages/doctor/date/date.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    mask: false,
    delSuccess: false,
    nav: 0,
    imgUrl: app.ImageHost,
    page: 1,
    list: [],
    finishlist: [],
    cendellist: [],
    nav_text: ['已预约', '已完成', '已取消'],
    avtar: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1544422030851&di=6f08e3e4bb29548302a95f5c4892f79c&imgtype=jpg&src=http%3A%2F%2Fimg2.imgtn.bdimg.com%2Fit%2Fu%3D2177114997%2C30575453%26fm%3D214%26gp%3D0.jpg'
  },
  tab (e) {
    console.log(e.currentTarget.dataset.index)
    this.setData({
      nav: e.currentTarget.dataset.index,
      page: 1
    })
    if (e.currentTarget.dataset.index == 0) {
      this.getData()
    } else if (e.currentTarget.dataset.index == 1) {
      this.getfinish()
    } else {
      this.getcendel()
    }
  },
  del (e) {
    this.setData({
      mask: !this.data.mask,
      id: e.currentTarget.dataset.id
    })
  },
  surecendel (e) {

    console.log(e.detail.id)
    app.config.ajax('POST', {
      token: app.globalData.user_token,
      subscribe_id: this.data.id
    }, 'doctor/user/subscribe_del', res => {
      this.setData({
        mask: false,
        delSuccess: true,
        page: 1,
        cendellist: []
      })
      this.getcendel()
    })

  },
  details (e) {
    wx.navigateTo({
      url: '/pages/doctor/dateinfo/dateinfo?type=' + e.currentTarget.dataset.type + '&id=' + e.currentTarget.dataset.id,
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getData()
  },
  //预约列表
  getData () {
    app.config.ajax('POST', {
      token: app.globalData.user_token,
      page: this.data.page
    }, 'doctor/user/my_subscribe', res => {
      let s = this.data.list
      if (res.data.data.length > 0) {
        if (this.data.page == 1) {
          this.setData({
            list: res.data.data.map(item => {
              item.subscribe_reservetime = app.config.timeForm(item.subscribe_reservetime).btTime
              return item
            }),
          })
        } else {
          this.setData({
            list: s.concat(res.data.data.map(item => {
              item.subscribe_reservetime = app.config.timeForm(item.subscribe_reservetime).btTime
              return item
            })),
            page: 1 + this.data.page
          })
        }
      } else {
        app.config.mytoast('暂无更多数据')
      }
    })
  },
  //已完成预约列表
  getfinish () {
    app.config.ajax('POST', {
      token: app.globalData.user_token,
      page: this.data.page
    }, 'doctor/user/my_subscribe_complete', res => {
      let s = this.data.finishlist
      if (res.data.data.length > 0) {
        this.setData({
          finishlist: s.concat(res.data.data.map(item => {
            item.subscribe_reservetime = app.config.timeForm(item.subscribe_reservetime).btTime
            return item
          })),
          page: 1 + this.data.page
        })
      } else {
        app.config.mytoast('暂无更多数据')
      }
    })
  },
  //已取消预约列表
  getcendel () {
    app.config.ajax('POST', {
      token: app.globalData.user_token,
      page: this.data.page
    }, 'doctor/user/my_subscribe_cancel', res => {
      let s = this.data.cendellist
      if (res.data.data.length > 0) {
        this.setData({
          cendellist: s.concat(res.data.data.map(item => {
            item.subscribe_reservetime = app.config.timeForm(item.subscribe_reservetime).btTime
            return item
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
    this.setData({
      list: [],
      finishlist: [],
      cendellist: []
    })
    if (this.data.nav == 0) {
      this.getData()
    } else if (this.data.nav == 1) {
      this.getfinish()
    } else {
      this.getcendel()
    }
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    wx.showNavigationBarLoading()
    if (this.data.nav == 0) {
      this.getData()
    } else if (this.data.nav == 1) {
      this.getfinish()
    } else {
      this.getcendel()
    }
    setTimeout(res => {
      wx.hideNavigationBarLoading()
      // 停止下拉动作
      wx.stopPullDownRefresh()
    }, 1000)
  },

  /**
   * 用户点击右上角分享
   */
  //onShareAppMessage: function () { }
})