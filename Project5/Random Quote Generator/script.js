const quotes = [
  {
    quote: "Believe in yourself and all that you are.",
    primaryColor: "#90CAF9",   // soft blue
    secondaryColor: "#E3F2FD"  // very light blue
  },
  {
    quote: "Success doesn’t come from what you do occasionally, it comes from what you do consistently.",
    primaryColor: "#F48FB1",   // soft pink
    secondaryColor: "#FCE4EC"
  },
  {
    quote: "Push yourself, because no one else is going to do it for you.",
    primaryColor: "#A5D6A7",   // soft green
    secondaryColor: "#E8F5E9"
  },
  {
    quote: "Dream it. Wish it. Do it.",
    primaryColor: "#FFCC80",   // soft orange
    secondaryColor: "#FFF3E0"
  },
  {
    quote: "Don’t stop until you’re proud.",
    primaryColor: "#CE93D8",   // soft purple
    secondaryColor: "#F3E5F5"
  },
  {
    quote: "Difficult roads often lead to beautiful destinations.",
    primaryColor: "#80DEEA",   // soft cyan
    secondaryColor: "#E0F7FA"
  },
  {
    quote: "Great things never come from comfort zones.",
    primaryColor: "#FFF59D",   // soft yellow
    secondaryColor: "#FFFDE7"
  },
  {
    quote: "Stay positive, work hard, make it happen.",
    primaryColor: "#B39DDB",   // soft lavender
    secondaryColor: "#EDE7F6"
  },
  {
    quote: "Your only limit is your mind.",
    primaryColor: "#DCE775",   // soft lime
    secondaryColor: "#F9FBE7"
  },
  {
    quote: "Small steps every day lead to big results.",
    primaryColor: "#FFAB91",   // soft coral
    secondaryColor: "#FBE9E7"
  },
  {
    quote: "Don’t watch the clock; do what it does. Keep going.",
    primaryColor: "#81D4FA",   // soft sky blue
    secondaryColor: "#E1F5FE"
  },
  {
    quote: "Believe you can and you're halfway there.",
    primaryColor: "#B0BEC5",   // soft blue grey
    secondaryColor: "#ECEFF1"
  },
  {
    quote: "Start where you are. Use what you have. Do what you can.",
    primaryColor: "#9FA8DA",   // soft indigo
    secondaryColor: "#E8EAF6"
  },
  {
    quote: "Success is the sum of small efforts repeated daily.",
    primaryColor: "#C5E1A5",   // soft mint
    secondaryColor: "#F1F8E9"
  },
  {
    quote: "The harder you work for something, the greater you’ll feel when you achieve it.",
    primaryColor: "#FFE082",   // soft amber
    secondaryColor: "#FFF8E1"
  }
];




var box=document.querySelector("#box")
var main=document.querySelector("#main")
var btn=document.querySelector("button")
var h2=document.querySelector("h2")

btn.addEventListener("click",function(){
    array=quotes[Math.floor(Math.random()*quotes.length)]
    h2.innerHTML=array.quote
    main.style.backgroundColor=array.primaryColor
    box.style.backgroundColor=array.secondaryColor
    console.log(array)
})