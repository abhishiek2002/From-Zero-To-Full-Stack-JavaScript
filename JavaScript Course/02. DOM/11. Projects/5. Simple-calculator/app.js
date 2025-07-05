document.getElementById('btn').addEventListener('click', () =>{
    // Get element from the DOM
    let num1 = Number(document.querySelector(".num1").value);
    let num2 = Number(document.querySelector(".num2").value);

    const main = document.querySelector('.main');

    let Op = document.getElementById('selectOp').value;
    // let  result;
    let result = document.querySelector(".result");
    let answer;

    switch (Op) {
        case "plus":
            answer = num1 + num2;
            break;
        case "min":
            answer = num1- num2;
            break;
        case "dev":
            answer = num1/num2;
            break;
        case "multi":
            answer = num1*num2;
            break;
        default:
            break;
    };

    // main.innerHTML = `
    // <div class = "finalResult">
    // <h1>Your Result </h1>
    // <p>${result}</p>
    // </div>
    
    // `

    result.innerHTML = `${answer}`;


})