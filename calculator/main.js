calculator = {
    operator,
    input: 1,
}

let numList = document.querySelectorAll(".numbers > input")
numList.forEach(
    (num) => {
        num.addEventListener("click", (e) => {
            if (calculator.firstInput && calculator.operator) {
                calculator.secondInput ? calculator.secondInput += e.target.value : calculator.secondInput = e.target.value
            } else {
                calculator.firstInput ? calculator.firstInput += e.target.value : calculator.firstInput = e.target.value
            }
            // calculator.firstInput && calculator.operator ? calculator.secondInput += `${e.target.value}` : calculator.firstInput += `${e.target.value}`
        })}
)

let operatorList = document.querySelectorAll("#operator");
operatorList.forEach(
    (operator) => {
        operator.addEventListener("click", (e) => {
            (e.target.value === "=") ? submitEquation() : (calculator.operator = e.target.value);
        })});


function submitEquation() {
    let evaluation = 0;

    let evaluate = () => {
        calculator.operator === '+' ? (evaluation = +calculator.firstInput + +calculator.secondInput) :
        calculator.operator === '-' ? (evaluation = calculator.firstInput - calculator.secondInput) :
        calculator.operator === 'x' ? (evaluation = calculator.firstInput * calculator.secondInput) :
        evaluation = (calculator.firstInput / calculator.secondInput)
    }

    evaluate()
    console.log(`${calculator.firstInput} ${calculator.operator} ${calculator.secondInput}`)
    console.log(evaluation)
    resetCalculator()
}

function resetCalculator() {
    calculator.firstInput ? delete(calculator.firstInput) : 0;
    calculator.secondInput ? delete(calculator.secondInput) : 0;
    calculator.operator ? calculator.operator = null : 0;
}