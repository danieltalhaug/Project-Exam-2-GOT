// JavaScript Document
// Fetch API and make it visible on the character selection screen. 
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

var apiList = {
	robbStark 			: "https://anapioficeandfire.com/api/characters/1880",
	sansaStark 			: "https://anapioficeandfire.com/api/characters/957",
	aryaStark 			: "https://anapioficeandfire.com/api/characters/148",
	jonSnow 			: "https://anapioficeandfire.com/api/characters/583",
	theonGreyjoy 		: "https://anapioficeandfire.com/api/characters/1022",
	tyrionLannister 	: "https://anapioficeandfire.com/api/characters/1052",
	stannisBaratheon 	: "https://anapioficeandfire.com/api/characters/1963",
	davosSeaworth 		: "https://anapioficeandfire.com/api/characters/1319",
	daenerysTargaryen 	: "https://anapioficeandfire.com/api/characters/1303",
	viserysTargaryen 	: "https://anapioficeandfire.com/api/characters/1079"
};

function getRobbStarkApi() {
	fetch(apiList.robbStark).then(response => {
		return response.json();
	}).then(result => {
		// Work with the JSON result here
		var heroNameNode = document.createElement("H3");
		var heroTitleNode = document.createElement("h4")
		
		var heroNameText = document.createTextNode(result.name);
		var heroTitleText = document.createTextNode(result.titles[0]);
		
		heroNameNode.appendChild(heroNameText);
		heroTitleNode.appendChild(heroTitleText);
		
		robbStarkCard.appendChild(heroNameNode);
		robbStarkCard.appendChild(heroTitleNode);
	}).catch(err => {
		console.log('Error, Something went wrong with fetching the Robb Stark API');
		// Backup in case of error
		var heroNameNode = document.createElement("H3");
		var heroTitleNode = document.createElement("h4")
		
		var heroNameText = document.createTextNode("Robb Stark");
		var heroTitleText = document.createTextNode("King in the north");
		
		heroNameNode.appendChild(heroNameText);
		heroTitleNode.appendChild(heroTitleText);
		
		robbStarkCard.appendChild(heroNameNode);
		robbStarkCard.appendChild(heroTitleNode);
	});
}
function getSansaStarkApi() {
	fetch(apiList.sansaStark).then(response => {
		return response.json();
	}).then(result => {
		// Work with the JSON result here
		var heroNameNode = document.createElement("H3");
		var heroTitleNode = document.createElement("h4")
		
		var heroNameText = document.createTextNode(result.name);
		var heroTitleText = document.createTextNode(result.aliases[0]);
		
		heroNameNode.appendChild(heroNameText);
		heroTitleNode.appendChild(heroTitleText);
		
		sansaStarkCard.appendChild(heroNameNode);
		sansaStarkCard.appendChild(heroTitleNode);
	}).catch(err => {
		console.log('Error, Something went wrong with fetching the Sansa Stark API');
		// Backup in case of error
		var heroNameNode = document.createElement("H3");
		var heroTitleNode = document.createElement("h4")
		
		var heroNameText = document.createTextNode("Arya Stark");
		var heroTitleText = document.createTextNode("Little Bird");
		
		heroNameNode.appendChild(heroNameText);
		heroTitleNode.appendChild(heroTitleText);
		
		sansaStarkCard.appendChild(heroNameNode);
		sansaStarkCard.appendChild(heroTitleNode);
	});
}
function getAryaStarkApi() {
	fetch(apiList.aryaStark).then(response => {
		return response.json();
	}).then(result => {
		// Work with the JSON result here
		var heroNameNode = document.createElement("H3");
		var heroTitleNode = document.createElement("h4")
		
		var heroNameText = document.createTextNode(result.name);
		var heroTitleText = document.createTextNode("The girl has no name");
		
		heroNameNode.appendChild(heroNameText);
		heroTitleNode.appendChild(heroTitleText);
		
		aryaStarkCard.appendChild(heroNameNode);
		aryaStarkCard.appendChild(heroTitleNode);
	}).catch(err => {
		console.log('Error, Something went wrong with fetching the Arya Stark API');
		// Backup in case of error
		var heroNameNode = document.createElement("H3");
		var heroTitleNode = document.createElement("h4")
		
		var heroNameText = document.createTextNode("Arya Stark");
		var heroTitleText = document.createTextNode("The girl has no name");
		
		heroNameNode.appendChild(heroNameText);
		heroTitleNode.appendChild(heroTitleText);
		
		aryaStarkCard.appendChild(heroNameNode);
		aryaStarkCard.appendChild(heroTitleNode);
	});
}
function getJonSnowApi() {
	fetch(apiList.jonSnow).then(response => {
		return response.json();
	}).then(result => {
		// Work with the JSON result here
		var heroNameNode = document.createElement("H3");
		var heroTitleNode = document.createElement("h4")
		
		var heroNameText = document.createTextNode(result.name);
		var heroTitleText = document.createTextNode(result.titles[0]);
		
		heroNameNode.appendChild(heroNameText);
		heroTitleNode.appendChild(heroTitleText);
		
		jonSnowCard.appendChild(heroNameNode);
		jonSnowCard.appendChild(heroTitleNode);
	}).catch(err => {
		console.log('Error, Something went wrong with fetching the Jon Snow API');
		// Backup in case of error
		var heroNameNode = document.createElement("H3");
		var heroTitleNode = document.createElement("h4")
		
		var heroNameText = document.createTextNode("Jon Snow");
		var heroTitleText = document.createTextNode("Lord Commander of the Night's Watch");
		
		heroNameNode.appendChild(heroNameText);
		heroTitleNode.appendChild(heroTitleText);
		
		jonSnowCard.appendChild(heroNameNode);
		jonSnowCard.appendChild(heroTitleNode);
	});
}
function getTheonGreyjoyApi() {
	fetch(apiList.theonGreyjoy).then(response => {
		return response.json();
	}).then(result => {
		// Work with the JSON result here
		var heroNameNode = document.createElement("H3");
		var heroTitleNode = document.createElement("h4")
		
		var heroNameText = document.createTextNode(result.name);
		var heroTitleText = document.createTextNode(result.aliases[3]);
		
		heroNameNode.appendChild(heroNameText);
		heroTitleNode.appendChild(heroTitleText);
		
		theonGreyjoyCard.appendChild(heroNameNode);
		theonGreyjoyCard.appendChild(heroTitleNode);
	}).catch(err => {
		console.log('Error, Something went wrong with fetching the Theon Greyjoy API');
		// Backup in case of error
		var heroNameNode = document.createElement("H3");
		var heroTitleNode = document.createElement("h4")
		
		var heroNameText = document.createTextNode("Theon Greyjoy");
		var heroTitleText = document.createTextNode("Theon Kinslayer");
		
		heroNameNode.appendChild(heroNameText);
		heroTitleNode.appendChild(heroTitleText);
		
		theonGreyjoyCard.appendChild(heroNameNode);
		theonGreyjoyCard.appendChild(heroTitleNode);
	});
}
function getTyrionLannisterApi() {
	fetch(apiList.tyrionLannister).then(response => {
		return response.json();
	}).then(result => {
		// Work with the JSON result here
		var heroNameNode = document.createElement("H3");
		var heroTitleNode = document.createElement("h4")
		
		var heroNameText = document.createTextNode(result.name);
		var heroTitleText = document.createTextNode(result.aliases[0]);
		
		heroNameNode.appendChild(heroNameText);
		heroTitleNode.appendChild(heroTitleText);
		
		tyrionLannisterCard.appendChild(heroNameNode);
		tyrionLannisterCard.appendChild(heroTitleNode);
	}).catch(err => {
		console.log('Error, Something went wrong with fetching the Tyrion Lannister API');
		// Backup in case of error
		var heroNameNode = document.createElement("H3");
		var heroTitleNode = document.createElement("h4")
		
		var heroNameText = document.createTextNode("Tyrion Lannister");
		var heroTitleText = document.createTextNode("The Imp");
		
		heroNameNode.appendChild(heroNameText);
		heroTitleNode.appendChild(heroTitleText);
		
		tyrionLannisterCard.appendChild(heroNameNode);
		tyrionLannisterCard.appendChild(heroTitleNode);
	});
}
function getStannisBaratheonApi() {
	fetch(apiList.stannisBaratheon).then(response => {
		return response.json();
	}).then(result => {
		// Work with the JSON result here
		var heroNameNode = document.createElement("H3");
		var heroTitleNode = document.createElement("h4")
		
		var heroNameText = document.createTextNode(result.name);
		var heroTitleText = document.createTextNode(result.aliases[0]);
		
		heroNameNode.appendChild(heroNameText);
		heroTitleNode.appendChild(heroTitleText);
		
		stannisBaratheonCard.appendChild(heroNameNode);
		stannisBaratheonCard.appendChild(heroTitleNode);
	}).catch(err => {
		console.log('Error, Something went wrong with fetching the Stannis Baratheon API');
		// Backup in case of error
		var heroNameNode = document.createElement("H3");
		var heroTitleNode = document.createElement("h4")
		
		var heroNameText = document.createTextNode("Stannis Baratheon");
		var heroTitleText = document.createTextNode("The king in the Narrow Sea");
		
		heroNameNode.appendChild(heroNameText);
		heroTitleNode.appendChild(heroTitleText);
		
		stannisBaratheonCard.appendChild(heroNameNode);
		stannisBaratheonCard.appendChild(heroTitleNode);
	});
}
function getDavosSeaworthApi() {
	fetch(apiList.davosSeaworth).then(response => {
		return response.json();
	}).then(result => {
		// Work with the JSON result here
		var heroNameNode = document.createElement("H3");
		var heroTitleNode = document.createElement("h4")
		
		var heroNameText = document.createTextNode(result.name);
		var heroTitleText = document.createTextNode(result.aliases[0]);
		
		heroNameNode.appendChild(heroNameText);
		heroTitleNode.appendChild(heroTitleText);
		
		davosSeaworthCard.appendChild(heroNameNode);
		davosSeaworthCard.appendChild(heroTitleNode);
	}).catch(err => {
		console.log('Error, Something went wrong with fetching the Davos Seaworth API');
		// Backup in case of error
		var heroNameNode = document.createElement("H3");
		var heroTitleNode = document.createElement("h4")
		
		var heroNameText = document.createTextNode("Davos Seaworth");
		var heroTitleText = document.createTextNode("Onion Knight");
		
		heroNameNode.appendChild(heroNameText);
		heroTitleNode.appendChild(heroTitleText);
		
		davosSeaworthCard.appendChild(heroNameNode);
		davosSeaworthCard.appendChild(heroTitleNode);
	});
}
function getDaenerysTargaryenApi() {
	fetch(apiList.daenerysTargaryen).then(response => {
		return response.json();
	}).then(result => {
		// Work with the JSON result here
		var heroNameNode = document.createElement("H3");
		var heroTitleNode = document.createElement("h4")
		
		var heroNameText = document.createTextNode(result.name);
		var heroTitleText = document.createTextNode(result.aliases[3]);
		
		heroNameNode.appendChild(heroNameText);
		heroTitleNode.appendChild(heroTitleText);
		
		daenerysTargaryenCard.appendChild(heroNameNode);
		daenerysTargaryenCard.appendChild(heroTitleNode);
	}).catch(err => {
		console.log('Error, Something went wrong with fetching the Danerys Targaryen API');
		// Backup in case of error
		var heroNameNode = document.createElement("H3");
		var heroTitleNode = document.createElement("h4")
		
		var heroNameText = document.createTextNode("Daenerys Targaryen");
		var heroTitleText = document.createTextNode("Mother of Dragons");
		
		heroNameNode.appendChild(heroNameText);
		heroTitleNode.appendChild(heroTitleText);
		
		daenerysTargaryenCard.appendChild(heroNameNode);
		daenerysTargaryenCard.appendChild(heroTitleNode);
	});
}
function getViserysTargaryenApi() {
	fetch(apiList.viserysTargaryen).then(response => {
		return response.json();
	}).then(result => {
		// Work with the JSON result here
		var heroNameNode = document.createElement("H3");
		var heroTitleNode = document.createElement("h4")
		
		var heroNameText = document.createTextNode(result.name);
		var heroTitleText = document.createTextNode(result.aliases[0]);
		
		heroNameNode.appendChild(heroNameText);
		heroTitleNode.appendChild(heroTitleText);
		
		viserysTargaryenCard.appendChild(heroNameNode);
		viserysTargaryenCard.appendChild(heroTitleNode);
	}).catch(err => {
		console.log('Error, Something went wrong with fetching the Viserys Targaryen API');
		// Backup in case of error
		var heroNameNode = document.createElement("H3");
		var heroTitleNode = document.createElement("h4")
		
		var heroNameText = document.createTextNode("Viserys Targaryen");
		var heroTitleText = document.createTextNode("The Beggar King");
		
		heroNameNode.appendChild(heroNameText);
		heroTitleNode.appendChild(heroTitleText);
		
		viserysTargaryenCard.appendChild(heroNameNode);
		viserysTargaryenCard.appendChild(heroTitleNode);
	});
}


// Call the functions
getRobbStarkApi();
getSansaStarkApi();
getAryaStarkApi();
getJonSnowApi();
getTheonGreyjoyApi();
getTyrionLannisterApi();
getStannisBaratheonApi();
getDavosSeaworthApi();
getDaenerysTargaryenApi();
getViserysTargaryenApi();
