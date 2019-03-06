const config = require('./utils/util.js')
App({
  //app.js
  lanhu: 'http://mywx.zzvlm.com/lingyi/',
  RequestHost: 'https://lingyiil.dazhu-ltd.cn/program',
  ImageHost: 'http://lingyistore.dazhu-ltd.cn/public/uploads/',
  config: config,
  /**
   * 当小程序初始化完成时，会触发 onLaunch（全局只触发一次）
   */
  onLaunch: function () {

  },

  /**
   * 当小程序启动，或从后台进入前台显示，会触发 onShow
   */
  onShow: function (options) {
    wx.authorize({
      scope: 'scope.userLocation',
      success: res => {
        wx.getLocation({
          type: 'wgs84',
          altitude: false,
          success: res => {
            this.globalData.user_Location = res
          },
          fail: res => {

          },
          complete: res => {

          },
        })
      },
      fail: function (res) {
        config.mytoast('系统检测到您已拒绝地理位置授权,为了您的体验,即将跳往授权页面', res => {
          wx.openSetting({
            success: function (res) { },
            fail: function (res) { },
            complete: function (res) { },
          })
        })

      },
      complete: function (res) { },
    })
    wx.getStorage({
      key: 'user_token',
      success: res => {
        this.globalData.user_token = res.data
      },
      fail: res => {
        this.globalData.user_token = ''
      },
      complete: function (res) { },
    })
  },

  /**
   * 当小程序从前台进入后台，会触发 onHide
   */
  onHide: function () {

  },

  /**
   * 当小程序发生脚本错误，或者 api 调用失败时，会触发 onError 并带上错误信息
   */
  onError: function (msg) {

  },
  globalData: {
    doctor_id: '',
    user_token: '',     //用户token
    user_Location: null  //用户地理位置
  }
})