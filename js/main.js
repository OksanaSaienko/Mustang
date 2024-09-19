function myFunction(x) {
    x.classList.toggle("change");
}

document.querySelector(".nav__button").addEventListener("click", function () {
    document.querySelector(".nav__menu").classList.toggle("hide-show");
})

document.addEventListener('DOMContentLoaded', () => {
    const navButton = document.getElementById('navButton');
    const navMenu = document.getElementById('navMenu');
    const headerImg = document.querySelector('.header__img');

    navButton.addEventListener('click', () => {
        // Переключення класу для меню
        navMenu.classList.toggle('hide-show');

        // Переключення класу для зображення
        if (headerImg.classList.contains('hidden')) {
            headerImg.classList.remove('hidden');
        } else {
            headerImg.classList.add('hidden');
        }
    });
});
