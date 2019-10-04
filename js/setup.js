'use strict';

(function () {
  var WIZARDS_NUMBER = 4;

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

  window.setup = {
    COAT_COLORS: [
      'rgb(101, 137, 164)',
      'rgb(241, 43, 107)',
      'rgb(146, 100, 161)',
      'rgb(56, 159, 117)',
      'rgb(215, 210, 55)',
      'rgb(0, 0, 0)'
    ],

    EYES_COLORS: [
      'black',
      'red',
      'blue',
      'yellow',
      'green'
    ],

    FIREBALL_COLORS: [
      '#ee4830',
      '#30a8ee',
      '#5ce6c0',
      '#e848d5',
      '#e6e848'
    ]
  };


  window.setup.userDialog = document.querySelector('.setup');
  var userDialog = window.setup.userDialog;

  window.setup.randomData = function (data) {
    var index = Math.floor(Math.random() * data.length);
    return data[index];
  };
  var randomData = window.setup.randomData;

  var wizards = [];
  for (var i = 0; i < WIZARDS_NUMBER; i++) {
    wizards[i] = {
      name: randomData(NAMES) + ' ' + randomData(SURNAMES),
      coatColor: randomData(window.setup.COAT_COLORS),
      eyesColor: randomData(window.setup.EYES_COLORS)
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
})();
