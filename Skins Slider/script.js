(function () {
    function initSlider(container) {
        if (!container) return false;
        if (container.dataset.sliderInitialized) return true;

        let items = [...container.querySelectorAll('.outer-container')];
        if (items.length === 0) return false;

        let isDragging = false;
        let isTransitioning = false;
        let autoplayEnabled = false;
        let startX, startTranslateX;
        let dragDistanceX = 0;
        const threshold = 50;

        let currentItem = 1;
        let prevTranslate = 0;

        // ======= Clonagem para loop infinito =======
        const cloneFirst = items[0].cloneNode(true);
        const cloneLast = items[items.length - 1].cloneNode(true);

        setTimeout(() => {
            container.appendChild(cloneFirst);
            container.insertBefore(cloneLast, items[0]);
            items = [...container.querySelectorAll('.outer-container')];
            updateTranslateX();
        }, 0);

        // ======= Funções utilitárias =======
        function updateTotalWidth() {
            return items[0].offsetWidth * items.length;
        }

        function getCurrentTranslateX() {
            const matrix = new DOMMatrixReadOnly(getComputedStyle(container).transform);
            return matrix.m41;
        }

        function updateTranslateX() {
            const containerWidth = container.offsetWidth;
            const itemWidth = items[0].offsetWidth;
            const targetPosition =
                -(currentItem * itemWidth) + (containerWidth / 2) - (itemWidth / 2);
            container.style.transform = `translateX(${targetPosition}px)`;
            prevTranslate = targetPosition;
        }

        // ======= Autoplay =======
        let autoplayInterval;
        function startAutoplay() {
            if (!autoplayEnabled) return;
            stopAutoplay();
            autoplayInterval = setInterval(() => {
                if (!isDragging && !isTransitioning) {
                    currentItem++;
                    container.style.transition = 'transform 1.5s ease';
                    updateTranslateX();
                    if (currentItem === items.length - 1 || currentItem === 0) {
                        isTransitioning = true;
                    }
                }
            }, 4000);
        }

        function stopAutoplay() {
            clearInterval(autoplayInterval);
        }

        function setAutoplay(value) {
            autoplayEnabled = value;

            if (autoplayEnabled) {
                stopAutoplay();
                startAutoplay();
                container.style.pointerEvents = 'none';
                container.style.cursor = 'default';
            } else {
                stopAutoplay();
                container.style.pointerEvents = 'auto';
                container.style.cursor = 'grab';
                container.dispatchEvent(new Event('mouseenter'));
            }
        }

        container.addEventListener('mouseenter', () => {
            if (autoplayEnabled) {
                container.style.cursor = 'default';
            } else if (!isDragging) {
                container.style.cursor = 'grab';
            }
        });

        window.mySlider = { setAutoplay };

        // ======= Início =======
        updateTranslateX();
        startAutoplay();

function startDrag(e) {
    if (autoplayEnabled) return;
    isDragging = true;
    isTransitioning = false;
    stopAutoplay();
    startX = e.touches ? e.touches[0].clientX : e.clientX;
    dragDistanceX = 0;
    container.style.cursor = 'grabbing';
}


function moveDrag(e) {
    if (!isDragging || autoplayEnabled) return;
    const currentX = e.touches ? e.touches[0].pageX : e.pageX;
    dragDistanceX = currentX - startX;

    // Não move o slider e não atualiza startX
}


        function endDrag() {
            if (!isDragging || autoplayEnabled) return;
            isDragging = false;
            container.style.cursor = autoplayEnabled ? 'default' : 'grab';

            container.style.transition = 'transform 1.5s ease';
            handleTransition();
            startAutoplay();
        }

        function handleTransition() {
            if (dragDistanceX > threshold && currentItem > 0) {
                currentItem--; // swipe direita
            } else if (dragDistanceX < -threshold && currentItem < items.length - 1) {
                currentItem++; // swipe esquerda
            }

            isTransitioning = true;
            container.style.transition = 'transform 1.5s ease';
            updateTranslateX();
            setTimeout(() => { isTransitioning = false; }, 1000);
        }

        // ======= TransitionEnd + Teleporte =======
        container.addEventListener('transitionend', () => {
            if (currentItem === items.length - 1) {
                container.style.transition = 'none';
                currentItem = 1;
                updateTranslateX();
            } else if (currentItem === 0) {
                container.style.transition = 'none';
                currentItem = items.length - 2;
                updateTranslateX();
            }
            isTransitioning = false;
        });

        function teleportTo(targetIndex) {
            container.style.transition = 'none';
            currentItem = targetIndex;
            updateTranslateX();
            requestAnimationFrame(() => {
                container.style.transition = 'transform 1.5s ease';
            });
        }

        let resizeTimeout;
        window.addEventListener('resize', () => {
            stopAutoplay();
            clearTimeout(resizeTimeout);

            container.style.transition = 'none';

            const containerWidth = container.offsetWidth;
            const itemWidth = items[0].offsetWidth;
            const targetPosition =
                -(currentItem * itemWidth) + (containerWidth / 2) - (itemWidth / 2);
            container.style.transform = `translateX(${targetPosition}px)`;

            resizeTimeout = setTimeout(() => {
                container.style.transition = 'transform 0.6s ease';
                startAutoplay();
            }, 250);
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

        container.dataset.sliderInitialized = "true";
        return true;
    }

    function tryInit() {
        const container = document.querySelector('.skins-c');
        initSlider(container);
    }

    document.addEventListener('readystatechange', () => {
        if (document.readyState === 'complete') tryInit();
    });

    window.addEventListener('load', tryInit);

    const observer = new MutationObserver(() => {
        const container = document.querySelector('.skins-c');
        if (container && !container.dataset.sliderInitialized) {
            initSlider(container);
        }
    });

    observer.observe(document.body, { childList: true, subtree: true });
})();
