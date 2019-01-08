// pages/userport/search/search.js
const app = getApp()
Page({
  /**
   * 页面的初始数据
   */
  data: {
    imgUrl: app.ImageHost,
    choosed: false,
    choose: false,
    key: '',
    id: '',
    disId: '',
    cityIndex: -1,
    citylist: [],
    otherList: [],
    otherIndex: -1,
    medicine_list: []
  },
  sale_medicine(e) {
    wx.navigateTo({
      url: `/pages/userport/introduce/introduce?hosId=${e.currentTarget.dataset.id}`
    })
  },
  suresearch() {
    this.setData({
      disId: ''
    })
    this.getList()
  },
  //选择二级
  changes(e) {
    this.setData({
      disId: e.currentTarget.dataset.id,
      otherIndex: e.currentTarget.dataset.index,
      choose: false
    })
    this.getList()
  },
  //选择一级
  citySelect(e) {
    this.setData({
      cityIndex: e.currentTarget.dataset.index,
      disId: e.currentTarget.dataset.id,
      otherList: this.data.citylist[e.currentTarget.dataset.index].second
    })
    this.getList()
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // this.setData({
    //   id: options.id
    // })
    wx.getSystemInfo({
      success: res => {
        console.log(res.windowWidth)
        this.setData({
          myHeight: res.windowHeight - (res.windowWidth / 750) * 190
        })
      },
      fail: function (res) { },
      complete: function (res) { }
    })
    this.getdis()
    this.getList()
  },
  //获取区域
  getdis() {
    app.config.ajax(
      'POST',
      {
        token: app.globalData.user_token
      },
      'user/hospital/district_list',
      res => {
        console.log(res)
        this.setData({
          citylist: res.data.data,
          otherList: res.data.data[0].second
        })
      }
    )
  },
  //获取诊所列表
  getList() {
    app.config.ajax(
      'POST',
      {
        token: app.globalData.user_token,
        key: this.data.key,
        longitude: app.globalData.user_Location.longitude,
        latitude: app.globalData.user_Location.latitude,
        district_id: this.data.disId
      },
      'user/hospital/hospital_list',
      res => {
        this.setData({
          medicine_list: res.data.data
        })
      }
    )
  },
  getValue(e) {
    this.setData({
      key: e.detail.value
    })
  },
  showMask() {
    this.setData({
      choosed: true,
      choose: !this.data.choose
    })
  },
  hideMask() {
    this.setData({
      disId: '',
      cityIndex: -1,
      otherIndex: -1
    })
    this.getList()
    this.setData({
      choose: false,
      choosed: false
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () { },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () { },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () { },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () { },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () { },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () { },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () { }
})
