do ->
  renderer = PIXI.autoDetectRenderer(window.innerWidth - 4, window.innerHeight - 4, transparent: true)
  stage = new (PIXI.Container)
  texture = PIXI.Texture.fromImage('ice-cream.svg')

  create_particles = ->
    star = new (PIXI.Sprite)(texture)
    star.width = 10 + Math.random() * 30
    star.height = 10 + Math.random() * 30
    star.anchor.x = 0.5
    star.anchor.y = 0.5
    stage.addChild star
    return

  init = ->
    # Place 100 images into the scene
    i = 0
    while i < 100
      create_particles()
      i++
    return

  document.body.appendChild renderer.view
  init()
  return
