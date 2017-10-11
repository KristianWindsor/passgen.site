// A Password Generator .website
// by Kristian Windsor

// detect if mobile device
var hasGenerated = false,
	isMobile = false;
if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
	isMobile = true;
}

// declare array variables
var verbs = ["has","get","see","need","know","would","find","take","want","does","learn","become","come","include","thank","provide","create","add","choose","develop","grow","allow","supply","bring","improve","begin","exist","tend","enjoy","perform","decide","protect","require","occur","write","avoid","prepare","build","achieve","believe","receive","seem","discuss","realize","contain","follow","refer","solve","prefer","prevent","ensure","expect","invest","reduce","speak","appear","explain","explore","involve","lose","afford","agree","hear","remain","apply","forget","rely","vary","obtain","accept","depend","enter","happen","suggest","survive","compare","imagine","manage","differ","expand","prove","react","relax","replace","borrow","earn","enable","operate","reflect","send","assume","engage","enhance","examine","install","intend","relate","settle","assure","attract","owe","succeed","suffer","throw","acquire","adapt","adjust","argue","arise","confirm","justify","ought","possess","relieve","retain","shut","compete","consult","deliver","extend","qualify","retire","rid","weigh","arrive","attach","behave","ignore","imply","insist","pursue","specify","warn","accuse","admire","admit","adopt","ance","approve","attend","belong","commit","deserve","destroy","inform","pour","propose","remind","shall","submit","suppose","be","have","use","make","look","help","go","being","think","read","keep","start","give","play","feel","put","set","change","say","cut","show","try","check","call","move","pay","let","turn","ask","buy","guard","hold","offer","travel","cook","dance","excuse","live","deal","mean","fall","produce","search","spend","talk","upset","tell","cost","drive","support","remove","return","run","reserve","leave","reach","rest","serve","watch","charge","break","stay","visit","affect","cover","report","rise","walk","pick","lift","mix","stop","teach","concern","fly","born","gain","save","stand","fail","lead","listen","worry","express","handle","meet","release","sell","finish","press","ride","spread","spring","wait","display","flow","hit","shoot","touch","cancel","cry","dump","push","select","die","eat","fill","jump","kick","pass","pitch","treat"];
var adjectives = ["used","every","large","popular","able","basic","known","various","several","united","hot","useful","mental","scared","old","similar","healthy","medical","federal","entire","strong","actual","poor","happy","cute","helpful","recent","willing","nice","serious","huge","rare","typical","aware","global","legal","capable","foreign","hungry","severe","unusual","famous","pure","afraid","obvious","careful","latter","unhappy","boring","eastern","logical","strict","civil","former","massive","unfair","visible","alive","angry","lucky","sorry","ugly","anxious","curious","inner","sexual","sudden","unable","weak","wooden","asleep","decent","guilty","lonely","mad","nervous","odd","tall","tiny","more","some","one","all","many","most","other","such","even","new","just","good","any","each","much","own","great","another","same","few","free","right","still","best","public","human","both","local","sure","better","general","enough","long","small","less","high","certain","little","common","next","simple","hard","past","big","real","major","current","left","least","natural","short","last","single","main","lower","open","special","working","true","whole","clear","dry","easy","cold","full","low","primary","worth","present","close","green","late","fit","glad","proper","complex","content","due","middle","regular","fast","wide","active","safe","visual","wrong","ago","quick","ready","white","direct","extra","junior","pretty","unique","classic","final","overall","private","western","alone","perfect","bright","broad","flat","rich","warm","young","heavy","correct","leading","slow","clean","fresh","normal","secret","tough","brown","cheap","deep","secure","thin","cool","extreme","exact","fair","fine","formal","remote","total","vast","lost","smooth","dark","double","equal","firm","minor","raw","soft","solid","weird","amazing","annual","busy","dead","false","round","sharp","thick","wise","initial","narrow","nearby","proud","wild","adult","apart","brief","crazy","prior","rough","sad","sick","strange","illegal","loud","mobile","nasty","royal","senior","super","tight","upper","yellow","funny","gross","ill","spare","sweet","usual","brave","calm","dirty"];
var nouns = ["people","history","way","art","world","map","two","family","health","system","meat","year","thanks","music","person","reading","method","data","food","theory","law","bird","problem","control","power","ability","love","science","library","nature","fact","product","idea","area","society","story","media","thing","oven","safety","quality","player","variety","video","week","country","exam","movie","physics","policy","series","thought","basis","army","camera","freedom","paper","child","month","truth","writing","article","goal","news","fishing","growth","income","user","failure","meaning","teacher","night","disease","disk","energy","nation","road","role","soup","success","math","moment","event","student","wood","office","unit","context","driver","flight","length","cell","dealer","finding","lake","member","message","phone","scene","concept","death","housing","mood","woman","advice","blood","effort","opinion","payment","reality","skill","wealth","city","county","depth","estate","heart","photo","recipe","studio","topic","passion","setting","ad","agency","college","debt","memory","aspect","storage","version","alcohol","highway","loss","steak","union","cancer","entry","mixture","region","virus","actor","device","drama","engine","hotel","owner","tension","anxiety","bath","bread","climate","emotion","guest","height","mall","manager","sample","charity","cousin","editor","extent","guitar","leader","mom","outcome","revenue","session","singer","tennis","basket","bonus","cabinet","church","clothes","coffee","dinner","drawing","hair","hearing","lab","mode","mud","orange","poetry","police","queen","ratio","sector","song","tooth","town","vehicle","volume","wife","airport","arrival","chapter","error","farmer","gate","girl","hall","injury","meal","pie","poem","river","son","speech","tea","village","warning","winner","worker","writer","breath","buyer","chest","cookie","courage","dad","desk","drawer","garbage","grocery","honey","insect","king","ladder","menu","penalty","piano","potato","salad","sister","tongue","wedding","affair","analyst","apple","bedroom","beer","cheek","client","diamond","dirt","ear","fortune","funeral","gene","hat","lady"];

