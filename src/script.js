// a password generator . website
// by kristian windsor

// detect if mobile device
var isMobile = false;
if (/Android|webOS|iPhone|iPod|BlackBerry|IEMobile/i.test(navigator.userAgent)) {
	isMobile = true;
	addStylesheet();
}
window.onresize = function() {
	if (isMobile) {
		addStylesheet();
	}
};

// add mobile-specific stylesheet
function addStylesheet() {
	var head  = document.getElementsByTagName('head')[0];
	var link  = document.createElement('link');
	link.rel  = 'stylesheet';
	link.type = 'text/css';
	if (window.innerHeight > window.innerWidth) {
		link.href = 'mobile.css';
	} else {
		link.href = 'mobile-landscape.css';
	}
	link.media = 'all';
	head.appendChild(link);
	window.scrollTo(0, 0);
}

// rotate refresh icon 360 degrees
var rotateDegrees = -30;
function rotateRefreshIcon(number) {
	// 'number' is to temporarily increase the rotation, to create a hover effect
	rotateDegrees += number;
	var el = document.getElementById('refresh');
	el.style.webkitTransform = 'rotate('+rotateDegrees+'deg)'; 
	el.style.mozTransform = 'rotate('+rotateDegrees+'deg)'; 
	el.style.msTransform = 'rotate('+rotateDegrees+'deg)'; 
	el.style.oTransform = 'rotate('+rotateDegrees+'deg)'; 
	el.style.transform = 'rotate('+rotateDegrees+'deg)';
	if (number < 30) {
		rotateDegrees -= number;
	}
}

