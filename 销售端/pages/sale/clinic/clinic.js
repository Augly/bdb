// pages/sale/salelist/salelist.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: [{
      name: '天津市长征医院',
      medicine: '免疫球蛋白',
      num: '50'
    }, {
      name: '天津市长征医院',
      medicine: '免疫球蛋白',
      num: '20'
    }, {
      name: '中国人民解放军第二零二医院',
      medicine: '免疫球蛋白',
      num: '30'
    }],
    null_list: false,
    array: ['免疫球蛋白', '免疫球蛋白', '免疫球蛋白', '免疫球蛋白'],
    index: 0,
    date: '2016-09-01',
    datetwo: '2016-09-01',
  },
  bindPickerChange(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index: e.detail.value
    })
  },
  bindDateChange(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      date: e.detail.value
    })
  },
  bindTwoDateChange(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      datetwo: e.detail.value
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