// A Password Generator .website
// by Kristian Windsor



//
// declare variables
//
var settings = {
	"hasGenerated": false,
	"hasChangedSettings": false,
	"isMobile": false,
	"wordStructure": Number(document.getElementById('wordStructure').value),
	"passLength": Number(document.getElementById('length').value),
	"passwordHTMLTag": ["input","input","input"]
};
var count = {
	"generateButtonClicks": 0,
	"generatePasswordAttempt": 0,
};
var shortcuts = {
	"alphabet": "abcdefghijklmnopqrstuvwxyz",
	"symbols": "!@#$&+=-",
	"allChars": ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','0','1','2','3','4','5','6','7','8','9']
};
var words = {
	"verbs": ['get','see','need','know','find','take','want','learn','become','include','thank','provide','create','add','choose','develop','grow','allow','supply','bring','improve','enjoy','perform','decide','protect','require','write','avoid','prepare','build','achieve','believe','receive','seem','discuss','realize','contain','follow','refer','solve','prefer','prevent','ensure','expect','invest','speak','appear','explain','explore','involve','lose','afford','agree','hear','remain','apply','forget','rely','vary','obtain','accept','depend','enter','happen','suggest','survive','compare','imagine','manage','differ','expand','prove','react','relax','replace','borrow','earn','enable','operate','reflect','send','assume','engage','enhance','examine','install','intend','relate','settle','assure','attract','owe','succeed','suffer','throw','acquire','adapt','adjust','argue','arise','confirm','justify','possess','relieve','retain','shut','compete','consult','deliver','extend','qualify','retire','weigh','arrive','attach','behave','ignore','imply','insist','pursue','specify','warn','accuse','admire','admit','adopt','approve','attend','belong','commit','deserve','destroy','propose','remind','shall','submit','suppose','be','have','use','make','look','help','go','being','think','read','keep','start','give','play','feel','put','set','change','say','cut','show','try','check','call','move','pay','let','turn','ask','buy','guard','hold','offer','travel','cook','dance','excuse','live','deal','mean','fall','produce','search','talk','upset','tell','cost','drive','support','remove','return','run','reserve','leave','reach','rest','serve','watch','charge','break','stay','visit','cover','report','walk','pick','lift','mix','stop','teach','concern','fly','born','gain','save','stand','fail','lead','listen','worry','express','handle','meet','release','sell','finish','press','ride','spread','spring','wait','display','flow','hit','shoot','touch','cancel','cry','dump','push','select','die','eat','fill','jump','kick','pass','pitch','treat'],
	"adjectives": ['used','every','large','popular','able','basic','known','various','several','united','hot','useful','mental','scared','old','similar','healthy','medical','federal','entire','strong','actual','poor','happy','cute','helpful','recent','willing','nice','serious','huge','rare','typical','aware','global','legal','capable','foreign','hungry','severe','unusual','famous','pure','afraid','obvious','careful','latter','unhappy','boring','eastern','logical','strict','civil','former','massive','unfair','visible','alive','angry','lucky','sorry','ugly','anxious','curious','inner','sexual','sudden','unable','weak','wooden','asleep','decent','guilty','lonely','mad','nervous','odd','tall','tiny','more','some','one','all','many','most','other','such','even','new','just','good','any','each','much','own','great','another','same','few','free','right','still','best','public','human','both','local','sure','better','general','enough','long','small','less','high','certain','little','common','next','simple','hard','past','big','real','major','current','left','least','natural','short','last','single','main','lower','open','special','working','true','whole','clear','dry','easy','cold','full','low','primary','worth','present','close','green','late','fit','glad','proper','complex','content','due','middle','regular','fast','wide','active','safe','visual','wrong','ago','quick','ready','white','direct','extra','junior','pretty','unique','classic','final','overall','private','western','alone','perfect','bright','broad','flat','rich','warm','young','heavy','correct','leading','slow','clean','fresh','normal','secret','tough','brown','cheap','deep','secure','thin','cool','extreme','exact','fair','fine','formal','remote','total','vast','lost','smooth','dark','double','equal','firm','minor','raw','soft','solid','weird','amazing','annual','busy','dead','false','round','sharp','thick','wise','initial','narrow','nearby','proud','wild','adult','apart','brief','crazy','prior','rough','sad','sick','strange','illegal','loud','mobile','nasty','royal','senior','super','tight','upper','yellow','funny','gross','ill','spare','sweet','usual','brave','calm','dirty'],
	"nouns": ['people','history','way','art','world','map','two','family','health','system','meat','year','thanks','music','person','reading','method','data','food','theory','law','bird','problem','control','power','ability','love','science','library','nature','fact','product','idea','area','society','story','media','thing','oven','safety','quality','player','variety','video','week','country','exam','movie','physics','policy','series','thought','basis','army','camera','freedom','paper','child','month','truth','writing','article','goal','news','fishing','growth','income','user','failure','meaning','teacher','night','disease','disk','energy','nation','road','role','soup','success','math','moment','event','student','wood','office','unit','context','driver','flight','length','cell','dealer','finding','lake','member','message','phone','scene','concept','death','housing','mood','woman','advice','blood','effort','opinion','payment','reality','skill','wealth','city','county','estate','heart','photo','recipe','studio','topic','passion','setting','ad','college','debt','memory','aspect','storage','alcohol','highway','loss','steak','union','cancer','entry','mixture','region','virus','actor','device','drama','engine','hotel','owner','tension','anxiety','bath','bread','climate','emotion','guest','height','mall','manager','sample','cousin','editor','guitar','leader','mom','outcome','revenue','session','singer','tennis','basket','bonus','cabinet','church','clothes','coffee','dinner','hair','lab','mud','orange','poetry','police','queen','ratio','sector','song','tooth','town','vehicle','volume','wife','airport','chapter','error','farmer','gate','girl','hall','meal','pie','poem','river','son','speech','tea','village','warning','winner','worker','writer','breath','chest','cookie','courage','dad','desk','garbage','insect','king','ladder','menu','piano','potato','salad','sister','tongue','wedding','affair','apple','bedroom','beer','cheek','client','diamond','dirt','ear','fortune','hat','lady'],
	"passwordWords": ["verb", "adj1", "adj2", "adj3", "noun", "num"],
	"currentBatch": []
};
var maps = {
	"master": {
		"destruct": {
			9:{
				// 90%
				'a': ['e','i'],
				'c': 'k',
				'e': 'a',
				'k': 'c',
				'u': 'o',
			},
			8:{
				// 80%
				'a': 'o',
				'b': 'd',
				'c': 's',
				'd': 'b',
				'e': 'i',
				'i': ['a','e'],
				'j': ['h','l'],
				'k': 't',
				'm': 'n',
				'n': 'm',
				'o': ['a','e','u','0'],
				's': 'z',
				'u': 'e',
				'z': 's'

			},
			7:{
				// 70%
				'a': 'u',
				'b': ['r','t','p','v'],
				'c': ['f','t'],
				'd': ['n','m','p'],
				'e': ['o','u'],
				'f': 'l',
				'g': ['h','l','n'],
				'h': ['b','d','f','k','v'],
				'i': ['o','u'],
				'j': ['d','f'],
				'k': ['b','h','v'],
				'l': ['d','f','r'],
				'm': ['h','j'],
				'o': 'i',
				'p': ['f','g'],
				'r': ['b','d','f','g','h','k','m','n','p','s','t'],
				's': ['b','c','d','f','g','h','j','k','l','m','n','p','q','r','t','v','x'],
				't': ['b','c','d','f','g','h','j','k','l','m','n','p','q','r','s','v','z'],
				'u': ['a','i'],
				'v': 'w',
				'z': ['b','c','d','f','g','h','j','k','l','m','n','p','q','r','t','v','w','x','y','z']
			},
			6:{
				// 60%
				'a': 'y',
				'b': 'c',
				'd': ['f','t'],
				'e': 'y',
				'f': 'r',
				'g': ['b','m','r','t'],
				'h': ['c','l','m','n','p','r','t'],
				'i': 'y',
				'j': ['b','c','i','k','m','n','p','r','s','t'],
				'k': ['d','q','w'],
				'l': ['b','c','g','h','j','k','m','n','p','s'],
				'm': ['f','k','l','p','s','t'],
				'n': ['f','j','k','l','p','t'],
				'o': 'y',
				'p': ['d','k','q','t','v'],
				'q': ['a','e','i','o','u'],
				'r': ['j','l'],
				'u': 'y',
				'v': ['b','c','d','f','g','h','j','k','l','m','n','p','q','r','t','v','x','z'],
				'w': ['b','c','d','f','g','h','j','k','l','m','n','p','q','r','t','v','w','x','z'],
				'y': ['a','e','o','u'],
				'-': shortcuts["allChars"]
			},
			5:{
				// 50%
				'b': ['f','g','z'],
				'c': ['g','j','l','o','r','u','x','y'],
				'd': ['a','c','e','i','j','k','o','r','s','u','x','y'],
				'f': ['a','e','i','o','s','u','y'],
				'g': ['a','d','e','f','i','o','p','q','s','u','y','z'],
				'h': ['a','e','g','i','o','s','u','y'],
				'j': ['a','e','o','v','w','u','y'],
				'k': ['a','e','f','g','i','j','l','m','n','p','r','s','u','x','y','z'],
				'l': ['a','e','i','o','t','u','y','z'],
				'm': ['a','b','c','e','i','o','r','u','y','z'],
				'n': ['a','b','c','d','e','i','o','q','s','u','y'],
				'p': ['a','b','e','h','i','l','o','r','s','u','w','x','y','z'],
				'r': ['a','e','i','o','q','u','x','y','z'],
				'w': ['a','e','i','o','u','y'],
				'x': ['a','e','i','o','u','y','z'],
				'1': shortcuts["allChars"],
				'2': shortcuts["allChars"],
				'3': shortcuts["allChars"],
				'4': shortcuts["allChars"],
				'5': shortcuts["allChars"],
				'6': shortcuts["allChars"],
				'7': shortcuts["allChars"],
				'8': shortcuts["allChars"],
				'9': shortcuts["allChars"],
				'0': shortcuts["allChars"]
			}
		},
		"randomChar": {
			0: ['~','\\','_',';',"'",',','.'],
			1: ['^','*','(',')','[',']','{','}','>','/','+','=',':'],
			2: ['@','#','$','%','&'],
			3: ['-','!','?'],
			4: ['1','2','3','4','5','6','7','8','9','0','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
		}
	},
	"numberize": {
		'a': '4',
		'b': '6',
		'c': '3',
		'd': '0',
		'e': '3',
		'f': '7',
		'g': '9',
		'h': '8',
		'i': '1',
		'j': '7',
		'k': '5',
		'l': '1',
		'm': '3',
		'n': '2',
		'o': '0',
		'p': '9',
		'q': '9',
		'r': '4',
		's': '5',
		't': '1',
		'u': '2',
		'v': '4',
		'w': '3',
		'x': '8',
		'y': '7',
		'z': '5'
	},
	"destruct": {},
	"randomChar": {},
	"settingsValues": {
		"length": [8,8,8,10,10,12,16,18,20,25,30,32],
		"wordStructure": [0,1,2,3,8,8,9,9,10,10,10]
	}
};
var passwords = {};





//
// detect if mobile device
//
if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
	settings.isMobile = true;
	document.getElementById("hint").innerHTML = "Tap the generate button below.";
	settings.passwordHTMLTag = ["p","p","p"]
	var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
	var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
	if (h > w && h > 480 && h < 1020) {
		document.getElementById("mobile-wrapper").style.height = h.toString() + "px";
	}
}

