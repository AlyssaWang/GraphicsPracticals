var length = 20;

var materialRed = new THREE.MeshPhongMaterial(
  {color: 0xB22222, side: THREE.BackSide});
var materialGreen = new THREE.MeshPhongMaterial(
  {color: 0x006400, side: THREE.BackSide});
var materialGrey = new THREE.MeshPhongMaterial({
  color: 0xA9A9A9, side: THREE.BackSide});

var box = new THREE.BoxGeometry(length, length, length);

var boxMaterials = [materialGreen,
                    materialRed,
                    materialGrey,
                    materialGrey,
                    materialGrey,
                    materialGrey];

var boxMesh = new THREE.Mesh(box, boxMaterials);
