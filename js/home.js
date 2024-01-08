const menuMobile = () => {
    let btnOpen = document.getElementById('btn-open');
    let btnClose = document.getElementById('menu-mobile');
    let overlay = document.getElementById('overlay-menu');

    btnOpen.addEventListener('click', () => {
        btnClose.classList.add('active-menu');
    })

    btnClose.addEventListener('click', () => {
        btnClose.classList.remove('active-menu');
    })

    overlay.addEventListener('click', () => {
        btnClose.classList.remove('active-menu');
    })
}

menuMobile();