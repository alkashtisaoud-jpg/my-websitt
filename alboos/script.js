// ===== بيانات خدمات التطوير =====
const products = [
    { 
        id: 1, 
        name: "تطوير لفل - يوم", 
        priceKWD: 2,
        icon: "⚡",
        image: "lvl.jpg",
        category: "تطوير"
    },
    { 
        id: 2, 
        name: "تطوير لفل - أسبوع", 
        priceKWD: 5,
        icon: "🔥",
        image: "lvl.jpg",
        category: "تطوير"
    },
    { 
        id: 3, 
        name: "تطوير لفل - شهر", 
        priceKWD: 15,
        icon: "👑",
        image: "lvl.jpg",
        category: "تطوير"
    }
];

// ===== بيانات السيارات =====
const cars = [
    {
        id: 101,
        name: "Diamond Treadmill",
        priceKWD: 2.41,
        icon: "💎",
        image: "diamond.png",
        category: "سيارات",
        map: "ماب الكيودر"
    },
    {
        id: 102,
        name: "Candy Treadmill",
        priceKWD: 6.96,
        icon: "🍬",
        image: "candy.png",
        category: "سيارات",
        map: "ماب الكيودر"
    },
    {
        id: 103,
        name: "Admin Treadmill",
        priceKWD: 14.86,
        icon: "👑",
        image: "admin.png",
        category: "سيارات",
        map: "ماب الكيودر"
    }
];

// ===== بيانات الأورا =====
const auras = [
    {
        id: 201,
        name: "Candy Aura",
        priceKWD: 4.846,
        icon: "🍭",
        image: "candy2.png",
        category: "أورا",
        speed: "x5 Speed Boost",
        level: "342",
        map: "ماب الكيبورد"
    },
    {
        id: 202,
        name: "Chocolate Aura",
        priceKWD: 5.612,
        icon: "🍫",
        image: "choclate.png",
        category: "أورا",
        speed: "x6 Speed Boost",
        level: "1099",
        map: "ماب الكيبورد"
    },
    {
        id: 203,
        name: "Storm Aura",
        priceKWD: 6.378,
        icon: "🌩️",
        image: "storm.png",
        category: "أورا",
        speed: "x7 Speed Boost",
        level: "1249",
        map: "ماب الكيبورد"
    },
    {
        id: 204,
        name: "Water Aura",
        priceKWD: 1.397,
        icon: "💧",
        image: "water.png",
        category: "أورا",
        speed: "x2 Speed Boost",
        level: "489",
        map: "ماب الكيبورد"
    },
    {
        id: 205,
        name: "Wind Aura",
        priceKWD: 1.271,
        icon: "🌬️",
        image: "wind.png",
        category: "أورا",
        speed: "x1.5 Speed Boost",
        level: "249",
        map: "ماب الكيبورد"
    },
    {
        id: 206,
        name: "Electric Aura",
        priceKWD: 4.080,
        icon: "⚡",
        image: "electric.png",
        category: "أورا",
        speed: "x2 Speed Boost",
        level: "799",
        map: "ماب الكيبورد"
    }
];

