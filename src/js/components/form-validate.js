import { validateForms } from '../functions/validate-forms';
const rules1 = [
  {
    ruleSelector: '#form-name',
    rules: [
      {
        rule: 'minLength',
        value: 3,
        errorMessage: 'В этом поле должно быть минимум 3 символа!'
      },
      {
        rule: 'maxLength',
        value: 30,
        errorMessage: 'Введите имя!'
      },
      {
        rule: 'required',
        value: true,
        errorMessage: 'Заполните имя!'
      }
    ]
  },
  {
    ruleSelector: '#form-tel',
    tel: true,
    telError: 'Введите корректный телефон',
    rules: [
      {
        rule: 'required',
        value: true,
        errorMessage: 'Заполните телефон!'
      }
    ]
  },
  {
    ruleSelector: '#form-email',
    rules: [
      {
        rule: 'required',
        errorMessage: 'Заполните email!',
      },
      {
        rule: 'email',
        errorMessage: 'Введите email!',
      }
    ]
  },
  {
    ruleSelector: '#form-checkbox',
    rules: [
      {
        rule: 'required',
        errorMessage: 'Поставьте галочку',
      }
    ]
  }
];

const afterForm = () => {
  console.log('Произошла отправка');
};

validateForms('.contact-form', rules1, afterForm);
