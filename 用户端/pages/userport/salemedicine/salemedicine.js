// pages/userport/salemedicine/salemedicine.js
const app=getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    mask:false,
    infoPopup:false,
    data_popup:false,
    show_choose:false,
    success:false,
    time: ['08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00'],
    ml: [],
    num: 1,
    minusStatus: 'disable',
    ml_num:0,
    dataIndex:0,
    timeIndex:0,
    price:0,
    params:null,
  },
  //选择星期
  selectData(e){
    this.setData({
      dataIndex:e.currentTarget.dataset.index
    })
  },
  //选择时间
  selectTime(e){
    this.setData({
      timeIndex: e.currentTarget.dataset.index
    })
  },
  // 确认预约
  submit(){
    var time = this.data.dataList[this.data.dataIndex].more +'-'+ this.data.time[this.data.timeIndex]
    time = time.replace(/-/g, ':').replace(' ', ':');
    time = time.split(':');
    var time1 = new Date(parseInt(time[0]), (parseInt(time[1]) - 1), parseInt(time[2]), parseInt(time[3]), parseInt(time[4]), 0);
    app.config.ajax('POST', {
      token: app.globalData.user_token,
      hospital_id: this.data.hosId,
      goods_id: this.data.goods_id,
      doctor_id:1,
      goods_metering_id: this.data.ml[this.data.ml_num].goods_metering_id,
      reservetime: time1.getTime(),
      goodsnum:this.data.num
    }, 'user/reserve/reserve', res => {
      console.log(res)
      this.setData({
        mask: true,
        success: true,
        infoPopup: false
      })
    })
    
  },
  GetDateStr(AddDayCount) {
    var dd = new Date();
    dd.setDate(dd.getDate() + AddDayCount);//获取AddDayCount天后的日期
    let y = dd.getFullYear();
    let m = dd.getMonth() + 1;//获取当前月份的日期
    let d = dd.getDate();
    let w = dd.getDay();
    let s = dd.getTime();
    let week = ['周日', '周一', '周二', '周三', '周四', '周五', '周六']
    return {
      mon: week[w],
      date: `${m}.${d}`,
      value: s,
      more: `${y}-${m < 10 ? '0' + m : m}-${d < 10 ? '0' + d : d}`
    }
  },
  //获取今天为起点得往后七天日期星期
  gitData() {
    let datalist = []
    for (let s = 0; s < 7; s++) {
      datalist.push(this.GetDateStr(s))
    }
    this.setData({
      dataList: datalist
    })
  },
  // 选择计量
  choose_ml(e){
    this.setData({
      ml_num:e.currentTarget.dataset.index
    })
    this.getPrice()
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
    this.getPrice()
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
    this.getPrice()
  },
  /*输入框事件*/
  bindManual: function (e) {
    var num = e.detail.value;
    var minusStatus = num > 1 ? 'normal' : 'disable';
    this.setData({
      num: num,
      minusStatus: minusStatus
    })
    this.getPrice()
  },
  // 药品计量
  getmetering(){
    app.config.ajax('POST', {
      token: app.globalData.user_token,
      goods_id: this.data.goods_id
    }, 'user/goods/goods_metering', res => {
      this.setData({
        ml: res.data.data
      })
      this.getPrice()
    })
    
  },
  // 药品参数
  getParams() {
    app.config.ajax('POST', {
      token: app.globalData.user_token,
      goods_id: this.data.goods_id
    }, 'user/goods/goods_parameter', res => {
      this.setData({
        params: res.data.data
      })
    })
  },
  info_popup(){
    this.setData({
      mask:true,
      infoPopup:true,
      success:false
    })
  },
  // 时间参数
  show_data(){
    this.setData({
      mask:true,
      data_popup:true
    })
  },
  submit_data(){
    this.setData({
      mask: true,
      data_popup: true,
    })
  },
  // 选择规格
  show_choose(){
    this.setData({
      mask: true,
      show_choose: true
    })
  },
  // 关闭全部弹窗
  close(){
    this.setData({
      mask:false,
      info_popup:false,
      show_choose:false,
      success: false,
      data_popup:false
    })
    // wx.reLaunch({
    //   url: '/pages/userport/mydata/mydata',
    // })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      goods_id: options.medicine,
      hosId: options.hosId
    })
    this.gitData()
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    this.getmetering()
    this.getParams()
  },
  getPrice(){
    let s = Number(this.data.ml[this.data.ml_num].goods_metering_price)
    this.setData({
      price: s * this.data.num
    })
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