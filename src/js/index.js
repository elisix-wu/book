require(['jquery', 'bootstrap', 'moduls/api', 'moduls/until', 'moduls/animationBg'], function ($, boot, api, Until, start) {
    var loginbtn = $('.login-btn'),
        renderTem = Until.renderTem,
        beforeTem = Until.beforeTem,
        appendTem = Until.appendTem;
    loginbtn.on('click', function () {
        $('.login-btn').removeClass('active');
        $(this).addClass('active');
        var index = $(this).index();
        $('.modal-body').addClass('shows');
        $('.modal-body').eq(index).removeClass('shows');
    })

    $('.btn-btn').on('click', function () {
        var i = parseInt($(this).attr('id'));
        $('.login-btn').removeClass('active');
        $('.login-btn').eq(i).addClass('active');
        $('.modal-body').addClass('shows');


        $('.modal-body').eq(i).removeClass('shows');
    });



    function initData() {
        $.when(api.topics(), api.captions(), api.authos())
            .then(function (topics, captions, authos) {
                console.log(captions, authos);


                renderTem('recommend_collection', 'recommend_collection_tem', {
                    topics: topics.data.topics
                });

                renderTem('captions', 'captions_tem', {
                    captions: captions.data.captions
                });


                renderTem('autho', 'autho_tem', {
                    authos: authos.data.authos
                });

                $('#recommend_collection').append('<a class="more">更多专题</a>');
                Until.closeLoading();
                $('.more').on('click', function () {
                    if ($('.collection').length >= 21) {
                        $(this).html('已经没有更多了');
                        return;
                    }
                    api.topics().then(function (topics) {
                        beforeTem($('.more'), 'recommend_collection_tem', {
                            topics: topics.data.topics
                        })
                    })
                })
            })


        // lazyImage.lazyLoadInit();
    }

    $('#autho_prev').on('click', function () {
        var num = parseInt($('.now').text());
        if (num > 1) {
            num--;

        }
        else {

            return;
        }

        api.authos().then(function (data) {
            renderTem('autho', 'autho_tem', {
                authos: data.data.authos
            });
        })
        $('.now').text(num);

    })

    $('#autho_next').on('click', function () {
        var num = parseInt($('.now').text());
        if (num >= 42) {
            return;
        }
        else {
            num++;

        }


        api.authos().then(function (data) {
            renderTem('autho', 'autho_tem', {
                authos: data.data.authos
            });
        })

        $('.now').text(num);
    })

    function addCaptions() {
        $('.loading').show();
        api.captions().then(function (data) {
            appendTem($('#captions'), 'captions_tem', {
                captions: data.data.captions
            })
            $('.loading').hide();
        })
    }

    $(function () {
        initData();
        start({

        });
        Until.loading();
        $('#more').on('click',function(){
            addCaptions();
        })
    })
})