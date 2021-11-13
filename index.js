// Hamburger Menu
var burgerMenu = document.getElementById('burger-menu');
var overlay = document.getElementById('mobile-nav');

burgerMenu.addEventListener('click', function() {
  this.classList.toggle("close");
  overlay.classList.toggle("overlay");
});


// Read More
function readMore() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("readBtn");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less";
      moreText.style.display = "inline";
    }
  }

  // Pop-Up 
  var modal = document.getElementById("donate-modal");
  var btn = document.getElementById("donate-btn");
  var span = document.getElementsByClassName("close")[0];


  btn.onclick = function() {
    modal.style.display = "block";
  }

  span.onclick = function() {
    modal.style.display = "none";
  }

  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }

  // Activity API
var buttonEl = document.getElementById('activity-button')
var activityEl = document.getElementById('activity')

buttonEl.onclick = function(){
  fetch('https://www.boredapi.com/api/activity/')
  .then(function(response) {
    return response.json()
  })
  .then(function(response) {
    renderActivity(res.results)
  })
}

