// JavaScript Document
function changeIframe() {
  document.getElementById('count').disabled = true;
  document.getElementById('count').style.backgroundColor = "#EEE";
  document.getElementById('message').innerHTML = "<font color='red'><b><img src='img/loading.gif'> running...</b></font>";
  runSearch();
}

function runSearch(){
  var count = document.getElementById('count').value;
  var searchQuery = createRandomWord();
  document.getElementById('bingIframe').src = 'https://www.bing.com/search?q=' + searchQuery + '+&go=&qs=n&sk=&form=QBLH';
  count = count - 1;
  document.getElementById('count').value = count;
  if (count > 0){
    var timeToHold = Math.floor(Math.random() * 30 + 10);
    t = setTimeout("runSearch()", timeToHold * 1000);
  } else {
    document.getElementById('bingIframe').src = 'https://www.bing.com/search?q=spoofee+deals&go=&qs=n&sk=&form=QBLH';
    document.getElementById('bingIframe').src = 'https://www.google.com/search?hl=en&q=spoofee+deals&oq=spoofee+deals';
    document.getElementById('bingIframe').src = 'https://www.bing.com/rewards/dashboard';
	document.getElementById('count').disabled = false;
	document.getElementById('count').style.backgroundColor = "#FFF";
	document.getElementById('message').innerHTML = "<font color='green'><b>Finished!</b></font>";
  }
}

function createRandomWord() {
  var length = Math.floor(Math.random() * 5 + 5);
  var consonants = 'bcdfghjklmnpqrstvwxyz',
    vowels = 'aeiou',
    rand = function(limit) {
      return Math.floor(Math.random()*limit);
    },
    i, word='', length = parseInt(length,10),
    consonants = consonants.split(''),
    vowels = vowels.split('');
  for (i=0;i<length/2;i++) {
    var randConsonant = consonants[rand(consonants.length)],
      randVowel = vowels[rand(vowels.length)];
    word += (i===0) ? randConsonant.toUpperCase() : randConsonant;
    word += i*2<length-1 ? randVowel : '';
  }
  return word;
}
