// new date array object
var d = new Date();

// words for minutes and hours are stored in arrays
var arrMins = [
  ' five minutes ' , 
  ' ten minutes ' , 
  ' quarter ' , 
  ' twenty ' ,
  ' half past ' , 
  ];
var arrHours = [
  ' twelve' , ' one', ' two', ' three', ' four', ' five', ' six', ' seven', ' eight', ' nine', ' ten', ' eleven' 
  ];

//hold the current minutes and hour
var hourNow = d.getHours();
var minNow =  d.getMinutes();
var min, hour;

//set the index of arrHours
function setHours() {
  if (hourNow >=11) {
    hour = hourNow - 12
  }
  else {
    hour = hourNow;
  }
  if (minNow > 30) {
		hour++;
  }
  return arrHours[hour];
}

//find the correct index of arrMin
function setMinutes() {
  if (minNow <= 5 || minNow >= 55) {
    min = arrMins[0];
  }
  else if (minNow <=10  || minNow >= 50) {
    min = arrMins[1];
  }
  else if (minNow <=10  || minNow >= 50) {
    min = arrMins[1];
  }
  else if (minNow <=15  || minNow >= 45) {
    min = arrMins[2];
  }
  else if (minNow < 30  || minNow > 30) {
    min = arrMins[3];
  }
  return min;
}

//find the correct preposition ('to' or 'after')
function setPos() {
  if (minNow > 30) {
    pos = ' to ';
  } else {
    pos = ' after ';
  }
  return pos;
  
}

//create the current time in words
function printTimeInWords() {
  var msg;
  if (minNow === 0) {
    return '<span class="its">It\'s</span><br>' + '<span class="hour">' + setHours() + '</span><br>' + ' <span class="min">o\'clock</span>.';
  } 
  else if (minNow === 30) {
    return '<span class="its">It\'s</span> <br> <span class="min">half past</span> <br>' + '<span class="hour">' + setHours() + '</span>' + '.';
  }
  else {
	  
    msg = '<span class="its">It\'s</span> <br >' + '<span class="min">' + setMinutes() + '</span>' + '<span class="pos">' + setPos() + '</span> <br>' + '<span class="hour">' + setHours() + '</span>' + '.';
    return msg;
  }
}

//print to page
var el = document.getElementById('output');
el.innerHTML = printTimeInWords();