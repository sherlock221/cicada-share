var Util = {


    location: {

        //解析地址
        parseParams: function (paramsUrl) {

            var paramsArray = paramsUrl.split("&");
            var newParams = [];
            for (var i = 0; i < paramsArray.length; i++) {
                var objs = paramsArray[i].split("=");
                var tt = '{"' + objs[0] + '": "' + objs[1] + '" }';
                var newObj = JSON.parse(tt);
                newParams.push(newObj);
            }
            return newParams;
        },

        //获得地址
        getParam: function (key, array) {
            for (var i = 0; i < array.length; i++) {
                var objs = array[i];
                if (objs[key]) {
                    return objs[key];
                    //console.log(objs[key]);
                }

            }
            return "";
        }
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