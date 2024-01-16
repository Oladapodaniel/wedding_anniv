$(window).load(function () {
	$('.loading').fadeOut('fast');
	$('.container').fadeIn('fast');

	let sec = 0
	setInterval(() => {
		sec += 1
		console.log(sec)
	}, 1000);
});
// import moment from "moment"

$('document').ready(function () {
	
	const urlParams = new URLSearchParams(window.location.search);
	const personName = urlParams.get('personName');
	const nameEl = $('<h4 style="color:#20CFB4"></h4>');
	nameEl.text(personName.split(" ")[0])
	$('.celebrantName').append(nameEl);
	// })


	var vw;
	$(window).resize(function () {
		vw = $(window).width() / 2;
		$('#b1,#b2,#b3,#b4,#b5,#b6,#b7').stop();
		$('#b11').animate({ top: 240, left: vw - 350 }, 500);
		$('#b22').animate({ top: 240, left: vw - 250 }, 500);
		$('#b33').animate({ top: 240, left: vw - 150 }, 500);
		$('#b44').animate({ top: 240, left: vw - 50 }, 500);
		$('#b55').animate({ top: 240, left: vw + 50 }, 500);
		$('#b66').animate({ top: 240, left: vw + 150 }, 500);
		$('#b77').animate({ top: 240, left: vw + 250 }, 500);
	});

	// $('#turn_on').click(function(){
	setTimeout(() => {
		$('#bulb_yellow').addClass('bulb-glow-yellow');
		$('#bulb_red').addClass('bulb-glow-red');
		$('#bulb_blue').addClass('bulb-glow-blue');
		$('#bulb_green').addClass('bulb-glow-green');
		$('#bulb_pink').addClass('bulb-glow-pink');
		$('#bulb_orange').addClass('bulb-glow-orange');
		$('#churchLogo').addClass('church-logo');
		$('#poweredbyChurchplus').addClass('powered-by-churchplus');
		$('#personImageContainer').addClass('person-image');
		$('body').addClass('peach');


		// Person Image
		const personImage = urlParams.get('personPhotoUrl');
		const personImageEl = $(`
			<div id="person-image-con" style="display:flex;align-items:center">
				<img style="width:300px;" id="personImage" src=${personImage} />
			</div>
	    `)
		$("#personImageContainer").append(personImageEl)

		// Church Name
		const churchName = urlParams.get('churchName');
		$('#churchName').text(churchName);

		// Church Logoo
		const churchLogo = urlParams.get('churchLogo');
		if (churchLogo) {
			const churchLogoEl = $(`<img src=${churchLogo} style="width: 100px" alt=churchlogo />`);
			$("#churchLogo").append(churchLogoEl)
		}

		// Powered by Churchplus
		const poweredBy = $(`
			<div style="font-size: 14px;font-weight: 400;color:rgba(38, 38, 38, 0.58);margin-left: 10px">Powered by</div>
			<img src="./Churchplus_blue.png" alt="church logo" />
		`)
		$("#poweredbyChurchplus").append(poweredBy);

		// $(this).fadeOut('slow').delay(5000).promise().done(function(){
		// 	console.log('should fade in')
		// });
		setTimeout(() => {
			$('#play').fadeIn('slow');
		}, 5000);
	}, 3000);
	// });
	$('#play').click(function () {
		var audio = $('.song')[0];
		audio.play();
		$('#bulb_yellow').addClass('bulb-glow-yellow-after');
		$('#bulb_red').addClass('bulb-glow-red-after');
		$('#bulb_blue').addClass('bulb-glow-blue-after');
		$('#bulb_green').addClass('bulb-glow-green-after');
		$('#bulb_pink').addClass('bulb-glow-pink-after');
		$('#bulb_orange').addClass('bulb-glow-orange-after');
		$('body').css('backgroud-color', '#FFF');
		$('body').addClass('peach-after');
		$(this).fadeOut('slow').delay(6000).promise().done(function () {
			$('#bannar_coming').fadeIn('slow');
		});
	});

	// $('#bannar_coming').click(function(){
	setTimeout(() => {
		$('.bannar').addClass('bannar-come');
		$(this).fadeOut('slow').delay(6000).promise().done(function () {
			$('#balloons_flying').fadeIn('slow');
		});
	}, 13000);
	// });

	function loopOne() {
		var randleft = 1000 * Math.random();
		var randtop = 500 * Math.random();
		$('#b1').animate({ left: randleft, bottom: randtop }, 10000, function () {
			loopOne();
		});
	}
	function loopTwo() {
		var randleft = 1000 * Math.random();
		var randtop = 500 * Math.random();
		$('#b2').animate({ left: randleft, bottom: randtop }, 10000, function () {
			loopTwo();
		});
	}
	function loopThree() {
		var randleft = 1000 * Math.random();
		var randtop = 500 * Math.random();
		$('#b3').animate({ left: randleft, bottom: randtop }, 10000, function () {
			loopThree();
		});
	}
	function loopFour() {
		var randleft = 1000 * Math.random();
		var randtop = 500 * Math.random();
		$('#b4').animate({ left: randleft, bottom: randtop }, 10000, function () {
			loopFour();
		});
	}
	function loopFive() {
		var randleft = 1000 * Math.random();
		var randtop = 500 * Math.random();
		$('#b5').animate({ left: randleft, bottom: randtop }, 10000, function () {
			loopFive();
		});
	}

	function loopSix() {
		var randleft = 1000 * Math.random();
		var randtop = 500 * Math.random();
		$('#b6').animate({ left: randleft, bottom: randtop }, 10000, function () {
			loopSix();
		});
	}
	function loopSeven() {
		var randleft = 1000 * Math.random();
		var randtop = 500 * Math.random();
		$('#b7').animate({ left: randleft, bottom: randtop }, 10000, function () {
			loopSeven();
		});
	}

	// $('#balloons_flying').click(function(){
	setTimeout(() => {
		$('.balloon-border').animate({ top: -500 }, 8000);
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
		$(`#personImageContainer`).addClass('absolute-con')
		$(`#person-image-con`).addClass('person-image-con-bg')
		$(`#person-image-con`).addClass('person-image-transform')
		const personNameBirthday =  $(`
		<div style="margin-left:15px">
			<div style="font-weight:800;font-size:80px;color:#FFF;">${personName}</div>
			<div style="font-weight:400;font-size:62px;color:#FFF;">${moment().format('ll')}</div>
		</div>
		`)
		setTimeout(() => {
			$(`#person-image-con`).append(personNameBirthday).fadeIn('slow')
		}, 3000);
		$('.cake').fadeIn('slow');
		// $('#cake_fadein').click(function(){
		// $(this).fadeOut('slow').delay(3000).promise().done(function(){

		// });
		// });
		setTimeout(() => {
			$('#light_candle').fadeIn('slow');
		}, 3000);
	}, 27000);

	$('#light_candle').click(function () {
		$('.fuego').fadeIn('slow');
		$(this).fadeOut('slow')
		setTimeout(() => {
			vw = $(window).width() / 2;

			$('#b1,#b2,#b3,#b4,#b5,#b6,#b7').stop();
			$('#b1').attr('id', 'b11');
			$('#b2').attr('id', 'b22')
			$('#b3').attr('id', 'b33')
			$('#b4').attr('id', 'b44')
			$('#b5').attr('id', 'b55')
			$('#b6').attr('id', 'b66')
			$('#b7').attr('id', 'b77')
			$('#b11').animate({ top: 240, left: vw - 350 }, 500);
			$('#b22').animate({ top: 240, left: vw - 250 }, 500);
			$('#b33').animate({ top: 240, left: vw - 150 }, 500);
			$('#b44').animate({ top: 240, left: vw - 50 }, 500);
			$('#b55').animate({ top: 240, left: vw + 50 }, 500);
			$('#b66').animate({ top: 240, left: vw + 150 }, 500);
			$('#b77').animate({ top: 240, left: vw + 250 }, 500);
			$('.balloons').css('opacity', '0.9');
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
			// let displayedMessage = ""
			// const plusIndex = 5
			// for (let i = 0; i < message.split(" ").length; i++) {
			// 	const element = message.split(" ")[i];
			// 	if(i <= (i + plusIndex)) {
			// 		// console.log(element)
			// 		let messageEl = $('<p></p>');
			// 		displayedMessage += ` ${element}`
			// 		messageEl.text(displayedMessage)
			// 		console.log(displayedMessage, 'working')

			// 	}


			// }
			// Split the text into words
			var words = message.split(' ');

			// Container to hold paragraphs
			var container = $('#celebrantmessage');

			// Create paragraphs
			for (var i = 0; i < words.length; i += 5) {
				var fiveWords = words.slice(i, i + 5).join(' ');
				var paragraph = $('<p>').text(fiveWords);
				container.append(paragraph);
			}
			//    });
			// message.split(" ").forEach(i => {

			// 	console.log(messageEl)
			// 	// Appending the div element to the body
			// 	$('#celebrantmessage').append(messageEl);
			// })

		}, 4000);
		setTimeout(() => {
			$(this).fadeOut('slow');
			$('.cake').fadeOut('fast').promise().done(function () {
				$('.message').fadeIn('slow');
			});



			var i;

			function msgLoop(i) {
				$("p:nth-child(" + i + ")").fadeOut('slow').delay(800).promise().done(function () {
					i = i + 1;
					$("p:nth-child(" + i + ")").fadeIn('slow').delay(1000);
					if (i == 50) {
						$("p:nth-child(49)").fadeOut('slow').promise().done(function () {
							$('.cake').fadeIn('fast');
						});

					}
					else {
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