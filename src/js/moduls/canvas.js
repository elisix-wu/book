define(function (require) {
    var $ = require('jquery');


    function bg() {
        this.x=Math.floor(Math.random()*$(window).width());
        this.y=Math.floor(Math.random()*$(window).height());
        this.r=Math.floor(Math.random()*10);
        this.vx=1;
        this.vy=1;
        this.color='rgba(' + Math.floor(Math.random() * 255) + ',' + Math.floor(Math.random() * 255) + ',' + Math.floor(
                Math.random() * 255) + ',.5)'
    }

    bg.prototype = {
        constructor:bg,
        draw: function () {
            $('body').append('<canvas id="canvas">');
            $('#canvas').css({
                position:'fixed',
                top:'0',
                left:'0',
                zIndex:-1
            })
            var canvas = document.getElementById('canvas');
            canvas.width = $(window).width();
            canvas.height = $(window).height();
            var ctx = canvas.getContext('2d');
            this.ctx=ctx;
        },
        ball: function () {
            var ctx=this.ctx;
            ctx.beginPath();
            ctx.fillStyle=this.color;
            ctx.arc(this.x, this.y, this.r, 0, 360);
            ctx.closePath();
            ctx.fill();
            
        },
        move:function(){

        },
        line:function(){
            
        }
    }
        

        
    // return new bg();
    
    return new bg();
})