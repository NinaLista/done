(() => {
  const grid = document.querySelector('[data-project-grid]');
  if (!grid) return;

  const cards = Array.from(grid.querySelectorAll('[data-project-card]'));
  const filterList = document.querySelector('[data-filter-list]');
  const sortButtons = Array.from(document.querySelectorAll('[data-sort]'));
  const status = document.querySelector('[data-grid-status]');
  let activeTag = 'All';
  let sortMode = 'newest';
  let randomOrder = new Map();

  const cardTags = card => card.dataset.tags.split('|').filter(Boolean);
  const tags = [...new Set(cards.flatMap(cardTags))].sort((a, b) => a.localeCompare(b));

  tags.forEach(tag => {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'chip';
    button.dataset.filter = tag;
    button.setAttribute('aria-pressed', 'false');
    button.textContent = tag;
    filterList.append(button);
  });

  const shuffleKeys = () => {
    const shuffled = [...cards];
    for (let i = shuffled.length - 1; i > 0; i -= 1) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    randomOrder = new Map(shuffled.map((card, index) => [card, index]));
  };

  const matchingCards = () => {
    const list = cards.filter(card => activeTag === 'All' || cardTags(card).includes(activeTag));
    return list.sort((a, b) => {
      if (sortMode === 'oldest') return a.dataset.date.localeCompare(b.dataset.date);
      if (sortMode === 'random') return (randomOrder.get(a) ?? 0) - (randomOrder.get(b) ?? 0);
      return b.dataset.date.localeCompare(a.dataset.date);
    });
  };

  const render = () => {
    const ordered = matchingCards();
    cards.forEach(card => { card.hidden = true; });
    ordered.forEach(card => {
      grid.append(card);
      card.hidden = false;
    });
    if (status) status.textContent = `${ordered.length} project${ordered.length === 1 ? '' : 's'} shown.`;
  };

  filterList.addEventListener('click', event => {
    const button = event.target.closest('[data-filter]');
    if (!button) return;

    activeTag = button.dataset.filter;
    filterList.querySelectorAll('[data-filter]').forEach(item => {
      const active = item === button;
      item.classList.toggle('is-active', active);
      item.setAttribute('aria-pressed', String(active));
    });
    render();
  });

  sortButtons.forEach(button => button.addEventListener('click', () => {
    sortMode = button.dataset.sort;
    if (sortMode === 'random') shuffleKeys();

    sortButtons.forEach(item => {
      const active = item === button;
      item.classList.toggle('is-active', active);
      item.setAttribute('aria-pressed', String(active));
    });
    render();
  }));

  cards.forEach(wrapper => {
    const card = wrapper.querySelector('[data-flip-card]');
    const front = wrapper.querySelector('.project-card__front');
    const back = wrapper.querySelector('.project-card__back');
    const frontButton = wrapper.querySelector('.flip-trigger');
    const backButton = wrapper.querySelector('.back-close');
    const openLink = wrapper.querySelector('.open-project');
    if (!card || !front || !back || !frontButton || !backButton || !openLink) return;

    const setFlipped = flipped => {
      card.classList.toggle('is-flipped', flipped);
      front.setAttribute('aria-hidden', String(flipped));
      back.setAttribute('aria-hidden', String(!flipped));
      front.toggleAttribute('inert', flipped);
      back.toggleAttribute('inert', !flipped);
      frontButton.tabIndex = flipped ? -1 : 0;
      backButton.tabIndex = flipped ? 0 : -1;
      openLink.tabIndex = flipped ? 0 : -1;

      if (flipped) backButton.focus({ preventScroll: true });
      else frontButton.focus({ preventScroll: true });
    };

    back.setAttribute('inert', '');
    frontButton.addEventListener('click', () => setFlipped(true));
    openLink.addEventListener('click', event => event.stopPropagation());
    back.addEventListener('click', () => setFlipped(false));
    wrapper.addEventListener('keydown', event => {
      if (event.key === 'Escape' && card.classList.contains('is-flipped')) setFlipped(false);
    });
  });

  shuffleKeys();
  render();
})();