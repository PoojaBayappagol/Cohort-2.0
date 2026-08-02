let h1=document.querySelector('h1')
let btn=document.querySelectorAll('button')
let main=document.querySelector('main')


btn.forEach(function(elem){
    elem.addEventListener('click',function(){
    if(elem.innerHTML=='Add Friend'){
        elem.innerHTML='Remove Friend'
    }
    else{
        elem.innerHTML='Add Friend'
    }

})
})