//
// change body position to relative/absolute depending on screen size
//
function adjustBodyPosition() {
	var screenHeight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
	var bodyHeight = document.getElementById("body").clientHeight;

	if (screenHeight > bodyHeight && bodyHeight > 700) {
		document.getElementById("body").style.position = "absolute";
	} else {
		document.getElementById("body").style.position = "relative";
	}
}
adjustBodyPosition();
window.addEventListener('resize', function(event){
	adjustBodyPosition();
});

//
// define regex
//
var re = new RegExp(Object.keys(maps.numberize).join("|"),"gi");

//
// Build random characters map
//
for (var i = 4; i > -1; i--) {
	maps.randomChar[i] = [];
	for (j = 4; j > i-1; j--) {
		for (k = 0; k < maps.master.randomChar[j].length; k++) {
			maps.randomChar[i].push(maps.master.randomChar[j][k]);
			// double add the actual values so they're more likely to occur
			if (i < 4 && j == i) {
				maps.randomChar[i].push(maps.master.randomChar[i][k]);
			}
		}
	}
}

//
// Build destruct map
//
for (var i = 9; i > 4; i--) {
	maps.destruct[i] = {};
	// each level that's higher (for retrieving)
	for (j = 9; j > i-1; j--) {
		// each character key
	    for (var k in maps.master.destruct[j]) {
	    	if (typeof maps.destruct[i][k] == "undefined") {
		    	maps.destruct[i][k] = [];
	    	}
			// each character value in array
	   		for (var l = 0; l < maps.master.destruct[j][k].length; l++) {
				//if (maps.destruct[i][k].indexOf(maps.master.destruct[j][k][l]) === -1) {
					if (i == 5) {
						maps.destruct[i][k].push(maps.master.destruct[j][k][l].toUpperCase());
					} else {
						maps.destruct[i][k].push(maps.master.destruct[j][k][l]);
					}
				//} else {
				//	console.log("maps.master.destruct["+j+"]["+k+"] has duplicate: "+maps.master.destruct[j][k][l]);
				//}
			}
		}
	}
}

