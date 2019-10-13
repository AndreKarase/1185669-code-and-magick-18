'use strict';

(function () {
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

  var wizard = {
    onEyesChange: function () {},
    onCoatChange: function () {}
  };

  var getRandomData = function (data) {
    var index = Math.floor(Math.random() * data.length);
    return data[index];
  };

  var userDialog = document.querySelector('.setup');
  var wizardCoat = userDialog.querySelector('.setup-wizard .wizard-coat');
  var wizardEyes = userDialog.querySelector('.setup-wizard .wizard-eyes');
  var fireball = userDialog.querySelector('.setup-fireball-wrap');
  var wizardCoatInput = userDialog.querySelector('[name=coat-color]');
  var wizardEyesInput = userDialog.querySelector('[name=eyes-color]');
  var fireballInput = userDialog.querySelector('[name=fireball-color]');

  var changeColor = function (part, colors, input) {
    var color = getRandomData(colors);
    if (part === fireball) {
      part.style.backgroundColor = color;
    } else {
      part.style.fill = color;
    }
    input.value = color;
    return color;
  };

  wizardCoat.addEventListener('click', function () {
    var newColor = changeColor(wizardCoat, COAT_COLORS, wizardCoatInput);
    wizard.onCoatChange(newColor);
  });

  wizardEyes.addEventListener('click', function () {
    var newColor = changeColor(wizardEyes, EYES_COLORS, wizardEyesInput);
    wizard.onEyesChange(newColor);
  });

  fireball.addEventListener('click', function () {
    changeColor(fireball, FIREBALL_COLORS, fireballInput);
  });

  window.wizard = wizard;
})();
