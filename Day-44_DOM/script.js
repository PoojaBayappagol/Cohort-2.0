let main=document.querySelector('main');
let btn=document.querySelector('button');


btn.addEventListener("click",function(){

    var c1=Math.floor(Math.random()*256);
    var c2=Math.floor(Math.random()*255)
    var c3=Math.floor(Math.random()*255)


    var div=document.createElement('div');
    div.style.width="100px";
    div.style.height="100px";
    div.style.backgroundColor="red";
    div.style.position='absolute';
    div.style.left=Math.floor(Math.random()*window.innerWidth-100)+"px";
    div.style.top=Math.floor(Math.random()*window.innerHeight-100)+"px";
    div.style.rotate=Math.floor(Math.random()*360)+"deg";
    div.style.backgroundColor=`rgb(${c1},${c2},${c3})`;
    
    main.appendChild(div);
})