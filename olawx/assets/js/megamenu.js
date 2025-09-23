const menu = document.querySelector('.menu');
if (menu) {
    const menuSection = menu.querySelector('.menu-section');
    const menuClosed = menu.querySelector('.menu-mobile-close');
    const menuTrigger = document.querySelector('.menu-mobile-trigger');
    const menuOverlay = document.querySelector('.overlay');

    // Toggle full menu open/close
    function toggleMenu() {
        menu.classList.toggle('active');
        menuOverlay.classList.toggle('active');
    }

    // Accordion toggle for mobile submenus
    menuSection.addEventListener('click', (e) => {
        if (!menu.classList.contains('active')) return;

        const parentItem = e.target.closest('.menu-item-has-children');
        if (parentItem && e.target.tagName === "A") {
            const href = e.target.getAttribute('href');
            // Only prevent navigation for empty links or javascript:void(0)
            if (href === '#' || href === 'javascript:void(0)') {
                e.preventDefault();
                const subMenu = parentItem.querySelector('.menu-subs');

                if (subMenu) {
                    // If already open, close it
                    if (subMenu.classList.contains('active')) {
                        subMenu.classList.remove('active');
                    } else {
                        // Close other submenus at same level
                        parentItem.parentElement
                            .querySelectorAll('.menu-subs.active')
                            .forEach(item => item.classList.remove('active'));

                        // Open this one
                        subMenu.classList.add('active');
                    }
                }
            }
            // If it's a real URL, let it navigate normally
        }
    });

    // Open/close triggers
    menuTrigger?.addEventListener('click', toggleMenu);
    menuClosed?.addEventListener('click', toggleMenu);
    menuOverlay?.addEventListener('click', toggleMenu);

    // Reset on desktop resize
    window.addEventListener('resize', () => {
        if (window.innerWidth > 991) {
            menu.classList.remove('active');
            menuOverlay.classList.remove('active');
            menu.querySelectorAll('.menu-subs.active').forEach(sub => sub.classList.remove('active'));
        }
    });
}
