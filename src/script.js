window.onload = function() {
	var digit_btn = [],
		btn_operation = [],
		number = ['', ''],
		operand = 0,
		kod_op = '';

	for (var i = 0; i <= 10; i++) {		// Массив для кннопок с цифрами
		digit_btn[i] = document.getElementsByClassName('digit')[i];
	}
	for (var i = 0; i <= 7; i++) {		// Массив для кннопок с операциями
		btn_operation[i] = document.getElementsByClassName('btn-operation')[i];
	}
	input_pole = document.getElementsByClassName('input-pole')[0]; // Поле ввода чисел

	var Calculator = function (){
		this.result = 0;
		return this;
	};	

// Добавление цифр в поле input
	Calculator.prototype.digit_add = function (d, op) {
		number[op] += d.innerHTML
		this.result = number[op];
		return this;
	};

	Calculator.prototype.clear_input = function () {
		operand = 0;
		number[0] = '';
		number[1] = '';
		this.result = '0';
		return this;
	};

// Функция определения операции по нажатой кнопке
	function calc_operation(num_op){
		switch (num_op) {
			case 0:
				return Calc.backspace(operand).result;
				break;
			case 1:
				return Calc.clear_input().result;
				break;
			case 2:
				return Calc.sqrt().result;
				break;
			case 3:
				return Calc.div().result;
				break;
			case 4:
				return Calc.mul().result;
				break;
			case 5:
				return Calc.sub().result;
				break;
			case 6:
				return Calc.add().result;
				break;
			case 7:
				return Calc.calculation().result;
				break;
			default:
				alert('Неизвесный код выбранной операции');
		};
	};

	Calculator.prototype.proverka = function (op) {
		if (number[op] === '') {
			number[op] = '0';
		}
		this.result = number[op];
		return this;
	};

	Calculator.prototype.get_operation = function (i) {
		this.result = calc_operation(i);
		return this;
	};	

	Calculator.prototype.backspace = function (op) {
		number[op] = number[op].substring(0, number[op].length - 1);
		this.result = Calc.proverka(op).result;
		return this;
	};

	Calculator.prototype.sqrt = function () {
		operand = 0;
		number[0] = Math.sqrt(number[0])
		this.result = number[0];
		return this;
	};

	Calculator.prototype.add = function () {
		operand = 1;
		kod_op = '+';
		this.result = kod_op;
		return this;
	};
	
	Calculator.prototype.sub = function () {
		operand = 1;
		kod_op = '-';
		this.result = kod_op;
		return this;
	};

	Calculator.prototype.mul = function () {
		operand = 1;
		kod_op = '*';
		this.result = kod_op;
		return this;
	};

	Calculator.prototype.div = function () {
		operand = 1;
		kod_op = '/';
		this.result = kod_op;
		return this;
	};

	Calculator.prototype.calculation = function () {
		operand = 0;
		number[operand] = Calc.proverka(operand).result;
		number[operand + 1] = Calc.proverka(operand + 1).result;
		switch (kod_op) {
			case '+':	
				number[operand] = parseFloat(number[operand]) + parseFloat(number[operand + 1]);
				number[operand + 1] = '';
				this.result = number[operand];
				return this;
				break;
			case '-':
				number[operand] = parseFloat(number[operand]) - parseFloat(number[operand + 1]);
				number[operand + 1] = '';
				this.result = number[operand];
				return this;
				break;
			case '*':
				number[operand] = parseFloat(number[operand]) * parseFloat(number[operand + 1]);
				number[operand + 1] = '';
				this.result = number[operand];
				return this;
				break;
			case '/':
				number[operand] = parseFloat(number[operand]) / parseFloat(number[operand + 1]);
				number[operand + 1] = '';
				this.result = number[operand];
				return this;
				break;	
			default:
				alert('Неизвесный код выбранной операции');
		}	

	};

	var Calc =new Calculator();

// При нажатии на кнопку с цифрами  
  	digit_btn.forEach(function(item, i, digit_btn) { // forEach разбирает массив на элементы item
  		item.addEventListener("click", function() {
			input_pole.value = Calc.digit_add(item, operand).result;
  		});
  	});

// При нажатии на кнопку с операцией  
  	btn_operation.forEach(function(item, i, btn_operation) { // forEach разбирает массив на элементы item
  		item.addEventListener("click", function() {
			input_pole.value = Calc.get_operation(i).result;
  		});
  	});  	

}
