import Tooltip from "./tooltip";

const form = document.querySelector('.form');
const btn = document.querySelector('.btn');

const errors = {
  login: {
    valueMissing: 'Представьтесь пожалуйста'
  },
  email: {
    valueMissing: 'Нам потребуется электропочта...',
    typeMismatch: 'А это точно электропочта'
  },
  'credit-card': {
    valueMissing: 'Представьте данные свой кредитной карты, это безопасно, честно',
    patternMismatch: 'Не удалось снять деньги с Вашей кредитной карты'
  }
}

const tooltipFactory = new Tooltip();

let actualMessages = [];


const showTooltip = (message, el) => {

  actualMessages.push({
    name: el.name,
    id: tooltipFactory.showTooltip(message, el),
  })
}

const getError = el => {
  const errorKey = Object.keys(ValidityState.prototype).find(key => {
    if (!el.name) return;
    if (key === 'valid') return;

    return el.validity[key];
  })

  if (!errorKey) return;

  return errors[el.name][errorKey]
};

form.addEventListener('submit', e => {
  e.preventDefault();
  e.stopImmediatePropagation();

  actualMessages.forEach(message => tooltipFactory.removeTooltip(message.id));
  actualMessages = [];

  if (form.checkValidity()) {
    console.log('valid')
  } else {
    console.log('invalid')
  }

  const elements = [...form.elements];

  elements.some(elem => {
    const error = getError(elem);

    if (error) {
      showTooltip(error, elem);

      return true
    }
  });

});

const elementOnBlur = e => {
  const el = e.target;
  const error = getError(el);

  if (error) {
    showTooltip(error, el)
  } else {
    const currentErrorMessage = actualMessages.find(item => item.name == el.name);

    if (currentErrorMessage) {
      tooltipFactory.removeTooltip(currentErrorMessage.id)
    }
  }

  el.removeEventListener('blur', elementOnBlur);
}

[...form.elements].forEach(el => el.addEventListener('focus', () => {
  el.addEventListener('blur', elementOnBlur)
}));