export class Cubie {
    // The constructor is called when a new Cubie is created
    constructor(p5, x = 0.0, y = 0.0, z = 0.0, size) {
        // Create a vector for the position of the Cubie
        this.pos = p5.createVector(x, y, z);
        // Store the size of the Cubie
        this.size = size;
        // Create a vector for the orientation of the Cubie
        this.orientation = p5.createVector(0, 0, 0);
        // Create a vector for the orientation of the Cubie
        this.targetOrientation = p5.createVector(0, 0, 0);

        
        // Define the colors for each face of the cube
        this.colors = {
            front: 'red',
            back: 'orange',
            left: 'blue',
            right: 'green',
            top: 'white',
            bottom: 'yellow'
        };
    }


    // This method rotates the colors of the cube's faces around the x-axis
    rotateX(p5, dir) {
        // // Store the current top color in a temporary variable
        // let tmp = this.colors.top;
        // // If the direction is -1, rotate the colors counter-clockwise
        // // Else, rotate the colors clockwise
        // if (dir === -1) {
        //     this.colors.top = this.colors.back;
        //     this.colors.back = this.colors.bottom;
        //     this.colors.bottom = this.colors.front;
        //     this.colors.front = tmp;
        // } else {
        //     this.colors.top = this.colors.front;
        //     this.colors.front = this.colors.bottom;
        //     this.colors.bottom = this.colors.back;
        //     this.colors.back = tmp;
        // }

        this.targetOrientation.x += dir * p5.HALF_PI;


    }

    // This method rotates the colors of the cube's faces around the y-axis
    rotateY(p5, dir) {
        // // Store the current front color in a temporary variable
        // let tmp = this.colors.front;
        // // If the direction is -1, rotate the colors counter-clockwise
        // // Else, rotate the colors clockwise
        // if (dir === -1) {
        //     this.colors.front = this.colors.right;
        //     this.colors.right = this.colors.back;
        //     this.colors.back = this.colors.left;
        //     this.colors.left = tmp;
        // } else {
        //     this.colors.front = this.colors.left;
        //     this.colors.left = this.colors.back;
        //     this.colors.back = this.colors.right;
        //     this.colors.right = tmp;
        // }

        this.targetOrientation.y += dir * p5.HALF_PI;

    }

    // This method rotates the colors of the cube's faces around the z-axis
    rotateZ(p5, dir) {
        // // Store the current top color in a temporary variable
        // let tmp = this.colors.top;
        // // If the direction is -1, rotate the colors counter-clockwise
        // // Else, rotate the colors clockwise
        // if (dir === -1) {
        //     this.colors.top = this.colors.right;
        //     this.colors.right = this.colors.bottom;
        //     this.colors.bottom = this.colors.left;
        //     this.colors.left = tmp;
        // } else {
        //     this.colors.top = this.colors.left;
        //     this.colors.left = this.colors.bottom;
        //     this.colors.bottom = this.colors.right;
        //     this.colors.right = tmp;
        // }
        this.targetOrientation.z += dir * p5.HALF_PI;

    }

    // This method draws the cube
    show(p5) {

        // Interpolate between the current orientation and the target orientation
        this.orientation.x = p5.lerp(this.orientation.x, this.targetOrientation.x, 0.1);
        this.orientation.y = p5.lerp(this.orientation.y, this.targetOrientation.y, 0.1);
        this.orientation.z = p5.lerp(this.orientation.z, this.targetOrientation.z, 0.1);

        // push() and pop() are used to isolate the transformations (like translate)
        // that are done inside of them
        p5.push();

        // Move the drawing origin to the position of this Cubie
        p5.translate(this.pos.x, this.pos.y, this.pos.z);
        // Apply the rotation
        p5.rotateX(this.orientation.x);
        p5.rotateY(this.orientation.y);
        p5.rotateZ(this.orientation.z);
        // Draw the cube
        drawBox(p5, this.size, this.colors);
        // Restore the original transformations
        p5.pop();
    }  
}



// This function draws a box with each face in a different color.
function drawBox(p5, size, colors) {
    // Define the vertices for each face of the cube.
    // Each vertex is defined by its x, y, and z coordinates.
    // The coordinates are given relative to the center of the cube.
    let vertices = [
      [-size / 2, -size / 2, -size / 2], // Vertex 0
      [size / 2, -size / 2, -size / 2],  // Vertex 1
      [size / 2, size / 2, -size / 2],   // Vertex 2
      [-size / 2, size / 2, -size / 2],  // Vertex 3
      [-size / 2, -size / 2, size / 2],  // Vertex 4
      [size / 2, -size / 2, size / 2],   // Vertex 5
      [size / 2, size / 2, size / 2],    // Vertex 6
      [-size / 2, size / 2, size / 2]    // Vertex 7
    ];

    // Define the indices for each face of the cube.
    // Each face is defined by 4 indices that refer to the vertices array.
    let faces = [
      [0, 1, 2, 3], // Front face
      [1, 5, 6, 2], // Right face
      [5, 4, 7, 6], // Back face
      [4, 0, 3, 7], // Left face
      [3, 2, 6, 7], // Top face
      [4, 5, 1, 0]  // Bottom face
    ];

    // Draw each face.
    for (let i = 0; i < faces.length; i++) {
      // Set the fill color for the current face.
      // The color is retrieved from the colors object using the face name as the key.
      p5.fill(colors[Object.keys(colors)[i]]);

      // Begin a new shape.
      p5.beginShape();

      // Add each vertex to the shape.
      for (let j = 0; j < faces[i].length; j++) {
        // Get the current vertex by its index.
        let vertex = vertices[faces[i][j]];

        // Add the vertex to the shape.
        p5.vertex(vertex[0], vertex[1], vertex[2]);
      }

      // End the shape and draw it.
      p5.endShape(p5.CLOSE);
    }
}
