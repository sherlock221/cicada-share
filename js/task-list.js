
var Ajax = {
    getTaskList: function (token, queryTime, callback) {
        $.ajax({
            type: "get",
            url: "../data/credit/task/getTaskList.json",
            dataType: 'json',
            data: {
                "style": "",
                "data": {
                    "token": token,
                    "queryTime": queryTime
                },
                "clientInfo": {}
            },
            success: callback
        });
    }
};



var UI = {
    content:$("#content")
};

var goPage = function(){

};


$(function () {
    var token;
    var queryTime;
    Ajax.getTaskList(token, queryTime, function (res) {
        if (res.rtnCode == '0000000') {
            var html = template('task-tem',res);
            UI.content.html(html);
        } else {
            alert(res.msg);
        }
    });



});

