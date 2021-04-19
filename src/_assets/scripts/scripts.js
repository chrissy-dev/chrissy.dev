import formatDistanceToNowStrict from 'date-fns/formatDistanceToNowStrict'
import LazyLoad from "vanilla-lazyload";

const dateSlots = document.querySelectorAll(".post-date");

if (dateSlots) {
  dateSlots.forEach(function (slot) {
    if (slot.dataset.date) {
      slot.innerHTML = `${formatDistanceToNowStrict(new Date(slot.dataset.date))} ago`;
    }
  });
}

var navButton = document.querySelector('#nav-toggle');

if (navButton) {
  navButton.addEventListener('click', function () {
    let expanded = this.getAttribute('aria-expanded') === 'true' || false;
    this.setAttribute('aria-expanded', !expanded);
    let menu = document.querySelector('#main-nav');
    menu.classList.toggle('hidden');
  });
}

var lazyLoadInstance = new LazyLoad();
