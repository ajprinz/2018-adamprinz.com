
import { STLLoader } from './STLLoader.js';


let container, stats;

let camera, cameraTarget, scene, renderer;

init();
animate();

function init() {

	var nord_palette = {
		polar_night_a: 0x2E3440,
		polar_night_b: 0x3B4252,
		polar_night_c: 0x434C5E,
		polar_night_d: 0x4C566A,
		snow_storm_a: 0xD8DEE9,
		snow_storm_b: 0xE5E9F0,
		snow_storm_c: 0xECEFF4,
	};

/*
	var palette = {
		purple: 0xc377e0,
		lavender: 0xbe93d4,
		pink: 0xfa32cc,
		white: 0xf5f5f5,
	};
*/
	container = document.createElement( 'div' );
	document.body.appendChild( container );

	camera = new THREE.PerspectiveCamera( 35, window.innerWidth / window.innerHeight, 1, 15 );
	camera.position.set( 3, 0.15, 3 );

	cameraTarget = new THREE.Vector3( 0, - 0.25, 0 );

	scene = new THREE.Scene();
	scene.background = new THREE.Color( nord_palette.snow_storm_b );
	scene.fog = new THREE.Fog( nord_palette.snow_storm_b, 3, 13 );

	// Ground

	const plane = new THREE.Mesh(
		new THREE.PlaneBufferGeometry( 40, 40 ),
		new THREE.MeshPhongMaterial( { color: nord_palette.snow_storm_c, specular: 0x101010, shininess: 0 } )
	);
	plane.rotation.x = - Math.PI / 2;
	plane.position.y = - 0.5;
	scene.add( plane );

	plane.receiveShadow = true;


	// Monitor when models have loaded and remove loading screen
	const loadingManager = new THREE.LoadingManager( () => {
	// Loading screen aka preloader
	const loadingScreen = document.getElementById( 'loading-screen' );
	loadingScreen.classList.add( 'fade-out' );

	const header = document.querySelector( 'header' );
	header.classList.add( 'fade-in' );

	const sectionOne = document.getElementById( 'Intro' );
	sectionOne.classList.add( 'fade-in' );

	// Remove loader from DOM via event listener
	loadingScreen.addEventListener( 'transitionend', onTransitionEnd );

	});


	// Load 3D models

	const loader = new STLLoader(loadingManager);

	// Load the knight
	loader.load( '../static/assets/img/Knight.STL', function ( geometry ) {

		const material = new THREE.MeshPhongMaterial( { color: nord_palette.snow_storm_c, specular: 0xffffff, shininess: 0 } );
		const mesh = new THREE.Mesh( geometry, material );

		mesh.position.set( 0, -0.63, 0 );
		mesh.rotation.set( -45.5, 0, 0 );
		mesh.scale.set( 0.015, 0.015, 0.015 );

		mesh.castShadow = true;
		mesh.receiveShadow = true;

		scene.add( mesh );

	} );

	// Load beast-1
	loader.load( '../static/assets/img/Drag_V1_body.stl', function ( geometry ) {

		const material = new THREE.MeshPhongMaterial( { color: nord_palette.snow_storm_a, specular: 0x111111, shininess: 20 } );
		const mesh = new THREE.Mesh( geometry, material );

		mesh.position.set( 0, -0.52, 8 );
		mesh.rotation.set( 0, 9, 0 );
		mesh.scale.set( 0.035, 0.035, 0.035 );

		mesh.castShadow = true;
		mesh.receiveShadow = true;

		scene.add( mesh );

	} );

	// Load beast-1 -> wing-left
	loader.load( '../static/assets/img/Drag_V1_wing_left.stl', function ( geometry ) {

		const material = new THREE.MeshPhongMaterial( { color: nord_palette.snow_storm_a, specular: 0x111111, shininess: 20 } );
		const mesh = new THREE.Mesh( geometry, material );

		mesh.position.set( 0, -0.52, 8 );
		mesh.rotation.set( 0, 9, 0 );
		mesh.scale.set( 0.035, 0.035, 0.035 );

		mesh.castShadow = true;
		mesh.receiveShadow = true;

		scene.add( mesh );

	} );

	// Load beast-1 -> wing-right
	loader.load( '../static/assets/img/Drag_V1_wing_right.stl', function ( geometry ) {

		const material = new THREE.MeshPhongMaterial( { color: nord_palette.snow_storm_a, specular: 0x111111, shininess: 20 } );
		const mesh = new THREE.Mesh( geometry, material );

		mesh.position.set( 0, -0.52, 8 );
		mesh.rotation.set( 0, 9, 0 );
		mesh.scale.set( 0.035, 0.035, 0.035 );

		mesh.castShadow = true;
		mesh.receiveShadow = true;

		scene.add( mesh );

	} );

	// Load beast-2
	loader.load( '../static/assets/img/Drag_V2_body.stl', function ( geometry ) {

		const material = new THREE.MeshPhongMaterial( { color: nord_palette.snow_storm_a, specular: 0x111111, shininess: 20 } );
		const mesh = new THREE.Mesh( geometry, material );

		mesh.position.set( -5.75, 0, 4 );
		mesh.rotation.set( 0, 8.1, 0 );
		mesh.scale.set( 0.035, 0.035, 0.035 );

		mesh.castShadow = true;
		mesh.receiveShadow = true;

		scene.add( mesh );

	} );

	// Load beast-2 -> wing-left
	loader.load( '../static/assets/img/Drag_V2_wing_left.stl', function ( geometry ) {

		const material = new THREE.MeshPhongMaterial( { color: nord_palette.snow_storm_a, specular: 0x111111, shininess: 20 } );
		const mesh = new THREE.Mesh( geometry, material );

		mesh.position.set( -5.75, 0, 4 );
		mesh.rotation.set( 0, 8.1, 0 );
		mesh.scale.set( 0.035, 0.035, 0.035 );

		mesh.castShadow = true;
		mesh.receiveShadow = true;

		scene.add( mesh );

	} );

	// Load beast-2 -> wing-right
	loader.load( '../static/assets/img/Drag_V2_wing_right.stl', function ( geometry ) {

		const material = new THREE.MeshPhongMaterial( { color: nord_palette.snow_storm_a, specular: 0x111111, shininess: 20 } );
		const mesh = new THREE.Mesh( geometry, material );

		mesh.position.set( -5.75, 0, 4 );
		mesh.rotation.set( 0, 8.1, 0 );
		mesh.scale.set( 0.035, 0.035, 0.035 );

		mesh.castShadow = true;
		mesh.receiveShadow = true;

		scene.add( mesh );

	} );


	// Lights
	scene.add( new THREE.HemisphereLight( 0xffffff, nord_palette.snow_storm_c, 0.25) );
	addDirectionalLight( 1, 1, 1, nord_palette.snow_storm_c, 0.65 );
	addDirectionalLight( 0.5, 1, - 1, nord_palette.snow_storm_c, 0.5 );


	// renderer

	renderer = new THREE.WebGLRenderer( { antialias: true } );
	renderer.setPixelRatio( window.devicePixelRatio );
	renderer.setSize( window.innerWidth, window.innerHeight );
	renderer.outputEncoding = THREE.sRGBEncoding;

	renderer.shadowMap.enabled = true;

	container.appendChild( renderer.domElement );

	//

	window.addEventListener( 'resize', onWindowResize, false );

}

