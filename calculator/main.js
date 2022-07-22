let calculator = {
    operator: null,
    answer: null,
    equation: null,
    input: 1
}

let equationText = document.querySelector(".screen > .equation");
let answerText = document.querySelector(".screen > .answer");

let numList = document.querySelectorAll(".numbers > input");
numList.forEach(
    (num) => {
        num.addEventListener("click", (e) => {
            if (calculator.input === 2 && calculator.firstInput) {
                calculator.secondInput ? calculator.secondInput += e.target.value : calculator.secondInput = e.target.value;
            } else if (calculator.input === 1) {
                calculator.firstInput ? calculator.firstInput += e.target.value : calculator.firstInput = e.target.value;
            } else if (calculator.input === 1 && calculator.operator && !calculator.firstInput) {
                calculator.firstInput = calculator.answer
            }
            
            calculator.equation = `${calculator.firstInput} ${calculator.operator} ${calculator.secondInput}`;
            equationText.textContent = calculator.equation;

        })}
)

let operatorList = document.querySelectorAll("#operator");
operatorList.forEach(
    (operator) => {
        operator.addEventListener("click", (e) => {
            if (e.target.value === "=") {
                submitEquation();
            } else {
                !calculator.firstInput ? calculator.firstInput = calculator.answer : 0; //takes answer as first input if there is no first input
                calculator.operator = e.target.value;
                calculator.input = 2
            }
        })});

function writeAnswer() {
    answerText.textContent = calculator.answer 
}


let evaluate = () => {
    let evaluation = 0;
    calculator.operator === '+' ? (evaluation = +calculator.firstInput + +calculator.secondInput) :
    calculator.operator === '-' ? (evaluation = calculator.firstInput - calculator.secondInput) :
    calculator.operator === 'x' ? (evaluation = calculator.firstInput * calculator.secondInput) :
    evaluation = (calculator.firstInput / calculator.secondInput);
    return evaluation
    }


function submitEquation() {
    calculator.answer = evaluate();
    writeAnswer();
    console.log(`${calculator.firstInput} ${calculator.operator} ${calculator.secondInput}`)
    console.log(calculator.answer)
    resetCalculator()
}

function resetCalculator() {
    delete(calculator.firstInput);
    delete(calculator.secondInput);
    calculator.operator = null;
    calculator.input = 1;
}