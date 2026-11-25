// timstore logic & cart management
const TELEGRAM_CONFIG = {
  token: '8680041047:AAEdEWWEBJkYAqFWNBv4IYsd0ZljVl0gsZ0',
  chatId: '6810661802'
};

const PRODUCTS = [
  {
    id: 1,
    title: "Тримач для телефону на шолом",
    category: "mounts",
    categoryName: "Кріплення & Екшн",
    price: 180,
    oldPrice: 320,
    badge: "ХІТ ПРОДАЖУ",
    badgeColor: "purple",
    rating: 4.9,
    reviewsCount: 38,
    image: "assets/helmet-mount.jpg",
    shortDesc: "Повний комплект кріплення на підборіддя шолома з силіконовим тримачем для POV зйомки.",
    features: [
      "Підходить для 99% мотошоломів (інтеграл, крос, модуляр)",
      "Посилений силіконовий фіксатор «павук» проти випадіння",
      "Регулювання кута нахилу та надійні міцні стропи",
      "Універсальний затискач для телефонів будь-якої діагоналі"
    ],
    inStock: true
  },
  {
    id: 2,
    title: "Павербанк з бездротовою зарядкою (MagSafe/Qi)",
    category: "gadgets",
    categoryName: "Електроніка & Заряд",
    price: 699,
    oldPrice: 899,
    badge: "ТОП ВИБІР",
    badgeColor: "purple",
    rating: 5.0,
    reviewsCount: 52,
    image: "assets/powerbank.jpg",
    shortDesc: "Швидкісна бездротова магнітна зарядка. Ідеально для авто, подорожей та щоденного використання.",
    features: [
      "Потужний магнітний фіксатор MagSafe",
      "Швидка бездротова та дротова зарядка Fast Charge",
      "Компактний ергономічний корпус із захистом від подряпин",
      "Захист від перегріву, короткого замикання та стрибків напруги"
    ],
    inStock: true
  },
  {
    id: 3,
    title: "Фірмовий стікерпак KST (Наліпки)",
    category: "stickers",
    categoryName: "Стайлінг & Аксесуари",
    price: 30,
    oldPrice: 50,
    badge: "СТИЛЬ",
    badgeColor: "violet",
    rating: 4.8,
    reviewsCount: 44,
    image: "assets/kst-stickers.svg",
    shortDesc: "Преміальні вінілові стікери KST з ламінацією. Стійкі до води, мийки високого тиску та сонця.",
    features: [
      "100% водостійкий вініл підвищеної міцності",
      "УФ-ламінація, кольори не вигорають на сонці",
      "Не залишають слідів клею при знятті",
      "Ідеально для шолома, мотоцикла, авто, смартфона або кейса"
    ],
    inStock: true
  },
  {
    id: 4,
    title: "Тримач для телефону на груди (Chest Mount)",
    category: "mounts",
    categoryName: "Кріплення & Екшн",
    price: 299,
    oldPrice: 420,
    badge: "ПОПУЛЯРНЕ",
    badgeColor: "purple",
    rating: 4.9,
    reviewsCount: 29,
    image: "assets/chest-mount.jpg",
    shortDesc: "Еластичний регульований нагрудний ремінь для зйомки найдинамічніших кадрів покатушок від першої особи.",
    features: [
      "Дихаючі та еластичні ремені з легким налаштуванням розміру",
      "J-Hook кронштейн для швидкої установки потрібного кута",
      "Горизонтальне та вертикальне надійне положення смартфона",
      "Сумісний зі смартфонами та екшн-камерами (GoPro, SJCAM, DJI)"
    ],
    inStock: true
  },
  {
    id: 5,
    title: "Міні стробоскопи LED (RGB з пультом / USB)",
    category: "lights",
    categoryName: "Оптика & Безпека",
    price: 240,
    oldPrice: 350,
    badge: "НОВИНКА",
    badgeColor: "purple",
    rating: 4.9,
    reviewsCount: 67,
    image: "assets/strobes.jpg",
    shortDesc: "Яскраві багаторежимні міні-стробоскопи з пультом ДК для мотоцикла, шолома, авто чи дрона.",
    features: [
      "7 кольорів підсвічування та понад 20 режимів мерехтіння",
      "Зручний бездротовий пульт керування режимами в комплекті",
      "Вбудований акумулятор із зарядкою Type-C/USB",
      "Вологозахист стандарту IP65 для будь-якої погоди"
    ],
    inStock: true
  },
  {
    id: 6,
    title: "Спортивні рукавиці WINDS (Білі)",
    category: "apparel",
    categoryName: "Екіпірування & Стиль",
    price: 349,
    oldPrice: 480,
    badge: "НОВИНКА",
    badgeColor: "purple",
    rating: 5.0,
    reviewsCount: 26,
    image: "assets/gloves-white.jpg",
    shortDesc: "Дихаючі спортивні рукавиці WINDS EFKEHTIVE білого кольору з чіпкими вставками проти ковзання.",
    features: [
      "Дихаюча еластична тканина з мікроперфорацією",
      "Протиковзкі зносостійкі вставки для впевненого хвату керма",
      "Ергономічна манжета на зап'ясті з надійною фіксацією",
      "Підходять для мотоцикла, пітбайка, вело, самоката та спорту"
    ],
    inStock: true
  },
  {
    id: 7,
    title: "Спортивні рукавиці WINDS (Чорні)",
    category: "apparel",
    categoryName: "Екіпірування & Стиль",
    price: 349,
    oldPrice: 480,
    badge: "НОВИНКА",
    badgeColor: "purple",
    rating: 5.0,
    reviewsCount: 31,
    image: "assets/gloves-black.jpg",
    shortDesc: "Стильні повністю чорні дихаючі спортивні рукавиці WINDS EFKEHTIVE з посиленим зчепленням та анатомічним кроєм.",
    features: [
      "Зносостійкий дихаючий матеріал з вентиляційними отворами",
      "Посилена зона долоні для максимального контролю та зчеплення",
      "Еластичний манжет із регульованою посадкою на руку",
      "Універсальні та довговічні для будь-яких активностей"
    ],
    inStock: true
  },
  {
    id: 8,
    title: "Стікерпак Смайли / Emoji (Наліпки)",
    category: "stickers",
    categoryName: "Стайлінг & Аксесуари",
    price: 99,
    oldPrice: 150,
    badge: "ТРЕНД",
    badgeColor: "violet",
    rating: 4.9,
    reviewsCount: 52,
    image: "assets/stickers.jpg",
    shortDesc: "Великий стікерпак з круглими емодзі та смайлами. 100% водостійкий преміум-вініл для шолома, авто чи гаджетів.",
    features: [
      "Понад 50 різноманітних емоцій та виразних смайликів у наборі",
      "100% водостійкий вініл підвищеної міцності",
      "УФ-ламінація, не вигорають на сонці та стійкі до мийки",
      "Ідеально для шолома, бака, авто, смартфона або ноутбука"
    ],
    inStock: true
  }
];

