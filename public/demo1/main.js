(function() {
  var HEIGHT, SPEED, WIDTH, absolutelyCenter, camera, colors, init, initCamera, initCube, initRenderer, render, renderer, rotateCube, scene;

  scene = void 0;

  camera = void 0;

  renderer = void 0;

  WIDTH = window.innerWidth;

  HEIGHT = 400;

  SPEED = 0.009;

  colors = [
    {
      'color': 0x000000
    }, {
      'color': 0x000000
    }, {
      'color': 0x000066
    }, {
      'color': 0x000066
    }, {
      'color': 0x3333FF
    }, {
      'color': 0x3333FF
    }, {
      'color': 0x3399FF
    }, {
      'color': 0x3399FF
    }, {
      'color': 0x33FFFF
    }, {
      'color': 0x33FFFF
    }, {
      'color': 0xCCFFFF
    }, {
      'color': 0xCCFFFF
    }
  ];

  init = function() {
    scene = new THREE.Scene;
    initCube();
    initCamera();
    initRenderer();
    document.body.appendChild(renderer.domElement);
  };

  absolutelyCenter = function() {
    $(window).resize(function() {
      WIDTH = window.innerWidth;
      HEIGHT = 400;
      $('canvas').css({
        'width': WIDTH,
        'height': HEIGHT
      });
    });
  };

  initCamera = function() {
    var directionalLight;
    camera = new THREE.PerspectiveCamera(15, WIDTH / HEIGHT, 1, 10);
    camera.position.set(0, 3.5, 5);
    camera.lookAt(scene.position);
    directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
    directionalLight.position.set(0, 0, 5);
    scene.add(directionalLight);
  };

  initRenderer = function() {
    renderer = new THREE.CanvasRenderer;
    renderer.setSize(WIDTH, HEIGHT);
  };

  initCube = function() {
    var color, cube, geometry, i, material;
    geometry = new THREE.CubeGeometry(3, 5, 5);
    material = new THREE.MeshBasicMaterial({
      color: 0xe0e0e0,
      vertexColors: THREE.FaceColors
    });
    cube = new THREE.Mesh(geometry, material);
    scene.add(cube);
    i = 0;
    while (i < geometry.faces.length) {
      color = new THREE.Color(colors[i].color);
      geometry.faces[i].color = color;
      geometry.faces[i + 1].color = color;
      i += 2;
    }
  };

  rotateCube = function() {
    cube.rotation.x -= SPEED * 2;
    cube.rotation.y -= SPEED;
    cube.rotation.z -= SPEED * 1;
  };

  render = function() {
    requestAnimationFrame(render);
    rotateCube();
    renderer.render(scene, camera);
  };

  absolutelyCenter();

  init();

  render();

}).call(this);
