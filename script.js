var moon = document.getElementById('moon');
var scrolledHeight = window.pageYOffset;
var windowHeight = window.innerHeight;
var moonInitialPosition = { left: 50, top: 50 }; // Initial position of the moon (adjust as needed)
var moonMaxTranslate = { horizontal: 30, vertical: 20 }; // Maximum translation of the moon (adjust as needed)

function moveMoonOnScroll() {
    var scrollPosition = window.pageYOffset;

    // Calculate the horizontal translation amount based on scroll position
    var translateX;

    if (scrollPosition <= windowHeight / 2) {
        // Move to the left and accumulate translation
        translateX = (scrollPosition / (windowHeight / 2)) * moonMaxTranslate.horizontal;

        if (translateX > moonMaxTranslate.horizontal) {
            translateX = moonMaxTranslate.horizontal;
        }
    } else {
        // Move to the right and subtract translation
        var scrollPositionAdjusted = scrollPosition - (windowHeight / 2);
        translateX = moonMaxTranslate.horizontal - ((scrollPositionAdjusted / (windowHeight / 2)) * moonMaxTranslate.horizontal);

        if (translateX < 0) {
            translateX = 0;
        }
    }

    // Calculate the vertical translation amount based on scroll position
    var translateY;

    if (scrollPosition <= windowHeight) {
        // Move to the top and accumulate translation
        translateY = (scrollPosition / windowHeight) * moonMaxTranslate.vertical;

        if (translateY > moonMaxTranslate.vertical) {
            translateY = moonMaxTranslate.vertical;
        }
    } else {
        // Move to the bottom and subtract translation
        var scrollPositionAdjusted = scrollPosition - windowHeight;
        translateY = moonMaxTranslate.vertical - ((scrollPositionAdjusted / windowHeight) * moonMaxTranslate.vertical);

        if (translateY < 0) {
            translateY = 0;
        }
    }

    // Calculate the new position of the moon
    var newLeftPosition = moonInitialPosition.left + translateX;
    var newTopPosition = moonInitialPosition.top + translateY;

    // Apply the new position to the moon element
    moon.style.left = newLeftPosition + '%';
    moon.style.top = newTopPosition + '%';
}

// Call moveMoonOnScroll initially
moveMoonOnScroll();

// Attach the scroll event listener
window.addEventListener('scroll', moveMoonOnScroll);


var image = document.getElementById('moon');
var scrolledHeight = window.pageYOffset;
var stopSize = 600; // Size at which scaling should stop

function adjustImageSize() {
    // Calculate the new size based on scroll position
    var newSize = 100 + (scrolledHeight * 0.35); // Adjust the scaling factor (0.1) as per your preference

    // Limit the size to the stop size
    newSize = Math.min(newSize, stopSize);

    // Apply the new size to the image
    image.style.width = newSize + 'px';
    image.style.height = newSize + 'px';
}

// Call the adjustImageSize function initially
adjustImageSize();

// Attach the scroll event listener
window.addEventListener('scroll', function() {
    scrolledHeight = window.pageYOffset;
    adjustImageSize();
});

var moon = document.getElementById('moon');
var rocket = document.getElementById('rocket');
var rocketInitialPosition = -100; // Initial left position of the rocket (adjust as needed)


function moveRocketOnScroll() {
  var scrolledHeight = window.pageYOffset;
  var imageSize = 600; // Size at which the moon image triggers rocket movement

  if (scrolledHeight >= imageSize) {
    // Calculate the new left position of the rocket based on scroll position
    var newLeftPosition = Math.min(((scrolledHeight - imageSize) * 0.5), (window.innerWidth / 2) - 50);

    // Apply the new left position to the rocket element
    rocket.style.left = newLeftPosition + 'px';
  } else {
    // Reset the rocket position when scrolling back
    rocket.style.left = rocketInitialPosition + 'px';
  }

  if (scrolledHeight >= imageSize) {
    // Calculate the new left position of the rocket based on scroll position
    var newLeftPosition = Math.min(((scrolledHeight - imageSize) * 0.5), (window.innerWidth / 2) - 50);
  
    // Apply the new left position to the rocket element
    rocket.style.left = newLeftPosition + 'px';
  
    // Check if the rocket is at the middle of the page
    if (newLeftPosition === (window.innerWidth / 2) - 50) {
        // Play the explosion.gif and set its width and height
        rocket.style.backgroundImage = 'url(Img/explo.gif)';
        rocket.style.transform = 'scale(7)';
      } else {
        // Reset the background image and size when not at the middle
        rocket.style.backgroundImage = '';
        rocket.style.transform = '';
      }
      
  } else {
    // Reset the rocket position and background image when scrolling back
    rocket.style.left = rocketInitialPosition + 'px';
    rocket.style.backgroundImage = '';
  }
  
}

// Attach the scroll event listener
window.addEventListener('scroll', moveRocketOnScroll);

SmoothScroll({ duration: 6000 });

window.addEventListener('scroll', function() {
    var myDiv = document.getElementById('blackscreen');
    var scrollPosition = window.innerHeight + window.scrollY;
    var pageHeight = document.documentElement.offsetHeight;
  
    if (scrollPosition >= pageHeight) {
      setTimeout(function() {
        myDiv.style.display = 'flex'; /* Change color to black after 1 second */
      }, 500); // Delay of 1 second (1000 milliseconds)
    } else {
      myDiv.style.display = 'none'; /* Reset to transparent */
    }
  });
  

  // Get the button element
const scrollToTopBtn = document.getElementById('reset');

// Add click event listener to the button
scrollToTopBtn.addEventListener('click', () => {
  // Scroll to the top of the page
  window.scrollTo({
    top: 0,
    behavior: 'smooth' // Add smooth scrolling animation
  });
});

window.addEventListener('DOMContentLoaded', function() {
    // Your code here
    var myDiv = document.getElementById('blackscreen');
    myDiv.style.display = 'none'; /* Reset to transparent */
    // This will be executed when the page finishes loading
  });
