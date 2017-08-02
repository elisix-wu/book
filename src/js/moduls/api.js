define(function(require){
    var $=require('jquery'),
    apiUrls=require('./url'),
    testMock=require('./test_mock');

    testMock.fire();

    function api(){

    }

    api.prototype.login=function(arg){
        var dtd=$.Deferred();
        $.post(apiUrls.login,arg,function(data){
            var result=JSON.parse(data);
            if(result.success){
                dtd.resolve(result);
            }
        });
        return dtd;
    }
    api.prototype.register=function(arg){
        var dtd=$.Deferred();
        $.post(apiUrls.register,arg,function(data){
            var result=JSON.parse(data);
            if(result.success){
                dtd.resolve(result);
            }
        })
        return dtd;
    }
    api.prototype.topics=function(arg){
        var dtd=$.Deferred();
        $.get(apiUrls.topics,arg,function(data){
            var result=JSON.parse(data);
            if(result.success){
                dtd.resolve(result);
            }
        })
        return dtd;
    }
    api.prototype.captions = function (arg) {
        var dtd = $.Deferred();
        $.get(apiUrls.captions, arg, function (data) {
            var result = JSON.parse(data);
            if (result.success) {
                dtd.resolve(result);
            }
        });
        return dtd;
    }
    api.prototype.tagname=function(arg){
        var dtd=$.Deferred();
        $.get(apiUrls.tagname,arg,function(data){
            var result=JSON.parse(data);
            if(result.success){
                dtd.resolve(result);
            }
        })
        return dtd;
    }

    api.prototype.authos = function (arg) {
        var dtd = $.Deferred();
        $.get(apiUrls.autho, arg, function (data) {
            var result = JSON.parse(data);
            if (result.success) {
                dtd.resolve(result);
            }
        });
        return dtd;
    }
    return new api();
})