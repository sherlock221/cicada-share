/**
 * Created by pdeng on 2015/3/23.
 */


var  UI = {

    head :  $("#head"),
    downBtn : $("#downBtn"),
    credit  : $("#credit"),
    phoneNum : $("#phoneNum")

}


var Ajax = {


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
    }

};




var  currentPlatform = Util.platform.checkMobile();

var  treasure =  "http://a.app.qq.com/o/simple.jsp?pkgname=com.cicada.cicada";

//var  iosUrl = "https://itunes.apple.com/cn/app/id948591472?mt=8";
//var  androidUrl  ="http://imzhiliao.com/zhiliao.apk";
var  params = Util.location.getParams();

if(!currentPlatform){
    alert("pc平台");
}

//获取param参数
var userId = parseInt(params.uId);

//同步拉取用户数据
Ajax.getUserInfo(userId, function (res) {
    if(res.rtnCode == "0000000"){

//        var img =  " ../share/images/default_image_head.png";
        var img =  "../share/images/cicada-logo.png";

//        if(res.bizData.userIcon){
//            img = res.bizData.userIcon;
//        }
        UI.head.attr('src',img);
        UI.phoneNum.html(params.phone);
    }
});




$(function(){

    //获取user
    var  user  = Util.storage.getLgObj("user");

    //下载按钮
    UI.downBtn.hammer({}).bind("tap", function () {

//        if(currentPlatform.type == "other"){
//            alert(currentPlatform.message);
//        }
//        else if(currentPlatform.type == "iOS"){
//            window.location.href = iosUrl;
//        }
//        else if(currentPlatform.type == "Android"){
//            window.location.href = androidUrl;
//        }

        window.location.href = treasure;
    });



});





