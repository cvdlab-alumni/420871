		function createAllFloors()
		{
			// living floor
			livingFloor_tex = THREE.ImageUtils.loadTexture("assets/textures/general/parquet2.jpg")
			livingFloor_plane = new THREE.Mesh(
				new THREE.CubeGeometry(3.198, 4.58, 0.05, 30), 
				new THREE.MeshPhongMaterial({color: 0x3c3c3c, map: livingFloor_tex})
			);
			livingFloor_plane.rotation.x = -0.5 * Math.PI;
			livingFloor_plane.position.set(-2.1, 0.12, -2.3);
			apartment.add(livingFloor_plane);
			
			// kitchen floor
			kichenFloor_tex = THREE.ImageUtils.loadTexture("assets/textures/general/kitchen_tiles3.jpg")
			kichenFloor_plane = new THREE.Mesh(
				new THREE.CubeGeometry(3.2, 2.8, 0.05, 30), 
				new THREE.MeshPhongMaterial({color: 0x3c3c3c, map: kichenFloor_tex})
			);
			kichenFloor_plane.rotation.x = -0.5 * Math.PI;
			kichenFloor_plane.position.set(-4.15, 0.1, -6);
			apartment.add(kichenFloor_plane);
			
			// room1 floor
			room1Floor_tex = THREE.ImageUtils.loadTexture("assets/textures/general/marble.jpg")
			room1Floor_plane = new THREE.Mesh(
				new THREE.CubeGeometry(4.2, 2, 0.05, 30), 
				new THREE.MeshPhongMaterial({color: 0x3c3c3c, map: room1Floor_tex})
			);
			room1Floor_plane.rotation.x = -0.5 * Math.PI;
			room1Floor_plane.position.set(1.7, 0.1, -1.3);
			apartment.add(room1Floor_plane);

			// bathroom floor
			bathroomFloor_tex = THREE.ImageUtils.loadTexture("assets/textures/general/kitchen_tiles3.jpg")
			bathroomFloor_plane = new THREE.Mesh(
				new THREE.CubeGeometry(3.2, 1.5, 0.05, 30), 
				new THREE.MeshPhongMaterial({color: 0x3c3c3c, map: bathroomFloor_tex})
			);
			bathroomFloor_plane.rotation.x = -0.5 * Math.PI;
			bathroomFloor_plane.position.set(2.2, 0.1, -3.1);
			apartment.add(bathroomFloor_plane);
		
			// bathInRoom floor
			bathInRoomFloor_tex = THREE.ImageUtils.loadTexture("assets/textures/general/kitchen_tiles.jpg")
			bathInRoomFloor_plane = new THREE.Mesh(
				new THREE.CubeGeometry(2.19, 1.6, 0.05, 30), 
				new THREE.MeshPhongMaterial({color: 0x3c3c3c, map: bathInRoomFloor_tex})
			);
			bathInRoomFloor_plane.rotation.x = -0.5 * Math.PI;
			bathInRoomFloor_plane.position.set(2.795, 0.1, -4.8);
			apartment.add(bathInRoomFloor_plane);

			// room2 floor
			room2Floor_tex = THREE.ImageUtils.loadTexture("assets/textures/general/plaster-diffuse.jpg")
			room2Floor_plane = new THREE.Mesh(
				new THREE.CubeGeometry(3.98, 3.19, 0.05, 30), 
				new THREE.MeshPhongMaterial({color: 0x3c3c3c, map: room2Floor_tex})
			);
			room2Floor_plane.rotation.x = -0.5 * Math.PI;
			room2Floor_plane.position.set(2.6, 0.1, -7.2);
			apartment.add(room2Floor_plane);	

			// bathInRoom floor
			room2_1Floor_plane = new THREE.Mesh(
				new THREE.CubeGeometry(1.1, 1.62, 0.05, 30), 
				new THREE.MeshPhongMaterial({color: 0x3c3c3c, map: room2Floor_tex})
			);
			room2_1Floor_plane.rotation.x = -0.5 * Math.PI;
			room2_1Floor_plane.position.set(1.15, 0.1, -4.8);
			apartment.add(room2_1Floor_plane);

			// daynight floor
			daynightFloor_tex = THREE.ImageUtils.loadTexture("assets/textures/general/parquet2.jpg")			
			daynightFloor_plane = new THREE.Mesh(
				new THREE.CubeGeometry(1.1, 3.38, 0.05, 30), 
				new THREE.MeshPhongMaterial({color: 0x3c3c3c, map: daynightFloor_tex})
			);
			daynightFloor_plane.rotation.x = -0.5 * Math.PI;
			daynightFloor_plane.position.set(0.05, 0.1, -4);
			apartment.add(daynightFloor_plane);								
		}