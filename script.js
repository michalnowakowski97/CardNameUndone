const cardNumber = document.querySelector('.card-front__card-number');
const cardName = document.querySelector('.card-front__name');
const cardExpMonth = document.querySelector('.month');
const cardExpYear = document.querySelector('.year');
const cardBack = document.querySelector('.card-back p');
let inputName = document.getElementById('name');
let inputNumber = document.getElementById('card-number');
let inputMonth = document.querySelector('.input-month')
let inputYear = document.querySelector('.input-year')
const button = document.querySelector('.button');
let flag = true;
let flag1 = true;
function changeName(){
    cardName.textContent = inputName.value;
}
function changeNumber(){
    cardNumber.textContent = inputNumber.value
}
function changeMonth(){
    cardExpMonth.textContent = inputMonth.value;
    // cardExpYear.textContent = inputYear.value;
}
function changeYear(){
    cardExpYear.textContent = inputMonth.value;
    // cardExpYear.textContent = inputYear.value;
}
function checkForm(e){
    e.preventDefault();
    let after = document.createElement('span');
    if(flag){
    if(inputName.value === ""){
        after.style.color = 'hsl(0, 100%, 66%)';
        after.style.display = "block";
        after.style.fontSize = "13px";
        after.classList.add('afters');
        after.textContent = "Can't be blank";
        document.querySelector('.name').appendChild(after);
        flag = false;
        }
    }
    if(flag1){
    if(!(typeof inputNumber.value === 'number')){
        let after = document.createElement('span');
        after.style.color = 'hsl(0, 100%, 66%)';
        after.style.display = "block";
        after.style.fontSize = "13px";
        after.textContent = "Wrong format, numbers only";
        document.querySelector('.number-input').appendChild(after);
        flag1 = false;
    }
}

}
inputName.addEventListener('input', changeName);
inputNumber.addEventListener('input', changeNumber);
inputMonth.addEventListener('input', changeMonth);
inputYear.addEventListener('input', changeYear);

button.addEventListener('click', checkForm);