// ===== بيانات الترايل =====
const trails = [
    {
        id: 301,
        name: "Supernova Trail",
        priceKWD: (21.27 / 3.25),
        icon: "💫",
        image: "supernova.png",
        category: "ترايل",
        map: "ماب الكيبورد",
        speed: "5% Speed"
    },
    {
        id: 302,
        name: "Godlike Trail",
        priceKWD: (24.16 / 3.25),
        icon: "👑",
        image: "godlike.png",
        category: "ترايل",
        map: "ماب الكيبورد",
        speed: "5% Speed"
    },
    {
        id: 303,
        name: "Infinity Trail",
        priceKWD: (27.87 / 3.25),
        icon: "♾️",
        image: "infinty.png",
        category: "ترايل",
        map: "ماب الكيبورد",
        speed: "5% Speed"
    },
    {
        id: 304,
        name: "Ascendant Trail",
        priceKWD: (21.38 / 3.25),
        icon: "⬆️",
        image: "ascendant.png",
        category: "ترايل",
        map: "ماب الكيبورد",
        speed: "5% Speed"
    },
    {
        id: 305,
        name: "Transcendent Trail",
        priceKWD: (21.84 / 3.25),
        icon: "✨",
        image: "transcendent.png",
        category: "ترايل",
        map: "ماب الكيبورد",
        speed: "5% Speed"
    },
    {
        id: 306,
        name: "Cosmic Trail",
        priceKWD: (14.86 / 3.25),
        icon: "🌌",
        image: "cosmic.png",
        category: "ترايل",
        map: "ماب الكيبورد",
        speed: "5% Speed"
    },
    {
        id: 307,
        name: "Void Trail",
        priceKWD: (18.49 / 3.25),
        icon: "🕳️",
        image: "void.png",
        category: "ترايل",
        map: "ماب الكيبورد",
        speed: "5% Speed"
    },
    {
        id: 308,
        name: "Galaxy Trail",
        priceKWD: (3.62 / 3.25),
        icon: "🌠",
        image: "galaxy.png",
        category: "ترايل",
        map: "ماب الكيبورد",
        speed: "5% Speed"
    },
    {
        id: 309,
        name: "Divine Trail",
        priceKWD: (19.52 / 3.25),
        icon: "😇",
        image: "divine.png",
        category: "ترايل",
        map: "ماب الكيبورد",
        speed: "5% Speed"
    },
    {
        id: 310,
        name: "Celestial Trail",
        priceKWD: (20.45 / 3.25),
        icon: "🌟",
        image: "celestial.png",
        category: "ترايل",
        map: "ماب الكيبورد",
        speed: "5% Speed"
    },
    {
        id: 311,
        name: "Eternal Trail",
        priceKWD: (20.91 / 3.25),
        icon: "⏳",
        image: "eternal.png",
        category: "ترايل",
        map: "ماب الكيبورد",
        speed: "5% Speed"
    },
    {
        id: 312,
        name: "Rainbow Trail",
        priceKWD: (2.38 / 3.25),
        icon: "🌈",
        image: "rainbow.png",
        category: "ترايل",
        map: "ماب الكيبورد",
        speed: "5% Speed"
    }
];

// ===== دمج كل المنتجات =====
const allProducts = [...products, ...cars, ...auras, ...trails];

// ===== بيانات التقييمات =====
let reviews = [
    {
        name: "LegendKing",
        stars: 5,
        text: "رفع مستوائي بسرعه الله يوفقهم نصيحة اشتروا منه",
        date: "منذ 5 أيام"
    },
    {
        name: "NoobSl6ayer",
        stars: 4,
        text: "جامد والله اخذت سيرفر الادمن و الاورا و وصلتني خلال 5 ساعات",
        date: "منذ يومين"
    },
    {
        name: "SpeedMaster5",
        stars: 5,
        text: "موثوق و مضمون سويته و ظبط",
        date: "منذ أسبوع"
    },
    {
        name: "Ahmed342",
        stars: 5,
        text: "وربي جامد سويت و خلال يوم واحد رحت العالم الثالث",
        date: "منذ 3 أيام"
    }
];

let cart = [];
let currentCurrency = 'kw';
let selectedRating = 0;
let hasPurchased = false;

// ===== إعدادات العملات =====
const currencies = {
    kw: { symbol: 'د.ك', rate: 1, label: 'كويتي' },
    sa: { symbol: 'ر.س', rate: 12.2, label: 'سعودي' },
    us: { symbol: '$', rate: 3.25, label: 'دولار' }
};

// ===== عرض المنتجات (خدمات التطوير) =====
function renderProducts() {
    const container = document.getElementById('products-container');
    if (!container) {
        console.log('⚠️ products-container غير موجود');
        return;
    }
    
    container.innerHTML = '';
    console.log('✅ جاري عرض المنتجات...');
    
    products.forEach(p => {
        const convertedPrice = (p.priceKWD * currencies[currentCurrency].rate).toFixed(2);
        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `
            <div class="product-image">
                <img src="${p.image}" alt="${p.name}" onerror="this.style.display='none'" />
            </div>
            <span class="product-icon" style="font-size:30px;">${p.icon}</span>
            <h3 class="product-name">${p.name}</h3>
            <div class="price">
                <span class="price-amount" data-id="${p.id}">${convertedPrice}</span> 
                <span class="currency-symbol" data-id="${p.id}">${currencies[currentCurrency].symbol}</span>
            </div>
            <button onclick="addToCart(${p.id})">➕ أضف للسلة</button>
        `;
        container.appendChild(card);
    });
}

