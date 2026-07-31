let num=0

var h1=document.querySelector('h1')
var inc=document.getElementById('inc')
var dec=document.getElementById('dec')

inc.addEventListener('click',function(){
    num++
    h1.innerHTML= `${num}`
})
dec.addEventListener('click',function(){
    num--
    h1.innerHTML= `${num}`
})
