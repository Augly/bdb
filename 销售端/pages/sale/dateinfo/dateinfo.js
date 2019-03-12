// pages/doctor/dateinfo/dateinfo.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrl: app.ImageHost,
    avtar: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1544422030851&di=6f08e3e4bb29548302a95f5c4892f79c&imgtype=jpg&src=http%3A%2F%2Fimg2.imgtn.bdimg.com%2Fit%2Fu%3D2177114997%2C30575453%26fm%3D214%26gp%3D0.jpg'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      doctor_id: options.id
    })
    app.config.ajax('POST', {
      token: app.globalData.user_token,
      doctor_id: options.id
    }, 'sell/user/my_doctor_info', res => {
      res.data.data[0].doctor_createtime = app.config.timeForm(res.data.data[0].doctor_createtime).btTime
      this.setData({
        info: res.data.data[0]
      })
    })
  },
  getData() {
    app.config.ajax('POST', {
      token: app.globalData.user_token,
      doctor_id:options.id
    }, 'sell/user/my_doctor_info', res => {
      res.data.data.doctor_createtime = app.config.timeForm(res.data.data.doctor_createtime).btTime
      this.setData({
        info: res.data.data
      })
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
    if (this.data.doctor_id && this.data.doctor_id != undefined && this.data.doctor_id!=null){
      app.config.ajax('POST', {
        token: app.globalData.user_token,
        doctor_id: this.data.doctor_id
      }, 'sell/user/my_doctor_info', res => {
        res.data.data[0].doctor_createtime = app.config.timeForm(res.data.data[0].doctor_createtime).btTime
        this.setData({
          info: res.data.data[0]
        })
      })
    }
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
  //onShareAppMessage: function () { }
})