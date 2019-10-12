'use strict';

(function () {
  var WIZARDS_NUMBER = 4;

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

  var similarWizardTemplate = document.querySelector('#similar-wizard-template')
    .content
    .querySelector('.setup-similar-item');

  var renderWizard = function (wizard) {
    var wizardElement = similarWizardTemplate.cloneNode(true);

    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.colorCoat;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.colorEyes;

    return wizardElement;
  };

  var onSuccess = function (wizards) {
    var wizardElements = [];

    for (var i = 0; i < WIZARDS_NUMBER; i++) {
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
  };

  var onError = function (errorMessage) {
    var node = document.createElement('div');
    node.style = 'z-index: 100; margin: 0 auto; text-align: center; background-color: red;';
    node.style.position = 'absolute';
    node.style.left = 0;
    node.style.right = 0;
    node.style.fontSize = '30px';

    node.textContent = errorMessage;
    document.body.insertAdjacentElement('afterbegin', node);
  };

  window.backend.load(onSuccess, onError);

  userDialog.querySelector('.setup-similar').classList.remove('hidden');
})();
