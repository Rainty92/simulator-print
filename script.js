
let valueArrEng = [];
let valueArrRu = [];

let btn = document.querySelectorAll('.btn');
let btnRu = document.querySelectorAll('.btn span')



let scoreCounter = document.querySelector('.score__value');
scoreCounter.innerHTML = 0;

//добавляем значения в массив//
btn.forEach((e) => {
	let data = e.getAttribute('data-btn');
	//console.log(data)
	if (data != '' && data != null) {
		let addArrEng = valueArrEng.push(data);
	}
})

btn.forEach((e) => {
	let data = e.getAttribute('data-btn-ru');
	//console.log(data)
	if (data != '' && data != null) {
		let addArrRu = valueArrRu.push(data);
	}
})


let language = document.getElementById('language');

let valueBox = document.querySelector('.random-value');
let valueBoxWrapper = document.querySelector('.random_wrapper');

let min = document.querySelector('.timer_min');
let sec = document.querySelector('.timer_sec');
sec.innerHTML = 0;
min.innerHTML = 0;

let speedValue = document.getElementById('speedLVL');

let counterStart = 0;

//отображение значений массива//
document.querySelector('.start').onclick = function () {
	let speed = speedValue.value;
	speedValue.disabled = true;
	language.disabled = true;
	document.querySelector('.timer__value').classList.remove('opacity');
	event.preventDefault();
	//вывод элементов value//
	if (counterStart < 1) {
		let valueTimer = setInterval(() => {
			callRandomValue();
			valueBoxWrapper.classList.remove('falseValue');
			valueBoxWrapper.classList.remove('trueValue');
			btn.forEach((e) => {
				e.classList.remove('active__btn');
			})

		}, speed);
		counterStart++;
		let timeTimer = setInterval(() => {
			sec.innerHTML++;
			if (sec.innerHTML == 60) {
				min.classList.remove('opacity');
				min.innerHTML++;
				sec.innerHTML = 0;
				if (min.innerHTML == 1) {
					alert(`you score ${scoreCounter.innerHTML}`)
					window.location.reload();

				}
			}
		}, 1000);


		//остановка таймера и рандомайзера//
		document.querySelector('.stop').onclick = function () {
			event.preventDefault();
			clearInterval(valueTimer);
			clearInterval(timeTimer);
			counterStart--;
		}
	}

}

let sensorCounter = 0;
document.querySelector('.stop').onclick = function () {
	event.preventDefault();
	sensorCounter++;
}


//выводим рандомные значения на экран//

function callRandomValue() {

	if (language.value == 'ENG') {
		arrayRandElementEng(valueArrEng);
		function arrayRandElementEng(valueArrEng) {
			console.log('eng')
			let rand = Math.floor(Math.random() * valueArrEng.length);
			//return valueArr[rand];
			document.querySelector('.random-value').innerHTML = valueArrEng[rand];
			let randomValue = valueArrEng[rand];

			btn.forEach((e) => {
				if (e.getAttribute('data-btn') == randomValue) {
					btn.forEach((e) => {
						e.classList.remove('keyup')
					})
					e.classList.add('keyup');
				}
			})
		}
	}
	if (language.value == 'RU') {
		arrayRandElementRU(valueArrRu);
		function arrayRandElementRU(valueArrRu) {
			console.log('ru')
			let rand = Math.floor(Math.random() * valueArrRu.length);
			//return valueArr[rand];
			document.querySelector('.random-value').innerHTML = valueArrRu[rand];
			let randomValue = valueArrRu[rand];

			btn.forEach((e) => {
				if (e.getAttribute('data-btn-ru') == randomValue) {
					btn.forEach((e) => {
						e.classList.remove('keyup')
					})
					e.classList.add('keyup');
				}
			})
		}

	}


}



document.addEventListener('keydown', (event) => {
	let keyName = event.key;
	console.log(keyName)
	btn.forEach((e) => {
		e.getAttribute('data-btn')
		e.getAttribute('data-btn-ru')
		if (keyName == e.getAttribute('data-btn') || keyName == e.getAttribute('data-btn-ru')) {
			if (keyName != valueBox.innerHTML) {
				btn.forEach((e) => {
					e.classList.remove('falseValue')
				})
				e.classList.add('falseValue')
			}
			if (keyName == valueBox.innerHTML) {
				valueBoxWrapper.classList.remove('falseValue');
				valueBoxWrapper.classList.add('trueValue');
				if (!e.classList.contains('active__btn')) {
					scoreCounter.innerHTML++;
				}
				e.classList.add('active__btn')

			} else {
				valueBoxWrapper.classList.remove('trueValue');
				valueBoxWrapper.classList.add('falseValue');
			}

			window.setTimeout(function () {
				btn.forEach((e) => {
					e.classList.remove('trueValue')
					e.classList.remove('falseValue')
				})
			}, 2000)
		}
	})
})

			//if (language.value == 'ENG') {
			//	btn.forEach((e) => {
			//		e.getAttribute('data-btn')
			//		if (keyName == e.getAttribute('data-btn')) {
			//			changeColor(e)
			//if (keyName != valueBox.innerHTML) {
			//	btn.forEach((e) => {
			//		e.classList.remove('falseValue')
			//	})
			//	e.classList.add('falseValue')
			//}
			//if (keyName == valueBox.innerHTML) {
			//	valueBoxWrapper.classList.remove('falseValue');
			//	valueBoxWrapper.classList.add('trueValue');
			//	if (!e.classList.contains('active__btn')) {
			//		scoreCounter.innerHTML++;
			//	}
			//	e.classList.add('active__btn')

			//} else {
			//	valueBoxWrapper.classList.remove('trueValue');
			//	valueBoxWrapper.classList.add('falseValue');
			//}

			//window.setTimeout(function () {
			//	btn.forEach((e) => {
			//		e.classList.remove('trueValue')
			//		e.classList.remove('falseValue')
			//	})
			//}, 2000)
			//		}
			//	})
			//}
			//if (language.value == 'RU') {
			//btn.forEach((e) => {
			//	e.getAttribute('data-btn-ru')
			//	if (keyName == e.getAttribute('data-btn-ru')) {
			//		changeColor(e);
			//if (keyName != valueBox.innerHTML) {
			//	btn.forEach((e) => {
			//		e.classList.remove('falseValue')
			//	})
			//	e.classList.add('falseValue')
			//}
			//if (keyName == valueBox.innerHTML) {
			//	valueBoxWrapper.classList.remove('falseValue');
			//	valueBoxWrapper.classList.add('trueValue');
			//	if (!e.classList.contains('active__btn')) {
			//		scoreCounter.innerHTML++;
			//	}
			//	e.classList.add('active__btn')

			//} else {
			//	valueBoxWrapper.classList.remove('trueValue');
			//	valueBoxWrapper.classList.add('falseValue');
			//}

			//window.setTimeout(function () {
			//	btn.forEach((e) => {
			//		e.classList.remove('trueValue')
			//		e.classList.remove('falseValue')
			//	})
			//}, 2000)

			//			}

			//		})
			//	}
			//})