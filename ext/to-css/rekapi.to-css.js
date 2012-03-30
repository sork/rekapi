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
    var actorIds = this.getActorIds();

    var serializedFrame = [];

    _.each(actorIds, function (id) {
      serializedFrame.push(serializeActorState(this.getActor(id)));
    }, this);

    console.log(serializedFrame.join('\n'));
  };

} (this.Rekapi, this.Mustache, this));
