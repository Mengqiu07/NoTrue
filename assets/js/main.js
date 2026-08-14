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
      const searchIndex = [
        {
          type: 'notice',
          label: '公告',
          title: 'Notrue正式建立，并接受文章投稿',
          summary: 'Notrue原创作品展示计划正式建立，并面向公众接受符合规范的原创投稿。',
          href: 'news-notrue-launch.html'
        }
      ];
      const form = searchPanel.querySelector('form');
      const searchInput = searchPanel.querySelector('input[type="search"]');
      if (form && searchInput) {
        searchInput.placeholder = '输入关键词，或直接按分类浏览';
        const category = document.createElement('select');
        category.className = 'search-category';
        category.setAttribute('aria-label', '选择搜索分类');
        category.innerHTML = '<option value="all">不限分类</option><option value="notice">公告</option><option value="article">文章</option>';
        searchInput.insertAdjacentElement('beforebegin', category);
        const results = document.createElement('div');
        results.className = 'search-results';
        results.hidden = true;
        results.setAttribute('aria-live', 'polite');
        form.insertAdjacentElement('afterend', results);

        const renderResults = () => {
          const keyword = searchInput.value.trim().toLowerCase();
          const selectedType = category.value;
          const matched = searchIndex.filter((item) => {
            const categoryMatches = selectedType === 'all' || item.type === selectedType;
            const text = `${item.title} ${item.summary}`.toLowerCase();
            return categoryMatches && (!keyword || text.includes(keyword));
          });
          results.hidden = false;
          if (!matched.length) {
            results.innerHTML = '<p class="search-empty">未找到匹配内容。</p>';
            return;
          }
          results.innerHTML = matched.map((item) => `
            <a class="search-result" href="${item.href}">
              <span class="search-result__type">${item.label}</span>
              <span><strong>${item.title}</strong><small>${item.summary}</small></span>
            </a>
          `).join('');
        };

        form.addEventListener('submit', (event) => {
          event.preventDefault();
          event.stopImmediatePropagation();
          renderResults();
        });
        category.addEventListener('change', () => {
          if (!results.hidden || searchInput.value.trim()) renderResults();
        });
      }
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