var alphabet = "abcdefghijklmnopqrstuvwxyz";
var symbols = "!@#$%^&*()+=-";

var allChars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()+-=[];,./?";
var wordStructure = document.getElementById('wordStructure').value;
var passLength = document.getElementById('length').value;
var destructMap = {};
var randomCharactersMap = {};
var destructMasterMap = {
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
		'k': ['b','h','t','v'],
		'l': ['d','f','r'],
		'm': ['h','j'],
		'o': 'i',
		'p': ['b','f','g'],
		'r': ['b','d','f','g','h','k','m','n','p','s','t'],
		's': ['b','c','d','f','g','h','j','k','l','m','n','p','q','r','t','v','w','x','z'],
		't': ['b','c','d','f','g','h','j','k','l','m','n','p','q','r','t','v','w','z'],
		'u': ['a','i'],
		'v': 'w',
		'z': ['b','c','d','f','g','h','j','k','l','m','n','p','q','r','t','v','w','x','y','z']
	},
	6:{
		// 60%
		'a': 'y',
		'b': ['c','d','t'],
		'd': ['f','t'],
		'e': 'y',
		'f': 'r',
		'g': ['b','m','r','t'],
		'h': ['c','l','m','n','p','r','t'],
		'i': 'y',
		'j': ['b','c','h','i','k','m','n','p','r','s','t'],
		'k': ['d','q','w'],
		'l': ['b','c','g','h','j','k','m','n','p','s'],
		'm': ['f','j','k','l','p','s','t'],
		'n': ['f','j','k','l','p','t'],
		'o': 'y',
		'p': ['d','k','q','t','v'],
		'q': ['a','e','i','o','u'],
		'r': ['j','l'],
		'u': 'y',
		'v': ['b','c','d','f','g','h','j','k','l','m','n','p','q','r','t','v','w','x','z'],
		'w': ['b','c','d','f','g','h','j','k','l','m','n','p','q','r','t','v','w','x','z'],
		'y': ['a','e','o','u'],
	},
	5:{
		// 50%
		'a': ['b','c','d','f','g','h','l','m','n','p','q','r','s','t','v','w','x','z'],
		'b': ['f','g','v','z'],
		'c': ['g','j','l','o','r','u','x','y'],
		'd': ['a','c','e','i','j','k','o','r','s','t','u','x','y'],
		'e': ['b','c','d','f','g','h','l','m','n','p','q','r','s','t','v','w','x','z'],
		'f': ['a','e','i','o','s','u','y'],
		'g': ['a','d','e','f','i','o','p','q','s','u','y','z'],
		'h': ['a','e','g','i','o','s','u','y'],
		'i': ['b','c','d','f','g','k','l','m','n','p','q','r','s','t','v','w','z'],
		'j': ['a','e','i','k','o','v','w','u','y'],
		'k': ['a','e','f','g','h','i','j','l','m','n','p','r','s','u','x','y','z'],
		'l': ['a','e','f','i','o','t','u','y','z'],
		'm': ['a','b','c','e','i','o','p','r','t','u','y','z'],
		'n': ['a','b','c','d','e','i','k','o','q','s','t','u','y'],
		'o': ['b','c','d','f','g','h','k','l','m','n','p','q','r','s','t','v','w','x','z'],
		'p': ['a','e','h','i','l','o','r','s','t','u','w','x','y','z'],
		'r': ['a','e','i','o','q','u','x','y','z'],
		't': ['a','e','f','h','i','l','o','r','u','v','w','x','y','z'],
		'u': ['b','c','d','f','g','h','k','l','m','n','p','q','r','s','t','v','x','z'],
		'v': ['a','e','h','i','l','o','r','s','u','x','y','z'],
		'w': ['a','e','h','i','o','r','u','y'],
		'x': ['a','e','i','o','u','y','z'],
		'y': ['c','i','l','m','n','s','z']
	},
};
var randomCharactersMasterMap = {
	0: ['~','\\'],
	1: ['_',';',"'",',','.'],
	2: ['^','*','(',')','[',']','{','}','<','>','/','+','=',':'],
	3: ['@','#','$','%','&'],
	4: ['-','!','?'],
	5: ['1','2','3','4','5','6','7','8','9','0','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
	// NOTE: at level 6, the dash characters should start being replaced with numbers (or letters?)
};

function isExisting(variable) {
	return variable !== undefined;
}
function isArray(variable) {
	return variable instanceof Array;
}
Array.prototype.extend = function (other_array) {
    other_array.forEach(function(v) {this.push(v)}, this);    
}

function updateDestructMap() {
	destructMap = {};
	// create a map based on the word structure value
	for (i = 9; i > wordStructure-1 && i > 4; i--) {
		var percentileKeys = destructMasterMap[i];
	    for (var letter in percentileKeys) {
			if (!percentileKeys.hasOwnProperty(letter)) continue;
		    var characterList = percentileKeys[letter];

			if (isExisting(destructMap[letter])) {
			    if (isArray(characterList)) {
					destructMap[letter].extend(characterList);
				} else {
					// add string to array
					destructMap[letter].push(characterList);
				}
			} else {
			    if (isArray(characterList)) {
			    	// set array
					destructMap[letter] = characterList.slice(0);
				} else {
					// set array from string
					destructMap[letter] = [characterList].slice(0);
				}
			}
		}
	}
}

function updateRandomCharactersMap() {
	randomCharactersMap = [];
	if (wordStructure < 6) {
		for (var i = 5; i > wordStructure-1; i--) {
			for (j = 0; j < randomCharactersMasterMap[i].length; j++) {
				randomCharactersMap.push(randomCharactersMasterMap[i][j]);
			}
		}
	}
}
updateRandomCharactersMap();

function newDestructRegex() {
	var destructInstance = {};
    for (var key in destructMap) {
	    var characterOptions = destructMap[key];
	    if (isArray(characterOptions)) {
			destructInstance[key] = characterOptions[Math.floor(Math.random() * characterOptions.length)];
		} else {
			destructInstance[key] = characterOptions;
		}
	}

	return destructInstance;
}

function randomChance(chance) {
	return chance > Math.floor(Math.random() * (10 - 0 + 1)) + 0;
}

function destruct(words) {
	if (wordStructure < 10) {
		// build a new key from destructMap so that same letters can get different outcomes
		var map = newDestructRegex(),
			re = new RegExp(Object.keys(map).join("|"),"gi"),
			newWord = "";

		for (i = 0; i < words.length; i++) {
			if (randomChance(6)) {
				newWord += words[i].replace(re, function(matched){ return map[matched]; });
			} else {
				newWord += words[i];
			}
		}

		return newWord;
	} else {
		return words;
	}
}

function addRandomCharacters(password) {
	// Choose n amount of characters based on the password length
	var n = Math.floor( (password.length * 0.6) - (Math.floor(Math.random() * 3)) );
	
	// Choose the positions of where to place the characters
	var positions = [];
	for (var i=0; i < n; i++) {
		positions.push(Math.floor(Math.random() * password.length));
	}
	
	// Choose random characters
	var characters = [];
	for (var i=0; i < n; i++) {
		var num = Math.floor(Math.random() * randomCharactersMap.length);
		characters.push(randomCharactersMap[num]);
	}

	// scatter characters at positions
	for (var i=0; i < n; i++) {
		password = password.substr(0,positions[i]) + characters[i] + password.substr(positions[i]+1);
	}

	// done
	return password;
}

// generate passwords
var passwordsMaster = [];
function generatePasswords() {
	hasGenerated = true;
	var i = 0,
	    div = document.getElementById('results');

	div.innerHTML = "";
	while (i < 3) {
		passwordsMaster[i] = createPassword();
		if (isMobile) {
			div.innerHTML = div.innerHTML + '<p id="p' + i + '" class="password">' + customize(passwordsMaster[i]) + '</p>';
		} else {
			div.innerHTML = div.innerHTML + '<input type="text" id="p' + i + '" class="password" value="' + customize(passwordsMaster[i]) + '" onClick="select()" maxlength="32" spellcheck="false" /><br>';
		}
		i++;
	}
}

// updated length/word structure
function refresh() {
	// update global variables
	wordStructure = document.getElementById('wordStructure').value;
	passLength = document.getElementById('length').value;

	// update html text
	var wordStructureText;
	if (wordStructure == 0) {
		wordStructureText = wordStructure + "%";
	} else {
		wordStructureText = wordStructure + "0%";
	}
	document.getElementById('lengthDisplay').innerHTML = document.getElementById('length').value;
	document.getElementById('wordStructureLabel').innerHTML = wordStructureText;

	// update maps with new settings
	updateDestructMap();
	updateRandomCharactersMap();

	// update html passwords
	if (hasGenerated) {
		if (isMobile) {
			document.getElementById("p0").innerHTML = customize(passwordsMaster[0]);
			document.getElementById("p1").innerHTML = customize(passwordsMaster[1]);
			document.getElementById("p2").innerHTML = customize(passwordsMaster[2]);
		} else {
			document.getElementById("p0").setAttribute("value", customize(passwordsMaster[0]));
			document.getElementById("p1").setAttribute("value", customize(passwordsMaster[1]));
			document.getElementById("p2").setAttribute("value", customize(passwordsMaster[2]));
		}
	}
}

// generate single password
function createPassword() {
	var password = {},
		passLength = document.getElementById('length').value,
		count = 0;

	// the actual part that generates the password
	function buildPassword() {
		count++;
    	password.verb = verbs[Math.floor(Math.random() * verbs.length)];
    	password.adj1 = adjectives[Math.floor(Math.random() * adjectives.length)];
    	password.adj2 = adjectives[Math.floor(Math.random() * adjectives.length)];
    	password.adj3 = adjectives[Math.floor(Math.random() * adjectives.length)];
    	password.noun = nouns[Math.floor(Math.random() * nouns.length)];
    	password.num = Math.floor(Math.random() * (9 - 0 + 1)) + 0;
	}

	// keep generating passwords until it is the correct length
	buildPassword();
	if (passLength > 4) {
		if (passLength > 28 && passLength < 32) {
		    while (!isMagicLength(password, passLength)) {
		    	buildPassword();
			}
		} else {
		    while (!isMagicLength(password, passLength) || !isMagicLength(password, 32)) {
		    	buildPassword();
			}
		}
	} else {
		while (!isMagicLength(password, 32)) {
	    	buildPassword();
		}
	}

	//console.log("took " + count + " tries to make: " + customize(password) + " ("+passLength+")");
	return password;
}

function isMagicLength(password, magicLength) {
	magicLength = parseInt(magicLength);
	return  magicLength == password.verb.length +1 ||
			magicLength == (password.verb + "-" + password.adj1).length +1 ||
			magicLength == (password.verb + "-" + password.adj1 + "-" + password.adj2).length +1 ||
			magicLength == (password.verb + "-" + password.adj1 + "-" + password.adj2 + "-" + password.adj3).length +1 ||
			magicLength == (password.verb + "-" + password.adj1 + "-" + password.adj2 + "-" + password.adj3 + "-" + password.noun).length +1;
}

// apply settings to password
function customize(oldPassword) {
	var newPassword,
		passLength = document.getElementById('length').value,
		wordStructure = document.getElementById('wordStructure').value;

	// build the password
	if (passLength < oldPassword.verb.length +1) {
		newPassword = oldPassword.verb.substr(0, passLength);
	} else {
		newPassword = oldPassword.verb + "-" + oldPassword.adj1 + "-" + oldPassword.adj2 + "-" + oldPassword.adj3 + "-" + oldPassword.noun;
		

		if (passLength != 32) {
			var pos = newPassword.substr(0, passLength).lastIndexOf("-");
			newPassword = newPassword.substr(0, pos) + numberize(newPassword.substr(pos));
			newPassword = newPassword.substr(0, passLength);
		}
	}
	// make the last character the designated number if its not already a number
	if (isNaN(parseInt(newPassword.substr(newPassword.length-1)))) {
		newPassword = newPassword.substr(0, passLength-1) + oldPassword.num;
	}

	var tmp = newPassword;
	newPassword = destruct(newPassword);
	console.log(tmp + " --> " + newPassword);


	// -- section 2 --
	// random letters, numbers, and symbols are scattered onto the password
	if (wordStructure < 6) {
		newPassword = addRandomCharacters(newPassword);
	}


	// apply word structure
	/*for (var i = 0, n = allChars.length; i < passLength; ++i) {
        notWordyPassword += allChars.charAt(Math.floor(Math.random() * n));
    }*/

	// capitalize first letter
	newPassword = newPassword.charAt(0).toUpperCase() + newPassword.slice(1);

	// add number

	// done
	return newPassword;
}

var mapObj = {
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
}
var re = new RegExp(Object.keys(mapObj).join("|"),"gi");

function numberize(words) {
	return words.replace(re, function(matched){
		return mapObj[matched];
	});
}


// google analytics
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-92639312-3', 'auto');
ga('send', 'pageview');