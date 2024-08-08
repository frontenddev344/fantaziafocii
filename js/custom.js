// var events =  document.querySelectorAll(".events")
// events.forEach(function(elem){
// console.log(elem)
// var box =  elem.querySelector(".box")
//  var aEL = box.querySelector("a")
// elem.addEventListener("mouseenter", function(mE){
// var img = aEL.getAttribute("src")
// console.log(img)
// });
// });


// var events = document.querySelectorAll(".events");

// events.forEach(function(elem) {
//     console.log(elem);
//     var box = elem.querySelector(".box");

//     if (box) {
//         console.log(box);
//         var img = box.querySelector("img"); // Select the image within the box

//         if (img) {
//             elem.addEventListener("mouseenter", function(mE) {
//                 var imgSrc = img.getAttribute("src");
//                 console.log(imgSrc);
//             });
//         }
//     }
// });

document.addEventListener('DOMContentLoaded', function() {
    const events = document.querySelectorAll('.events');
    const details = document.querySelectorAll('.left_side_ab');

    events.forEach(event => {
        event.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('data-target');

            details.forEach(detail => {
                if (detail.id === targetId) {
                    detail.classList.add('active');
                } else {
                    detail.classList.remove('active');
                }
            });
        });
    });
});
