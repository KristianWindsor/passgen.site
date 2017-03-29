// a password generator . website
// by kristian windsor

// detect if mobile device
var isMobile = false;
if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
	isMobile = true;
}

// declare array variables
var verbs = ["has","get","see","need","know","would","find","take","want","does","learn","become","come","include","thank","provide","create","add","choose","develop","grow","allow","supply","bring","improve","begin","exist","tend","enjoy","perform","decide","protect","require","occur","write","avoid","prepare","build","achieve","believe","receive","seem","discuss","realize","contain","follow","refer","solve","prefer","prevent","ensure","expect","invest","reduce","speak","appear","explain","explore","involve","lose","afford","agree","hear","remain","apply","forget","rely","vary","obtain","accept","depend","enter","happen","suggest","survive","compare","imagine","manage","differ","expand","prove","react","relax","replace","borrow","earn","enable","operate","reflect","send","assume","engage","enhance","examine","install","intend","relate","settle","assure","attract","owe","succeed","suffer","throw","acquire","adapt","adjust","argue","arise","confirm","justify","ought","possess","relieve","retain","shut","compete","consult","deliver","extend","qualify","retire","rid","weigh","arrive","attach","behave","ignore","imply","insist","pursue","specify","warn","accuse","admire","admit","adopt","ance","approve","attend","belong","commit","deserve","destroy","inform","pour","propose","remind","shall","submit","suppose","be","have","use","make","look","help","go","being","think","read","keep","start","give","play","feel","put","set","change","say","cut","show","try","check","call","move","pay","let","turn","ask","buy","guard","hold","offer","travel","cook","dance","excuse","live","deal","mean","fall","produce","search","spend","talk","upset","tell","cost","drive","support","remove","return","run","reserve","leave","reach","rest","serve","watch","charge","break","stay","visit","affect","cover","report","rise","walk","pick","lift","mix","stop","teach","concern","fly","born","gain","save","stand","fail","lead","listen","worry","express","handle","meet","release","sell","finish","press","ride","spread","spring","wait","display","flow","hit","shoot","touch","cancel","cry","dump","push","select","die","eat","fill","jump","kick","pass","pitch","treat"];
var adjectives = ["used","every","large","popular","able","basic","known","various","several","united","hot","useful","mental","scared","old","similar","healthy","medical","federal","entire","strong","actual","poor","happy","cute","helpful","recent","willing","nice","serious","huge","rare","typical","aware","global","legal","capable","foreign","hungry","severe","unusual","famous","pure","afraid","obvious","careful","latter","unhappy","boring","eastern","logical","strict","civil","former","massive","unfair","visible","alive","angry","lucky","sorry","ugly","anxious","curious","inner","sexual","sudden","unable","weak","wooden","asleep","decent","guilty","lonely","mad","nervous","odd","tall","tiny","more","some","one","all","many","most","other","such","even","new","just","good","any","each","much","own","great","another","same","few","free","right","still","best","public","human","both","local","sure","better","general","enough","long","small","less","high","certain","little","common","next","simple","hard","past","big","real","major","current","left","least","natural","short","last","single","main","lower","open","special","working","true","whole","clear","dry","easy","cold","full","low","primary","worth","present","close","green","late","fit","glad","proper","complex","content","due","middle","regular","fast","wide","active","safe","visual","wrong","ago","quick","ready","white","direct","extra","junior","pretty","unique","classic","final","overall","private","western","alone","perfect","bright","broad","flat","rich","warm","young","heavy","correct","leading","slow","clean","fresh","normal","secret","tough","brown","cheap","deep","secure","thin","cool","extreme","exact","fair","fine","formal","remote","total","vast","lost","smooth","dark","double","equal","firm","minor","raw","soft","solid","weird","amazing","annual","busy","dead","false","round","sharp","thick","wise","initial","narrow","nearby","proud","wild","adult","apart","brief","crazy","prior","rough","sad","sick","strange","illegal","loud","mobile","nasty","royal","senior","super","tight","upper","yellow","funny","gross","ill","spare","sweet","usual","brave","calm","dirty"];
var nouns = ["people","history","way","art","world","map","two","family","health","system","meat","year","thanks","music","person","reading","method","data","food","theory","law","bird","problem","control","power","ability","love","science","library","nature","fact","product","idea","area","society","story","media","thing","oven","safety","quality","player","variety","video","week","country","exam","movie","physics","policy","series","thought","basis","army","camera","freedom","paper","child","month","truth","writing","article","goal","news","fishing","growth","income","user","failure","meaning","teacher","night","disease","disk","energy","nation","road","role","soup","success","math","moment","event","student","wood","office","unit","context","driver","flight","length","cell","dealer","finding","lake","member","message","phone","scene","concept","death","housing","mood","woman","advice","blood","effort","opinion","payment","reality","skill","wealth","city","county","depth","estate","heart","photo","recipe","studio","topic","passion","setting","ad","agency","college","debt","memory","aspect","storage","version","alcohol","highway","loss","steak","union","cancer","entry","mixture","region","virus","actor","device","drama","engine","hotel","owner","tension","anxiety","bath","bread","climate","emotion","guest","height","mall","manager","sample","charity","cousin","editor","extent","guitar","leader","mom","outcome","revenue","session","singer","tennis","basket","bonus","cabinet","church","clothes","coffee","dinner","drawing","hair","hearing","lab","mode","mud","orange","poetry","police","queen","ratio","sector","song","tooth","town","vehicle","volume","wife","airport","arrival","chapter","error","farmer","gate","girl","hall","injury","meal","pie","poem","river","son","speech","tea","village","warning","winner","worker","writer","breath","buyer","chest","cookie","courage","dad","desk","drawer","garbage","grocery","honey","insect","king","ladder","menu","penalty","piano","potato","salad","sister","tongue","wedding","affair","analyst","apple","bedroom","beer","cheek","client","diamond","dirt","ear","fortune","funeral","gene","hat","lady"];

