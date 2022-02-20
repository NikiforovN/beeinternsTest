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

//первый блок с карточками
const elementVisibleBeginner = document.querySelector(".weekly-quests__items-beginner"); 
const initialCardsBeginner = [
    {
      name: "Структура HTML",
      subname: "Назначение блоков: head, body",
      date:"01.02.2022",
      link: "./images/weekly-quests__image.jpg"
    },
    {
        name: "Подключение стилей",
        subname: "Виды подключения стилей. Подключение шрифтов",
        date:"03.02.2022",
        link: "./images/weekly-quests__image1.jpg"
    },
    {
        name: "CSS",
        subname: "Базовый синтаксис CSS: селекторы, классы",
        date:"03.02.2022",
        link: "./images/weekly-quests__image2.jpg"
    },
    {
        name: "Наследие и каскад",
        subname: "Наследие и каскад",
        date:"10.02.2022",
        link: "./images/weekly-quests__image3.jpg"
    },
  ];

// второй блок с карточками
const elementVisibleAdvanced = document.querySelector(".weekly-quests__items-advanced");
const initialCardsAdvanced = [
    {
      name: "HTML-формы",
      subname: "HTML-формы",
      date:"01.02.2022",
      link: "./images/weekly-quests__image.jpg"
    },
    {
        name: "Flex",
        subname: "Принципы современной верстки сайта на flex",
        date:"03.02.2022",
        link: "./images/weekly-quests__image1.jpg"
    },
    {
        name: "Media и viewport",
        subname: "Адаптивная верстка. Использование media и viewport",
        date:"03.02.2022",
        link: "./images/weekly-quests__image2.jpg"
    },
    {
        name: "CSS Grid",
        subname: "CSS Grid",
        date:"10.02.2022",
        link: "./images/weekly-quests__image3.jpg"
    },
  ];

  class Card {
      constructor(data, selector){
        this._name = data.name;
        this._subname = data.subname;
        this._date = data.date;
        this._link = data.link;
        this._selector = selector;
      }
      _getCard() {
        const elementTemplate = document.querySelector(this._selector).content;
        const cardElement = elementTemplate
          .querySelector(".weekly-quests__item")
          .cloneNode(true);
        return cardElement;
      }  
      createCard() {
        this._element = this._getCard();
        this._elementImage = this._element.querySelector(".weekly-quests__image");
        this._elementTitle = this._element.querySelector(".weekly-quests__topic");
        this._elementSubtitle = this._element.querySelector(".weekly-quests__description");
        this._elementDate = this._element.querySelector(".weekly-quests__date");

        this._elementImage.src = this._link;
        this._elementImage.alt = this._name;
        this._elementTitle.textContent = this._name;
        this._elementSubtitle.textContent = this._subname;
        this._elementDate.textContent =  this._date;
        return this._element;
      }
  }

  function prependCard(item, elementVisible) {
      const card = new Card(item, '.card');
      const cardElement = card.createCard();
      elementVisible.append(cardElement);
  }

  //Первый блок с карточками
  initialCardsBeginner.forEach((item)=>{
    prependCard(item, elementVisibleBeginner);
 });

 //Второй блок с карточками
 initialCardsAdvanced.forEach((item)=>{
    prependCard(item, elementVisibleAdvanced);
 });




 //ПИШЕМ СЛАЙДЕР

