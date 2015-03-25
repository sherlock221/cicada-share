/**
 * Created by pdeng on 2015/3/23.
 */


var  UI = {

    head :  $("#head"),
    downBtn : $("#downBtn"),
    credit  : $("#credit"),
    phoneNum : $("#phoneNum")

}

//获取user
var  user  = Util.storage.getLgObj("user");

var  currentPlatform = Util.platform.checkMobile();
var  iosUrl = "https://itunes.apple.com/cn/app/id948591472?mt=8";
var  androidUrl  ="http://imzhiliao.com/zhiliao.apk";

var  params = Util.location.getParams();

$(function(){
    //加入
    UI.head.attr("src",user.userIcon);
    UI.phoneNum.html(params.phone);

    //下载按钮
    UI.downBtn.hammer({}).bind("tap", function () {
        if(currentPlatform.type == "other"){
            alert(currentPlatform.message);
        }
        else if(currentPlatform.type == "iOS"){
            window.location.href = iosUrl;
        }
        else if(currentPlatform.type == "Android"){
            window.location.href = androidUrl;
        }
    });



});





