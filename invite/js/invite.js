//http://172.16.140.28:7777/cicadaShare/invite/invite.html?targetUserType=0&uId=1002&systemTime=187123122&version=1.3.1.65
//路径   user/checkUserExist      参数  String  phone    返回值  boolean  isExist   true：已注册
//路径  relation/inviteRecord  参数   long userId,String phone,int type  0:邀请注册  1：邀请加班    返回值   int credit

var Ajax = {
    checkMobile: function (params, callback) {
        var re = /^1\d{10}$/;
        if (!re.test($('.phone').val())) {
            alert('请输入正确的电话号码');
        } else {
            $.ajax({
                type: "post",
                url: CONSTANT_ENV.local + '/user/checkUserExist' + '?phone=' + $('.phone').val(),
                dataType: 'json',
                data: {
                    "isExit": params
                },
                success: callback,
                error: function () {
                    alert("服务器内部错误！")
                }
            });
        }
    },
    getUserInfor: function (userId, callback) {
        $.ajax({
            async: 'false',
            type: "post",
            url: CONSTANT_ENV.local + '/relation/queryUserInfoAndUserCount',
            dataType: 'json',
            data: {
                userId: userId
            },
            success: callback,
            error: function () {
                alert("服务器内部错误！");
            }
        })
    }
};

var UI = {
    //同步加载邀请信息
    userIcon: $('.userIcon'),
    userName: $('.userName'),
    parentCount: $('.parentCount'),
    teacherCount: $('.teacherCount'),


    phone: $('.phone').val(),
    getValueBtn: $('.getValueBtn')
};


$(function () {
    //按钮跳转
    UI.getValueBtn.click(function () {
        var params = UI.phone;
        Ajax.checkMobile(params, function (res) {
            var url = window.location.href;
            if (res.rtnCode == '0000000') {
                if (res.bizData.isExist) {
                    //已注册
                    console.log('ok,已注册');
                    window.location.href = 'http://172.16.140.28:7777/cicadaShare/invite/taskDownload.html';
                } else {
                    //未注册
                    console.log('error,未注册');
                    window.location.href = 'http://172.16.140.28:7777/cicadaShare/invite/shareDownload.html';
                    console.log(window.location.href + 2)
                }
            } else {
                console.log(res.msg)
            }
        });
    });

    //获取Uid
    var Id = Util.location.getParams();
    //var userId = parseInt(Id.uId);
    var userId = 27902;
    Ajax.getUserInfor(userId, function (res) {
        UI.userIcon.attr('src', res.bizData.userIcon);
        UI.userName.html(res.bizData.userName);
        UI.parentCount.html(res.bizData.parentCount);
        UI.teacherCount.html(res.bizData.teacherCount);
    });


//微信分享
    if(typeof(WeixinApi)!="undefined"){

        //分享
        WeixinApi.ready(function(Api){
            var host  = window.location.protocol+"//"+window.location.host;
            // 微信分享的数据
            var wxData = {
                "imgUrl":'',
                "link":'',
                "desc":"",
                "title":""
            };

            // 分享的回调
            var wxCallbacks = {
                // 分享操作开始之前
                ready:function () {
                    MobileUI.sharLayer.hide();

                },
                // 分享被用户自动取消
                cancel:function (resp) {

                    // 你可以在你的页面上给用户一个小Tip，为什么要取消呢？
                },
                // 分享失败了
                fail:function (resp) {
                    alert("不要紧，可能是网络问题，一会儿再试试！");
                    // 分享失败了，是不是可以告诉用户：不要紧，可能是网络问题，一会儿再试试？
                },
                // 分享成功
                confirm:function (resp) {
                    alert("分享成功！");
                    console.log(resp);

                    // 分享成功了，我们是不是可以做一些分享统计呢？
                },
                // 整个分享过程结束
                all:function (resp) {
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


    };

});

