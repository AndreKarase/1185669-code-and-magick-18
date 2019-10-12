'use strict';

(function () {
  var RECEIVE_URL = 'https://js.dump.academy/code-and-magick/data';
  var TRANSMIT_URL = 'https://js.dump.academy/code-and-magick';

  window.backend = {
    load: function (onSuccess, onError) {
      var xhr = new XMLHttpRequest();
      xhr.responseType = 'json';

      xhr.addEventListener('load', function () {
        if (xhr.status === 200) {
          onSuccess(xhr.response);
        } else {
          onError('Статус ответа: ' + xhr.status + ' ' + xhr.statusText);
        }
      });

      xhr.addEventListener('error', function () {
        onError('Произошла ошибка соединения');
      });

      xhr.addEventListener('timeout', function () {
        onError('Запрос не успел выполниться за ' + xhr.timeout + ' мс');
      });

      xhr.timeout = 10000;

      xhr.open('GET', RECEIVE_URL);
      xhr.send();
    },

    save: function (data, onSuccess) {
      var xhr = new XMLHttpRequest();
      xhr.responseType = 'json';

      xhr.addEventListener('load', function () {
        onSuccess();
      });

      xhr.open('POST', TRANSMIT_URL);
      xhr.send(data);
    }
  };
})();
