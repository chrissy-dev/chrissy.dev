(function () {
    'use strict';

    var navigationToggle = document.querySelector('[data-id="nav-toggle"]');
    var navigationItems = document.querySelector('[data-id="nav-items"]');
    var isOpen = false;

    navigationToggle.addEventListener('click', function (event) {
        isOpen = !isOpen;
        isOpen ? navigationToggle.querySelector('span').textContent = "Close" : navigationToggle.querySelector('span').textContent = "Menu"
        navigationItems.classList.toggle('hidden');
    }, false);

    // If there's more than 2 windows worth of scrolling
    var isDeepContent = (window.innerHeight * 2) <= document.body.clientHeight ? true : false;

    if(isDeepContent) {
        let scrollToTop = document.querySelector('[data-id="scroll-top"]');
        scrollToTop.classList.remove('hidden');

        scrollToTop.addEventListener('click', (e) => {
            e.preventDefault();
            
            window.scrollTo({
                top: 0,
                behavior: 'smooth',
            })
        })
    }

    var images = document.querySelectorAll('img.lazy');

    var options = {
        root: null, // Page as root
        // rootMargin: (top, right bottom, left)
        rootMargin: '1px 1px 1px 1px',
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
})();