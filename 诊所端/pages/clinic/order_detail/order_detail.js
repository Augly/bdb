// pages/clinic/order_detail/order_detail.js
const app=getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    mask: true,
    imgUrl: app.ImageHost,
    array: ['2018-10-11 10:00', '2018-10-11 10:00','2018-10-11 10:00'],
    index:0,
    arraytwo: ['50ml', '100ml'],
    indextwo: 0,
    arraythree: [1, 2,3,4,5,6,7,8,9,10],
    indexthree: 0,
    style:false,
    time_text:'',
    btn_list: ['人血白蛋白', '免疫球蛋白', '人血白蛋白', '免疫球蛋白'],
    num_list: ['50ml', '100ml', '150ml', '200ml'],
    classify:'',
    num_nav:'',
    num:1,
    success_popup:false,
    choose_popup:false,
    time_popup:false,
    data_time:'2018-09-06 10:00',
    delSuccess: false,

  },
  // 弹层
  submit() {
    this.setData({
      mask: true,
      choose_popup:true 
    })
  },
  choose_cancle(){
    this.setData({
      mask: false,
      choose_popup: false,
      success_popup:false,
    })
  },
  submit_date(){
    this.setData({
      mask: false,
      delSuccess: true,
      choose_popup: false
    })
  },
  time_btn(){
    this.setData({
      mask: false,
      success_popup: false,
      time_popup: false,
      choose_popup: false
    })
  },
  change_time(){
    this.setData({
      mask: true,
      time_popup: true,
    })
  },
  // 选择药品等
  item_btn(e){
    this.setData({
      classify: e.currentTarget.dataset.classify,  
    })
  },
  num_btn(e) {
    this.setData({
      num_nav: e.currentTarget.dataset.classify,  
    })
  },
  /*点击减号*/
  bindMinus: function () {
    var num = this.data.num;
    if (num > 1) {
      num--;
    }
    var minusStatus = num > 1 ? 'normal' : 'disable';
    this.setData({
      num: num,
      minusStatus: minusStatus
    })
  },
  /*点击加号*/
  bindPlus: function () {
    var num = this.data.num;
    num++;
    var minusStatus = num > 1 ? 'normal' : 'disable';
    this.setData({
      num: num,
      minusStatus: minusStatus
    })
  },
  /*输入框事件*/
  bindManual: function (e) {
    var num = e.detail.value;
    var minusStatus = num > 1 ? 'normal' : 'disable';
    this.setData({
      num: num,
      minusStatus: minusStatus
    })
  },
  bindPickerChange(e) {
    console.log(e)
    this.setData({
      data_time: e.currentTarget.dataset.value
    })
  },
  bindPickerChangetwo(e) {
    this.setData({
      indextwo: e.detail.value
    })
  },
  bindPickerChangethree(e) {
    this.setData({
      indexthree: e.detail.value
    })
  },
  cancle() {
    this.setData({
      mask: false,
      success_popup: false,
    })
  },
  go_search() {
    this.setData({
      mask: false,
      success_popup: false,

    })
    wx.navigateBack({
      delta: 1,
    })

    // wx.navigateTo({
    //   url: '/pages/clinic/search/search',
    // })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    // 根据页面传值判断是否显示底部按钮
    var styles  = options.style
    if(styles==0){
      this.setData({
        style:true,
        time_text:''
      })
    } else if (styles == 1) {
      this.setData({
        style: false,
        time_text: '完成时间'
      })
    } else if (styles == 2) {
      this.setData({
        style: false,
        time_text: '取消时间'
      })
    }
    this.setData({
      id:options.id
    })
    
  },
  getData(){
    app.config.ajax('POST', {
      token: app.globalData.user_token,
      subscribe_id: this.data.id
    }, 'hospital/index/subscribe_info', res => {
      this.setData({
        info:res.data.data
      })
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})