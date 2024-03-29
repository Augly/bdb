// pages/doctor/date/date.js
const app=getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrl: app.ImageHost,
    avtar: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1544422030851&di=6f08e3e4bb29548302a95f5c4892f79c&imgtype=jpg&src=http%3A%2F%2Fimg2.imgtn.bdimg.com%2Fit%2Fu%3D2177114997%2C30575453%26fm%3D214%26gp%3D0.jpg'
  },
  go_index(){
    wx.navigateTo({
      url: '/pages/sale/index/index',
    })
  },
  details(e){
    wx.navigateTo({
      url: '/pages/sale/dateinfo/dateinfo?id=' + e.currentTarget.dataset.id,
    })
  },
  go_message() {
    wx.navigateTo({
      url: '/pages/sale/message/message',
    })
  },
  go_my() {
    wx.navigateTo({
      url: '/pages/sale/my/my',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getData()
  },
  getData(){
    app.config.ajax('POST',{
      token:app.globalData.user_token
    },'sell/user/my_doctor',res=>{
      this.setData({
        doctorlist:res.data.data.map(item=>{
          item.doctor_createtime = app.config.timeForm(item.doctor_createtime).btTime
          return item
        })
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
    this.getData()
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