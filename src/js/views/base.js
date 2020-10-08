
export const domElements = {
    container: document.querySelector('.container'),
    side: document.querySelector('.side'),
    main: document.querySelector('.main'),
    details: document.querySelector('.details'),
    detailsTable: document.querySelector('.details__table'),
    detailsOverview: document.querySelector('.details__overview'),
    gameSection: document.querySelector('.game'),
    formUser: document.querySelector('.form__user'),
    formWelcome: document.querySelector('.form__welcome'),
    formBtn: document.querySelector('.form__btn'),
    formInputs: document.querySelector('.form__inputs'),
    icon: document.querySelector('.side__icon-image'),
    formName: document.querySelector('#name'),
    formMobile: document.querySelector('#mobile'),
    formYear: document.querySelector('#year'),
    formCategory: document.querySelector('#category'),
    formSubject: document.querySelector('#subject'),
    formNumbers: document.querySelector('#numbers'),
    hasEvent: {
        detailScore: document.querySelector('.details__highscores'),
        form: document.querySelector('.form'),
        get profileBtn() {
            let btn;
            window.matchMedia('(max-width: 30em)').matches ? btn = 'btn-img' : btn = 'btn__user';
            let result = document.querySelector(`.${btn}`);
            return result;
        },
    },
  
};

///// CLASSSES USED FOR MANIPULATING
export const domClasslists = {
    detailShow: 'details-show',
    tableShow: 'show',
    noShadow: 'no-shadow',
    hasEvent: 'has-event',
};

///// CLASS ADDED TO  ALL ELEMENT THAT HAS EVENT
export const addClass = obj => {
    for (const key in obj) {
            obj[key].classList.add(domClasslists.hasEvent);
    }
};