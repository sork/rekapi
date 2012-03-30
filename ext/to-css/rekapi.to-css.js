;(function (Rekapi, Mustache, global) {

  // CONSTANTS
  var DEFAULT_GRANULARITY = 100;


  // TEMPLATES
  var KEYFRAME_TEMPLATE = [].join();


  function serializeActorState (actor) {
    var serializedProps = ['{'];
    _.each(actor.get(), function (val, key) {
      serializedProps.push(key + ':' + val + ';');
    });

    serializedProps.push('}');
    return serializedProps.join('');
  };


  Rekapi.prototype.toCSS = function (opts) {
    var actorIds = this.getActorIds();

    _.each(actorIds, function (id) {
      this.getActor(id).toCSS();
    }, this);
  };


  Rekapi.Actor.prototype.toCSS = function (opts) {
    opts = opts || {};
    var animLength = this.kapi.animationLength();
    var i = 0;
    var granularity = opts.granularity || DEFAULT_GRANULARITY;
    var serializedFrames = [];
    var percent;

    for (i; i <= animLength; i += animLength / granularity) {
      this.calculatePosition(i);
      percent = ((i * granularity) / animLength);
      serializedFrames.push(percent + '% ' + serializeActorState(this));
    }

    console.log(serializedFrames.join('\n'));
  };

} (this.Rekapi, this.Mustache, this));
