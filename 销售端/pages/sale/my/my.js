// pages/userport/my/my.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    mask: false,
    must: false,
    success: false,
    name: '',
    wxchat: '',
    sex:1,
    type: 1,
    avtar: '/images/12.png'
  },
  changesA() {
    wx.chooseImage({
      count: 1,
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
      success: (res) => {
        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
        // var tempFilePaths = res.tempFilePaths
        this.setData({
          avtar: res.tempFilePaths[0]
        })
      }
    })

  },
  // 判断
  nameinput(e) {
    this.setData({
      name: e.detail.value
    })
  },
  wxchat(e) {
    this.setData({
      wxchat: e.detail.value
    })
  },
  save() {
    if (this.data.wxchat == '' || this.data.name == '') {
      this.setData({
        mask: true,
        must: true
      })
    } else {
      this.setData({
        mask: true,
        success: true
      })
      // setTimeout(()=>{
      //   wx.navigateBack({
      //     delta: 1,
      //   })
      // },1000)
    }
  },
  close() {
    this.setData({
      mask: false,
      success: false,
      must: false
    })
  },
  // 首页
  go_index(){
    wx.navigateTo({
      url: '/pages/sale/index/index',
    })
  },
  // 选择性别
  select_sex(e){
    this.setData({
      sex: e.currentTarget.dataset.sex
    })
  },
  // 消息
  go_message(){
    wx.navigateTo({
      url: '/pages/sale/message/message',
    })
  },
  go_data(){
    wx.navigateTo({
      url: '/pages/sale/date/date',
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