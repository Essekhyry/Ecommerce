// swiper js
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 4,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    520: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    950: {
      slidesPerView: 4,
    }

  },
}); 

// menu bars

// gettin classes

const barDiv = document.getElementById('bar')
const menuDiv = document.getElementById('menuDiv') 
const closeBtn = document.getElementById('closebtn') 


barDiv.addEventListener("click", function(){
  console.log("the bars are clicked")
  menuDiv.style.display="block"  
  closeBtn.style.display = "block"
  barDiv.style.display="none" 
});

closeBtn.addEventListener('click',function(){
  menuDiv.style.display="none"
  barDiv.style.display = "block"
})


