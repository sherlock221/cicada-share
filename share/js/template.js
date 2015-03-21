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

}