// declare possible following characters (eg: possible characters that can be the first letters, possible letters that can follow the letter 'a', etc.)
var firstChar = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var aChar = ["a","b","c","d","f","g","h","l","m","n","p","q","r","s","t","u","v","w","x","z","B","C","D","F","G","H","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Z","1","2","3","4","5","6","7","9","0","-","=",",",".",";","/","[","]"];
var bChar = ["a","b","e","f","i","l","o","r","s","u","y","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","1","2","3","4","5","6","7","8","9","0","-","=",",",".","/","[","]"];
var cChar = ["a","e","h","i","k","l","o","r","t","u","x","y","A","B","D","E","F","G","H","I","J","K","L","M","N","O","Q","R","S","T","U","V","W","X","Y","Z","1","2","3","4","5","7","8","9","0","-","=",",",".",";","/","[","]"];
var dChar = ["a","d","e","i","j","k","o","r","s","t","u","x","y","A","B","C","D","E","F","G","H","I","J","K","L","M","O","P","Q","R","S","U","V","W","X","Y","Z","1","2","3","4","5","6","7","8","9","0","-","=",",",".",";","/","[","]"];
var eChar = ["b","c","d","e","f","g","h","l","m","n","p","q","r","s","t","u","v","w","x","y","z","A","B","C","D","F","G","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","1","2","3","4","5","6","7","8","9","0","-","=",",",".",";","/","[","]"];
var fChar = ["a","e","f","i","l","o","r","s","u","y","A","B","C","D","E","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","1","2","3","4","5","6","7","8","9","0","-","=",",",".",";","/"];
var gChar = ["a","e","f","g","h","i","l","n","o","r","s","u","y","z","A","B","C","D","E","F","H","I","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","1","2","3","4","5","6","7","8","9","0","-","=",",",".",";","/"];
var hChar = ["a","e","h","i","m","o","t","u","y","A","B","C","D","E","F","G","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","1","2","3","4","5","6","7","9","0","-","=",",",".",";","/"];
var iChar = ["a","b","c","d","e","f","g","i","k","l","m","n","o","p","q","r","s","t","u","v","w","z","A","B","C","D","E","F","G","H","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","1","2","3","4","5","6","7","8","9","0","-","=",",",".",";","/","[","]"];
var jChar = ["a","e","i","j","k","o","u","y","A","B","C","D","E","F","G","H","I","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","1","2","3","4","5","6","7","8","9","0","-","=",",",".",";","/","[","]"];
var kChar = ["a","e","h","i","k","l","o","r","s","u","w","x","y","z","A","B","C","D","E","F","G","H","I","J","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","1","2","3","4","5","6","7","8","9","0","-","=",",",".",";","/","[","]"];
var lChar = ["a","c","d","e","f","i","l","m","n","o","p","s","t","u","y","z","A","B","C","D","E","F","G","H","I","J","K","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","1","2","3","4","5","6","7","8","9","0","-","=",",",".",";","/","[","]"];
var mChar = ["a","c","e","f","h","i","k","m","o","p","r","t","u","y","z","A","B","C","D","E","F","G","H","I","J","K","L","O","P","Q","R","S","T","U","V","W","X","Y","Z","1","2","3","4","5","6","7","8","9","0","-","=",",",".",";","/","[","]"];
var nChar = ["a","d","e","i","k","m","n","o","q","s","t","u","y","A","B","C","D","E","F","G","H","I","J","K","L","O","P","Q","R","S","T","U","V","W","X","Y","Z","1","2","3","4","5","6","7","8","9","0","-","=",",",".",";","/","[","]"];
var oChar = ["b","c","d","f","g","h","i","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","A","B","C","D","E","F","G","H","I","J","K","L","M","N","P","Q","R","S","T","U","V","W","X","Y","Z","1","2","3","4","5","6","7","8","9","-","=",",",".",";","/","[","]"];
var pChar = ["a","e","h","i","l","o","p","r","s","t","u","w","x","y","z","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","Q","R","S","T","U","V","W","X","Y","Z","1","2","3","4","5","6","7","8","9","0","-","=",",",".",";","/","[","]"];
var qChar = ["a","e","i","o","q","u","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","R","S","T","U","V","W","X","Y","Z","1","2","3","4","5","6","7","8","9","0","-","=",",",".",";","/","[","]"];
var rChar = ["a","b","e","f","i","k","l","o","p","q","r","s","t","u","x","y","z","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","S","T","U","V","W","X","Y","Z","1","2","3","4","5","6","7","8","9","0","-","=",",",".",";","/","[","]"];
var sChar = ["a","c","e","h","i","k","l","m","n","o","p","q","r","s","t","u","w","y","z","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","T","U","V","W","X","Y","Z","1","2","3","4","5","7","8","9","0","-","=",",",".",";","/","[","]"];
var tChar = ["a","e","f","h","i","l","o","r","t","u","v","w","x","y","z","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","U","V","W","X","Y","Z","1","3","4","5","6","7","8","9","0","-","=",",",".",";","/","[","]"];
var uChar = ["b","c","d","e","f","g","h","i","k","l","m","n","p","q","r","s","t","u","v","x","y","z","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","V","W","X","Y","Z","1","2","3","4","5","6","7","8","9","0","-","=",",",".",";","/","[","]"];
var vChar = ["a","e","h","i","l","o","r","s","u","v","x","y","z","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","W","X","Y","Z","1","2","3","4","5","6","7","8","9","0","-","=",",",".",";","/","[","]"];
var wChar = ["a","e","h","i","o","r","u","w","y","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","X","Y","Z","1","2","3","4","5","6","7","8","9","0","-","=",",",".",";","/","[","]"];
var xChar = ["a","e","i","o","u","x","y","z","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","Y","Z","1","2","3","4","5","6","7","8","9","0","-","=",",",".",";","/","[","]"];
var yChar = ["a","c","e","i","l","m","n","o","s","u","z","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Z","1","2","3","4","5","6","7","8","0","-","=",",",".",";","/","[","]"];
var zChar = ["a","e","k","l","m","n","o","p","q","s","u","v","y","z","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","1","2","3","4","5","6","7","8","9","0","-","=",",",".",";","/","[","]"];
var aCharC = ["a","b","c","d","f","g","h","l","m","n","p","q","r","s","t","u","v","w","x","z","1","2","3","4","5","6","7","9","0","-","=",",",".",";","/","[","]"];
var bCharC = ["a","b","e","f","i","l","o","r","s","u","y","1","2","3","4","5","6","7","8","9","0","-","=",",",".","/","[","]"];
var cCharC = ["a","e","h","i","k","l","o","r","t","u","x","y","1","2","3","4","5","7","8","9","0","-","=",",",".",";","/","[","]"];
var dCharC = ["a","d","e","i","j","k","o","r","s","t","u","x","y","1","2","3","4","5","6","7","8","9","0","-","=",",",".",";","/","[","]"];
var eCharC = ["b","c","d","e","f","g","h","l","m","n","p","q","r","s","t","u","v","w","x","y","z","1","2","3","4","5","6","7","8","9","0","-","=",",",".",";","/","[","]"];
var fCharC = ["a","e","f","i","l","o","r","s","u","y","1","2","3","4","5","6","7","8","9","0","-","=",",",".",";","/","[","]"];
var gCharC = ["a","e","f","g","h","i","l","n","o","r","s","u","y","z","1","2","3","4","5","6","7","8","9","0","-","=",",",".",";","/","[","]"];
var hCharC = ["a","e","h","i","m","o","t","u","y","1","2","3","4","5","6","7","9","0","-","=",",",".",";","/","[","]"];
var iCharC = ["a","b","c","d","e","f","g","i","k","l","m","n","o","p","q","r","s","t","u","v","w","z","1","2","3","4","5","6","7","8","9","0","-","=",",",".",";","/","[","]"];
var jCharC = ["a","e","i","j","k","o","u","y","1","2","3","4","5","6","7","8","9","0","-","=",",",".",";","/","[","]"];
var kCharC = ["a","e","h","i","k","l","o","r","s","u","w","x","y","z","1","2","3","4","5","6","7","8","9","0","-","=",",",".",";","/","[","]"];
var lCharC = ["a","c","d","e","f","i","l","m","n","o","p","s","t","u","y","z","1","2","3","4","5","6","7","8","9","0","-","=",",",".",";","/","[","]"];
var mCharC = ["a","c","e","f","h","i","k","m","o","p","r","t","u","y","z","1","2","3","4","5","6","7","8","9","0","-","=",",",".",";","/","[","]"];
var nCharC = ["a","d","e","i","k","m","n","o","q","s","t","u","y","1","2","3","4","5","6","7","8","9","0","-","=",",",".",";","/","[","]"];
var oCharC = ["b","c","d","f","g","h","i","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","1","2","3","4","5","6","7","8","9","-","=",",",".",";","/","[","]"];
var pCharC = ["a","e","h","i","l","o","p","r","s","t","u","w","x","y","z","1","2","3","4","5","6","7","8","9","0","-","=",",",".",";","/","[","]"];
var qCharC = ["a","e","i","o","q","u","1","2","3","4","5","6","7","8","9","0","-","=",",",".",";","/","[","]"];
var rCharC = ["a","b","e","f","i","k","l","o","p","q","r","s","t","u","x","y","z","1","2","3","4","5","6","7","8","9","0","-","=",",",".",";","/","[","]"];
var sCharC = ["a","c","e","h","i","k","l","m","n","o","p","q","r","s","t","u","w","y","z","1","2","3","4","5","7","8","9","0","-","=",",",".",";","/","[","]"];
var tCharC = ["a","e","f","h","i","l","o","r","t","u","v","w","x","y","z","1","3","4","5","6","7","8","9","0","-","=",",",".",";","/","[","]"];
var uCharC = ["b","c","d","e","f","g","h","i","k","l","m","n","p","q","r","s","t","u","v","x","y","z","1","2","3","4","5","6","7","8","9","0","-","=",",",".",";","/","[","]"];
var vCharC = ["a","e","h","i","l","o","r","s","u","v","x","y","z","1","2","3","4","5","6","7","8","9","0","-","=",",",".",";","/","[","]"];
var wCharC = ["a","e","h","i","o","r","u","w","y","1","2","3","4","5","6","7","8","9","0","-","=",",",".",";","/","[","]"];
var xCharC = ["a","e","i","o","u","x","y","z","1","2","3","4","5","6","7","8","9","0","-","=",",",".",";","/","[","]"];
var yCharC = ["a","c","e","i","l","m","n","o","s","u","z","1","2","3","4","5","6","7","8","0","-","=",",",".",";","/","[","]"];
var zCharC = ["a","e","k","l","m","n","o","p","q","s","u","v","y","z","1","2","3","4","5","6","7","8","9","0","-","=",",",".",";","/","[","]"];
var one = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","1","2","3","4","5","6","7","8","9","0","-","=",",",".",";","/","[","]"];
var two = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","1","2","3","4","5","6","7","8","9","0","-","=",",",".",";","/","[","]"];
var three = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","1","2","3","4","5","6","7","8","9","0","-","=",",",".",";","/","[","]"];
var four = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","1","2","3","4","5","6","7","8","9","0","-","=",",",".",";","/","[","]"];
var five = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","1","2","3","4","5","6","7","8","9","0","-","=",",",".",";","/","[","]"];
var six = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","1","2","3","4","5","6","7","8","9","0","-","=",",",".",";","/","[","]"];
var seven = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","1","2","3","4","5","6","7","8","9","0","-","=",",",".",";","/","[","]"];
var eight = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","1","2","3","4","5","6","7","8","9","0","-","=",",",".",";","/","[","]"];
var nine = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","1","2","3","4","5","6","7","8","9","0","-","=",",",".",";","/","[","]"];
var zero = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","1","2","3","4","5","6","7","8","9","0","-","=",",",".",";","/","[","]"];
var dashChar = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","1","2","3","4","5","6","7","8","9","0","-","=",",",".",";","/","[","]"];
var equalChar = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","1","2","3","4","5","6","7","8","9","0","-","=",",",".",";","/","[","]"];
var commaChar = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","1","2","3","4","5","6","7","8","9","0","-","=",",",".",";","/","[","]"];
var periodChar = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","1","2","3","4","5","6","7","8","9","0","-","=",",",".",";","/","[","]"];
var semicolonChar = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","1","2","3","4","5","6","7","8","9","0","-","=",",",".",";","/","[","]"];
var slashChar = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","1","2","3","4","5","6","7","8","9","0","-","=",",",".",";","/","[","]"];
var forBracketChar = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","1","2","3","4","5","6","7","8","9","0","-","=",",",".",";","/","[","]"];
var backBracketChar = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","1","2","3","4","5","6","7","8","9","0","-","=",",",".",";","/","[","]"];
var lastChar = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","1","2","3","4","5","6","7","8","9","0","-","=",",",".",";","/","[","]"];