// App State
let cart = JSON.parse(localStorage.getItem('timstore_cart') || '[]');
let activeCategory = 'all';
let searchQuery = '';
let currentCheckoutItems = [];

// DOM Elements
const productsGrid = document.getElementById('products-grid');
const cartCountBadge = document.getElementById('cart-count');
const cartDrawer = document.getElementById('cart-drawer');
const cartBackdrop = document.getElementById('cart-backdrop');
const cartItemsContainer = document.getElementById('cart-items');
const cartSubtotalEl = document.getElementById('cart-subtotal');
const cartEmptyEl = document.getElementById('cart-empty');
const cartFooterEl = document.getElementById('cart-footer');
const toastEl = document.getElementById('toast');
const toastMessageEl = document.getElementById('toast-message');

// Modal Elements
const productModal = document.getElementById('product-modal');
const checkoutModal = document.getElementById('checkout-modal');
const successModal = document.getElementById('success-modal');

// Init
document.addEventListener('DOMContentLoaded', () => {
  renderProducts();
  updateCartUI();
  setupEventListeners();
});

// Setup Listeners
function setupEventListeners() {
  // Category tabs
  document.querySelectorAll('.cat-filter-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      document.querySelectorAll('.cat-filter-btn').forEach(b => {
        b.classList.remove('bg-purple-600', 'text-white', 'shadow-lg', 'shadow-purple-900/50');
        b.classList.add('bg-zinc-900', 'text-zinc-400');
      });
      const target = e.currentTarget;
      target.classList.remove('bg-zinc-900', 'text-zinc-400');
      target.classList.add('bg-purple-600', 'text-white', 'shadow-lg', 'shadow-purple-900/50');
      
      activeCategory = target.dataset.category;
      renderProducts();
    });
  });

  // Search input
  const searchInput = document.getElementById('search-input');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value.toLowerCase().trim();
      renderProducts();
    });
  }

  // Cart open/close
  document.getElementById('open-cart-btn')?.addEventListener('click', openCart);
  document.getElementById('close-cart-btn')?.addEventListener('click', closeCart);
  cartBackdrop?.addEventListener('click', closeCart);

  // Close modals on backdrop click
  document.querySelectorAll('.modal-backdrop').forEach(backdrop => {
    backdrop.addEventListener('click', (e) => {
      if (e.target === backdrop) {
        closeAllModals();
      }
    });
  });

  // Checkout form submit
  document.getElementById('checkout-form')?.addEventListener('submit', handleCheckoutSubmit);
}

