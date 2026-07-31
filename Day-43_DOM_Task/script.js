

var h1=document.querySelector('h1')
var btn=document.querySelector('button')

btn.addEventListener('click',function(){
     let num=Math.floor(Math.random()*100)
     h1.innerHTML=`${num}`
})