import {
	Component,
	ElementRef,
	OnDestroy,
	Renderer2,
	TemplateRef,
	ViewChild,
	ViewContainerRef,
} from '@angular/core';
import * as THREE from 'three';
import { randFloat } from 'three/src/math/MathUtils.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

@Component({
    selector: 'app-simulation-page',
    imports: [],
    templateUrl: './simulation-page.component.html',
    styleUrl: './simulation-page.component.css'
})
export class SimulationPageComponent {
	scene = new THREE.Scene();
	renderer = new THREE.WebGLRenderer();
	camera = new THREE.PerspectiveCamera(
		50,
		window.innerWidth / window.innerHeight,
		0.1,
		1000
	);
	document: Document = window.document;
	@ViewChild('container', { read: TemplateRef }) container:
		| TemplateRef<any>
		| undefined;

	constructor(
		private renderer2: Renderer2,
		private elementRef: ElementRef,
		private vref: ViewContainerRef
	) {
		this.renderer.setSize(window.innerWidth, window.innerHeight, false);
		this.document.body.appendChild(this.renderer.domElement);

		const objectMeshes: any[] = [];

		// this.camera.position.z = 25;
		this.camera.position.set(0, 50, 0);
		this.camera.up.set(0, 0, 1);
		this.camera.lookAt(0, 0, 0);

		this.setLightProperties('#FFFFFF', 3);
		// this.addTorusToScene();

		// Solar System
		const solarSystem = new THREE.Object3D();
		this.scene.add(solarSystem);
		objectMeshes.push(solarSystem);

		// Sun
		const sunMesh = this.addSphereToScene(
			new THREE.SphereGeometry(1, 24, 24),
			new THREE.MeshPhongMaterial({ emissive: '#FFFF00' }),
			5
		);
		solarSystem.add(sunMesh);
		const earthOrbitLine = new THREE.Mesh(
			new THREE.TorusGeometry(10, 0.1, 2, 36),
			new THREE.MeshPhongMaterial({ emissive: 'white' })
		);
		solarSystem.add(earthOrbitLine);

		// Earth Orbit
		const earthOrbit = new THREE.Object3D();
		earthOrbit.position.x = 10;
		solarSystem.add(earthOrbit);
		objectMeshes.push(earthOrbit);

		// Earth
		const earthMesh = this.addSphereToScene(
			new THREE.SphereGeometry(1, 16, 16),
			new THREE.MeshPhongMaterial({ emissive: '#112244' }),
			1
		);
		earthOrbit.add(earthMesh);

		// Moon Orbit
		const moonOrbit = new THREE.Object3D();
		moonOrbit.position.x = 2;
		earthOrbit.add(moonOrbit);
		objectMeshes.push(moonOrbit);

		// Moon
		const moonMesh = this.addSphereToScene(
			new THREE.SphereGeometry(1, 8, 8),
			new THREE.MeshPhongMaterial({ color: '#888888', emissive: '#222222' }),
			0.5
		);
		moonOrbit.add(moonMesh);

		const controls = new OrbitControls(this.camera, this.renderer.domElement);
		controls.target.set(0, 5, 0);
		controls.update();

		this.renderer.setAnimationLoop(() => this.animate(objectMeshes));
	}

	ngOnDestroy(): void {
		this.renderer2.removeChild(this.container, this.renderer.domElement);
	}

	makeInstance(geometry: any, color: string, x: number) {
		const material = new THREE.MeshPhongMaterial({ color });
		const torusMesh = new THREE.Mesh(geometry, material);
		this.scene.add(torusMesh);

		torusMesh.position.x = x;
		return torusMesh;
	}

	resizeRendererToDisplaySize(renderer: any) {
		const canvas = renderer.domElement;
		const width = canvas.clientWidth;
		const height = canvas.clientHeight;
		const needResize = canvas.width !== width || canvas.height !== height;
		if (needResize) {
			this.renderer.setSize(width, height, false);
		}
		return needResize;
	}

	// animate(meshes: any): void {
	// 	meshes.forEach((object: any) => {
	// 		// object.element.rotation.x += object.randomFloat;
	// 		object.element.rotation.y += object.randomFloat;
	// 	});

	// 	if (this.resizeRendererToDisplaySize(this.renderer)) {
	// 		const canvas = this.renderer.domElement;
	// 		this.camera.aspect = canvas.clientWidth / canvas.clientHeight;
	// 		this.camera.updateProjectionMatrix();
	// 	}

	// 	this.renderer.render(this.scene, this.camera);
	// }

	animate(meshes: any): void {
		meshes.forEach((object: any) => {
			object.rotation.z += 0.005;
		});

		if (this.resizeRendererToDisplaySize(this.renderer)) {
			const canvas = this.renderer.domElement;
			this.camera.aspect = canvas.clientWidth / canvas.clientHeight;
			this.camera.updateProjectionMatrix();
		}

		this.renderer.render(this.scene, this.camera);
	}

	addTorusToScene(): void {
		const color = 'lightblue';
		const intensity = 3;
		const light = new THREE.DirectionalLight(color, intensity);
		light.position.set(0, 0, 1);
		const geometry = new THREE.TorusGeometry(10, 3, 16, 100);
		const toruses = [
			{
				element: this.makeInstance(geometry, '#44aa88', 0),
				randomFloat: randFloat(0.01, 0.05),
			},
			{
				element: this.makeInstance(geometry, '#8844aa', -30),
				randomFloat: randFloat(0.01, 0.05),
			},
			{
				element: this.makeInstance(geometry, '#aa8844', 30),
				randomFloat: randFloat(0.01, 0.05),
			},
		];
		this.scene.add(light);
		this.renderer.setAnimationLoop(() => this.animate(toruses));
	}

	addSphereToScene(sphereGeometry: any, sunMaterial: any, scale: number): any {
		const sphereMesh = new THREE.Mesh(sphereGeometry, sunMaterial);
		sphereMesh.scale.set(scale, scale, scale);
		// this.scene.add(sphereMesh);

		return sphereMesh;
	}

	setLightProperties(color: string, intensity: number): void {
		const light = new THREE.PointLight(color, intensity);
		this.scene.add(light);
	}
}