// Render Products
function renderProducts() {
  if (!productsGrid) return;

  const filtered = PRODUCTS.filter(p => {
    const matchesCategory = activeCategory === 'all' || p.category === activeCategory;
    const matchesSearch = p.title.toLowerCase().includes(searchQuery) || 
                          p.shortDesc.toLowerCase().includes(searchQuery);
    return matchesCategory && matchesSearch;
  });

  if (filtered.length === 0) {
    productsGrid.innerHTML = `
      <div class="col-span-full py-16 text-center text-zinc-400">
        <svg class="w-16 h-16 mx-auto mb-4 text-purple-500/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
        </svg>
        <p class="text-lg font-medium text-zinc-300">Товарів не знайдено</p>
        <p class="text-sm text-zinc-500 mt-1">Спробуйте змінити фільтр або пошуковий запит</p>
      </div>
    `;
    return;
  }

  productsGrid.innerHTML = filtered.map(product => `
    <div class="product-card glass-panel rounded-2xl overflow-hidden border border-purple-900/30 hover:border-purple-500/50 transition-all flex flex-col justify-between group">
      <div>
        <!-- Image Container -->
        <div class="relative bg-zinc-950 p-4 flex items-center justify-center overflow-hidden h-64 cursor-pointer" onclick="openProductModal(${product.id})">
          <span class="absolute top-3 left-3 px-3 py-1 text-xs font-bold rounded-full bg-purple-950/80 border border-purple-500/40 text-purple-300 backdrop-blur-md z-10">
            ${product.badge}
          </span>
          <img src="${product.image}" alt="${product.title}" class="w-full h-full object-cover rounded-xl group-hover:scale-105 transition-transform duration-300">
          <button onclick="event.stopPropagation(); openProductModal(${product.id})" class="absolute bottom-3 right-3 bg-zinc-900/90 text-purple-300 hover:text-white p-2 rounded-xl border border-purple-500/30 opacity-0 group-hover:opacity-100 transition-opacity text-xs flex items-center gap-1 backdrop-blur-md z-10">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/></svg>
            Деталі
          </button>
        </div>

        <!-- Content -->
        <div class="p-5">
          <div class="flex items-center justify-between text-xs text-zinc-400 mb-2">
            <span class="text-purple-400 font-medium">${product.categoryName}</span>
            <div class="flex items-center gap-1 text-amber-400">
              <svg class="w-3.5 h-3.5 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
              <span>${product.rating} (${product.reviewsCount})</span>
            </div>
          </div>

          <h3 class="font-bold text-white text-base leading-snug line-clamp-2 hover:text-purple-300 cursor-pointer transition-colors" onclick="openProductModal(${product.id})">
            ${product.title}
          </h3>
          <p class="text-xs text-zinc-400 mt-2 line-clamp-2">${product.shortDesc}</p>
        </div>
      </div>

      <!-- Footer & Action -->
      <div class="p-5 pt-0">
        <div class="flex items-baseline gap-2 mb-4">
          <span class="text-2xl font-black text-white">${product.price} ₴</span>
          <span class="text-sm text-zinc-500 line-through">${product.oldPrice} ₴</span>
          <span class="text-xs text-emerald-400 font-semibold ml-auto">В наявності</span>
        </div>

        <div class="grid grid-cols-2 gap-2">
          <button onclick="quickOrder(${product.id})" class="px-3 py-2.5 rounded-xl border border-purple-500/40 bg-purple-950/30 hover:bg-purple-900/50 text-purple-200 text-xs font-bold transition-all text-center">
            Купити зараз
          </button>
          <button onclick="addToCart(${product.id})" class="px-3 py-2.5 rounded-xl neon-glow-btn text-white text-xs font-bold flex items-center justify-center gap-1.5">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"/></svg>
            У кошик
          </button>
        </div>
      </div>
    </div>
  `).join('');
}