//
// Log the maps to console
//
console.log("maps: numberize");
console.log(maps.numberize);
console.log(" ");
console.log("maps: destruct");
console.log(maps.destruct);
console.log(" ");
console.log("maps: randomChar");
console.log(maps.randomChar);
console.log(" ");





//
// randomNumber: generate a random whole number
//
// min: integer, the minimum value that can be generated
// max: integer, the maximum value that can be generated
//
// return: integer
//
function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

//
// randomChance: randomly get a true or false value
// 
// chancePercentage: integer [0-10], the chance that it will return true
//
// return: boolean
//
function randomChance(chancePercentage) {
	return chancePercentage > randomNumber(0, 10);
}

//
// isArray: find out if a variable is an array
//
// variable: the variable to test
//
// return: boolean
//
function isArray(variable) {
	return variable instanceof Array;
}

//
// destruct: replace a character with a similar sounding character
//
// level: integer [5-9], corresponds to wordStructure value
// character: input character to replace
//
// return: a one character string
//
function destruct(level, character) {
	var destructMapInstance = {};
    for (var key in maps.destruct[level]) {
	    var characterOptions = maps.destruct[level][key];
	    if (isArray(characterOptions)) {
			destructMapInstance[key] = characterOptions[Math.floor(Math.random() * characterOptions.length)];
		} else {
			destructMapInstance[key] = characterOptions;
		}
	}

	var re = new RegExp(Object.keys(destructMapInstance).join("|"),"gi");

	return character.replace(re, function(matched){ return destructMapInstance[matched]; });
}

