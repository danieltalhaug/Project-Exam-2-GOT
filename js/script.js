// JavaScript Document

var player1Character = "",
	player1Position = 0;

var player2Character = "",
	player2Position = 0;

var playerPices = [];

var robbStarkCard = document.getElementById('robbStarkCard'),
	sansaStarkCard = document.getElementById('sansaStarkCard'),
	aryaStarkCard = document.getElementById('aryaStarkCard'),
	jonSnowCard = document.getElementById('jonSnowCard'),
	theonGreyjoyCard = document.getElementById('theonGreyjoyCard'),
	tyrionLannisterCard = document.getElementById('tyrionLannisterCard'),
	stannisBaratheonCard = document.getElementById('stannisBaratheonCard'),
	davosSeaworthCard = document.getElementById('davosSeaworthCard'),
	daenerysTargaryenCard = document.getElementById('daenerysTargaryenCard'),
	viserysTargaryenCard = document.getElementById('viserysTargaryenCard');

var characterOverlay = document.getElementById('characterSelection'),
	startingGametTxt = document.getElementById('startingGametTxt'),
	characterSelectText = document.getElementById('characterSelectText'),
	debugPlayer1Char = document.getElementById('player1char'),
	debugPlayer1Pos = document.getElementById('player1pos'),
	debugPlayer2Char = document.getElementById('player2char'),
	debugPlayer2Pos = document.getElementById('player2pos');

var tile1 = document.getElementById('tile1'),
	tile2 = document.getElementById('tile2'),
	tile3 = document.getElementById('tile3'),
	tile4 = document.getElementById('tile4'),
	tile5 = document.getElementById('tile5'),
	tile6 = document.getElementById('tile6'),
	tile7 = document.getElementById('tile7'),
	tile8 = document.getElementById('tile8'),
	tile9 = document.getElementById('tile9'),
	tile10 = document.getElementById('tile10'),
	tile11 = document.getElementById('tile11'),
	tile12 = document.getElementById('tile12'),
	tile13 = document.getElementById('tile13'),
	tile14 = document.getElementById('tile14'),
	tile15 = document.getElementById('tile15'),
	tile16 = document.getElementById('tile16'),
	tile17 = document.getElementById('tile17'),
	tile18 = document.getElementById('tile18'),
	tile19 = document.getElementById('tile19'),
	tile20 = document.getElementById('tile20'),
	tile21 = document.getElementById('tile21'),
	tile22 = document.getElementById('tile22'),
	tile23 = document.getElementById('tile23'),
	tile24 = document.getElementById('tile24'),
	tile25 = document.getElementById('tile25'),
	tile26 = document.getElementById('tile26'),
	tile27 = document.getElementById('tile27'),
	tile28 = document.getElementById('tile28'),
	tile29 = document.getElementById('tile29'),
	tile30 = document.getElementById('tile30');

// Feed debug box with information. This updates itself every 1 second. 
function debugMonitor() {
	setInterval(function(){
		debugPlayer1Char.innerHTML = "player 1 char: " + player1Character;
		debugPlayer1Pos.innerHTML = "player 1 pos : " + player1Position;
		debugPlayer2Char.innerHTML = "player 2 char: " + player2Character;
		debugPlayer2Pos.innerHTML = "player 2 pos : " + player2Position;
	}, 1000);
}

