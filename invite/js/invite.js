//?targetUserType=0&uId=1002&systemTime=187123122&version=1.3.1.65
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
                //?targetUserType=0&uId=1002&systemTime=187123122&version=1.3.1.65
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
            async:'false',
            type: "post",
            url: CONSTANT_ENV.local + '/relation/queryUserInfoAndUserCount',
            dataType: 'json',
            data: {
                userId:userId
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
    getValueBtn: $('.getValueBtn'),
    errorTip: $('.error-tip')
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
                    window.location.href = 'http://localhost:7777/cicadaShare/invite/taskDownload.html';
                } else {
                    //未注册
                    console.log('error,未注册');
                    window.location.href = 'http://localhost:7777/cicadaShare/invite/shareDownload.html';
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
         var userId =27902;
    Ajax.getUserInfor(userId,function (res) {
        UI.userIcon.attr('src',res.bizData.userIcon);
        UI.userName.html(res.bizData.userName);
        UI.parentCount.html(res.bizData.parentCount);
        UI.teacherCount.html(res.bizData.teacherCount);
    });




















//微信分享
    function WeiXinShareBtn() {
        if (typeof WeixinJSBridge == "undefined") {
            alert("请先通过微信搜索 ****添加****为好友，通过微信分享文章");
        } else {
            WeixinJSBridge.invoke('shareTimeline', {
                "title": "文章标题",
                "link": "地址链接",
                "desc": "文章描述",
                "img-url": "图片地址"
            });
        }
    }


});

