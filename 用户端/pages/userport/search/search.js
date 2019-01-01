// pages/userport/search/search.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    choose:false,
    medicine_list: [{
      img: '/images/4.png',
      name: '天津市胸科医院',
      tel: '022-23147100',
      address: '天津市津南区台儿庄南路261号'
    },
      { 
        img: '/images/5.png',
        name: '天津儿童医院',
        tel: '022-58916019',
        address: '天津市河西区马场道225号'
      },
      {
        img: '/images/6.png',
        name: '天津市第三中心医院',
        tel: '022-84112114',
        address: '天津市河东区津塘路83号'
      },
      {
        img: '/images/7.png',
        name: '天津市天津医院',
        tel: '022-84112114',
        address: '天津市河西区解放南路406号'
      },
      {
        img: '/images/14.png',
        name: '天津中医学院第一附属医院',
        tel: '022-27432299',
        address: '天津市南开区鞍山西道314号'
      }],
    otherList:["南开区","西青区"],
    otherIndex:0
  },
  sale_medicine(){
    wx.navigateTo({
      url: '/pages/userport/salemedicine/salemedicine',
    })
  },
  changes(e){
    this.setData({
      otherIndex:e.currentTarget.dataset.index,
      choose:false
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.getSystemInfo({
      success: res=>{
        console.log(res.windowWidth)
        this.setData({
          myHeight: res.windowHeight - (res.windowWidth/750*188)
        })
      },
      fail: function(res) {},
      complete: function(res) {},
    })
  },
  showMask(){
    this.setData({
      choose:!this.data.choose
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
  onShareAppMessage: function () {

  }
})