// let h1=document.querySelector('h1')
// let body=document.querySelector('body')


// h1.addEventListener('mouseenter',function(e){
//     h1.style.color='rgb(216, 142, 4)'
//     h1.style.webkitTextStroke='0'
//     h1.backgroundClip='text' 

    
// })

// h1.addEventListener('mouseleave',function(){
//     h1.style.color='transparent'
//     h1.style.webkitTextStroke='2px rgb(77, 76, 76)'
// })

// addEventListener('mousemove',(e)=>{
//     console.log(e.clientX, e.clientY);
   

//     document.body.style.setProperty("--x", e.clientX + "px")
//     document.body.style.setProperty("--y", e.clientY + "px")

addEventListener("mousemove",(e)=>{
    document.body.style.setProperty("--x",e.clientX+"px")
    document.body.style.setProperty("--y",e.clientY+"px")
})
