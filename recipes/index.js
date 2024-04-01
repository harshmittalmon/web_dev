let heading1 = document.querySelector('#heading1');
heading1.addEventListener('mouseover',function(){
    heading2.textContent = "THANKS FOR touching ME ! ";
    heading2.style.cssText  = "color:black;"

})
heading1.addEventListener('mouseout',function(){
    heading2.textContent = "Let's look at some great recipes across world";
    heading2.style.cssText  = "color: rgb(150, 8, 78);"
    

})

var heading2 = document.querySelector('#heading2');

