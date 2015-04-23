function getSignature (){
    //注册服务
    $.post("http://imzhiliao.com:3000/signature",{
        url : location.href.split('#')[0],
        //c_no : "test-abjia"
        c_no : "cicada"
    },function(res){
        //微信错误
        if(res.errcode){
            alert(res.errcode);
        }
        else{
            wx.config({
                debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
                appId: res.appid, // 必填，公众号的唯一标识
                timestamp: res.timestamp, // 必填，生成签名的时间戳
                nonceStr: res.nonceStr, // 必填，生成签名的随机串
                signature: res.signature,// 必填，签名，见附录1
                jsApiList: [
                    'checkJsApi',
                    'onMenuShareTimeline',
                    'onMenuShareAppMessage',
                    'onMenuShareQQ',
                    'onMenuShareWeibo',
                    'hideMenuItems',
                    'showMenuItems',
                    'hideAllNonBaseMenuItem',
                    'showAllNonBaseMenuItem'
                ] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
            });
            wx.ready(function () {
                var link = localStorage.getItem("shareUrl") || window.location.href;
                var shareData = {
                    "desc": "知了，最懂你的教育社交产品。老师家长都在用哦~",
                    "title": "我正在使用“知了”，邀请你一起加入知了大家庭！",
                    link: link,
                    imgUrl: 'http://imzhiliao.com/cicadaShare/share/images/cicada-logo.png'
                };
                wx.onMenuShareAppMessage(shareData);
                wx.onMenuShareTimeline(shareData);
                wx.onMenuShareQQ(shareData);
                wx.onMenuShareWeibo(shareData);
            });
            wx.error(function (res) {
                alert(res.errMsg);
            });
        }
    })


}


//授权
getSignature();