document.addEventListener("readystatechange", () => {
    if (document.readyState === "complete") {
        initSlider();
    }
});

function initSlider() {
    const container = document.querySelector('.skins-c');
    if (!container) {
        console.error("Container .skins-c não encontrado ainda no Chrome!");
        return;
    }

    console.log("Slider iniciado com sucesso!");

    let items = [...container.querySelectorAll('.outer-container')];
    if (items.length === 0) {
        console.warn("Nenhum .outer-container encontrado");
        return;
    }

    let isDragging = false;
    let isTransitioning = false;
    let startX, startTranslateX;
    let dragDistance = 0;
    const threshold = 100;
    let currentItem = 1;

    // ======= Clonagem para loop infinito =======
    const cloneFirst = items[0].cloneNode(true);
    container.appendChild(cloneFirst);

    const cloneLast = items[items.length - 1].cloneNode(true);
    container.insertBefore(cloneLast, items[0]);

    items = [...container.querySelectorAll('.outer-container')];

    // ======= Funções utilitárias =======
    function updateTotalWidth() {
        return items[0].offsetWidth * items.length;
    }

    function updateTranslateX() {
        const newTranslateX = -currentItem * items[0].offsetWidth;
        container.style.transform = `translateX(${newTranslateX}px)`;
    }

    function getCurrentTranslateX() {
        const style = window.getComputedStyle(container);
        return new WebKitCSSMatrix(style.transform).m41;
    }

    // ======= Início =======
    updateTranslateX();

    // ======= Eventos de drag =======
    function startDrag(e) {
        if (isTransitioning) return;
        isDragging = true;
        startX = e.touches ? e.touches[0].pageX : e.pageX;
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

    function handleTransition() {
        if (Math.abs(dragDistance) >= threshold) {
            if (dragDistance > 0 && currentItem > 0) currentItem--;
            else if (dragDistance < 0 && currentItem < items.length - 1) currentItem++;
        }
        isTransitioning = true;
        container.style.transition = 'transform 1.5s ease';
        updateTranslateX();
    }

    container.addEventListener("transitionend", () => {
        if (currentItem === items.length - 1) {
            container.style.transition = 'none';
            currentItem = 1;
            updateTranslateX();
        }
        if (currentItem === 0) {
            container.style.transition = 'none';
            currentItem = items.length - 2;
            updateTranslateX();
        }
        isTransitioning = false;
    });

    // ======= Eventos de toque =======
    container.addEventListener('touchstart', startDrag);
    container.addEventListener('touchmove', moveDrag);
    container.addEventListener('touchend', endDrag);
    container.addEventListener('touchcancel', endDrag);

    // ======= Eventos de mouse =======
    container.addEventListener('mousedown', startDrag);
    container.addEventListener('mousemove', moveDrag);
    container.addEventListener('mouseup', endDrag);
    container.addEventListener('mouseleave', endDrag);
}
