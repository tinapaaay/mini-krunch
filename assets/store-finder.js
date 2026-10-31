// Store finder for stores.html (needs assets/stores.js and assets/site.js first).
(function () {
  const $ = id => document.getElementById(id);
  // ================= where to buy =================
  const STORES = window.STORES || [];
  const PAGE = 12;
  let country = 'PH', chain = 'all', query = '', shown = PAGE;
  const fold = str => str.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase();
  STORES.forEach(st => { st._q = fold(`${st.name} ${st.address} ${st.chain}`); });
  const mapUrl = st => 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent(`${st.name}, ${st.address}`);
  const dirUrl = st => 'https://www.google.com/maps/dir/?api=1&destination=' + encodeURIComponent(`${st.name}, ${st.address}`);
  const esc = str => String(str).replace(/[&<>"']/g, ch => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[ch]));

  function renderStores() {
    if (!STORES.length) return;
    $('storesLead').textContent = t('stores.lead', { n: STORES.length });
    $('countryTabs').querySelectorAll('button').forEach(b => {
      b.setAttribute('aria-pressed', b.dataset.country === country);
      b.querySelector('small').textContent = STORES.filter(st => st.country === b.dataset.country).length;
    });

    // chain filter chips (Philippines only)
    const inCountry = STORES.filter(st => st.country === country);
    const chains = [...new Set(inCountry.map(st => st.chain))];
    const chips = $('chainChips');
    chips.hidden = chains.length < 2;
    chips.innerHTML = ['all', ...chains].map(c => {
      const label = c === 'all' ? t('stores.all') : c;
      const num = c === 'all' ? inCountry.length : inCountry.filter(st => st.chain === c).length;
      return `<button class="chip" data-chain="${esc(c)}" aria-pressed="${chain === c}" style="--k:${CHAIN_COLORS[c] || '#531607'}">${esc(label)} <small>${num}</small></button>`;
    }).join('');

    const q = fold(query.trim());
    const list = inCountry.filter(st => (chain === 'all' || st.chain === chain) && (!q || q.split(/\s+/).every(w => st._q.includes(w))));
    const visible = list.slice(0, shown);
    $('storeGrid').innerHTML = visible.map(st => `
      <li class="store">
        <span class="chain-tag" style="--k:${CHAIN_COLORS[st.chain]}">${esc(st.chain === 'Canada' ? t('country.CA') : st.chain)}</span>
        <h3>${esc(st.name)}</h3>
        <p class="addr">${esc(st.address)}</p>
        ${st.phone ? `<a class="phone" href="tel:${esc(st.tel)}">${esc(st.phone)}</a>` : `<span class="phone none">${t('stores.noPhone')}</span>`}
        <div class="store-actions">
          <a href="${dirUrl(st)}" target="_blank" rel="noopener">${t('stores.dir')}</a>
          <a href="${mapUrl(st)}" target="_blank" rel="noopener">${t('stores.map')}</a>
        </div>
      </li>`).join('');
    $('storeCount').textContent = list.length ? t('stores.count', { shown: visible.length, total: list.length }) : '';
    $('storeEmpty').hidden = list.length > 0;
    $('storeEmpty').textContent = list.length ? '' : t('stores.none', { q: query.trim() });
    $('storeMore').hidden = visible.length >= list.length;
  }

  $('countryTabs').addEventListener('click', e => {
    const b = e.target.closest('button'); if (!b || b.dataset.country === country) return;
    country = b.dataset.country; chain = 'all'; shown = PAGE; renderStores();
  });
  $('chainChips').addEventListener('click', e => {
    const b = e.target.closest('.chip'); if (!b) return;
    chain = b.dataset.chain; shown = PAGE; renderStores();
  });
  let searchTimer;
  $('storeSearch').addEventListener('input', e => {
    clearTimeout(searchTimer);
    searchTimer = setTimeout(() => { query = e.target.value; shown = PAGE; renderStores(); }, 120);
  });
  $('storeMore').onclick = () => { shown += PAGE; renderStores(); };

  window.renderStores = renderStores;
})();
