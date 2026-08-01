const quotes = [
  "Stay strong.",
  "Keep moving.",
  "Dream big.",
  "Never quit.",
  "Be fearless.",
  "Trust yourself.",
  "Learn daily.",
  "Stay humble.",
  "Keep smiling.",
  "Think positive.",
  "Work hard.",
  "Be kind.",
  "Stay focused.",
  "Enjoy life.",
  "Stay curious.",
  "Make it happen.",
  "Keep growing.",
  "Believe always.",
  "Choose happiness.",
  "One step at a time.",
  "Start today.",
  "Create your future.",
  "Shine bright.",
  "Keep improving.",
  "Success awaits.",
  "Be unstoppable.",
  "Take the chance.",
  "Love what you do.",
  "Keep dreaming.",
  "Stay inspired."
];


var main=document.querySelector('main')
var btn=document.querySelector('button')

btn.addEventListener('click',function(){
    var c1=Math.floor(Math.random()*255);
    var c2=Math.floor(Math.random()*255)
    var c3=Math.floor(Math.random()*255)


    var quote=quotes[Math.floor(Math.random()*quotes.length)]

    var h1=document.createElement('h1')
    h1.innerHTML=`${quote}`
    h1.style.position='absolute';
    h1.style.left=Math.floor(Math.random()*window.innerWidth-100)+"px";
    h1.style.top=Math.floor(Math.random()*window.innerHeight-100)+"px";
    h1.style.rotate=Math.floor(Math.random()*360)+"deg";
    h1.style.color=`rgb(${c1},${c2},${c3})`;
    h1.style.scale=Math.floor(Math.random()*3)+1;

    main.appendChild(h1)
    
})