//
// getRandomChar: get a random character from the randomChar map
//
// level: integer [0-4], corresponds to wordStructure value
//
// return: a one character string
//
function getRandomChar(level) {
	var character = maps.randomChar[level][Math.floor(Math.random() * maps.randomChar[level].length)];
	return character;
}

//
// randomValue: get a random character from a string
//
// string: string, where a random character is chosen from
//
// return: a one character string
//
function randomValue(string) {
	return string[randomNumber(0, string.length-1)];
}

//
// numberize: convert a string to look-alike numbers
//
// string: string to convert
//
// return: all-numeric string
//
function numberize(string) {
	return string.replace(re, function(matched){
		return maps.numberize[matched];
	});
}

//
// applyLength: trim a 32 character password to the desired length
//
// password: 32 character string, the full password
// passNum: 1 character string, the defining number for the password
//
// return: string
//
function applyLength(password, passNum) {
	var newPassword = password;

	// numberize incomplete word
	if (settings.passLength != 32) {
		if (password.substr(0, settings.passLength).indexOf('-') != -1 && settings.wordStructure > 6) {
			var pos = newPassword.substr(0, settings.passLength).lastIndexOf("-");
			// loop through each char
			// to find the position (pos2) of the first int
			// only numberize if pos is greater than pos2
			newPassword = newPassword.substr(0, pos) + numberize(newPassword.substr(pos));
		}
		newPassword = newPassword.substr(0, settings.passLength);
	}

	// capitalize first letter
	newPassword = newPassword.charAt(0).toUpperCase() + newPassword.slice(1);

	// modify the last character
	if (isNaN(parseInt(newPassword.substr(newPassword.length-1))) && settings.wordStructure > 6) {
		var lastChar;
		if (password.substr(0, settings.passLength).indexOf('-') != -1) {
			lastChar = numberize(newPassword.substr(newPassword.length-2,1));
		} else {
			lastChar = passNum;
		}
		newPassword = newPassword.substr(0, settings.passLength-1) + lastChar;

	}
	if (!/\d/.test(newPassword)) {
		newPassword = newPassword.substr(0, settings.passLength-1) + passNum;
	}

	// done
	return newPassword;
}

