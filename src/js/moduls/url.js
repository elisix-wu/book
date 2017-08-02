define(function(require){
    var hostname='http://localhost:3000/api/'
    var apiUrls={
        login:hostname+'login',
        register:hostname+'register',
        banner:hostname+'banner',
        topics:hostname+'topics',
        captions:hostname+'captions',
        authos:hostname+'authos'
    }

    return apiUrls;
})