// ===== عرض السيارات =====
function renderCars() {
    const container = document.getElementById('cars-container');
    if (!container) {
        console.log('⚠️ cars-container غير موجود');
        return;
    }
    
    container.innerHTML = '';
    console.log('✅ جاري عرض السيارات...');
    
    cars.forEach(c => {
        const convertedPrice = (c.priceKWD * currencies[currentCurrency].rate).toFixed(2);
        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `
            <div class="product-image">
                <img src="${c.image}" alt="${c.name}" onerror="this.style.display='none'" />
            </div>
            <span class="product-icon" style="font-size:30px;">${c.icon}</span>
            <h3 class="product-name">${c.name}</h3>
            <div style="color: #ffaa00; font-size: 14px; margin-bottom: 5px;">🗺️ ${c.map}</div>
            <div class="price">
                <span class="price-amount" data-id="${c.id}">${convertedPrice}</span> 
                <span class="currency-symbol" data-id="${c.id}">${currencies[currentCurrency].symbol}</span>
            </div>
            <button onclick="addToCart(${c.id})">➕ أضف للسلة</button>
        `;
        container.appendChild(card);
    });
}

// ===== عرض الأورا =====
function renderAuras() {
    const container = document.getElementById('auras-container');
    if (!container) {
        console.log('⚠️ auras-container غير موجود');
        return;
    }
    
    container.innerHTML = '';
    console.log('✅ جاري عرض الأورا...');
    
    auras.forEach(a => {
        const convertedPrice = (a.priceKWD * currencies[currentCurrency].rate).toFixed(2);
        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `
            <div class="product-image">
                <img src="${a.image}" alt="${a.name}" onerror="this.style.display='none'" />
            </div>
            <span class="product-icon" style="font-size:30px;">${a.icon}</span>
            <h3 class="product-name">${a.name}</h3>
            <div style="color: #ffaa00; font-size: 14px; margin-bottom: 5px;">🗺️ ${a.map}</div>
            <div style="color: #00ff88; font-size: 14px; margin-bottom: 5px;">⚡ ${a.speed}</div>
            <div style="color: #ffaa00; font-size: 13px; margin-bottom: 5px;">🎯 Level: ${a.level}</div>
            <div class="price">
                <span class="price-amount" data-id="${a.id}">${convertedPrice}</span> 
                <span class="currency-symbol" data-id="${a.id}">${currencies[currentCurrency].symbol}</span>
            </div>
            <button onclick="addToCart(${a.id})">➕ أضف للسلة</button>
        `;
        container.appendChild(card);
    });
}

// ===== عرض الترايل =====
function renderTrails() {
    const container = document.getElementById('trails-container');
    if (!container) {
        console.log('⚠️ trails-container غير موجود');
        return;
    }
    
    container.innerHTML = '';
    console.log('✅ جاري عرض الترايل...');
    
    trails.forEach(t => {
        const convertedPrice = (t.priceKWD * currencies[currentCurrency].rate).toFixed(2);
        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `
            <div class="product-image">
                <img src="${t.image}" alt="${t.name}" onerror="this.style.display='none'" />
            </div>
            <span class="product-icon" style="font-size:30px;">${t.icon}</span>
            <h3 class="product-name">${t.name}</h3>
            <div style="color: #ffaa00; font-size: 14px; margin-bottom: 5px;">🗺️ ${t.map}</div>
            <div style="color: #00ff88; font-size: 14px; margin-bottom: 5px;">⚡ ${t.speed}</div>
            <div class="price">
                <span class="price-amount" data-id="${t.id}">${convertedPrice}</span> 
                <span class="currency-symbol" data-id="${t.id}">${currencies[currentCurrency].symbol}</span>
            </div>
            <button onclick="addToCart(${t.id})">➕ أضف للسلة</button>
        `;
        container.appendChild(card);
    });
}

