// JavaScript Document

var player1Character = "",
	player1Position = 0,
	player1Throws = 0;


var player2Character = "",
	player2Position = 0,
	player2Throws = 0;

// playerPieces gets it's content from the selectCharacter functions when pressed. The content is used in the spawnPlayer1&2Piece functions. 
var playerPieces = [],
	enableDebug = true;

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
	debugBox = document.getElementById('debugBox'),
	debugPlayer1Char = document.getElementById('player1char'),
	debugPlayer1Pos = document.getElementById('player1pos'),
	debugPlayer2Char = document.getElementById('player2char'),
	debugPlayer2Pos = document.getElementById('player2pos'),
	debugArray0 = document.getElementById('array0'),
	debugArray1 = document.getElementById('array1'),
	headerInfo = document.getElementById('headerInfo'),
	trapText = document.getElementById('trapInfo'),
	dice = document.getElementById('dice');

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

var traps = {
	trap7: {
		title		: "Frostbite!",
		description	: "It's too cold in the north. Your army is freezing and soldiers are getting frostbite. Some soldiers had to have their toes and fingers removed. Take two steps back.",
		punishment	: 2
	},
	trap13: {
		title		: "Rough Seas",
		description	: "The seas cannot be tamed. Strong winds and high waves caused some of your ships to crash and sink. Take four steps back.",
		punishment	: 4
	},
	trap19: {
		title		: "Greyscale!",
		description	: "Some men contracted Greyscale while making their way through the swamp. There is no time to find a cure and the soldiers had to be shunned. Take three steps back.",
		punishment	: 3
	},
	trap26: {
		title		: "Starvation!",
		description	: "It's so hot that your food supplies has started to rotten. Some soldiers decided to eat anyways and got sick while the rest refused and are now starving. Take five steps back.",
		punishment	: 5
	}
};
// Feed debug box with information. This updates itself every 1 second. 
function debugMonitor() {
	debugPlayer1Char.innerHTML = "player 1 char: " + player1Character;
	debugPlayer1Pos.innerHTML = "player 1 pos : " + player1Position;
	debugPlayer2Char.innerHTML = "player 2 char: " + player2Character;
	debugPlayer2Pos.innerHTML = "player 2 pos : " + player2Position;
	debugArray0.innerHTML = playerPieces[0];
	debugArray1.innerHTML = playerPieces[1];
}
// Checks if the enableDebug variable is set to true. If it is the gameBox display is set to block, if not it's set to none. 
function enableDebugMonitor() {
	if (enableDebug === true) {
		debugBox.style.display = "block";
		debugMonitor();
	} else {
		debugBox.style.display = "none";
	}
}
// Closes the Character selection overlay
function closeOverlay() {
	setTimeout(function() {
		// moves the overlay up by 4000pixels
		characterOverlay.style.transform = "translateY(-4000px)";
	}, 2000)
}
// Starts the game by adding the starting game text line to the character selection overlay,
// sets the player 1 and 2 position to 1 and calls the spawnplayer1 and 2 piece functions. 
function startGame() {
	startingGametTxt.innerHTML = "Starting Game";
	player1Position = 1;
	player2Position = 1;
	spawnPlayer1Piece();
	spawnPlayer2Piece();
}

