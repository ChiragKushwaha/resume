// import React, { useEffect } from 'react';
// import {
//   Scene,
//   PerspectiveCamera,
//   WebGLRenderer,
//   BoxGeometry,
//   MeshPhongMaterial,
//   DoubleSide,
//   Mesh,
//   PointLight
// } from 'three';
// import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

// const style = {
//   height: '100vh' // we can control scene size by setting container dimensions
// };

// const App = () => {
//   let scene: Scene,
//     camera: PerspectiveCamera,
//     controls: OrbitControls,
//     renderer: WebGLRenderer,
//     cube: Mesh,
//     requestID: number,
//     el: HTMLDivElement;

//   useEffect(() => {
//     sceneSetup();
//     addCustomSceneObjects();
//     startAnimationLoop();
//     window.addEventListener('resize', handleWindowResize);

//     return () => {
//       window.removeEventListener('resize', handleWindowResize);
//       window.cancelAnimationFrame(requestID);
//       controls.dispose();
//     };
//   }, []);

//   const sceneSetup = () => {
//     // get container dimensions and use them for scene sizing
//     const width = el.clientWidth;
//     const height = el.clientHeight;

//     scene = new Scene();
//     camera = new PerspectiveCamera(
//       75, // fov = field of view
//       width / height, // aspect ratio
//       0.1, // near plane
//       1000 // far plane
//     );
//     camera.position.z = 5; // is used here to set some distance from a cube that

//     controls = new OrbitControls(camera, el);
//     renderer = new WebGLRenderer();
//     renderer.setSize(width, height);
//     el.appendChild(renderer.domElement); // mount using React ref
//   };

//   const addCustomSceneObjects = () => {
//     const geometry = new BoxGeometry(2, 2, 2);
//     const material = new MeshPhongMaterial({
//       color: 0x156289,
//       emissive: 0x072534,
//       side: DoubleSide,
//       flatShading: true
//     });
//     cube = new Mesh(geometry, material);
//     scene.add(cube);

//     const lights = [];
//     lights[0] = new PointLight(0xffffff, 1, 0);
//     lights[1] = new PointLight(0xffffff, 1, 0);
//     lights[2] = new PointLight(0xffffff, 1, 0);

//     lights[0].position.set(0, 200, 0);
//     lights[1].position.set(100, 200, 100);
//     lights[2].position.set(-100, -200, -100);

//     scene.add(lights[0]);
//     scene.add(lights[1]);
//     scene.add(lights[2]);
//   };

//   const startAnimationLoop = () => {
//     cube.rotation.x += 0.01;
//     cube.rotation.y += 0.01;

//     renderer.render(scene, camera);

//     requestID = window.requestAnimationFrame(startAnimationLoop);
//   };

//   const handleWindowResize = () => {
//     const width = el.clientWidth;
//     const height = el.clientHeight;

//     renderer.setSize(width, height);
//     camera.aspect = width / height;

//     camera.updateProjectionMatrix();
//   };

//   return <div style={style} ref={(ref) => (el = ref as HTMLDivElement)} />;
// };

// export default App;
