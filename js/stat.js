'use strict';

(function () {
  var CLOUD_X = 100;
  var CLOUD_Y = 10;
  var CLOUD_WIDTH = 420;
  var CLOUD_HEIGHT = 270;
  var GAP = 10;
  var FONT_GAP = 16;
  var MAX_BAR_HEIGHT = 150;
  var BAR_WIDTH = 40;
  var BAR_GAP = 50;

  var renderCloud = function (ctx, x, y, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
  };

  var getMaxElement = function (arr) {
    var maxElement = arr[0];

    for (var i = 0; i < arr.length; i++) {
      if (arr[i] > maxElement) {
        maxElement = arr[i];
      }
    }

    return maxElement;
  };

  window.renderStatistics = function (ctx, names, times) {
    renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
    renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

    ctx.font = '16px PT Mono';
    ctx.fillStyle = '#000';
    ctx.fillText('Ура вы победили!', CLOUD_X + GAP, CLOUD_Y + GAP + FONT_GAP);
    ctx.fillText('Список результатов:', CLOUD_X + GAP, CLOUD_Y + GAP + 2 * FONT_GAP);

    var maxTime = getMaxElement(times);

    for (var i = 0; i < names.length; i++) {
      ctx.fillText(names[i], CLOUD_X + GAP + (BAR_WIDTH + BAR_GAP) * i, CLOUD_Y + CLOUD_HEIGHT - GAP);

      var barHeight = times[i] * MAX_BAR_HEIGHT / maxTime;
      ctx.fillStyle = (names[i] === 'Вы' ? 'rgba(255, 0, 0, 1)' : 'hsl(240,' + Math.random() * 100 + '%, 50%)');
      ctx.fillRect(CLOUD_X + GAP + (BAR_WIDTH + BAR_GAP) * i, CLOUD_Y + CLOUD_HEIGHT - GAP - FONT_GAP - barHeight, BAR_WIDTH, barHeight);

      ctx.fillStyle = '#000';
      ctx.fillText(Math.floor(times[i]), CLOUD_X + GAP + (BAR_WIDTH + BAR_GAP) * i, CLOUD_Y + CLOUD_HEIGHT - GAP - FONT_GAP - barHeight - GAP);
    }
  };
})();