//
// isMagicLength: tests if the words used to build the password cut off nicely at both 32 characters and the specified length
//
// password: object, the password to test
// magicLength: integer [3-32], the length the password should look good at
//
// return: boolean
//
function isMagicLength(password, magicLength) {
	magicLength = parseInt(magicLength);
	return ((magicLength == password.verb.length +1 ||
			magicLength == (password.verb + "-" + password.adj1).length +1 ||
			magicLength == (password.verb + "-" + password.adj1 + "-" + password.adj2).length +1 ||
			magicLength == (password.verb + "-" + password.adj1 + "-" + password.adj2 + "-" + password.adj3).length +1 ||
			magicLength == (password.verb + "-" + password.adj1 + "-" + password.adj2 + "-" + password.adj3 + "-" + password.noun).length +1)
			       && 33 > (password.verb + "-" + password.adj1 + "-" + password.adj2 + "-" + password.adj3 + "-" + password.noun).length +1);
}

//
// getValueFromArrayExcludingOtherArrayValues: choose a random value from array1 that is not also in array2
//
// arrayToPickFrom: array where a random value is chosen from
// arrayToExcludeValuesFrom: blacklisted array to compare to
//
// return: value from array1
//
function getValueFromArrayExcludingOtherArrayValues(arrayToPickFrom, arrayToExcludeValuesFrom) {
	var pickedValue;
	while(pickedValue == undefined || arrayToExcludeValuesFrom.indexOf(pickedValue) !== -1 ) {
		pickedValue = arrayToPickFrom[Math.floor(Math.random() * arrayToPickFrom.length)];
	}
	return pickedValue;
}

//
// buildPassword: generate random values for building a password
//
// return: object
//
function buildPassword() {
	var password = {};
	count.generatePasswordAttempt++;

	password.verb = getValueFromArrayExcludingOtherArrayValues( words.verbs, words.currentBatch );
	password.adj1 = getValueFromArrayExcludingOtherArrayValues( words.adjectives, words.currentBatch );
	password.adj2 = getValueFromArrayExcludingOtherArrayValues( words.adjectives, words.currentBatch );
	password.adj3 = getValueFromArrayExcludingOtherArrayValues( words.adjectives, words.currentBatch );
	password.noun = getValueFromArrayExcludingOtherArrayValues( words.nouns, words.currentBatch );
	while(password.num == undefined || words.currentBatch.indexOf(password.num) !== -1 ) {
		password.num = Math.floor(Math.random() * (9 - 0 + 1)) + 0;
	}

	return password;
}

