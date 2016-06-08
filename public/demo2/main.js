(function() {
  (function() {
    var create_particles, init, renderer, stage, texture;
    renderer = PIXI.autoDetectRenderer(window.innerWidth - 4, window.innerHeight - 4, {
      transparent: true
    });
    stage = new PIXI.Container;
    texture = PIXI.Texture.fromImage('ice-cream.svg');
    create_particles = function() {
      var star;
      star = new PIXI.Sprite(texture);
      star.width = 10 + Math.random() * 30;
      star.height = 10 + Math.random() * 30;
      star.anchor.x = 0.5;
      star.anchor.y = 0.5;
      stage.addChild(star);
    };
    init = function() {
      var i;
      i = 0;
      while (i < 100) {
        create_particles();
        i++;
      }
    };
    document.body.appendChild(renderer.view);
    init();
  })();

}).call(this);
