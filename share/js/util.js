var Util = {

    platform : {


        sharePgaeByUserId : function(type,url,sjson){

            var temp =  JSON.stringify(sjson);

            var params = [
                {
                    key : "url",
                    value : url
                },
                {
                    key : "shareJson",
                    value : temp
                }
            ];

            if(type == "iOS"){
                var params = Util.location.encodeParam(params);
                console.log("ios", "cicada//cicada/sharePageByUserId"+params);
                window.location.href = "cicada//cicada/sharePageByUserId"+params;
            }
            //android
            else{
                console.log("android", temp);
                window.cicada.sharePgaeByUserId(url,shareJson);

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
                for(var i = 0; i < strs.length; i ++) {
                    theRequest[strs[i].split("=")[0]]=unescape(strs[i].split("=")[1]);
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
            var obj = $window.sessionStorage.getItem(key);
            return JSON.parse(obj);
        },

        setSgObj: function (key, value) {
            return $window.sessionStorage.setItem(key, JSON.stringify(value));
        },

        getSg: function (key) {
            return $window.sessionStorage.getItem(key);
        },

        setSg: function (key, value) {
            $window.sessionStorage.setItem(key, value);
        },
        remove: function (key) {
            $window.sessionStorage.removeItem(key);
        },

        removeSg: function (key) {
            $window.sessionStorage.removeItem(key);
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
            var obj = $window.localStorage.getItem(key);
            return JSON.parse(obj);
        },
        setLgObj: function (key, value) {
            return $window.localStorage.setItem(key, JSON.stringify(value));
        },

        getLg: function (key) {
            return $window.localStorage.getItem(key);
        },

        setLg: function (key, value) {
            $window.localStorage.setItem(key, value);
        },
        removeLg: function (key) {
            $window.localStorage.removeItem(key);
        }
    }


};