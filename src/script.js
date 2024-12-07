import * as THREE from 'three'
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader.js'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import * as dat from 'lil-gui'
import gsap from 'gsap'
import CANNON from 'cannon'

/**
 * Debug
 */
const gui = new dat.GUI()

const parameters = {
    materialColor: '#ffeded',
    galaxy: {
        count: 100000,
        size: 0.01,
        radius: 6,
        branches: 7,
        spin: 1,
        randomness: 0.2,
        randomnessPower: 3,
        insideColor: '#ff6030',
        outsideColor: '#97c8bf'
    }
}

gui.addColor(parameters, 'materialColor')

/**
 * Base
 */
// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

/**
 * Texture
 */
const textureLoader = new THREE.TextureLoader()
const particleTexture = textureLoader.load('/textures/particles/2.png')
const gradientTexture = textureLoader.load('textures/gradients/3.jpg')
gradientTexture.magFilter = THREE.NearestFilter

/**
 * Activity 3.3
 */

// Material
const material = new THREE.MeshToonMaterial({
    color: parameters.materialColor,
    gradientMap: gradientTexture
})

// Meshes
const mesh1 = new THREE.Mesh(
    new THREE.TorusGeometry(1, 0.4, 16, 60),
    material
)
const mesh2 = new THREE.Mesh(
    new THREE.ConeGeometry(1, 2, 32),
    material
)
const mesh3 = new THREE.Mesh(
    new THREE.TorusKnotGeometry(0.8, 0.35, 100, 16),
    material
)
scene.add(mesh1, mesh2, mesh3)

// Adjust the distance between objects
const objectsDistance = 4;
mesh1.position.set(2, 0, 0);
mesh2.position.set(-2, -objectsDistance, 0);
mesh3.position.set(2, -objectsDistance * 2, 0);

const sectionMeshes = [mesh1, mesh2, mesh3];

/**
 *  Activity 3.1 
 * Particles
 */ 

const particle1Geometry = new THREE.BufferGeometry()
const count1 = 5000

const positions1 = new Float32Array(count1 * 3)
const colors1 = new Float32Array(count1 * 3)

for(let i = 0; i < count1 * 3; i++){
    positions1[i] = (Math.random() - 0.5) * 10
    colors1[i] = Math.random()
}

particle1Geometry.setAttribute('position', new THREE.BufferAttribute(positions1, 3))
particle1Geometry.setAttribute('color', new THREE.BufferAttribute(colors1, 3))

const particle1Material = new THREE.PointsMaterial({
    size: 0.2,
    sizeAttenuation: true
})

particle1Material.size = 0.3

particle1Material.transparent = true
particle1Material.alphaMap = particleTexture

particle1Material.depthWrite = false
particle1Material.blending = THREE.AdditiveBlending
// to add the color
particle1Material.vertexColors = true

const particles1 = new THREE.Points(particle1Geometry, particle1Material)
particles1.position.y = -10
particles1.position.z = -10
scene.add(particles1)



/**
 * Activity 3.2
 * Galaxy
 */
const particlesCount = 200;
const positions = new Float32Array(particlesCount * 3);

for (let i = 0; i < particlesCount; i++) {
    positions[i * 3 + 0] = (Math.random() - 0.5) * 10;
    positions[i * 3 + 1] = Math.random();
    positions[i * 3 + 2] = (Math.random() - 0.5) * 10;
}
const particlesGeometry = new THREE.BufferGeometry();
particlesGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

// Material
const particlesMaterial = new THREE.PointsMaterial({
    color: parameters.materialColor,
    sizeAttenuation: true,
    size: 0.03
});

// GUI
gui.addColor(parameters, 'materialColor').onChange(() => {
    material.color.set(parameters.materialColor);
    particlesMaterial.color.set(parameters.materialColor);
});

// Points
const particles = new THREE.Points(particlesGeometry, particlesMaterial);
scene.add(particles);


let geometry = null;
let materialGalaxy = null;
let pointsGalaxy = null;

