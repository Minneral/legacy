const logo = document.querySelector(".header__logo");
const headerNav = document.querySelector(".header__nav");
const headerMenu = document.querySelector('.header__menu');
const burger = document.querySelector(".header__burger");

const addClassWhenScroll = [
    logo,
    headerNav,
]

function bScrolledEnought()
{
    let iScrolled = window.scrollY;
    if(iScrolled>=35)
    {
        return true;
    }
    else
    {
        return false;
    }
}

window.addEventListener("scroll", function () {

    if (bScrolledEnought()) {

        addClassWhenScroll.forEach(item => {
            item.classList.add('active');
        })

    }
    else {
        addClassWhenScroll.forEach(item => {
            item.classList.remove('active');
        })
    }
})


burger.addEventListener("click", () => {
    burger.classList.toggle('active');
    headerMenu.classList.toggle('active');
    if(bScrolledEnought() == false)
    {
        logo.classList.toggle('active');
    }

    body.classList.toggle('lock')
})