document.querySelector('.burger').onclick = function () {
    document.querySelector('.burger').classList.add('burger_active'),
        document.querySelector('.header__menu').classList.add('header__menu_shown');
}

document.querySelector('.burger').onclick = function () {
    document.querySelector('.burger').classList.toggle('burger_active'),
        document.querySelector('.header__menu').classList.toggle('header__menu_shown');
}