const firstSublist = document.querySelector('.leftbar__sublist');
const firstSublistTitle = document.querySelector('.leftbar__list_first');
const sublistButton = firstSublistTitle.querySelector('.leftbar__button_first');
firstSublistTitle.addEventListener('click', function(){
    firstSublist.classList.toggle('leftbar__sublist_invisible');
    sublistButton.classList.toggle('leftbar__button_rotation')
})


const secondSublist = document.querySelector('.leftbar__action');
const secondSublistTitle = document.querySelector('.leftbar__list_second');
const secondSublistButton = secondSublistTitle.querySelector('.leftbar__button_second');
secondSublistTitle.addEventListener('click', function(){
    secondSublist.classList.toggle('leftbar__sublist_invisible');
    secondSublistButton.classList.toggle('leftbar__button_rotation')
})
