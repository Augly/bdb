// pages/userport/medicinelist/medicinelist.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrl: app.ImageHost,
    medicine_list: [{
        title: '升级版大含量福欣宝免疫球蛋白元大牌',

      },
      {
        title: '升级版大含量福欣宝免疫球蛋白元大牌',

      },
      {
        title: '升级版大含量福欣宝免疫球蛋白元大牌',

      }
    ],
    key: ''
  },
  //获取搜索内容
  getValue(e) {
    this.setData({
      key: e.detail.value
    })
  },
  //获取药品列表
  gitlist() {
    app.config.ajax('POST', {
      token: app.globalData.user_token,
      key:this.data.key
    }, 'user/goods/goods_list', res => {
      this.setData({
        list: res.data.data
      })
    })
  },
  // 跳转搜索页面
  choose_search(e) {
    console.log(e.currentTarget.dataset.id)
    wx.navigateTo({
      url: '/pages/userport/search/search?id=' + e.currentTarget.dataset.id,
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
    this.gitlist()
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