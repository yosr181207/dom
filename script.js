let quotes = [
  `I live my life a quarter mile at a time`,
  `I said a ten-second car, not a ten-minute car`,
  `You can have any brew you want... as long as it's a Corona.`,
  `You almost had me? You never had me - you never had your car!`,
  `I don't have friends. I have family.`,
  `It don't matter if you win by an inch or a mile. Winning's winning.`,
];

window.onload =  function(event) {
  
  // Random quote of the day generator
  const randomQuote = function() {
    document.querySelector('#quote-of-the-day').textContent = `"${
      quotes[Math.floor(Math.random() * quotes.length)]
    }"`;
  };
  randomQuote();

  // Do all of your work inside the window.onload function (in other words, here!)
var list2=document.getElementById('favorite-things')
console.log(list2.lastChild)
  // Part 1
document.querySelector('#main-title').innerHTML='welcome homies'
  // Part 2
  document.querySelector('body').style.backgroundColor='#fbacc1'
  // Part 3
var list=document.getElementById('favorite-things')
list.removeChild(list.lastElementChild)
  // Part 4
  
var list=document.querySelectorAll('.special-title')
for(var i=0 ;i<list.length ; i++) {
  list[i].style.fontSize ="2rem"
}
  // Part 5
  var li=document.querySelectorAll('#past-races li')
 
  var ul=document.querySelector('#past-races')
  for (let i = 0; i < li.length; i++) {
   if(li[i].innerHTML=="Chicago"){
    ul.removeChild(li[i])
   }
    
    
  }
  console.log(li)

  // Part 6
  var newli=document.createElement("li")
  newli.innerHTML="Tunisia"
  ul.appendChild(newli)

  // Part 7
}
