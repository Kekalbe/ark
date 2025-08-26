(function() {
    // ======= Função principal =======
    function initSlider(container) {
        if (!container) return false;
        if (container.dataset.sliderInitialized) {
            console.log("Slider já inicializado, ignorando...");
            return true;
        }

        let items = [...container.querySelectorAll('.outer-container')];
        if (items.length === 0) {
            console.warn("Nenhum .outer-container encontrado dentro de .skins-c");
            return false;
        }

        console.log("Inicializando slider...");

        let isDragging = false;
        let isTransitioning = false;
        let startX, startTranslateX;
        let dragDistance = 0;
        const threshold = 100; 
        let currentItem = 1;

        // ======= Clonagem dinâmica para loop infinito =======
        const cloneFirst = items[0].cloneNode(true);
        container.appendChild(cloneFirst);

        const cloneLast = items[items.length - 1].cloneNode(true);
        container.insertBefore(cloneLast, items[0]);

        items = [...container.querySelectorAll('.outer-container')];

        // ======= Funções utilitárias =======
        function updateTotalWidth() {
            const itemWidth = items[0].offsetWidth;
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
                if (dragDistance > 0 && currentItem > 0) {
                    currentItem--;
                } else if (dragDistance < 0 && currentItem < items.length - 1) {
                    currentItem++;
                }
            }
            isTransitioning = true;
            container.style.transition = 'transform 1.5s ease';
            updateTranslateX();
        }

        container.addEventListener("transitionend", (e) => {
            if (e.propertyName === "transform") {
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
                console.log("Transição terminou! Item atual:", currentItem);
                isTransitioning = false;
            }
        });

        // ======= Redimensionamento =======
        window.addEventListener('resize', () => {
            container.style.transition = 'none';
            totalWidth = updateTotalWidth();

            if (currentItem >= items.length - 1) currentItem = items.length - 2;
            if (currentItem <= 0) currentItem = 1;

            updateTranslateX();
            setTimeout(() => {
                container.style.transition = 'transform 1.5s ease';
            }, 50);
        });

        // ======= Eventos de toque =======
        container.addEventListener('touchstart', startDrag);
        container.addEventListener('touchmove', moveDrag);
        container.addEventListener('touchend', endDrag);
        container.addEventListener('touchcancel', endDrag);

        // ======= Eventos de arrasto =======
        container.addEventListener('mousedown', startDrag);
        container.addEventListener('mousemove', moveDrag);
        container.addEventListener('mouseup', endDrag);
        container.addEventListener('mouseleave', endDrag);

        // Marca como inicializado para não duplicar
        container.dataset.sliderInitialized = "true";
        console.log("Slider inicializado com sucesso!");
        return true;
    }

    // ======= Tentativa inicial =======
    function tryInit() {
        const container = document.querySelector('.skins-c');
        initSlider(container);
    }

    // DOM pronto
    document.addEventListener("DOMContentLoaded", tryInit);
    window.addEventListener("load", tryInit);

    // ======= MutationObserver permanente =======
    const observer = new MutationObserver(() => {
        const container = document.querySelector('.skins-c');
        if (container && !container.dataset.sliderInitialized) {
            initSlider(container);
        }
    });
    observer.observe(document.body, { childList: true, subtree: true });
})();
