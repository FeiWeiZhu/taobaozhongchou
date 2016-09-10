(function ($){
	$(".topNav.full").find(".navA").mouseenter(function(){
		$(this).css("color","rgb(0,204,206)");
		$(this).find(".img").css("transform","rotate(180deg)");
		$(this).find(".img1").css("transform","rotate(180deg)");
	}).mouseleave(function(){
		$(this).css("color","");
		$(this).find(".img").css("transform","rotate(0deg)");
		$(this).find(".img1").css("transform","rotate(0deg)");
	});

	$(".topNav.full .w1190 .bigDiv").mouseenter(function(){
		$(".listDiv").slideDown(500);
		$(".listDiv").delegate(".linkA","mouseenter",function(){
			$(this).css("color","rgb(255,255,255").css("background-color","rgb(0,204,206)");
		}).delegate(".linkA","mouseleave",function(){
			$(this).css("color","").css("background-color","");
		})
	}).mouseleave(function(){
		$(".listDiv").slideUp(500);
	});

	$(".topNav.full .w1190 .bigDiv1").mouseenter(function(){
		$(".listDiv1").slideDown(500);
		$(".listDiv1").delegate(".linkB","mouseenter",function(){
			$(this).css("color","rgb(255,255,255").css("background-color","rgb(0,204,206)");
		}).delegate(".linkB","mouseleave",function(){
			$(this).css("color","").css("background-color","");
		})
	}).mouseleave(function(){
		$(".listDiv1").slideUp(500);
	});
	$(".item.full .w1190").delegate(".tA","mouseenter",function(){
		$(this).css("color","rgb(0,204,206)");
	}).delegate(".tA","mouseleave",function(){
		$(this).css("color","");
	});
	$(".fixedText").mouseenter(function(){
		$(this).css("color","rgb(255,255,255)").css("background-color","rgb(0,204,206)");
	}).mouseleave(function(){
		$(this).css("color","").css("background-color","");
	})
	$(".fixedText.one").click(function(){
		$(this).css("color","").css("background-color","").addClass("txt").siblings().removeClass("txt");
	});
	// console.log($(".fundDiv .fundDiv1 .container1").eq(0).offset());

	$(".fixedText").eq(0).click(function(){
		$("html body").animate({scrollTop:1499},300);
	})
	$(".fixedText").eq(1).click(function(){
		$("html body").animate({scrollTop:2324},300);
	})
	$(".fixedText").eq(2).click(function(){
		$("html body").animate({scrollTop:3149},300);
	})
	$(".fixedText").eq(3).click(function(){
		$("html body").animate({scrollTop:3974},300);
	})
	$(".fixedText").eq(4).click(function(){
		$("html body").animate({scrollTop:4799},300);
	})
	$(".fixedText").eq(5).click(function(){
		$("html body").animate({scrollTop:5624},300);
	})
	$(".fixedText").eq(6).click(function(){
		$("html body").animate({scrollTop:0},500);
	})

	$(window).scroll(function(){
		if($(window).scrollTop() >=1499){
			$(".fixedNav").css("display","block");
		}else{
			$(".fixedNav").css("display","none");
		}
		if($(window).scrollTop() >= 1499 && $(window).scrollTop() < 2324){
			$(".fixedText").eq(0).css("color","rgb(255,255,255").css("background-color","rgb(0,204,206)");
		}else{
			$(".fixedText").eq(0).css("color","").css("background-color","");
		}
		if($(window).scrollTop() >= 2324 && $(window).scrollTop() < 3149){
			$(".fixedText").eq(1).css("color","rgb(255,255,255").css("background-color","rgb(0,204,206)");
		}else{
			$(".fixedText").eq(1).css("color","").css("background-color","");
		}
		if($(window).scrollTop() >= 3149 && $(window).scrollTop() < 3974){
			$(".fixedText").eq(2).css("color","rgb(255,255,255").css("background-color","rgb(0,204,206)");
		}else{
			$(".fixedText").eq(2).css("color","").css("background-color","");
		}
		if($(window).scrollTop() >= 3974 && $(window).scrollTop() < 4799){
			$(".fixedText").eq(3).css("color","rgb(255,255,255").css("background-color","rgb(0,204,206)");
		}else{
			$(".fixedText").eq(3).css("color","").css("background-color","");
		}
		if($(window).scrollTop() >= 4799 && $(window).scrollTop() < 5624){
			$(".fixedText").eq(4).css("color","rgb(255,255,255").css("background-color","rgb(0,204,206)");
		}else{
			$(".fixedText").eq(4).css("color","").css("background-color","");
		}
		if($(window).scrollTop() >= 5624){
			$(".fixedText").eq(5).css("color","rgb(255,255,255").css("background-color","rgb(0,204,206)");
		}else{
			$(".fixedText").eq(5).css("color","").css("background-color","");
		}
	});



})(jQuery);