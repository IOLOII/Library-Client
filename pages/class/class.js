// pages/class/class.js
var app = getApp();
var mtabW;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    class_all: [],
   
    activeIndex: 0,
    slideOffset: 0,
  },
  tabClick: function(e) {
    var that = this;
    var idIndex = e.currentTarget.id;
    this.setData({
      activeIndex: idIndex,
    });
    console.log(e);
  },
  bindChange: function(e) { //swicper 的绑定事件
    var current = e.detail.current;
    this.setData({
      activeIndex: current,
    });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var that = this;
    wx.cloud.init()
    const db = wx.cloud.database()
    db.collection('library_classify').get({
      success(res) {
        // res.data 包含该记录的数据
        // console.log(res.data)
        var all = res.data;
       
        that.setData({
          class_all: all,
        });
        
      },
    
    })
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})