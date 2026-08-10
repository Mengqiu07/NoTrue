(() => {
  const announce = (message) => {
    const target = document.querySelector('[data-local-notice]');
    if (target) {
      target.textContent = message;
      target.hidden = false;
    } else {
      window.alert(message);
    }
  };

  const initialize = () => {
    const menuToggle = document.querySelector('[data-menu-toggle]');
    const siteNav = document.querySelector('.site-nav');
    if (menuToggle && siteNav) {
      menuToggle.addEventListener('click', () => {
        const isOpen = siteNav.classList.toggle('is-open');
        menuToggle.setAttribute('aria-expanded', String(isOpen));
      });
    }

    const searchToggle = document.querySelector('[data-search-toggle]');
    const searchPanel = document.querySelector('.search-panel');
    if (searchToggle && searchPanel) {
      searchToggle.addEventListener('click', () => {
        const isOpen = searchPanel.classList.toggle('is-open');
        searchToggle.setAttribute('aria-expanded', String(isOpen));
        if (isOpen) searchPanel.querySelector('input, [type="search"]')?.focus();
      });
      searchPanel.querySelector('form')?.addEventListener('submit', (event) => {
        event.preventDefault();
        announce('站内检索功能将在内容上线后启用。');
      });
      searchPanel.querySelector('input[type="search"]')?.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
          event.preventDefault();
          event.currentTarget.form?.requestSubmit();
        }
      });
    }

    document.querySelectorAll('[data-archive-filter]').forEach((filter) => {
      filter.addEventListener('click', () => {
        document.querySelectorAll('[data-archive-filter]').forEach((item) => item.classList.remove('is-active'));
        filter.classList.add('is-active');
        filter.setAttribute('aria-pressed', 'true');
        document.querySelectorAll('[data-archive-filter]').forEach((item) => {
          if (item !== filter) item.setAttribute('aria-pressed', 'false');
        });
        announce(`已切换至${filter.textContent.trim()}归档视图。`);
      });
    });

    const backToTop = document.querySelector('[data-back-to-top]');
    if (backToTop) {
      const updateVisibility = () => backToTop.classList.toggle('is-visible', window.scrollY > 360);
      window.addEventListener('scroll', updateVisibility, { passive: true });
      updateVisibility();
      backToTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
    }
  };

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', initialize, { once: true });
  else initialize();
})();
