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
	
	function moveBird() {

		var bird = $('#bird');

		//random number for the left margin
		var randomLeft = Math.floor(Math.random()*100);
		var rLeft = randomLeft + '%';
		console.log(rLeft);
		//random number for the top margin 
		var randomTop = Math.floor(Math.random()*23);
		var rTop = randomTop + '%';
		console.log(rTop);
		bird.addClass("bird");
		bird.css('margin-left',rLeft);
		bird.css('margin-top',rTop);
		bird.animate({marginLeft: randomTop}, 1600);
		bird.animate({marginTop: randomLeft}, 2000);
	}

	
	
	//timer function
	function time(){

		var startTimer = setInterval(countDown, 1000);
		function countDown(){
			
			if(countStart !== 0){
				 countStart--;
				$('.timer').text(countStart);
				console.log(countStart);
			} else {
				var shoot = 'Shoot Now!';
				$('.timer').text(shoot);
				console.log('Shoot!');
				clearInterval(startTimer);
				moveBird();
				
				gameTime();

			}
		}
		
	}

	//countdown timer while shooting birds
	//
	//
	//
	function gameTime(){
		//count the time left
		var startGameTime = setInterval(timeLeft, 1000);
		
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
		
	}
	//
	//
	//count direct hits 
	function countHits(){
	
		playHitSound();
		if(hits != 8){
			hits++;
			$('.hits').text(hits);
		 }else if ('.hits' == 8) {

		  } else {
			$('.hits').text('you win!');
			$('.hits').css({'top':'-242px','right':'563px','font-size':'50px','width':'260px','height':'134px'});
		}
		return hits;
	}
	//count the shots taken
	//
	//
	function countShots(){
		
		if(shots != 12){
			shots++;
			$('.shots').text(shots);
		} else if ('.shots' == '.hits' && '.shots' == 12) {
		 	$('.shots').text('you win!');
		 } else {
			$('.shots').text('you used all of your bullets.');
			$('.shots').css({'top':'-242px','left':'-563px','font-size':'50px','width':'auto','height':'134px'});
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
	 $('#startButton').click(function(event){
	 		event.preventDefault();
	 		  $('section').css('marginTop','-360px');
	 		
	 		
	 		time();
	});	
	//click on bird to change position
	//
	$('#bird').click(function(){
		
		moveBird();
		countHits();
		//removes html after the first click
		$('.timer').text(" ");
		
		})

			//count clicks when game starts function
		$('#container').click(function(){
			countShots();
		})

	});
	
	



