// Korean / English / Japanese switch. ?lang=ko|en|ja wins (the app links with it; b219 sends ja), then the browser language;
// Korean is the default. A page without the asked section (one that has no Japanese section yet) shows English instead,
// so a ?lang=ja link never lands on an empty page. (ja added 2026-10, Builds/japan-launch-20261007.)
function hasSection(lang) {
  var s = document.getElementById(lang);
  return !!s && s.classList.contains('section');
}
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
  var lang = q === 'en' || q === 'ko' || q === 'ja' ? q : (nav.indexOf('ko') === 0 ? 'ko' : nav.indexOf('ja') === 0 ? 'ja' : 'en');
  if (!hasSection(lang)) lang = hasSection('en') ? 'en' : 'ko';
  showLang(lang);
  document.querySelectorAll('.lang-toggle button').forEach(function (b) {
    if (!hasSection(b.getAttribute('data-lang'))) { b.hidden = true; return; }
    b.addEventListener('click', function () { showLang(b.getAttribute('data-lang')); });
  });
})();
