/*移动提示框*/
//;
//(function ($, window, document, undefined) {
//    $.fn.MoveBox = function (options) {
//        // config
//        options = $.extend(true, {
//            MoveNode: null,
//            Trigger: null,
//            XOffset: 30,
//            YOffset: 10,
//            context: '此栏目暂时无对应样式，无法开启展示！',
//            callback: function () {}
//        }, options);
//        var _BoxDiv = $('<div class="BoxStyle">' + options.context + '</div>');
//        this.each(function () {
//            var _this = $(this),
//                    MoveNode = (options.MoveNode != null ? $('.' + options.MoveNode) : '') || _this,
//                    Trigger = (options.Trigger != null ? options.Trigger : 'click');
//            MoveNode.on(Trigger, function (event) {
//                $('body').append(_BoxDiv);
//                _BoxDiv.css({
//                    'top': (event.pageY - options.YOffset) + 'px',
//                    'left': (event.pageX + options.XOffset) + 'px',
//                }).fadeIn('slow');
//            }).mouseleave(function () {
//                _BoxDiv.fadeOut('fast', function () {
//                    $(this).remove();
//                });
//            }).mousemove(function (event) {
//                _BoxDiv.css({
//                    'top': (event.pageY - options.YOffset) + 'px',
//                    'left': (event.pageX + options.XOffset) + 'px',
//                });
//            });
//        });
//        return this;
//    }
//})(jQuery, window, document);
$(".new-panel").mousedown(function(){
    var options=$(this)[0];
    var _this=$(this);
    console.log(options);
    $(this).mousemove(function (event) {
        console.log((event.pageY - options.offsetTop),(event.pageX + options.offsetLeft));
                $(".new-panel").css({
                    'top': (event.pageY - options.YOffset) + 'px',
                    'left': (event.pageX + options.XOffset) + 'px',
                });
            });
})

