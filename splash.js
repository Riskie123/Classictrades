// Simple splash removal. Adjust durations to taste.
(function () {
  // run as soon as DOM is ready
  function onReady(fn) {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', fn);
    } else {
      fn();
    }
  }

  onReady(function () {
    const splash = document.getElementById('splash');
    const app = document.getElementById('app');

    // Keep app hidden until we remove the splash.
    if (app) app.style.visibility = 'hidden';

    // How long the splash stays visible (ms). Match CSS transitions.
    var SPLASH_DURATION = 1200;

    // If the page load event happens after timeout, you can use:
    // window.addEventListener('load', proceed);
    // For now, we use a timeout so the splash always shows briefly.
    setTimeout(proceed, SPLASH_DURATION);

    function proceed() {
      if (!splash) return finish();
      splash.classList.add('hide');             // triggers CSS fade
      // wait for fade transition to finish (match .6s in CSS)
      setTimeout(finish, 650);
    }

    function finish() {
      if (splash && splash.parentNode) splash.parentNode.removeChild(splash);
      if (app) app.style.visibility = 'visible';
    }
  });
})();
