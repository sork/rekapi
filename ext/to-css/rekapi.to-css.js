;(function (Rekapi, Mustache, global) {

  var KEYFRAME_TEMPLATE = [].join();

  function serializeActorState (actor) {
    var serializedProps = ['{'];
    _.each(actor.get(), function (val, key) {
      serializedProps.push(key + ': ' + val + ';');
    });

    serializedProps.push('}');
    return serializedProps.join('');
  };

  Rekapi.prototype.toCSS = function (opts) {
    //var timeline = this.exportTimeline();
    var actorIds = this.getActorIds();
    var serialized = serializeActorState(this.getActor(actorIds[0]));
    console.log(serialized);
  };

} (this.Rekapi, this.Mustache, this));
