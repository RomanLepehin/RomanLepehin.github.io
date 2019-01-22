for (var i = 0; i < 9; i++) {
	document.getElementById('game').innerHTML += '<div class="block"></div>';
}
var hod = 0;
document.getElementById('game').onclick = function(event) {
	if(event.target.className == 'block') {
		if (hod % 2 == 0) {
			event.target.innerHTML = 'x';
		}
		else {
			event.target.innerHTML = '0';
		}
		hod++;
	}
	winner();
}

var allBlock = document.getElementsByClassName('block');
var reload = false;
var t = 5;
var timer;
function winner() {
	if (allBlock[0].innerHTML == 'x' && allBlock[1].innerHTML == 'x'  && allBlock[2].innerHTML == 'x') {alert('Крестики победили!!!'); reload = true};
	if (allBlock[3].innerHTML == 'x' && allBlock[4].innerHTML == 'x'  && allBlock[5].innerHTML == 'x') {alert('Крестики победили!!!'); reload = true};
	if (allBlock[6].innerHTML == 'x' && allBlock[7].innerHTML == 'x'  && allBlock[8].innerHTML == 'x') {alert('Крестики победили!!!'); reload = true};
	if (allBlock[0].innerHTML == 'x' && allBlock[3].innerHTML == 'x'  && allBlock[6].innerHTML == 'x') {alert('Крестики победили!!!'); reload = true};
	if (allBlock[1].innerHTML == 'x' && allBlock[4].innerHTML == 'x'  && allBlock[7].innerHTML == 'x') {alert('Крестики победили!!!'); reload = true};
	if (allBlock[2].innerHTML == 'x' && allBlock[5].innerHTML == 'x'  && allBlock[8].innerHTML == 'x') {alert('Крестики победили!!!'); reload = true};
	if (allBlock[0].innerHTML == 'x' && allBlock[4].innerHTML == 'x'  && allBlock[8].innerHTML == 'x') {alert('Крестики победили!!!'); reload = true};
	if (allBlock[2].innerHTML == 'x' && allBlock[4].innerHTML == 'x'  && allBlock[6].innerHTML == 'x') {alert('Крестики победили!!!'); reload = true};
	
	if (allBlock[0].innerHTML == '0' && allBlock[1].innerHTML == '0'  && allBlock[2].innerHTML == '0') {alert('Нолики победили!!!'); reload = true};
	if (allBlock[3].innerHTML == '0' && allBlock[4].innerHTML == '0'  && allBlock[5].innerHTML == '0') {alert('Нолики победили!!!'); reload = true};
	if (allBlock[6].innerHTML == '0' && allBlock[7].innerHTML == '0'  && allBlock[8].innerHTML == '0') {alert('Нолики победили!!!'); reload = true};
	if (allBlock[0].innerHTML == '0' && allBlock[3].innerHTML == '0'  && allBlock[6].innerHTML == '0') {alert('Нолики победили!!!'); reload = true};
	if (allBlock[1].innerHTML == '0' && allBlock[4].innerHTML == '0'  && allBlock[7].innerHTML == '0') {alert('Нолики победили!!!'); reload = true};
	if (allBlock[2].innerHTML == '0' && allBlock[5].innerHTML == '0'  && allBlock[8].innerHTML == '0') {alert('Нолики победили!!!'); reload = true};
	if (allBlock[0].innerHTML == '0' && allBlock[4].innerHTML == '0'  && allBlock[8].innerHTML == '0') {alert('Нолики победили!!!'); reload = true};
	if (allBlock[2].innerHTML == '0' && allBlock[4].innerHTML == '0'  && allBlock[6].innerHTML == '0') {alert('Нолики победили!!!'); reload = true};
	
	if (reload == true) {
		obr();
	}
}


function obr () {
		document.getElementById('out').innerHTML = 'Начните заново игру через ' + t + ' секунд';
		t--;
	if (t < 0) {
		clearTimeout(timer);
		location.reload();
	}
	else {
		timer = setTimeout(obr, 1000);
	}
}


// 0 1 2
// 3 4 5
// 6 7 8