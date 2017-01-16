<html>
    <head>
        <meta http-equiv="x-ua-compatible" content="ie=9" />
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="keywords" content="拼网" />
        <meta name="description" content="拼网后台管理" />
        <title>拼网后台管理</title>
        <link href="css/bootstrap.min.css" rel="stylesheet">
        <link href="css/content.css" rel="stylesheet">
        <script type="text/javascript" src="js/jquery-1.9.1.js"></script>
        <script type="text/javascript" src="js/bootstrap.min.js"></script>
        <script type="text/javascript" src="js/drag.js"></script>
        <script type="text/javascript" src="js/function.js"></script>
    </head>
    <body>
        <div class="top-div"></div>
        <div class="menu-panel">
            <div class="menu">
                <div class=""></div>
            </div>
        </div>
        <div class="content-panel">
            <div class="panel panel-primary new-panel">
                <div class="panel-heading"><div class="panel-title">页面设置<small>(Page Setting)</small></div><div class="panel-control"><div class="panel-close">口</div><div class="panel-close">X</div><div class="panel-close" style="font-weight: bold;">一</div></div></div>
                <div class="panel-body">
                </div>
                <div class="panel-resize"></div>
            </div>
            <div class="panel panel-primary new-panel">
                <div class="panel-heading"><div class="panel-title">页面设置<small>(Page Setting)</small></div><div class="panel-control"><div class="panel-close">X</div></div></div>
                <div class="panel-body" id="page_setting">
                    1<br />
                    1<br />
                    1<br />
                    1<br />
                    1<br />
                    1<br />
                    1<br />
                    1<br />
                    1<br />
                    1<br />
                    1<br />
                    1<br />
                    1<br />
                    1<br />
                    1<br />
                    1<br />
                    1<br />
                    1<br />
                    1<br />
                    1<br />
                    1<br />
                    1<br />
                    1<br />
                    1<br />
                    1<br />
                    1<br />
                    1<br />
                    1<br />
                </div>
                <div class="panel-resize"></div>
            </div>
        </div>
        <div class="footer-panel">
            <div class="panel-container">
                <div class="panel panel-primary new-panel">
                    <div class="panel-heading"><div class="panel-title">页面设置<small>(Page Setting)</small></div><div class="panel-control"><div class="panel-close">口</div><div class="panel-close">X</div><div class="panel-close" style="font-weight: bold;">一</div></div></div>
                </div>
            </div>
            <div class="panel-container">
                <div class="panel panel-primary new-panel">
                    <div class="panel-heading"><div class="panel-title">页面设置<small>(Page Setting)</small></div><div class="panel-control"><div class="panel-close">口</div><div class="panel-close">X</div><div class="panel-close" style="font-weight: bold;">一</div></div></div>
                </div>
            </div>
            <div class="panel-container">
                <div class="panel panel-primary new-panel">
                    <div class="panel-heading"><div class="panel-title">页面设置<small>(Page Setting)</small></div><div class="panel-control"><div class="panel-close">口</div><div class="panel-close">X</div><div class="panel-close" style="font-weight: bold;">一</div></div></div>
                </div>
            </div>
        </div>
    </body>
    <script type="text/javascript">
        $(function() {
            $('.content-panel .panel').each(function() {
                $(this).dragging({
                    move: 'both',
                    randomPosition: true,
                    hander: '.panel-heading',
                    resize: '.panel-resize'
                });
            });
            $('.content-panel').createPanel();
        });
    </script>
</html>

