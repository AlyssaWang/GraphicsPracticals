var cube = new THREE.BoxGeometry(4, 4, 4);
var cubeMaterial = new THREE.MeshPhongMaterial({color: 0x8A2BE2, wireframe: false});
var cubeMesh = new THREE.Mesh(cube, cubeMaterial);
cubeMesh.position.set(-5, 0, 0);
