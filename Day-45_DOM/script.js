let count = 0;

let inner=document.querySelector(".inner");
let btn=document.querySelector("button");
let h1=document.querySelector("h1");
let main=document.querySelector("main");

let num=50+Math.floor(Math.random()*50);

btn.addEventListener("click",function(){

    let h2=document.createElement("h2");
    h2.innerHTML=`Total time to download the page is ${num/10} seconds`;
    h2.style.color="white";
    main.appendChild(h2);

    let timer = setInterval(() => {
    count++;
    
    h1.innerHTML = `${count}%`;
    inner.style.width = `${count}%`;
    btn.innerHTML = "Downloading...";



    if (count === 100) {
       
        clearInterval(timer);
        btn.innerHTML = "Downloaded";
        btn.style.backgroundColor = "#bad7f7";
    }
    btn.style.pointerEvents='none';


    
}, num);

    

})