var alphabet = "abcdefghijklmnopqrstuvwxyz";
var numbers = "1234567890";
var symbols = "!@#$%^&*()+=-";

var allChars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()+-=[];,./?";

var firstChar = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var aChar = ["a","b","c","d","f","g","h","l","m","n","p","q","r","s","t","u","v","w","x","z","1","2","3","4","5","6","7","9","0","!","@","$","-","=","."];
var bChar = ["a","b","e","f","i","l","o","r","s","u","y","1","2","3","4","5","6","7","8","9","0","!","@","$","-","=","."];
var cChar = ["a","e","h","i","k","l","o","r","t","u","x","y","1","2","3","4","5","7","8","9","0","!","@","-","=","."];
var dChar = ["a","d","e","i","j","k","o","r","s","t","u","x","y","1","2","3","4","5","6","7","8","9","0","!","@","$","-","=","."];
var eChar = ["b","c","d","e","f","g","h","l","m","n","p","q","r","s","t","u","v","w","x","y","z","1","2","3","4","5","6","7","8","9","0","!","@","$","-","=","."];
var fChar = ["a","e","f","i","l","o","r","s","u","y","1","2","3","4","5","6","7","8","9","0","!","@","$","-","=","."];
var gChar = ["a","e","f","g","h","i","l","n","o","r","s","u","y","z","1","2","3","4","5","6","7","8","9","0","!","@","$","-","=","."];
var hChar = ["a","e","h","i","m","o","t","u","y","1","2","3","4","5","6","7","9","0","!","@","-","=","."];
var iChar = ["a","b","c","d","e","f","g","k","l","m","n","o","p","q","r","s","t","u","v","w","z","1","2","3","4","5","6","7","8","9","0","!","@","$","-","=","."];
var jChar = ["a","e","i","j","k","o","u","y","8","9","0","!","@","-","=","."];
var kChar = ["a","e","h","i","k","l","o","r","s","u","w","x","y","z","1","2","3","4","5","6","7","8","9","0","!","@","$","-","=","."];
var lChar = ["a","c","d","e","f","i","l","m","n","o","p","s","t","u","y","z","1","2","3","4","5","6","7","8","9","0","!","@","$","-","=","."];
var mChar = ["a","c","e","f","h","i","k","m","o","p","r","t","u","y","z","1","2","3","4","5","6","7","8","9","0","!","@","-","=","."];
var nChar = ["a","d","e","i","k","m","n","o","q","s","t","u","y","1","2","3","4","5","6","7","8","9","0","!","@","$","-","=","."];
var oChar = ["b","c","d","f","g","h","i","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","1","2","3","4","5","6","7","8","9","!","@","$","-","=","."];
var pChar = ["a","e","h","i","l","o","p","r","s","t","u","w","x","y","z","1","2","3","4","5","6","7","8","9","0","!","@","$","-","=","."];
var qChar = ["a","e","i","o","u","8"];
var rChar = ["a","b","e","f","i","k","l","o","p","q","r","s","t","u","x","y","z","1","2","3","4","5","6","7","8","9","0","!","@","$","-","=","."];
var sChar = ["a","c","e","h","i","k","l","m","n","o","p","q","r","s","t","u","w","y","z","1","2","3","4","5","7","8","9","0","!","@","$","-","=","."];
var tChar = ["a","e","f","h","i","l","o","r","t","u","v","w","x","y","z","1","3","4","5","6","7","8","9","0","!","@","-","=","."];
var uChar = ["b","c","d","e","f","g","h","i","k","l","m","n","p","q","r","s","t","u","v","x","y","z","1","2","3","4","5","6","7","8","9","0","!","@","$","-","=","."];
var vChar = ["a","e","h","i","l","o","r","s","u","v","x","y","z","1","2","3","4","5","6","7","8","9","0","!","@","$","-","=","."];
var wChar = ["a","e","h","i","o","r","u","w","y","1","2","3","4","5","6","7","8","9","0","!","@","-","=","."];
var xChar = ["a","e","i","o","u","x","y","z","1","2","3","4","5","6","7","8","9","0","!","@","-","=","."];
var yChar = ["a","c","e","i","l","m","n","o","s","u","z","1","2","3","4","5","6","7","8","0","!","@","$","-","=","."];
var zChar = ["a","e","k","l","m","n","o","p","q","s","u","v","y","z","1","2","3","4","5","6","7","8","9","0","!","@","$","-","=","."];
var one = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","!","@","$","-","=","."];
var two = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","!","@","$","-","=","."];
var three = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","!","@","$","-","=","."];
var four = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","!","@","$","-","=","."];
var five = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","!","@","$","-","=","."];
var six = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","!","@","$","-","=","."];
var seven = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","!","@","$","-","=","."];
var eight = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","!","@","$","-","=","."];
var nine = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","!","@","$","-","=","."];
var zero = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","p","q","r","s","t","u","v","w","x","y","z","!","@","$","-","=","."];
var exclamationChar = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","1","2","3","4","5","6","7","8","9","0"];
var atChar = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","1","2","3","4","5","6","7","8","9","0"];
var dollarChar = ["a","c","e","h","i","k","l","m","n","o","p","q","r","s","t","u","w","y","z","1","2","3","4","5","7","8","9","0"];
var dashChar = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","1","2","3","4","5","6","7","8","9","0"];
var equalChar = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","1","2","3","4","5","6","7","8","9","0"];
var periodChar = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","1","2","3","4","5","6","7","8","9","0"];
var lastChar = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","1","2","3","4","5","6","7","8","9","0","!","."];

