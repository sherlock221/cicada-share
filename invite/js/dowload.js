/**
 * Created by pdeng on 2015/3/23.
 */


var  UI = {

    head :  $("#head"),
    downBtn : $("#downBtn"),
    credit  : $("#credit")

}

//获取user
var  user  = Util.storage.getLgObj("user");



$(function(){
    //加入
    UI.head.attr("src",user.userIcon);
    UI.credit.html(user.credit);
});



