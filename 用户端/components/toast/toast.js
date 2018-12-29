// components/toast/toast.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    wrap:{
      type:Boolean,
      value:false,
    },
    title:{
      type:String,
      value:''
    },
    minTitle: {
      type: String,
      value: ''
    },
    notice: {
      type: String,
      value: ''
    },
  },

  /**
   * 组件的初始数据
   */
  data: {
    wrap:false,
    showToast:true,
    showdel:false
  },

  /**
   * 组件的方法列表
   */
  methods: {
    closeAll(){
      this.setData({
        wrap: false,
        showToast: false,
        showdel: false
      })
    },
    sure(){
      this.setData({
        wrap: true,
        showToast: false,
        showdel: true
      })
    }
  }
})