// menu settings
var settings = 1;
function changeSettings(divId, settingsInt) {
	document.getElementById('p1').setAttribute("style", "background-color: #f1f2f2; color:#888;");
	document.getElementById('p2').setAttribute("style", "background-color: #f1f2f2; color:#888;");
	document.getElementById('p3').setAttribute("style", "background-color: #f1f2f2; color:#888;");
	document.getElementById('p4').setAttribute("style", "background-color: #f1f2f2; color:#888;");
	document.getElementById('custom').style.display = 'none';
	document.getElementById(divId).setAttribute("style", "background-color: #fff; color:#565656;");
	settings = settingsInt;
	if(settingsInt == 3) {
		document.getElementById('custom').style.display = 'block';
	}
	refresh();
}

// refresh
function refresh() {
	document.getElementById('length-span').innerHTML = document.getElementById('trackbar').value;
	document.getElementById('password-container').innerHTML = "";
	addPasswords(10);
}

// test for vowels
function hasVowels(str) {
  var m = str.toLowerCase().match(/[aeiou]/gi);
  return m === null ? false : true;
}

function generatePassword() {
	if (settings == 0) {
		return generatePasswordSecure();
	} else if (settings == 1) {
		return generatePasswordPronouncable();
	} else if (settings == 2) {
		return generatePasswordWords();
	} else {
		return generatePasswordCustom();
	}
}
function generatePasswordSecure() {
	var result = "";
    for (var i = 0, n = allChars.length; i < 10; ++i) {
        result += allChars.charAt(Math.floor(Math.random() * n));
    }
    return result;
}
function generatePasswordPronouncable() {
	var succeeded = false;
	while (true) {
		var passwordString;
		// choose first character
		passwordString = firstChar[Math.floor(Math.random() * firstChar.length)];

		// choose 6 more characters
		var chosenArray;
		var i = 0;
		while (i < 6) {
			switch (passwordString.substr(passwordString.length - 1)) {
				case "a":
					chosenArray = aChar;
					break;
				case "b":
					chosenArray = bChar;
					break;
				case "c":
					chosenArray = cChar;
					break;
				case "d":
					chosenArray = dChar;
					break;
				case "e":
					chosenArray = eChar;
					break;
				case "f":
					chosenArray = fChar;
					break;
				case "g":
					chosenArray = gChar;
					break;
				case "h":
					chosenArray = hChar;
					break;
				case "i":
					chosenArray = iChar;
					break;
				case "j":
					chosenArray = jChar;
					break;
				case "k":
					chosenArray = kChar;
					break;
				case "l":
					chosenArray = lChar;
					break;
				case "m":
					chosenArray = mChar;
					break;
				case "n":
					chosenArray = nChar;
					break;
				case "o":
					chosenArray = oChar;
					break;
				case "p":
					chosenArray = pChar;
					break;
				case "q":
					chosenArray = qChar;
					break;
				case "r":
					chosenArray = rChar;
					break;
				case "s":
					chosenArray = sChar;
					break;
				case "t":
					chosenArray = tChar;
					break;
				case "u":
					chosenArray = uChar;
					break;
				case "v":
					chosenArray = vChar;
					break;
				case "w":
					chosenArray = wChar;
					break;
				case "x":
					chosenArray = xChar;
					break;
				case "y":
					chosenArray = yChar;
					break;
				case "z":
					chosenArray = zChar;
					break;
				case "1":
					chosenArray = one;
					break;
				case "2":
					chosenArray = two;
					break;
				case "3":
					chosenArray = three;
					break;
				case "4":
					chosenArray = four;
					break;
				case "5":
					chosenArray = five;
					break;
				case "6":
					chosenArray = six;
					break;
				case "7":
					chosenArray = seven;
					break;
				case "8":
					chosenArray = eight;
					break;
				case "9":
					chosenArray = nine;
					break;
				case "0":
					chosenArray = zero;
					break;
				case "!":
					chosenArray = exclamationChar;
					break;
				case "@":
					chosenArray = atChar;
					break;
				case "$":
					chosenArray = dollarChar;
					break;
				case "-":
					chosenArray = dashChar;
					break;
				case "=":
					chosenArray = equalChar;
					break;
				case ".":
					chosenArray = periodChar;
					break;
				}
			passwordString += chosenArray[Math.floor(Math.random() * chosenArray.length)];
			i++;
		}

		// choose last character
		passwordString += lastChar[Math.floor(Math.random() * lastChar.length)];
		
		// test the password to make sure it meets the qualifications
		if (passwordString.replace(/[^0-9]/g,"").length == 1 && passwordString.replace(/\W/g, '').length == 7 && hasVowels(passwordString.substring(0,4)) && hasVowels(passwordString.substring(4,8))) {
			// make one of the letters a capital letter
			var capitalizing = true;
			while (capitalizing) {
				var randomNumber = Math.floor(Math.random() * (8 - 0) + 0);
				if(passwordString.substring(randomNumber,randomNumber+1).match(/[a-z]/i)) {
					passwordString = passwordString.substring(0,randomNumber) + passwordString.substring(randomNumber,randomNumber+1).toUpperCase() + passwordString.substring(randomNumber+1,8);
					capitalizing = false;
				}
			}
			// return the password
			return passwordString;
		}
	}
}
function generatePasswordWords() {
	var result = verbs[Math.floor(Math.random() * verbs.length)] + "-" + adjectives[Math.floor(Math.random() * adjectives.length)] + "-" + nouns[Math.floor(Math.random() * nouns.length)] + numbers[Math.floor(Math.random() * numbers.length)];
	result = result.charAt(0).toUpperCase() + result.slice(1);
	return result;
}
function generatePasswordCustom() {
	var customSettings = [];
	customSettings[0] = document.getElementById('trackbar').value;
	customSettings[1] = document.getElementById('set_lowercase').checked;
	customSettings[2] = document.getElementById('set_uppercase').checked;
	customSettings[3] = document.getElementById('set_numbers').checked;
	customSettings[4] = document.getElementById('set_symbols').checked;
	var options = "";
	if (customSettings[1]) {
		options = alphabet;
	}
	if (customSettings[2]) {
		options += alphabet.toUpperCase();
	}
	if (customSettings[3]) {
		options += numbers;
	}
	if (customSettings[4]) {
		options += symbols;
	}
	var result = "";
    for (var i = 0, n = options.length; i < customSettings[0]; ++i) {
        result += options.charAt(Math.floor(Math.random() * n));
    }
    return result;
}


// call updatePassword once the page loads
window.onload = function() {
	addPasswords(10);
};

// infinite scroll
window.onscroll = function() {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 200) {
    	addPasswords(1);
    }
};

// add more passwords to list view
function addPasswords(amount) {
	var i = 0;
	while (i<amount) {
		var div = document.getElementById('password-container');
		if (isMobile) {
			div.innerHTML = div.innerHTML + '<p class="password">' + generatePassword() + '</p>';
		} else {
			div.innerHTML = div.innerHTML + '<input type="text" class="password" value="' + generatePassword() + '" onClick="select()" maxlength="8" spellcheck="false" /><br>';
		}
		i++;
	}
}

// google analytics
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-92639312-3', 'auto');
ga('send', 'pageview');