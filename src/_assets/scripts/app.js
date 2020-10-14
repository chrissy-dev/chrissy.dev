import formatDistanceToNowStrict from 'date-fns/formatDistanceToNowStrict'

const dateSlots = document.querySelectorAll(".post-date");

dateSlots.forEach(function (slot) {
  if (slot.dataset.date) {
    slot.innerHTML = `${formatDistanceToNowStrict(new Date(slot.dataset.date))} ago`;
  }
});

var navButton = document.querySelector('#nav-toggle');

navButton.addEventListener('click', function () {
  let expanded = this.getAttribute('aria-expanded') === 'true' || false;
  this.setAttribute('aria-expanded', !expanded);
  this.querySelector('.caret').classList.toggle('-rotate-180');
  let menu = this.nextElementSibling;
  menu.hidden = !menu.hidden;
});