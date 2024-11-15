// keep track of previous scroll position
const navbar=document.getElementsByClassName('.nav-center')

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      navbar.classList.add(".nav-centerscroll")
    } else {
      document.getElementById("nav-centerscroll").style.display="none";
    }
  }

  window.onscroll = function() {
    scroll()
};