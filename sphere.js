var sphere = new THREE.SphereGeometry(4);
var material = new THREE.MeshPhongMaterial({color: 0x4682B4, wireframe: false});
var sphereMesh = new THREE.Mesh(sphere, material);
sphereMesh.position.set(6, 0, 0);

var sphereWireframeMaterial = new THREE.MeshPhongMaterial({color: 0x000000, wireframe: true});
var sphereWireframeMesh = new THREE.Mesh(sphere, sphereWireframeMaterial);
sphereWireframeMesh.position.set(6, 0, 0);
