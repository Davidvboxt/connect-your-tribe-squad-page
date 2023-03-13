// Geeft padding per klasgenoot aan de hand van hun lengte
let memberlength = document.querySelector('.jou-lengte')
let liniaal = document.querySelector('.liniaal')


squad.members.forEach(data => {
  if (memberlength.style.paddingTop > 100) {
    liniaal.innerHTML = "<ul><li>185cm -</li></ul>"

  }
});

squad.members.forEach(function(memberlength){
  if(memberlength.style.paddingTop > 100){
    console.log(memberlength)
  }
})