//
// createPassword: create a new password that meets all requirements
//
// return: object
//
function createPassword() {
	var password;
	count.generatePasswordAttempt = 0;

	// keep generating passwords until it is the correct length
	password = buildPassword();
	if (settings.passLength > 4) {
		if (settings.passLength > 28 && settings.passLength < 32) {
		    while (!isMagicLength(password, settings.passLength)) {
		    	password = buildPassword();
			}
		} else {
		    while (!isMagicLength(password, settings.passLength) || !isMagicLength(password, 32)) {
		    	password = buildPassword();
			}
		}
	} else {
		while (!isMagicLength(password, 32)) {
	    	password = buildPassword();
		}
	}

	// write words used so there are no duplicates
	for (var i = 0; i < words.passwordWords.length; i++) {
		words.currentBatch.push(password[words.passwordWords[i]]);
	}

	// apply word structure and create 11 versions of the password
	//for (var i=0; i<3; i++){
		password.built = {};

		var charReplaceMap = {
			10: 0,
			9: 7,
			8: 6,
			7: 7,
			6: 6,
			5: 6,
			4: 7,
			3: 6,
			2: 6,
			1: 7,
			0: 6
		};

		// build password base
		var newPassword = password.verb + "-" + password.adj1 + "-" + password.adj2 + "-" + password.adj3 + "-" + password.noun + password.num;
		// add extra characters for passwords with length 29,30,31
		while (newPassword.length < 32) {
			newPassword += randomNumber(0,9).toString();
		}
		// level 10 password
		password.built[10] = newPassword;

		// replace each of the 32 characters one time from level 10 to level 5
		var charsThatHaveAlreadyBeenChanged = [];
		var countA = 0;
		for (lev=9; lev>4; lev--) {

			// on each level, replace 6 or 7 characters (defined by charReplaceMap)
			for (k=0; k<charReplaceMap[lev]; k++) {
				var charIsDone = false;
				while (!charIsDone) {
					countA++;
					var randNum = randomNumber(0,31);
					if (charsThatHaveAlreadyBeenChanged.indexOf(randNum) === -1) {
						var newChar = destruct(lev, newPassword[randNum]);
						if (newChar !== newPassword[randNum] ){
							// implement the character replacement change
							newPassword = newPassword.substr(0,randNum) + newChar + newPassword.substr(randNum+1);
							// write the character position so the same character isn't replaced multiple times
							charsThatHaveAlreadyBeenChanged.push(randNum);
							// stop this loop
							charIsDone = true;
						} else {
							// this character can't change here
							if (lev>5) {
								// skip now and get it later
								charReplaceMap[lev-1]++;
								charIsDone = true;
							}
						}
					}
				}
			}

			password.built[lev] = newPassword;
		}


		charsThatHaveAlreadyBeenChanged = [];
		for (lev=4; lev>-1; lev--) {

			// on each level, replace 6 or 7 characters (defined by charReplaceMap)
			for (k=0; k<charReplaceMap[lev]; k++) {
				var charIsDone = false;
				while (!charIsDone) {
					var randNum = randomNumber(0,31);
					if (charsThatHaveAlreadyBeenChanged.indexOf(randNum) === -1) {
						var newChar = getRandomChar(lev, newPassword[randNum]);
						if (newChar !== newPassword[randNum] ){
							// the first three characters should be letter, symbol, number
							if (randNum == 0) {
								newChar = randomValue(shortcuts.alphabet);
							}
							if (randNum == 1) {
								newChar = randomValue(shortcuts.symbols);
							}
							if (randNum == 2) {
								newChar = password.num;
							}
							// implement the character replacement change
							newPassword = newPassword.substr(0,randNum) + newChar + newPassword.substr(randNum+1);
							// write the character position so the same character isn't replaced multiple times
							charsThatHaveAlreadyBeenChanged.push(randNum);
							// stop this loop
							charIsDone = true;
						} else {
							// this character can't change here
							if (lev>0) {
								// skip now and get it later
								charReplaceMap[lev-1]++;
								charIsDone = true;
							}
						}
					}
				}
			}

			password.built[lev] = newPassword;
		}

	console.log("new password! (took "+count.generatePasswordAttempt+" tries)");
	console.log(password);
	console.log(" ");

	return password;
}

