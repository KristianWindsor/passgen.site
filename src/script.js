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

// test for vowels
function hasVowels(str) {
  var m = str.toLowerCase().match(/[aeiou]/gi);
  return m === null ? false : true;
}

function generatePassword() {
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