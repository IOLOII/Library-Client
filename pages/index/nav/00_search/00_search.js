var app = getApp();
var searchValue = ''
Page({
  data: {
    centent_Show: true,
    search_value: '',
    place_value:'',
  },
  onLoad: function(options) {
    var that = this;
    console.log(options)
    this.setData({
      search_value: options.skey,      
    })
    
    console.log(this.data.search_value)  //√
    if (options.skey.length>0){
      wx.request({
        url: 'http://192.168.238.90/NTRdrBookRetr.aspx?trType=name&strSortType=&strpageNum=10&strSort=asc',
        data: {
          strKeyValue: that.data.search_value
        },
        method: 'POST',
        success: function (e) {
          console.log(e.data)
          that.data.place_value = options.skey,
            console.log("1" + that.data.place_value),
            console.log("2" + options.skey)
          that.setData({
              place_value: options.skey
            })
        },
        fail: function () {

        },

      })
    }

  },
  searchValueInput: function(e) {
    console.log(e.detail.value)
      wx.request({
        url: 'http://192.168.238.90/NTRdrBookRetr.aspx?trType=name&strSortType=&strpageNum=10&strSort=asc',
        data: {
          strKeyValue: e.detail.value
        },
        method: 'POST',
        success: function (e) {
          console.log(e.data)          
        },
        fail: function () {

        },

      })
  },
  suo: function(e) {
    var id = e.currentTarget.dataset.id
    var program_id = app.program_id;
    var that = this;
    wx.request({
      url: 'http://192.168.238.90/NTRdrBookRetr.aspx?trType=name&strSortType=&strpageNum=10&strSort=asc',
      data: {
        strKeyValue: that.data.searchValue
      },
      method: 'POST',
      success: function(e) {
        console.log(e)
      },
      fail: function() {

      },

    })
  }
});