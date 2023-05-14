
AOS.init();

//*********************************** */
var swiper = new Swiper('.swiper', {
   
    slidesPerView: 3,
    spaceBetween: 30,
    breakpoints: {
        0: {
            slidesPerView: 1,
            spaceBetweenSlides: 30
        },

        768: {
            slidesPerView: 3,
            spaceBetweenSlides: 20
        },
        999: {
            slidesPerView: 6,
            spaceBetweenSlides: 1
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
// auto write funcation 
var header = document.querySelector(".auto-write");
const text = "AL FATOON";
let idx = 1;

function autoWrite(){
    header.innerHTML = text.slice(0,idx);

    idx++

    if(idx > text.length){
        idx = 1 ;

    }

    setTimeout(autoWrite, 300)

}
autoWrite();
//*********************** */
var links = document.querySelectorAll(" .header-nav nav  ul li  a ");
links.forEach(a=>{
    a.addEventListener("click",function(){
        resetlinks();
        a.classList.add("active")
    })
})
function resetlinks (){
    links.forEach(a=>{
        a.classList.remove("active")
    })
}
// scroll btn /////           
let mybutton = document.getElementById("myBtn")  

window.onscroll = function (){
    if(document.body.scrollTop>20 || document.documentElement.scrollTop>20){
        mybutton.style.display="block"
    }else{
        mybutton.style.display= "none";
    }
}

function topFunction (){
    document.body.scrollTop=0;
    document.documentElement.scrollTop=0;
}