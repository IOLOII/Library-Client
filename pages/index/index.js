Page({

  data: {
    index_search_value: '',
    place_value:'请输入需要查寻的书籍'
  },
  bindInput: function(e) {
    //console.log(e.detail.value) //√
    this.setData({
      index_search_value: e.detail.value, //√
      place_value: this.data.index_search_value //√
    })
  },
  onLoad: function(options) {
    var that = this //js的作用域问题
    //获取轮播图
    wx.request({
      url: 'http://image.baidu.com/i?tn=resultjsonavstar&ie=utf-8&pn=0&rn=60',
      data: {
        word: "刘德华"
      },
      method: "get",
      success: function (e) {
        var data = e.data
        if (data.code == 200) {
          that.setData({
            img: data.data
          })
        }
        console.log(e)
      }
    })

    //console.log(options)
  },



})