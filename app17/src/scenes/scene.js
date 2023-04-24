import { Engine, Scene, SceneLoader, FreeCamera, Vector3, Vector4, Texture, MeshBuilder, StandardMaterial, Color3, Color4, HemisphericLight } from "@babylonjs/core";
import * as BABYLON from "@babylonjs/core";
import crateTex from '/src/assets/crate.png'
import cheeseTex from '/src/assets/ground.jpg'
import floorTex from '/src/assets/floor.jpeg'
import signTex from '/src/assets/normalMap.jpg'
export {} from '@babylonjs/loaders/glTF'
const createScene = (canvas) => {
  const engine = new Engine(canvas);
  const scene = new Scene(engine);
  scene.clearColor = new BABYLON.Color3(1, 1, 1);

  const camera = new BABYLON.UniversalCamera("Camera", new BABYLON.Vector3(4, -10, 0), scene);
  camera.position = new BABYLON.Vector3(0, 2, -5);
  camera.attachControl(canvas, true);

  new HemisphericLight("light", Vector3.Up(), scene);

  let front = new Vector4(0, 0, 1/6, 1)
  const boxMat = new StandardMaterial("boxMat", scene);
  boxMat.diffuseTexture = new Texture(crateTex)
  const crate = new MeshBuilder.CreateBox("box", {size: 2, frontUVs: front}, scene);
  crate.material = boxMat;

  const material = new StandardMaterial("base-material", scene);
  let pizzaBase = MeshBuilder.CreateDisc("base", {radius: 1, arc: 1, sideOrientation: BABYLON.Mesh.DOUBLESIDE, updatable: true}, scene);
  material.diffuseColor = new Color3(1, 0.6, 0)
  pizzaBase.material = material;
  pizzaBase.position.y = 1.05
  pizzaBase.rotation.x = -Math.PI/2;
  
  const cheeseMaterial = new StandardMaterial("cheeseMaterial", scene);
  cheeseMaterial.diffuseTexture = new Texture(cheeseTex);
  cheeseMaterial.diffuseColor = new Color4(1, 1, 0, 0.5);
  let pizzaCheese = MeshBuilder.CreateDisc("cheese", {radius: 0.90, arc: 1, sideOrientation: BABYLON.Mesh.DOUBLESIDE, updatable: true}, scene);
  pizzaCheese.material = cheeseMaterial;
  pizzaCheese.position.y = 1.10
  pizzaCheese.rotation.x = -Math.PI/2;
  
  const tavernMat = new StandardMaterial("tavernMat", scene);
  tavernMat.diffuseTexture = new Texture(floorTex);
  const tavern = MeshBuilder.CreateBox("tavern", {size: 20, sideOrientation: BABYLON.Mesh.DOUBLESIDE, width: 40, length: 40}, scene);
  tavern.material = tavernMat;
  tavern.position.y = 9;

  const balloonMat = new StandardMaterial("balloonMat", scene);
  balloonMat.diffuseColor = new Color3(1, 1, 0);
  const balloon = MeshBuilder.CreateSphere("sphere", {diameterY: 1, diameterX: 0.75, diameterZ: 0.75});
  balloon.material = balloonMat;
  balloon.position.y = 4;
  balloon.position.x = 1;

  const line = MeshBuilder.CreateCylinder("line", {diameter: 0.1}, scene);
  line.position.y = 3;
  line.position.x = 1;

  let directionB = 1;
  let directionL = 1;

  scene.registerAfterRender(function () {
    let balloon = scene.getMeshByName("sphere");
    let line = scene.getMeshByName("line");
    let posB = balloon.position.y;
    let posL = line.position.y;
    if (posB < 3 || posL > 4) {
      directionB = directionB * -1
    }

    if (posL < 2 || posL > 4) {
      directionL = directionL * -1
    }

    let deltaB = directionB * 0.01;
    let deltaL = directionL * 0.01;
  
    balloon.position.y += deltaB;
    line.position.y += deltaL;
  });

  const button = document.createElement("button");
  button.id = "eatButton";
  button.innerHTML = "Eat!";
  button.style.background = "#4FFF8F";
  let gone = false;
  let arcsize = 1;
  button.onclick = function() {
    pizzaBase.dispose();
    pizzaCheese.dispose();
    button.innerHTML = "It's all gone! You can go now.";
  }
  document.body.appendChild(button);

  const signMat = new StandardMaterial("signMat", scene);
  signMat.diffuseTexture = new Texture(signTex);
  const sign = MeshBuilder.CreateDisc("sign", {tessellation: 4, sideOrientation: BABYLON.Mesh.DOUBLESIDE, radius: 10});
  sign.material = signMat;
  sign.position.y = 7;
  sign.position.x = 4;
  sign.position.z = 9;

  engine.runRenderLoop(() => {
    scene.render();
  });
};

export { createScene };