
$.fn.extend({
		//---元素拖动插件
    dragging:function(data){   
		var $this = $(this);
		var xPage;
		var yPage;
		var X;//
		var Y;//
		var xRand = 0;//
		var yRand = 0;//
		var father = $this.parent();
		var defaults = {
			move : 'both',
			randomPosition : true ,
			hander:1,
                        resize:0,
                        minXY:200,
                        close:0
                        
		}
		var opt = $.extend({},defaults,data);
		var movePosition = opt.move;
		var random = opt.randomPosition;
		
		var hander = opt.hander;
                var resize = opt.resize;
                var close = opt.close;
                var mResize = false;
                var width,height;
		
		if(hander == 1){
			hander = $this; 
		}else{
			hander = $this.find(opt.hander);
		}
                $this.click(function(){
                        father.children().css({"zIndex":"0"});
                        $this.css({"zIndex":"1"});
                });
                if(resize != 0){
			$this.find(opt.resize).mousedown(function(e){
                                $("body").addClass("no-select-text");
                                hander.css({"cursor":"move"});
                                father.children().css({"zIndex":"0"});
                                $this.css({"zIndex":"1"});
                                mResize = true;
                                X = e.pageX;
                                Y = e.pageY;
                                width = $this.width();
                                height = $this.height();
                        });
		}
		
                if(close != 0){
                        $this.find(close).css({"cursor":"default"});
                        $this.find(close).click(function(){
                               $this.remove(); 
                        });
                }
			
		//---初始化
		father.css({"position":"relative","overflow":"hidden"});
		$this.css({"position":"absolute"});

		var faWidth = father.width();
		var faHeight = father.height();
                var thisWidth = $this.width()+parseInt($this.css('padding-left'))+parseInt($this.css('padding-right'));
                var thisHeight = $this.height()+parseInt($this.css('padding-top'))+parseInt($this.css('padding-bottom'));
		
		var mDown = false;//
		var positionX;
		var positionY;
		var moveX ;
		var moveY ;
                var resizeX ;
		var resizeY ;
                var minXY=opt.minXY;
		
		if(random){
			$thisRandom();
		}
		function $thisRandom(){ //随机函数
			$this.each(function(index){
				var randY = parseInt(Math.random()*(faHeight-50));///
				var randX = parseInt(Math.random()*(faWidth-thisWidth));///
				if(movePosition.toLowerCase() == 'x'){
					$(this).css({
						left:randX
					});
				}else if(movePosition.toLowerCase() == 'y'){
					$(this).css({
						top:randY
					});
				}else if(movePosition.toLowerCase() == 'both'){
					$(this).css({
						top:randY,
						left:randX
					});
				}
				
			});	
		}
		
		hander.mousedown(function(e){
                        thisWidth = $this.width()+parseInt($this.css('padding-left'))+parseInt($this.css('padding-right'));
                        thisHeight = $this.height()+parseInt($this.css('padding-top'))+parseInt($this.css('padding-bottom'));
                        hander.css({"cursor":"move"});
			father.children().css({"zIndex":"0"});
			$this.css({"zIndex":"1"});
			mDown = true;
			X = e.pageX;
			Y = e.pageY;
			positionX = $this.position().left;
			positionY = $this.position().top;
			return false;
		});
			
		$(document).mouseup(function(e){
                        hander.css({"cursor":"default"});
			mDown = false;
                        mResize = false;
                        $("body").removeClass("no-select-text");
		});
			
		$(document).mousemove(function(e){
			xPage = e.pageX;//--
			moveX = positionX+xPage-X;
			
			yPage = e.pageY;//--
			moveY = positionY+yPage-Y;
                        resizeX = xPage-X+width;
                        resizeY = yPage-Y+height;
			
			function thisXMove(){ //x轴移动
				if(mDown == true){
					$this.css({"left":moveX});
				}else{
                                        if(mResize == true){
                                                $this.css({"width":(resizeX>minXY?resizeX:minXY)});
//                                                $this.find(".panel-body").css({"width":(resizeX>minXY?resizeX:minXY)-10});
                                        }
					return;
				}
				if(moveX < 0){
					$this.css({"left":"0"});
				}
				if(moveX > (faWidth-thisWidth)){
					$this.css({"left":faWidth-thisWidth});
				}
				return moveX;
			}
			
			function thisYMove(){ //y轴移动
				if(mDown == true){
					$this.css({"top":moveY});
				}else{
                                        if(mResize == true){
                                                $this.css({"height":(resizeY>minXY?resizeY:minXY)});
                                                $this.find(".panel-body").css({"height":(resizeY>minXY?resizeY:minXY)-50});
                                        }
					return;
				}
				if(moveY < 0){
					$this.css({"top":"0"});
				}
//				if(moveY > (faHeight-thisHeight)){
//					$this.css({"top":faHeight-thisHeight});
//				}
				return moveY;
			}

			function thisAllMove(){ //全部移动
				if(mDown == true){
					$this.css({"left":moveX,"top":moveY});
				}else{
                                        if(mResize == true){
                                                $this.css({"width":(resizeX>minXY?resizeX:minXY)});
//                                                $this.find(".panel-body").css({"width":(resizeX>minXY?resizeX:minXY)-10});
                                                $this.css({"height":(resizeY>minXY?resizeY:minXY)});
                                                $this.find(".panel-body").css({"height":(resizeY>minXY?resizeY:minXY)-50});
                                        }
					return;
				}
				if(moveX < 0){
					$this.css({"left":"0"});
				}
				if(moveX > (faWidth-thisWidth)){
					$this.css({"left":faWidth-thisWidth});
				}

				if(moveY < 0){
					$this.css({"top":"0"});
				}
				if(moveY > (faHeight-50)){
					$this.css({"top":faHeight-50});
				}
			}
			if(movePosition.toLowerCase() == "x"){
				thisXMove();
			}else if(movePosition.toLowerCase() == "y"){
				thisYMove();
			}else if(movePosition.toLowerCase() == 'both'){
				thisAllMove();
			}
		});
    }
});