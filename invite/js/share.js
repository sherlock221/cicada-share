/**
 * Created by pdeng on 2015/3/23.
 */


var  UI = {

    head :  $("#head"),
    openBtn : $("#openBtn"),
    shareBtn : $("#shareBtn")

}

//获取user
var  user  = Util.storage.getLgObj("user");

var  treasure =  "http://a.app.qq.com/o/simple.jsp?pkgname=com.cicada.cicada";

$(function(){

//    var img =  " ../share/images/default_image_head.png";
    var img =  "../share/images/cicada-logo.png";

//    if(user.userIcon){
//        img = user.userIcon;
//    }

    UI.head.attr('src',img);

    //分享button
    UI.shareBtn.hammer({}).bind("tap", function () {
        alert("请点击右上角按钮,进行分享!");
    });

    //打开知了
    UI.openBtn.hammer({}).bind("tap", function () {
        //Util.platform.openCiacada();
        window.location.href = treasure;
    });
});



