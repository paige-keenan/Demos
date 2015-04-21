var scene, camera, renderer;

var WIDTH  = window.innerWidth;
var HEIGHT = window.innerHeight; 
var SPEED = 0.009;

var colors = [
    {
      "color" : 0xd53a32,
    },
    {
      "color" : 0xdfdfc4,
    },
    {
      "color" : 0x1d9099,
    },
    {
      "color" : 0xe59d12,
    },
    {
      "color" : 0xd53a32,
    },
    {
      "color" : 0xdfdfc4,
    },
    {
      "color" : 0x1d9099,
    },
    {
      "color" : 0xe59d12,
    },
    {
      "color" : 0xd53a32,
    },
    {
      "color" : 0xdfdfc4,
    },
    {
      "color" : 0x1d9099,
    },
    {
      "color" : 0xe59d12,
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
        HEIGHT = window.innerHeight;  
        $('canvas').css({'width': WIDTH, 'height': HEIGHT}); 
    });
};

function initCamera() { 
    camera = new THREE.PerspectiveCamera(90, WIDTH / HEIGHT, 1, 10);
    camera.position.set(0, 3.5, 5);
    camera.lookAt(scene.position);

    var directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
    directionalLight.position.set(0, 0, 5);
    scene.add(directionalLight);
};

function initRenderer() {
    renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(WIDTH, HEIGHT);
};

function initCube() {
    var geometry = new THREE.CubeGeometry(3, 5, 5);  
    var material = new THREE.MeshLambertMaterial({ wireframe: false}); 
    cube = new THREE.Mesh(geometry, material);
    scene.add(cube); 
    
    for (i=0; i < geometry.faces.length; i++) {
        // console.log(geometry.faces[i]);
        // console.log(colors[i].color);
        var color = new THREE.Color(colors[ i ].color);
        geometry.faces[ i ].color = color;
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






