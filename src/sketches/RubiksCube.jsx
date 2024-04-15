// Import necessary libraries
import Sketch from 'react-p5';
import { Cubie } from './classes/Cubie';
import { useCallback } from 'react';

// Define the RubiksCube component
export default function RubiksCube() {
    
    // Define variables for the Rubik's cube, its dimensions, rotation angle, and size of each cubie
    let rubiksCube  =  null,
        dim         =  3,
        angle       =  0,
        cubieSize   =  40;

    // Define variables to keep track dynamic mouse inputs, and to account for their rotations
    let lastMouseX  =  null, 
        lastMouseY  =  null,
        rotateX     =  0, 
        rotateY     =  0;

    let rotateSlice;

    // Define a state for the rotation
    let rotation = {
        axis: null,
        index: null,
        dir: null,
        angle: 0,
    };

    // The setup function runs once at the beginning
    const setup = useCallback((p5, canvasParentRef) => {

        // Create a canvas and attach it to the canvas parent ref
        p5.createCanvas(200, 200, p5.WEBGL).parent(canvasParentRef);
        
        // Initialize the Rubik's cube as a 3D array
        rubiksCube = new Array(dim);

        // Iterate over each dimension
        for (let x = 0; x < dim; x++) {

            rubiksCube[x] = new Array(dim);

            for (let y = 0; y < dim; y++) {

                rubiksCube[x][y] = new Array(dim);

                for (let z = 0; z < dim; z++) {

                    // Create a vector for the position of the cubie
                    let pos = p5.createVector(x - 1, y - 1, z - 1); // centers the Rubik's cube

                    // Create a new Cubie at the calculated position
                    rubiksCube[x][y][z] = new Cubie(
                        p5, pos.x * cubieSize, pos.y * cubieSize, pos.z * cubieSize, cubieSize
                    );
                }
            }
        }
        
        
        // Log the Rubik's cube to the console for debugging
        // console.log(rubiksCube) 
        
        // Call the rotateSlice method at regular intervals
        setInterval(() => {
            let axis = ['x', 'y', 'z'][Math.floor(Math.random() * 3)];
            let index = Math.floor(Math.random() * dim);
            let dir = Math.random() > 0.5 ? 1 : -1;
            rotation.axis = axis;
            rotation.index = index;
            rotation.dir = dir;
            rotateSlice(axis, index, dir);
            // console.log(rotation)
        }, 1000);
                    

        // Add a method to rotate a slice of the cube
        rotateSlice = (axis, index, dir) => {
            for (let x = 0; x < dim; x++) {
                for (let y = 0; y < dim; y++) {
                    for (let z = 0; z < dim; z++) {
                        let cubie = rubiksCube[x][y][z];
                        if ((axis === 'x' && x === index) ||
                            (axis === 'y' && y === index) ||
                            (axis === 'z' && z === index)) {
                            if (axis === 'x') {
                                cubie.rotateX(p5, dir);
                            } else if (axis === 'y') {
                                cubie.rotateY(p5, dir);
                            } else {
                                cubie.rotateZ(p5, dir);
                            }
                        }
                    }
                }
            }
        };

    }, []); // add dependencies here

    
    // The draw function runs every frame
    const draw = useCallback( (p5) => {
        
        // Set the background color
        p5.background('#160a0000');

        // Set the thickness of the cubie edges
        p5.strokeWeight(3);

        // control the rotation of the cube using the mouse
        if (p5.mouseIsPressed) {
            if (lastMouseX && lastMouseY) {
                let dx = p5.mouseX - lastMouseX;
                let dy = p5.mouseY - lastMouseY;
                rotateX -= dy * 0.01;
                rotateY += dx * 0.01;
            }
            lastMouseX = p5.mouseX;
            lastMouseY = p5.mouseY;
        } else {
            lastMouseX = null;
            lastMouseY = null;
        }

        
        p5.rotateX(rotateX);
        p5.rotateY(rotateY);
        

        // Rotate the scene by the angle in each axis
        p5.rotateX(angle);
        p5.rotateY(angle * 0.3);
        p5.rotateZ(angle * 0.6);

        p5.scale(0.65)
    
        // Iterate over each cubie in the Rubik's cube
        for (let x = 0; x < dim; x++) {
            for (let y = 0; y < dim; y++) {
                for (let z = 0; z < dim; z++) {
                    // Display the cubie
                    rubiksCube[x][y][z].show(p5);
                }
            }
        }

    
        // Increment the angle for the next frame
        angle += 0.01;

    }, []); // add dependencies here

    // Render the Sketch component
    return (
        <Sketch className="sketch-canvas" setup={setup} draw={draw}/>
    )
}