document.querySelector('.poisk__input').addEventListener('focus', () => {
    document.querySelector('.spisok').style.display = 'flex';
});
document.querySelector('.poisk__input').addEventListener('blur', () => {
    document.querySelector('.spisok').style.display = 'none';
});
let i = 0;
setInterval(() => {
    let el = document.querySelector('.poisk__image');
    if (i % 2 === 0) {
        el.style.marginLeft = '.2em';
    } else {
        el.style.marginLeft = '-.2em';
    }
    i++;
    console.log(i);
    if (i >= 1000)  {
        i = 0;
    }
}, 70);

document.querySelector('.green').addEventListener('click', () => {
    document.querySelector('html').style.backgroundImage = 'url(back_green.png)';
    document.querySelector('.poisk__image').src = 'Group_black.png';
});
document.querySelector('.red').addEventListener('click', () => {
    document.querySelector('html').style.backgroundImage = 'url(back_red.png)';
    document.querySelector('.poisk__image').src = 'Group_white.png';
});
document.querySelector('.pink').addEventListener('click', () => {
    document.querySelector('html').style.backgroundImage = 'url(back_pink.png)';
    document.querySelector('.poisk__image').src = 'Group_pink.png';
});
document.querySelector('.blue').addEventListener('click', () => {
    document.querySelector('html').style.backgroundImage = 'url(back_blue.png)';
    document.querySelector('.poisk__image').src = 'Group_blue.png';
});

