document.addEventListener("DOMContentLoaded", function () {
  const navItems = document.querySelectorAll(".nav-item");

  navItems.forEach(item => {
      item.addEventListener("click", function (e) {
          e.preventDefault();
          const dropdown = this.querySelector(".dropdown");
          if (dropdown) {
              dropdown.classList.toggle("show");
          }
      });

      document.addEventListener("click", function (e) {
          if (!item.contains(e.target)) {
              const dropdown = item.querySelector(".dropdown");
              if (dropdown) {
                  dropdown.classList.remove("show");
              }
          }
      });
  });
});


document.addEventListener("DOMContentLoaded", function() {
  // Get the login link element by its ID
  const loginLink = document.getElementById("loginLink");

  // Add an event listener for the click event
  loginLink.addEventListener("click", function(event) {
      // Prevent the default link behavior
      event.preventDefault();

      // Redirect to signin.html
      window.location.href = "signin.html";
  });
});


document.addEventListener("DOMContentLoaded", function() {
  // Get the login link element by its ID
  const loginLink = document.getElementById("signuplink");

  // Add an event listener for the click event
  loginLink.addEventListener("click", function(event) {
      // Prevent the default link behavior
      event.preventDefault();

      // Redirect to signin.html
      window.location.href = "signup.html";
  });
});





document.addEventListener('DOMContentLoaded', function() {
    const gallery = document.querySelector('.image-gallery');
    const dots = document.querySelectorAll('.dot');
    const arrows = document.querySelectorAll('.arrow');
    const totalImages = gallery.querySelectorAll('img').length;
    let currentIndex = 0;
    let intervalId;
  
    function goToImage(index) {
      currentIndex = index;
      const imageWidth = gallery.clientWidth;
      const scrollPosition = currentIndex * imageWidth;
      gallery.scrollTo({
        left: scrollPosition,
        behavior: 'smooth'
      });
      updateDots();
    }
  
    function updateDots() {
      dots.forEach((dot, index) => {
        if (index === currentIndex) {
          dot.classList.add('active');
        } else {
          dot.classList.remove('active');
        }
      });
    }
  
    function startAutoScroll() {
      intervalId = setInterval(() => {
        currentIndex = (currentIndex + 1) % totalImages;
        goToImage(currentIndex);
      }, 2000);
    }
  
    function stopAutoScroll() {
      clearInterval(intervalId);
    }
  
    dots.forEach(dot => {
      dot.addEventListener('click', () => {
        const index = parseInt(dot.getAttribute('data-index'));
        goToImage(index);
      });
    });
  
    arrows.forEach(arrow => {
      arrow.addEventListener('click', () => {
        if (arrow.classList.contains('left')) {
          currentIndex = (currentIndex - 1 + totalImages) % totalImages;
        } else if (arrow.classList.contains('right')) {
          currentIndex = (currentIndex + 1) % totalImages;
        }
        goToImage(currentIndex);
      });
    });
  
    startAutoScroll();
  
    gallery.addEventListener('mouseenter', stopAutoScroll);
    gallery.addEventListener('mouseleave', startAutoScroll);
  });
  