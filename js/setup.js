'use strict';

var WIZARDS_NUMBER = 4;
var ESC_KEYCODE = 27;
var ENTER_KEYCODE = 13;

var NAMES = [
  'Иван',
  'Хуан Себастьян',
  'Мария',
  'Кристоф',
  'Виктор',
  'Юлия',
  'Люпита',
  'Вашингтон'
];

var SURNAMES = [
  'да Марья',
  'Верон',
  'Мирабелла',
  'Вальц',
  'Онопко',
  'Топольницкая',
  'Нионго',
  'Ирвинг'
];

var COAT_COLORS = [
  'rgb(101, 137, 164)',
  'rgb(241, 43, 107)',
  'rgb(146, 100, 161)',
  'rgb(56, 159, 117)',
  'rgb(215, 210, 55)',
  'rgb(0, 0, 0)'
];

var EYES_COLORS = [
  'black',
  'red',
  'blue',
  'yellow',
  'green'
];

var FIREBALL_COLORS = [
  '#ee4830',
  '#30a8ee',
  '#5ce6c0',
  '#e848d5',
  '#e6e848'
];

var userDialog = document.querySelector('.setup');

var randomData = function (data) {
  var index = Math.floor(Math.random() * data.length);
  return data[index];
};

var wizards = [];
for (var i = 0; i < WIZARDS_NUMBER; i++) {
  wizards[i] = {
    name: randomData(NAMES) + ' ' + randomData(SURNAMES),
    coatColor: randomData(COAT_COLORS),
    eyesColor: randomData(EYES_COLORS)
  };
}

var similarWizardTemplate = document.querySelector('#similar-wizard-template')
  .content
  .querySelector('.setup-similar-item');

var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  return wizardElement;
};

var wizardElements = [];
for (i = 0; i < wizards.length; i++) {
  wizardElements[i] = renderWizard(wizards[i]);
}

var fillBlock = function (block, elements) {
  var fragment = document.createDocumentFragment();

  for (i = 0; i < elements.length; i++) {
    fragment.appendChild(elements[i]);
  }

  block.appendChild(fragment);
};

var similarListElement = userDialog.querySelector('.setup-similar-list');
fillBlock(similarListElement, wizardElements);

userDialog.querySelector('.setup-similar').classList.remove('hidden');

var setupOpen = document.querySelector('.setup-open');
var setupClose = userDialog.querySelector('.setup-close');

var onPopupEscPress = function (evt) {
  if (evt.keyCode === ESC_KEYCODE) {
    closePopup();
  }
};

var openPopup = function () {
  userDialog.classList.remove('hidden');
  document.addEventListener('keydown', onPopupEscPress);
};

var closePopup = function () {
  userDialog.classList.add('hidden');
  document.removeEventListener('keydown', onPopupEscPress);
};

setupOpen.addEventListener('click', openPopup);

setupOpen.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    openPopup();
  }
});

setupClose.addEventListener('click', closePopup);

setupClose.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    closePopup();
  }
});

var userNameInput = userDialog.querySelector('.setup-user-name');

userNameInput.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ESC_KEYCODE) {
    evt.stopPropagation();
  }
});

var wizardCoat = userDialog.querySelector('.setup-wizard .wizard-coat');
var wizardEyes = userDialog.querySelector('.setup-wizard .wizard-eyes');
var fireball = userDialog.querySelector('.setup-fireball-wrap');
var wizardCoatInput = userDialog.querySelector('[name=coat-color]');
var wizardEyesInput = userDialog.querySelector('[name=eyes-color]');
var fireballInput = userDialog.querySelector('[name=fireball-color]');

var changeColor = function (part, colors, input) {
  var color = randomData(colors);
  if (part === fireball) {
    part.style.backgroundColor = color;
  } else {
    part.style.fill = color;
  }
  input.value = color;
};

wizardCoat.addEventListener('click', function () {
  changeColor(wizardCoat, COAT_COLORS, wizardCoatInput);
});

wizardEyes.addEventListener('click', function () {
  changeColor(wizardEyes, EYES_COLORS, wizardEyesInput);
});

fireball.addEventListener('click', function () {
  changeColor(fireball, FIREBALL_COLORS, fireballInput);
});
