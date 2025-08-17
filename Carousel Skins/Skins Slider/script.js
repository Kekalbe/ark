(() => {
  const container = document.querySelector('.skins-c');
  const items = [...container.querySelectorAll('.outer-container')];
  const total = items.length;
  const visibleCount = 5;

  let current = 0;
  let itemWidth = items[0].offsetWidth;

  let lastPositions = new Map();
  let lastDirection = 0; // -1 = direita, +1 = esquerda
  let firstRender = true; // NOVO: flag para a primeira renderização

  const mod = (n, m) => ((n % m) + m) % m;

  function updateItemWidth() {
    itemWidth = items[0].offsetWidth;
  }

  function updateCarousel() {
    const centerIndex = Math.floor(visibleCount / 2);

    items.forEach((item, i) => {
      let offsetIndex = i - current;

      if (offsetIndex < -Math.floor(total / 2)) offsetIndex += total;
      if (offsetIndex > Math.floor(total / 2)) offsetIndex -= total;

      const translateX = offsetIndex * itemWidth;
      const prevX = lastPositions.get(i) ?? translateX;

      item.style.position = 'absolute';
      item.style.top = '50%';
      item.style.left = '50%';
      item.style.transform = `translate(-50%, -50%) translateX(${translateX}px)`;

      // Se for a primeira renderização, sem transição
      item.style.transition = firstRender ? 'none' : 'transform 0.5s linear';

      const distance = Math.abs(offsetIndex);
      let z = (total * 10) - (distance * 10);

      if (distance > centerIndex) {
        z = -1;
      } else {
        if (lastDirection === -1 && translateX < prevX) z -= 2;
        if (lastDirection === +1 && translateX > prevX) z -= 2;
      }

      item.style.zIndex = z;
      item.style.pointerEvents = distance <= centerIndex ? 'auto' : 'none';

      lastPositions.set(i, translateX);
    });

    // Após a primeira renderização, ativa transição para próximos movimentos
    if (firstRender) firstRender = false;
  }

  items.forEach((item, i) => {
    item.addEventListener('click', () => {
      current = i;
      updateCarousel();
    });
  });

  container.querySelectorAll('img').forEach(img =>
    img.addEventListener('dragstart', e => e.preventDefault())
  );

  let isDragging = false;
  let startX = 0;
  let moved = false;
  container.style.cursor = 'grab';

  container.addEventListener('pointerdown', e => {
    isDragging = true;
    moved = false;
    startX = e.clientX;
    container.setPointerCapture(e.pointerId);
    container.style.cursor = 'grabbing';
  });

  container.addEventListener('pointermove', e => {
    if (!isDragging) return;
    const diff = e.clientX - startX;
    if (Math.abs(diff) > 10) moved = true;
  });

  container.addEventListener('pointerup', e => {
    if (!isDragging) return;
    const diff = e.clientX - startX;

    if (moved && Math.abs(diff) > 30) {
      if (diff > 0) {
        current = mod(current - 1, total);
        lastDirection = -1;
      } else {
        current = mod(current + 1, total);
        lastDirection = +1;
      }
      updateCarousel();
    }

    isDragging = false;
    moved = false;
    container.releasePointerCapture(e.pointerId);
    container.style.cursor = 'grab';
  });

  container.addEventListener('pointerleave', () => {
    isDragging = false;
    moved = false;
    container.style.cursor = 'grab';
  });

  window.addEventListener('resize', () => {
    updateItemWidth();
    updateCarousel();
  });

  // Primeira renderização sem animação
  updateCarousel();
})();
