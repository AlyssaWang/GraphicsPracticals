// var sphere = new THREE.SphereGeometry(2);
var sphere = new THREE.SphereGeometry(0, 30, 30, 20, Math.PI * 2, 0 Math.PI * 2);

var material = new THREE.MeshPhongMaterial({color: 0x4682B4, wireframe: false});
var sphereMesh = new THREE.Mesh(sphere, material);
sphereMesh.position.set(5, 0, 0);
