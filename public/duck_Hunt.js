$(document).ready(function(){
	/*GAME VARIBLES HERE*/
	//////////////////////
	//////////////////////
	
	var readyCountStart = 4;
	var shots = 0;
	var hits = 0;
	//countdown for the game
	
	var gameCounter = 15;
	var replacebirdID;
	var numberGenerator;

	
	/* GAME FUNCTIONS HERE */
	//////////////////////
	//////////////////////
	//start timer to begin the game function
	//
	//
	function time(){
		var startTimer = setInterval(function(){
			
				if(readyCountStart != 0){
					readyCountStart--;
					console.log(readyCountStart);
					$('.timer').text(readyCountStart);
				} else {
					
					var shoot = 'Shoot Now';
					$('.timer').text(shoot);
					//Clear start timer
					clearInterval(startTimer);
					//start main game timer
					gameTime();
					birdStartPoint();
				}
			
		}, 1000);
	
	}

	//countdown timer while shooting birds
	//////////////////
	//////////////////
	function gameTime(){
		//start the countdown time 
		var startGameTime = setInterval(function(){
			
			if (gameCounter !== 0) {
				gameCounter--;

				$('.gameTime').text(gameCounter);
			} else if (hits >= 8 || shots >= 12) {
				clearInterval(startGameTime);
			} else {
				$('.gameTime').text('You ran out of time! Game Over')
		 		$('.gameTime').css({'top':'-242px','right':'503px','font-size':'50px','width':'1000px','height':'134px'});
			}
		}, 1000);
		
	}
	
	//function to generate random number for divs
	////////////////////
	//////////////////
	function birdStartPoint(){

		var numberGenerator = Math.floor(Math.random()*9)+1;
		console.log(numberGenerator);
		//number generated will be between 1 -9 
		//the classes of the divs are numbered 1 - 9
		var replacebirdID = '#' + 'start' + numberGenerator;
		console.log(replacebirdID);
		
		
		$(replacebirdID).css('visibility','visible');
		//make the bird  appear in the appropriate div and fly right or left
		if (numberGenerator > 5) {
			
			$(replacebirdID).animate({top: '-=350', left: '-=350'},2200);
			
				
		

		
			
		} else {
			console.log('fly right');
			$(replacebirdID).css({'visibility':'visible','transform':'scaleX(1)'});
			$(replacebirdID).animate({top: '-=350', left: '+=350'},1200);
		}
		return replacebirdID;
	}
	//count the direct hits
	function countHits() {

		playHitSound();
		if(hits != 8){
			hits++;
			$('.hits').text(hits);
		} else if ('.hits' == 8) {
			//do nothing
		} else {
			$('.hits').text('you win!');
			$('.hits').css({'color':'#88D509','top':'-242px','right':'563px','font-size':'50px','width':'260px','height':'134px'});
		}
	}
	//make bird hidden again and reset css
	
	//play the hit sound everytime bird is hit
	/////////////////////
	////////////////////
	function playHitSound(){
		 var audio = $("#hitSound")[0];
		
  		audio.play();
		
	}
	function startScreenSong(){
		var audio = $('#countDownTimer')[0];
		audio.play();
	}
	/*MAIN GAME LOGIC*/
	//////////////////
	/////////////////

	//CLICK START BUTTON THAT MAKES SECTION DISSAPPEAR
	$('#startButton').click(function(event){
		event.preventDefault();
		$('section').css('marginTop','-360px');
		
		//call timer function to start game
		//STARTS THE GET READY TIMER	
		time();

	});
	
	//TIMER HITS 0 AND
	
	//*ACTIVATE BIRD*
	//RANDOM NUMBER GENERATOR(1-9) FOR THE ARRAY OF BIRDS
	//THE BIRD APPEARS AND FLYS
	
	
	//GAME TIMER STARTS HERE AND COUNTS DOWN TO 0
	
	
	//*CLICK ON BIRD*
	//
	//
	//WHEN BIRD IS CLICKED ON,
	//AUDIO SOUND OF HIT IS TRIGGRED 
	//ANIMATE BIRD TO DROP TO HORIZON LIKE ITS DEAD
	$('.startHere').click(function(){
		//will have to do animations in csss and call upon that when button is clicked and remove it with a jquery funciton



		
		countHits();
		birdStartPoint();

	    $(this).css({top: '0', left: '0' , visibility: 'hidden'});

		//removes html after the first click
		$('.timer').text(" ");
		
	});

	//IF CLICK HAPPENS AND NOT ON BIRD THEN TRIGGER BIRD TO REVERSE COURSE 
	//AFTER TWO MISSES
	//GENERATE A NEW  RANDOM BIRD

	//*ACTIVATE BIRD*
	//RANDOM NUMBER GENERATOR(1-9) FOR THE ARRAY OF BIRDS 
	//A NEW BIRD APPEARS IN A RANDOM SPOT ON HORIZON AND FLYS

	//REPEAT *CLICK ON BIRD* AND *ACTIVATE BIRD*
	//UNTIL TIME RUNS OUT
	//or
	//UNTIL BULLETS RUN OUT
	//or
	//UNTIL MAX NUMBER OF BIRDS IS REACHED

	// *TIME RUNS OUT*
	//PRINT MESSAGE ON SCREEN THAT ALERTS USER THAT TIME IS UP

	//*BULLETS RUN OUT*
	//PRINT MESSAGE ON SCREEN THAT GAME IS OVER B/C THEY RAN OUT OF SHOTS

	//*KILLED PRESET NUMBER OF BIRDS*
	//PRINT MESSAGE ON SCREEN THAT GAME IS WON AND PRINT A SCORE HITS/SHOTS * 100 

	
	startScreenSong();
});