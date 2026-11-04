/* Fills the shared contact details on the policy pages.
   Values live in config.js so they never drift from the donate page. */
(function () {
  var C = window.CONFIG;
  if (!C) return;

  document.querySelectorAll('[data-site]').forEach(function (el) {
    var key = el.dataset.site;
    if (key === 'emailLink') {
      el.href = 'mailto:' + C.email;
      el.textContent = C.email;
    } else if (C[key] !== undefined) {
      el.textContent = C[key];
    }
  });

  var yr = document.getElementById('yr');
  if (yr) yr.textContent = new Date().getFullYear();
})();
