Page({

  data: {
    index_search_value: '',
    place_value: '请输入需要查寻的书籍',
    imgsrc: [],
    interval: "1500",
    windowWidth: '',
    windowHeight: '',
    classItem: [{
      class: '新东方英语',
      img_src: '/images/icon_9/xdf.jpg'
    }, {
      class: '新语听书',
        img_src: '/images/icon_9/xyts.jpg'
    }, {
      class: '微阅读',
        img_src: '/images/icon_9/wyd.jpg'
    }, {
      class: '考试学习资源库',
        img_src: '/images/icon_9/ksxxzyk.jpg'
    }, {
      class: 'QQ阅读',
        img_src: '/images/icon_9/qqyd.jpg'
    }, {
      class: '博看微书屋',
        img_src: '/images/icon_9/bkwsw.jpg'
    }, {
      class: '信息视窗',
        img_src: '/images/icon_9/xxsc.jpg'
    }, {
    //   class: '中邮期刊',
    //     img_src: '/images/icon_9/zyqk.jpg'
    // }, {
    //   class: '阅读推广平台',
    //     img_src: '/images/icon_9/ydtgpt.jpg'
    // }, {
      class: '更多',
      img_src: ''
    }]
  },
  bindInput: function(e) {
    //console.log(e.detail.value) //√
    this.setData({
      index_search_value: e.detail.value, //√
      place_value: this.data.index_search_value //√
    })
  },
  onLoad: function(options) {
    this.getData();
  },
  getData: function() {
    var that = this;
    wx.request({
      url: 'https://www.easy-mock.com/mock/5bcf443e5d383279bf01b332/example/mock',
      data: {},
      method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      // header: {}, // 设置请求的 header
      success: function(res) {
        console.log(res.data.data.titleimg1)
        // console.log(res.data.data.projects[0].object)
        const imgsrc = res.data.data.titleimg1;
        that.setData({
          imgsrc: imgsrc

        })
      },
      fail: function() {
        // fail
      },
      complete: function() {
        // complete
      }
    })
  },
  navigator: function(e) {
    var that = this;
    console.log(e.currentTarget.dataset.index)
    var value = e.currentTarget.dataset.index
    console.log(value);
    wx.navigateTo({
      //url: 'link?value=' + value + ''
      url: 'nav/10_link/link?value=' + value + ''
    })
  },
})