const number1 = (15);
const number2 = (3);

function Multiplication(number1, number2){
    const number = Number(number1)
    const number3 = Number(number2)
    if (Number.isNaN(number)) {
        console.log("THIS IS NOT A NUMBER. RUN THIS PROGRAM AND TRY AGAIN")
        process.exit(1)
    };
    if (Number.isNaN(number3)) {
      console.log("THIS IS NOT A NUMBER. RUN THIS PROGRAM AND TRY AGAIN")
      process.exit(1)
    };
    console.log(number1*number2)
};
Multiplication(2,4);