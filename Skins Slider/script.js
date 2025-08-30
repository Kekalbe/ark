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
        let prevTranslate = 0; // Posição anterior

        // ======= Clonagem para loop infinito =======
        const cloneFirst = items[0].cloneNode(true);
        const cloneLast = items[items.length - 1].cloneNode(true);

        // Adicionar clones com delay para garantir que o layout seja calculado
        setTimeout(() => {
            container.appendChild(cloneFirst);
            container.insertBefore(cloneLast, items[0]);
            items = [...container.querySelectorAll('.outer-container')]; // Atualiza os itens
            updateTranslateX();
        }, 0); // Atrasar a clonagem para o próximo ciclo de renderização

        // ======= Funções utilitárias =======
        function updateTotalWidth() {
            return items[0].offsetWidth * items.length;
        }

        // Função para obter o valor atual do translateX
        function getCurrentTranslateX() {
            const matrix = new WebKitCSSMatrix(window.getComputedStyle(container).transform);
            return matrix.m41; // Extrai o valor de translateX
        }

        // Atualiza o translateX de forma a manter o item atual centralizado
        function updateTranslateX() {
            const containerWidth = container.offsetWidth; // Largura do contêiner
            const itemWidth = items[0].offsetWidth; // Largura do item
            const targetPosition = -(currentItem * itemWidth) + (containerWidth / 2) - (itemWidth / 2);
            container.style.transform = `translateX(${targetPosition}px)`;
            prevTranslate = targetPosition;
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

        // ======= RESIZE HANDLER =======
        window.addEventListener('resize', () => {
            const itemWidth = items[0].offsetWidth;
            const containerWidth = container.offsetWidth;
            // Calcula a posição do item atual
            const targetPosition = -(currentItem * itemWidth) + (containerWidth / 2) - (itemWidth / 2);
            
            container.style.transition = 'none'; // Desabilitar a transição durante o resize
            container.style.transform = `translateX(${targetPosition}px)`; // Atualiza a posição
            prevTranslate = targetPosition; // Salva a posição
        });

        // ======= Debounce resize =======
        let resizeTimeout;
        window.addEventListener('resize', () => {
            clearTimeout(resizeTimeout);
            resizeTimeout = setTimeout(() => {
                container.style.transition = 'none'; // Remover transições durante o resize
                setTimeout(() => {
                    // Atualizar a posição do translateX enquanto redimensiona
                    updateTranslateX();
                    container.style.transition = 'transform 1.5s ease'; // Reabilitar transições
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