// Cart Management
function addToCart(productId, qty = 1) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  const existingIndex = cart.findIndex(item => item.id === productId);
  if (existingIndex > -1) {
    cart[existingIndex].quantity += qty;
  } else {
    cart.push({
      id: product.id,
      title: product.title,
      price: product.price,
      image: product.image,
      quantity: qty
    });
  }

  saveCart();
  updateCartUI();
  showToast(`«${product.title}» додано до кошика!`);
}

function updateCartQuantity(productId, delta) {
  const item = cart.find(i => i.id === productId);
  if (!item) return;

  item.quantity += delta;
  if (item.quantity <= 0) {
    removeFromCart(productId);
    return;
  }

  saveCart();
  updateCartUI();
}

function removeFromCart(productId) {
  cart = cart.filter(item => item.id !== productId);
  saveCart();
  updateCartUI();
  showToast('Товар видалено з кошика');
}

function saveCart() {
  localStorage.setItem('timstore_cart', JSON.stringify(cart));
}

function updateCartUI() {
  const totalCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  if (cartCountBadge) {
    cartCountBadge.textContent = totalCount;
    cartCountBadge.classList.toggle('hidden', totalCount === 0);
  }

  if (cartSubtotalEl) {
    cartSubtotalEl.textContent = `${totalPrice.toLocaleString()} ₴`;
  }

  if (cartItemsContainer) {
    if (cart.length === 0) {
      cartItemsContainer.innerHTML = '';
      cartEmptyEl?.classList.remove('hidden');
      cartFooterEl?.classList.add('hidden');
    } else {
      cartEmptyEl?.classList.add('hidden');
      cartFooterEl?.classList.remove('hidden');

      cartItemsContainer.innerHTML = cart.map(item => `
        <div class="flex items-center gap-3 p-3 rounded-xl bg-zinc-950/60 border border-purple-900/30">
          <img src="${item.image}" alt="${item.title}" class="w-16 h-16 object-cover rounded-lg bg-zinc-900 border border-zinc-800">
          <div class="flex-1 min-w-0">
            <h4 class="text-sm font-semibold text-white truncate">${item.title}</h4>
            <p class="text-xs text-purple-400 font-bold mt-0.5">${item.price} ₴</p>
            <div class="flex items-center gap-2 mt-2">
              <button onclick="updateCartQuantity(${item.id}, -1)" class="w-6 h-6 rounded-md bg-zinc-800 hover:bg-zinc-700 text-zinc-300 flex items-center justify-center font-bold text-xs">-</button>
              <span class="text-xs font-bold text-white px-1">${item.quantity}</span>
              <button onclick="updateCartQuantity(${item.id}, 1)" class="w-6 h-6 rounded-md bg-zinc-800 hover:bg-zinc-700 text-zinc-300 flex items-center justify-center font-bold text-xs">+</button>
            </div>
          </div>
          <div class="text-right">
            <p class="text-sm font-bold text-white">${item.price * item.quantity} ₴</p>
            <button onclick="removeFromCart(${item.id})" class="text-zinc-500 hover:text-red-400 mt-3 p-1 transition-colors">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/></svg>
            </button>
          </div>
        </div>
      `).join('');
    }
  }
}

function openCart() {
  cartDrawer?.classList.remove('hidden');
  setTimeout(() => {
    cartBackdrop?.classList.add('active');
    document.getElementById('cart-panel')?.classList.add('active');
  }, 10);
  document.body.style.overflow = 'hidden';
}

function closeCart() {
  cartBackdrop?.classList.remove('active');
  document.getElementById('cart-panel')?.classList.remove('active');
  setTimeout(() => {
    cartDrawer?.classList.add('hidden');
    document.body.style.overflow = '';
  }, 300);
}

