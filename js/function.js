$.fn.extend({
    createPanel: function(data) {
        var defaults = {
            title: '新建窗口',
            width: 800,
            height: 400
        }
        var $this = $(this);
        var date = new Date();
        var id = date.getTime() + "" + Math.ceil(Math.random() * 10000) + "-panel";
        var opt = $.extend({}, defaults, data);
        var html = '<div class="panel panel-primary select-control new-panel hander" style="width:' + opt.width + ';height:' + opt.height + ';" id="' + id + '">\
                <div class="panel-heading"><div class="panel-title">' + opt.title + '</div><div style="float:right;" class="panel-control"><div class="panel-close">X</div><div class="panel-close">口</div><div class="panel-close" style="font-weight: bold;">一</div></div></div>\
                <div class="panel-body">\
                </div>\
                <div class="panel-resize"></div>\
            </div>';
        $this.append(html);
        $("#" + id).dragging({
            move: 'both',
            randomPosition: true,
            hander: '.panel-heading',
            resize: '.panel-resize',
            close:'.panel-close'
        });
    }
});