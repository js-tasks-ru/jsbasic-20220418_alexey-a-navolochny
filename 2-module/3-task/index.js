let calculator = {
	sum(){
		return this.t + this.k;
	},

	mul(){
		return this.t * this.k;
	},
	
	read(a,b){
	  this.t = a;
	  this.k = b;
	}
};

// НЕ УДАЛЯТЬ СТРОКУ, НУЖНА ДЛЯ ПРОВЕРКИ
window.calculator = calculator; // делает ваш калькулятор доступным глобально
