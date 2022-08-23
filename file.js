const ul = document.querySelector('ul'),
    input = document.querySelector('input'),
    count = document.querySelector('.details span');

let max_Num = 10,
    tags = [];



// window.onload = function() {
// };



countNum();

function countNum() {

    input.focus();
    count.innerHTML = max_Num - tags.length;

};

function createLi() {

    ul.querySelectorAll('li').forEach((li) => li.remove());

    tags.slice().reverse().forEach((tag) => {

        let liTag = `<li>${tag} <ion-icon name="close-outline" onclick="remove(this, '${tag}')"></ion-icon></li>`;

        ul.insertAdjacentHTML('afterbegin', liTag);

    });

    countNum();

};

function remove(ele, tag) {

    let index = tags.indexOf(tag);

    tags = [...tags.slice(0, index), ...tags.slice(index + 1)];

    ele.parentElement.remove();

    countNum();

};

function addTag(e) {

    if (e.key == "Enter") {

        let tag = e.target.value.replace(/\s+/g, ' ');

        if (tag.length > 0 && !tags.includes(tag)) {

            if (tags.length < 10) {
                tag.split(',').forEach((tag) => {

                    tags.push(tag);
                    createLi();
                    // console.log(tags);
                });
            }
        };
        e.target.value = '';
    };
};

input.addEventListener('keyup', addTag);

let btn = document.querySelector('button');

btn.addEventListener('click', () => {

    tags.length = 0;

    ul.querySelectorAll('li').forEach((li) => li.remove());

    countNum();

});