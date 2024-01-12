$(window).load(function(){
	$('.loading').fadeOut('fast');
	$('.container').fadeIn('fast');

	let sec = 0
		setInterval(() => {
			sec += 1
			console.log(sec)
		}, 1000);
});
$('document').ready(function(){
		var vw;
		$(window).resize(function(){
			 vw = $(window).width()/2;
			$('#b1,#b2,#b3,#b4,#b5,#b6,#b7').stop();
			$('#b11').animate({top:240, left: vw-350},500);
			$('#b22').animate({top:240, left: vw-250},500);
			$('#b33').animate({top:240, left: vw-150},500);
			$('#b44').animate({top:240, left: vw-50},500);
			$('#b55').animate({top:240, left: vw+50},500);
			$('#b66').animate({top:240, left: vw+150},500);
			$('#b77').animate({top:240, left: vw+250},500);
		});

	// $('#turn_on').click(function(){
		setTimeout(() => {
			$('#bulb_yellow').addClass('bulb-glow-yellow');
			$('#bulb_red').addClass('bulb-glow-red');
			$('#bulb_blue').addClass('bulb-glow-blue');
			$('#bulb_green').addClass('bulb-glow-green');
			$('#bulb_pink').addClass('bulb-glow-pink');
			$('#bulb_orange').addClass('bulb-glow-orange');
			$('body').addClass('peach');
			// $(this).fadeOut('slow').delay(5000).promise().done(function(){
				// 	console.log('should fade in')
				// });
				setTimeout(() => {
					$('#play').fadeIn('slow');
			}, 5000);
		}, 3000);
	// });
	$('#play').click(function(){
		var audio = $('.song')[0];
        audio.play();
        $('#bulb_yellow').addClass('bulb-glow-yellow-after');
		$('#bulb_red').addClass('bulb-glow-red-after');
		$('#bulb_blue').addClass('bulb-glow-blue-after');
		$('#bulb_green').addClass('bulb-glow-green-after');
		$('#bulb_pink').addClass('bulb-glow-pink-after');
		$('#bulb_orange').addClass('bulb-glow-orange-after');
		$('body').css('backgroud-color','#FFF');
		$('body').addClass('peach-after');
		$(this).fadeOut('slow').delay(6000).promise().done(function(){
			$('#bannar_coming').fadeIn('slow');
		});
	});

	// $('#bannar_coming').click(function(){
		setTimeout(() => {
			$('.bannar').addClass('bannar-come');
			$(this).fadeOut('slow').delay(6000).promise().done(function(){
				$('#balloons_flying').fadeIn('slow');
			});
		}, 13000);
	// });

	function loopOne() {
		var randleft = 1000*Math.random();
		var randtop = 500*Math.random();
		$('#b1').animate({left:randleft,bottom:randtop},10000,function(){
			loopOne();
		});
	}
	function loopTwo() {
		var randleft = 1000*Math.random();
		var randtop = 500*Math.random();
		$('#b2').animate({left:randleft,bottom:randtop},10000,function(){
			loopTwo();
		});
	}
	function loopThree() {
		var randleft = 1000*Math.random();
		var randtop = 500*Math.random();
		$('#b3').animate({left:randleft,bottom:randtop},10000,function(){
			loopThree();
		});
	}
	function loopFour() {
		var randleft = 1000*Math.random();
		var randtop = 500*Math.random();
		$('#b4').animate({left:randleft,bottom:randtop},10000,function(){
			loopFour();
		});
	}
	function loopFive() {
		var randleft = 1000*Math.random();
		var randtop = 500*Math.random();
		$('#b5').animate({left:randleft,bottom:randtop},10000,function(){
			loopFive();
		});
	}

	function loopSix() {
		var randleft = 1000*Math.random();
		var randtop = 500*Math.random();
		$('#b6').animate({left:randleft,bottom:randtop},10000,function(){
			loopSix();
		});
	}
	function loopSeven() {
		var randleft = 1000*Math.random();
		var randtop = 500*Math.random();
		$('#b7').animate({left:randleft,bottom:randtop},10000,function(){
			loopSeven();
		});
	}

	// $('#balloons_flying').click(function(){
		setTimeout(() => {
			$('.balloon-border').animate({top:-500},8000);
			$('#b1,#b4,#b5,#b7').addClass('balloons-rotate-behaviour-one');
			$('#b2,#b3,#b6').addClass('balloons-rotate-behaviour-two');
			// $('#b3').addClass('balloons-rotate-behaviour-two');
			// $('#b4').addClass('balloons-rotate-behaviour-one');
			// $('#b5').addClass('balloons-rotate-behaviour-one');
			// $('#b6').addClass('balloons-rotate-behaviour-two');
			// $('#b7').addClass('balloons-rotate-behaviour-one');
			loopOne();
			loopTwo();
			loopThree();
			loopFour();
			loopFive();
			loopSix();
			loopSeven();
			
			// $(this).fadeOut('slow').delay(5000).promise().done(function(){
			// 	$('#cake_fadein').fadeIn('slow');
			// });
		}, 20000);
	// });	


	setTimeout(() => {
		// $('#cake_fadein').click(function(){
			$('.cake').fadeIn('slow');
			// $(this).fadeOut('slow').delay(3000).promise().done(function(){
				
			// });
		// });
		setTimeout(() => {
			$('#light_candle').fadeIn('slow');
		}, 3000);
	}, 27000);

	$('#light_candle').click(function(){
		$('.fuego').fadeIn('slow');
		$(this).fadeOut('slow')
		setTimeout(() => {
			vw = $(window).width()/2;
   
		   $('#b1,#b2,#b3,#b4,#b5,#b6,#b7').stop();
		   $('#b1').attr('id','b11');
		   $('#b2').attr('id','b22')
		   $('#b3').attr('id','b33')
		   $('#b4').attr('id','b44')
		   $('#b5').attr('id','b55')
		   $('#b6').attr('id','b66')
		   $('#b7').attr('id','b77')
		   $('#b11').animate({top:240, left: vw-350},500);
		   $('#b22').animate({top:240, left: vw-250},500);
		   $('#b33').animate({top:240, left: vw-150},500);
		   $('#b44').animate({top:240, left: vw-50},500);
		   $('#b55').animate({top:240, left: vw+50},500);
		   $('#b66').animate({top:240, left: vw+150},500);
		   $('#b77').animate({top:240, left: vw+250},500);
		   $('.balloons').css('opacity','0.9');
		   $('.balloons h2').fadeIn(3000);
		   $(this).fadeOut('slow').delay(3000)
		//    .promise().done(function(){
		// 	   $('#story').fadeIn('slow');
		//    });

		}, 3000);
		// .promise().done(function(){
		// 	$('#wish_message').fadeIn('slow');
		// });
		setTimeout(() => {
			const urlParams = new URLSearchParams(window.location.search);
			const message = urlParams.get('celebrationMessage');
			console.log(message)
			
			
			
			// Setting attributes to the div element
			// newDiv.attr('id', 'myDiv');
			// newDiv.attr('class', 'myClass');
			message.split(" ").forEach(i => {
				const messageEl = $('<p></p>');
				messageEl.text(i)
				console.log(messageEl)
				// Appending the div element to the body
				$('#celebrantmessage').append(messageEl);
			})
			
		}, 4000);
		setTimeout(() => {
			$(this).fadeOut('slow');
			$('.cake').fadeOut('fast').promise().done(function(){
				$('.message').fadeIn('slow');
			});
			
	

			var i;
	
			function msgLoop (i) {
				$("p:nth-child("+i+")").fadeOut('slow').delay(800).promise().done(function(){
				i=i+1;
				$("p:nth-child("+i+")").fadeIn('slow').delay(1000);
				if(i==50){
					$("p:nth-child(49)").fadeOut('slow').promise().done(function () {
						$('.cake').fadeIn('fast');
					});
					
				}
				else{
					msgLoop(i);
				}			
	
			});
				// body...
			}
			
			msgLoop(0);
		}, 8000);
	});

		
	// $('#wish_message').click(function(){
		
	// });
	
	// $('#story').click(function(){
		
	// });
});



//alert('hello');