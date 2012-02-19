$(function () {
  var canvas = $('canvas')[0];
  var kapi = new Kapi(canvas, {
    'fps': 60
    ,'height': 500
    ,'width': 400
  });
  kapi.canvas_style('background', '#eee');
});