//
// refreshPasswordHTML: refresh the passwords in the HTML
//
// refreshStrength: "hard" or "easy". Hard will reload all the HTML in #results, and soft will just change the actual password text
//
function refreshPasswordHTML(refreshStrength) { 
	var resultsDiv = document.getElementById('results'),
		thePassword;
	if (refreshStrength == "hard") {
		resultsDiv.innerHTML = "";
		for (var i = 0; i < 3; i++) {
			thePassword = applyLength(passwords[i]["built"][settings.wordStructure],passwords[i]["num"]);
			if (settings.isMobile) {
				settings.passwordHTMLTag = ["p","p","p"];
				resultsDiv.innerHTML = resultsDiv.innerHTML + '<div class="password-wrapper mobile"><p id="p'+i+'" class="password">'+thePassword+'</p></div>';
			} else {
				resultsDiv.innerHTML = resultsDiv.innerHTML + '<div class="password-wrapper"><input type="text" id="p'+i+'" class="password" value="'+thePassword+'" onClick="select()" maxlength="32" spellcheck="false" /></div>';
			}
		}
	} else {
		for (var i = 0; i < 3; i++) {
			thePassword = applyLength(passwords[i]["built"][settings.wordStructure],passwords[i]["num"]);
			if (settings.passwordHTMLTag[i] == "input") {
				document.getElementById("p"+i).setAttribute("value", thePassword);
			} else {
				document.getElementById("p"+i).innerHTML = thePassword;
			}
		}
	}
}

//
// generatePasswords: the generate button was clicked, generate three passwords
//
function generatePasswords() {
	count.generateButtonClicks++;
	words.currentBatch = [];
	console.log("== Generating new batch ==");

	// change length and word structure values
	if (!settings.hasChangedSettings && count.generateButtonClicks > 1) {
		var l,
			w,
			isDifferent = false;

		while (!isDifferent) {
			if (count.generateButtonClicks < 6) {
				l = maps["settingsValues"]["length"][Math.floor(Math.random() * maps["settingsValues"]["length"].length)];
				w = maps["settingsValues"]["wordStructure"][Math.floor(Math.random() * maps["settingsValues"]["wordStructure"].length)];
			} else {
				l = randomNumber(3,32);
				w = randomNumber(0,10);
			}
			if (l !== settings.passLength && w !== settings.wordStructure) {
				isDifferent = true;
			}
		}
			document.getElementById("length").value = l;
			document.getElementById("wordStructure").value = w;
			updateSettingsValues();
	}

	for (var i = 0; i < 3; i++) {
		// creates a new password
		passwords[i] = createPassword();
	}
	refreshPasswordHTML("hard");

	settings.hasGenerated = true;
}

//
// updateSettingsValues: the value of the sliders have changed
//
function updateSettingsValues() {
	// update global variables
	settings.wordStructure = Number(document.getElementById('wordStructure').value);
	settings.passLength = Number(document.getElementById('length').value);

	// update html text
	var wordStructureText;
	if (settings.wordStructure == 0) {
		wordStructureText = settings.wordStructure + "%";
	} else {
		wordStructureText = settings.wordStructure + "0%";
	}
	document.getElementById('lengthDisplay').innerHTML = settings.passLength;
	document.getElementById('wordStructureLabel').innerHTML = wordStructureText;
}

//
// settingsChanged: the html sliders were changed by the user
//
function settingsChanged() {
	settings.hasChangedSettings = true;
	// update global variables
	updateSettingsValues();

	// update html passwords
	if (settings.hasGenerated) {
		refreshPasswordHTML("soft");
	}
}




//
// On Touch Start Hover CSS
//
var generateButton = document.getElementById('generate');
generateButton.addEventListener('touchmove', function(e){
	generateButton.className = "hover";
}, false);
generateButton.addEventListener('touchend', function(e){
	generateButton.className = "";
}, false);
document.getElementById('body').addEventListener('touchend', function(e){
	generateButton.className = "";
}, false);




//
// google analytics
//
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-92639312-3', 'auto');
ga('send', 'pageview');