// Product Quick View Modal
function openProductModal(productId) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  const content = document.getElementById('product-modal-content');
  if (!content) return;

  content.innerHTML = `
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
      <div class="bg-zinc-950 rounded-2xl p-3 flex items-center justify-center border border-purple-900/40 relative overflow-hidden">
        <span class="absolute top-4 left-4 px-3 py-1 text-xs font-bold rounded-full bg-purple-950/80 border border-purple-500/40 text-purple-300 z-10">
          ${product.badge}
        </span>
        <img src="${product.image}" alt="${product.title}" class="w-full max-h-80 object-cover rounded-xl">
      </div>

      <div class="flex flex-col justify-between">
        <div>
          <div class="flex items-center gap-2 mb-2">
            <span class="text-xs font-bold text-purple-400 uppercase tracking-wider">${product.categoryName}</span>
            <span class="text-zinc-600">&bull;</span>
            <span class="text-xs text-emerald-400 font-semibold">В наявності</span>
          </div>

          <h2 class="text-2xl font-black text-white leading-tight mb-3">${product.title}</h2>
          <p class="text-sm text-zinc-300 mb-4">${product.shortDesc}</p>

          <div class="bg-zinc-950/80 rounded-xl p-4 border border-purple-900/20 mb-6">
            <h4 class="text-xs font-bold text-purple-300 uppercase tracking-wider mb-2.5">Переваги та особливості:</h4>
            <ul class="space-y-2">
              ${product.features.map(f => `
                <li class="text-xs text-zinc-300 flex items-start gap-2">
                  <span class="text-purple-400 font-bold">&#10003;</span>
                  <span>${f}</span>
                </li>
              `).join('')}
            </ul>
          </div>
        </div>

        <div>
          <div class="flex items-baseline gap-3 mb-4">
            <span class="text-3xl font-black text-white">${product.price} ₴</span>
            <span class="text-base text-zinc-500 line-through">${product.oldPrice} ₴</span>
            <span class="px-2 py-0.5 rounded text-xs font-bold bg-purple-500/20 text-purple-300">Економія ${product.oldPrice - product.price} ₴</span>
          </div>

          <div class="grid grid-cols-2 gap-3">
            <button onclick="closeProductModal(); quickOrder(${product.id})" class="w-full py-3 rounded-xl border border-purple-500/50 bg-purple-950/40 hover:bg-purple-900/60 text-white font-bold text-sm transition-all text-center">
              Швидке замовлення
            </button>
            <button onclick="addToCart(${product.id}); closeProductModal()" class="w-full py-3 rounded-xl neon-glow-btn text-white font-bold text-sm flex items-center justify-center gap-2">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"/></svg>
              В кошик
            </button>
          </div>
        </div>
      </div>
    </div>
  `;

  productModal?.classList.remove('hidden');
  setTimeout(() => productModal?.querySelector('.modal-container')?.classList.add('active'), 10);
  document.body.style.overflow = 'hidden';
}

function closeProductModal() {
  productModal?.querySelector('.modal-container')?.classList.remove('active');
  setTimeout(() => {
    productModal?.classList.add('hidden');
    document.body.style.overflow = '';
  }, 200);
}

// Checkout & Quick Order
function quickOrder(productId) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  currentCheckoutItems = [{
    id: product.id,
    title: product.title,
    price: product.price,
    quantity: 1,
    image: product.image
  }];

  renderCheckoutSummary(currentCheckoutItems);
  openCheckoutModal();
}

function openCartCheckout() {
  closeCart();
  if (cart.length === 0) return;
  currentCheckoutItems = [...cart];
  renderCheckoutSummary(currentCheckoutItems);
  openCheckoutModal();
}

function renderCheckoutSummary(items) {
  const container = document.getElementById('checkout-items-summary');
  const totalAmountEl = document.getElementById('checkout-total-amount');
  if (!container || !totalAmountEl) return;

  const total = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  container.innerHTML = items.map(item => `
    <div class="flex items-center justify-between text-xs py-1.5 border-b border-zinc-800">
      <span class="text-zinc-300 font-medium truncate max-w-[200px]">${item.title} <span class="text-purple-400 font-bold">&times; ${item.quantity}</span></span>
      <span class="text-white font-bold">${item.price * item.quantity} ₴</span>
    </div>
  `).join('');

  totalAmountEl.textContent = `${total.toLocaleString()} ₴`;
}

function openCheckoutModal() {
  checkoutModal?.classList.remove('hidden');
  setTimeout(() => checkoutModal?.querySelector('.modal-container')?.classList.add('active'), 10);
  document.body.style.overflow = 'hidden';
}

function closeCheckoutModal() {
  checkoutModal?.querySelector('.modal-container')?.classList.remove('active');
  setTimeout(() => {
    checkoutModal?.classList.add('hidden');
    document.body.style.overflow = '';
  }, 200);
}

function closeAllModals() {
  closeProductModal();
  closeCheckoutModal();
  closeSuccessModal();
  closeCart();
}

