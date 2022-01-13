function Timer(callback, delay) {
  var timerId, start, remaining = delay;

  this.pause = function() {
      window.clearTimeout(timerId);
      remaining -= Date.now() - start;
  };

  this.resume = function() {
      start = Date.now();
      window.clearTimeout(timerId);
      timerId = window.setTimeout(callback, remaining);
  };

  this.resume();
}

var timer = new Timer(function() {
  alert("Done!");
}, 1000);

timer.pause();
// Do some stuff...
timer.resume();