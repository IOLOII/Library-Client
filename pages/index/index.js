Page({

  data: {
    index_search_value: '',
    place_value: '请输入需要查寻的书籍',
    icon_size:0,
    swip_img_w:100,
    swip_img_h:100,
    // icon_size_top:0,
    imgsrc: [
      "/images/img/service_test_1_00.png",
      "/images/img/service_test_1_00.png",
      "/images/img/service_test_1_00.png",
      "/images/img/service_test_1_00.png",
    ],
    interval: "1800000",
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
      class: '学习资源库',
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
      class: '更多test',
      img_src: ''
    }],

    noticeItem: [{
      notice: '图书馆：专业馆员年度考核评议圆满收官',
      data_time: "2019-01 -09",
    }, {
      notice: '关于图书馆寒假借还书的温馨提示',
      data_time: "2018-12-28",
    }, {
      notice: '关于图书馆元旦放假通知',
      data_time: "2018-12-27",
    }, {
      notice: '图书馆：开展“三校联盟”读协交流会',
      data_time: "2018-12-26",
    }, {
      notice: '图书馆：热情融入省高职高专信息素养赛',
      data_time: "2018-12-26",
    }, {
      notice: '郑俊雅鼓励师弟师妹们多读书读好书',
      data_time: "2018-12-24",
    }, {
      notice: '图 书 馆：提供教学工具 拓展教研方式',
      data_time: "2018-12-24",
      }, {
      notice: '我校图书馆顺利举办《改变，从阅读开始》主题讲座',
      data_time: "2018-11-23",
    }, {
      notice: '关于校运动会期间图书馆闭馆的通知',
      data_time: "2018-11-14",
      }, {
      notice: '多措并举完成新生入馆教育',
      data_time: "2018-10-29",
      }
    ]
  },
  bindInput: function (e) {
    //console.log(e.detail.value) //√
    this.setData({
      index_search_value: e.detail.value, //√
      place_value: this.data.index_search_value //√
    })
  },
  onLoad: function (options) {
    var _this = this;
    wx.getSystemInfo({
      success: function (res) {
        _this.setData({
          screenHeight: res.windowHeight,
          screenWidth: res.windowWidth,
          icon_size: res.windowHeight*0.04,
          // icon_size_top: (60 - res.windowHeight)/2,
        });
      }
    });
  },
  getData: function () {
    var that = this;


    /*我改的注释我知道怎样还原-yuey*/
    // wx.request({
    //   url: 'https://www.easy-mock.com/mock/5bcf443e5d383279bf01b332/example/mock',
    //   data: {},
    //   method: 'GET',                 // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
    //                                 // header: {}, // 设置请求的 header
    //   success: function (res) {
    //     console.log(res.data.data.titleimg1)
    //                                 // console.log(res.data.data.projects[0].object)
    //     const imgsrc = res.data.data.titleimg1;
    //     that.setData({
    //       imgsrc: imgsrc

    //     })
    //   },
    //   fail: function () {
    //                                   // fail
    //   },
    //   complete: function () {
    //                                   // complete
    //   }
    // })
  },
  navigator: function (e) {
    var that = this;
    console.log(e.currentTarget.dataset.index)
    var value = e.currentTarget.dataset.index
    console.log(value);
    wx.navigateTo({
      //url: 'link?value=' + value + ''
      url: 'nav/10_link/link?value=' + value + ''
    })
  },
  navigator2: function (e) {
    var that = this;
    console.log(e.currentTarget.dataset.index)
    var value = e.currentTarget.dataset.index + 200
    console.log(value);
    wx.navigateTo({
      //url: 'link?value=' + value + ''
      url: 'nav/10_link/link?value=' + value + ''
    })
  },

  navigator3: function (e) {
    var that = this;
    console.log(e.currentTarget.dataset.index)
    var value = e.currentTarget.dataset.index + 300
    console.log(value);
    wx.navigateTo({
      //url: 'link?value=' + value + ''
      url: 'nav/10_link/link?value=' + value + ''
    })
  },
})