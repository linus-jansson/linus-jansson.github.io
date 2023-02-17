"use client";
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

import {useRef, useEffect} from 'react';

export default function ThreeExamplePage() {
    const canvas = useRef<HTMLDivElement>(null)
    useEffect(() => {
        if (!canvas.current || typeof window === 'undefined') return;

        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera( 50, window.innerWidth / window.innerHeight, 0.1, 1000 );
        
        const renderer = new THREE.WebGLRenderer({ alpha: true });
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

        // scene.add( cube );

        camera.position.z = 9;

        function animate() {
            requestAnimationFrame( animate );
            if (model) {
                // const box = new THREE.Box3().setFromObject( model );
                // const center = box.getCenter( new THREE.Vector3() );
                // model.rotation.x += 0.001;
                // camera.rotateY(0.01)
                const time = clock.getElapsedTime();

                // model.position.x = Math.sin( time ) * 2;
                // model.position.y = Math.cos( time ) * 2;
                
                camera.position.x = Math.sin( time ) * 2;
                // camera.position.z = Math.cos( time ) * 2;

                camera.lookAt(model.position)
                // model.rotateY(0.01)
                // model.rotation.set(new THREE.Vector3( 0, 0, Math.PI / 2));
                // model.rotation.z += 0.01;
            }
    
            renderer.render( scene, camera );
        };

        animate();
        
        return () => {if(canvas.current) canvas.current.innerHTML = '';}
    }, [])



    return (
        <div ref={canvas} className="bg-white"></div>
    )
}