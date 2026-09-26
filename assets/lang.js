// Korean / English switch. ?lang=ko|en wins (the app links with it), then the browser language; Korean is the default.
function showLang(lang) {
  document.querySelectorAll('.section').forEach(function (s) { s.classList.toggle('active', s.id === lang); });
  document.querySelectorAll('.lang-toggle button').forEach(function (b) {
    var on = b.getAttribute('data-lang') === lang;
    b.classList.toggle('active', on);
    b.setAttribute('aria-pressed', on ? 'true' : 'false');
  });
  document.documentElement.lang = lang;
}
(function () {
  var q = new URLSearchParams(location.search).get('lang');
  var nav = (navigator.language || 'ko').toLowerCase();
  showLang(q === 'en' || q === 'ko' ? q : (nav.indexOf('ko') === 0 ? 'ko' : 'en'));
  document.querySelectorAll('.lang-toggle button').forEach(function (b) {
    b.addEventListener('click', function () { showLang(b.getAttribute('data-lang')); });
  });
})();
