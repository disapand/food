$(function () {

	var t_img; // 定时器
	var isLoad = true; // 控制变量

	isImgLoad( function () {
		$('.cover').animate({"opacity": "0"}, 1500, function () {
			$(this).css("z-index", "-1");
			$('.btn_up').show();
			start_slide();
		});
	} );
	// 判断图片加载的函数
	function isImgLoad(callback){
    // 注意我的图片类名都是cover，因为我只需要处理cover。其它图片可以不管。
    // 查找所有封面图，迭代处理
	    $('img').each( function( index ) {
	        // 找到为0就将isLoad设为false，并退出each
	        if(this.height === 0){
	            isLoad = false;
	            return false;
	        }
	    } );

	    // 为true，没有发现为0的。加载完毕
	    if(isLoad){
	        clearTimeout(t_img); // 清除定时器
	        // 回调函数
	        callback();
	    // 为false，因为找到了没有加载完成的图，将调用定时器递归
	    }else{
	        isLoad = true;
	        t_img = setTimeout(function(){
	            isImgLoad(callback); // 递归扫描
	        }, 500); // 我这里设置的是500毫秒就扫描一次，可以自己调整
	    }
	}

	var mySwiper = new Swiper('.container', {
		direction: 'vertical',
		// effect : 'coverflow',
		coverflow: {
			stretch: 100,
			modifier: 2
		},
		// allowSwipeToPrev : false,
		onSlideChangeStart: function (swiper) {
			pageIn( swiper.activeIndex );
		},
	});

	var musicOn = 1;

	function start_slide() {
		addAnimate('#font1_1', 'fadeInLeft');
		addAnimate('#font1_2', 'fadeInRight');
	}

	/**
	 * 添加动画效果
	 * @param {[type]} id        添加动画的id
	 * @param {[type]} animation 添加的动画效果
	 */
	function addAnimate ( id, animation ) {
		$(id).removeAttr('class').addClass('animated ' + animation);
	}

	/**
	 * 移除动画效果
	 * @param  {[type]} id        移除动画效果的id
	 * @param  {[type]} animation 移除的动画效果
	 */
	function removeAnimate ( id ) {
		$(id).removeAttr('class');
	}

	/**
	 * 页面切换效果
	 * @param  {[type]} index 页面编号
	 */
	function pageIn ( index ) {
		removeAnimate('.swiper-slide img');
		switch( index ) {
			//第一页切换动画效果
			case 0:
				addAnimate('#font1_1', 'fadeInLeft');
				addAnimate('#font1_2', 'fadeInRight');
				break;
			//第二页切换动画效果
			case 1:
				addAnimate('#font2', 'lightSpeedIn');
				break;
			//第三页切换动画效果
			case 2:
				addAnimate('#font3_1', 'fadeInUp');
				addAnimate('#p3_border', 'zoomIn');
				break;
			//第四页切换动画效果
			case 3:
				addAnimate('#font4', 'bounceInLeft');
				break;
			//第五页切换动画效果
			case 4:
				addAnimate('#font5', 'fadeInRight');
				addAnimate('#p5_1', 'flipInX');
				addAnimate('#p5_2', 'rollIn');
				addAnimate('#p5_3', 'rollIn');
				break;
			//第六页切换动画效果
			case 5:
				addAnimate('#font6', 'fadeIn');
				addAnimate('#p6_circle', 'breath');
				break;
			//第七页切换动画效果
			case 6:
				addAnimate('#font7', 'zoomInUp');
				addAnimate('#font7_bg', 'zoomInUp');
				break;
			//第八页切换动画效果
			case 7:
				addAnimate('#font8', 'flipInXD');
				addAnimate('#p8_border', 'mum');
				break;
			//第九页切换动画效果
			case 8:
				addAnimate('#p9_logo', 'fadeInD');
				addAnimate('#p9_footer', 'fadeIn');
				$(".btn_up").hide();
				break;
			default:
				return false;
		}
	}

	$(".btn_play").click(function(event) {
		if ( musicOn ) {
			musicOn = 0;
			$(this).css("background-position", "0");
			console.log($('#bgm'));
			$('#bgm')[0].pause();
		} else {
			musicOn = 1;
			$(this).css("background-position", "-30px");
			$('#bgm')[0].play();
		}
	});

} );