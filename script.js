const theNumber = document.querySelector("#number");
const decBtn= document.querySelector("#dec-btn");
const incBtn = document.querySelector("#inc-btn");
const resBtn= document.querySelector("#res-btn");



const increaseBtn= function()
{
    let num = Number(theNumber.innerText);
    num+=1;
    theNumber.innerText=num;
}



const decreaseBtn= function()
{
    let num = Number(theNumber.innerText);
    num-=1;
    theNumber.innerText=num;
}


const resetBtn= function()
{
    
   theNumber.innerText = 0;
}


incBtn.addEventListener('click',increaseBtn);

decBtn.addEventListener('click',decreaseBtn);

resBtn.addEventListener('click',resetBtn);