const generateGalaxy = () => {
    if (pointsGalaxy !== null) {
        geometry.dispose();
        materialGalaxy.dispose();
        scene.remove(pointsGalaxy);
    }

    geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(parameters.galaxy.count * 3);
    const colors = new Float32Array(parameters.galaxy.count * 3);

    const insideColor = new THREE.Color(parameters.galaxy.insideColor);
    const outsideColor = new THREE.Color(parameters.galaxy.outsideColor);

    for (let i = 0; i < parameters.galaxy.count; i++) {
        const i3 = i * 3;
        const radius = Math.random() * parameters.galaxy.radius;
        const spinAngle = radius * parameters.galaxy.spin;
        const branchAngle = (i % parameters.galaxy.branches) / parameters.galaxy.branches * Math.PI * 2;

        const randomX = Math.pow(Math.random(), parameters.galaxy.randomnessPower) * (Math.random() < 0.5 ? 1 : -1) * parameters.galaxy.randomness * radius;
        const randomY = Math.pow(Math.random(), parameters.galaxy.randomnessPower) * (Math.random() < 0.5 ? 1 : -1) * parameters.galaxy.randomness * radius;
        const randomZ = Math.pow(Math.random(), parameters.galaxy.randomnessPower) * (Math.random() < 0.5 ? 1 : -1) * parameters.galaxy.randomness * radius;

        positions[i3] = Math.cos(branchAngle + spinAngle) * radius + randomX;
        positions[i3 + 1] = randomY;
        positions[i3 + 2] = Math.sin(branchAngle + spinAngle) * radius + randomZ;

        const mixedColor = insideColor.clone();
        mixedColor.lerp(outsideColor, radius / parameters.galaxy.radius);

        colors[i3] = mixedColor.r;
        colors[i3 + 1] = mixedColor.g;
        colors[i3 + 2] = mixedColor.b;
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    materialGalaxy = new THREE.PointsMaterial({
        size: parameters.galaxy.size,
        sizeAttenuation: true,
        depthWrite: false,
        blending: THREE.AdditiveBlending,
        vertexColors: true,
    });

    pointsGalaxy = new THREE.Points(geometry, materialGalaxy);
    pointsGalaxy.rotation.x = Math.PI / 10
    pointsGalaxy.position.y = -4
    pointsGalaxy.position.z = -10
    
    scene.add(pointsGalaxy)
};

generateGalaxy();

gui.add(parameters.galaxy, 'count').min(100).max(1000000).step(100).onFinishChange(generateGalaxy);
gui.add(parameters.galaxy, 'size').min(0.001).max(0.1).step(0.001).onFinishChange(generateGalaxy);
gui.add(parameters.galaxy, 'radius').min(0.01).max(20).step(0.01).onFinishChange(generateGalaxy);
gui.add(parameters.galaxy, 'branches').min(2).max(20).step(1).onFinishChange(generateGalaxy);
gui.add(parameters.galaxy, 'spin').min(-5).max(5).step(0.001).onFinishChange(generateGalaxy);
gui.add(parameters.galaxy, 'randomness').min(0).max(2).step(0.001).onFinishChange(generateGalaxy);
gui.add(parameters.galaxy, 'randomnessPower').min(1).max(10).step(0.001).onFinishChange(generateGalaxy);
gui.addColor(parameters.galaxy, 'insideColor').onFinishChange(generateGalaxy);
gui.addColor(parameters.galaxy, 'outsideColor').onFinishChange(generateGalaxy);


/**
 * Activity 3.4
 * Physics
 */
const debugObject = {}
debugObject.physicsCreateSphere = () =>
{
    console.log("Creating Sphere")
    physicsCreateSphere(
        Math.random() * 0.5,
        {
            x: (Math.random() - 0.5) * 3,
            y: 3,
            z: (Math.random() - 0.5) * 3
        }
    )
}
    
gui.add(debugObject, 'physicsCreateSphere')

debugObject.physicsCreateBox = () =>
{
    physicsCreateBox(
        Math.random(),
        Math.random(),
        Math.random(),
        {
            x: (Math.random() - 0.5) * 3,
            y: 3,
            z: (Math.random() - 0.5) * 3
        }
    )
}
gui.add(debugObject, 'physicsCreateBox')

// Reset
debugObject.reset = () => {
    // Remove all objects from the scene and world
    while (objectsToUpdate.length > 0) {
        const object = objectsToUpdate.pop();

        // Remove body from physics world
        if (object.body) {
            object.body.removeEventListener('collide', playHitSound);
            world.removeBody(object.body);
        }

        // Remove mesh from scene
        if (object.physicsMesh) {
            scene.remove(object.physicsMesh);
        }
    }

};

gui.add(debugObject, 'reset')
    

// Sounds
const hitSound = new Audio('/sounds/hit.mp3')

const playHitSound = (collision) =>
{
    const impactStrength = collision.contact.getImpactVelocityAlongNormal()

    if(impactStrength > 1.5)
    {
        hitSound.volume = Math.random()
        hitSound.currentTime = 0
        hitSound.play()
    }
}

const cubeTextureLoader = new THREE.CubeTextureLoader()

const environmentMapTexture = cubeTextureLoader.load([
    '/textures/environmentMaps/0/px.png',
    '/textures/environmentMaps/0/nx.png',
    '/textures/environmentMaps/0/py.png',
    '/textures/environmentMaps/0/ny.png',
    '/textures/environmentMaps/0/pz.png',
    '/textures/environmentMaps/0/nz.png'
])

/** Physics */
const world = new CANNON.World();
world.broadphase = new CANNON.SAPBroadphase(world);
world.allowSleep = true;
world.gravity.set(0, -9.82, 0);

// Default Material
const defaultMaterial = new CANNON.Material('default');
const defaultContactMaterial = new CANNON.ContactMaterial(
    defaultMaterial,
    defaultMaterial,
    {
        friction: 0.1,
        restitution: 0.5, 
    }
);
world.defaultContactMaterial = defaultContactMaterial;

// Floor
const floorShape = new CANNON.Plane();
const floorBody = new CANNON.Body({
    mass: 0, // Static body
    material: defaultMaterial, // Apply default material
});
floorBody.addShape(floorShape);
floorBody.quaternion.setFromAxisAngle(new CANNON.Vec3(-1, 0, 0), Math.PI * 0.5); 
floorBody.position.set(0, -3, 0); // Match Three.js floor position
world.addBody(floorBody);

/** Utils */
const objectsToUpdate = [];

// Create a Sphere
const physicsSphereG = new THREE.SphereGeometry(1, 20, 20);
const physicsSphereM = new THREE.MeshStandardMaterial({
    metalness: 0.3,
    roughness: 0.4,
    envMap: environmentMapTexture,
    envMapIntensity: 0.5,
});

const physicsCreateSphere = (radius, position) => {
    position.z = -13;

    // Three.js Mesh
    const physicsMesh = new THREE.Mesh(physicsSphereG, physicsSphereM);
    physicsMesh.castShadow = true;
    physicsMesh.scale.set(radius, radius, radius);
    physicsMesh.position.copy(position);
    scene.add(physicsMesh);

    // Cannon.js body
    const physicsShape = new CANNON.Sphere(radius);
    const physicsBody = new CANNON.Body({
        mass: 1, // Dynamic body
        position: new CANNON.Vec3(position.x, position.y, position.z),
        shape: physicsShape,
        material: defaultMaterial,
    });

    physicsBody.addEventListener('collide', playHitSound);
    world.addBody(physicsBody);

    // Save in objects
    objectsToUpdate.push({ physicsMesh, physicsBody });
};

// Create a Box
const physicsBoxG = new THREE.BoxGeometry(1, 1, 1);
const physicsBoxM = new THREE.MeshStandardMaterial({
    roughness: 0.4,
    envMap: environmentMapTexture,
    envMapIntensity: 0.5,
});
const physicsCreateBox = (width, height, depth, position) => {
    position.z = -13;
    
    // Three.js Mesh
    const physicsMesh = new THREE.Mesh(physicsBoxG, physicsBoxM);
    physicsMesh.scale.set(width, height, depth);
    physicsMesh.castShadow = true;
    physicsMesh.position.copy(position);
    scene.add(physicsMesh);

    // Cannon.js Body
    const physicsShape = new CANNON.Box(new CANNON.Vec3(width * 0.5, height * 0.5, depth * 0.5));
    const physicsBody = new CANNON.Body({
        mass: 1, // Dynamic body
        position: new CANNON.Vec3(position.x, position.y, position.z),
        shape: physicsShape,
        material: defaultMaterial,
    });

    physicsBody.addEventListener('collide', playHitSound);
    world.addBody(physicsBody);

    // Save in objects
    objectsToUpdate.push({ physicsMesh, physicsBody });
};


/**
 * Activity 3.5
 * Imported Model
 */
// creating gltfloader instance]
const gltfLoader = new GLTFLoader()

let mixer = null
gltfLoader.load(
    '/models/Fox/glTF/Fox.gltf',
    (gltf) =>
    {
        const fox = gltf.scene
        fox.scale.set(0.025, 0.035, 0.025)
        fox.position.set(0, -15.5, -4)
        fox.rotation.y = Math.PI / -2
        scene.add(fox)

        // Animation of the fox
        mixer = new THREE.AnimationMixer(fox)
        const action = mixer.clipAction(gltf.animations[2])
        action.play()      
    }
)
// Light for the fox

const foxDirectionalLight = new THREE.DirectionalLight(0xffffff, 2)
foxDirectionalLight.castShadow = true
foxDirectionalLight.shadow.mapSize.set(1024, 1024)
foxDirectionalLight.shadow.camera.far = 15
foxDirectionalLight.shadow.camera.left = - 7
foxDirectionalLight.shadow.camera.top = 7
foxDirectionalLight.shadow.camera.right = 7
foxDirectionalLight.shadow.camera.bottom = - 7
foxDirectionalLight.position.set(5, -15, 5)
scene.add(foxDirectionalLight)

/**
 * Activity 3.6
 * Raycaster
 */

// Raycaster and mouse
const raycaster = new THREE.Raycaster();
const mouse = new THREE.Vector2();

// Create objects
const raycasterG = new THREE.SphereGeometry();
const material1 = new THREE.MeshBasicMaterial({ color: '#956565' });
const material2 = new THREE.MeshBasicMaterial({ color: '#956565' });
const material3 = new THREE.MeshBasicMaterial({ color: '#956565' });

const object1 = new THREE.Mesh(raycasterG, material1);
const object2 = new THREE.Mesh(raycasterG, material2);
const object3 = new THREE.Mesh(raycasterG, material3);

object1.position.set(-4, -18, -5)
object2.position.set(0, -18, -5)
object3.position.set(4, -18, -5)

scene.add(object1, object2, object3);

// Function to change color
const changeColor = (object, color) => {
    object.material.color.set(color);
};

// Event listener for mouse movement
window.addEventListener('mousemove', (event) => {
    // Update mouse variable with normalized device coordinates
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

    // Update the raycaster
    raycaster.setFromCamera(mouse, camera);

    // Calculate objects intersecting the ray
    const intersects = raycaster.intersectObjects([object1, object2, object3]);

    // Reset color for all objects
    changeColor(object1, '#956565'); // original color
    changeColor(object2, '#956565'); // original color
    changeColor(object3, '#956565'); // original color

    // Change color of intersected objects
    for (const intersect of intersects) {
        changeColor(intersect.object, '#a26934'); // change to red or any color you want
    }
});
// Importing a 3d Model
let duck = null
gltfLoader.load(
    './models/Duck/glTF-Binary/Duck.glb',
    (gltf) =>
    {
        duck = gltf.scene
        duck.position.set(0, -19, -5)
        duck.scale.set(1.5, 1.5, 1.5)
        scene.add(duck)
    }
)


/**
 * Lights
 */


const directionalLight = new THREE.DirectionalLight('#ffffff', 1);
directionalLight.position.set(1, 1, 0);
scene.add(directionalLight);

/**
 * Sizes
 */
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
};

