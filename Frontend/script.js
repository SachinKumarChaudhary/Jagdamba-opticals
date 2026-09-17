/* Jagdamba Optical - PRD MVP frontend
 * Works with Backend API when API_BASE is reachable, else demo data.
 * TODO: set WHATSAPP_NUMBER, STORE_ADDRESS, API_BASE before production.
 */
const CONFIG = {
  API_BASE: (localStorage.getItem('jo_api_base') || '').trim() || 'http://localhost:10000/api',
  WHATSAPP_NUMBER: '919999999999', // TODO: replace with store WhatsApp number, e.g. 919876543210
  STORE_ADDRESS: 'Shop No. 12, Main Market, Near Bus Stand, Your City – 110001',
  STORE_PHONE: '+91 99999 99999',
};

const LENSES = [
  { name: 'Single Vision Lens', price: 599, features: ['Clear single-power vision', 'Scratch-resistant coating', 'Best for myopia / hyperopia'], benefit: 'Everyday clarity at honest price.' },
  { name: 'Blue Cut Lens', price: 999, features: ['Blocks harmful blue light', 'Reduces eye strain', 'Ideal for mobile / laptop users'], benefit: 'For your digital life.' },
  { name: 'Anti-Glare Lens', price: 899, features: ['Cuts reflections at night', 'Sharper driving vision', 'Easy-clean coating'], benefit: 'Clear night driving.' },
  { name: 'Photochromic Lens', price: 1299, features: ['Auto-darkens in sunlight', '100% UV protection', 'No need for separate sunglasses'], benefit: 'One pair, indoor + outdoor.' },
  { name: 'Progressive Lens', price: 1999, features: ['Near + intermediate + far', 'No visible line', 'Custom-fitted in store'], benefit: 'For 40+ seamless vision.' },
  { name: 'Computer Lens', price: 1099, features: ['Optimised for 60-80cm screen', 'Neck-strain free posture', 'Anti-glare + blue-cut'], benefit: 'Office-day comfort.' },
];

