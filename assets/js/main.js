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
          type: 'author',
          label: '作者',
          title: 'No True 项目组',
          summary: '本站发起与维护团队，负责作品征集、规范维护、审核协调与展示页面维护。',
          keywords: 'No True 项目组 作者介绍 项目规范 本站作品',
          href: 'notrueprojectteam.html'
        },
        {
          type: 'notice',
          label: '公告',
          title: '《No true项目规范》已上架',
          summary: '2026年8月14日发布，可在最新作品、作品归档或此公告中打开。',
          href: '2026-08-14.html'
        },
        {
          type: 'author',
          label: '作者',
          title: '作者介绍',
          summary: 'No True 项目组的作者资料与本站作品介绍。',
          keywords: '作者介绍 作者 项目组 本站作品 公开资料',
          href: 'author-introductions.html'
        },
        {
          type: 'article',
          label: '文章',
          title: '《No true项目规范》',
          summary: 'No true No.0：项目说明、提交方式、观看方式与内容规范。',
          href: 'work-notrue-project-spec.html'
        },
        {
          type: 'notice',
          label: '公告',
          title: '即将发布《No true No.0》（《No True项目规范》）',
          summary: '2026年8月14日，《No True项目规范》将在本站发布。',
          href: '2026-08-13.html'
        },
        {
          type: 'notice',
          label: '公告',
          title: 'Notrue正式建立，并接受作品提交',
          summary: 'Notrue原创作品展示计划正式建立，并面向公众接受符合规范的原创提交作品。',
          href: '2026-08-12.html'
        }
      ];
      const form = searchPanel.querySelector('form');
      const searchInput = searchPanel.querySelector('input[type="search"]');
      if (form && searchInput) {
        searchInput.placeholder = '输入关键词，或直接按分类浏览';
        const category = document.createElement('select');
        category.className = 'search-category';
        category.setAttribute('aria-label', '选择搜索分类');
        category.innerHTML = '<option value="all">不限分类</option><option value="notice">公告</option><option value="article">文章</option><option value="author">作者</option>';
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
            const text = `${item.title} ${item.summary} ${item.keywords || ''}`.toLowerCase();
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
