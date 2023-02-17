"use client";
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';


import {useRef, useEffect} from 'react';

/* 
* ts reference: https://www.typescriptlang.org/docs/handbook/2/classes.html
*/
class ThreeD {
    model: any;

    scene: any;
    camera: any;
    renderer: any;
    controls: any;
    
    clock: any;

    isReady: boolean;
    canvasElement: any;

    constructor(canvas_element:any) {
        if (typeof window === 'undefined') throw new Error("Wait until window is defined until creating instance of object..");

        this.canvasElement = canvas_element
        this.isReady = false;
        
        this.loadModel();
        this.init();
    }

    loadModel() {
        const loader = new GLTFLoader();
        loader.load('/pixel_pot.glb', 
            (obj) => {
                this.model = obj?.scene;

                this.model.traverse((modelChild:any) => {
                    if (modelChild.isMesh) {
                        console.log("Child is mesh")
                        modelChild.geometry.center();
                    }
                })

                this.model.scale.set(2,2,2);
                
                this.scene.add(this.model)
            }, 
            () => {console.log("object loading...")}, 
            (err) => {console.log(err)}
        )
    }

    init() {
        /* Set up scene */
        this.scene = new THREE.Scene();

        /* Set up camera */
        this.camera = new THREE.PerspectiveCamera( 90, window.innerWidth / window.innerHeight, 0.1, 1000 );
        this.camera.position.z = 2;

        /* Set up renderer and */
        this.renderer = new THREE.WebGLRenderer({ alpha: true });
        
        this.renderer.setClearColor( 0xffffff, 0)
        this.renderer.setSize( window.innerWidth, window.innerHeight );
        
        this.canvasElement.appendChild( this.renderer.domElement );

        /* Set up mouse controls */
        // https://stackoverflow.com/questions/18466578/rotate-camera-around-object-with-three-js
        this.controls = new OrbitControls( this.camera, this.renderer.domElement );
        this.controls.maxPolarAngle = Math.PI / 2;

        this.clock = new THREE.Clock();
        this.isReady = true;
    }

    // destroy() {
    //     delete this;
    // }

    animate() {

        if (this.model) {
            this.controls.update();

            /* Orbite motion */
            // https://stackoverflow.com/questions/18466578/rotate-camera-around-object-with-three-js
            const time = this.clock.getElapsedTime();
            
            const new_x = this.model.position.x + 1 * time;
            const new_y = Math.sin(time)*2;
            const new_z = Math.PI / 2
            const new_pos_vec = new THREE.Vector3(new_x, new_y, 0)
            
            /* Set new pos */
            this.model.rotation.set(new_x, 0, 0)
            
            /* */
            // this.camera.lookAt(this.model.position)
            this.renderer.render( this.scene, this.camera );
    
        }
        else {
            this.loadModel();
            console.log("Model object not yet loaded")
        }
        requestAnimationFrame( this.animate );
    }
}

export default function ThreeExamplePage() {
    const canvas = useRef<HTMLDivElement>(null)
    useEffect(() => {
        if (!canvas.current || typeof window === 'undefined') return;
        // const canvas3D = new ThreeD(canvas.current);
        // canvas3D.animate();

        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera( 90, window.innerWidth / window.innerHeight, 0.1, 1000 );
        
        
        const renderer = new THREE.WebGLRenderer({ alpha: true });
        // https://stackoverflow.com/questions/18466578/rotate-camera-around-object-with-three-js
        const controls = new OrbitControls( camera, renderer.domElement );
        controls.maxPolarAngle = Math.PI / 2; 
        
        const loader = new GLTFLoader();
        const clock = new THREE.Clock();
        
        renderer.setClearColor( 0xffffff, 0 );
        
        renderer.setSize( window.innerWidth, window.innerHeight );
        canvas.current.appendChild( renderer.domElement );
        var model: any;
        loader.load('/pixel_pot.glb', 
        (obj) => {
            model = obj?.scene;
            model.traverse((modelChild:any) => {
                if (modelChild.isMesh) {
                    console.log("Child is mesh")
                    modelChild.geometry.center();
                }
            })
            model.scale.set(2,2,2);

            scene.add(model)
        }, 
        () => {console.log("object loading...")}, 
        (err) => {console.log(err)}
    )


        function init() {
            camera.position.z = 2;
            // controls.autoRotate= true;
        }

        init();

        function animate() {
            controls.update();
            if (model) {

                /* Orbite motion */
                // https://stackoverflow.com/questions/18466578/rotate-camera-around-object-with-three-js
                const time = clock.getElapsedTime();
                
                const new_x = model.position.x + 1 * time;
                const new_y = Math.sin(time)*2;
                const new_z = Math.PI / 2
                const new_pos_vec = new THREE.Vector3(new_x, new_y, 0)
                
                /* Set new pos */
                model.rotation.set(new_x, 0, 0)
                
                /* */
                
                camera.lookAt(model.position)
            }
            renderer.render( scene, camera );

            requestAnimationFrame( animate );
        };

        animate();
        
        return () => {if(canvas.current) canvas.current.innerHTML = ''; scene.clear();}
    }, [])



    return (
        <div ref={canvas} className="bg-white"></div>
    )
}