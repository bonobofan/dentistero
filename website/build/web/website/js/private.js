let isOriginalColor = true;

function farbeAendern() {
    const paragraph = document.getElementById("susi");
    if (isOriginalColor) {
        paragraph.style.color = "blue"; // Ändere die Farbe zu Blau
    } else {
        paragraph.style.color = ""; // Setze die Farbe auf die Ausgangsfarbe zurück
    }
    isOriginalColor = !isOriginalColor; // Umschalten des Zustands
}

//function main(){
//    var scene = new THREE.Scene();
//    var box = generateBox(1, 1, 1);
//    box.translateZ(-5);
//    box.position.y = box.geometry.parameters.height/2;
//
//    var floor = generateFloor(10, 20);
//    floor. rotation.x = Math.PI/2;  /* um 90 Grad drehen */
//
//    scene.add(floor);
//    scene.add(box);
//
//    var camera = new THREE.PerspectiveCamera(
//        45,
//        window.innerWidth/window.innerHeight,
//        1,
//        1000
//    );
//    camera.position.x = 0;
//    camera.position.y = 5;
//    camera.position.z = 5;
//    camera.lookAt(new THREE.Vector3(0, 0, -5));
//
//
//    var renderer = new THREE.WebGLRenderer();
//    renderer.setSize(window.innerWidth, window.innerHeight);
//    document.getElementById('webgl').appendChild(renderer.domElement);
//    renderer.render(scene, camera);
//}
//
//function generateBox(w, h, d){
//    var geo = new THREE.BoxGeometry(w, h, d)
//    var mat = new THREE.MeshBasicMaterial({
//        color: 0xffffff,
//        side: THREE.DoubleSide
//    });
//    var mesh = new THREE.Mesh(geo, mat);
//    return mesh;
//}
//
//function generateFloor(w, d){
//    var geo = new THREE.PlaneGeometry(w, d);
//    var mat = new THREE.MeshBasicMaterial({
//        color: 0x88ff00,
//        side: THREE.DoubleSide
//    });
//    var mesh = new THREE.Mesh(geo, mat);
//    return mesh;
//}
//
//main();

//document.addEventListener('DOMContentLoaded', () => {
//const container = document.getElementById('webgl-container');
//const scene = new THREE.Scene();
//const camera = new THREE.PerspectiveCamera(75, container.clientWidth / container.clientHeight, 0.1, 1000);
//const renderer = new THREE.WebGLRenderer();
//renderer.setSize(container.clientWidth, container.clientHeight);
//container.appendChild(renderer.domElement);
//
//const geometry = new THREE.BoxGeometry();
//const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
//const cube = new THREE.Mesh(geometry, material);
//scene.add(cube);
//
//camera.position.z = 5;
//
//function animate() {
//requestAnimationFrame(animate);
//cube.rotation.x += 0.01;
//cube.rotation.y += 0.01;
//renderer.render(scene, camera);
//}
//animate();
//
//// Fenstergröße anpassen
//window.addEventListener('resize', () => {
//const width = container.clientWidth;
//const height = container.clientHeight;
//renderer.setSize(width, height);
//camera.aspect = width / height;
//camera.updateProjectionMatrix();
//});
//});

//document.addEventListener('DOMContentLoaded', () => {
//const container = document.getElementById('webgl-container');
//const scene = new THREE.Scene();
//const camera = new THREE.PerspectiveCamera(75, container.clientWidth / container.clientHeight, 0.1, 1000);
//const renderer = new THREE.WebGLRenderer();
//renderer.setSize(container.clientWidth, container.clientHeight);
//container.appendChild(renderer.domElement);
//
//// Erstelle den Würfel
//const geometry = new THREE.BoxGeometry();
//const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
//const cube = new THREE.Mesh(geometry, material);
//scene.add(cube);
//
//// Erstelle die Kanten des Würfels
//const edges = new THREE.EdgesGeometry(geometry);
//const lineMaterial = new THREE.LineBasicMaterial({ color: 0x000000 });
//const lineSegments = new THREE.LineSegments(edges, lineMaterial);
//scene.add(lineSegments);
//
//camera.position.z = 5;
//
//function animate() {
//requestAnimationFrame(animate);
//cube.rotation.x += 0.01;
//cube.rotation.y += 0.01;
//lineSegments.rotation.x += 0.01;
//lineSegments.rotation.y += 0.01;
//renderer.render(scene, camera);
//}
//animate();
//
//// Fenstergröße anpassen
//window.addEventListener('resize', () => {
//const width = container.clientWidth;
//const height = container.clientHeight;
//renderer.setSize(width, height);
//camera.aspect = width / height;
//camera.updateProjectionMatrix();
//});
//});

let cube, lineSegments;

document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('webgl-container');
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, container.clientWidth / container.clientHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(container.clientWidth, container.clientHeight);
    container.appendChild(renderer.domElement);

    // Erstelle den Würfel
    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    // Erstelle die Kanten des Würfels
    const edges = new THREE.EdgesGeometry(geometry);
    const lineMaterial = new THREE.LineBasicMaterial({ color: 0x000000 });
    lineSegments = new THREE.LineSegments(edges, lineMaterial);
    scene.add(lineSegments);

    camera.position.z = 5;

    function animate() {
        requestAnimationFrame(animate);
        cube.rotation.x += 0.01;
        cube.rotation.y += 0.01;
        lineSegments.rotation.x += 0.01;
        lineSegments.rotation.y += 0.01;
        renderer.render(scene, camera);
    }
    animate();

    // Fenstergröße anpassen
    window.addEventListener('resize', () => {
    const width = container.clientWidth;
    const height = container.clientHeight;
    renderer.setSize(width, height);
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
    });
});

function changeCubeColor() {
const newColor = Math.random() * 0xffffff; // Zufällige Farbe
cube.material.color.setHex(newColor);
}
