(function () {
  try {
    var saved = localStorage.getItem('portfolio-theme');
    var theme = saved || 'light';
    document.documentElement.setAttribute('data-theme', theme);
  } catch (e) {}
})();
