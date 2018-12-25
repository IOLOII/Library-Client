// pages/class/class.js
var app = getApp();
var mtabW;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    class_title: [1, 2, 3, 4, 5, 6],
    activeIndex: 0,
    slideOffset: 0,
  },
  tabClick: function(e) {
    var that = this;
    var idIndex = e.currentTarget.id;
    var offsetW = e.currentTarget.offsetLeft; //2种方法获取距离文档左边有多少距离
    this.setData({
      activeIndex: idIndex,
      slideOffset: offsetW
    });
    console.log(e);
    console.log(e._relatedInfo.anchorTargetText)
  },
  bindChange: function(e) { //swicper 的绑定事件
    var current = e.detail.current;
    if ((current + 1) % 4 == 0) {
      console.log("fi")
    }
    var offsetW = current * mtabW; //2种方法获取距离文档左边有多少距离
    this.setData({
      activeIndex: current,
      slideOffset: offsetW
    });

  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.data.class_titlel;
    var that = this;
    wx.getSystemInfo({
      success: function(res) {
        mtabW = res.windowWidth / 4; //设置tab的宽度
        that.setData({
          tabW: mtabW
        })
      }
    });
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