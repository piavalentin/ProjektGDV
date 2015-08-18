 
            //FUNCTION
            function render(){            
                renderer.render(scene,camera);
                requestAnimationFrame(render);
                
                // Controls
                document.addEventListener( 'keypress', checkKeys, false );
            }

            
            
            // CONTROLS
            function checkKeys(event){
            // Key-Numbers: http://help.adobe.com/en_US/AS2LCR/Flash_10.0/help.html?content=00000520.html
                
                event = event || window.event;
                //var keyCode = event.which;
                var pos = 0.4; // movement
                var rot = 0.1; // rotation
                
                // Position
                // W-Key :: Up
                if (event.charCode === 119){
                    camera.position.z -= pos;
                    //camera.position.y += 0.1;
                    //camera.position.y -= 0.1;
                }
                
                // S-Key – Down
                else if (event.charCode === 115){
                    camera.position.z += pos;
                }
               
                // A-Key – Left
                else if (event.charCode === 97){
                    camera.position.x -= pos;
                }
                
                // D-Key – Right
                else if(event.charCode === 100){
                    camera.position.x += pos;
                }
                
                
                // Rotation
                // Arrow up - Rotate up
                else if (event.keyCode === 38){ 
                    camera.rotation.x += rot;
                } 
                
                // Arrow down - Rotate down
                else if(event.keyCode === 40){ 
                    camera.rotation.x -= rot; 
                } 
                
                // Arrow left 
                else if(event.keyCode === 37){ 
                    camera.rotation.y += rot; 
                } 
                
                // Arrow right 
                else if(event.keyCode === 39){ 
                    camera.rotation.y -= rot; 
                }

            }
            render();
            
            
            
            
            
                  
//            // CONTROLS
//            function checkKeys(event){
//            // Key-Numbers: http://help.adobe.com/en_US/AS2LCR/Flash_10.0/help.html?content=00000520.html
//                
//                event = event || window.event;
//                //var keyCode = event.which;
//                var pos = 0.4; // movement
//                var rot = 0.1; // rotation
//                
//                // Position
//                // W-Key :: Up
//                if (event.charCode === 119){
//                    camera.position.z -= pos;
//                    //camera.position.y += 0.1;
//                    //camera.position.y -= 0.1;
//                }
//                
//                // S-Key – Down
//                else if (event.charCode === 115){
//                    camera.position.z += pos;
//                }
//               
//                // A-Key – Left
//                else if (event.charCode === 97){
//                    camera.position.x -= pos;
//                }
//                
//                // D-Key – Right
//                else if(event.charCode === 100){
//                    camera.position.x += pos;
//                }
//                
//                
//                // Rotation
//                // Arrow up - Rotate up
//                else if (event.keyCode === 38){ 
//                    camera.rotation.x += rot;
//                } 
//                
//                // Arrow down - Rotate down
//                else if(event.keyCode === 40){ 
//                    camera.rotation.x -= rot; 
//                } 
//                
//                // Arrow left 
//                else if(event.keyCode === 37){ 
//                    camera.rotation.y += rot; 
//                } 
//                
//                // Arrow right 
//                else if(event.keyCode === 39){ 
//                    camera.rotation.y -= rot; 
//                }
//
//            }