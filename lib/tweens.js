$(function () {
  var canvas = $('canvas')[0];
  var kapi = new Kapi(canvas, {
    'fps': 60
    ,'height': 400
    ,'width': 500
  });
  kapi.canvas_style('background', '#eee');

  $('.crosshair').draggable({
    'containment': 'parent'
  });
});
