'use strict'

function compare_a_object(a, b) {
    if (+a.number_order === +b.number_order) {
        if (+a.number === +b.number) {
            return 0;
        }
        for (let i = 0; i < a.number.length; i++) { // сравниваем посимвольно
            if (+a.number[i] < +b.number[i]) {
                return 1
            } else if (+a.number[i] > +b.number[i]) {
                return -1
            }
        }
    }
    return (a.number_order < b.number_order) ? -1 : 1;
}

const _n_k_string = prompt('Введите n и k через пробел', '1 1')
const _n_k_array = _n_k_string.split(' ')

const _n = _n_k_array[0];
const _k = _n_k_array[1];

const n = _n >= 1 && _n <= 1000 ? _n :
    (typeof _n === "number") ? _n : false
let k = _k >= 1 && _k <= Math.pow(10, 4) ? _k :
    (typeof _k === "number") ? _k : false

let default_a_string = ''

let result = 0

for (let i = 0; i < n; i++) {
    default_a_string += '1 '
}

const a_string = prompt(`Введите ${n} чисел через пробел`, default_a_string)
let a_array = a_string.substring(0, a_string.length - 1).split(' ')
let a_array_objects = []

const sum_begin = a_array.reduce((sum, current) => +sum + +current, 0);

if (a_array.length <= +n) {
    for (let i = 0; i < a_array.length; i++) {
        if (a_array[i] === '' || isNaN(Number(a_array[i])) ||
            (Number(a_array[i])) < 1 && (Number(a_array[i])) > (Math.pow(10, 9) + 1)) {
            a_array = null
            console.error('Введены невалидные числа')
            break
        }

        a_array_objects.push({
            number: a_array[i],
            number_order: a_array[i].length // разряд числа
        })

    }
} else {
    a_array = null
    console.error('Вы ввели боль чисел, чем n') //TODO Предложение еще раз ввести вторую строку
}

a_array_objects.sort(compare_a_object).reverse();

a_array_objects.forEach(function (item) {
    if (k > 0){
        item.number = item.number.replace(/\d/, '9')
        k--
    }
})

const sum_end = a_array_objects.map((item) => item.number).reduce((sum, current) => +sum + +current, 0);

result = sum_end - sum_begin

console.log(result)