(function () {
    'use strict';

    var navigationToggle = document.querySelector('[data-id="nav-toggle"]');
    var navigationItems = document.querySelector('[data-id="nav-items"]');
    var isOpen = false;

    navigationToggle.addEventListener('click', function (event) {
        isOpen = !isOpen;
        isOpen ? navigationToggle.textContent = "Close" : navigationToggle.textContent = "Menu"
        navigationItems.classList.toggle('hidden');
    }, false);

    
    var images = document.querySelectorAll('img.lazy');

    var options = {
        root: null, // Page as root
        // rootMargin: (top, right bottom, left)
        rootMargin: '10px 540px 320px 10px',
        threshold: 0
    };

    var fetchImage = function (url) {
        return new Promise(function (resolve, reject) {
            var image = new Image();
            image.src = url;
            image.onload = resolve;
            image.onerror = reject;
        });
    }
    var loadImage = function (image) {
        var src = image.dataset.src;
        fetchImage(src).then(function () {
            image.classList.add('fadeIn');
            image.src = src;
        })
    }
    var handleIntersection = function (entries, observer) {
        entries.forEach(function (entry) {
            if (entry.intersectionRatio > 0) {
                loadImage(entry.target)
            }
        })
    }
    // The observer for the images on the page
    var observer = new IntersectionObserver(handleIntersection, options);

    images.forEach(function (img) {
        if ('IntersectionObserver' in window) {
            // LazyLoad images using IntersectionObserver
            observer.observe(img);
        } else {
            // Load all images at once
            loadImage(img);
        }
    })


   // Set a variable for our button element.
   const scrollToTopButton = document.getElementById('scroll-to-top');

   // Let's set up a function that shows our scroll-to-top button if we scroll beyond the height of the initial window.
   const scrollFunc = () => {
       // Get the current scroll value
       let y = window.scrollY;

       // If the scroll value is greater than the window height, let's add a class to the scroll-to-top button to show it!
       if (y > 320) {
           scrollToTopButton.classList.remove('hidden');
       } else {
           scrollToTopButton.classList.add('hidden');
       }
   };

   window.addEventListener("scroll", scrollFunc);

   const scrollToTop = () => {
       // Let's set a variable for the number of pixels we are from the top of the document.
       const c = document.documentElement.scrollTop || document.body.scrollTop;

       // If that number is greater than 0, we'll scroll back to 0, or the top of the document.
       // We'll also animate that scroll with requestAnimationFrame:
       // https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame
       if (c > 0) {
           window.requestAnimationFrame(scrollToTop);
           // ScrollTo takes an x and a y coordinate.
           // Increase the '10' value to get a smoother/slower scroll!
           window.scrollTo(0, c - c / 10);
       }
   };

   // When the button is clicked, run our ScrolltoTop function above!
   scrollToTopButton.onclick = function (e) {
       e.preventDefault();
       scrollToTop();
   }
})();