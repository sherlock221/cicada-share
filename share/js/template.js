var TemplateAjax = {
        getShareData : function(){
            var result  ="";
            $.ajax({
                type: "get",
                url: "../share/json/share.json",
                async : false,
                success : function(res){
                    result  = res;
                }
            });
            return result;
        }
};


var TemplateEvent = {

    init : function(){
        //wavesBtn初始化
        if(window.Waves){
            Waves.displayEffect();
        }

        TemplateEvent.response();
        TemplateEvent.weixinShare();
    },

    response : function(){
        (function (doc, win) {
            var docEl = doc.documentElement,
                resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
                recalc = function () {
                    var clientWidth = docEl.clientWidth;
                    if (!clientWidth) return;
                    docEl.style.fontSize = 20 * (clientWidth / 320) + 'px';
                };
            if (!doc.addEventListener) return;
            win.addEventListener(resizeEvt, recalc, false);
            doc.addEventListener('DOMContentLoaded', recalc, false);
        })(document, window)
    },

    weixinShare : function(){

    }
};




$(function(){
    TemplateEvent.init();
});