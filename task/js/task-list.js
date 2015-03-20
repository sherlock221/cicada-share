var Ajax = {
getTaskList: function (token, queryTime, callback) {
    jQuery.support.cors = true;
    $.ajax({
        type: "post",
        url: CONTSTANT_URL.credit + '/task/getTaskList',
        dataType: 'json',
        data: {
            "token": token,
            "queryTime": queryTime
        },
        crossDomain: true,
        success: callback
    });
}
};


var UI = {
    content: $("#content")
};

var goPage = function () {

};

$(function () {
    //解析地址
    var params= Util.location.parseParams(window.location.href);
    var token = Util.location.getParam('token',params);
    if(!token){
        alert('token不能为空！');
        return;
    }

    var queryTime = 0;

    Ajax.getTaskList(token, queryTime, function (res) {
        if (res.rtnCode == '0000000') {
            var html = template('task-tem', res);
            UI.content.html(html);
        } else {
            alert(res.msg);
        }
    });


});

