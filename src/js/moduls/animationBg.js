define(function (require) {
    var $ = require('jquery');

    function Bg(ctx, color) {
        this.ctx = ctx;
        this.x = Math.random() * ctx.canvas.width;
        this.y = Math.random() * ctx.canvas.width;
        this.r = Math.random() * 10;
        this.vx = Math.random() * 0.5;
        this.vy = Math.random() * 0.5;
        this.color = color;
    }

    Bg.prototype.drawBall = function () {
        var ctx = this.ctx;
        ctx.beginPath();
        ctx.fillStyle = this.color;
        ctx.arc(this.x, this.y, this.r, 0, 360, false);
        ctx.closePath();
        ctx.fill();
    }
    Bg.prototype.move = function () {
        var width = this.ctx.canvas.width,
            height = this.ctx.canvas.height;
        this.vx = this.x > width || this.x < 0 ? -this.vx : this.vx;
        this.vy = this.y > height || this.y < 0 ? -this.vy : this.vy;
        this.x += this.vx;
        this.y += this.vy;
    }
    Bg.prototype.drawLine = function (nextBall) {
        var x = this.x - nextBall.x,
            y = this.y - nextBall.y,
            d = Math.sqrt(x * x + y * y),
            ctx = this.ctx;
        if (d < 150) {
            ctx.beginPath();
            ctx.strokeStyle = this.color;
            ctx.moveTo(this.x, this.y);
            ctx.lineTo(nextBall.x, nextBall.y);
            ctx.closePath();
            ctx.stroke();
        }


    }


    function start(option) {
        var option = $.extend({}, {
                balls: [],
                num: 150,
                width: $(window).width(),
                height: $(window).height(),
                color: 'rgba(0,0,0,.1)'
            }, option),
            $canvas = $('<canvas></canvas>').appendTo('body').css({
                position: 'fixed',
                zIndex: -1,
                left: 0,
                top: 0
            }),
            canvas = $canvas[0],
            ctx = canvas.getContext('2d');
        canvas.width = option.width;
        canvas.height = option.height;
        var aaa;
        init();
        draw();

        function init() {
            for (var i = 0; i < option.num; i++) {
                option.balls.push(new Bg(ctx, option.color))
            }
        }

        function draw() {
            ctx.clearRect(0, 0, option.width, option.height);
            var balls = option.balls,
                len = balls.length;
            for (var i = 0; i < len; i++) {

                balls[i].move();
                balls[i].drawBall();
                for (var j = i + 1; j < len; j++) {
                    balls[i].drawLine(balls[j]);
                }
            }
            aaa = requestAnimationFrame(draw);

        }
      

    }


    return start;

})