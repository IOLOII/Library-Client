// pages/my/my.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userdatas: [
      { text: '姓名', url: 'url', tips: 'tips' },
      { text: '学号', url: '', icon: '', tips: '' },
      { text: '学院', url: '', icon: '', tips: '' },
      { text: '班级', url: '', icon: '', tips: '' },
      
    ],
  userdata:[
    { text: '收藏', url: '', icon: '', tips: '' },
    { text: '已借阅', url: '', icon: '', tips: '' },
    { text: '借阅历史', url: '', icon: '', tips: '' },
  ]
  },
bindGetUserInfo:function(e){
  console.log(e.detail.userInfo)
},

  toLogin:function(){
    wx.redirectTo({
      url: '/pages/login/login',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})