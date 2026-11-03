// Shared by index.html and stores.html: language, translations and currency.
// Load it at the end of <body> so it can read the English text from the page.
// ================= language & currency =================
// Prices are set in pesos in index.html (pricePHP). Other currencies are converted with these rates;
// update them (or the peso prices) whenever you like.
const CURRENCIES = {
  PHP: { sym: '₱', code: 'PHP', perPeso: 1, dec: 0, step: 1 },
  CAD: { sym: 'C$', code: 'CAD', perPeso: 1 / 41, dec: 2, step: .01 },
  KRW: { sym: '₩', code: 'KRW', perPeso: 24, dec: 0, step: 100 }
};

const KO = {
  'nav.flavors': '플레이버', 'nav.why': '솔로컵 소개', 'nav.buy': '구매처',
  'aria.sound': '장바구니 효과음', 'aria.cart': '장바구니 열기', 'aria.prev': '이전 플레이버', 'aria.next': '다음 플레이버',
  'aria.close': '장바구니 닫기', 'aria.prefs': '언어 및 통화',
  'hero.eyebrow': 'Mini Krunch · 솔로컵', 'hero.add': '장바구니 담기', 'hero.all': '전체 플레이버', 'hero.by': 'Konu · 60 g · 스푼 증정',
  'fl.kicker': '라인업', 'fl.title': '나만의 크런치를 골라보세요',
  'fl.lead': '다섯 가지 맛, 하나의 컵 사이즈. 컵을 눌러 자세히 보거나 바로 장바구니에 담아보세요.',
  'mq.1': 'Mini Krunch', 'mq.2': '솔로컵', 'mq.3': '스푼 증정', 'mq.4': '다섯 가지 맛', 'mq.5': '바삭함 60 g',
  'why.kicker': '왜 솔로컵일까요', 'why.title': '혼자 먹기 딱 좋게.<br>간식으로 딱 맞게.',
  'why.lead': '그릇도, 나눠 먹을 걱정도, 번거로움도 없어요. 뚜껑만 열면 어디서든 바로 바삭하게 즐길 수 있어요.',
  'why.f1t': '간식 사이즈 컵', 'why.f1d': '한 번에 먹기 딱 좋은 60 g의 미니 크런치. 가방, 책상 서랍, 도시락 가방에 쏙 넣어 다니세요.',
  'why.f2t': '스푼이 들어 있어요', 'why.f2d': '모든 솔로컵에 전용 스푼이 함께 들어 있어서, 스푼을 찾을 필요 없이 어디서든 즐길 수 있어요.',
  'why.f3t': '모으는 재미, 다섯 가지 맛', 'why.f3d': '쿠키앤크림부터 피스타치오 크나페까지. 하나 맛보고, 전부 다 맛보세요.',
  'st.kicker': '전 세계의 Konu', 'st.title': '전 세계로 퍼져 가는<br>바삭한 간식',
  'st.lead': '작은 병 하나에서 시작해 전 세계 간식 코너까지. 함께 바삭해 주셔서 고마워요.',
  'st.l1': '전 세계 판매 병 수', 'st.l2': '전 세계 판매처', 'st.l3': '활동 중인 유통사', 'st.l4': '틱톡 좋아요',
  'ord.title': '한 컵만.<br>아니면 다섯 컵 모두.',
  'ord.lead': 'Mini Krunch 솔로컵, 지금 바로 즐겨보세요. 온라인으로 주문하거나 가까운 매장에서 만나보세요.',
  'ord.shop': '플레이버 쇼핑하기', 'ord.buy': '매장 찾기',
  'stores.kicker': '구매처', 'stores.title': '가까운 Mini Krunch 매장 찾기',
  'stores.lead': '필리핀과 캐나다의 매장 {n}곳에서 만나보세요.',
  'stores.search': '매장명, 도시 또는 지역으로 검색', 'stores.count': '{total}곳 중 {shown}곳 표시 중',
  'stores.more': '매장 더 보기', 'stores.none': '“{q}”에 맞는 매장이 없어요. 다른 도시나 지역으로 검색해 보세요.',
  'stores.dir': '길찾기', 'stores.map': '지도에서 보기', 'stores.all': '전체', 'stores.noPhone': '전화번호 없음',
  'country.PH': '필리핀', 'country.CA': '캐나다',
  'ct.kicker': '연락처', 'ct.title': '크런치 이야기 나눠요', 'ct.lead': '문의, 주문, 제휴 무엇이든 편하게 연락 주세요.',
  'ct.addr': '주소', 'ct.inq': '문의 · 지원 · 불편 사항', 'ct.part': '제휴 문의', 'ct.land': '유선 전화 · Cereal Line',
  'ct.map': '지도에서 보기', 'ct.mail': '이메일 보내기', 'ct.call': '전화하기',
  'ft.tag': '어디서든 즐기는 Mini Krunch 시리얼 컵.', 'ft.shop': '쇼핑', 'ft.company': '회사', 'ft.follow': '팔로우',
  'ft.solo': '솔로컵', 'ft.story': '브랜드 스토리', 'ft.contact': '연락처', 'ft.faq': '자주 묻는 질문',
  'cart.title': '장바구니', 'cart.empty': '장바구니가 비어 있어요', 'cart.emptyP': '마음에 드는 맛을 고르면 여기에 표시돼요.',
  'cart.browse': '플레이버 둘러보기', 'cart.sub': '합계',
  'cart.note': '고른 상품을 목록으로 저장해 뒀어요. 원하는 쇼핑몰에서 찾아보세요:',
  'cart.orderOn': '{shop}에서 주문하기', 'cart.stores': '또는 가까운 매장에서 Mini Krunch 찾기 →',
  'cart.checkout': '주문하기', 'cart.clear': '장바구니 비우기', 'cart.view': '장바구니 보기',
  'best.badge': '베스트셀러', 'best.title': 'Choco Krunch Cereal Jar',
  'best.desc': '특별한 프리미엄 초콜릿 글레이즈와 Konu만의 바삭한 미니 초코 시리얼의 만남. 진하고 부드러운, 흔한 초콜릿과는 확실히 다른 맛이에요.',
  'best.soon': '웹사이트 판매 준비 중이에요!', 'best.alt': '초콜릿 글레이즈 미니 시리얼이 가득 담긴 Choco Krunch Cereal Jar',
  'stores.back': '← Mini Krunch 홈으로', 'stores.pageTitle': '구매처 · Mini Krunch',
  'story.kicker': '우리의 이야기',
  'story.title': '모든 건 간식을 다시 신나게 만들고 싶다는 작은 꿈에서 시작됐어요.',
  'story.intro': '단순한 아이디어, 수없이 많은 맛 테스트, 그리고 약간의 혼돈이 어떻게 여러분이 가장 좋아하는 간식이 되었는지 들려드릴게요.',
  'story.s1': '2021년, 조금 여유로워진 시간과 새로운 맛에 대한 큰 갈망 속에서 KONU가 탄생했어요. 재미로 시작한 주방 실험은 곧 창의력과 호기심, 그리고 바삭함으로 가득한 열정 프로젝트가 되었죠.',
  'story.t2': '오늘', 'story.t3': '한입마다',
  'story.s2': '가족과 친구들의 도움으로 그 꿈은 현실이 되었어요. 지금 KONU는 필리핀 전역 400곳이 넘는 매장과 캐나다 주요 슈퍼마켓 진열대에서 만나볼 수 있어요.',
  'story.s3': '첫 간식부터 계속 늘어나는 라인업까지, 모든 KONU 제품은 단 하나의 목표로 만들어져요. 한입마다 행복을 전하고, 간식의 즐거움을 계속 이어가는 것.',
  'story.shop': 'Konu 쇼핑하기',
  'ct.follow': '팔로우하기', 'ct.mapTitle': '리잘주 타이타이에 있는 Konu 위치 지도',
  'prefs.lang': '언어', 'prefs.cur': '통화', 'cur.PHP': '필리핀 페소', 'cur.CAD': '캐나다 달러', 'cur.KRW': '대한민국 원',
  // text built in the script
  'meta': '60 g · 스푼 증정', 'each': '개당 {price} · {weight}', 'seeUp': '{name} 자세히 보기', 'addName': '{name} 장바구니에 담기',
  'removeOne': '{name} 하나 빼기', 'addOne': '{name} 하나 더하기', 'remove': '삭제', 'added': '{name}, 장바구니에 담았어요',
  'addedBtn': '담았어요 ✓', 'livePos': '{name}, {n}개 중 {i}번째', 'cupAlt': '{name} 솔로컵'
};
// English for text built in the script (page text is read from the HTML)
const EN = {
  'cart.orderOn': 'Order on {shop}',
  'meta': '60 g · free spoon', 'each': '{price} each · {weight}', 'seeUp': 'See {name} up close', 'addName': 'Add {name} to cart',
  'removeOne': 'Remove one {name}', 'addOne': 'Add one {name}', 'remove': 'Remove', 'added': '{name} added to cart',
  'addedBtn': 'Added ✓', 'livePos': '{name}, {i} of {n}', 'cupAlt': '{name} solo cup',
  'stores.lead': 'Find us at {n} stores across the Philippines and Canada.', 'stores.count': 'Showing {shown} of {total} stores',
  'stores.none': 'No stores match “{q}”. Try another city or area.', 'stores.dir': 'Get directions', 'stores.map': 'View on map',
  'stores.all': 'All', 'stores.noPhone': 'No phone listed', 'stores.pageTitle': 'Where to buy · Mini Krunch',
  'country.PH': 'Philippines', 'country.CA': 'Canada'
};
const KO_FLAVORS = {
  'Cookies & Cream': { title: '당길 때 바로, 크런치', desc: '쿠키앤크림 맛 한입 크기 시리얼 크런치를 1인용 컵에 담았어요. 스푼까지 들어 있으니 어디서든 즐기세요.' },
  'Strawberry Krunch': { title: '핑크빛 비주얼, 바삭한 반전', desc: '달콤한 딸기 미니 크런치 솔로컵. 뚜껑을 열고 들어 있는 스푼으로 바로 즐기세요.' },
  'Matcha Crunch': { title: '바삭하게 즐기는 녹차', desc: '깊은 말차와 미니 시리얼 크런치의 만남. 달콤하고 살짝 고급스러운 1인용 간식.' },
  'Choco Crunch': { title: '한입마다 초콜릿', desc: '진한 초콜릿 미니 크런치. 야식으로, 나만 먹고 싶은 순간에. 한 컵, 한 스푼, 오롯이 내 것.' },
  'Pistachio Knafeh': { title: '컵에 담은 피스타치오 열풍', desc: '고소한 피스타치오에 크나페에서 영감을 받은 바삭함. 요즘 다들 찾는 그 맛, 스푼으로 바로.' }
};

