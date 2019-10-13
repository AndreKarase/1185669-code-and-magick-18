'use strict';

(function () {

  var WIZARDS_NUMBER = 4;
  var similarListElement = document.querySelector('.setup-similar-list');
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

  window.render = function (wizards) {

    var wizardElements = [];
    var takeNumber = wizards.length > WIZARDS_NUMBER ? WIZARDS_NUMBER : wizards.length;
    similarListElement.innerHTML = '';

    for (var i = 0; i < takeNumber; i++) {
      wizardElements[i] = renderWizard(wizards[i]);
    }

    var fillBlock = function (block, elements) {
      var fragment = document.createDocumentFragment();

      for (i = 0; i < elements.length; i++) {
        fragment.appendChild(elements[i]);
      }

      block.appendChild(fragment);
    };

    fillBlock(similarListElement, wizardElements);
  };
})();
