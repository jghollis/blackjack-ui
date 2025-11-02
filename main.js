// app.js

// Lock scrolling (extra safety in some mobile browsers)
document.documentElement.style.overflow = 'hidden';
document.body.style.overflow = 'hidden';

// Bootstrap popover for the mobile "i" rules button
document.addEventListener('DOMContentLoaded', () => {
  const rulesBtn = document.getElementById('rulesBtn');
  if (rulesBtn) {
    new bootstrap.Popover(rulesBtn, { trigger: 'focus' }); // tap to open, tap elsewhere to close
  }
});


document.addEventListener('DOMContentLoaded', () => {
  // Use body as the container so overflow:hidden on #stage doesn't clip the popover
  const infoBtn = document.getElementById('infoBtn');
  if (infoBtn) {
    new bootstrap.Popover(infoBtn, {
      trigger: 'hover focus',   // hover on tablets w/ cursor, tap = focus on phones
      container: 'body',
      placement: 'bottom',
      html: true
    });
  }
});


