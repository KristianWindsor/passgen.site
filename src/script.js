// a password generator . website
// by kristian windsor

// detect if mobile device
var isMobile = false;
if (/Android|webOS|iPhone|iPod|BlackBerry|IEMobile/i.test(navigator.userAgent)) {
	isMobile = true;
}

// declare possible following characters (eg: possible characters that can be the first letters, possible letters that can follow the letter 'a', etc.)
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
	document.getElementById(divId).setAttribute("style", "background-color: #fff; color:#565656;");
	settings = settingsInt;
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
	var charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()+-=[];,./?",
        result = "";
    for (var i = 0, n = charset.length; i < 10; ++i) {
        result += charset.charAt(Math.floor(Math.random() * n));
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
	var verbs = ["is","are","has","get","see","need","know","would","find","take","want","does","learn","become","come","include","thank","provide","create","add","understand","consider","choose","develop","remember","determine","grow","allow","supply","bring","improve","maintain","begin","exist","tend","enjoy","perform","decide","identify","continue","protect","require","occur","write","approach","avoid","prepare","build","achieve","believe","receive","seem","discuss","realize","contain","follow","refer","solve","describe","prefer","prevent","discover","ensure","expect","invest","reduce","speak","appear","explain","explore","involve","lose","afford","agree","hear","remain","represent","apply","forget","recommend","rely","vary","generate","obtain","accept","communicate","complain","depend","enter","happen","indicate","suggest","survive","appreciate","compare","imagine","manage","differ","encourage","expand","prove","react","recognize","relax","replace","borrow","earn","emphasize","enable","operate","reflect","send","anticipate","assume","engage","enhance","examine","install","participate","intend","introduce","relate","settle","assure","attract","distribute","overcome","owe","succeed","suffer","throw","acquire","adapt","adjust","argue","arise","confirm","encouraging","incorporate","justify","organize","ought","possess","relieve","retain","shut","calculate","compete","consult","deliver","extend","investigate","negotiate","qualify","retire","rid","weigh","arrive","attach","behave","celebrate","convince","disagree","establish","ignore","imply","insist","pursue","remaining","specify","warn","accuse","admire","admit","adopt","ance","apologize","approve","attend","belong","commit","criticize","deserve","destroy","hesitate","illustrate","inform","manufacturing","persuade","pour","propose","remind","shall","submit","suppose","translate","be",",have",",use","make","look","help","go","being","think","read","keep","start","give","play","feel","put","set","change","say","cut","show","try","check","call","move","pay","let","increase","turn","ask","buy","guard","hold","offer","travel","cook","dance","excuse","live",",purchase","deal","mean","fall","produce","search","spend","talk","upset","tell","cost","drive","support","remove","return","run","appropriate","reserve","leave","reach","rest","serve","watch","charge","break","stay","visit","affect","cover","report","rise","walk","pick","lift","mix","stop","teach","concern","fly","born",",gain","save","stand","fail","lead","listen","worry","express",",handle","meet","release","sell","finish","press","ride","spread","spring","wait","display","flow","hit","shoot","touch","cancel","cry","dump","push","select","conflict","die","eat","fill","jump","kick","pass","pitch","treat","abuse","beat","burn","deposit","print","raise","sleep","advance","connect","consist","contribute","draw","fix","hire","join","kill","sit","tap","win","attack","claim","drag","drink","guess","pull","wear","wonder","count","doubt","feed","impress","repeat","seek","sing","slide","strip","wish","collect","combine","command","dig","divide","hang","hunt","march","mention","smell","survey","tie","escape","expose","gather","hate","repair","scratch","strike","employ","hurt","laugh","lay","respond","split","strain","struggle","swim","train","wash","waste","convert","crash","fold","grab","hide","miss","permit","quote","recover","resolve","roll","sink","slip","suspect","swing","twist","concentrate","estimate","prompt","refuse","regret","reveal","rush","shake","shift","shine","steal","suck","surround","bear","dare","delay","hurry","invite","kiss","marry","pop",",pray",",pretend","punch","quit","reply","resist","rip","rub","smile","spell","stretch","tear","wake","wrap","was","like","even",",film","water","been","well",",were","example","own","study","must",",form","air","place","number","part",",field","fish","process","heat","hand","experience","job","book","end","point","type","value","body","market","guide","interest","state","radio","course","company","price","size","card","list","mind","trade","line","care","group","risk","word","force","light","name","school","amount","order","practice","research","sense","service","piece","web","boss","sport","page","term","test","answer","sound","focus","matter","soil","board","oil","picture","access","garden","open","range","rate","reason","according","site","demand","exercise","image","case","cause","coast","age","boat","record","result","section","building","mouse","cash","class","dry","plan","store","tax","involved","side","space","rule","weather","figure","man","model","source","earth","program","design","feature","purpose","question","rock","act","birth","dog","object","scale","sun","fit","note","profit","related","rent","speed","style","war","bank","content","craft","bus","exchange","eye","fire","position","pressure","stress","advantage"];
	var adjectives = ["different","used","important","every","large","available","popular","able","basic","known","various","difficult","several","united","historical","hot","useful","mental","scared","additional","emotional","old","political","similar","healthy","financial","medical","traditional","federal","entire","strong","actual","significant","successful","electrical","expensive","pregnant","intelligent","interesting","poor","happy","responsible","cute","helpful","recent","willing","nice","wonderful","impossible","serious","huge","rare","technical","typical","competitive","critical","electronic","immediate","aware","educational","environmental","global","legal","relevant","accurate","capable","dangerous","dramatic","efficient","powerful","foreign","hungry","practical","psychological","severe","suitable","numerous","sufficient","unusual","consistent","cultural","existing","famous","pure","afraid","obvious","careful","latter","unhappy","acceptable","aggressive","boring","distinct","eastern","logical","reasonable","strict","administrative","automatic","civil","former","massive","southern","unfair","visible","alive","angry","desperate","exciting","friendly","lucky","realistic","sorry","ugly","unlikely","anxious","comprehensive","curious","impressive","informal","inner","pleasant","sexual","sudden","terrible","unable","weak","wooden","asleep","confident","conscious","decent","embarrassed","guilty","lonely","mad","nervous","odd","remarkable","substantial","suspicious","tall","tiny","more","some","one","all","many","most","other","such","even","new","just","good","any","each","much","own","great","another","same","few","free","right","still","best","public","human","both","local","sure","better","general","specific","enough","long","small","less","high","certain","little","common","next","simple","hard","past","big","possible","particular","real","major","personal","current","left","national","least","natural","physical","short","last","single","individual","main","potential","professional","international","lower","open","according","alternative","special","working","true","whole","clear","dry","easy","cold","commercial","full","low","primary","worth","necessary","positive","present","close","creative","green","late","fit","glad","proper","complex","content","due","effective","middle","regular","fast","independent","original","wide","beautiful","complete","active","negative","safe","visual","wrong","ago","quick","ready","straight","white","direct","excellent","extra","junior","pretty","unique","classic","final","overall","private","separate","western","alone","familiar","official","perfect","bright","broad","comfortable","flat","rich","warm","young","heavy","valuable","correct","leading","slow","clean","fresh","normal","secret","tough","brown","cheap","deep","objective","secure","thin","chemical","cool","extreme","exact","fair","fine","formal","opposite","remote","total","vast","lost","smooth","dark","double","equal","firm","frequent","internal","sensitive","constant","minor","previous","raw","soft","solid","weird","amazing","annual","busy","dead","false","round","sharp","thick","wise","equivalent","initial","narrow","nearby","proud","spiritual","wild","adult","apart","brief","crazy","prior","rough","sad","sick","strange","external","illegal","loud","mobile","nasty","ordinary","royal","senior","super","tight","upper","yellow","dependent","funny","gross","ill","spare","sweet","upstairs","usual","brave","calm","dirty","downtown","grand","honest","loose","male","quiet","brilliant","dear","drunk","empty","female","inevitable","neat","ok","representative","silly","slight","smart","stupid","temporary","weekly","that","this","what","which","time","these","work","no","only","then","first","money","over","business","his","game","think","after","life","day","home","economy","away","either","fat","key","training","top","level","far","fun","house","kind","future","action","live","period","subject","mean","stock","chance","beginning","upset","chicken","head","material","salt","car","appropriate","inside","outside","standard","medium","choice","north","square","born","past","capital","shot","front","living","plastic","express","feeling","otherwise","plus","savings","animal","budget","minute","character","maximum","novel","plenty","select","background","forward","glass","joint","master","red","vegetable","ideal","kitchen","mother","party","relative","signal","street","connect","minimum","sea","south","status","daughter","hour","trick","afternoon","gold","mission","agent","corner","east","neither","parking","routine","swimming","winter","airline","designer","dress","emergency","evening","extension","holiday","horror","mountain","patient","proof","west","wine","expert","native","opening","silver","waste","plane","leather","purple","specialist","bitter","incident","motor","pretend","prize","resident"];
	var nouns = ["people","history","way","art","world","information","map","two","family","government","health","system","computer","meat","year","thanks","music","person","reading","method","data","food","understanding","theory","law","bird","literature","problem","software","control","knowledge","power","ability","economics","love","internet","television","science","library","nature","fact","product","idea","temperature","investment","area","society","activity","story","industry","media","thing","oven","community","definition","safety","quality","development","language","management","player","variety","video","week","security","country","exam","movie","organization","equipment","physics","analysis","policy","series","thought","basis","boyfriend","direction","strategy","technology","army","camera","freedom","paper","environment","child","instance","month","truth","marketing","university","writing","article","department","difference","goal","news","audience","fishing","growth","income","marriage","user","combination","failure","meaning","medicine","philosophy","teacher","communication","night","chemistry","disease","disk","energy","nation","road","role","soup","advertising","location","success","addition","apartment","education","math","moment","painting","politics","attention","decision","event","property","shopping","student","wood","competition","distribution","entertainment","office","population","president","unit","category","cigarette","context","introduction","opportunity","performance","driver","flight","length","magazine","newspaper","relationship","teaching","cell","dealer","finding","lake","member","message","phone","scene","appearance","association","concept","customer","death","discussion","housing","inflation","insurance","mood","woman","advice","blood","effort","expression","importance","opinion","payment","reality","responsibility","situation","skill","statement","wealth","application","city","county","depth","estate","foundation","grandmother","heart","perspective","photo","recipe","studio","topic","collection","depression","imagination","passion","percentage","resource","setting","ad","agency","college","connection","criticism","debt","description","memory","patience","secretary","solution","administration","aspect","attitude","director","personality","psychology","recommendation","response","selection","storage","version","alcohol","argument","complaint","contract","emphasis","highway","loss","membership","possession","preparation","steak","union","agreement","cancer","currency","employment","engineering","entry","interaction","mixture","preference","region","republic","tradition","virus","actor","classroom","delivery","device","difficulty","drama","election","engine","football","guidance","hotel","owner","priority","protection","suggestion","tension","variation","anxiety","atmosphere","awareness","bath","bread","candidate","climate","comparison","confusion","construction","elevator","emotion","employee","employer","guest","height","leadership","mall","manager","operation","recording","sample","transportation","charity","cousin","disaster","editor","efficiency","excitement","extent","feedback","guitar","homework","leader","mom","outcome","permission","presentation","promotion","reflection","refrigerator","resolution","revenue","session","singer","tennis","basket","bonus","cabinet","childhood","church","clothes","coffee","dinner","drawing","hair","hearing","initiative","judgment","lab","measurement","mode","mud","orange","poetry","police","possibility","procedure","queen","ratio","relation","restaurant","satisfaction","sector","signature","significance","song","tooth","town","vehicle","volume","wife","accident","airport","appointment","arrival","assumption","baseball","chapter","committee","conversation","database","enthusiasm","error","explanation","farmer","gate","girl","hall","historian","hospital","injury","instruction","maintenance","manufacturer","meal","perception","pie","poem","presence","proposal","reception","replacement","revolution","river","son","speech","tea","village","warning","winner","worker","writer","assistance","breath","buyer","chest","chocolate","conclusion","contribution","cookie","courage","dad","desk","drawer","establishment","examination","garbage","grocery","honey","impression","improvement","independence","insect","inspection","inspector","king","ladder","menu","penalty","piano","potato","profession","professor","quantity","reaction","requirement","salad","sister","supermarket","tongue","weakness","wedding","affair","ambition","analyst","apple","assignment","assistant","bathroom","bedroom","beer","birthday","celebration","championship","cheek","client","consequence","departure","diamond","dirt","ear","fortune","friendship","funeral","gene","girlfriend","hat","indication","intention","lady","midnight","negotiation","obligation","passenger"];
	return verbs[Math.floor(Math.random() * verbs.length)] + "-" + adjectives[Math.floor(Math.random() * adjectives.length)] + "-" + nouns[Math.floor(Math.random() * nouns.length)];
}
function generatePasswordCustom() {

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