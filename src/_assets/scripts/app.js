import formatDistanceToNowStrict from 'date-fns/formatDistanceToNowStrict'

const dateSlots = document.querySelectorAll(".post-date");

dateSlots.forEach(function (slot) {
  if (slot.dataset.date) {
    slot.innerHTML = `${formatDistanceToNowStrict(new Date(slot.dataset.date))} ago`;
  }
});