var btn=document.querySelector('button')
var body=document.querySelector('main')
var card=document.querySelector('.card')
var h1=document.querySelector('h1')

var arr=['haesh','sarthak','sathwik','anubhav','dev','akarsh','danesh']

btn.addEventListener('click',function(){
     let c1=Math.floor(Math.random()*255)
     let c2=Math.floor(Math.random()*255)
     let c3=Math.floor(Math.random()*255)
     let num=Math.floor(Math.random()*100)

     let name=arr[Math.floor(Math.random()*arr.length)]

     body.style.backgroundColor=`rgb(${c1},${c2},${c3})`
     card.style.backgroundColor=`rgb(${c2},${c3},${c1})`
     h1.innerHTML=`${name}`
     
})



