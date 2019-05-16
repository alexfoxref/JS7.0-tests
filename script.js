// Функция sum должна возвращать тип данных true. Проверить её на это.


function sum(a, b) {
	return a + b > 10;
}
sum(2,2)




// Переменная num должна быть равна 5. Проверить на соответствие.


let arr = [ [1, 2, 3], [4, 5, 6], [7,8,9] ];
let num = arr[1][1];




// Узнать, что нам вернет функция each в данных условиях. Проверить её на тип данных, который она возвращает,
// на соответствие ожидаемому результату (который вы получили) и на свойство length.

var each = function(startArr, f){return f(startArr)};
var array = [64, 49, 36, 25, 16];
var myFunc = function(a){
	var newArr = [];
	for (var i = 0; i < a.length; i++) {
		newArr[i]=Math.sqrt(a[i]);
	}
	return newArr;
}
console.log(each(array, myFunc));




let assert = require('chai').assert;

describe('Проверки', () => {

	describe('sum', function() {

		it('сумма - true', function() {
			assert.isTrue(sum(2, 2), 'неправда')
		});
	});

	describe('num', function() {

		it('переменная равна 5', function() {
			assert.equal(num, 5, 'переменная не равна 5')
		});
	});

	describe('each', function() {

		it('тип данных - массив', function() {
			assert.isArray(each(array, myFunc), 'не массив')
		});
		it('ответ: [8,7,6,5,4]', function() {
			assert.sameMembers(each(array, myFunc), [8, 7, 6, 5, 4], 'ответ не равен [8,7,6,5,4]')
		});
		it('длина массива равна 5', function() {
			assert.lengthOf(each(array, myFunc), 5, 'размер массива не 5')
		});
	});
})

module.exports = {
	sum: sum,
	num: num,
	arr: array,
	func: myFunc,
	each: each
}