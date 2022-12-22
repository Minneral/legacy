const body = document.querySelector('body');

const newsArticle = document.querySelectorAll('.news__item-article');
const sidebarNewsArticle = document.querySelectorAll(".news-sidebar__article");
const lang = document.querySelector('.header__lang');
const newsPosts = document.querySelectorAll('.news__item');

if (newsPosts.length > 0)
    newsPosts[0].classList.add('news__item_fluid');


if (newsArticle.length > 0) {
    newsArticle.forEach(item => {
        if (item.innerHTML.length - 70 > 55) {
            let str = item.innerHTML.substring(0, 55 + 70);
            str += "...";
            item.innerHTML = str;
        }
    })
}

if (sidebarNewsArticle.length > 0)
    sidebarNewsArticle.forEach(item => {
        if (item.innerHTML.length - 70 > 96) {
            let str = item.innerHTML.substring(0, 96 + 70);
            str += "...";
            item.innerHTML = str;
        }
    })

lang.addEventListener('click', function () {
    lang.classList.toggle('active');
})