// Send Order to Telegram Bot
async function sendOrderToTelegram(orderData) {
  const { orderId, name, phone, city, postOffice, payment, items, total } = orderData;

  const paymentText = payment === 'cod' ? 'Накладений платіж (при отриманні)' : 'Оплата на карту / IBAN';

  const itemsList = items.map(i => `• <b>${i.title}</b> (${i.quantity} шт) — ${i.price * i.quantity} ₴`).join('\n');

  const message = 
`🔔 <b>НОВЕ ЗАМОВЛЕННЯ timstore #${orderId}</b>

👤 <b>Клієнт:</b> ${name}
📞 <b>Телефон:</b> <a href="tel:${phone}">${phone}</a>
📍 <b>Доставка:</b> м. ${city}, Нова Пошта: ${postOffice}
💳 <b>Оплата:</b> ${paymentText}

📦 <b>Товари:</b>
${itemsList}

💰 <b>РАЗОМ ДО ОПЛАТИ:</b> <b>${total} ₴</b>`;

  try {
    const url = `https://api.telegram.org/bot${TELEGRAM_CONFIG.token}/sendMessage`;
    const res = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: TELEGRAM_CONFIG.chatId,
        text: message,
        parse_mode: 'HTML'
      })
    });
    return await res.json();
  } catch (err) {
    console.error('Помилка відправки в Telegram:', err);
    return null;
  }
}

// Checkout Form Submission
async function handleCheckoutSubmit(e) {
  e.preventDefault();
  const form = e.target;
  const submitBtn = form.querySelector('button[type="submit"]');
  const originalBtnText = submitBtn.innerHTML;

  submitBtn.disabled = true;
  submitBtn.innerHTML = `
    <svg class="animate-spin -ml-1 mr-2 h-4 w-4 text-white inline-block" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
    </svg>
    Оформлення...
  `;

  const name = form.customerName.value.trim();
  const phone = form.customerPhone.value.trim();
  const city = form.customerCity.value.trim();
  const postOffice = form.customerPost.value.trim();
  const payment = form.customerPayment.value;

  const orderId = 'TIM-' + Math.floor(100000 + Math.random() * 900000);
  const items = currentCheckoutItems.length > 0 ? currentCheckoutItems : cart;
  const total = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  // Send notification to your Telegram!
  await sendOrderToTelegram({
    orderId,
    name,
    phone,
    city,
    postOffice,
    payment,
    items,
    total
  });

  submitBtn.disabled = false;
  submitBtn.innerHTML = originalBtnText;

  // Setup Success details
  const successOrderId = document.getElementById('success-order-id');
  const successOrderDetails = document.getElementById('success-order-details');
  if (successOrderId) successOrderId.textContent = `#${orderId}`;
  if (successOrderDetails) {
    successOrderDetails.innerHTML = `
      <div class="text-xs text-zinc-400 space-y-1">
        <p><strong class="text-zinc-200">Отримувач:</strong> ${name}</p>
        <p><strong class="text-zinc-200">Телефон:</strong> ${phone}</p>
        <p><strong class="text-zinc-200">Доставка:</strong> м. ${city}, ${postOffice}</p>
        <p><strong class="text-zinc-200">Сума:</strong> <span class="text-purple-300 font-bold">${total} ₴</span></p>
        <div class="pt-3 flex items-center gap-2">
          <span class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
          <span class="text-emerald-400 text-[11px] font-semibold">Сповіщення вже надіслано в Telegram менеджера!</span>
        </div>
      </div>
    `;
  }

  // Clear cart if ordered from cart
  cart = [];
  currentCheckoutItems = [];
  saveCart();
  updateCartUI();

  // Switch modals
  closeCheckoutModal();
  setTimeout(() => {
    successModal?.classList.remove('hidden');
    setTimeout(() => successModal?.querySelector('.modal-container')?.classList.add('active'), 10);
  }, 250);

  form.reset();
}

function closeSuccessModal() {
  successModal?.querySelector('.modal-container')?.classList.remove('active');
  setTimeout(() => {
    successModal?.classList.add('hidden');
    document.body.style.overflow = '';
  }, 200);
}

// Toast notification
function showToast(message) {
  if (!toastEl || !toastMessageEl) return;
  toastMessageEl.textContent = message;
  toastEl.classList.remove('opacity-0', 'translate-y-4', 'pointer-events-none');
  toastEl.classList.add('opacity-100', 'translate-y-0');

  setTimeout(() => {
    toastEl.classList.remove('opacity-100', 'translate-y-0');
    toastEl.classList.add('opacity-0', 'translate-y-4', 'pointer-events-none');
  }, 3000);
}