window.addEventListener('resize', () => {
    sizes.width = window.innerWidth;
    sizes.height = window.innerHeight;

    camera.aspect = sizes.width / sizes.height;
    camera.updateProjectionMatrix();

    renderer.setSize(sizes.width, sizes.height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
});

/**
 * Camera
 */
const cameraGroup = new THREE.Group();
scene.add(cameraGroup);

const camera = new THREE.PerspectiveCamera(35, sizes.width / sizes.height, 0.1, 100);
camera.position.z = 6;
cameraGroup.add(camera);

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    canvas: canvas,
    alpha: true
});
renderer.setSize(sizes.width, sizes.height);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

/**
 * Scroll
 */
let scrollY = window.scrollY;
let currentSection = 0;
window.addEventListener('scroll', () => {
    scrollY = window.scrollY;

    const newSection = Math.round(scrollY / sizes.height);

    if (newSection !== currentSection) {
        currentSection = newSection;

        gsap.to(sectionMeshes[currentSection].rotation, {
            duration: 1.5,
            ease: 'power2.inOut',
            x: '+=6',
            y: '+=3',
            z: '+=1.5'
        });
    }
});

/**
 * Cursor
 */
const cursor = { x: 0, y: 0 };
window.addEventListener('mousemove', (event) => {
    cursor.x = event.clientX / sizes.width - 0.5;
    cursor.y = event.clientY / sizes.height - 0.5;
});


