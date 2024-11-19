

const navbar=document.querySelector(".nav-links")
const accordians = document.querySelectorAll('.accordian');
window.addEventListener('scroll', () => {
   const scrollPosition = window.scrollY;

   // Conditional action to change background color when scroll position is greater than 20px
   if (scrollPosition > 1) {
       navbar.style.backgroundColor = "black";  
   } 
   else {
       navbar.style.backgroundColor = "";  // Reset background color when less than 20px
   }
});

// faqs
accordians.forEach(accordian => {
  const icon = accordian.querySelector('.icon');
  const answer = accordian.querySelector('.answer');


  accordian.addEventListener('click', () => {
      
      if(icon.classList.contains('active')) {
          icon.classList.remove('active');
          answer.style.maxHeight = null;
      } else {
          icon.classList.add('active');
          answer.style.maxHeight = answer.scrollHeight + 'px';
      }
      
  })
})

// responsiveness

// Get elements
// const mobileMenuButton = document.querySelector('.menu-icon');
// const navList = document.querySelector('.nav-links');

// // Toggle the navigation menu on mobile
// mobileMenuButton.addEventListener('click', () => {
//   alert("menu clicked")
//   navList.classList.toggle('active');
// });
