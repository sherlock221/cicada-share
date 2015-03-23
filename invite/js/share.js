/**
 * Created by pdeng on 2015/3/23.
 */
$('#share').hammer({}).bind("tap", function () {

    console.log(32);


    if (typeof(WeixinApi) != "undefined") {
        //分享
        WeixinApi.ready(function (Api) {
            var host = window.location.protocol + "//" + window.location.host;
            // 微信分享的数据
            var wxData = {
                "imgUrl": host + '/Recruitment/imgs/logo-home.jpg',
                "link": host + '/Recruitment/index.html',
                "desc": "万万没想到,西安还有这样逼格的习悦！",
                "title": "万万没想到,西安还有这样逼格的习悦！"
            };

            // 分享的回调
            var wxCallbacks = {
                // 分享操作开始之前
                ready: function () {
                    MobileUI.sharLayer.hide();

                },
                // 分享被用户自动取消
                cancel: function (resp) {

                    // 你可以在你的页面上给用户一个小Tip，为什么要取消呢？
                },
                // 分享失败了
                fail: function (resp) {
                    alert("不要紧，可能是网络问题，一会儿再试试！");
                    // 分享失败了，是不是可以告诉用户：不要紧，可能是网络问题，一会儿再试试？
                },
                // 分享成功
                confirm: function (resp) {
                    alert("分享成功！");
                    console.log(resp);

                    // 分享成功了，我们是不是可以做一些分享统计呢？
                },
                // 整个分享过程结束
                all: function (resp) {
                    // 如果你做的是一个鼓励用户进行分享的产品，在这里是不是可以给用户一些反馈了？
                }
            };

            // 用户点开右上角popup菜单后，点击分享给好友，会执行下面这个代码
            Api.shareToFriend(wxData, wxCallbacks);

            // 点击分享到朋友圈，会执行下面这个代码
            Api.shareToTimeline(wxData, wxCallbacks);

            // 点击分享到腾讯微博，会执行下面这个代码
            Api.shareToWeibo(wxData, wxCallbacks);
        });
    }
});