// read the English page text once, before anything is translated
document.querySelectorAll('[data-i18n]').forEach(el => { EN[el.dataset.i18n] ??= el.textContent; });
document.querySelectorAll('[data-i18n-html]').forEach(el => { EN[el.dataset.i18nHtml] ??= el.innerHTML; });
document.querySelectorAll('[data-i18n-aria]').forEach(el => { EN[el.dataset.i18nAria] ??= el.getAttribute('aria-label'); });
document.querySelectorAll('[data-i18n-ph]').forEach(el => { EN[el.dataset.i18nPh] ??= el.getAttribute('placeholder'); });
document.querySelectorAll('[data-i18n-alt]').forEach(el => { EN[el.dataset.i18nAlt] ??= el.getAttribute('alt'); });
document.querySelectorAll('[data-i18n-title]').forEach(el => { EN[el.dataset.i18nTitle] ??= el.getAttribute('title'); });

const store = {
  get(k) { try { return localStorage.getItem(k); } catch (e) { return null; } },
  set(k, v) { try { localStorage.setItem(k, v); } catch (e) {} }
};
const browserLang = (navigator.language || 'en').toLowerCase();
let lang = store.get('miniKrunchLang') || (browserLang.startsWith('ko') ? 'ko' : 'en');
let cur = store.get('miniKrunchCurrency') || (lang === 'ko' ? 'KRW' : browserLang.endsWith('-ca') ? 'CAD' : 'PHP');
if (!KO || !['en', 'ko'].includes(lang)) lang = 'en';
if (!CURRENCIES[cur]) cur = 'PHP';

