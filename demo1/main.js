var scene, camera, renderer;

var WIDTH  = window.innerWidth;
var HEIGHT = 400; 
var SPEED = 0.009;

var colors = [
    {
      "color" : 0x000000,
    },
    {
      "color" : 0x000000,
    },
    {
      "color" : 0x000066,
    },
    {
      "color" : 0x000066,
    },
    {
      "color" : 0x3333FF,
    },
    {
      "color" : 0x3333FF,
    },
    {
      "color" : 0x3399FF,
    },
    {
      "color" : 0x3399FF,
    }, 
    {
      "color" : 0x33FFFF,
    },
    {
      "color" : 0x33FFFF,
    },
    {
      "color" : 0xCCFFFF,
    },
    {
      "color" : 0xCCFFFF,
    }              

];

function init() {
    scene = new THREE.Scene(); 

    initCube();
    initCamera();
    initRenderer();

    document.body.appendChild(renderer.domElement);
};

function absolutelyCenter() {
    // When user resizes window, Adjust viewport accordingly.
    $(window).resize(function() {
        WIDTH  = window.innerWidth;
        HEIGHT = 400;  
        $('canvas').css({'width': WIDTH, 'height': HEIGHT}); 
    });
};

function initCamera() { 
    camera = new THREE.PerspectiveCamera(15, WIDTH / HEIGHT, 1, 10);
    camera.position.set(0, 3.5, 5);
    camera.lookAt(scene.position);

    var directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
    directionalLight.position.set(0, 0, 5);
    scene.add(directionalLight);
};

function initRenderer() {
    renderer = new THREE.CanvasRenderer();
    renderer.setSize(WIDTH, HEIGHT);
};

function initCube() {
    var geometry = new THREE.CubeGeometry(3, 5, 5);  
    var material = new THREE.MeshBasicMaterial({ color: 0xe0e0e0, vertexColors: THREE.FaceColors}); 
    cube = new THREE.Mesh(geometry, material);
    scene.add(cube); 
    
    // Grab colors from Color object and set face of cube.
    for (i=0; i < geometry.faces.length; i+=2) {
        var color = new THREE.Color(colors[ i ].color);
        geometry.faces[ i ].color = color;
        geometry.faces[ i + 1].color = color;
    };
};

function rotateCube() {
    cube.rotation.x -= SPEED * 2;
    cube.rotation.y -= SPEED;
    cube.rotation.z -= SPEED * 1;
};

function render() {
    requestAnimationFrame(render);
    rotateCube();
    renderer.render(scene, camera);
};

absolutelyCenter();
init();
render();