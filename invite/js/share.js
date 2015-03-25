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

$(function(){
    //加入
    UI.head.attr("src",user.userIcon);

    //分享button
    UI.shareBtn.hammer({}).bind("tap", function () {
        alert("请点击右上角按钮,进行分享!");
    });

    //打开知了
    UI.openBtn.hammer({}).bind("tap", function () {
        Util.platform.openCiacada();
    });
});



