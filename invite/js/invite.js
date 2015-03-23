//?targetUserType=0&uId=1002&systemTime=187123122&version=1.3.1.65
$(function () {



    var invite_url = Util.location.getParams();
    var userType = invite_url.targetUserType;
    var uId = invite_url.uId;
    //
    //var plat = Util.platform.sharePgaeByUserId();
    //if (plat == 'ios') {
    //    console.log("ios", test);
    //    window.location.href = test;
    //} else {
    //    console.log("android", temp);
    //    window.cicada.sharePageByUserId(url, temp);
    //}
    $('.getValue').hammer({}).bind("tap", function(){
        var plat = Util.platform.sharePgaeByUserId();


        console.log(userType,uId);
        console.log(window.location.href);

    });


    //var getValueBtn = new Hammer(document.getElementById("test"));
    //    getValueBtn.on('tap',function (ev) {
    //        console.log(ev);
    //});


    //submitShareData(userType, uId, function (res) {
    //
    //});
    //function submitShareData(userType, uId, callback) {
    //    jQuery.support.cors = true;
    //    $.ajax({
    //        async: false,
    //        type: "post",
    //        url: '',
    //        dataType: 'json',
    //        data: {
    //            "targetUserType": userType,
    //            "uId": uId
    //        },
    //        crossDomain: true,
    //        success: callback
    //    });
    //    return result;
    //}

});