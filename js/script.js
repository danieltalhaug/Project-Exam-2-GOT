// JavaScript Document

var player1Character = "",
	player1Position = 0;

var player2Character = "",
	player2Position = 0;

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
	characterSelectText = document.getElementById('characterSelectText');

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
characterSelectText.innerHTML = "Player 1, Please select your Hero."
// Character select functions. 
function selectRobbStark() {
	if ((player1Character.length === 0) && (player2Character.length === 0)) {
		// If player1character and player2character is zero set player 1 to character
		player1Character = "Robb Stark";
		robbStarkCard.style.filter = "grayscale(0)";
		characterSelectText.innerHTML = "Player 2, Please select your Hero."
	} else if ((player1Character.length > 0) && (player2Character.length === 0)) {
		// if player1character is greater than zero and player2character is zero set player 2 character
		player2Character = "Robb Stark";
		robbStarkCard.style.filter = "grayscale(0)";
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
		sansaStarkCard.style.filter = "grayscale(0)";
	} else if ((player1Character.length > 0) && (player2Character.length === 0)) {
		// if player1character is greater than zero and player2character is zero set player 2 character
		player2Character = "Sansa Stark";
		sansaStarkCard.style.filter = "grayscale(0)";
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
	} else if ((player1Character.length > 0) && (player2Character.length === 0)) {
		// if player1character is greater than zero and player2character is zero set player 2 character
		player2Character = "Arya Stark";
		aryaStarkCard.style.filter = "grayscale(0)";
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
	} else if ((player1Character.length > 0) && (player2Character.length === 0)) {
		// if player1character is greater than zero and player2character is zero set player 2 character
		player2Character = "Jon Snow";
		jonSnowCard.style.filter = "grayscale(0)";
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
	} else if ((player1Character.length > 0) && (player2Character.length === 0)) {
		// if player1character is greater than zero and player2character is zero set player 2 character
		player2Character = "Theon Greyjoy";
		theonGreyjoyCard.style.filter = "grayscale(0)";
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
	} else if ((player1Character.length > 0) && (player2Character.length === 0)) {
		// if player1character is greater than zero and player2character is zero set player 2 character
		player2Character = "Tyrion Lannister";
		tyrionLannisterCard.style.filter = "grayscale(0)";
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
		player1Character = "Tyrion Lannister";
		stannisBaratheonCard.style.filter = "grayscale(0)";
	} else if ((player1Character.length > 0) && (player2Character.length === 0)) {
		// if player1character is greater than zero and player2character is zero set player 2 character
		player2Character = "Tyrion Lannister";
		stannisBaratheonCard.style.filter = "grayscale(0)";
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
	} else if ((player1Character.length > 0) && (player2Character.length === 0)) {
		// if player1character is greater than zero and player2character is zero set player 2 character
		player2Character = "Davos Seaworth";
		davosSeaworthCard.style.filter = "grayscale(0)";
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
	} else if ((player1Character.length > 0) && (player2Character.length === 0)) {
		// if player1character is greater than zero and player2character is zero set player 2 character
		player2Character = "Daenerys Targaryen";
		daenerysTargaryenCard.style.filter = "grayscale(0)";
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
	} else if ((player1Character.length > 0) && (player2Character.length === 0)) {
		// if player1character is greater than zero and player2character is zero set player 2 character
		player2Character = "Viserys Targaryen";
		viserysTargaryenCard.style.filter = "grayscale(0)";
		startGame();
		closeOverlay();
	} else if ((player1Character.length > 0) && (player2Character.length > 0)) {
		// Do nothing
		return
	}
}