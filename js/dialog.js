'use strict';

(function () {
  var ESC_KEYCODE = 27;
  var ENTER_KEYCODE = 13;

  var setupOpen = document.querySelector('.setup-open');
  var userDialog = window.setup.userDialog;
  var setupClose = userDialog.querySelector('.setup-close');

  var onPopupEscPress = function (evt) {
    if (evt.keyCode === ESC_KEYCODE) {
      closePopup();
    }
  };

  var openPopup = function () {
    userDialog.classList.remove('hidden');

    dialogCoords = {
      x: userDialog.offsetLeft,
      y: userDialog.offsetTop
    };

    document.addEventListener('keydown', onPopupEscPress);
  };

  var closePopup = function () {
    userDialog.classList.add('hidden');
    userDialog.style.left = dialogCoords.x + 'px';
    userDialog.style.top = dialogCoords.y + 'px';
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
    var color = window.setup.randomData(colors);
    if (part === fireball) {
      part.style.backgroundColor = color;
    } else {
      part.style.fill = color;
    }
    input.value = color;
  };

  wizardCoat.addEventListener('click', function () {
    changeColor(wizardCoat, window.setup.COAT_COLORS, wizardCoatInput);
  });

  wizardEyes.addEventListener('click', function () {
    changeColor(wizardEyes, window.setup.EYES_COLORS, wizardEyesInput);
  });

  fireball.addEventListener('click', function () {
    changeColor(fireball, window.setup.FIREBALL_COLORS, fireballInput);
  });

  var dialogCoords;
  var dialogHandle = userDialog.querySelector('.upload');

  dialogHandle.addEventListener('mousedown', function (evt) {
    evt.preventDefault();

    var startCoords = {
      x: evt.clientX,
      y: evt.clientY
    };

    var dragged = false;

    var onMouseMove = function (moveEvt) {
      moveEvt.preventDefault();
      dragged = true;

      var shift = {
        x: moveEvt.clientX - startCoords.x,
        y: moveEvt.clientY - startCoords.y
      };

      startCoords = {
        x: moveEvt.clientX,
        y: moveEvt.clientY
      };

      userDialog.style.left = (userDialog.offsetLeft + shift.x) + 'px';
      userDialog.style.top = (userDialog.offsetTop + shift.y) + 'px';
    };

    var onMouseUp = function (upEvt) {
      upEvt.preventDefault();

      if (dragged) {
        var onClickPreventDefault = function (clickEvt) {
          clickEvt.preventDefault();
          dialogHandle.removeEventListener('click', onClickPreventDefault);
        };

        dialogHandle.addEventListener('click', onClickPreventDefault);
      }

      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);
    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
  });
})();
