const container = document.querySelector('.skins-c');
let items = [...container.querySelectorAll('.outer-container')]; // Itens reais

let isDragging = false;
let isTransitioning = false; // Variável para controlar a transição
let startX, startTranslateX;
let dragDistance = 0;
const threshold = 100;
let currentItem = 1; // Começa no primeiro item real

// ======= Clonagem dinâmica para loop infinito =======
// Clone do primeiro item (último no array)
const cloneFirst = items[0].cloneNode(true);
container.appendChild(cloneFirst);

// Clone do último item (primeiro no array)
const cloneLast = items[items.length - 1].cloneNode(true);
container.insertBefore(cloneLast, items[0]);

// Atualiza lista após a clonagem
items = [...container.querySelectorAll('.outer-container')];

// ======= Funções utilitárias =======
function updateTotalWidth() {
  const itemWidth = items[0].offsetWidth; // Usando a largura de um item
  return itemWidth * items.length;
}

function updateTranslateX() {
  const newTranslateX = -currentItem * items[0].offsetWidth;
  container.style.transform = `translateX(${newTranslateX}px)`;
}

function getCurrentTranslateX() {
  const style = window.getComputedStyle(container);
  const matrix = new WebKitCSSMatrix(style.transform);
  return matrix.m41;
}

// ======= Início no item real =======
let totalWidth = updateTotalWidth();
updateTranslateX();

// ======= Funções de controle de drag =======
function startDrag(e) {
  if (isTransitioning) return; // Impede o drag se a transição estiver em andamento

  isDragging = true;
  startX = e.touches ? e.touches[0].pageX : e.pageX; // Suporte para touch e mouse
  startTranslateX = getCurrentTranslateX();
  dragDistance = 0;
}

function moveDrag(e) {
  if (!isDragging) return;

  const moveX = (e.touches ? e.touches[0].pageX : e.pageX) - startX;
  dragDistance = moveX;
  let newTranslateX = startTranslateX + moveX;

  const maxTranslateX = -(updateTotalWidth() - container.offsetWidth);
  if (newTranslateX > 0) newTranslateX = 0;
  if (newTranslateX < maxTranslateX) newTranslateX = maxTranslateX;

  container.style.transform = `translateX(${newTranslateX}px)`;
}

function endDrag() {
  if (!isDragging) return;

  isDragging = false;
  container.style.transition = 'transform 1.5s ease';
  handleTransition();
}

// ======= Função de transição entre itens =======
function handleTransition() {
  if (Math.abs(dragDistance) >= threshold) {
    if (dragDistance > 0 && currentItem > 0) {
      currentItem--; // Volta
    } else if (dragDistance < 0 && currentItem < items.length - 1) {
      currentItem++; // Avança
    }
  }

  // Desativa a transição enquanto o slider "teleporta" entre os clones
  isTransitioning = true;
  // Remover qualquer transição se já não houver
  container.style.transition = 'transform 1.5s ease';
  updateTranslateX();
}

// ======= Teleporte automático ao chegar nos clones =======
container.addEventListener("transitionend", (e) => {
  if (e.propertyName === "transform") {
    // Chegou no clone do primeiro item (último no array)
    if (currentItem === items.length - 1) {
      container.style.transition = 'none';
      currentItem = 1; // Teleporta para o próximo item real (índice 1)
      updateTranslateX();
    }

    // Chegou no clone do último item (primeiro no array)
    if (currentItem === 0) {
      container.style.transition = 'none';
      currentItem = items.length - 2; // Teleporta para o penúltimo item real
      updateTranslateX();
    }

    console.log("Transição terminou! Item atual:", currentItem);

    // Permite novo drag após transição
    isTransitioning = false;
  }
});

// ======= Redimensionamento de tela =======
window.addEventListener('resize', () => {
  // Forçar a remoção da transição durante o redimensionamento
  container.style.transition = 'none';

  // Recalcular a largura total e a posição após o redimensionamento
  totalWidth = updateTotalWidth();
  
  // Garantir que o índice esteja dentro dos limites após redimensionamento
  if (currentItem >= items.length - 1) {
    currentItem = items.length - 2;
  }
  if (currentItem <= 0) {
    currentItem = 1;
  }

  // Atualizar a transformação de posição
  updateTranslateX();
  
  // Retornar à transição original após o redimensionamento
  setTimeout(() => {
    container.style.transition = 'transform 1.5s ease';
  }, 50);
});

// ======= Eventos de toque (touch) =======
container.addEventListener('touchstart', startDrag);
container.addEventListener('touchmove', moveDrag);
container.addEventListener('touchend', endDrag);
container.addEventListener('touchcancel', endDrag);

// ======= Eventos de arrasto (desktop) =======
container.addEventListener('mousedown', startDrag);
container.addEventListener('mousemove', moveDrag);
container.addEventListener('mouseup', endDrag);
container.addEventListener('mouseleave', endDrag);