// Closes the Character selection overlay
function closeOverlay() {
	setTimeout(function() {
		// moves the overlay up by 4000pixels
		characterOverlay.style.transform = "translateY(-4000px)";
	}, 2000)
}
function startGame() {
	startingGametTxt.innerHTML = "Starting Game";
	player1Position = 1;
	player2Position = 1;
}
function selectHeroText() {
	if ((player1Character.length === 0) && (player2Character.length === 0)) {
		// If player1character and player2character is zero set player 1 to character
		characterSelectText.innerHTML = "Player 1, Please select your Hero."
	} else if ((player1Character.length > 0) && (player2Character.length === 0)) {
		// if player1character is greater than zero and player2character is zero set player 2 character
		characterSelectText.innerHTML = "Player 2, Please select your Hero."
	}
}
function spawnPlayerPieces() {
	var player1Icon = document.createElement('img');
	player1Icon.src = playerPices[0];
}
// Character select functions. 
function selectRobbStark() {
	if ((player1Character.length === 0) && (player2Character.length === 0)) {
		// If player1character and player2character is zero set player 1 to character
		player1Character = "Robb Stark";
		playerPices.push("images/icons/Robb-Stark-icon.svg");
		robbStarkCard.style.filter = "grayscale(0)";
		robbStarkCard.style.transform = "scale(.9)";
	} else if ((player1Character.length > 0) && (player2Character.length === 0)) {
		// if player1character is greater than zero and player2character is zero set player 2 character
		player2Character = "Robb Stark";
		playerPices.push("images/icons/Robb-Stark-icon.svg");
		robbStarkCard.style.filter = "grayscale(0)";
		robbStarkCard.style.transform = "scale(.9)";
		startGame();
		closeOverlay();
	} else if ((player1Character.length > 0) && (player2Character.length > 0)) {
		// Do nothing
		return
	}
}
function selectSansaStark() {
	if ((player1Character.length === 0) && (player2Character.length === 0)) {
		// If player1character and player2character is zero set player 1 to character
		player1Character = "Sansa Stark";
		playerPices.push("images/icons/Sansa-Stark-icon.svg");
		sansaStarkCard.style.filter = "grayscale(0)";
		sansaStarkCard.style.transform = "scale(.9)";
	} else if ((player1Character.length > 0) && (player2Character.length === 0)) {
		// if player1character is greater than zero and player2character is zero set player 2 character
		player2Character = "Sansa Stark";
		playerPices.push("images/icons/Sansa-Stark-icon.svg");
		sansaStarkCard.style.filter = "grayscale(0)";
		sansaStarkCard.style.transform = "scale(.9)";
		startGame();
		closeOverlay();
	} else if ((player1Character.length > 0) && (player2Character.length > 0)) {
		// Do nothing
		return
	}
}
function selectAryaStark() {
	if ((player1Character.length === 0) && (player2Character.length === 0)) {
		// If player1character and player2character is zero set player 1 to character
		player1Character = "Arya Stark";
		aryaStarkCard.style.filter = "grayscale(0)";
		aryaStarkCard.style.transform = "scale(.9)";
	} else if ((player1Character.length > 0) && (player2Character.length === 0)) {
		// if player1character is greater than zero and player2character is zero set player 2 character
		player2Character = "Arya Stark";
		aryaStarkCard.style.filter = "grayscale(0)";
		aryaStarkCard.style.transform = "scale(.9)";
		startGame();
		closeOverlay();
	} else if ((player1Character.length > 0) && (player2Character.length > 0)) {
		// Do nothing
		return
	}
}
function selectJonSnow() {
	if ((player1Character.length === 0) && (player2Character.length === 0)) {
		// If player1character and player2character is zero set player 1 to character
		player1Character = "Jon Snow";
		jonSnowCard.style.filter = "grayscale(0)";
		jonSnowCard.style.transform = "scale(.9)";
	} else if ((player1Character.length > 0) && (player2Character.length === 0)) {
		// if player1character is greater than zero and player2character is zero set player 2 character
		player2Character = "Jon Snow";
		jonSnowCard.style.filter = "grayscale(0)";
		jonSnowCard.style.transform = "scale(.9)";
		startGame();
		closeOverlay();
	} else if ((player1Character.length > 0) && (player2Character.length > 0)) {
		// Do nothing
		return
	}
}
function selectTheonGreyjoy() {
	if ((player1Character.length === 0) && (player2Character.length === 0)) {
		// If player1character and player2character is zero set player 1 to character
		player1Character = "Theon Greyjoy";
		theonGreyjoyCard.style.filter = "grayscale(0)";
		theonGreyjoyCard.style.transform = "scale(.9)";
	} else if ((player1Character.length > 0) && (player2Character.length === 0)) {
		// if player1character is greater than zero and player2character is zero set player 2 character
		player2Character = "Theon Greyjoy";
		theonGreyjoyCard.style.filter = "grayscale(0)";
		theonGreyjoyCard.style.transform = "scale(.9)";
		startGame();
		closeOverlay();
	} else if ((player1Character.length > 0) && (player2Character.length > 0)) {
		// Do nothing
		return
	}
}
function selectTyrionLannister() {
	if ((player1Character.length === 0) && (player2Character.length === 0)) {
		// If player1character and player2character is zero set player 1 to character
		player1Character = "Tyrion Lannister";
		tyrionLannisterCard.style.filter = "grayscale(0)";
		tyrionLannisterCard.style.transform = "scale(.9)";
	} else if ((player1Character.length > 0) && (player2Character.length === 0)) {
		// if player1character is greater than zero and player2character is zero set player 2 character
		player2Character = "Tyrion Lannister";
		tyrionLannisterCard.style.filter = "grayscale(0)";
		tyrionLannisterCard.style.transform = "scale(.9)";
		startGame();
		closeOverlay();
	} else if ((player1Character.length > 0) && (player2Character.length > 0)) {
		// Do nothing
		return
	}
}
function selectStannisBaratheon() {
	if ((player1Character.length === 0) && (player2Character.length === 0)) {
		// If player1character and player2character is zero set player 1 to character
		player1Character = "Stannis Baratheon";
		stannisBaratheonCard.style.filter = "grayscale(0)";
		stannisBaratheonCard.style.transform = "scale(.9)";
	} else if ((player1Character.length > 0) && (player2Character.length === 0)) {
		// if player1character is greater than zero and player2character is zero set player 2 character
		player2Character = "Stannis Baratheon";
		stannisBaratheonCard.style.filter = "grayscale(0)";
		stannisBaratheonCard.style.transform = "scale(.9)";
		startGame();
		closeOverlay();
	} else if ((player1Character.length > 0) && (player2Character.length > 0)) {
		// Do nothing
		return
	}
}
function selectDavosSeaworth() {
	if ((player1Character.length === 0) && (player2Character.length === 0)) {
		// If player1character and player2character is zero set player 1 to character
		player1Character = "Davos Seaworth";
		davosSeaworthCard.style.filter = "grayscale(0)";
		davosSeaworthCard.style.transform = "scale(.9)";
	} else if ((player1Character.length > 0) && (player2Character.length === 0)) {
		// if player1character is greater than zero and player2character is zero set player 2 character
		player2Character = "Davos Seaworth";
		davosSeaworthCard.style.filter = "grayscale(0)";
		davosSeaworthCard.style.transform = "scale(.9)";
		startGame();
		closeOverlay();
	} else if ((player1Character.length > 0) && (player2Character.length > 0)) {
		// Do nothing
		return
	}
}
function selectDaenerysTargaryen() {
	if ((player1Character.length === 0) && (player2Character.length === 0)) {
		// If player1character and player2character is zero set player 1 to character
		player1Character = "Daenerys Targaryen";
		daenerysTargaryenCard.style.filter = "grayscale(0)";
		daenerysTargaryenCard.style.transform = "scale(.9)";
	} else if ((player1Character.length > 0) && (player2Character.length === 0)) {
		// if player1character is greater than zero and player2character is zero set player 2 character
		player2Character = "Daenerys Targaryen";
		daenerysTargaryenCard.style.filter = "grayscale(0)";
		daenerysTargaryenCard.style.transform = "scale(.9)";
		startGame();
		closeOverlay();
	} else if ((player1Character.length > 0) && (player2Character.length > 0)) {
		// Do nothing
		return
	}
}
function selectViserysTargaryen() {
	if ((player1Character.length === 0) && (player2Character.length === 0)) {
		// If player1character and player2character is zero set player 1 to character
		player1Character = "Viserys Targaryen";
		viserysTargaryenCard.style.filter = "grayscale(0)";
		viserysTargaryenCard.style.transform = "scale(.9)";
	} else if ((player1Character.length > 0) && (player2Character.length === 0)) {
		// if player1character is greater than zero and player2character is zero set player 2 character
		player2Character = "Viserys Targaryen";
		viserysTargaryenCard.style.filter = "grayscale(0)";
		viserysTargaryenCard.style.transform = "scale(.9)";
		startGame();
		closeOverlay();
	} else if ((player1Character.length > 0) && (player2Character.length > 0)) {
		// Do nothing
		return
	}
}

// Call functions here
selectHeroText();
debugMonitor();