(function() {

  var renderer = PIXI.autoDetectRenderer(window.innerWidth-4, window.innerHeight-4, {transparent: true});
  var stage = new PIXI.Container();
  var texture = PIXI.Texture.fromImage('ice-cream.svg');
  
  document.body.appendChild(renderer.view);

  function create_particles() {
    var star = new PIXI.Sprite(texture);
    star.width = 10 + Math.random()*30;
    star.height = 10 + Math.random()*30;
    star.anchor.x = 0.5;
    star.anchor.y = 0.5;
        
    stage.addChild(star);
    
  }

  function init() {
    // Place 100 images into the scene
    for (var i = 0; i < 100; i++) {
      create_particles();
    }
  }

  init();


})();