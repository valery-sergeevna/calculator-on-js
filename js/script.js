window.addEventListener('DOMContentLoaded', function () {

    var equation = document.querySelector('.total');

    //find buttons
    document.querySelectorAll('#calculator span').forEach(btn => {
        btn.addEventListener('click', onBtnClick);
    });

    //processing function
    function onBtnClick(e) {
        document.querySelectorAll('#calculator span').forEach(btn => {
            btn.addEventListener('click', onBtnClick);
        });
        //clear total
        if (e.target.classList.contains('clear')) {
            equation.textContent = '0';
        } else if (e.target.classList.contains('eval')) {
            let total = eval(equation.textContent);
            equation.textContent = total
            if (equation.textContent.length >= 13) {
                equation.textContent = parseFloat(total).toPrecision(11);
            }
        } else if (equation.innerHTML === '0') {
            equation.textContent = e.target.textContent;
        } else {
            equation.textContent += e.target.textContent;
            if (equation.textContent.length >= 13) {
                equation.textContent = parseFloat(equation.textContent).toPrecision(12);
            }
        }
    }
});













// const keys = document.querySelectorAll('span');
// const opers = ['+', '-', 'x', '÷'];
// let decimal = false;

// keys.forEach(item => {
//     item.addEventListener('click', function(e) {

//         let input = document.querySelector('.screen');
//         let inputVal = input.innerHTML;
//         let btnVal = this.innerHTML;
//         let total;

//         if (btnVal == 'C') {
//             input.innerHTML = '';
//             decimal = false;
//         } else if (btnVal == '=') {
//             let equation = inputVal;
//             let lastChar = equation[equation.length - 1];

//             equation = equation.replace(/x/g, '*').replace(/÷/g, '/');

//             if (opers.indexOf(lastChar) > -1 || lastChar == '.'){
//                 equation = equation.replace(/.$/, '');
//             }

//             if (equation) {
//                 total = eval(equation);
//                 if (total.toString().indexOf('.') != -1){
//                     total = total.toFixed(2);
//                 }
//                 input.innerHTML = total;
//             }

//             decimal = false;
//         } else if (opers.indexOf(btnVal) > -1) {

//             let lastChar = inputVal[inputVal.length - 1];

//             if (inputVal != '' && opers.indexOf(lastChar) == -1){
//                 input.innerHTML += btnVal;
//             }
//             else if (inputVal == '' && btnVal == '-') {input.innerHTML += btnVal;}

//             if (opers.indexOf(lastChar) > -1 && inputVal.length > 1) {
//                 input.innerHTML = inputVal.replace(/.$/, btnVal);
//             }

//             decimal = false;
//         }

//         else if (btnVal == '.') {
//             if (!decimal) {
//                 input.innerHTML += btnVal;
//                 decimal= true;
//             }
//         }

//         else {
//             input.innerHTML += btnVal;
//         }

//         e.preventDefault();
//     });
// });