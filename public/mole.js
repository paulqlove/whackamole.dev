$(document).ready(function(){
		var count = 0;
		var countStart = 6;
		var shots = 0;
		var hits = 0;

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
			}
		}
		
	}
	//count direct hits 
	function countHits(){
		
		if(hits != 10){
			hits++;
			$('.hits').text(hits);
		} else {
			$('.hits').text('you win!');
			$('.hits').css({'top':'-242px','right':'563px','font-size':'50px','width':'260px','height':'134px'});
		}
		return hits;
	}
	//count the shots taken
	function countShots(){
		
		if(shots != 14){
			shots++;
			$('.shots').text(shots);
		} else {
			$('.shots').text('you lose');
			$('.shots').css({'top':'-242px','left':'563px','font-size':'50px','width':'260px','height':'134px'});
		}
		return shots;
	}
	//count clicks when game starts function
	$('#container').click(function(){
		countShots();
	})
	//start button 
	 $('button').click(function(){
	 		
	 		time();
	 		$(this).animate({opacity: .25});
	});	
	//click on bird to change position
	$('#bird').click(function(){
		
		moveBird();
		countHits();
		//removes html after the first click
		$('.timer').text(" ");
		
	})

	});
	
	



