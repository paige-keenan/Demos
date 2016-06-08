scene = undefined
camera = undefined
renderer = undefined
WIDTH = window.innerWidth
HEIGHT = 400
SPEED = 0.009
colors = [
  { 'color': 0x000000 }
  { 'color': 0x000000 }
  { 'color': 0x000066 }
  { 'color': 0x000066 }
  { 'color': 0x3333FF }
  { 'color': 0x3333FF }
  { 'color': 0x3399FF }
  { 'color': 0x3399FF }
  { 'color': 0x33FFFF }
  { 'color': 0x33FFFF }
  { 'color': 0xCCFFFF }
  { 'color': 0xCCFFFF }
]

init = ->
  scene = new (THREE.Scene)
  initCube()
  initCamera()
  initRenderer()
  document.body.appendChild renderer.domElement
  return

absolutelyCenter = ->
  # When user resizes window, Adjust viewport accordingly.
  $(window).resize ->
    WIDTH = window.innerWidth
    HEIGHT = 400
    $('canvas').css
      'width': WIDTH
      'height': HEIGHT
    return
  return

initCamera = ->
  camera = new (THREE.PerspectiveCamera)(15, WIDTH / HEIGHT, 1, 10)
  camera.position.set 0, 3.5, 5
  camera.lookAt scene.position
  directionalLight = new (THREE.DirectionalLight)(0xffffff, 0.5)
  directionalLight.position.set 0, 0, 5
  scene.add directionalLight
  return

initRenderer = ->
  renderer = new (THREE.CanvasRenderer)
  renderer.setSize WIDTH, HEIGHT
  return

initCube = ->
  geometry = new (THREE.CubeGeometry)(3, 5, 5)
  material = new (THREE.MeshBasicMaterial)(
    color: 0xe0e0e0
    vertexColors: THREE.FaceColors)
  cube = new (THREE.Mesh)(geometry, material)
  scene.add cube
  # Grab colors from Color object and set face of cube.
  i = 0
  while i < geometry.faces.length
    color = new (THREE.Color)(colors[i].color)
    geometry.faces[i].color = color
    geometry.faces[i + 1].color = color
    i += 2
  return

rotateCube = ->
  cube.rotation.x -= SPEED * 2
  cube.rotation.y -= SPEED
  cube.rotation.z -= SPEED * 1
  return

render = ->
  requestAnimationFrame render
  rotateCube()
  renderer.render scene, camera
  return

absolutelyCenter()
init()
render()
