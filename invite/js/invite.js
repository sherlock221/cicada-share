//http://172.16.140.28:7777/cicadaShare/invite/invite.html?targetUserType=0&uId=1002&systemTime=187123122&version=1.3.1.65
//路径   user/checkUserExist      参数  String  phone    返回值  boolean  isExist   true：已注册
//路径  relation/inviteRecord  参数   long userId,String phone,int type  0:邀请注册  1：邀请加班    返回值   int credit

var Ajax = {

    //检测用户是否存在
    checkUserExist: function (phone, callback) {
        $.ajax({
            type: "post",
            url: CONSTANT_ENV.local + '/user/checkUserExist',
            dataType: 'json',
            data: {
                phone: phone
            },
            success: callback,
            error: function () {
                alert("服务器内部错误！");
            }
        });
    },

    //同步拉取用户信息
    getUserInfo: function (userId, callback) {
        $.ajax({
            async: false,
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
    },

    //邀请用户
    inviteRecord: function (userId,phone,callback) {
        phone = parseInt(phone);
        $.ajax({
            type: "post",
            url: CONSTANT_ENV.local + '/relation/inviteRecord',
            dataType: 'json',
            data: {
                userId: userId,
                type : 0,
                phone : phone
            },
            success: callback,
            error: function () {
                alert("服务器内部错误！");
            }
        });
    }
};

var UI = {
    //同步加载邀请信息
    userIcon: $('.userIcon'),
    userName: $('.userName'),
    parentCount: $('.parentCount'),
    teacherCount: $('.teacherCount'),
    phone: $('.phone'),
    getValueBtn: $('.getValueBtn')
};


//获取param参数
var params = Util.location.getParams();
var userId = parseInt(params.uId);
var targetUserType = parseInt(params.targetUserType);

//同步拉取用户数据
Ajax.getUserInfo(userId, function (res) {
    if(res.rtnCode == "0000000"){
        UI.userIcon.attr('src', res.bizData.userIcon);
        UI.userName.html(res.bizData.userName);
        UI.parentCount.html(res.bizData.parentCount);
        UI.teacherCount.html(res.bizData.teacherCount);

        //存入storage
        Util.storage.setLgObj("user",res.bizData);
    }

});


$(function () {

    //按钮跳转
    UI.getValueBtn.hammer({}).bind("tap",function () {
        var phone = UI.phone.val();
        var re = /^1\d{10}$/;
        if (!re.test(phone)) {
            alert('请输入正确的电话号码');
        } else {

            Ajax.checkUserExist(phone,function (res) {
                if (res.rtnCode == '0000000') {
                    if (res.bizData.isExist) {
                        //已注册
                        console.log('ok,已注册');
                        window.location.href = './share.html';
                    } else {

                        //未注册
                        console.log('error,未注册');

                        //邀请
                        Ajax.inviteRecord(userId,UI.phone.val(),function(res){
                            if (res.rtnCode == '0000000') {
                                window.location.href = './download.html';
                            }
                            else{
                                alert(res.msg);
                            }
                        });

                    }
                } else {
                    console.log(res.msg)
                }
            });

        }



    });
});