function t(key, vars = {}) {
  const str = (lang === 'ko' && KO[key]) || EN[key] || key;
  return str.replace(/\{(\w+)\}/g, (_, k) => vars[k] ?? '');
}
const loc = (f, field) => (lang === 'ko' && KO_FLAVORS[f.name]) ? KO_FLAVORS[f.name][field] : f[field];
function priceOf(f) {
  const c = CURRENCIES[cur];
  return Math.round((f.pricePHP * c.perPeso) / c.step) * c.step;
}
function money(v) {
  const c = CURRENCIES[cur];
  return c.sym + v.toLocaleString(lang === 'ko' ? 'ko-KR' : 'en-US', { minimumFractionDigits: c.dec, maximumFractionDigits: c.dec });
}

function translatePage() {
  document.documentElement.lang = lang;
  document.querySelectorAll('[data-i18n]').forEach(el => { el.textContent = t(el.dataset.i18n); });
  document.querySelectorAll('[data-i18n-html]').forEach(el => { el.innerHTML = t(el.dataset.i18nHtml); });
  document.querySelectorAll('[data-i18n-aria]').forEach(el => { el.setAttribute('aria-label', t(el.dataset.i18nAria)); });
  document.querySelectorAll('[data-i18n-ph]').forEach(el => { el.setAttribute('placeholder', t(el.dataset.i18nPh)); });
  document.querySelectorAll('[data-i18n-alt]').forEach(el => { el.setAttribute('alt', t(el.dataset.i18nAlt)); });
  document.querySelectorAll('[data-i18n-title]').forEach(el => { el.setAttribute('title', t(el.dataset.i18nTitle)); });
}

// colors for store chains (used on both pages)
const CHAIN_COLORS = { 'SM': '#9fa8e0', 'SM Hypermarket': '#b48cf1', 'Robinsons': '#a9c48a', 'Puregold': '#e6d9a6', 'Savemore': '#f3aabb', 'Lawson': '#8fd3e8', 'Canada': '#f3aabb' };