// ===== تحديث الأسعار =====
function updatePrices() {
    products.forEach(p => {
        const convertedPrice = (p.priceKWD * currencies[currentCurrency].rate).toFixed(2);
        const priceEl = document.querySelector(`.price-amount[data-id="${p.id}"]`);
        const symbolEl = document.querySelector(`.currency-symbol[data-id="${p.id}"]`);
        if (priceEl) priceEl.textContent = convertedPrice;
        if (symbolEl) symbolEl.textContent = currencies[currentCurrency].symbol;
    });
    
    cars.forEach(c => {
        const convertedPrice = (c.priceKWD * currencies[currentCurrency].rate).toFixed(2);
        const priceEl = document.querySelector(`.price-amount[data-id="${c.id}"]`);
        const symbolEl = document.querySelector(`.currency-symbol[data-id="${c.id}"]`);
        if (priceEl) priceEl.textContent = convertedPrice;
        if (symbolEl) symbolEl.textContent = currencies[currentCurrency].symbol;
    });
    
    auras.forEach(a => {
        const convertedPrice = (a.priceKWD * currencies[currentCurrency].rate).toFixed(2);
        const priceEl = document.querySelector(`.price-amount[data-id="${a.id}"]`);
        const symbolEl = document.querySelector(`.currency-symbol[data-id="${a.id}"]`);
        if (priceEl) priceEl.textContent = convertedPrice;
        if (symbolEl) symbolEl.textContent = currencies[currentCurrency].symbol;
    });

    trails.forEach(t => {
        const convertedPrice = (t.priceKWD * currencies[currentCurrency].rate).toFixed(2);
        const priceEl = document.querySelector(`.price-amount[data-id="${t.id}"]`);
        const symbolEl = document.querySelector(`.currency-symbol[data-id="${t.id}"]`);
        if (priceEl) priceEl.textContent = convertedPrice;
        if (symbolEl) symbolEl.textContent = currencies[currentCurrency].symbol;
    });
    
    updateCartUI();
}

// ===== عرض التقييمات =====
function renderReviews() {
    const container = document.getElementById('reviews-container');
    if (!container) {
        console.log('⚠️ reviews-container غير موجود');
        return;
    }
    
    container.innerHTML = '';
    console.log('✅ جاري عرض التقييمات...');
    
    reviews.forEach(r => {
        const card = document.createElement('div');
        card.className = 'review-card';
        card.innerHTML = `
            <div class="review-header">
                <span class="reviewer-name">🎮 ${r.name}</span>
                <span class="review-stars">${'⭐'.repeat(r.stars)}</span>
            </div>
            <p class="review-text">"${r.text}"</p>
            <span class="review-date">${r.date}</span>
        `;
        container.appendChild(card);
    });
}

// ===== إضافة للسلة =====
function addToCart(id) {
    const product = allProducts.find(p => p.id === id);
    if (!product) return;

    const existing = cart.find(item => item.id === id);
    if (existing) {
        existing.quantity += 1;
    } else {
        cart.push({ 
            ...product, 
            quantity: 1
        });
    }

    updateCartUI();
    showNotification(`✅ تم إضافة "${product.name}"`);
}

// ===== تحديث السلة =====
function updateCartUI() {
    const cartList = document.getElementById('cart-items');
    const totalSpan = document.getElementById('total-price');
    const totalCurrency = document.getElementById('total-currency');
    const countSpan = document.getElementById('cart-count');

    if (!cartList) return;
    
    cartList.innerHTML = '';
    let total = 0;
    let itemCount = 0;

    cart.forEach(item => {
        const priceInCurrency = item.priceKWD * currencies[currentCurrency].rate;
        const li = document.createElement('li');
        li.innerHTML = `
            <span>${item.icon} ${item.name} × ${item.quantity}</span>
            <span>${(priceInCurrency * item.quantity).toFixed(2)} ${currencies[currentCurrency].symbol}</span>
        `;
        cartList.appendChild(li);

        total += priceInCurrency * item.quantity;
        itemCount += item.quantity;
    });

    if (totalSpan) totalSpan.textContent = total.toFixed(2);
    if (totalCurrency) totalCurrency.textContent = currencies[currentCurrency].symbol;
    if (countSpan) countSpan.textContent = itemCount;
}

