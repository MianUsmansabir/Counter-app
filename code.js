let count = 0;

let increase = document.querySelector('.inc');
let decrease = document.querySelector('.dec');
let countno = document.querySelector('.Counter');
let reset= document.querySelector('.res');


increase.addEventListener("click", () => {
    count++;
    countno.innerHTML = count;
});

decrease.addEventListener("click", () => {
    if(count >0){
        count--;
    }
    countno.innerHTML = count;
});

reset.addEventListener("click", () => {
    count=0;
    countno.innerHTML = count;
});

