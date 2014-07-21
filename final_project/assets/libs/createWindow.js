		//function createDoor(x, y, z, imageFile)
		function createWindow(doorDim, doorPos, frontTexture, backTexture)
		{
			var materials = [];
			
			// check if door is front or horizontal
			// if x > z ==> is front
			if(doorDim[0] > doorDim[2])
			{				
				for(var i=0; i<(6-2); i++)
				{
					materials.push(new THREE.MeshPhongMaterial( { color: 0x874823 } ));
				}
				
				materials.push(new THREE.MeshPhongMaterial( { transparent:true, map: THREE.ImageUtils.loadTexture('assets/textures/general/' + frontTexture) } ));
				materials.push(new THREE.MeshPhongMaterial( { transparent:true, map: THREE.ImageUtils.loadTexture('assets/textures/general/' + backTexture) } ));
			}
			else
			{
				materials.push(new THREE.MeshPhongMaterial( { transparent:true, map: THREE.ImageUtils.loadTexture('assets/textures/general/' + frontTexture) } ));
				materials.push(new THREE.MeshPhongMaterial( { transparent:true, map: THREE.ImageUtils.loadTexture('assets/textures/general/' + backTexture) } ));

				for(var i=0; i<(6-2); i++)
				{
					materials.push(new THREE.MeshPhongMaterial( { color: 0x874823 } ));
				}
			}
			
			var meshFaceMaterial = new THREE.MeshFaceMaterial( materials );
			
			// array of [x][y][z]
			var geom = new THREE.BoxGeometry(doorDim[0], doorDim[1], doorDim[2]);
			geom.computeVertexNormals();
			
			var door = new THREE.Mesh(geom, meshFaceMaterial);
			door.isOpen = false;
			
			// set default opening to left
			door.openTo = "sx";
			
			var door_node = new THREE.Object3D();
			
			door_node.add(door);
			door_node.door = door;
				
			door.position.set(doorPos[0], doorPos[1], doorPos[2]);
			
			return door_node;
		}
