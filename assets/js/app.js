/**
 * ==============================================================================
 * SIMRIKA KHATRI - PORTFOLIO INTERACTIVITY & APP LOGIC
 * ==============================================================================
 */

document.addEventListener('DOMContentLoaded', () => {
  initHeader();
  initUnitToggle();
  initGalleries();
  initLightbox();
  initQRModal();
  initBookingForm();
  initMobileMenu();
});

/* ------------------------------------------------------------------------------
 * Header Scroll & Active State
 * --------------------------------------------------------------------------- */
function initHeader() {
  const header = document.getElementById('siteHeader');
  if (!header) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
}

/* ------------------------------------------------------------------------------
 * Unit Switcher (Metric vs Imperial)
 * --------------------------------------------------------------------------- */
function initUnitToggle() {
  const unitBtns = document.querySelectorAll('.unit-btn');
  const heightVal = document.getElementById('statHeightVal');
  const bustVal = document.getElementById('statBustVal');
  const waistVal = document.getElementById('statWaistVal');
  const hipsVal = document.getElementById('statHipsVal');
  const shoeVal = document.getElementById('statShoeVal');

  if (!unitBtns.length) return;

  unitBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      unitBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const unit = btn.dataset.unit; // 'imperial' or 'metric'
      const stats = PORTFOLIO_DATA.model.stats;

      if (heightVal) heightVal.textContent = stats.height[unit];
      if (bustVal) bustVal.textContent = stats.bust[unit];
      if (waistVal) waistVal.textContent = stats.waist[unit];
      if (hipsVal) hipsVal.textContent = stats.hips[unit];
      if (shoeVal) shoeVal.textContent = stats.shoe[unit];
    });
  });
}

/* ------------------------------------------------------------------------------
 * Dynamic Gallery Rendering & Tab Switching
 * --------------------------------------------------------------------------- */
let allGalleryItems = [];

function initGalleries() {
  const tabBtns = document.querySelectorAll('.gallery-tab-btn');
  const containers = {
    portraits: document.getElementById('galleryGridPortraits'),
    runway: document.getElementById('galleryGridRunway'),
    hosting: document.getElementById('galleryGridHosting')
  };

  // Render gallery cards from PORTFOLIO_DATA
  Object.keys(PORTFOLIO_DATA.galleries).forEach(categoryKey => {
    const gallery = PORTFOLIO_DATA.galleries[categoryKey];
    const container = containers[categoryKey];
    if (!container) return;

    container.innerHTML = '';
    gallery.items.forEach((item, index) => {
      // Register item in flat array for lightbox navigation
      const itemWithIndex = { ...item, categoryKey, globalIndex: allGalleryItems.length };
      allGalleryItems.push(itemWithIndex);

      const card = document.createElement('div');
      card.className = `gallery-card aspect-${item.aspect || 'portrait'}`;
      card.dataset.id = item.id;
      card.dataset.index = itemWithIndex.globalIndex;

      card.innerHTML = `
        <img src="${item.src}" alt="${item.alt}" />
        <div class="gallery-card-overlay">
          <span class="gallery-item-tag">${item.tag}</span>
          <h4 class="gallery-item-title">${item.title}</h4>
          <span class="gallery-card-view-btn">
            View Capture 
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <line x1="7" y1="17" x2="17" y2="7"></line>
              <polyline points="7 7 17 7 17 17"></polyline>
            </svg>
          </span>
        </div>
      `;

      card.addEventListener('click', () => {
        openLightbox(itemWithIndex.globalIndex);
      });

      container.appendChild(card);
    });
  });

  // Tab switching logic
  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      tabBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const targetCategory = btn.dataset.tab;
      document.querySelectorAll('.gallery-section-block').forEach(block => {
        if (targetCategory === 'all' || block.id === `section-${targetCategory}`) {
          block.classList.add('active');
        } else {
          block.classList.remove('active');
        }
      });
    });
  });
}

/* ------------------------------------------------------------------------------
 * Lightbox Modal & Zoom
 * --------------------------------------------------------------------------- */
let currentLightboxIndex = 0;

function initLightbox() {
  const lightbox = document.getElementById('lightboxModal');
  const closeBtn = document.getElementById('lightboxCloseBtn');
  const prevBtn = document.getElementById('lightboxPrevBtn');
  const nextBtn = document.getElementById('lightboxNextBtn');

  if (!lightbox) return;

  closeBtn.addEventListener('click', closeLightbox);
  prevBtn.addEventListener('click', () => navigateLightbox(-1));
  nextBtn.addEventListener('click', () => navigateLightbox(1));

  // Close when clicking backdrop
  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) closeLightbox();
  });

  // Keyboard navigation
  document.addEventListener('keydown', (e) => {
    if (!lightbox.classList.contains('active')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') navigateLightbox(-1);
    if (e.key === 'ArrowRight') navigateLightbox(1);
  });
}

function openLightbox(index) {
  const lightbox = document.getElementById('lightboxModal');
  if (!lightbox || !allGalleryItems[index]) return;

  currentLightboxIndex = index;
  updateLightboxContent();
  lightbox.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  const lightbox = document.getElementById('lightboxModal');
  if (!lightbox) return;

  lightbox.classList.remove('active');
  document.body.style.overflow = '';
}

function navigateLightbox(direction) {
  currentLightboxIndex = (currentLightboxIndex + direction + allGalleryItems.length) % allGalleryItems.length;
  updateLightboxContent();
}

