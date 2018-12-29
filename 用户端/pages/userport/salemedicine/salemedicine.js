// pages/userport/salemedicine/salemedicine.js
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
    time: ['09:00', '09:00', '09:00', '09:00', '09:00', '09:00'],
    ml: ['50ml', '50ml', '50ml'],
    num: 1,
    minusStatus: 'disable',
    ml_num:0,
    dataIndex:0,
    timeIndex:0
  },
  selectData(e){
    console.log(e)
    this.setData({
      dataIndex:e.currentTarget.dataset.index
    })
  },
  selectTime(e){
    this.setData({
      timeIndex: e.currentTarget.dataset.index
    })
  },
  // 确认预约
  submit(){
    this.setData({
      mask:true,
      success: true,
      infoPopup: false
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
      more: `${y}-${m}-${d}`
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
      ml_num:e.currentTarget.dataset.ml
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
  // 药品参数
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
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.gitData()
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