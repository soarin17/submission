
const toRadians = degrees => degrees * (Math.PI / 180);

const sin = degrees => Math.sin(toRadians(degrees));
const cos = degrees => Math.cos(toRadians(degrees));
const tan = degrees => Math.tan(toRadians(degrees));

function addnum(func1, func2, value) {
    return func1(value) + func2(value);
}
const result = addnum(sin, cos, 30);
console.log(result);
