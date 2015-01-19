$(document).ready(function(){
		var count = 0;
		var countStart = 4;
		var shots = 0;
		var hits = 0;
		//countdown for game
		var timeLeft = 0;
		var gameCounter = 15;
		//countdown for new bird
		var timeBirdGone = 0;
		var timeBirdFlys = 0;
		
		// 
		// 
		//variable for moveBirdStart and flying functions
		// 
		// 
		// 
		var randomMarginBird = Math.floor(Math.random()*100);
		var rLeft = randomMarginBird + '%';
		console.log(rLeft);
		//
		// 
		// 
	function moveBirdStart() {

		var bird = $('#bird');
		 bird.addClass("bird");
		 bird.css('margin-left',rLeft);

		flying();
		
	}
		// flying();
		//animate bird 
		//trying to make bird stay within dom with this fuction and if else
	function flying(){
		var bird = $('#bird');
		
		var randomMarginLow = Math.floor(Math.random()*49)+1;
		console.log(randomMarginLow);
		
		var randomLowNum = randomMarginLow + '%';
		var randomMarginHigh = Math.floor(Math.random()*100); 
		var randomHighNum = randomMarginHigh + '%';
		
		 if(randomMarginBird >= 50) {
				//make randomhigh the new left
				bird.addClass("bird");
				
				$('#bird').css('margin-left','randomHighNum');
				$('#bird').animate({top: '-=350', left: '-=350'},1200);
		 } else {

				//make randomlow the new left
				bird.addClass("bird");
				
		 		bird.css('margin-left','randomlowNum');
		 		bird.animate({top: '-=350', left: '+=350'},1200);
		 }
				
					
				//need to clear default after dclick so bird will go back to bottem of screen

	}	
	
	// <div id="bird" class="bird" style="margin-left: 92%; top: -67%; left: -90%;"></div>
// $("#box1").animate({left: '+=150', top: '+=150'}, 1000);
	
	// This function will set out timer variable;
	// and call the function to check logic on time.
	function time(){
		var startTimer = setInterval(countDown, 1000);
	}

	function countDown(){
		
		if(countStart !== 0){
			 countStart--;
			$('.timer').text(countStart);
			console.log(countStart);
		} else {
			var shoot = 'Shoot Now!';
			$('.timer').text(shoot);
			console.log('Shoot!');
			
			// Clear start timer.
			clearInterval(startTimer);
			
			// Start main game timer.
			gameTime();
			
			// Make first bird appear.
			var bird = $('#bird');
			bird.addClass("bird");
			bird.css('margin-left',rLeft);
			
			// Move bird.
			flying();
		}
	}

	//countdown timer while shooting birds
	//
	//
	//
	function gameTime(){
		//count the time left
		var startGameTime = setInterval(timeLeft, 1000);
	}

	function timeLeft(){
			
		if(gameCounter !== 0){
			gameCounter--;
			$('.gameTime').text(gameCounter);
			console.log(gameCounter);
		} else if (hits >= 8 || shots >= 12) {
			clearInterval(startGameTime);
		} else {
			$('.gameTime').text('You ran out of time! Game Over')
			 $('.gameTime').css({'top':'-242px','right':'503px','font-size':'50px','width':'1000px','height':'134px'});
			 // $('#container').css('background-color', '#fff');
		}
	}
	//
	//
	//count direct hits 
	function countHits(){
	
			var rawScore = hits/shots;
			var score = Math.floor(rawScore * 100);
		playHitSound();
		if(hits != 8){
			hits++;
			$('.hits').text(hits);
		 }else if ('.hits' == 8) {

		  } else {
			$('.hits').text('you win!' + 'final score is ' + score + '%');
			$('.hits').css({'color':'#88D509','top':'-242px','right':'563px','font-size':'50px','width':'260px','height':'134px'});
			
		}
		return hits;
	}
	//count the shots taken
	//
	//
	function countShots(){
		var rawScore = hits/shots;
		var score = Math.floor(rawScore * 100)
		if(shots != 12){
			shots++;
			$('.shots').text(shots);
		} else if ('.shots' == '.hits' && '.shots' == 12) {
		 	$('.shots').text('you win!');
		 } else {
			$('.shots').text('you used all of your bullets. ' + 'final score is ' + score + '%');
			$('.shots').css({'color':'#88D509','top':'-242px','left':'-563px','font-size':'50px','width':'auto','height':'134px'});
		 }						//top: -242px;   width: 260px; height: 134px;clear: right;left: -500px;font-size: 40px;width: auto;
		return shots;


	}

	function playHitSound(){
		var audio = $("#hitSound")[0];
		
  		audio.play();
		
	}
	
	//start button 
	//
	//
	
	//click on bird to change position
	//
	$('#bird').click(function(){
		
		
		countHits();
		flying();
		
		//removes html after the first click
		$('.timer').text(" ");
		
	});

	//count clicks when game starts function
	$('#container').click(function(){
		countShots();
	});

	/* Main Game Logic */

	// start button click; start timer
	$('#startButton').click(function(event){
	 		event.preventDefault();
	 		$('section').css('marginTop','-360px');
	 		
	 		// call timer function
	 		time();

	 		// call function to make first bird appear
	 		// var bird = $('#bird');
			// bird.addClass("bird");
			// bird.css('margin-left',rLeft);
	 		// flying();

	});

	// 

	}); // end document ready
	
	



