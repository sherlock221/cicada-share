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

            xhrFields: {
                withCredentials: true
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
    var token = '7079090b3146ecf3d0cb1ba1c0f87baf';
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

