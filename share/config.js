/**
 * Created by pdeng on 2015/3/20.
 */

var CONSTANT_TASK = {
    cicada_url: {
        inverte_teacher: 'cicada://inverte/teacher',
        inverte_parent: 'cicada://inverte/parent',
        inverte_publish: 'cicada://page/publish'
    },
    cicada_share_url:{
        ios_share_url:'cicada://cicada/sharePageByUserId'
    }
};

//测试环境
var CONSTANT_ENV ={
        RES : "http://10.10.68.11",
        credit : "http://10.10.68.11:10000/credit",
        local:  "http://10.10.68.11:10000/uc"
//        local:  "http://172.16.130.218:8080/uc"
};


////正式
//var CONSTANT_ENV ={
//    RES : "http://imzhiliao.com",
//    credit : "http://imzhiliao.com:10000/credit",
//    local:  "http://imzhiliao.com:10000/uc"
////        local:  "http://172.16.130.218:8080/uc"
//};

//var CONSTANT_ENV ={
//        RES : "http://10.10.68.11",
//        credit : "http://10.10.68.11:8080/credit",
//        local:  "http://172.16.130.218:8080/uc"
//};

//资源地址
var CONSTANT_RES = {
    //邀请页面
    invite : CONSTANT_ENV.RES+"/cicadaShare/invite/invite.html"
}