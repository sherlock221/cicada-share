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
});

$('#share').hammer({}).bind("tap", function () {

    console.log(32);

});

