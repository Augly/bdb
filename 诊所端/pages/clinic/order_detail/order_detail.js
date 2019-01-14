// pages/clinic/order_detail/order_detail.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    time: ['08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00'],
    mask: false,
    imgUrl: app.ImageHost,
    array: ['2018-10-11 10:00', '2018-10-11 10:00', '2018-10-11 10:00'],
    index: 0,
    arraytwo: ['50ml', '100ml'],
    indextwo: 0,
    arraythree: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    indexthree: 0,
    style: false,
    time_text: '',
    btn_list: ['人血白蛋白', '免疫球蛋白', '人血白蛋白', '免疫球蛋白'],
    num_list: ['50ml', '100ml', '150ml', '200ml'],
    classify: '',
    num_nav: '',
    num: 1,
    success_popup: false,
    choose_popup: false,
    time_popup: false,
    data_time: '2018-09-06 10:00',
    delSuccess: false,
    dataIndex: 0,
    timeIndex: 0,
  },
  changesTime() {
    this.setData({
      mask: true,
      data_popup: true
    })
  },
  // 关闭全部弹窗
  close() {
    this.setData({
      mask: false,
      data_popup: false
    })
    // wx.reLaunch({
    //   url: '/pages/userport/mydata/mydata',
    // })
  },
  //选择星期
  selectData(e) {
    this.setData({
      dataIndex: e.currentTarget.dataset.index
    })
  },
  sclose() {
    wx.navigateBack({
      delta: 1,
    })
  },
  //选择时间
  selectTime(e) {
    this.setData({
      timeIndex: e.currentTarget.dataset.index
    })
  },
  // 确认预约
  submit() {
    var time = this.data.dataList[this.data.dataIndex].more + '-' + this.data.time[this.data.timeIndex]
    time = time.replace(/-/g, ':').replace(' ', ':');
    time = time.split(':');
    var time1 = new Date(parseInt(time[0]), (parseInt(time[1]) - 1), parseInt(time[2]), parseInt(time[3]), parseInt(time[4]), 0);
    app.config.ajax('POST', {
      token: app.globalData.user_token,
      subscribe_id: this.data.info.subscribe_id,
      reservetime: time1.getTime() / 1000,
    }, 'hospital/index/subscribe_update_reservetime', res => {
      let info = this.data.info
      info.subscribe_reservetime = app.config.timeForm(time1.getTime() / 1000).btTime
      this.setData({
        info: info
      })
      app.config.mytoast('修改预约时间成功')
      this.close()
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
  // 弹层
  submitAll() {
    this.setData({
      mask: true,
      choose_popup: true
    })
  },
  getAlist() {
    app.config.ajax('POST', {
      token: app.globalData.user_token,
    }, 'hospital/index/goods_list', res => {
      this.setData({
        btn_list: res.data.data
      })
    })
  },
  getBlist() {
    app.config.ajax('POST', {
      token: app.globalData.user_token,
      goods_id: this.data.goods_id
    }, 'hospital/index/goods_metering_list', res => {
      this.setData({
        num_list: res.data.data
      })
    })
  },
  choose_cancle() {
    this.setData({
      mask: false,
      choose_popup: false,
      success_popup: false,
    })
  },
  submit_date() {
    var time = this.data.dataList[this.data.dataIndex].more + '-' + this.data.time[this.data.timeIndex]
    time = time.replace(/-/g, ':').replace(' ', ':');
    time = time.split(':');
    var time1 = new Date(parseInt(time[0]), (parseInt(time[1]) - 1), parseInt(time[2]), parseInt(time[3]), parseInt(time[4]), 0);
    app.config.ajax('POST', {
      token: app.globalData.user_token,
      subscribe_id: this.data.info.subscribe_id,
      goods_id: this.data.goods_id,
      goods_metering_id: this.data.goods_metering_id,
      reservetime: time1.getTime() / 1000,
      goods_num: this.data.num
    }, 'hospital/index/subscribe_update', res => {
      // this.setData({
      //   mask: false,
      //   success_popup: false,
      // })

      this.setData({
        mask: false,
        delSuccess: true,
        choose_popup: false
      })

    })

  },
  time_btn() {
    this.setData({
      mask: false,
      success_popup: false,
      time_popup: false,
      choose_popup: false
    })
  },
  change_time() {
    this.setData({
      mask: true,
      time_popup: true,
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
  // 选择药品等
  item_btn(e) {
    this.setData({
      classify: e.currentTarget.dataset.classify,
      goods_id: this.data.btn_list[e.currentTarget.dataset.classify].goods_id
    })
    this.getBlist()
  },
  num_btn(e) {
    this.setData({
      num_nav: e.currentTarget.dataset.classify,
      goods_metering_id: this.data.num_list[e.currentTarget.dataset.classify].goods_metering_id
    })
  },
  go_search() {
    var time = this.data.dataList[this.data.dataIndex].more + '-' + this.data.time[this.data.timeIndex]
    time = time.replace(/-/g, ':').replace(' ', ':');
    time = time.split(':');
    var time1 = new Date(parseInt(time[0]), (parseInt(time[1]) - 1), parseInt(time[2]), parseInt(time[3]), parseInt(time[4]), 0);
    app.config.ajax('POST', {
      token: app.globalData.user_token,
      subscribe_id: this.data.info.subscribe_id,
      goods_id: this.data.goods_id,
      goods_metering_id: this.data.goods_metering_id,
      reservetime: time1.getTime(),
      goodsnum: this.data.num
    }, 'hospital/index/subscribe_update', res => {
      this.setData({
        mask: false,
        success_popup: false,
      })
      wx.navigateBack({
        delta: 1,
      })
    })


    // wx.navigateTo({
    //   url: '/pages/clinic/search/search',
    // })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 根据页面传值判断是否显示底部按钮
    var styles = options.style
    if (styles == 0) {
      this.setData({
        style: true,
        time_text: ''
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
    this.gitData()
    this.setData({
      id: options.id
    })
    this.getAlist()

    this.getData()
  },
  getData() {
    app.config.ajax('POST', {
      token: app.globalData.user_token,
      subscribe_id: this.data.id
    }, 'hospital/index/subscribe_info', res => {
      res.data.data.subscribe_canceltime = app.config.timeForm(res.data.data.subscribe_canceltime).btTime
      res.data.data.subscribe_createtime = app.config.timeForm(res.data.data.subscribe_createtime).btTime
      res.data.data.subscribe_reservetime = app.config.timeForm(res.data.data.subscribe_reservetime).btTime
      res.data.data.subscribe_paytime = app.config.timeForm(res.data.data.subscribe_paytime).btTime
      this.setData({
        info: res.data.data,
        goods_id: res.data.data.goods_id,
        goods_metering_id: res.data.data.goods_metering_id
      })
      this.getBlist()
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