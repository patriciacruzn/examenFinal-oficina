
var camera, scene, renderer;
var cameraControls;
var clock = new THREE.Clock();
var ambientLight, light;

var keyboard={};

function init() {
	var canvasWidth = window.innerWidth * 1;
	var canvasHeight = window.innerHeight * 1;

	// CAMERA

	camera = new THREE.PerspectiveCamera( 120, window.innerWidth / window.innerHeight, 1, 80000 );
	camera.position.set(0,0.5,2);
	camera.lookAt(0,0,0);
	camera.scale.x=0.2;
	camera.scale.y=0.2;
	camera.scale.z=0.2;	

	// LIGHTS

	light = new THREE.DirectionalLight( 0xFFFFFF, 0.7 );
	light.position.set( 1, 1, 1 );
	light.target.position.set(0, 0, 0);
	light.target.updateMatrixWorld()

	var ambientLight = new THREE.AmbientLight( 0x111111 );

	// RENDERER
	renderer = new THREE.WebGLRenderer( { antialias: true } );
	renderer.setSize( canvasWidth, canvasHeight );
	renderer.setClearColor( 0x681F68, 1.0 );

	renderer.gammaInput = true;
	renderer.gammaOutput = true;

	// Add to DOM
	var container = document.getElementById('container');
	container.appendChild( renderer.domElement );

	// CONTROLS
	cameraControls = new THREE.OrbitControls( camera, renderer.domElement );
	cameraControls.target.set(0, 0, 0);

	//limites
	//piso 
	var piso=new THREE.Geometry();
	piso.vertices.push(new THREE.Vector3(-2,-1,2));
	piso.vertices.push(new THREE.Vector3(2,-1,2));
	piso.vertices.push(new THREE.Vector3(2,-0.9,2));
	piso.vertices.push(new THREE.Vector3(-2,-0.9,2));

	piso.vertices.push(new THREE.Vector3(-2,-0.9,-2));
	piso.vertices.push(new THREE.Vector3(2,-0.9,-2));
	piso.vertices.push(new THREE.Vector3(2,-1,-2));
	piso.vertices.push(new THREE.Vector3(-2,-1,-2));

	piso.vertices.push(new THREE.Vector3(-2,-1,-2));
	piso.vertices.push(new THREE.Vector3(-2,-1,2));
	piso.vertices.push(new THREE.Vector3(-2,-0.9,2));
	piso.vertices.push(new THREE.Vector3(-2,-0.9,-2));

	piso.vertices.push(new THREE.Vector3(2,-1,2));
	piso.vertices.push(new THREE.Vector3(2,-1,-2));
	piso.vertices.push(new THREE.Vector3(2,-0.9,-2));
	piso.vertices.push(new THREE.Vector3(2,-0.9,2));

	piso.vertices.push(new THREE.Vector3(-2,-1,-2));
	piso.vertices.push(new THREE.Vector3(2,-1,-2));
	piso.vertices.push(new THREE.Vector3(2,-1,2));
	piso.vertices.push(new THREE.Vector3(-2,-1,2));

	piso.vertices.push(new THREE.Vector3(-2,-0.9,2));
	piso.vertices.push(new THREE.Vector3(2,-0.9,2));
	piso.vertices.push(new THREE.Vector3(2,-0.9,-2));
	piso.vertices.push(new THREE.Vector3(-2,-0.9,-2));


	piso.faces.push( new THREE.Face3( 0, 1, 2) );
	piso.faces.push( new THREE.Face3(0,2,3) );
	piso.faces.push( new THREE.Face3( 4,5,6));
	piso.faces.push( new THREE.Face3( 4,6,7));
	piso.faces.push( new THREE.Face3( 8,9,10));
	piso.faces.push( new THREE.Face3( 8,10,11));
	piso.faces.push( new THREE.Face3( 12,13,14));
	piso.faces.push( new THREE.Face3( 12,14,15));
	piso.faces.push( new THREE.Face3( 16,17,18));
	piso.faces.push( new THREE.Face3( 16,18,19));
	piso.faces.push( new THREE.Face3( 20,21,22));
	piso.faces.push( new THREE.Face3( 20,22,23));
	//pared1
	var pared1=new THREE.Geometry();
	pared1.vertices.push(new THREE.Vector3(-2,-0.9,2));
	pared1.vertices.push(new THREE.Vector3(-2.1,-0.9,2));
	pared1.vertices.push(new THREE.Vector3(-2.1,2,2));
	pared1.vertices.push(new THREE.Vector3(-2,2,2));

	pared1.vertices.push(new THREE.Vector3(-2,2,-2));
	pared1.vertices.push(new THREE.Vector3(-2.1,2,-2));
	pared1.vertices.push(new THREE.Vector3(-2.1,-0.9,-2));
	pared1.vertices.push(new THREE.Vector3(-2,-0.9,-2));

	pared1.vertices.push(new THREE.Vector3(-2,-0.9,-2));
	pared1.vertices.push(new THREE.Vector3(-2,-0.9,2));
	pared1.vertices.push(new THREE.Vector3(-2,2,2));
	pared1.vertices.push(new THREE.Vector3(-2,2,-2));

	pared1.vertices.push(new THREE.Vector3(-2.1,-0.9,2));
	pared1.vertices.push(new THREE.Vector3(-2.1,-0.9,-2));
	pared1.vertices.push(new THREE.Vector3(-2.1,2,-2));
	pared1.vertices.push(new THREE.Vector3(-2.1,2,2));

	pared1.vertices.push(new THREE.Vector3(-2,-0.9,-2));
	pared1.vertices.push(new THREE.Vector3(-2.1,-0.9,-2));
	pared1.vertices.push(new THREE.Vector3(-2.1,-0.9,2));
	pared1.vertices.push(new THREE.Vector3(-2,-0.9,2));

	pared1.vertices.push(new THREE.Vector3(-2,2,2));
	pared1.vertices.push(new THREE.Vector3(-2.1,2,2));
	pared1.vertices.push(new THREE.Vector3(-2.1,2,-2));
	pared1.vertices.push(new THREE.Vector3(-2,2,-2));
	
	pared1.faces.push( new THREE.Face3( 0, 1, 2) );
	pared1.faces.push( new THREE.Face3(0,2,3) );
	pared1.faces.push( new THREE.Face3( 4,5,6));
	pared1.faces.push( new THREE.Face3( 4,6,7));
	pared1.faces.push( new THREE.Face3( 8,9,10));
	pared1.faces.push( new THREE.Face3( 8,10,11));
	pared1.faces.push( new THREE.Face3( 12,13,14));
	pared1.faces.push( new THREE.Face3( 12,14,15));
	pared1.faces.push( new THREE.Face3( 16,17,18));
	pared1.faces.push( new THREE.Face3( 16,18,19));
	pared1.faces.push( new THREE.Face3( 20,21,22));
	pared1.faces.push( new THREE.Face3( 20,22,23));
	//pared2
	var pared2 = new THREE.Geometry();
	pared2.vertices.push(new THREE.Vector3(2,-0.9,2));
	pared2.vertices.push(new THREE.Vector3(2.1,-0.9,2));
	pared2.vertices.push(new THREE.Vector3(2.1,2,2));
	pared2.vertices.push(new THREE.Vector3(2,2,2));

	pared2.vertices.push(new THREE.Vector3(2,2,-2));
	pared2.vertices.push(new THREE.Vector3(2.1,2,-2));
	pared2.vertices.push(new THREE.Vector3(2.1,-0.9,-2));
	pared2.vertices.push(new THREE.Vector3(2,-0.9,-2));

	pared2.vertices.push(new THREE.Vector3(2,-0.9,-2));
	pared2.vertices.push(new THREE.Vector3(2,-0.9,2));
	pared2.vertices.push(new THREE.Vector3(2,2,2));
	pared2.vertices.push(new THREE.Vector3(2,2,-2));

	pared2.vertices.push(new THREE.Vector3(2.1,-0.9,2));
	pared2.vertices.push(new THREE.Vector3(2.1,-0.9,-2));
	pared2.vertices.push(new THREE.Vector3(2.1,2,-2));
	pared2.vertices.push(new THREE.Vector3(2.1,2,2));

	pared2.vertices.push(new THREE.Vector3(2,-0.9,-2));
	pared2.vertices.push(new THREE.Vector3(2.1,-0.9,-2));
	pared2.vertices.push(new THREE.Vector3(2.1,-0.9,2));
	pared2.vertices.push(new THREE.Vector3(2,-0.9,2));

	pared2.vertices.push(new THREE.Vector3(2,2,2));
	pared2.vertices.push(new THREE.Vector3(2.1,2,2));
	pared2.vertices.push(new THREE.Vector3(2.1,2,-2));
	pared2.vertices.push(new THREE.Vector3(2,2,-2));

	pared2.faces.push( new THREE.Face3( 0, 1, 2) );
	pared2.faces.push( new THREE.Face3(0,2,3) );
	pared2.faces.push( new THREE.Face3( 4,5,6));
	pared2.faces.push( new THREE.Face3( 4,6,7));
	pared2.faces.push( new THREE.Face3( 8,9,10));
	pared2.faces.push( new THREE.Face3( 8,10,11));
	pared2.faces.push( new THREE.Face3( 12,13,14));
	pared2.faces.push( new THREE.Face3( 12,14,15));
	pared2.faces.push( new THREE.Face3( 16,17,18));
	pared2.faces.push( new THREE.Face3( 16,18,19));
	pared2.faces.push( new THREE.Face3( 20,21,22));
	pared2.faces.push( new THREE.Face3( 20,22,23));

	//pared3
	var pared3 = new THREE.Geometry();

	pared3.vertices.push(new THREE.Vector3(-2,-0.9,-2));
	pared3.vertices.push(new THREE.Vector3(2,-0.9,-2));
	pared3.vertices.push(new THREE.Vector3(2,2,-2));
	pared3.vertices.push(new THREE.Vector3(-2,2,-2));

	pared3.vertices.push(new THREE.Vector3(-2,2,-2.1));
	pared3.vertices.push(new THREE.Vector3(2,2,-2.1));
	pared3.vertices.push(new THREE.Vector3(2,-0.9,-2.1));
	pared3.vertices.push(new THREE.Vector3(-2,-0.9,-2.1));

	pared3.vertices.push(new THREE.Vector3(-2,-0.9,-2.1));
	pared3.vertices.push(new THREE.Vector3(-2,-0.9,-2));
	pared3.vertices.push(new THREE.Vector3(-2,2,-2));
	pared3.vertices.push(new THREE.Vector3(-2,2,-2.1));

	pared3.vertices.push(new THREE.Vector3(2,-0.9,-2));
	pared3.vertices.push(new THREE.Vector3(2,-0.9,-2.1));
	pared3.vertices.push(new THREE.Vector3(2,2,-2.1));
	pared3.vertices.push(new THREE.Vector3(2,2,-2));

	pared3.vertices.push(new THREE.Vector3(-2,-0.9,-2.1));
	pared3.vertices.push(new THREE.Vector3(2,-0.9,-2.1));
	pared3.vertices.push(new THREE.Vector3(2,-0.9,-2));
	pared3.vertices.push(new THREE.Vector3(-2,-0.9,-2));

	pared3.vertices.push(new THREE.Vector3(-2,2,-2));
	pared3.vertices.push(new THREE.Vector3(2,2,-2));
	pared3.vertices.push(new THREE.Vector3(2,2,-2.1));
	pared3.vertices.push(new THREE.Vector3(-2,2,-2.1));

	pared3.faces.push( new THREE.Face3( 0, 1, 2) );
	pared3.faces.push( new THREE.Face3(0,2,3) );
	pared3.faces.push( new THREE.Face3( 4,5,6));
	pared3.faces.push( new THREE.Face3( 4,6,7));
	pared3.faces.push( new THREE.Face3( 8,9,10));
	pared3.faces.push( new THREE.Face3( 8,10,11));
	pared3.faces.push( new THREE.Face3( 12,13,14));
	pared3.faces.push( new THREE.Face3( 12,14,15));
	pared3.faces.push( new THREE.Face3( 16,17,18));
	pared3.faces.push( new THREE.Face3( 16,18,19));
	pared3.faces.push( new THREE.Face3( 20,21,22));
	pared3.faces.push( new THREE.Face3( 20,22,23));

	//mesa
	var mesa =new THREE.Geometry();
	mesa.vertices.push(new THREE.Vector3(-0.8,0.0,-1.5));
	mesa.vertices.push(new THREE.Vector3(0.8,0.0,-1.5));
	mesa.vertices.push(new THREE.Vector3(0.8,-0.2,-1.5));
	mesa.vertices.push(new THREE.Vector3(-0.8,-0.2,-1.5));
	
	mesa.vertices.push(new THREE.Vector3(-0.8,-0.2,-0.5));
	mesa.vertices.push(new THREE.Vector3(0.8,-0.2,-0.5));
	mesa.vertices.push(new THREE.Vector3(0.8,0.0,-0.5));
	mesa.vertices.push(new THREE.Vector3(-0.8,0.0,-0.5));

	mesa.vertices.push(new THREE.Vector3(-0.8,0.0,-0.5));
	mesa.vertices.push(new THREE.Vector3(-0.8,0.0,-1.5));
	mesa.vertices.push(new THREE.Vector3(-0.8,-0.2,-1.5));
	mesa.vertices.push(new THREE.Vector3(-0.8,-0.2,-0.5));

	mesa.vertices.push(new THREE.Vector3(0.8,0.0,-1.5));
	mesa.vertices.push(new THREE.Vector3(0.8,0.0,-0.5));
	mesa.vertices.push(new THREE.Vector3(0.8,-0.2,-0.5));
	mesa.vertices.push(new THREE.Vector3(0.8,-0.2,-1.5));

	mesa.vertices.push(new THREE.Vector3(-0.8,0.0,-0.5));
	mesa.vertices.push(new THREE.Vector3(0.8,0.0,-0.5));
	mesa.vertices.push(new THREE.Vector3(0.8,0.0,-1.5));
	mesa.vertices.push(new THREE.Vector3(-0.8,0.0,-1.5));

	mesa.vertices.push(new THREE.Vector3(-0.8,-0.2,-1.5));
	mesa.vertices.push(new THREE.Vector3(0.8,-0.2,-1.5));
	mesa.vertices.push(new THREE.Vector3(0.8,-0.2,-0.5));
	mesa.vertices.push(new THREE.Vector3(-0.8,-0.2,-0.5));

	mesa.faces.push( new THREE.Face3( 0, 1, 2) );
	mesa.faces.push( new THREE.Face3(0,2,3) );
	mesa.faces.push( new THREE.Face3( 4,5,6));
	mesa.faces.push( new THREE.Face3( 4,6,7));
	mesa.faces.push( new THREE.Face3( 8,9,10));
	mesa.faces.push( new THREE.Face3( 8,10,11));
	mesa.faces.push( new THREE.Face3( 12,13,14));
	mesa.faces.push( new THREE.Face3( 12,14,15));
	mesa.faces.push( new THREE.Face3( 16,17,18));
	mesa.faces.push( new THREE.Face3( 16,18,19));
	mesa.faces.push( new THREE.Face3( 20,21,22));
	mesa.faces.push( new THREE.Face3( 20,22,23));
	//mesap
	var mesap= new THREE.Geometry();
	mesap.vertices.push(new THREE.Vector3(-0.8,-0.2,-1.5));
	mesap.vertices.push(new THREE.Vector3(-0.7,-0.2,-1.5));
	mesap.vertices.push(new THREE.Vector3(-0.7,-0.9,-1.5));
	mesap.vertices.push(new THREE.Vector3(-0.8,-0.9,-1.5));

	mesap.vertices.push(new THREE.Vector3(-0.8,-0.9,-1.4));
	mesap.vertices.push(new THREE.Vector3(-0.7,-0.9,-1.4));
	mesap.vertices.push(new THREE.Vector3(-0.7,-0.2,-1.4));
	mesap.vertices.push(new THREE.Vector3(-0.8,-0.2,-1.4));

	mesap.vertices.push(new THREE.Vector3(-0.8,-0.2,-1.4));
	mesap.vertices.push(new THREE.Vector3(-0.8,-0.2,-1.5));
	mesap.vertices.push(new THREE.Vector3(-0.8,-0.9,-1.5));
	mesap.vertices.push(new THREE.Vector3(-0.8,-0.9,-1.4));

	mesap.vertices.push(new THREE.Vector3(-0.7,-0.2,-1.5));
	mesap.vertices.push(new THREE.Vector3(-0.7,-0.2,-1.4));
	mesap.vertices.push(new THREE.Vector3(-0.7,-0.9,-1.4));
	mesap.vertices.push(new THREE.Vector3(-0.7,-0.9,-1.5));

	mesap.vertices.push(new THREE.Vector3(-0.8,-0.2,-1.4));
	mesap.vertices.push(new THREE.Vector3(-0.7,-0.2,-1.4));
	mesap.vertices.push(new THREE.Vector3(-0.7,-0.2,-1.5));
	mesap.vertices.push(new THREE.Vector3(-0.8,-0.2,-1.5));

	mesap.vertices.push(new THREE.Vector3(-0.8,-0.9,-1.5));
	mesap.vertices.push(new THREE.Vector3(-0.7,-0.9,-1.5));
	mesap.vertices.push(new THREE.Vector3(-0.7,-0.9,-1.4));
	mesap.vertices.push(new THREE.Vector3(-0.8,-0.9,-1.4));

	mesap.faces.push( new THREE.Face3( 0, 1, 2) );
	mesap.faces.push( new THREE.Face3(0,2,3) );
	mesap.faces.push( new THREE.Face3( 4,5,6));
	mesap.faces.push( new THREE.Face3( 4,6,7));
	mesap.faces.push( new THREE.Face3( 8,9,10));
	mesap.faces.push( new THREE.Face3( 8,10,11));
	mesap.faces.push( new THREE.Face3( 12,13,14));
	mesap.faces.push( new THREE.Face3( 12,14,15));
	mesap.faces.push( new THREE.Face3( 16,17,18));
	mesap.faces.push( new THREE.Face3( 16,18,19));
	mesap.faces.push( new THREE.Face3( 20,21,22));
	mesap.faces.push( new THREE.Face3( 20,22,23));
	
var triangulo = new THREE.Geometry();
//frente
	triangulo.vertices.push( new THREE.Vector3( 0.0, 0.0, 0.3 ) );
	triangulo.vertices.push( new THREE.Vector3( 0.3, 0.0, 0.3 ) );
	triangulo.vertices.push( new THREE.Vector3( 0.15, 0.6, 0.0 ) );
//atras

	triangulo.vertices.push( new THREE.Vector3( 0.15, 0.6, 0.0 ) );
	triangulo.vertices.push( new THREE.Vector3( 0.3, 0.0, -0.3 ) );
	triangulo.vertices.push( new THREE.Vector3( 0.0, 0.0, -0.3 ) );
//izq
	triangulo.vertices.push( new THREE.Vector3( 0.0, 0.0, -0.3 ) );
	triangulo.vertices.push( new THREE.Vector3( 0.0, 0.0, 0.3 ) );
	triangulo.vertices.push( new THREE.Vector3( 0.15, 0.6, 0.0 ) );
//dER
	triangulo.vertices.push( new THREE.Vector3( 0.3, 0.0, 0.3 ) );
	triangulo.vertices.push( new THREE.Vector3( 0.3, 0.0, -0.3 ) );
	triangulo.vertices.push( new THREE.Vector3( 0.15, 0.6, 0.0 ) );
//ABAJO
	triangulo.vertices.push( new THREE.Vector3( 0.0, 0.0, -0.3 ) );
	triangulo.vertices.push( new THREE.Vector3( 0.3, 0.0, -0.3 ) );
	triangulo.vertices.push( new THREE.Vector3( 0.3, 0.0, 0.3 ) );
	triangulo.vertices.push( new THREE.Vector3( 0.0, 0.0, 0.3 ) );


	triangulo.faces.push( new THREE.Face3( 0, 1, 2) );
	triangulo.faces.push( new THREE.Face3(3,4,5) );
	triangulo.faces.push( new THREE.Face3(6,7,8) );
	triangulo.faces.push( new THREE.Face3(9,10,11) );
	triangulo.faces.push( new THREE.Face3(12,13,14) );
	triangulo.faces.push( new THREE.Face3(12,14,15) );


	var negro = new THREE.MeshPhongMaterial( { color: 0x000000 } ); 
	var negro1 = new THREE.MeshBasicMaterial( { color: 0x397E89 } ); 
	var plo = new THREE.MeshBasicMaterial( { color: 0x423F3A } );
	var plomo=new THREE.MeshBasicMaterial({ color: 0xC4C9C5 });
	var rojo= new THREE.MeshBasicMaterial({ color: 0xDD272E});
	var plomoclaro=new THREE.MeshBasicMaterial({ color: 0xCFCBCE});
	var celeste =new THREE.MeshBasicMaterial({ color: 0x28D7D7 });
	var celeste1 =new THREE.MeshBasicMaterial({ color: 0x0FA5A5 });
	var azul=new THREE.MeshBasicMaterial({ color: 0x223AEC });
	var azuloscuro=new THREE.MeshBasicMaterial({ color: 0x061482 });
	var rosa=new THREE.MeshBasicMaterial({ color: 0xE4ADE9});
	var verdeclaro=new THREE.MeshBasicMaterial({ color: 0x88DD27 });
	var verdeoscuro=new THREE.MeshBasicMaterial({ color: 0x2B5B1B });
	var lila=new THREE.MeshBasicMaterial({ color: 0x8527DD });
	var mostaza=new THREE.MeshBasicMaterial({ color: 0xDDD327 });
	var blanco=new THREE.MeshBasicMaterial({ color: 0xFFFFFF });

    
    
	var piso1 =new THREE.Mesh(piso,plomo);
	var pared11=new THREE.Mesh(pared1,celeste);
	pared11.checkColliosions=true;
	var pared22=new THREE.Mesh(pared2,celeste);
	var pared33=new THREE.Mesh(pared3,celeste1);
	var pared44=new THREE.Mesh(pared3,celeste1);
	pared44.position.z=4.1;
	var techo=new THREE.Mesh(piso,plomo);
	techo.position.y=3.0;
	//mesa1
	var mesa1=new THREE.Mesh(mesa,plo);
	var mesap1=new THREE.Mesh(mesap,plo);
	var mesap2=new THREE.Mesh(mesap,plo);
	mesap2.position.x=1.5;
	var mesap3=new THREE.Mesh(mesap,plo);
	mesap3.position.z=0.9;
	var mesap4=new THREE.Mesh(mesap,plo);
	mesap4.position.x=1.5;
	mesap4.position.z=0.9;
	//mesa2
	var mesa2=new THREE.Mesh(mesa,plo);
	mesa2.position.x=-1.9;
	mesa2.position.y=0,0;
	mesa2.position.z=0.8;
	mesa2.rotation.y=-1.6;
	var mesapp1=new THREE.Mesh(mesap,plo);
	mesapp1.position.x=0.32;
	mesapp1.position.z=1.54;
	var mesapp2=new THREE.Mesh(mesap,plo);
	mesapp2.position.x=0.28;
	mesapp2.position.z=3.03;
	var mesapp3=new THREE.Mesh(mesap,plo);
	mesapp3.position.x=-0.61;
	mesapp3.position.z=3.02;
	var mesapp4=new THREE.Mesh(mesap,plo);
	mesapp4.position.x=-0.58;
	mesapp4.position.z=1.54;
	//estante de libros
	var est=new THREE.Mesh(mesa,negro1);
	est.scale.x=0.3;
	est.scale.y=0.2;
	est.position.y=0.0;
	est.position.z=2;
	est.position.x=1.6;
	var est1=new THREE.Mesh(mesa,negro1);
	est1.scale.x=0.3;
	est1.scale.y=0.2;
	est1.position.y=-0.4;
	est1.position.z=2;
	est1.position.x=1.6;
	var est2=new THREE.Mesh(mesa,negro);
	est2.scale.x=0.3;
	est2.scale.y=0.2;
	est2.position.y=-0.85;
	est2.position.z=2;
	est2.position.x=1.6;
	var est3=new THREE.Mesh(mesa,negro1);
	est3.scale.x=0.3;
	est3.scale.y=0.2;
	est3.position.y=0.4;
	est3.position.z=2;
	est3.position.x=1.6;
	var est4=new THREE.Mesh(mesa,negro);
	est4.scale.x=0.3;
	est4.scale.y=0.2;
	est4.position.y=0.8;
	est4.position.z=2;
	est4.position.x=1.6;

	var est5=new THREE.Mesh(mesa,negro);
	est5.scale.x=0.3;
	est5.scale.y=0.2;
	est5.scale.z=1.8;
	est5.position.y=-1.8;
	est5.position.z=1.56;
	est5.position.x=1.6;
	est5.rotation.x=1.56;

	var est6=new THREE.Mesh(mesa,negro);
	est6.scale.x=0.3;
	est6.scale.y=0.2;
	est6.scale.z=1.8;
	est6.position.y=-1.8;
	est6.position.z=0.52;
	est6.position.x=1.6;
	est6.rotation.x=1.562;
	
	//laptop
	var laptop1=new THREE.Mesh(mesa,plomoclaro);
	laptop1.scale.x=0.2;
	laptop1.scale.y=0.15;
	laptop1.scale.z=0.55;
	laptop1.position.y=0.03;
	laptop1.position.x=-1;
	laptop1.position.z=1.5;
	var laptop11=new THREE.Mesh(mesa,azul);
	laptop11.scale.x=0.2;
	laptop11.scale.y=0.15;
	laptop11.scale.z=0.55;
	laptop11.position.y=0.18;
	laptop11.position.x=-0.8;
	laptop11.position.z=1.5;
	laptop11.rotation.z=1.2;
	//laptop2
	var laptop2=new THREE.Mesh(mesa,plomoclaro);
	laptop2.scale.x=0.4;
	laptop2.scale.y=0.15;
	laptop2.scale.z=0.3;
	laptop2.position.y=0.03;
	laptop2.position.x=-0.2;
	laptop2.position.z=-0.8;
	var laptop22=new THREE.Mesh(mesa,rosa);
	laptop22.scale.x=0.4;
	laptop22.scale.y=0.15;
	laptop22.scale.z=0.3;
	laptop22.position.y=-0.12;
	laptop22.position.x=-0.2;
	laptop22.position.z=-1;
	laptop22.rotation.x=1.9;
	
	//libros
	var libro1=new THREE.Mesh(mesa,rojo);
	libro1.scale.x=0.2;
	libro1.scale.y=0.15;
	libro1.scale.z=0.3;
	libro1.position.y=0.43;
	libro1.position.x=1.5;
	libro1.position.z=1.5;
	var libro2=new THREE.Mesh(mesa,mostaza);
	libro2.scale.x=0.2;
	libro2.scale.y=0.15;
	libro2.scale.z=0.3;
	libro2.position.y=0.46;
	libro2.position.x=1.5;
	libro2.position.z=1.5;
	var libro3=new THREE.Mesh(mesa,lila);
	libro3.scale.x=0.2;
	libro3.scale.y=0.15;
	libro3.scale.z=0.3;
	libro3.position.y=0.03;
	libro3.position.x=1.5;
	libro3.position.z=1.5;
	var libro4=new THREE.Mesh(mesa,rojo);
	libro4.scale.x=0.2;
	libro4.scale.y=0.15;
	libro4.scale.z=0.3;
	libro4.position.y=-0.82;
	libro4.position.x=1.5;
	libro4.position.z=1.5;
	var libro5=new THREE.Mesh(mesa,lila);
	libro5.scale.x=0.2;
	libro5.scale.y=0.15;
	libro5.scale.z=0.3;
	libro5.position.y=-0.79;
	libro5.position.x=1.5;
	libro5.position.z=1.5;
	var libro6=new THREE.Mesh(mesa,rojo);
	libro6.scale.x=0.2;
	libro6.scale.y=0.15;
	libro6.scale.z=0.3;
	libro6.position.y=0.06;
	libro6.position.x=1.5;
	libro6.position.z=1.5;
	var libro7=new THREE.Mesh(mesa,rojo);
	libro7.scale.x=0.2;
	libro7.scale.y=0.15;
	libro7.scale.z=0.3;
	libro7.position.y=-0.82;
	libro7.position.x=1.5;
	libro7.position.z=1.5;

	var libro8=new THREE.Mesh(mesa,blanco);
	libro8.scale.x=0.2;
	libro8.scale.y=0.15;
	libro8.scale.z=0.3;
	libro8.position.y=-0.35;
	libro8.position.x=1.5;
	libro8.position.z=1.5;
	var libro9=new THREE.Mesh(mesa,mostaza);
	libro9.scale.x=0.2;
	libro9.scale.y=0.15;
	libro9.scale.z=0.3;
	libro9.position.y=-0.32;
	libro9.position.x=1.5;
	libro9.position.z=1.5;

	var libro10=new THREE.Mesh(mesa,rojo);
	libro10.scale.x=0.2;
	libro10.scale.y=0.15;
	libro10.scale.z=0.3;
	libro10.position.y=-0.35;
	libro10.position.x=1.5;
	libro10.position.z=1.1;
	var libro11=new THREE.Mesh(mesa,verdeclaro);
	libro11.scale.x=0.2;
	libro11.scale.y=0.15;
	libro11.scale.z=0.3;
	libro11.position.y=-0.32;
	libro11.position.x=1.5;
	libro11.position.z=1.1;

	var libro12=new THREE.Mesh(mesa,blanco);
	libro12.scale.x=0.2;
	libro12.scale.y=0.15;
	libro12.scale.z=0.3;
	libro12.position.y=0.06;
	libro12.position.x=1.5;
	libro12.position.z=1.1;
	var libro13=new THREE.Mesh(mesa,lila);
	libro13.scale.x=0.2;
	libro13.scale.y=0.15;
	libro13.scale.z=0.3;
	libro13.position.y=-0.82;
	libro13.position.x=1.5;
	libro13.position.z=1.1;
	var libro14=new THREE.Mesh(mesa,verdeoscuro);
	libro14.scale.x=0.2;
	libro14.scale.y=0.15;
	libro14.scale.z=0.3;
	libro14.position.y=0.43;
	libro14.position.x=1.5;
	libro14.position.z=1.1;
	var libro15=new THREE.Mesh(mesa,lila);
	libro15.scale.x=0.2;
	libro15.scale.y=0.15;
	libro15.scale.z=0.3;
	libro15.position.y=0.03;
	libro15.position.x=1.5;
	libro15.position.z=1.1;

	//silla1
	var silla=new THREE.Mesh(mesa,negro);
	silla.scale.x=0.3;
	silla.scale.y=0.2;
	silla.scale.z=0.7;
	silla.position.z=1.65;
	silla.position.y=-0.5;
	silla.position.x=-1.5;
	var silla1=new THREE.Mesh(mesa,negro);
	silla1.scale.x=0.3;
	silla1.scale.y=0.2;
	silla1.scale.z=0.7;
	silla1.position.z=1.65;
	silla1.position.y=-0.0;
	silla1.position.x=-1.75;
	silla1.rotation.z=1.6;
	var silla11=new THREE.Mesh(mesap,negro);
	silla11.scale.z=0.4;
	silla11.scale.x=0.4;
	silla11.position.z=1.55;
	silla11.position.y=0.35;
	silla11.position.x=-1.43;
	var silla111=new THREE.Mesh(mesap,negro);
	silla111.scale.z=0.4;
	silla111.scale.x=0.4;
	silla111.scale.y=0.5;
	silla111.position.z=1.55;
	silla111.position.y=-0.4;
	silla111.position.x=-1.2;

	var silla1111=new THREE.Mesh(mesap,negro);
	silla1111.scale.z=0.4;
	silla1111.scale.x=0.4;
	silla1111.scale.y=0.5;
	silla1111.position.z=1.63;
	silla1111.position.y=-0.55;
	silla1111.position.x=-1.32;
	silla1111.rotation.z=1.6;
	silla1111.rotation.y=0.73;
	var silla11111=new THREE.Mesh(mesap,negro);
	silla11111.scale.z=0.4;
	silla11111.scale.x=0.4;
	silla11111.scale.y=0.5;
	silla11111.position.z=1.2;
	silla11111.position.y=-0.55;
	silla11111.position.x=-2.08;
	silla11111.rotation.z=1.6;
	silla11111.rotation.y=-0.73;
	//silla2
	var silla2=new THREE.Mesh(mesa,negro);
	silla2.scale.x=0.5;
	silla2.scale.y=0.2;
	silla2.scale.z=0.5;
	silla2.position.z=-1.1;
	silla2.position.y=-0.5;
	silla2.position.x=-0.2;
	var silla22=new THREE.Mesh(mesa,negro);
	silla22.scale.x=0.5;
	silla22.scale.y=0.2;
	silla22.scale.z=0.5;
	silla22.position.z=-1.82;
	silla22.position.y=-0.5;
	silla22.position.x=-0.2;
	silla22.rotation.x=1.6;
	var silla222=new THREE.Mesh(mesap,negro);
	silla222.scale.z=0.4;
	silla222.scale.x=0.4;
	silla222.position.z=-1.26;
	silla222.position.y=0.35;
	silla222.position.x=0.1;
	var silla2222=new THREE.Mesh(mesap,negro);
	silla2222.scale.z=0.4;
	silla2222.scale.x=0.4;
	silla2222.scale.y=0.5;
	silla2222.position.z=-1.05;
	silla2222.position.x=0.1;
	silla2222.position.y=-0.4;
	var silla22222=new THREE.Mesh(mesap,negro);
	silla22222.scale.z=0.4;
	silla22222.scale.x=0.4;
	silla22222.scale.y=0.5;
	silla22222.position.z=-0.98;
	silla22222.position.x=-0.06;
	silla22222.position.y=-0.55;
	silla22222.rotation.z=1.6;
	silla22222.rotation.y=0.7;
	var silla222222=new THREE.Mesh(mesap,negro);
	silla222222.scale.z=0.4;
	silla222222.scale.x=0.4;
	silla222222.scale.y=0.5;
	silla222222.position.z=-1.37;
	silla222222.position.x=-0.79;
	silla222222.position.y=-0.55;
	silla222222.rotation.z=1.6;
	silla222222.rotation.y=-0.7;
	//sofa
	var sofa=new THREE.Mesh(mesa,azuloscuro);
	sofa.scale.x=0.2;
	sofa.scale.y=1.8;
	sofa.scale.z=1.0;
	sofa.position.x=1.8;
	sofa.position.y=-0.5;

	var sofa1=new THREE.Mesh(mesa,azul);
	sofa1.scale.x=0.05;
	sofa1.scale.y=4.8;
	sofa1.scale.z=1.0;
	sofa1.position.y=0.1;
	sofa1.position.x=2;
	

	//arbol
	var arb=new THREE.Mesh(triangulo,verdeclaro);
	arb.position.x=-1.5;
	arb.position.z=-1.5;
	arb.position.y=-0.7;
	arb.scale.x=1.5;
	var arb1=new THREE.Mesh(triangulo,verdeoscuro);
	arb1.position.x=-1.4;
	arb1.position.z=-1.3;
	arb1.position.y=-0.4;
	arb1.scale.x=1.5;
	arb1.rotation.y=0.8;
	var arb2=new THREE.Mesh(triangulo,verdeclaro);
	arb2.position.x=-1.5;
	arb2.position.z=-1.5;
	arb2.position.y=-0.1;
	arb2.scale.x=1.5;
	var palo=new THREE.Mesh(mesap,negro);
	palo.scale.z=0.4;
	palo.scale.x=0.4;
	palo.scale.y=0.5;
	palo.position.z=-0.98;
	palo.position.x=-1;
	palo.position.y=-0.45;
	
	//ESFERA
	var esf=new THREE.SphereGeometry(0.05,8,5);
	var esfera1 = new THREE.Mesh(esf,azuloscuro);
	esfera1.position.x=-1.65;
	esfera1.position.y=-0.85;
	esfera1.position.z=1.12;
	var esfera2 = new THREE.Mesh(esf,azuloscuro);
	esfera2.position.x=-1.65;
	esfera2.position.y=-0.85;
	esfera2.position.z=0.82;
	var esfera3 = new THREE.Mesh(esf,azuloscuro);
	esfera3.position.x=-1.35;
	esfera3.position.y=-0.85;
	esfera3.position.z=0.87;
	var esfera4 = new THREE.Mesh(esf,azuloscuro);
	esfera4.position.x=-1.35;
	esfera4.position.y=-0.85;
	esfera4.position.z=1.09;
	var esfera5 = new THREE.Mesh(esf,azuloscuro);
	esfera5.position.x=-0.37;
	esfera5.position.y=-0.85;
	esfera5.position.z=-1.76;
	var esfera6 = new THREE.Mesh(esf,azuloscuro);
	esfera6.position.x=-0.37;
	esfera6.position.y=-0.85;
	esfera6.position.z=-1.46;
	var esfera7 = new THREE.Mesh(esf,azuloscuro);
	esfera7.position.x=-0.03;
	esfera7.position.y=-0.85;
	esfera7.position.z=-1.73;
	var esfera8 = new THREE.Mesh(esf,azuloscuro);
	esfera8.position.x=-0.05;
	esfera8.position.y=-0.85;
	esfera8.position.z=-1.5;

	var esfera9 = new THREE.Mesh(esf,azuloscuro);
	esfera9.position.x=-1.31;
	esfera9.position.y=-0.87;
	esfera9.position.z=-1.55;
	esfera9.scale.y=1;
	esfera9.scale.x=5.5;
	esfera9.scale.z=1;
	//del arbol
	var esfera10 = new THREE.Mesh(esf,rojo);
	esfera10.position.x=-1.54;
	esfera10.position.y=-0.7;
	esfera10.position.z=-1.2;
	var esfera11 = new THREE.Mesh(esf,rosa);
	esfera11.position.x=-1.54;
	esfera11.position.y=-0.7;
	esfera11.position.z=-1.8;
	var esfera12 = new THREE.Mesh(esf,blanco);
	esfera12.position.x=-1.0;
	esfera12.position.y=-0.7;
	esfera12.position.z=-1.8;
	var esfera13 = new THREE.Mesh(esf,azuloscuro);
	esfera13.position.x=-1.0;
	esfera13.position.y=-0.7;
	esfera13.position.z=-1.2;

	var esfera14 = new THREE.Mesh(esf,celeste1);
	esfera14.position.x=-1.21;
	esfera14.position.y=-0.4;
	esfera14.position.z=-1.07;
	var esfera15 = new THREE.Mesh(esf,lila);
	esfera15.position.x=-1.28;
	esfera15.position.y=-0.4;
	esfera15.position.z=-1.86;
	var esfera16 = new THREE.Mesh(esf,azuloscuro);
	esfera16.position.x=-0.84;
	esfera16.position.y=-0.4;
	esfera16.position.z=-1.42;
	var esfera17 = new THREE.Mesh(esf,azul);
	esfera17.position.x=-1.65;
	esfera17.position.y=-0.4;
	esfera17.position.z=-1.49;

	var esfera18 = new THREE.Mesh(esf,celeste);
	esfera18.position.x=-1.54;
	esfera18.position.y=-0.1;
	esfera18.position.z=-1.2;
	var esfera19 = new THREE.Mesh(esf,mostaza);
	esfera19.position.x=-1.54;
	esfera19.position.y=-0.1;
	esfera19.position.z=-1.8;
	var esfera20 = new THREE.Mesh(esf,rosa);
	esfera20.position.x=-1.0;
	esfera20.position.y=-0.1;
	esfera20.position.z=-1.8;
	var esfera21 = new THREE.Mesh(esf,rosa);
	esfera21.position.x=-1.0;
	esfera21.position.y=-0.1;
	esfera21.position.z=-1.2;

	var esfera22 = new THREE.Mesh(esf,rojo);
	esfera22.position.x=-1.26;
	esfera22.position.y=0.52;
	esfera22.position.z=-1.5;
	//impresoras1
	var impresora1=new THREE.Mesh(mesa,negro);
	impresora1.scale.y=0.5;
	impresora1.scale.x=0.3;
	impresora1.scale.z=0.3;
	impresora1.position.y=0.1;
	impresora1.position.x=0.4;
	impresora1.position.z=-0.4;
	var impresora11=new THREE.Mesh(mesa,blanco);
	impresora11.scale.y=0.1;
	impresora11.scale.x=0.3;
	impresora11.scale.z=0.3;
	impresora11.position.y=0.1;
	impresora11.position.x=0.4;
	impresora11.position.z=-1.29;
	impresora11.rotation.x=-2.9;
	//impresoras2
	var impresora2=new THREE.Mesh(mesa,negro);
	impresora2.scale.y=0.5;
	impresora2.scale.x=0.3;
	impresora2.scale.z=0.3;
	impresora2.position.y=0.1;
	impresora2.position.x=-0.3;
	impresora2.position.z=0.35;
	impresora2.rotation.y=1.5;
	var impresora22=new THREE.Mesh(mesa,blanco);
	impresora22.scale.y=0.1;
	impresora22.scale.x=0.2;
	impresora22.scale.z=0.48;
	impresora22.position.y=0.05;
	impresora22.position.x=-0.91;
	impresora22.position.z=0.8;
	impresora22.rotation.z=2.8;


	// SCENE

	scene = new THREE.Scene();
	scene.add( light );
	scene.add( ambientLight );

	scene.add(impresora1);
	scene.add(impresora11);
	scene.add(impresora2);
	scene.add(impresora22);
	scene.add(libro8);
	scene.add(libro9);
	scene.add(libro10);
	scene.add(libro11);
	scene.add(libro12);
	scene.add(libro13);
	scene.add(libro14);
	scene.add(libro15);
	scene.add(piso1);
	scene.add(techo);
	scene.add(pared11);
	scene.add(pared22);
	scene.add(pared33);
	scene.add(pared44);
	scene.add(mesa1);
	scene.add(mesa2);
	scene.add(mesap1);
	scene.add(mesap2);
	scene.add(mesap3);
	scene.add(mesap4);
	scene.add(mesapp1);
	scene.add(mesapp2);
	scene.add(mesapp3);
	scene.add(mesapp4);
	scene.add(est);
	scene.add(est1);
	scene.add(est2);
	scene.add(est3);
	scene.add(est4);
	scene.add(est5);
	scene.add(est6);
	scene.add(libro1);
	scene.add(libro2);
	scene.add(libro3);
	scene.add(libro4);
	scene.add(libro5);
	scene.add(libro6);
	scene.add(libro7);

	scene.add(laptop1);
	scene.add(laptop11);
	scene.add(laptop2);
	scene.add(laptop22);
	//silla1	
	scene.add(silla);
	scene.add(silla1);
	scene.add(silla11);
	scene.add(silla111);
	scene.add(silla1111);
	scene.add(silla11111);
	scene.add(esfera1);
	scene.add(esfera2);
	scene.add(esfera3);
	scene.add(esfera4);
	//silla2
	scene.add(silla2);
	scene.add(silla22);
	scene.add(silla222);
	scene.add(silla2222);
	scene.add(silla22222);
	scene.add(silla222222);
	scene.add(esfera5);
	scene.add(esfera6);
	scene.add(esfera7);
	scene.add(esfera8);
	//sofa
	scene.add(sofa);
	scene.add(sofa1);
	//arbol
	scene.add(arb);
	scene.add(arb1);
	scene.add(arb2);
	scene.add(palo);
	scene.add(esfera9);
	scene.add(esfera10);
	scene.add(esfera11);
	scene.add(esfera12);
	scene.add(esfera13);
	scene.add(esfera14);
	scene.add(esfera15);
	scene.add(esfera16);
	scene.add(esfera17);
	scene.add(esfera18);
	scene.add(esfera19);
	scene.add(esfera20);
	scene.add(esfera21);
	scene.add(esfera22);
	
}

function animate() {
	window.requestAnimationFrame( animate );
	if(camera.position.x>1){
		camera.position.x=1;
	}
	if(camera.position.x<-1){
		camera.position.x=-1;
	}
	if(camera.position.z>2.0){
		camera.position.z=2.0;
	}
	if(camera.position.z<-2){
		camera.position.z=-2;
	}
	if(camera.position.y>1){
		camera.position.y=1;
	}
	if(camera.position.y<-0.1){
		camera.position.y=-0.1;
	}

	render();
}

function render() {
	var delta = clock.getDelta();
	cameraControls.update(delta);
	
	renderer.render( scene, camera );
}



try {
	init();
	animate();
} catch(e) {
	var errorReport = "Your program encountered an unrecoverable error, can not draw on canvas. Error was:<br/><br/>";
	$('#container').append(errorReport+e);
}
