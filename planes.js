var length = 10;
var width = 10;
var depth = 10;

var plane = new THREE.PlaneGeometry(length, width, depth);

var materialRed = new THREE.MeshPhongMaterial({color: 0xB22222, side: THREE.DoubleSide});
var materialGreen = new THREE.MeshPhongMaterial({color: 0x006400, side: THREE.DoubleSide});
var materialGrey = new THREE.MeshPhongMaterial({color: 0xA9A9A9, side: THREE.DoubleSide});

// Drawing planes for the box
var planeLeft = new THREE.Mesh(plane, materialRed);
planeLeft.position.set(-length/2, 0, 0);
planeLeft.rotation.y = Math.PI/2; // 90 degree rotation

var planeRight = new THREE.Mesh(plane, materialGreen);
planeRight.position.set(length/2, 0, 0);
planeRight.rotation.y = Math.PI/2; // 90 degree rotation

var planeTop = new THREE.Mesh(plane, materialGrey);
planeTop.position.set(0, width/2, 0);
planeTop.rotation.x = Math.PI/2; // 90 degree rotation

var planeBottom = new THREE.Mesh(plane, materialGrey);
planeBottom.position.set(0, -width/2, 0);
planeBottom.rotation.x = Math.PI/2; // 90 degree rotation

var planeBack = new THREE.Mesh(plane, materialGrey);
planeBack.position.set(0, 0, -depth/2);
