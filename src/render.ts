import * as THREE from "three";
import { RefObject } from "react";

interface IThreeObjects {
  renderer: THREE.WebGLRenderer,
  scene: THREE.Scene,
  camera: THREE.Camera
}

interface ISceneObjects {
  line: THREE.Mesh
}


export function initialize_render(renderElem: RefObject<HTMLDivElement>) {
  if (!renderElem) {
    return {} as IThreeObjects;
  }
  var scene = new THREE.Scene();
  scene.background = new THREE.Color("white");
  var camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 500);
  camera.position.set(0, 0, 100);
  camera.lookAt(0, 0, 0);
  var renderer = new THREE.WebGLRenderer();
  renderer.setSize(600, 400);
  renderElem.current!.appendChild(renderer.domElement);  

  return { renderer, scene, camera };
}

export function populate_scene(threes: IThreeObjects) {
  let { scene } = threes;  
  var material = new THREE.MeshBasicMaterial( { color: 0x0000ff } );
  
  var points = [];
  points.push( new THREE.Vector3( - 10, 0, 0 ) );
  points.push( new THREE.Vector3( 0, 10, 0 ) );
  points.push( new THREE.Vector3( 10, 0, 0 ) );
  // var geometry = new THREE.BufferGeometry().setFromPoints( points );  
  let curve = new THREE.CatmullRomCurve3(points);
  var geometry = new THREE.TubeGeometry(curve, 20, 2, 8, false );
  var line = new THREE.Mesh( geometry, material );
  scene.add(line);

  return { line }
}

export function render_scene(threes: IThreeObjects, scene_objects: ISceneObjects) {
  let { renderer, scene, camera } = threes;
  let { line } = scene_objects;
  renderer.render(scene, camera);
  var animate = function () {
    requestAnimationFrame(animate);

    
  };
  // animate();
}