/**
 * Animate
 */
const clock = new THREE.Clock();
let previousTime = 0;
const timeStep = 1 / 60;

const amplitude = 1.5; 
const frequency = 2; 
// Phase shifts for each object
const phaseShift1 = 0; 
const phaseShift2 = Math.PI / 3; 
const phaseShift3 = (Math.PI * 2) / 3; 


const tick = () => {
    const elapsedTime = clock.getElapsedTime();
    const physicsDeltaTime = clock.getDelta();

    // Update physics world
    world.step(timeStep, physicsDeltaTime, 3);
    // Synchronize Three.js meshes with Cannon.js bodies
    objectsToUpdate.forEach(({ physicsMesh, physicsBody }) => {
        physicsMesh.position.copy(physicsBody.position);
        physicsMesh.quaternion.copy(physicsBody.quaternion);
    });

   // Activity 3.1
   for(let i = 0; i < count1; i++){
        let i3 = i * 3

        const x = particle1Geometry.attributes.position.array[i3]
        particle1Geometry.attributes.position.array[i3 + 1] = Math.sin(elapsedTime + x)
        particle1Geometry.attributes.position.needsUpdate = true
   }

   // Activity 3.3
    const deltaTime = elapsedTime - previousTime;
    previousTime = elapsedTime;

    // Animate meshes
    for (const mesh of sectionMeshes) {
        mesh.rotation.x += deltaTime * 0.1;
        mesh.rotation.y += deltaTime * 0.12;
    }

    // Activity 3.5
    if(mixer){
        mixer.update(deltaTime)
    }


    // Update the raycaster
    raycaster.setFromCamera(mouse, camera);

    // Calculate the time based on the current time
    const raycasterTime = Date.now() * 0.001; // Convert to seconds
    // Update positions of the raycaster objects using Math.sin
    object1.position.y = Math.sin(raycasterTime * frequency + phaseShift1) * amplitude - 19; // Adjust base position
    object2.position.y = Math.sin(raycasterTime * frequency + phaseShift2) * amplitude - 19; // Adjust base position
    object3.position.y = Math.sin(raycasterTime * frequency + phaseShift3) * amplitude - 19; // Adjust base position

    // Animate camera
    camera.position.y = -scrollY / sizes.height * objectsDistance;

    const parallaxX = cursor.x * 0.5;
    const parallaxY = -cursor.y * 0.5;
    cameraGroup.position.x += (parallaxX - cameraGroup.position.x) * 5 * deltaTime;
    cameraGroup.position.y += (parallaxY - cameraGroup.position.y) * 5 * deltaTime;

    // Render
    renderer.render(scene, camera);

    // Call tick again on the next frame
    window.requestAnimationFrame(tick);
};

tick();
