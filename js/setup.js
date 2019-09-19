'use strict';

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


var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

var randomData = function (data) {
  var index = Math.floor(Math.random() * data.length);
  return data[index];
};

var wizards = [{
  name: randomData(NAMES) + ' ' + randomData(SURNAMES),
  coatColor: randomData(COAT_COLORS),
  eyesColor: randomData(EYES_COLORS)
},
{
  name: randomData(NAMES) + ' ' + randomData(SURNAMES),
  coatColor: randomData(COAT_COLORS),
  eyesColor: randomData(EYES_COLORS)
},
{
  name: randomData(NAMES) + ' ' + randomData(SURNAMES),
  coatColor: randomData(COAT_COLORS),
  eyesColor: randomData(EYES_COLORS)
},
{
  name: randomData(NAMES) + ' ' + randomData(SURNAMES),
  coatColor: randomData(COAT_COLORS),
  eyesColor: randomData(EYES_COLORS)
}
];

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
for (var i = 0; i < wizards.length; i++) {
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
