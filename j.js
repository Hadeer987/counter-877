
const tor=document.querySelector('#title');
let currentValue=0;
const incre=document.querySelector('#inc');
const decre=document.querySelector('#dec');
const cor=document.querySelector('#co');

incre.addEventListener("click", () => {
currentValue++;
tor.textContent= currentValue;
});
dec.addEventListener("click", () => {
    currentValue--;
    tor.textContent= currentValue;
    });
    co.addEventListener("click", () => {
        currentValue=0;
        tor.textContent= currentValue;
        });