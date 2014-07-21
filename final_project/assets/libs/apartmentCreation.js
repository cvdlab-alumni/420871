		function createApartment()
		{			
			loader = new THREE.OBJLoader();
			loader.load('apartment.obj', function (obj) {
			
				global_o = obj;
				
				 // var material = new THREE.MeshLambertMaterial({color: 0xaaaaaa});
				 // material.side = THREE.DoubleSide;
				 // obj.children[0].material = material;
				 // mesh = obj.children[0];
				
				texture = THREE.ImageUtils.loadTexture("assets/textures/general/stone.jpg");
				
				multiMaterial = [
					new THREE.MeshLambertMaterial({color: 0xaaaaaa, side: THREE.DoubleSide, shading: THREE.FlatShading}),
					new THREE.MeshBasicMaterial({wireframe: false, overdraw: true, color: 0xffffff, side: THREE.DoubleSide, map: texture})
					//new THREE.MeshPhongMaterial({map: texture})
				];
								
		
				//mesh = THREE.SceneUtils.createMultiMaterialObject(obj.children[0].geometry, multiMaterial);
				mesh = THREE.SceneUtils.createMultiMaterialObject(obj.children[0].geometry, multiMaterial);
				
				// rotate the apartment
				mesh.rotation.y = Math.PI;
				mesh.rotation.x = Math.PI/2;
				mesh.rotation.z = Math.PI
				//mesh.position.y = -5;
				mesh.position.x = -6;
				
				//scene.add(mesh);
				apartment.add(mesh);
			});
			
			scene.add(apartment);
		}
