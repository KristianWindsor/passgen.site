// A Password Generator .website
// by Kristian Windsor

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

// generate passwords
function generatePasswords() {
	document.getElementById('lengthDisplay').innerHTML = document.getElementById('length').value;
	var i = 0,
	    div = document.getElementById('results');

	div.innerHTML = "";
	while (i < 3) {
		if (isMobile) {
			div.innerHTML = div.innerHTML + '<p class="password">' + getPassword() + '</p>';
		} else {
			div.innerHTML = div.innerHTML + '<input type="text" class="password" value="' + getPassword() + '" onClick="select()" maxlength="32" spellcheck="false" /><br>';
		}
		i++;
	}
}


function getPassword() {
	var count = 0,
		wordyPassword = "",
		notWordyPassword = "",
		passLength = document.getElementById('length').value;

	// Generate wordy password
    while (wordyPassword.length != passLength) {
    	count++;
    	wordyPassword = "";

    	// add verb if 8+ char long
    	if (passLength > 8) {
			wordyPassword = verbs[Math.floor(Math.random() * verbs.length)] + "-";
    	}

    	// add adjective(s) if 11+ char long
    	if (passLength > 13) {
			for (var i = 0; i < (passLength-7)/11; ++i) {
				wordyPassword += adjectives[Math.floor(Math.random() * adjectives.length)] + "-";
			}
		}

		// add noun and number
		var noun = nouns[Math.floor(Math.random() * nouns.length)];
    	if (passLength < 5) {
			noun = noun.substr(0,passLength-1);
		}
		wordyPassword += noun + numbers[Math.floor(Math.random() * numbers.length)];

		// proper grammar
    	wordyPassword = wordyPassword.charAt(0).toUpperCase() + wordyPassword.slice(1);
	}

    // Do character replacements
    //
    // TODO
    //

    // Generate not wordy password
	for (var i = 0, n = allChars.length; i < passLength; ++i) {
        notWordyPassword += allChars.charAt(Math.floor(Math.random() * n));
    }

    console.log("took " + count + " tries to make " + passLength + " char password: " + wordyPassword);

    // Mix wordy with not wordy
    if (randomChance(document.getElementById('wordStructure').value)) {
	    return wordyPassword;
    } else {
	    return notWordyPassword;
	}
}


function generateRandomNumber(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

// return percentage
function randomChance(percent) {
    if (generateRandomNumber(0,10) <= percent) {
    	return true;
    } else {
    	return false;
    }
}


// google analytics
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-92639312-3', 'auto');
ga('send', 'pageview');