const DEMO_PRODUCTS = [
  { id: 'JO-1024', code: 'JO-1024', brand: 'RAY-BAN STYLE', name: 'Classic Black Rectangle Frame', price: 1499, old: 2299, rating: 4.8, reviews: 132, category: 'eyeglasses', shape: 'Rectangle', material: 'Acetate', gender: 'Men', color: 'Black', size: 'Medium', featured: true, isNew: true, popularity: 98, img: 'https://images.unsplash.com/photo-1574258495973-f010dfbb5371?auto=format&fit=crop&w=700&q=80' },
  { id: 'JO-1025', code: 'JO-1025', brand: 'VINCENT CHASE', name: 'Black Rectangle Eyeglasses', price: 999, old: 1799, rating: 4.6, reviews: 84, category: 'eyeglasses', shape: 'Rectangle', material: 'Plastic', gender: 'Men', color: 'Black', size: 'Medium', featured: true, isNew: false, popularity: 92, img: 'https://images.unsplash.com/photo-1508296695146-257a814070b4?auto=format&fit=crop&w=700&q=80' },
  { id: 'JO-1026', code: 'JO-1026', brand: 'JOHN JACOBS', name: 'Tortoise Round Eyeglasses', price: 1299, old: 2199, rating: 4.7, reviews: 61, category: 'eyeglasses', shape: 'Round', material: 'Acetate', gender: 'Women', color: 'Brown', size: 'Small', featured: true, isNew: true, popularity: 90, img: 'https://images.unsplash.com/photo-1574258495973-f010dfbb5371?auto=format&fit=crop&w=700&q=80' },
  { id: 'JO-1027', code: 'JO-1027', brand: 'AIR FLEX', name: 'Blue Square Eyeglasses', price: 1199, old: 1999, rating: 4.5, reviews: 47, category: 'eyeglasses', shape: 'Square', material: 'Metal', gender: 'Women', color: 'Blue', size: 'Medium', featured: false, isNew: true, popularity: 78, img: 'https://images.unsplash.com/photo-1556306535-0f09a537f0a3?auto=format&fit=crop&w=700&q=80' },
  { id: 'JO-1028', code: 'JO-1028', brand: 'IDEE', name: 'Brown Wayfarer Eyeglasses', price: 1099, old: 1899, rating: 4.6, reviews: 53, category: 'eyeglasses', shape: 'Square', material: 'Plastic', gender: 'Men', color: 'Brown', size: 'Large', featured: false, isNew: false, popularity: 75, img: 'https://images.unsplash.com/photo-1577803645773-f96470509666?auto=format&fit=crop&w=700&q=80' },
  { id: 'JO-2001', code: 'JO-2001', brand: 'RAY-BAN', name: 'Aviator Sunglasses', price: 2699, old: 4499, rating: 4.9, reviews: 210, category: 'sunglasses', shape: 'Aviator', material: 'Metal', gender: 'Men', color: 'Black', size: 'Large', featured: true, isNew: false, popularity: 97, img: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=700&q=80' },
  { id: 'JO-2002', code: 'JO-2002', brand: 'VINCENT CHASE', name: 'Polarized Sunglasses', price: 1599, old: 2799, rating: 4.7, reviews: 88, category: 'sunglasses', shape: 'Rectangle', material: 'Plastic', gender: 'Women', color: 'Black', size: 'Medium', featured: true, isNew: true, popularity: 89, img: 'https://images.unsplash.com/photo-1508296695146-257a814070b4?auto=format&fit=crop&w=700&q=80' },
  { id: 'JO-2003', code: 'JO-2003', brand: 'OAKLEY', name: 'Sports Sunglasses', price: 3499, old: 5999, rating: 4.8, reviews: 64, category: 'sunglasses', shape: 'Square', material: 'Plastic', gender: 'Men', color: 'Blue', size: 'Large', featured: false, isNew: false, popularity: 80, img: 'https://images.unsplash.com/photo-1577803645773-f96470509666?auto=format&fit=crop&w=700&q=80' },
  { id: 'JO-2004', code: 'JO-2004', brand: 'FASTRACK', name: 'Brown Wayfarer Sunglasses', price: 1299, old: 2199, rating: 4.5, reviews: 39, category: 'sunglasses', shape: 'Square', material: 'Acetate', gender: 'Women', color: 'Brown', size: 'Medium', featured: false, isNew: true, popularity: 72, img: 'https://images.unsplash.com/photo-1556306535-0f09a537f0a3?auto=format&fit=crop&w=700&q=80' },
  { id: 'JO-3001', code: 'JO-3001', brand: 'JAGDAMBA KIDS', name: 'Kids Safe Round Frame', price: 799, old: 1299, rating: 4.7, reviews: 28, category: 'kids', shape: 'Round', material: 'Plastic', gender: 'Kids', color: 'Blue', size: 'Small', featured: true, isNew: true, popularity: 85, img: 'https://images.unsplash.com/photo-1577803645773-f96470509666?auto=format&fit=crop&w=700&q=80' },
  { id: 'JO-3002', code: 'JO-3002', brand: 'JAGDAMBA KIDS', name: 'Kids Cat Eye Frame', price: 849, old: 1399, rating: 4.6, reviews: 19, category: 'kids', shape: 'Cat Eye', material: 'Plastic', gender: 'Kids', color: 'Brown', size: 'Small', featured: false, isNew: false, popularity: 68, img: 'https://images.unsplash.com/photo-1574258495973-f010dfbb5371?auto=format&fit=crop&w=700&q=80' },
  { id: 'JO-4001', code: 'JO-4001', brand: 'JAGDAMBA', name: 'Blue Cut Computer Glasses', price: 999, old: 1699, rating: 4.7, reviews: 95, category: 'lenses', shape: 'Rectangle', material: 'Plastic', gender: 'Men', color: 'Black', size: 'Medium', featured: true, isNew: false, popularity: 88, img: 'https://images.unsplash.com/photo-1508296695146-257a814070b4?auto=format&fit=crop&w=700&q=80' },
];

let products = [...DEMO_PRODUCTS];
let activeCat = 'eyeglasses';
let currentModalId = null;

const $ = (s) => document.querySelector(s);
const grid = $('#productGrid'), featuredGrid = $('#featuredGrid'), toast = $('#toast');

const load = (k, f) => { try { return JSON.parse(localStorage.getItem(k)) ?? f; } catch { return f; } };
const save = (k, v) => localStorage.setItem(k, JSON.stringify(v));
let wishlist = new Set(load('jo_wishlist', []));
let cart = load('jo_cart', {}); // id -> qty

function inr(n) { return '₹' + Number(n || 0).toLocaleString('en-IN'); }
function off(p) { return p.old ? Math.round((1 - p.price / p.old) * 100) : 0; }
function waLink(p) {
  const msg = `Hello Jagdamba Optical,\nI am interested in ${p.name}.\nPrice: ${inr(p.price)}\nProduct ID: ${p.code || p.id}`;
  return `https://wa.me/${CONFIG.WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
}
function showToast(m) { toast.textContent = m; toast.classList.add('show'); clearTimeout(window._t); window._t = setTimeout(() => toast.classList.remove('show'), 1800); }

function normalizeApiProduct(p) {
  return {
    id: String(p.id), code: p.sku || ('JO-' + p.id),
    brand: (p.brand || '').toUpperCase(), name: p.name || 'Frame',
    price: Number(p.price || 0), old: Number(p.compare_price || p.price || 0),
    rating: 4.6, reviews: 23, category: (p.product_type || p.category_slug || 'eyeglasses').toLowerCase().includes('sunglass') ? 'sunglasses' : (p.category_slug || p.product_type || 'eyeglasses'),
    shape: p.frame_shape || 'Rectangle', material: p.material || 'Acetate',
    gender: p.gender || 'Men', color: p.color || 'Black', size: p.size || 'Medium',
    featured: !!p.is_featured, isNew: false, popularity: 50,
    img: p.image_url || DEMO_PRODUCTS[0].img,
  };
}

async function tryLoadApi() {
  try {
    const ctl = new AbortController(); const t = setTimeout(() => ctl.abort(), 3500);
    const r = await fetch(CONFIG.API_BASE + '/products?limit=100', { signal: ctl.signal });
    clearTimeout(t);
    if (!r.ok) throw new Error('api');
    const data = await r.json();
    if (Array.isArray(data) && data.length) { products = data.map(normalizeApiProduct); return true; }
  } catch { /* fallback to demo */ }
  return false;
}

function getFilters() {
  const g = [...document.querySelectorAll('input[name=gender]:checked')].map(x => x.value);
  const s = [...document.querySelectorAll('input[name=shape]:checked')].map(x => x.value);
  const m = [...document.querySelectorAll('input[name=material]:checked')].map(x => x.value);
  const b = [...document.querySelectorAll('input[name=brand]:checked')].map(x => x.value);
  const pr = (document.querySelector('input[name=price]:checked') || {}).value || '';
  const c = document.querySelector('.color-dot.active')?.dataset.color || '';
  const q = $('#searchInput').value.trim().toLowerCase();
  return { g, s, m, b, pr, c, q };
}

function applyFilters() {
  const f = getFilters(), sort = $('#sortSelect').value;
  let list = products.filter(p => {
    if (activeCat !== 'all' && p.category !== activeCat) return false;
    if (f.g.length && !f.g.includes(p.gender)) return false;
    if (f.s.length && !f.s.includes(p.shape)) return false;
    if (f.m.length && !f.m.includes(p.material)) return false;
    if (f.b.length && !f.b.includes(p.brand)) return false;
    if (f.c && p.color !== f.c) return false;
    if (f.pr === 'under999' && !(p.price < 999)) return false;
    if (f.pr === '999-1999' && !(p.price >= 999 && p.price <= 1999)) return false;
    if (f.pr === '2000plus' && !(p.price >= 2000)) return false;
    if (f.q && !`${p.brand} ${p.name} ${p.shape} ${p.color}`.toLowerCase().includes(f.q)) return false;
    return true;
  });
  if (sort === 'low') list.sort((a, b) => a.price - b.price);
  else if (sort === 'high') list.sort((a, b) => b.price - a.price);
  else if (sort === 'new') list.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0));
  else list.sort((a, b) => b.popularity - a.popularity);
  renderGrid(list);
}

function cardHtml(p) {
  const wished = wishlist.has(p.id) ? ' active' : '';
  const heart = wishlist.has(p.id) ? '♥' : '♡';
  return `<article class="product">
    <div class="product-img"><img loading="lazy" src="${p.img}" alt="${p.name}"/>${p.isNew ? '<span class="pill">NEW</span>' : ''}
    <button class="heart${wished}" data-wish="${p.id}" aria-label="Wishlist">${heart}</button></div>
    <div class="product-info"><div class="brand">${p.brand}</div><div class="product-name">${p.name}</div>
    <div class="rating">⭐ ${p.rating} <small>(${p.reviews})</small></div>
    <div><span class="price">${inr(p.price)}</span><span class="old">${inr(p.old)}</span><span class="discount">${off(p)}% OFF</span></div>
    <div class="card-actions"><button class="ghost" data-view="${p.id}">View Details</button><button class="btn primary" data-add="${p.id}">ADD</button><a class="btn wa" href="${waLink(p)}" target="_blank" rel="noopener">WhatsApp</a></div>
    </div></article>`;
}

function renderGrid(list) {
  grid.innerHTML = list.length ? list.map(cardHtml).join('') : '<p>No products match these filters. <button class="link" id="resetF">Clear filters</button></p>';
  $('#resultCount').textContent = `${list.length} product${list.length === 1 ? '' : 's'}`;
  const r = $('#resetF'); if (r) r.onclick = clearFilters;
}
function renderFeatured() {
  const f = products.filter(p => p.featured).slice(0, 4);
  featuredGrid.innerHTML = (f.length ? f : products.slice(0, 4)).map(cardHtml).join('');
}
function renderBrandColor() {
  const brands = [...new Set(products.map(p => p.brand))].sort();
  $('#brandFilters').innerHTML = brands.map(b => `<label><input type="checkbox" name="brand" value="${b}"/> ${b}</label>`).join('');
  const colors = [...new Set(products.map(p => p.color))];
  const map = { Black: '#111', Brown: '#7c4a21', Blue: '#2f6bff' };
  $('#colorFilters').innerHTML = colors.map(c => `<span class="color-dot" title="${c}" data-color="${c}" style="background:${map[c] || '#999'}"></span>`).join('');
  document.querySelectorAll('.color-dot').forEach(d => d.onclick = () => { document.querySelectorAll('.color-dot').forEach(x => x.classList.remove('active')); d.classList.add('active'); applyFilters(); });
}
function renderLenses() {
  $('#lensGrid').innerHTML = LENSES.map(l => `<div class="lens-card"><b>${l.name}</b><small>Starting ${inr(l.price)}</small><ul>${l.features.map(f => `<li>${f}</li>`).join('')}</ul><p><small>${l.benefit}</small></p><div class="row"><a class="btn wa" target="_blank" rel="noopener" href="https://wa.me/${CONFIG.WHATSAPP_NUMBER}?text=${encodeURIComponent(`Hello Jagdamba Optical,\nI am interested in ${l.name}.\nStarting price: ${inr(l.price)}`)}">Enquire</a></div></div>`).join('');
}

function openModal(id) {
  const p = products.find(x => x.id === id); if (!p) return;
  currentModalId = id;
  $('#mImg').src = p.img; $('#mBrand').textContent = p.brand; $('#mName').textContent = p.name;
  $('#mRating').textContent = `⭐ ${p.rating} (${p.reviews} Reviews)`;
  $('#mPrice').textContent = inr(p.price); $('#mOld').textContent = inr(p.old); $('#mOff').textContent = off(p) + '% OFF';
  $('#mCode').textContent = `Product ID: ${p.code || p.id} • ${p.category}`;
  $('#mColors').innerHTML = ['Black', 'Brown', 'Blue'].map(c => `<span class="color-dot${c === p.color ? ' active' : ''}" title="${c}" style="background:${c === 'Black' ? '#111' : c === 'Brown' ? '#7c4a21' : '#2f6bff'}"></span>`).join('');
  $('#mSpecs').innerHTML = `<span><b>Shape:</b> ${p.shape}</span><span><b>Material:</b> ${p.material}</span><span><b>For:</b> ${p.gender}</span><span><b>Size:</b> ${p.size}</span>`;
  $('#mThumbs').innerHTML = [p.img, DEMO_PRODUCTS[1].img, DEMO_PRODUCTS[5].img].map((s, i) => `<img src="${s}" class="${i === 0 ? 'active' : ''}" alt="view"/>`).join('');
  document.querySelectorAll('#mThumbs img').forEach(t => t.onclick = () => { document.querySelectorAll('#mThumbs img').forEach(x => x.classList.remove('active')); t.classList.add('active'); $('#mImg').src = t.src; });
  $('#mWish').textContent = wishlist.has(p.id) ? '♥ Wishlisted' : '♡ Wishlist';
  $('#mWa').href = waLink(p);
  $('#productModal').classList.remove('hidden');
}
function closeModal() { $('#productModal').classList.add('hidden'); currentModalId = null; }

function syncBadges() {
  const n = Object.values(cart).reduce((a, b) => a + b, 0);
  $('#cartCount').textContent = n;
  const w = $('#wishCount'); w.textContent = wishlist.size; w.classList.toggle('hidden', !wishlist.size);
}
function renderCart() {
  const ids = Object.keys(cart);
  $('#cartItems').innerHTML = ids.length ? ids.map(id => {
    const p = products.find(x => x.id === id); if (!p) return '';
    return `<div class="line"><img src="${p.img}" alt=""/><div><b>${p.name}</b><div>${inr(p.price)} • ${p.code || ''}</div><div class="qty"><button data-dec="${id}">−</button><span>${cart[id]}</span><button data-inc="${id}">+</button><button data-rem="${id}">Remove</button></div></div></div>`;
  }).join('') : '<p>Your cart is empty.</p>';
  const total = ids.reduce((a, id) => { const p = products.find(x => x.id === id); return a + (p ? p.price * cart[id] : 0); }, 0);
  $('#cartTotal').textContent = ids.length ? 'Total: ' + inr(total) + (total >= 999 ? ' (FREE shipping)' : ' (+₹80 shipping)') : '';
}
function renderWish() {
  const list = [...wishlist].map(id => products.find(x => x.id === id)).filter(Boolean);
  $('#wishItems').innerHTML = list.length ? list.map(p => `<div class="line"><img src="${p.img}" alt=""/><div><b>${p.name}</b><div>${inr(p.price)}</div><div class="row"><button class="btn primary" data-add="${p.id}">Add to Cart</button><button class="ghost" data-view="${p.id}">View</button></div></div></div>`).join('') : '<p>No favourites yet. Tap ♡ on any product.</p>';
}

function setCat(c) {
  activeCat = c;
  document.querySelectorAll('#catTabs button').forEach(b => b.classList.toggle('active', b.dataset.cat === c));
  const titles = { all: 'All Products', eyeglasses: 'Eyeglasses', sunglasses: 'Sunglasses', kids: 'Kids Eyewear', lenses: 'Lenses' };
  $('#shopTitle').textContent = titles[c] || c;
  applyFilters();
  document.querySelector('#shop').scrollIntoView({ behavior: 'smooth' });
}
function clearFilters() {
  document.querySelectorAll('#filters input').forEach(i => i.checked = false);
  document.querySelectorAll('.color-dot').forEach(x => x.classList.remove('active'));
  $('#searchInput').value = ''; $('#sortSelect').value = 'popular';
  applyFilters();
}

document.addEventListener('click', (e) => {
  const add = e.target.closest('[data-add]'), wish = e.target.closest('[data-wish]'), view = e.target.closest('[data-view]');
  const cat = e.target.closest('[data-cat]'), catLink = e.target.closest('[data-cat-link]');
  if (add) { const id = add.dataset.add; cart[id] = (cart[id] || 0) + 1; save('jo_cart', cart); syncBadges(); renderCart(); showToast('Added to cart'); }
  if (wish) { const id = wish.dataset.wish; wish.classList.toggle('active'); const on = wish.classList.contains('active'); wish.textContent = on ? '♥' : '♡'; on ? wishlist.add(id) : wishlist.delete(id); save('jo_wishlist', [...wishlist]); syncBadges(); renderWish(); showToast(on ? 'Added to wishlist' : 'Removed from wishlist'); }
  if (view) openModal(view.dataset.view);
  if (cat) { e.preventDefault(); setCat(cat.dataset.cat); }
  if (catLink) setCat(catLink.dataset.catLink);
  const inc = e.target.closest('[data-inc]'), dec = e.target.closest('[data-dec]'), rem = e.target.closest('[data-rem]');
  if (inc) { cart[inc.dataset.inc]++; save('jo_cart', cart); syncBadges(); renderCart(); }
  if (dec) { const id = dec.dataset.dec; cart[id]--; if (cart[id] <= 0) delete cart[id]; save('jo_cart', cart); syncBadges(); renderCart(); }
  if (rem) { delete cart[rem.dataset.rem]; save('jo_cart', cart); syncBadges(); renderCart(); }
  if (e.target.closest('[data-close]')) { $('#cartDrawer').classList.add('hidden'); $('#wishDrawer').classList.add('hidden'); }
  if (e.target.closest('[data-goto-shop]')) setCat('all');
});

$('#cartButton').onclick = () => { renderCart(); $('#cartDrawer').classList.remove('hidden'); };
$('#wishlistBtn').onclick = () => { renderWish(); $('#wishDrawer').classList.remove('hidden'); };
$('#bnCart').onclick = () => { renderCart(); $('#cartDrawer').classList.remove('hidden'); };
$('#bnWish').onclick = () => { renderWish(); $('#wishDrawer').classList.remove('hidden'); };
$('#bnMenu').onclick = () => document.querySelector('#shop').scrollIntoView({ behavior: 'smooth' });
$('#menuBtn').onclick = () => { const n = $('#mainNav'); n.style.display = n.style.display === 'flex' ? '' : 'flex'; n.style.flexDirection = 'column'; n.style.position = 'absolute'; n.style.top = '100%'; n.style.background = '#fff'; n.style.padding = '12px'; };
$('#modalClose').onclick = closeModal;
$('#productModal').addEventListener('click', (e) => { if (e.target.id === 'productModal') closeModal(); });
$('#mCart').onclick = () => { if (!currentModalId) return; cart[currentModalId] = (cart[currentModalId] || 0) + 1; save('jo_cart', cart); syncBadges(); showToast('Added to cart'); };
$('#mWish').onclick = () => { if (!currentModalId) return; wishlist.has(currentModalId) ? wishlist.delete(currentModalId) : wishlist.add(currentModalId); save('jo_wishlist', [...wishlist]); syncBadges(); applyFilters(); renderFeatured(); $('#mWish').textContent = wishlist.has(currentModalId) ? '♥ Wishlisted' : '♡ Wishlist'; };
$('#clearFilters').onclick = clearFilters;
$('#sortSelect').onchange = applyFilters;
$('#searchInput').addEventListener('input', applyFilters);
document.querySelectorAll('#catTabs button').forEach(b => b.onclick = () => setCat(b.dataset.cat));
document.querySelectorAll('#filters input').forEach(i => i.onchange = applyFilters);

$('#checkoutWa').onclick = () => {
  const ids = Object.keys(cart); if (!ids.length) return showToast('Cart is empty');
  const lines = ids.map(id => { const p = products.find(x => x.id === id); return `• ${p.name} (${p.code}) x${cart[id]} = ${inr(p.price * cart[id])}`; });
  const total = ids.reduce((a, id) => a + products.find(x => x.id === id).price * cart[id], 0);
  const msg = `Hello Jagdamba Optical,\nI want to order:\n${lines.join('\n')}\nTotal: ${inr(total)}\nName:\nAddress:`;
  window.open(`https://wa.me/${CONFIG.WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`, '_blank');
};

$('#enquiryForm').addEventListener('submit', async (e) => {
  e.preventDefault();
  const d = Object.fromEntries(new FormData(e.target));
  try {
    const r = await fetch(CONFIG.API_BASE + '/inquiries', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(d) });
    if (!r.ok) throw new Error();
    showToast('Enquiry sent! We will contact you.');
    e.target.reset();
  } catch {
    window.open(`https://wa.me/${CONFIG.WHATSAPP_NUMBER}?text=${encodeURIComponent(`Hello Jagdamba Optical,\n${d.name} (${d.phone || ''})\n${d.message}`)}`, '_blank');
  }
});
document.querySelector('#contact')?.addEventListener('submit', () => {});

function wireStore() {
  const wa = `https://wa.me/${CONFIG.WHATSAPP_NUMBER}?text=${encodeURIComponent('Hello Jagdamba Optical, I have a question.')}`;
  $('#storeWa').href = wa; $('#footWa').href = wa;
  $('#topWa').textContent = CONFIG.STORE_PHONE; $('#storePhone').textContent = CONFIG.STORE_PHONE;
  $('#storeAddress').textContent = CONFIG.STORE_ADDRESS; $('#footPhone').textContent = CONFIG.STORE_PHONE;
  $('#directionsBtn').href = 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent(CONFIG.STORE_ADDRESS);
}

(async function init() {
  wireStore(); renderBrandColor(); renderLenses(); renderFeatured(); applyFilters(); syncBadges(); renderCart(); renderWish();
  const ok = await tryLoadApi();
  renderBrandColor(); renderFeatured(); applyFilters();
  if (ok) showToast('Live catalogue connected');
})();
