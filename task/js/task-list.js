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


var  h5_share = "http://www.baidu.com";
//处理button
var  goPage = function(url){
     console.log(url);
    switch (url){
        case CONSTANT_TASK.cicada_url.inverte_publish  :
            Util.platform.goPage(window.clientType,"publish");
            break;
        case CONSTANT_TASK.cicada_url.inverte_teacher  :
            Util.platform.sharePgaeByUserId(window.clientType,h5_share,window.shareJson);

            break;
        case CONSTANT_TASK.cicada_url.inverte_parent  :
            Util.platform.sharePgaeByUserId(window.clientType,h5_share,window.shareJson);
            break;
    }
};
var goBack =function(){
    Util.platform.back(window.clientType);
};


$(function () {
    //获得share
    window.shareJson = TemplateAjax.getShareData();
    //解析地址
    var params= Util.location.getParams();
    var token = params['token'];
    window.clientType  = params['clientType'];
    if(!token){
        alert('token不能为空！');
        return;
    }
    var queryTime = 0;
    //获取任务列表
    Ajax.getTaskList(token, queryTime, function (res) {
        if (res.rtnCode == '0000000') {
            var html = template('task-tem', res);
            UI.content.html(html);
        } else {
            alert(res.msg);
        }
    });



});