// ===== تغيير العملة =====
document.addEventListener('DOMContentLoaded', function() {
    console.log('🚀 الموقع جاهز!');
    
    const currencySelect = document.getElementById('currencySelect');
    if (currencySelect) {
        currencySelect.addEventListener('change', function() {
            currentCurrency = this.value;
            updatePrices();
            updateCartUI();
            showNotification(`💰 تم التغيير إلى ${currencies[currentCurrency].label}`);
        });
    }
    
    // ===== نظام التقييم بالنجوم =====
    const starsEl = document.querySelectorAll('#starRating span');
    starsEl.forEach(star => {
        star.addEventListener('click', function() {
            selectedRating = parseInt(this.dataset.value);
            starsEl.forEach(s => {
                s.classList.toggle('active', parseInt(s.dataset.value) <= selectedRating);
            });
        });
        
        star.addEventListener('mouseenter', function() {
            const val = parseInt(this.dataset.value);
            starsEl.forEach(s => {
                s.style.opacity = parseInt(s.dataset.value) <= val ? '1' : '0.3';
            });
        });
        
        star.addEventListener('mouseleave', function() {
            starsEl.forEach(s => {
                s.style.opacity = parseInt(s.dataset.value) <= selectedRating ? '1' : '0.3';
            });
        });
    });
    
    // ===== إضافة تقييم جديد =====
    const submitBtn = document.getElementById('submitReview');
    if (submitBtn) {
        submitBtn.addEventListener('click', function() {
            if (!hasPurchased) {
                alert('⚠️ لا يمكنك التقييم إلا بعد إتمام عملية شراء!');
                return;
            }
            
            const name = document.getElementById('reviewName').value.trim();
            const text = document.getElementById('reviewText').value.trim();
            
            if (!name) {
                alert('⚠️ الرجاء إدخال اسمك!');
                return;
            }
            if (!text) {
                alert('⚠️ الرجاء كتابة التقييم!');
                return;
            }
            if (selectedRating === 0) {
                alert('⚠️ الرجاء اختيار عدد النجوم!');
                return;
            }
            
            const newReview = {
                name: name,
                stars: selectedRating,
                text: text,
                date: 'الآن'
            };
            
            reviews.unshift(newReview);
            renderReviews();
            
            document.getElementById('reviewName').value = '';
            document.getElementById('reviewText').value = '';
            selectedRating = 0;
            starsEl.forEach(s => {
                s.classList.remove('active');
                s.style.opacity = '0.3';
            });
            
            showNotification('✅ تم إضافة تقييمك بنجاح!');
        });
    }
    
    // ===== زر الشراء =====
    const checkoutBtn = document.getElementById('checkout-btn');
    if (checkoutBtn) {
        checkoutBtn.addEventListener('click', function() {
            if (cart.length === 0) {
                alert('⚠️ السلة فارغة! أضف خدمات أو سيارات أو أورا أو ترايل أولاً.');
                return;
            }
            showPaymentOptions();
        });
    }
    
    // ===== زر إلغاء الدفع =====
    document.getElementById('cancelPaymentBtn').addEventListener('click', function() {
        document.getElementById('paymentSection').style.display = 'none';
        document.querySelector('.cart-section').style.display = 'block';
        showNotification('❌ تم إلغاء عملية الدفع');
    });
    
    // ===== تحميل كل شيء =====
    renderProducts();
    renderCars();
    renderAuras();
    renderTrails();
    renderReviews();
    updateCartUI();
    
    // ===== قائمة الادمن =====
    loadOrders();
    
    // زر فتح لوحة الادمن
    const adminBtn = document.createElement('button');
    adminBtn.textContent = '🔐 لوحة الادمن';
    adminBtn.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        background: #00ff88;
        border: none;
        color: #0a0a1a;
        padding: 12px 20px;
        font-weight: bold;
        cursor: pointer;
        z-index: 999;
        font-size: 14px;
    `;
    adminBtn.onclick = openAdminPanel;
    document.body.appendChild(adminBtn);
});

// ===== دوال طرق الدفع =====

// إظهار قائمة الدفع
function showPaymentOptions() {
    document.querySelector('.cart-section').style.display = 'none';
    document.getElementById('paymentSection').style.display = 'block';
    
    const total = document.getElementById('total-price').textContent;
    const symbol = currencies[currentCurrency].symbol;
    
    document.getElementById('bank-transfer-amount').textContent = `${total} ${symbol}`;
    document.getElementById('robux-transfer-amount').textContent = `${total} ${symbol}`;
}

// ===== 1. باي بال =====
function payWithPayPal() {
    const username = document.getElementById('robloxUsername').value.trim() || 'مستخدم';
    const total = document.getElementById('total-price').textContent;
    const symbol = currencies[currentCurrency].symbol;
    
    const paypalUrl = `https://www.paypal.com/paypalme/yourusername/${total}`;
    window.open(paypalUrl, '_blank');
    
    // إضافة الطلب
    addOrder(username, cart.map(item => `${item.name} × ${item.quantity}`).join(', '), total);
    
    showNotification(`💳 تم توجيهك لصفحة PayPal\nالمبلغ: ${total} ${symbol}`);
    
    // إظهار صفحة التأكيد
    showConfirmation(username, total, symbol);
    
    document.getElementById('paymentSection').style.display = 'none';
    document.querySelector('.cart-section').style.display = 'block';
    
    cart = [];
    updateCartUI();
}

// ===== 2. تحويل بنكي (وث) =====
function payWithBank() {
    const username = document.getElementById('robloxUsername').value.trim() || 'مستخدم';
    const total = document.getElementById('total-price').textContent;
    const symbol = currencies[currentCurrency].symbol;
    
    document.getElementById('bank-username').textContent = username;
    document.getElementById('bank-transfer-amount').textContent = `${total} ${symbol}`;
    document.getElementById('bankTransferPage').style.display = 'flex';
}

function confirmBankTransfer() {
    const username = document.getElementById('robloxUsername').value.trim() || 'مستخدم';
    const total = document.getElementById('total-price').textContent;
    const symbol = currencies[currentCurrency].symbol;
    
    // إضافة الطلب
    addOrder(username, cart.map(item => `${item.name} × ${item.quantity}`).join(', '), total);
    
    closeBankTransfer();
    showConfirmation(username, total, symbol);
    
    document.getElementById('paymentSection').style.display = 'none';
    document.querySelector('.cart-section').style.display = 'block';
    
    cart = [];
    updateCartUI();
}

function closeBankTransfer() {
    document.getElementById('bankTransferPage').style.display = 'none';
}

// ===== 3. روبوكس =====
function payWithRobux() {
    const username = document.getElementById('robloxUsername').value.trim() || 'مستخدم';
    const total = document.getElementById('total-price').textContent;
    const symbol = currencies[currentCurrency].symbol;
    
    document.getElementById('robux-username').textContent = username;
    document.getElementById('robux-transfer-amount').textContent = `${total} ${symbol}`;
    document.getElementById('robuxTransferPage').style.display = 'flex';
}

function confirmRobuxTransfer() {
    const username = document.getElementById('robloxUsername').value.trim() || 'مستخدم';
    const total = document.getElementById('total-price').textContent;
    const symbol = currencies[currentCurrency].symbol;
    
    // إضافة الطلب
    addOrder(username, cart.map(item => `${item.name} × ${item.quantity}`).join(', '), total);
    
    closeRobuxTransfer();
    showConfirmation(username, total, symbol);
    
    document.getElementById('paymentSection').style.display = 'none';
    document.querySelector('.cart-section').style.display = 'block';
    
    cart = [];
    updateCartUI();
}

function closeRobuxTransfer() {
    document.getElementById('robuxTransferPage').style.display = 'none';
}

// ===== صفحة تأكيد الطلب =====
function showConfirmation(username, total, symbol) {
    document.getElementById('confirm-username').textContent = username;
    document.getElementById('confirm-amount').textContent = total;
    document.getElementById('confirm-currency').textContent = symbol;
    document.getElementById('orderConfirmationPage').style.display = 'flex';
}

function closeConfirmation() {
    document.getElementById('orderConfirmationPage').style.display = 'none';
}

// ===== قائمة الادمن =====
const ADMIN_IP = '37.39.121.2';
let adminVerified = false;
let orders = [];

function loadOrders() {
    const saved = localStorage.getItem('adminOrders');
    if (saved) {
        orders = JSON.parse(saved);
    } else {
        orders = [];
    }
    renderOrders();
}

function saveOrders() {
    localStorage.setItem('adminOrders', JSON.stringify(orders));
}

function renderOrders() {
    const container = document.getElementById('orders-list');
    if (!container) return;
    
    container.innerHTML = '';
    
    if (orders.length === 0) {
        container.innerHTML = '<p style="color: #8899aa; text-align: center; padding: 20px;">📭 لا توجد طلبات حالياً</p>';
        return;
    }
    
    orders.forEach((order, index) => {
        const div = document.createElement('div');
        div.className = 'admin-order-item';
        div.innerHTML = `
            <div class="order-info">
                <span class="username">👤 ${order.username}</span>
                <span class="details">📦 ${order.items} | 💰 ${order.total} د.ك | 📅 ${order.date}</span>
            </div>
            <div class="order-status">
                <span class="status-badge ${order.status === 'delivered' ? 'status-delivered' : 'status-pending'}">
                    ${order.status === 'delivered' ? '✅ تم الاستلام' : '⏳ قيد الانتظار'}
                </span>
                ${order.status === 'pending' ? `<button class="btn-deliver" onclick="deliverOrder(${index})">✅ تم الاستلام</button>` : ''}
            </div>
        `;
        container.appendChild(div);
    });
}

function deliverOrder(index) {
    if (!adminVerified) {
        alert('⚠️ يرجى التحقق من الـ IP أولاً!');
        return;
    }
    
    orders[index].status = 'delivered';
    saveOrders();
    renderOrders();
    showNotification(`✅ تم تسليم الطلب إلى ${orders[index].username}`);
}

function verifyAdmin() {
    const inputIp = document.getElementById('adminIpInput').value.trim();
    
    if (inputIp === ADMIN_IP) {
        adminVerified = true;
        document.getElementById('adminOrders').style.display = 'block';
        document.getElementById('adminIpInput').style.borderColor = '#00ff88';
        showNotification('✅ تم التحقق بنجاح! مرحباً أيها الادمن');
        renderOrders();
    } else {
        adminVerified = false;
        document.getElementById('adminOrders').style.display = 'none';
        document.getElementById('adminIpInput').style.borderColor = '#ff4444';
        alert('❌ IP غير صحيح! يرجى المحاولة مرة أخرى');
    }
}

function addOrder(username, items, total) {
    const newOrder = {
        id: orders.length + 1,
        username: username,
        items: items,
        total: total,
        status: 'pending',
        date: new Date().toLocaleDateString('ar-EG')
    };
    
    orders.unshift(newOrder);
    saveOrders();
    renderOrders();
    console.log('✅ تم إضافة طلب جديد:', newOrder);
}

function openAdminPanel() {
    document.getElementById('adminPanel').style.display = 'block';
    document.getElementById('adminPanel').scrollIntoView({ behavior: 'smooth' });
}

// ===== إشعارات =====
function showNotification(message) {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: rgba(0, 212, 255, 0.9);
        color: #0a0a1a;
        padding: 15px 25px;
        font-weight: bold;
        z-index: 9999;
        border: 2px solid #ff00ff;
        animation: slideIn 0.5s ease;
        max-width: 350px;
    `;
    notification.textContent = message;
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.opacity = '0';
        notification.style.transition = 'opacity 0.5s';
        setTimeout(() => notification.remove(), 500);
    }, 3000);
}

// ===== إضافة ستايل للإشعار =====
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from { transform: translateX(100%); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
    }
`;
document.head.appendChild(style);

console.log('🎮 متجر تطوير الكيبورد جاهز!');
console.log('📦 عدد المنتجات: ' + allProducts.length);
console.log('⭐ عدد التقييمات: ' + reviews.length);
console.log('💳 قائمة طرق الدفع جاهزة!');
console.log('🔐 لوحة الادمن جاهزة!');