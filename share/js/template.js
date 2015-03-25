var TemplateAjax = {
        getShareData : function(){
            var result  ="";
            $.ajax({
                type: "get",
                url: "../share/json/share.json",
                async : false,
                success : function(res){
                    result  = res;
                }
            });
            return result;
        }
};


var TemplateEvent = {

    init : function(){
        //wavesBtn初始化
        if(window.Waves){
            Waves.displayEffect();
        }

        TemplateEvent.response();
        TemplateEvent.weixinShare();
    },

    response : function(){
        (function (doc, win) {
            var docEl = doc.documentElement,
                resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
                recalc = function () {
                    var clientWidth = docEl.clientWidth;
                    if (!clientWidth) return;
                    docEl.style.fontSize = 20 * (clientWidth / 320) + 'px';
                };
            if (!doc.addEventListener) return;
            win.addEventListener(resizeEvt, recalc, false);
            doc.addEventListener('DOMContentLoaded', recalc, false);
        })(document, window)
    },

    weixinShare : function(){
        var host = window.location.protocol + "//" + window.location.host;
        if (typeof(WeixinApi) != "undefined") {
            //分享
            WeixinApi.ready(function (Api) {
                // 微信分享的数据
                var wxData = {
                    "imgUrl": host + '/cicadaShare/share/images/cicada-logo.png',
                    "link": Util.storage.getLgObj("shareUrl"),
                    "desc": "知了，最懂你的教育社交产品。老师家长都在用哦~",
                    "title": "我正在使用“知了”，邀请你一起加入知了大家庭！"
                };

                //分享朋友圈
                var wxFriendData = {
                    "imgUrl": host + '',
                    "link": Util.storage.getLgObj("shareUrl"),
                    "desc": "别再让你的朋友圈成为班级圈，快来尝试新的沟通方式吧！"
                }


                // 分享的回调
                var wxCallbacks = {
                    // 分享操作开始之前
                    ready: function () {
//                        MobileUI.sharLayer.hide();
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
                Api.shareToTimeline(wxFriendData, wxCallbacks);
                // 点击分享到腾讯微博，会执行下面这个代码
                Api.shareToWeibo(wxData, wxCallbacks);
            });
        }
    }
};


$(function(){
    TemplateEvent.init();
});