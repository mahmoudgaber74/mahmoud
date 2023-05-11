
AOS.init();

//*********************************** */
var swiper = new Swiper('.swiper', {
   
    slidesPerView: 3,
    spaceBetween: 30,
    breakpoints: {
        280: {
            slidesPerView: 1,
            spaceBetweenSlides: 50
        },
        999: {
            slidesPerView: 3,
            spaceBetweenSlides: 50
        }
    }
});

let count = document.querySelectorAll(".count")
let arr = Array.from(count)



arr.map(function(item){
  let startnumber = 0

  function counterup(){
  startnumber++
  item.innerHTML= startnumber
   
  if(startnumber == item.dataset.number){
      clearInterval(stop)
  }
}

let stop =setInterval(function(){
  counterup()
},3/count)

})
