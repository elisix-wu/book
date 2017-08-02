define(function(require){
    var apiUrls=require('./url');
    var Mock=require('Mock');


    function dataMock(){
        /**
         * 将所有mock存放
         */
        this.mocks=[];
    }

    dataMock.prototype.fire=function(){
        this.mocks.forEach(function(item){
            item();
        });

    }
    dataMock.prototype.add=function(fn){
        this.mocks.push(fn);
    }

    var globalMock=new dataMock();

    globalMock.add(function(){
        Mock.mock(apiUrls.login,{
            success:true
        })
    })

    globalMock.add(function () {
        Mock.mock(apiUrls.topics, {
            success: true,
            data: {
                'topics|7': [{
                    imgurl: '@dataImage(32x32,"")',
                    title: '@ctitle(3,8)'
                }]
            }
        })
    })


    globalMock.add(function(){
        Mock.mock(apiUrls.captions,{
            success:true,
            data:{
                'captions|20':[{
                    user:{
                        userFace:'@dataImage(32x32,"")',
                        userName:'@cname'
                    },
                    time:'@time',
                    title:'@ctitle',
                    text:'@cparagraph',
                    captionsImage:'@dataImage(150x120,"")',
                    tag:'@ctitle',
                    'readNum|500-2000':0,
                    'commment|30-200':0,
                    'like|10-30':0,
                    'money|0-10':0
                }]
            }
        })
    });

    globalMock.add(function () {
        Mock.mock(apiUrls.autho, {
            success: true,
            data: {
                'authos|5': [{
                    avatar_source: "@dataImage(48x48)",
                    id: "@id",
                    nickname: "@cname",
                    slug: "@id",
                    subscription_id: "@id",
                    "total_likes_count|10-20": 0,
                    "total_wordage|10-20": 0
                }]
            }
        })
    })
    return globalMock;
})