var cube = new THREE.BoxGeometry(2, 2, 2);
var cubeMaterial = new THREE.MeshPhongMaterial({color: 0x8A2BE2, wireframe: false});
var cubeMesh = new THREE.Mesh(cube, cubeMaterial);
cubeMesh.position.set(-2, 0, 0);

var cubeWireframeMaterial = new THREE.MeshPhongMaterial({color: 0x000000, wireframe: true});
var cubeWireframeMesh = new THREE.Mesh(cube, cubeWireframeMaterial);
cubeWireframeMesh.position.set(-2, 0, 0);
