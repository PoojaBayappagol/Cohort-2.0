let count = 0;

let inner=document.querySelector(".inner");
let btn=document.querySelector("button");
let h1=document.querySelector("h1");



btn.addEventListener("click",function(){
    let timer = setInterval(() => {
    count++;
    
    h1.innerHTML = `${count}%`;
    inner.style.width = `${count}%`;



    if (count === 100) {
       
        clearInterval(timer);
    }

    btn.style.pointerEvents='none';

    
}, 50);

})