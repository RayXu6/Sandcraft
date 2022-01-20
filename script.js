$(function(){
    $(".li1").click(function(){
        $(".li1-nr").stop().fadeIn()
        $(".li1-nr").siblings().stop().fadeOut()
        $(".indicator").stop().animate({
            width:58,
            left:108
        })
    })
    $(".li2").click(function(){
        $(".li2-nr").stop().fadeIn()
        $(".li2-nr").siblings().stop().fadeOut()
        $(".indicator").stop().animate({
            width:58,
            left:165
        })
    })
    $(".li3").click(function(){
        $(".li3-nr").stop().fadeIn().css("display","block")
        $(".li3-nr").siblings().stop().fadeOut()
        $(".indicator").stop().animate({
            width:58,
            left:223
        })
    })
    $(".li4").click(function(){
        $(".li4-nr").stop().fadeIn()
        $(".li4-nr").siblings().stop().fadeOut()
        $(".indicator").stop().animate({
            width:70,
            left:282
        })
    })
    $(".li5").click(function(){
        $(".li5-nr").stop().fadeIn()
        $(".li5-nr").siblings().stop().fadeOut()
        $(".indicator").stop().animate({
            width:58,
            left:354
        })
    })
    $(".pn-li1").click(function(){
        $(".li1-nr").stop().fadeIn()
        $(".li1-nr").siblings().stop().fadeOut()
    })
    $(".pn-li2").click(function(){
        $(".li2-nr").stop().fadeIn()
        $(".li2-nr").siblings().stop().fadeOut()
    })
    $(".pn-li3").click(function(){
        $(".li3-nr").stop().fadeIn()
        $(".li3-nr").siblings().stop().fadeOut()
    })
    $(".pn-li4").click(function(){
        $(".li4-nr").stop().fadeIn()
        $(".li4-nr").siblings().stop().fadeOut()
    })
    $(".pn-li5").click(function(){
        $(".li5-nr").stop().fadeIn()
        $(".li5-nr").siblings().stop().fadeOut()
    })
    $(".phone-nav").click(function(){
        $(".phone-nav .pn-ul").fadeToggle()
    })
    $('#fullpage').fullpage();
    ityped.init('#ityped', {
        strings:['沙世界 | SandCraft', 'Minecraft公益生存服务器', '版本:1.16.5', '红石 | 生电 | PVP','何乐而不为呢?'],
        startDelay: 200,
        loop: true,
        showCursor: false
    });

    $('#fullpage').fullpage({
		//Navigation
		menu: '#menu',//绑定菜单，设定的相关属性与anchors的值对应后，菜单可以控制滚动，默认为false。
		anchors:["page1","page2","page3","page4","page5","page6","page7","page8","page9","page10","page11","page12","page13","page14","page15","page16"],//anchors定义锚链接，默认为[]
		lockAnchors: false,//是否锁定锚链接，默认为false,设为true后链接地址不会改变
		navigation: false,//是否显示导航，默认为false
		navigationPosition: 'right',//导航小圆点的位置
		navigationTooltips: ['firstSlide', 'secondSlide'],//导航小圆点的提示
		showActiveTooltip: false,//是否显示当前页面的tooltip信息
		slidesNavigation: true,//是否显示横向幻灯片的导航，默认为false
		slidesNavPosition: 'bottom',//横向导航的位置，默认为bottom，可以设置为top或bottom
		//Scrolling
		css3: true,//是否使用CSS3 transforms来实现滚动效果，默认为true
		scrollingSpeed: 700,//设置滚动速度，单位毫秒，默认700
		autoScrolling: true,//是否使用插件的滚动方式，默认为true,若为false则会出现浏览器自带滚动条
		fitToSection: true,//设置是否自适应整个窗口的空间，默认值：true
		scrollBar: false,//是否包含滚动条，默认为false,若为true浏览器自带滚动条出现
		easing: 'easeInOutCubic',//定义页面section滚动的动画方式，若修改此项需引入jquery.easing插件
		easingcss3: 'ease',//定义页面section滚动的过渡效果，若修改此项需引入第三方插件
		loopBottom: false,//滚动到最低部后是否连续滚动到顶部，默认为false
		loopTop: true,//滚动到最顶部后是否连续滚动到底部，默认为false
		loopHorizontal: true,//横向slide幻灯片是否循环滚动，默认为true
		continuousVertical: false,//是否循环滚动，不兼容loopTop和loopBottom选项
		normalScrollElements: '#element1, .element2',//避免自动滚动，滚动时的一些元素，例如百度地图
		scrollOverflow: false,//内容超过满屏后是否显示滚动条，true则显示滚动条，若需滚动查看内容还需要jquery.slimscroll插件的配合
		touchSensitivity: 15,//在移动设备中滑动页面的敏感性，默认为5最高100，越大越难滑动
		normalScrollElementTouchThreshold: 5,
		//Accessibility
		keyboardScrolling: true,//是否可以使用键盘方向键导航，默认为true
		animateAnchor: true,//锚链接是否可以控制滚动动画，默认为true,若为false则锚链接定位失效
		recordHistory: true,//是否记录历史，默认为true,浏览器的前进后退可导航。若autoScrolling:false,那么这个属性将被关闭
		//Design
		controlArrows: true,//定义是否通过箭头来控制slide,默认true
		verticalCentered: true,//定义每一页的内容是否垂直居中，默认true
		resize : false,//字体是否随窗口缩放而缩放，默认false
		sectionsColor : ['#ccc', '#fff'],//为每个section设置background-color属性
		paddingTop: '3em',//设置每一个section顶部的padding,默认为0
		paddingBottom: '10px',//设置每一个section底部的padding,默认为0
		fixedElements: '#header, .footer',//固定元素，默认为null,需要配置一个jquery选择器，在页面滚动时，fixElements设置的元素不滚动
		responsiveWidth: 0,
		responsiveHeight: 0,
		//Custom selectors
		sectionSelector: '.section',//section选择器。默认为.section
		slideSelector: '.slide',//slide选择器，默认为.slide
		//events
		onLeave: function(index, nextIndex, direction){},
		afterLoad: function(anchorLink, index){},
		afterRender: function(){},
		afterResize: function(){},
		afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex){},
		onSlideLeave: function(anchorLink, index, slideIndex, direction, nextSlideIndex){}
	});
})