function updateLightboxContent() {
  const item = allGalleryItems[currentLightboxIndex];
  if (!item) return;

  const img = document.getElementById('lightboxImage');
  const title = document.getElementById('lightboxTitle');
  const tag = document.getElementById('lightboxTag');

  if (img) {
    img.src = item.src;
    img.alt = item.alt;
  }
  if (title) title.textContent = item.title;
  if (tag) tag.textContent = `${item.tag} • (${currentLightboxIndex + 1} of ${allGalleryItems.length})`;
}

/* ------------------------------------------------------------------------------
 * QR Code Modal & Live Link Sharing
 * --------------------------------------------------------------------------- */
let qrCodeInstance = null;

function initQRModal() {
  const qrModal = document.getElementById('qrModal');
  const openBtns = document.querySelectorAll('.btn-open-qr');
  const closeBtn = document.getElementById('qrModalCloseBtn');
  const qrTarget = document.getElementById('qrcodeContainer');
  const qrUrlInput = document.getElementById('qrCustomUrlInput');
  const copyBtn = document.getElementById('copyQrUrlBtn');

  if (!qrModal || !qrTarget) return;

  // Determine URL to encode (fallback to clean live URL if local or preview)
  const LIVE_PORTFOLIO_URL = "https://simrika-portfolio.netlify.app";
  let currentShareUrl = LIVE_PORTFOLIO_URL;
  if (window.location.hostname && 
      !window.location.hostname.includes('localhost') && 
      !window.location.hostname.includes('127.0.0.1') && 
      window.location.protocol !== 'file:') {
    currentShareUrl = window.location.origin + window.location.pathname;
  }

  if (qrUrlInput) {
    qrUrlInput.value = currentShareUrl;
    qrUrlInput.addEventListener('input', (e) => {
      updateQRCode(e.target.value.trim() || LIVE_PORTFOLIO_URL);
    });
  }

  function renderQR(url) {
    qrTarget.innerHTML = '';
    if (window.QRCode) {
      try {
        qrCodeInstance = new QRCode(qrTarget, {
          text: url || currentShareUrl,
          width: 220,
          height: 220,
          colorDark: "#0b0b0d",
          colorLight: "#ffffff",
          correctLevel: QRCode.CorrectLevel.M
        });
      } catch (err) {
        console.warn('QR generation fallback:', err);
        // Fallback: render the pre-rendered high-res QR image
        qrTarget.innerHTML = `<img src="assets/images/qr_simrika_portfolio.png" alt="Simrika Khatri QR Code" style="width:220px;height:220px;object-fit:contain;" />`;
      }
    }
  }

  function updateQRCode(url) {
    if (qrCodeInstance) {
      try {
        qrCodeInstance.makeCode(url);
      } catch (e) {
        renderQR(url);
      }
    } else {
      renderQR(url);
    }
  }

  // Pre-render QR so it is immediately visible upon open
  renderQR(currentShareUrl);

  openBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      qrModal.classList.add('active');
      const targetUrl = qrUrlInput ? qrUrlInput.value.trim() : currentShareUrl;
      updateQRCode(targetUrl || currentShareUrl);
    });
  });

  if (closeBtn) {
    closeBtn.addEventListener('click', () => qrModal.classList.remove('active'));
  }

  qrModal.addEventListener('click', (e) => {
    if (e.target === qrModal) qrModal.classList.remove('active');
  });

  if (copyBtn) {
    copyBtn.addEventListener('click', () => {
      const urlToCopy = qrUrlInput ? qrUrlInput.value : currentShareUrl;
      navigator.clipboard.writeText(urlToCopy).then(() => {
        const originalText = copyBtn.innerHTML;
        copyBtn.innerHTML = `✓ Link Copied!`;
        setTimeout(() => {
          copyBtn.innerHTML = originalText;
        }, 2000);
      });
    });
  }
}

/* ------------------------------------------------------------------------------
 * Booking & Contact Form (Direct Mailto with formatted template)
 * --------------------------------------------------------------------------- */
function initBookingForm() {
  const form = document.getElementById('bookingForm');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('bookName').value;
    const organization = document.getElementById('bookOrg').value;
    const projectType = document.getElementById('bookType').value;
    const dates = document.getElementById('bookDates').value;
    const message = document.getElementById('bookMessage').value;

    const emailSubject = encodeURIComponent(`Booking Inquiry for Simrika Khatri: ${projectType} (${organization || name})`);
    const emailBody = encodeURIComponent(
      `Hello Simrika,\n\n` +
      `I would like to discuss a booking opportunity for you.\n\n` +
      `• Client / Organization: ${organization || 'N/A'}\n` +
      `• Contact Person: ${name}\n` +
      `• Project Type: ${projectType}\n` +
      `• Dates / Location: ${dates || 'To be discussed'}\n\n` +
      `Project Details:\n${message}\n\n` +
      `Best regards,\n${name}`
    );

    window.location.href = `mailto:simrikakhatri29@gmail.com?subject=${emailSubject}&body=${emailBody}`;
  });
}

/* ------------------------------------------------------------------------------
 * Mobile Menu Toggle
 * --------------------------------------------------------------------------- */
function initMobileMenu() {
  const toggleBtn = document.getElementById('mobileMenuToggle');
  const mobileNav = document.getElementById('mobileNavDrawer');
  const navLinks = document.querySelectorAll('.mobile-nav-link');

  if (!toggleBtn || !mobileNav) return;

  toggleBtn.addEventListener('click', () => {
    mobileNav.classList.toggle('active');
  });

  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      mobileNav.classList.remove('active');
    });
  });
}
