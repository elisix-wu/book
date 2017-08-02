define(function (require) {
    var $ = require('jquery'),
        tem = require('tem');


    function until() {

    }

    until.prototype.renderTem = function (domID, temID, data) {
        var html = tem(temID, data);

        $('#' + domID).html(html);
    }

    until.prototype.beforeTem = function (dom, temID, data) {
        var html = tem(temID, data);
        dom.before(html);
    }
    until.prototype.appendTem = function (dom,temID,data) {
        var html = tem(temID, data);
        dom.append(html);
    }

    until.prototype.loading=function (text) {
            var text = text || '正在加载数据...';
            $('body').append([
                ' <div class="text-center global-loading" >',
                '<i class="fa-refresh fa-spin fa fa-3x"></i>',
                '<div>' + text + '</div>',
                '</div> '
            ].join(''));
        }
    until.prototype.closeLoading= function () {
            $('body').find('.global-loading').fadeOut(500, function () {
                $(this).remove();
            });
        }


    return new until();
})