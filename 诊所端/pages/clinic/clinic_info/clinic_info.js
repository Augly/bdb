// pages/clinic/clinic_info/clinic_info.js
const app=getApp()
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
    hname:'',
    adder:''
  },
  close() {
    this.setData({
      mask: false,
      success: false,
      must: false
    })
  },
  save() {
    if (this.data.wxchat == '' || this.data.name == '') {
      this.setData({
        mask: true,
        must: true
      })
    } else {
      this.saveuserInfo()
    }
  },
  // 数据绑定是否为空
  nameinput(e) {
    this.setData({
      name: e.detail.value
    })
  },
  getwxchat(e) {
    this.setData({
      wxchat: e.detail.value
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
    },'hospital/user/hospital_info',res=>{
        this.setData({
          name: res.data.data.hospital_linkman,
          wxchat: res.data.data.hospital_phone,
          hname: res.data.data.hospital_name,
          adder: res.data.data.hospital_address
        })
    })
  },
  saveuserInfo(){
    app.config.ajax('POST', {
      token: app.globalData.user_token,
      linkman: this.data.name,
      phone: this.data.wxchat
    }, 'hospital/user/user_info_update', res => {
      this.setData({
        mask: true,
        success: true
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