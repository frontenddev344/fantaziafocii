var events =  document.querySelectorAll(".events")
events.forEach(function(elem){
console.log(elem)
elem.addEventListener("mouseenter", function(){
var img = elem.getAttribute("src")
console.log(img)
});
});