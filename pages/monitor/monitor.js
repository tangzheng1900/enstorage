//monitor.js
const util = require('../../utils/util.js')

Page({
  data: {
    currentpage:'监控页面',
    entry: ''
  },
  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../detail/detail'
    })
  },
  onLoad: function () {
    wx.request({
      url: 'https://www.easy-mock.com/mock/5b1a11dc02cb10260775e2b4/v1/get_entry_by_rank', 
      method: 'GET',
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: res => {
        console.log(res.data);
        this.setData({
          entry: res.data,
          currentpage: '工程师大牛养成记'
        });
      }
    }) 
  }
})
