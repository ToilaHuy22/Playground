const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const lists = $$('.feature-intro__item');
const contents = $$('.feature-content__item');

const line = $('.feature-intro__line');

line.style.left = $('.feature-intro__item.active').offsetLeft + 'px';
line.style.width = $('.feature-intro__item.active').offsetWidth + 'px';

lists.forEach((list, index) => {
    const content = contents[index];

    list.onclick = function() {
        line.style.left = list.offsetLeft + 'px';
        line.style.width = list.offsetWidth + 'px';

        $('.feature-intro__item.active').classList.remove('active');
        list.classList.add('active');

        $('.feature-content__item.active').classList.remove('active');
        content.classList.add('active');
    }
})