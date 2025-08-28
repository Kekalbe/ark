(function() {
    // ======= Função principal =======
    function initSlider(container) {
        if (!container) return false;
        if (container.dataset.sliderInitialized) return true;

        let items = [...container.querySelectorAll('.outer-container')];
        if (items.length === 0) return false;

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
            container.style.transform = `translateX(${-currentItem * items[0].offsetWidth}px)`;
        }

        function getCurrentTranslateX() {
            return new WebKitCSSMatrix(window.getComputedStyle(container).transform).m41;
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
            container.style.transition = 'none'; // Desabilita transição enquanto arrasta
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

            // Fallback se transitionend não disparar
            setTimeout(() => {
                if (isTransitioning) isTransitioning = false;
            }, 1600);
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

        // ======= Debounce resize =======
        let resizeTimeout;
        window.addEventListener('resize', () => {
            clearTimeout(resizeTimeout);
            resizeTimeout = setTimeout(() => {
                // Desabilitar a transição temporariamente
                container.style.transition = 'none';

                // Recalcular a largura total
                updateTotalWidth();

                // Ajustar a posição do currentItem caso esteja fora dos limites
                if (currentItem >= items.length - 1) currentItem = items.length - 2;
                if (currentItem <= 0) currentItem = 1;
                updateTranslateX();

                // Após o ajuste, reabilitar a transição com um pequeno atraso
                setTimeout(() => {
                    container.style.transition = 'transform 1.5s ease';
                }, 50);
            }, 200);
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

        // ======= Marcar como inicializado =======
        container.dataset.sliderInitialized = "true";
        return true;
    }

    // ======= Inicialização segura =======
    function tryInit() {
        const container = document.querySelector('.skins-c');
        initSlider(container);
    }

    document.addEventListener("readystatechange", () => {
        if (document.readyState === "complete") tryInit();
    });

    window.addEventListener("load", tryInit);

    // ======= MutationObserver para Elementor =======
    const observer = new MutationObserver(() => {
        const container = document.querySelector('.skins-c');
        if (container && !container.dataset.sliderInitialized) {
            initSlider(container);
        }
    });
    observer.observe(document.body, { childList: true, subtree: true });
})();