// Rolls a dice and moves the players on the board. 
function rollDice() {
	var randomNumber = Math.floor(Math.random() * 6) + 1;
	var dice = document.getElementById('dice');
	dice.innerHTML = randomNumber;
	if (player1Throws === player2Throws) {
		player1Position = player1Position + randomNumber;
		if(randomNumber != 6) {
			player1Throws++;
		}
	} else {
		if (player1Throws > player2Throws) {
			player2Position = player2Position + randomNumber;
			if(randomNumber != 6) {
				player2Throws++;
			}
		}
		if(player1Position >= 30) {
			player1Position = 30;
		}
		if(player2Position >= 30) {
			player2Position = 30;
		}
	}
}
// Adds instructions to the player selection overlay based on the length of the player1 and player 2 character variables. 
function selectHeroText() {
	if ((player1Character.length === 0) && (player2Character.length === 0)) {
			characterSelectText.innerHTML = "Player 1, Please select your Hero."
		} else if ((player1Character.length > 0) && (player2Character.length === 0)) {
			characterSelectText.innerHTML = "Player 2, Please select your Hero."
		}
}
// Displays text and moves gamepieces based on position. Information comes from the traps object.
// I tried to subtract traps.trap7.punishment from player1&2position but it wouldn't work.
function trapTiles() {
	if (player1Position === 7) {
		trapText.innerHTML = traps.trap7.title + " " + traps.trap7.description;
		setTimeout(function() {
			player1Position = 5;
		},1500)
	}
	if (player1Position === 13) {
		trapText.innerHTML = traps.trap13.title + " " + traps.trap13.description;
		setTimeout(function() {
			player1Position = 9;
		},1500)
	}
	if (player1Position === 19) {
		trapText.innerHTML = traps.trap19.title + " " + traps.trap19.description;
		setTimeout(function() {
			player1Position = 16;
		},1500)
	}
	if (player1Position === 26) {
		trapText.innerHTML = traps.trap26.title + " " + traps.trap26.description;
		setTimeout(function() {
			player1Position = 21;
		},1500)
	}
		if (player2Position === 7) {
		trapText.innerHTML = traps.trap7.title + " " + traps.trap7.description;
		setTimeout(function() {
			player2Position = 5;
		},1500)
	}
	if (player2Position === 13) {
		trapText.innerHTML = traps.trap13.title + " " + traps.trap13.description;
		setTimeout(function() {
			player2Position = 9;
		},1500)
	}
	if (player2Position === 19) {
		trapText.innerHTML = traps.trap19.title + " " + traps.trap19.description;
		setTimeout(function() {
			player2Position = 16;
		},1500)
	}
	if (player2Position === 26) {
		trapText.innerHTML = traps.trap26.title + " " + traps.trap26.description;
		setTimeout(function() {
			player2Position = 21;
		},1500)
	}
}
// Character select functions. These checks if the player1 and player2 character variables are empty
// if they are then they will be set to a character. When a character tile is pressed the tile will change from
// grayscale to coloured and the image path for the game piece icons gets pushed into the playerPieces array so that the
// Icons can spawn in on the game board. If both player 1 and player 2 variables are empty then nothing will happen. 
function selectRobbStark() {
	if ((player1Character.length === 0) && (player2Character.length === 0)) {
		// If player1character and player2character is zero set player 1 to character
		player1Character = "Robb Stark";
		playerPieces.push("images/icons/Robb-Stark-icon.svg");
		robbStarkCard.style.filter = "grayscale(0)";
		robbStarkCard.style.transform = "scale(.9)";
	} else if ((player1Character.length > 0) && (player2Character.length === 0)) {
		// if player1character is greater than zero and player2character is zero set player 2 character
		player2Character = "Robb Stark";
		playerPieces.push("images/icons/Robb-Stark-icon.svg");
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
		playerPieces.push("images/icons/Sansa-Stark-icon.svg");
		sansaStarkCard.style.filter = "grayscale(0)";
		sansaStarkCard.style.transform = "scale(.9)";
	} else if ((player1Character.length > 0) && (player2Character.length === 0)) {
		// if player1character is greater than zero and player2character is zero set player 2 character
		player2Character = "Sansa Stark";
		playerPieces.push("images/icons/Sansa-Stark-icon.svg");
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
		playerPieces.push("images/icons/Arya-Stark-Icon.svg");
		aryaStarkCard.style.filter = "grayscale(0)";
		aryaStarkCard.style.transform = "scale(.9)";
	} else if ((player1Character.length > 0) && (player2Character.length === 0)) {
		// if player1character is greater than zero and player2character is zero set player 2 character
		player2Character = "Arya Stark";
		playerPieces.push("images/icons/Arya-Stark-Icon.svg");
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
		playerPieces.push("images/icons/Jon-Snow-icon.svg");
		jonSnowCard.style.filter = "grayscale(0)";
		jonSnowCard.style.transform = "scale(.9)";
	} else if ((player1Character.length > 0) && (player2Character.length === 0)) {
		// if player1character is greater than zero and player2character is zero set player 2 character
		player2Character = "Jon Snow";
		playerPieces.push("images/icons/Jon-Snow-icon.svg");
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
		playerPieces.push("images/icons/Theon-Greyjoy-icon.svg");
		theonGreyjoyCard.style.filter = "grayscale(0)";
		theonGreyjoyCard.style.transform = "scale(.9)";
	} else if ((player1Character.length > 0) && (player2Character.length === 0)) {
		// if player1character is greater than zero and player2character is zero set player 2 character
		player2Character = "Theon Greyjoy";
		playerPieces.push("images/icons/Theon-Greyjoy-icon.svg");
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
		playerPieces.push("images/icons/Tyrion-Lannister-icon.svg");
		tyrionLannisterCard.style.filter = "grayscale(0)";
		tyrionLannisterCard.style.transform = "scale(.9)";
	} else if ((player1Character.length > 0) && (player2Character.length === 0)) {
		// if player1character is greater than zero and player2character is zero set player 2 character
		player2Character = "Tyrion Lannister";
		playerPieces.push("images/icons/Tyrion-Lannister-icon.svg");
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
		playerPieces.push("images/icons/Stannis-Baratheon-icon.svg");
		stannisBaratheonCard.style.filter = "grayscale(0)";
		stannisBaratheonCard.style.transform = "scale(.9)";
	} else if ((player1Character.length > 0) && (player2Character.length === 0)) {
		// if player1character is greater than zero and player2character is zero set player 2 character
		player2Character = "Stannis Baratheon";
		playerPieces.push("images/icons/Stannis-Baratheon-icon.svg");
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
		playerPieces.push("images/icons/Davos-Seaworth-icon.svg");
		davosSeaworthCard.style.filter = "grayscale(0)";
		davosSeaworthCard.style.transform = "scale(.9)";
	} else if ((player1Character.length > 0) && (player2Character.length === 0)) {
		// if player1character is greater than zero and player2character is zero set player 2 character
		player2Character = "Davos Seaworth";
		playerPieces.push("images/icons/Davos-Seaworth-icon.svg");
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
		playerPieces.push("images/icons/Daenerys-Targarian-icon.svg");
		daenerysTargaryenCard.style.filter = "grayscale(0)";
		daenerysTargaryenCard.style.transform = "scale(.9)";
	} else if ((player1Character.length > 0) && (player2Character.length === 0)) {
		// if player1character is greater than zero and player2character is zero set player 2 character
		player2Character = "Daenerys Targaryen";
		playerPieces.push("images/icons/Daenerys-Targarian-icon.svg");
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
		playerPieces.push("images/icons/Viserys-Targarian-icon.svg");
		viserysTargaryenCard.style.filter = "grayscale(0)";
		viserysTargaryenCard.style.transform = "scale(.9)";
	} else if ((player1Character.length > 0) && (player2Character.length === 0)) {
		// if player1character is greater than zero and player2character is zero set player 2 character
		player2Character = "Viserys Targaryen";
		playerPieces.push("images/icons/Viserys-Targarian-icon.svg");
		viserysTargaryenCard.style.filter = "grayscale(0)";
		viserysTargaryenCard.style.transform = "scale(.9)";
		startGame();
		closeOverlay();
	} else if ((player1Character.length > 0) && (player2Character.length > 0)) {
		// Do nothing
		return
	}
}
// Spawns in and moves the player pieces based on player 1 and 2 position. The function uses the playerPieces array 
// to spawn in the selected characters icons. 
function spawnPlayer1Piece() {	
	var player1node = document.createElement('span');
	var player1icon = document.createElement('img');
	player1icon.src = playerPieces[0];
	player1node.appendChild(player1icon);
	tile1.appendChild(player1node);
	
	setInterval(function() {
		switch (true) {
			case player1Position === 1:
				tile1.appendChild(player1node);
				break;
			case player1Position === 2:
				tile2.appendChild(player1node);
				break;
			case player1Position === 3:
				tile3.appendChild(player1node);
				break;
			case player1Position === 4:
				tile4.appendChild(player1node);
				break;
			case player1Position === 5:
				tile5.appendChild(player1node);
				break;
			case player1Position === 6:
				tile6.appendChild(player1node);
				break;
			case player1Position === 7:
				tile7.appendChild(player1node);
				break;
			case player1Position === 8:
				tile8.appendChild(player1node);
				break;
			case player1Position === 9:
				tile9.appendChild(player1node);
				break;
			case player1Position === 10:
				tile10.appendChild(player1node);
				break;
			case player1Position === 11:
				tile11.appendChild(player1node);
				break;
			case player1Position === 12:
				tile12.appendChild(player1node);
				break;
			case player1Position === 13:
				tile13.appendChild(player1node);
				break;
			case player1Position === 14:
				tile14.appendChild(player1node);
				break;
			case player1Position === 15:
				tile15.appendChild(player1node);
				break;
			case player1Position === 16:
				tile16.appendChild(player1node);
				break;
			case player1Position === 17:
				tile17.appendChild(player1node);
				break;
			case player1Position === 18:
				tile18.appendChild(player1node);
				break;
			case player1Position === 19:
				tile19.appendChild(player1node);
				break;
			case player1Position === 20:
				tile20.appendChild(player1node);
				break;
			case player1Position === 21:
				tile21.appendChild(player1node);
				break;
			case player1Position === 22:
				tile22.appendChild(player1node);
				break;
			case player1Position === 23:
				tile23.appendChild(player1node);
				break;
			case player1Position === 24:
				tile24.appendChild(player1node);
				break;
			case player1Position === 25:
				tile25.appendChild(player1node);
				break;
			case player1Position === 26:
				tile26.appendChild(player1node);
				break;
			case player1Position === 27:
				tile27.appendChild(player1node);
				break;
			case player1Position === 28:
				tile28.appendChild(player1node);
				break;
			case player1Position === 29:
				tile29.appendChild(player1node);
				break;
			case player1Position === 30:
				tile30.appendChild(player1node);
				break;
		}
	}, 1000)
}
function spawnPlayer2Piece() {
	var player2node = document.createElement('span');
	var player2icon = document.createElement('img');
	player2icon.src = playerPieces[1];
	player2node.appendChild(player2icon);
	
	setInterval(function() {
		switch (true) {
			case player2Position === 1:
				tile1.appendChild(player2node);
				break;
			case player2Position === 2:
				tile2.appendChild(player2node);
				break;
			case player2Position === 3:
				tile3.appendChild(player2node);
				break;
			case player2Position === 4:
				tile4.appendChild(player2node);
				break;
			case player2Position === 5:
				tile5.appendChild(player2node);
				break;
			case player2Position === 6:
				tile6.appendChild(player2node);
				break;
			case player2Position === 7:
				tile7.appendChild(player2node);
				break;
			case player2Position === 8:
				tile8.appendChild(player2node);
				break;
			case player2Position === 9:
				tile9.appendChild(player2node);
				break;
			case player2Position === 10:
				tile10.appendChild(player2node);
				break;
			case player2Position === 11:
				tile11.appendChild(player2node);
				break;
			case player2Position === 12:
				tile12.appendChild(player2node);
				break;
			case player2Position === 13:
				tile13.appendChild(player2node);
				break;
			case player2Position === 14:
				tile14.appendChild(player2node);
				break;
			case player2Position === 15:
				tile15.appendChild(player2node);
				break;
			case player2Position === 16:
				tile16.appendChild(player2node);
				break;
			case player2Position === 17:
				tile17.appendChild(player2node);
				break;
			case player2Position === 18:
				tile18.appendChild(player2node);
				break;
			case player2Position === 19:
				tile19.appendChild(player2node);
				break;
			case player2Position === 20:
				tile20.appendChild(player2node);
				break;
			case player2Position === 21:
				tile21.appendChild(player2node);
				break;
			case player2Position === 22:
				tile22.appendChild(player2node);
				break;
			case player2Position === 23:
				tile23.appendChild(player2node);
				break;
			case player2Position === 24:
				tile24.appendChild(player2node);
				break;
			case player2Position === 25:
				tile25.appendChild(player2node);
				break;
			case player2Position === 26:
				tile26.appendChild(player2node);
				break;
			case player2Position === 27:
				tile27.appendChild(player2node);
				break;
			case player2Position === 28:
				tile28.appendChild(player2node);
				break;
			case player2Position === 29:
				tile29.appendChild(player2node);
				break;
			case player2Position === 30:
				tile30.appendChild(player2node);
				break;
		}
	}, 1000)
}
// Functions called in the gameLoop function will run over and over. 
function gameLoop() {
	setInterval(function() {
		selectHeroText();
		enableDebugMonitor();
		debugMonitor();
		trapTiles();
	}, 500)
}

// Call functions here
gameLoop();