// components/toast/toast.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    wrap: {
      type: Boolean,
      value: false,
    },
    title: {
      type: String,
      value: ''
    },
    minTitle: {
      type: String,
      value: ''
    },
    sureTitle: {
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
    wrap: false,
    showToast: true,
    showdel: false
  },

  /**
   * 组件的方法列表
   */
  methods: {
    closeAll() {
      this.setData({
        wrap: false,
      })
    },
    sure() {
      const myEventDetail = {
        id: '2'
      } // detail对象，提供给事件监听函数
      const myEventOption = {} // 触发事件的选项
      this.triggerEvent('sure', myEventDetail, myEventOption)
    },
    cendel(){
      this.setData({
        wrap: false,
      })
    }
  }
})