function generatePassword() {
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
			case "A":
				chosenArray = aCharC;
				break;
			case "B":
				chosenArray = bCharC;
				break;
			case "C":
				chosenArray = cCharC;
				break;
			case "D":
				chosenArray = dCharC;
				break;
			case "E":
				chosenArray = eCharC;
				break;
			case "F":
				chosenArray = fCharC;
				break;
			case "G":
				chosenArray = gCharC;
				break;
			case "H":
				chosenArray = hCharC;
				break;
			case "I":
				chosenArray = iCharC;
				break;
			case "J":
				chosenArray = jCharC;
				break;
			case "K":
				chosenArray = kCharC;
				break;
			case "L":
				chosenArray = lCharC;
				break;
			case "M":
				chosenArray = mCharC;
				break;
			case "N":
				chosenArray = nCharC;
				break;
			case "O":
				chosenArray = oCharC;
				break;
			case "P":
				chosenArray = pCharC;
				break;
			case "Q":
				chosenArray = qCharC;
				break;
			case "R":
				chosenArray = rCharC;
				break;
			case "S":
				chosenArray = sCharC;
				break;
			case "T":
				chosenArray = tCharC;
				break;
			case "U":
				chosenArray = uCharC;
				break;
			case "V":
				chosenArray = vCharC;
				break;
			case "W":
				chosenArray = wCharC;
				break;
			case "X":
				chosenArray = xCharC;
				break;
			case "Y":
				chosenArray = yCharC;
				break;
			case "Z":
				chosenArray = yCharC;
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
			case "-":
				chosenArray = dashChar;
				break;
			case "=":
				chosenArray = equalChar;
				break;
			case ",":
				chosenArray = commaChar;
				break;
			case ".":
				chosenArray = periodChar;
				break;
			case ";":
				chosenArray = semicolonChar;
				break;
			case "/":
				chosenArray = slashChar;
				break;
			case "[":
				chosenArray = forBracketChar;
				break;
			case "]":
				chosenArray = backBracketChar;
				break;
			}
		passwordString += chosenArray[Math.floor(Math.random() * chosenArray.length)];
		i++;
	}

	// choose last character
	passwordString += lastChar[Math.floor(Math.random() * lastChar.length)];
	
	// test the password to make sure it meets the qualifications
	if (passwordString.replace(/[^0-9]/g,"").length == 1 && passwordString.replace(/[A-Z]/g, '').length == 7 && passwordString.replace(/\W/g, '').length == 7) {
		// display the password
		document.getElementById('password').value = passwordString;
		// rotate the refresh button
		rotateRefreshIcon(30);
	} else {
		// the test failed, try again
		generatePassword();
	}
}

// call generatePassword once the page loads
window.onload = function() {
  generatePassword();
};

// rotate the refresh button on hover
document.getElementById('refresh').addEventListener("mouseover", function() {
	var el = document.getElementById('refresh');
	rotateRefreshIcon(15);
}, false);
document.getElementById('refresh').addEventListener("mouseout", function() {
	rotateRefreshIcon(0);
}, false);

// call generatePassword once the refresh button is clicked or tapped
document.getElementById('refresh').addEventListener('click', function() {
    if (!isMobile) {
	    generatePassword();
	}
}, false);
document.getElementById('refresh').addEventListener('touchstart', function() {
    generatePassword();
}, false);

// allow selecting password on mobile
var tempEnableTouch = false;
document.getElementById('password').addEventListener('touchstart', function(e) {
    tempEnableTouch = true;
    this.focus();
    this.setSelectionRange(0, this.value.length);
    e.preventDefault();
}, false);

// disable scrolling and zooming on mobile
document.addEventListener('touchstart', function (e) {
	if (!tempEnableTouch) {
	    e.preventDefault();
	}
	tempEnableTouch = false;
});