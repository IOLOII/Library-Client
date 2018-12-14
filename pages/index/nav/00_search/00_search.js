var app = getApp();
var searchValue = ''
Page({
  data: {
    centent_Show: true,
    search_value: '',
  },
  onLoad: function(options) {
    console.log(options)
    this.setData({
      search_value: options.skey
    })
    console.log(this.data.search_value)  //√
  },
  // searchValueInput: function(e) {
  //   var value = e.detail.value;
  //   this.setData({
  //     searchValue: value,
  //   });
  //   if (!value && this.data.productData.length == 0) {
  //     this.setData({
  //       centent_Show: false,
  //     });
  //   }
  // },
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