function addDirectionalLight( x, y, z, color, intensity ) {

	const directionalLight = new THREE.DirectionalLight( color, intensity );
	directionalLight.position.set( x, y, z );
	scene.add( directionalLight );

	directionalLight.castShadow = true;

	const d = 10;
	directionalLight.shadow.camera.left = - d;
	directionalLight.shadow.camera.right = d;
	directionalLight.shadow.camera.top = d;
	directionalLight.shadow.camera.bottom = - d;

	directionalLight.shadow.camera.near = 1;
	directionalLight.shadow.camera.far = 10;

	directionalLight.shadow.bias = - 0.002;

}

function addPointLight( x, y, z, color, intensity ) {

	const pointLight = new THREE.PointLight( color, intensity );
	pointLight.position.set( x, y, z );
	scene.add( pointLight );

	pointLight.castShadow = true;


	const d = 1000;
	pointLight.shadow.camera.left = - d;
	pointLight.shadow.camera.right = d;
	pointLight.shadow.camera.top = d;
	pointLight.shadow.camera.bottom = - d;

	pointLight.shadow.camera.near = 10;
	pointLight.shadow.camera.far = 10;

	pointLight.shadow.bias = - 0.002;

}

function onWindowResize() {

	camera.aspect = window.innerWidth / window.innerHeight;
	camera.updateProjectionMatrix();

	renderer.setSize( window.innerWidth, window.innerHeight );

}

// Remove the loading screen and animation
function onTransitionEnd( event ) {

	const element = event.target;
	element.remove();

}

function animate() {

	requestAnimationFrame( animate );

	render();

}

function render() {

	renderer.render( scene, camera );

}


// GreenSock ScrollTrigger
// On scroll action to change camera position

gsap.registerPlugin(ScrollTrigger);

	// Starting camera position
	scene.rotation.set(0, -1, 0)
	camera.position.set(-0.5, 0.5, 4)

	let camera_anim = gsap.timeline()


	// Camera Postion A

	camera_anim.to(scene.rotation, {y: 3.7, ease: "power1.inOut", scrollTrigger: {

		trigger: ".section-one",
		scrub: 1,

		endTrigger: ".section-three",
		end: "top",

	}})


	//Camera Postion B

	/*
	// Commented out for tweening issues
	camera_anim.to(scene.rotation, {y: 7, ease: "power1.inOut", scrollTrigger: {

		trigger: ".section-five",
		scrub: 1,

		endTrigger: ".section-six",
		end: "top",

	}})
	*/

	camera_anim.to(camera.position, {x: 0, y: 11, z: -1.75, ease: "power1.inOut", scrollTrigger: {

		trigger: ".section-five",
		scrub: 1,

		endTrigger: ".section-six",
		end: "top",

	}})

	camera_anim.to(camera.rotation, {x: -1.5, y: 0, z: 0, ease: "power1.inOut", scrollTrigger: {

		trigger: ".section-five",
		scrub: 1,

		endTrigger: ".section-six",
		end: "top",

	}})

	//Camera Postion C

	/*
	// Commented out for tweening issues
	camera_anim.to(scene.rotation, {y: 8, ease: "power1.inOut", scrollTrigger: {

		trigger: ".section-eight",
		scrub: 1,

		endTrigger: ".section-nine",
		end: "top",

	}})

	camera_anim.to(camera.position, {x: 1.35, y: 1.1, z: 2.8, ease: "power1.inOut", scrollTrigger: {

		trigger: ".section-eight",
		scrub: 1,

		endTrigger: ".section-nine",
		end: "top",

	}})
*/

	camera_anim.to(camera.rotation, {x: 1, y: 0, z: 0, ease: "power1.inOut", scrollTrigger: {

		trigger: ".section-eight",
		scrub: 1,

		endTrigger: ".section-nine",
		end: "top",

	}})
