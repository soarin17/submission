const fruits = ['banana','apple', 'mango', 'guavo'];
fruits.sort();
console.log(fruits)
const numbers = [1,34,2,543,324,323];
numbers.sort(function (a,b) {
    return a - b;
})
console.log(numbers)

numbers.sort(function (a,b) {
    return b - a;
})
console.log(numbers)