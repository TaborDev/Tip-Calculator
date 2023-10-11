const buttonEl = document.querySelector('.js-calc-button');
const billInput = document.querySelector('.js-bill-input');
const tipInput = document.querySelector('.js-tip-input');
const totalSpan = document.querySelector('.js-total-span');

function calculateTotal(){
    const billValue = billInput.value;
    const tipValue = tipInput.value;
    const totalValue = billValue * (1 + tipValue / 100);
    totalSpan.innerText = totalValue.toFixed(2); 
}

buttonEl.addEventListener("click", calculateTotal);

