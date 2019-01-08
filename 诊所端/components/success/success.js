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
  },

  /**
   * 组件的方法列表
   */
  methods: {
    closeAll() {
      this.setData({
        wrap: false,
      })
      const myEventDetail = {
       
      } // detail对象，提供给事件监听函数
      const myEventOption = {} // 触发事件的选项
      this.triggerEvent('close', myEventDetail, myEventOption)
    },
  }
})
