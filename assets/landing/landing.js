// Malang Pick landing (2026-10-08): Korean / English / Japanese text (ja 2026-10-09, the Japan release), the header over the sky.
// Language: ?lang=ko|en|ja first (shareable), then the visitor's last choice, then the browser language (ko-* Korean, ja-* Japanese).
// Japanese never describes how the secret friend is won (Japan uses the draw-count ceiling, not completion; Builds/japan-launch-20261007).
(function () {
  var T = {
    ko: {
      title: '말랑말랑 말랑픽: ASMR · 뽑고, 늘리고, 모으고!',
      description: '손을 따라 쭉쭉 늘어나는 귀여운 말랑이와 기분 좋은 ASMR. 푸른바다부터 디저트카페까지, 캡슐을 뽑고 나만의 컬렉션을 모아요. 매일 무료 티켓으로 새 친구를 만나 보세요.',
      skip: '본문으로 건너뛰기', brand: '말랑픽', nav_play: '놀이', nav_friends: '친구들', nav_screens: '미리 보기', get_short: '다운로드',
      hero_eyebrow: '손끝으로 쭉쭉, 말랑말랑 ASMR', hero_title: '뽑고, 늘리고, 모으고!',
      hero_desc: '손을 따라 쭉쭉 늘어나는 귀여운 말랑이와 기분 좋은 소리. 푸른바다부터 디저트카페까지, 오늘은 어떤 친구를 만날까요?',
      get_small: '무료 다운로드', get_big: 'Google Play에서 받기', cta_note: '매일 무료 티켓 · Android',
      f1_title: '쭉쭉 늘리는 ASMR 놀이',
      f1_desc: '손을 따라 늘어나는 귀여운 말랑이! 당기고, 누르고, 살짝 놓아 보세요. 출렁이며 돌아오는 몸과 기분 좋은 소리가 손끝을 그대로 따라와요.',
      f1_b1: '두 손가락으로 쭉 늘리기', f1_b2: '친구마다 다른 촉감과 소리', f1_b3: '놀이터에서 친구들과 함께 놀기',
      f2_title: '어떤 말랑이가 나올까요?',
      f2_desc: '캡슐 머신의 레버를 돌리면 두근두근! 누가 나올지는 열어 봐야 알아요. 좋아하는 테마에서 말랑이를 뽑아 보세요.',
      chip_ocean: '푸른바다', chip_dessert: '디저트카페', chip_soon: '새 테마 계속 추가', secret_badge: '시크릿 등장!',
      f3_title: '차곡차곡 나만의 컬렉션',
      f3_desc: '모은 말랑이는 언제든 다시 꺼내 놀아요. 테마마다 숨어 있는 시크릿 말랑이도 있어요!',
      friends_title: '누가 기다리고 있을까요?', friends_sub: '테마마다 15명의 친구와 숨은 시크릿 친구가 있어요. 나머지는 캡슐을 열어서 만나 보세요!',
      tag_dessert: '디저트', tag_ocean: '바다', screens_title: '미리 보기',
      final_title: '매일 받는 무료 티켓으로 새 친구를 만나 보세요!', foot_name: '말랑말랑 말랑픽: ASMR',
      l_privacy: '개인정보처리방침', l_terms: '이용약관', l_prob: '확률 정보', l_delete: '계정 삭제 안내', l_tokushoho: '일본 특정상거래법 표기', contact: '문의',
      company: '타이거룸 · 사업자등록번호 629-25-02059 · 서울특별시 서초구 매헌로 16'
    },
    en: {
      title: 'Malang Pick: ASMR · Pick, stretch, collect!',
      description: 'Cute squishies stretch under your fingers with satisfying ASMR sounds. Pick capsules from the Blue Ocean to the Dessert Café and build your collection. Free tickets every day.',
      skip: 'Skip to content', brand: 'Malang Pick', nav_play: 'Play', nav_friends: 'Friends', nav_screens: 'Screens', get_short: 'Download',
      hero_eyebrow: 'Squishy ASMR at your fingertips', hero_title: 'Pick. Stretch. Collect!',
      hero_desc: 'Cute squishies stretch under your fingers with satisfying sounds. From the Blue Ocean to the Dessert Café, who will you meet today?',
      get_small: 'Free download', get_big: 'Get it on Google Play', cta_note: 'Free tickets every day · Android',
      f1_title: 'Squishy ASMR fun',
      f1_desc: 'Stretch cute squishies with your fingers! Pull, press and let go: watch them wobble back while satisfying sounds follow your touch.',
      f1_b1: 'Stretch with two fingers', f1_b2: 'A different feel and sound for every friend', f1_b3: 'Hang out with friends in the playground',
      f2_title: 'Which squishy will you get?',
      f2_desc: 'Turn the capsule machine’s lever and feel the little rumble. Who’s inside? Pick squishies from your favorite theme.',
      chip_ocean: 'Blue Ocean', chip_dessert: 'Dessert Café', chip_soon: 'More themes coming', secret_badge: 'Secret unlocked!',
      f3_title: 'Build your collection',
      f3_desc: 'Play with the squishies you collect anytime. Every theme hides a secret squishy, too!',
      friends_title: 'Who\u2019s waiting for you?', friends_sub: 'Every theme has 15 friends and a hidden secret one. Open capsules to meet the rest!',
      tag_dessert: 'Dessert', tag_ocean: 'Ocean', screens_title: 'A peek inside',
      final_title: 'Use your free daily tickets to meet new squishy friends!', foot_name: 'Malang Pick: ASMR',
      l_privacy: 'Privacy Policy', l_terms: 'Terms of Service', l_prob: 'Probability', l_delete: 'Account Deletion', l_tokushoho: 'Japan: Specified Commercial Transactions', contact: 'Contact',
      company: 'Tiger Room · Business No. 629-25-02059 · 16 Maeheon-ro, Seocho-gu, Seoul, Korea'
    },
    ja: {
      title: 'マランピック：ぷにぷにスクイーズASMR · ガチャして、のばして、あつめよう！',
      description: '指の動きにあわせてのび〜る、かわいいともだちと癒しのスクイーズASMR。「あおいうみ」から「スイーツカフェ」まで、ガチャでともだちをお迎えしてコレクションしよう。毎日もらえる無料チケットで遊べます。',
      skip: '本文へスキップ', brand: 'マランピック', nav_play: 'あそび', nav_friends: 'ともだち', nav_screens: 'プレビュー', get_short: 'ダウンロード',
      hero_eyebrow: '指先でのび〜る、ぷにぷにASMR', hero_title: 'ガチャして、のばして、あつめよう！',
      hero_desc: '指の動きにあわせてのび〜る、かわいいともだちと気持ちいい音。「あおいうみ」から「スイーツカフェ」まで、今日はどのともだちに会えるかな？',
      get_small: '無料ダウンロード', get_big: 'Google Play で手に入れよう', cta_note: '毎日無料チケット · Android',
      f1_title: 'のび〜るスクイーズASMR',
      f1_desc: '指にあわせてのびる、かわいいともだち！ ひっぱって、おして、そっとはなしてみて。ぷるんと戻る体と気持ちいい音が、指先にそのままついてきます。',
      f1_b1: '2本の指でのび〜る', f1_b2: 'ともだちごとにちがう手ざわりと音', f1_b3: 'ひろばでともだちといっしょに遊ぶ',
      f2_title: 'どのともだちが出るかな？',
      f2_desc: 'ガチャマシンのレバーを回すとドキドキ！ だれが出るかは開けてのお楽しみ。好きなテーマのガチャで、ともだちをお迎えしよう。',
      chip_ocean: 'あおいうみ', chip_dessert: 'スイーツカフェ', chip_soon: '新しいテーマも追加予定', secret_badge: 'シークレット登場！',
      f3_title: 'コツコツ集める、わたしだけのコレクション',
      f3_desc: 'お迎えしたともだちとは、いつでもまた遊べます。テーマごとに、かくれたシークレットのともだちもいるよ！',
      friends_title: 'だれが待っているかな？', friends_sub: 'テーマごとに15人のともだちと、かくれたシークレットのともだちがいます。ほかの子には、カプセルを開けて会いに行こう！',
      tag_dessert: 'スイーツ', tag_ocean: 'うみ', screens_title: 'プレビュー',
      final_title: '毎日もらえる無料チケットで、新しいともだちに会いに行こう！', foot_name: 'マランピック：ぷにぷにスクイーズASMR',
      l_privacy: 'プライバシーポリシー', l_terms: '利用規約', l_prob: '提供割合', l_delete: 'アカウント削除のご案内', l_tokushoho: '特定商取引法に基づく表記', contact: 'お問い合わせ',
      company: 'Tiger Room（タイガールーム） · 事業者登録番号 629-25-02059 · 大韓民国ソウル特別市瑞草区梅軒路16'
    }
  };
  var KEY = 'malangpick.lang';
  function stored() { try { return localStorage.getItem(KEY); } catch (e) { return null; } }
  function remember(lang) { try { localStorage.setItem(KEY, lang); } catch (e) { /* private mode */ } }
  function pick() {
    var q = new URLSearchParams(location.search).get('lang');
    if (q === 'ko' || q === 'en' || q === 'ja') return q;
    var s = stored(); if (s === 'ko' || s === 'en' || s === 'ja') return s;
    var langs = navigator.languages && navigator.languages.length ? navigator.languages : [navigator.language || 'en'];
    var first = String(langs[0] || '').toLowerCase();
    return first.indexOf('ko') === 0 ? 'ko' : first.indexOf('ja') === 0 ? 'ja' : 'en';
  }
  function apply(lang) {
    var d = T[lang]; document.documentElement.lang = lang; document.title = d.title;
    var meta = document.querySelector('meta[name="description"]'); if (meta) meta.setAttribute('content', d.description);
    document.querySelectorAll('[data-i18n]').forEach(function (el) { var k = el.getAttribute('data-i18n'); if (d[k] != null) el.textContent = d[k]; });
    document.querySelectorAll('[data-' + lang + ']').forEach(function (el) { el.textContent = el.getAttribute('data-' + lang); });
    document.querySelectorAll('[data-src-' + lang + ']').forEach(function (img) { var src = img.getAttribute('data-src-' + lang); if (img.getAttribute('src') !== src) img.setAttribute('src', src); });
    document.querySelectorAll('[data-alt-' + lang + ']').forEach(function (el) { el.setAttribute(el.tagName === 'IMG' ? 'alt' : 'aria-label', el.getAttribute('data-alt-' + lang)); });
    document.querySelectorAll('.foot-links a').forEach(function (a) { a.setAttribute('href', a.getAttribute('href').split('?')[0] + '?lang=' + lang); });
    document.querySelectorAll('.lang button').forEach(function (b) { b.setAttribute('aria-pressed', b.getAttribute('data-lang') === lang ? 'true' : 'false'); });
  }
  apply(pick());
  document.querySelectorAll('.lang button').forEach(function (b) {
    b.addEventListener('click', function () { var lang = b.getAttribute('data-lang'); remember(lang); apply(lang); });
  });
  // header: clear over the sky, glass once scrolled, light past the hero
  var top = document.querySelector('.top'), hero = document.querySelector('.hero');
  function onScroll() {
    var y = window.scrollY || 0, h = hero ? hero.offsetHeight - 80 : 600;
    top.classList.toggle('scrolled', y > 16 && y <= h);
    top.classList.toggle('on-light', y > h);
  }
  window.addEventListener('scroll', onScroll, { passive: true }); onScroll();
})();
