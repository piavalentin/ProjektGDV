/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function checkArrows(event){

    var keyCode = event.which;
    var positionDelta = 70;
    //var rotationDelta = 0.1;

    // Arrow up
    if (keyCode === 38){
        camera.position.x -= positionDelta;
    }

    // Arrow down
    else if(keyCode === 40){
        camera.position.x += positionDelta;
    }

    // Arrow left
    else if(keyCode === 37){
        camera.position.z =- positionDelta;
    }

    // Arrow right
    else if(keyCode === 39){
        camera.position.z += positionDelta;
    }

}