var Util = {


    platform: {

        openCiacada : function(){
//            var isrefresh =  Util.location.getParams().refresh;
//            if(isrefresh == 1) {
//                return
//            }
            window.location.href = 'cicada://public/page/index';

            window.setTimeout(function () {
                // 附加一个特殊参数，用来标识这次刷新不要再调用cicada://
           //     window.location.href += '?refresh=1'
                alert("超时");
            }, 500);

        },

        checkMobile : function () {
            var ua = window.navigator.userAgent.toLowerCase();
            if( navigator.userAgent.match(/iPhone|iPad|iPod/i)) {
                return {"type":"iOS"};
            }
            else if (ua.indexOf("qq/") > -1) {
                return {"message": "qq下载请点击右上角在浏览器中打开", "type": "other"}
            }
            else if (ua.match(/MicroMessenger/i) == 'micromessenger') {
                return {"message": "微信下载请点击右上角在浏览器中打开", "type": "other"}
            }
            else if(navigator.userAgent.match(/Android/i)) {
                return {"type":"Android"};
            }

        },

        sharePgaeByUserId: function (type, url, sjson) {

            if (type == "iOS") {

                sjson.url = url;
                var temp = JSON.stringify(sjson);
                var  encodeJson = encodeURI(temp);
                console.log("ios", CONSTANT_TASK.cicada_share_url.ios_share_url +"?json="+encodeJson);
                window.location.href = CONSTANT_TASK.cicada_share_url.ios_share_url +"?json="+encodeJson;
            }
            //android
            else {
                var temp = JSON.stringify(sjson);
                console.log("android", temp);
                window.cicada.sharePageByUserId(url, temp);
            }
        },

        goPage : function(type,viewName){
            var params = [
                {
                    key: "viewName",
                    value: viewName
                }
            ];
            if (type == "iOS") {
                var params = Util.location.encodeParam(params);
                console.log("ios", "cicada://cicada/page/goPage" + params);
                window.location.href = "cicada://cicada/page/goPage" + params;
            }
            //android
            else {
                window.cicada.goPage(viewName);
            }

        },

        back : function(type){
            if(type == "iOS"){
                console.log("ios", "cicada://cicadaStore/back");
                window.location.href="cicada://cicadaStore/back";
            }
            else{
                window.cicadaStore.back();
            }
        }
    },


    location: {
        //获得地址
        getParams: function () {
            var url = location.search; //获取url中"?"符后的字串
            var theRequest = new Object();
            if (url.indexOf("?") != -1) {
                var str = url.substr(1);
                strs = str.split("&");
                for (var i = 0; i < strs.length; i++) {
                    theRequest[strs[i].split("=")[0]] = unescape(strs[i].split("=")[1]);
                }
            }
            return theRequest;
        },
        encodeParam: function (paramList) {
            var baseUrl = "";
            for (var i = 0; i < paramList.length; i++) {
                var value = paramList[i].value;
                if (i == 0) {
                    baseUrl += "?" + paramList[i].key + "=" + encodeURI(value);
                }
                else {
                    value = paramList[i].value;
                    baseUrl += "&" + paramList[i].key + "=" + encodeURI(value);
                }
            }
            return baseUrl;
        }
    },


    storage: {
        getSgObj: function (key) {
            var obj = window.sessionStorage.getItem(key);
            return JSON.parse(obj);
        },
        setSgObj: function (key, value) {
            return window.sessionStorage.setItem(key, JSON.stringify(value));
        },
        getSg: function (key) {
            return window.sessionStorage.getItem(key);
        },
        setSg: function (key, value) {
            window.sessionStorage.setItem(key, value);
        },
        remove: function (key) {
            window.sessionStorage.removeItem(key);
        },
        removeSg: function (key) {
            window.sessionStorage.removeItem(key);
        },
        loading: function (toggle) {
            if (toggle) {
                $ionicLoading.show();
            }
            else {
                $ionicLoading.hide();
            }
        },
        getLgObj: function (key) {
            var obj = window.localStorage.getItem(key);
            return JSON.parse(obj);
        },
        setLgObj: function (key, value) {
            return window.localStorage.setItem(key, JSON.stringify(value));
        },
        getLg: function (key) {
            return window.localStorage.getItem(key);
        },
        setLg: function (key, value) {
            window.localStorage.setItem(key, value);
        },
        removeLg: function (key) {
            window.localStorage.removeItem(key);
        }
    }
};



