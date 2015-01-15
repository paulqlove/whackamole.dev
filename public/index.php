<?php
if(!empty($_POST)){
	$playerName = $_POST['Player'];
	
	
}
?>
<!DOCTYPE html>
<html>
<head>
	<title>Duck Hunt</title>
	<link rel="stylesheet" type="text/css" href="mole.css">
	<script src="jquery.min.js"></script>
</head>
<body>
	<h1></h1>
	<div id="container">
		<p class="timer"><p>
		
		<div id="bird"></div>
			
		<div id="welcomeBox">

		
		<section id="animate">
			<h1>Destroyer of Ducks</h1>
			<form method="POST" action="index.php">

				<div id="titleBox">
					
					<div class="intro">
						<th class="playerName">Enter Your Name</th>
						<input name="Player" type="text" placeholder="Player">
						<button type="Submit" value="Submit" id="nameButton" >Submit</button>
						<button id="startButton">Start</button>
					</div>
					<p id="playerWelcomeBanner">Hey <?php echo PHP_EOL . $playerName ?>, Are you ready to kill something?</p>
				</div>
			</form>
		</section>
		<audio id="hitSound">
			<source src="./sound/hit.mp3"></source>
		</audio>
		</div>
	</div>
	<div id="stats">
		
		<div id="playerId">
			<p>Player Name:<?php echo PHP_EOL . $playerName ?></p>
		</div>
		<div id="ducks" class="trackShots">
			<h4><p>Ducks</p></h4>
				<p class="hits"></p>
		</div>
		<div id="shotsTaken" class="trackShots">
			<h4><p>Shots</p></h4>
				<p class="shots">0</p>
		</div>
		<div id="time" class="trackShots">
			<h4><p>Time Left</p></h4>
				<p class="gameTime"></p>
		</div>
	</div>
	<script type="text/javascript" src="/mole.js"></script>

</body>
</html>