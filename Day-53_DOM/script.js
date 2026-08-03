let p=document.querySelector('p')

let characters="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopquvwxyz"

let text=p.innerHTML

let iteration=0;

p.addEventListener('mouseenter',()=>{
    setInterval(() => {
        const    str=text.split('').map(function( char,index ){
            if(index<iteration){
                return char
            }
            return characters.split('')[Math.floor(Math.random()*53)]
        }).join('')

        p.innerText=str;

        iteration+=0.2;
        
    }, 300);
})