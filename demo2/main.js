(function() {
	var scene = new THREE.Scene();
	var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
	var renderer = new THREE.WebGLRenderer();

	renderer.setSize( window.innerWidth, window.innerHeight );
	document.body.appendChild(renderer.domElement);

	function init() {
		create_geometry();
		render();
	}

	// Create a hollow cyclinder shape
	function create_geometry() {
		var geometry = new THREE.TorusGeometry(50, 15, 10, 50, Math.PI * 2);
		var material = create_material(geometry);
		var torus = new THREE.Mesh(geometry, material);
		scene.add(torus);
		camera.position.x = -50;
        camera.position.y = 50;
        camera.position.z = 100;
        camera.lookAt(new THREE.Vector3(0, 0, 0));
	}

	function render() {
		requestAnimationFrame( render );
		renderer.render( scene, camera );
	}

	// Materials (design) of shape
	function create_material(geometry) {
		var color = 0xe0e0e0;
		var meshMaterial = new THREE.MeshBasicMaterial({color: color, wireframe: true});
		return meshMaterial;
	}

	init();

})();




		