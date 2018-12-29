// pages/introduce/introduce.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: [
      '/images/4.png',
      '/images/5.png'
    ],
    indicatorDots: false,
    autoplay: false,
    interval: 1000,
    duration: 800,
    hosRes: {
      adder: '北京市朝阳区高碑店乡惠河南街1001号B座',
      tel: '010-87706680',
      name: '北京市领医创造科技发展有限公司'
    },
    ks: ["儿科", "儿科"],
    product: `领医是以社会办医—华润医疗的创始团队为班底，经过与中国人寿、招商蛇口、联想弘毅、国药五色和泰和诚全域等大型机构的长期紧密合作，推动了领医的高速发展，现在已经形成自主运营医院、输出管理与系统两大业务体系，是国内为数不多的可独立发展，不依赖外部融资的医疗管理企业，领医还可为聚焦医疗服务的各公司、企业、集团等提供定制化的管理输出和顾问服务。
领医不仅拥有四大业务体系，还在发展过程中积累了包括“自主投资设立的领医中心”、“自主开发的连锁医疗信息系统”、“3条特色专科产品线”、“5大运营管理体系”在内的商业模式。`
  },

  // 首页
  index() {
    wx.navigateTo({
      url: '/pages/userport/index/index',
    })
  },
  // 跳转我的
  my() {
    wx.navigateTo({
      url: '/pages/userport/my/my',
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
    wx.setNavigationBarTitle({
      title: '领医介绍',
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) { },
    })
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