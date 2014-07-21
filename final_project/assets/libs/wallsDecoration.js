		function decorateWalls()
		{
			// external
			external_wall = new THREE.Object3D();
			apartment.add(external_wall);
			
			// front
			external_shape = new THREE.Shape();
			external_shape.moveTo(0, 0);
			external_shape.lineTo(7.6, 0);
			external_shape.lineTo(7.6, 3.1);
			external_shape.lineTo(0, 3.1);
			hole = new THREE.Path();
			hx = 0.202;
			hz = 0.10;
			offX = 0.8;
			offZ = 2.5;
			hole.moveTo(hx, hz);
			hole.lineTo(hx + offX, hz);
			hole.lineTo(hx + offX, hz + offZ);
			hole.lineTo(hx, hz + offZ);
			external_shape.holes.push(hole);
			shape_geo = new THREE.ExtrudeGeometry(external_shape, {amount: 0, bevelEnabled: false});
			texture = THREE.ImageUtils.loadTexture("assets/textures/general/wall_stone.jpeg");
			bump = THREE.ImageUtils.loadTexture("assets/textures/general/wall_stone.jpeg");
			shape_mat = new THREE.MeshPhongMaterial({map:texture, bumpmap:bump, bumpScale:0.3});
			texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
			bump.wrapS = bump.wrapT = THREE.RepeatWrapping;
			wallpaper = new THREE.Mesh(shape_geo, shape_mat);
			wallpaper.position.set(-3.7, 0, 0.005);
			wallpaper.rotation.y = 2*Math.PI;
			external_wall.add(wallpaper);
			
			// left
			external_shape = new THREE.Shape();
			external_shape.moveTo(0, 0);
			external_shape.lineTo(4.5, 0);
			external_shape.lineTo(4.5, 3.1);
			external_shape.lineTo(0, 3.1);
			shape_geo = new THREE.ExtrudeGeometry(external_shape, {amount: 0, bevelEnabled: false});
			texture = THREE.ImageUtils.loadTexture("assets/textures/general/wall_stone.jpeg");
			bump = THREE.ImageUtils.loadTexture("assets/textures/general/wall_stone.jpeg");
			shape_mat = new THREE.MeshPhongMaterial({map:texture, bumpmap:bump, bumpScale:0.3});
			texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
			bump.wrapS = bump.wrapT = THREE.RepeatWrapping;
			wallpaper = new THREE.Mesh(shape_geo, shape_mat);
			wallpaper.position.set(-3.705, 0, 0);
			wallpaper.rotation.y = Math.PI/2;
			external_wall.add(wallpaper);

			// front
			external_shape = new THREE.Shape();
			external_shape.moveTo(0, 0);
			external_shape.lineTo(2.4, 0);
			external_shape.lineTo(2.4, 3.1);
			external_shape.lineTo(0, 3.1);
			shape_geo = new THREE.ExtrudeGeometry(external_shape, {amount: 0, bevelEnabled: false});
			texture = THREE.ImageUtils.loadTexture("assets/textures/general/wall_stone.jpeg");
			bump = THREE.ImageUtils.loadTexture("assets/textures/general/wall_stone.jpeg");
			shape_mat = new THREE.MeshPhongMaterial({map:texture, bumpmap:bump, bumpScale:0.3});
			texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
			bump.wrapS = bump.wrapT = THREE.RepeatWrapping;
			wallpaper = new THREE.Mesh(shape_geo, shape_mat);
			wallpaper.position.set(-6, 0, -4.495);
			wallpaper.rotation.y = 2*Math.PI;
			external_wall.add(wallpaper);
			
			// EXTERNAL left_kitchen
			external_shape = new THREE.Shape();
			external_shape.moveTo(0, 0);
			external_shape.lineTo(3, 0);
			external_shape.lineTo(3, 3.1);
			external_shape.lineTo(0, 3.1);
			shape_geo = new THREE.ExtrudeGeometry(external_shape, {amount: 0, bevelEnabled: false});
			texture = THREE.ImageUtils.loadTexture("assets/textures/general/wall_stone.jpeg");
			bump = THREE.ImageUtils.loadTexture("assets/textures/general/wall_stone.jpeg");
			shape_mat = new THREE.MeshPhongMaterial({map:texture, bumpmap:bump, bumpScale:0.3});
			texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
			bump.wrapS = bump.wrapT = THREE.RepeatWrapping;
			wallpaper = new THREE.Mesh(shape_geo, shape_mat);
			wallpaper.position.set(-6.005, 0, -4.5);
			wallpaper.rotation.y = Math.PI/2;
			external_wall.add(wallpaper);		

			// EXTERNAL back_kitchen
			external_shape = new THREE.Shape();
			external_shape.moveTo(0, 0);
			external_shape.lineTo(3.5, 0);
			external_shape.lineTo(3.5, 3.1);
			external_shape.lineTo(0, 3.1);
			hole = new THREE.Path();
			hx = 0.5;
			hz = 1.1;
			offX = 1.58;
			offZ = 1.6;
			hole.moveTo(hx, hz);
			hole.lineTo(hx + offX, hz);
			hole.lineTo(hx + offX, hz + offZ);
			hole.lineTo(hx, hz + offZ);
			external_shape.holes.push(hole);
			shape_geo = new THREE.ExtrudeGeometry(external_shape, {amount: 0, bevelEnabled: false});
			texture = THREE.ImageUtils.loadTexture("assets/textures/general/wall_stone.jpeg");
			bump = THREE.ImageUtils.loadTexture("assets/textures/general/wall_stone.jpeg");
			shape_mat = new THREE.MeshPhongMaterial({map:texture, bumpmap:bump, bumpScale:0.3});
			texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
			bump.wrapS = bump.wrapT = THREE.RepeatWrapping;
			wallpaper = new THREE.Mesh(shape_geo, shape_mat);
			wallpaper.position.set(-6, 0, -7.501);
			wallpaper.rotation.y = 2*Math.PI;
			external_wall.add(wallpaper);

			// EXTERNAL right_kitchen
			external_shape = new THREE.Shape();
			external_shape.moveTo(0, 0);
			external_shape.lineTo(3, 0);
			external_shape.lineTo(3, 3.1);
			external_shape.lineTo(0, 3.1);
			shape_geo = new THREE.ExtrudeGeometry(external_shape, {amount: 0, bevelEnabled: false});
			texture = THREE.ImageUtils.loadTexture("assets/textures/general/wall_stone.jpeg");
			bump = THREE.ImageUtils.loadTexture("assets/textures/general/wall_stone.jpeg");
			shape_mat = new THREE.MeshPhongMaterial({map:texture, bumpmap:bump, bumpScale:0.3});
			texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
			bump.wrapS = bump.wrapT = THREE.RepeatWrapping;
			wallpaper = new THREE.Mesh(shape_geo, shape_mat);
			wallpaper.position.set(-2.498, 0, -4.5);
			wallpaper.rotation.y = Math.PI/2;
			external_wall.add(wallpaper);				

			// EXTERNAL back_garden
			external_shape = new THREE.Shape();
			external_shape.moveTo(0, 0);
			external_shape.lineTo(2, 0);
			external_shape.lineTo(2, 3.1);
			external_shape.lineTo(0, 3.1);
			hole = new THREE.Path();
			hx = 0.2;
			hz = 0.10;
			offX = 1.6;
			offZ = 2.5;
			hole.moveTo(hx, hz);
			hole.lineTo(hx + offX, hz);
			hole.lineTo(hx + offX, hz + offZ);
			hole.lineTo(hx, hz + offZ);
			external_shape.holes.push(hole);
			shape_geo = new THREE.ExtrudeGeometry(external_shape, {amount: 0, bevelEnabled: false});
			texture = THREE.ImageUtils.loadTexture("assets/textures/general/wall_stone.jpeg");
			bump = THREE.ImageUtils.loadTexture("assets/textures/general/wall_stone.jpeg");
			shape_mat = new THREE.MeshPhongMaterial({map:texture, bumpmap:bump, bumpScale:0.3});
			texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
			bump.wrapS = bump.wrapT = THREE.RepeatWrapping;
			wallpaper = new THREE.Mesh(shape_geo, shape_mat);
			wallpaper.position.set(-2.5, 0, -4.601);
			wallpaper.rotation.y = 2*Math.PI;
			external_wall.add(wallpaper);

			// back_daynight
			external_shape = new THREE.Shape();
			external_shape.moveTo(0, 0);
			external_shape.lineTo(1.1, 0);
			external_shape.lineTo(1.1, 3.1);
			external_shape.lineTo(0, 3.1);
			shape_geo = new THREE.ExtrudeGeometry(external_shape, {amount: 0, bevelEnabled: false});
			texture = THREE.ImageUtils.loadTexture("assets/textures/general/wall_stone.jpeg");
			bump = THREE.ImageUtils.loadTexture("assets/textures/general/wall_stone.jpeg");
			shape_mat = new THREE.MeshPhongMaterial({map:texture, bumpmap:bump, bumpScale:0.3});
			texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
			bump.wrapS = bump.wrapT = THREE.RepeatWrapping;
			wallpaper = new THREE.Mesh(shape_geo, shape_mat);
			wallpaper.position.set(-0.5, 0, -5.701);
			wallpaper.rotation.y = 2*Math.PI;
			external_wall.add(wallpaper);		

			// left_daynight
			external_shape = new THREE.Shape();
			external_shape.moveTo(0, 0);
			external_shape.lineTo(1.2, 0);
			external_shape.lineTo(1.2, 3.1);
			external_shape.lineTo(0, 3.1);
			shape_geo = new THREE.ExtrudeGeometry(external_shape, {amount: 0, bevelEnabled: false});
			texture = THREE.ImageUtils.loadTexture("assets/textures/general/wall_stone.jpeg");
			bump = THREE.ImageUtils.loadTexture("assets/textures/general/wall_stone.jpeg");
			shape_mat = new THREE.MeshPhongMaterial({map:texture, bumpmap:bump, bumpScale:0.3});
			texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
			bump.wrapS = bump.wrapT = THREE.RepeatWrapping;
			wallpaper = new THREE.Mesh(shape_geo, shape_mat);
			wallpaper.position.set(-0.501, 0, -4.5);
			wallpaper.rotation.y = Math.PI/2;
			external_wall.add(wallpaper);				

			// back_room2
			external_shape = new THREE.Shape();
			external_shape.moveTo(0, 0);
			external_shape.lineTo(4.1, 0);
			external_shape.lineTo(4.1, 3.1);
			external_shape.lineTo(0, 3.1);
			hole = new THREE.Path();
			hx = 1.5;
			hz = 1.1;
			offX = 1.4;
			offZ = 1.6;
			hole.moveTo(hx, hz);
			hole.lineTo(hx + offX, hz);
			hole.lineTo(hx + offX, hz + offZ);
			hole.lineTo(hx, hz + offZ);
			external_shape.holes.push(hole);
			shape_geo = new THREE.ExtrudeGeometry(external_shape, {amount: 0, bevelEnabled: false});
			texture = THREE.ImageUtils.loadTexture("assets/textures/general/wall_stone.jpeg");
			bump = THREE.ImageUtils.loadTexture("assets/textures/general/wall_stone.jpeg");
			shape_mat = new THREE.MeshPhongMaterial({map:texture, bumpmap:bump, bumpScale:0.3});
			texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
			bump.wrapS = bump.wrapT = THREE.RepeatWrapping;
			wallpaper = new THREE.Mesh(shape_geo, shape_mat);
			wallpaper.position.set(0.6, 0, -8.901);
			wallpaper.rotation.y = 2*Math.PI;
			external_wall.add(wallpaper);				

			// left_room2
			external_shape = new THREE.Shape();
			external_shape.moveTo(0, 0);
			external_shape.lineTo(3.3, 0);
			external_shape.lineTo(3.3, 3.1);
			external_shape.lineTo(0, 3.1);
			shape_geo = new THREE.ExtrudeGeometry(external_shape, {amount: 0, bevelEnabled: false});
			texture = THREE.ImageUtils.loadTexture("assets/textures/general/wall_stone.jpeg");
			bump = THREE.ImageUtils.loadTexture("assets/textures/general/wall_stone.jpeg");
			shape_mat = new THREE.MeshPhongMaterial({map:texture, bumpmap:bump, bumpScale:0.3});
			texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
			bump.wrapS = bump.wrapT = THREE.RepeatWrapping;
			wallpaper = new THREE.Mesh(shape_geo, shape_mat);
			wallpaper.position.set(0.598, 0, -5.6);
			wallpaper.rotation.y = Math.PI/2;
			external_wall.add(wallpaper);	

			// right_room2
			external_shape = new THREE.Shape();
			external_shape.moveTo(0, 0);
			external_shape.lineTo(3.3, 0);
			external_shape.lineTo(3.3, 3.1);
			external_shape.lineTo(0, 3.1);
			shape_geo = new THREE.ExtrudeGeometry(external_shape, {amount: 0, bevelEnabled: false});
			texture = THREE.ImageUtils.loadTexture("assets/textures/general/wall_stone.jpeg");
			bump = THREE.ImageUtils.loadTexture("assets/textures/general/wall_stone.jpeg");
			shape_mat = new THREE.MeshPhongMaterial({map:texture, bumpmap:bump, bumpScale:0.3});
			texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
			bump.wrapS = bump.wrapT = THREE.RepeatWrapping;
			wallpaper = new THREE.Mesh(shape_geo, shape_mat);
			wallpaper.position.set(4.701, 0, -5.6);
			wallpaper.rotation.y = Math.PI/2;
			external_wall.add(wallpaper);			

			// front_room2
			external_shape = new THREE.Shape();
			external_shape.moveTo(0, 0);
			external_shape.lineTo(0.9, 0);
			external_shape.lineTo(0.9, 3.1);
			external_shape.lineTo(0, 3.1);
			shape_geo = new THREE.ExtrudeGeometry(external_shape, {amount: 0, bevelEnabled: false});
			texture = THREE.ImageUtils.loadTexture("assets/textures/general/wall_stone.jpeg");
			bump = THREE.ImageUtils.loadTexture("assets/textures/general/wall_stone.jpeg");
			shape_mat = new THREE.MeshPhongMaterial({map:texture, bumpmap:bump, bumpScale:0.3});
			texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
			bump.wrapS = bump.wrapT = THREE.RepeatWrapping;
			wallpaper = new THREE.Mesh(shape_geo, shape_mat);
			wallpaper.position.set(3.8, 0, -5.598);
			wallpaper.rotation.y = 2*Math.PI;
			external_wall.add(wallpaper);
			
			// RIGHT room1 and bathrooms
			external_shape = new THREE.Shape();
			external_shape.moveTo(0, 0);
			external_shape.lineTo(5.6, 0);
			external_shape.lineTo(5.6, 3.1);
			external_shape.lineTo(0, 3.1);
			hole = new THREE.Path();
			hx = 0.6;
			hz = 1.1;
			offX = 1.4;
			offZ = 1;
			hole.moveTo(hx, hz);
			hole.lineTo(hx + offX, hz);
			hole.lineTo(hx + offX, hz + offZ);
			hole.lineTo(hx, hz + offZ);
			external_shape.holes.push(hole);
			
			hole_2 = new THREE.Path();
			hx_2 = 2.775;
			hz_2 = 1.9;
			offX_2 = 0.75;
			offZ_2 = 0.6;
			hole_2.moveTo(hx_2, hz_2);
			hole_2.lineTo(hx_2 + offX_2, hz_2);
			hole_2.lineTo(hx_2 + offX_2, hz_2 + offZ_2);
			hole_2.lineTo(hx_2, hz_2 + offZ_2);
			external_shape.holes.push(hole_2);

			hole_2 = new THREE.Path();
			hx_2 = 4.8;
			hz_2 = 1.9;
			offX_2 = 0.6;
			offZ_2 = 0.6;
			hole_2.moveTo(hx_2, hz_2);
			hole_2.lineTo(hx_2 + offX_2, hz_2);
			hole_2.lineTo(hx_2 + offX_2, hz_2 + offZ_2);
			hole_2.lineTo(hx_2, hz_2 + offZ_2);
			external_shape.holes.push(hole_2);			
			
			shape_geo = new THREE.ExtrudeGeometry(external_shape, {amount: 0, bevelEnabled: false});
			texture = THREE.ImageUtils.loadTexture("assets/textures/general/wall_stone.jpeg");
			bump = THREE.ImageUtils.loadTexture("assets/textures/general/wall_stone.jpeg");
			shape_mat = new THREE.MeshPhongMaterial({map:texture, bumpmap:bump, bumpScale:0.3});
			texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
			bump.wrapS = bump.wrapT = THREE.RepeatWrapping;
			wallpaper = new THREE.Mesh(shape_geo, shape_mat);
			wallpaper.position.set(3.902, 0, 0);
			wallpaper.rotation.y = Math.PI/2;
			external_wall.add(wallpaper);
			
			// INTERNAL right_bathInRoom
			external_shape = new THREE.Shape();
			external_shape.moveTo(0, 0);
			external_shape.lineTo(1.6, 0);
			external_shape.lineTo(1.6, 3.1);
			external_shape.lineTo(0, 3.1);
			hole = new THREE.Path();
			hx = 0.8;
			hz = 1.9;
			offX = 0.6;
			offZ = 0.6;
			hole.moveTo(hx, hz);
			hole.lineTo(hx + offX, hz);
			hole.lineTo(hx + offX, hz + offZ);
			hole.lineTo(hx, hz + offZ);
			external_shape.holes.push(hole);			
			shape_geo = new THREE.ExtrudeGeometry(external_shape, {amount: 0, bevelEnabled: false});
			texture = THREE.ImageUtils.loadTexture("assets/textures/general/kitchen_tiles.jpg");
			bump = THREE.ImageUtils.loadTexture("assets/textures/general/kitchen_tiles.jpg");
			shape_mat = new THREE.MeshPhongMaterial({map:texture, bumpmap:bump, bumpScale:0.3});
			texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
			bump.wrapS = bump.wrapT = THREE.RepeatWrapping;
			wallpaper = new THREE.Mesh(shape_geo, shape_mat);
			wallpaper.position.set(3.79, 0, -4);
			wallpaper.rotation.y = Math.PI/2;
			external_wall.add(wallpaper);
			
			// INTERNAL left_bathInRoom
			external_shape = new THREE.Shape();
			external_shape.moveTo(0, 0);
			external_shape.lineTo(1.6, 0);
			external_shape.lineTo(1.6, 3.1);
			external_shape.lineTo(0, 3.1);
			hole = new THREE.Path();
			hx = 0.7;
			hz = 0.1;
			offX = 0.8;
			offZ = 2.5;
			hole.moveTo(hx, hz);
			hole.lineTo(hx + offX, hz);
			hole.lineTo(hx + offX, hz + offZ);
			hole.lineTo(hx, hz + offZ);
			external_shape.holes.push(hole);			
			shape_geo = new THREE.ExtrudeGeometry(external_shape, {amount: 0, bevelEnabled: false});
			texture = THREE.ImageUtils.loadTexture("assets/textures/general/kitchen_tiles.jpg");
			bump = THREE.ImageUtils.loadTexture("assets/textures/general/kitchen_tiles.jpg");
			shape_mat = new THREE.MeshPhongMaterial({map:texture, bumpmap:bump, bumpScale:0.3});
			texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
			bump.wrapS = bump.wrapT = THREE.RepeatWrapping;
			wallpaper = new THREE.Mesh(shape_geo, shape_mat);
			wallpaper.position.set(1.801, 0, -4);
			wallpaper.rotation.y = Math.PI/2;
			external_wall.add(wallpaper);
			
			// INTERNAL front_bathInRoom
			external_shape = new THREE.Shape();
			external_shape.moveTo(0, 0);
			external_shape.lineTo(2.05, 0);
			external_shape.lineTo(2, 3.1);
			external_shape.lineTo(0, 3.1);
			shape_geo = new THREE.ExtrudeGeometry(external_shape, {amount: 0, bevelEnabled: false});
			texture = THREE.ImageUtils.loadTexture("assets/textures/general/kitchen_tiles.jpg");
			bump = THREE.ImageUtils.loadTexture("assets/textures/general/kitchen_tiles.jpg");
			shape_mat = new THREE.MeshPhongMaterial({map:texture, bumpmap:bump, bumpScale:0.3});
			texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
			bump.wrapS = bump.wrapT = THREE.RepeatWrapping;
			wallpaper = new THREE.Mesh(shape_geo, shape_mat);
			wallpaper.position.set(3.8, 0, -5.5991);
			wallpaper.rotation.y = 2*Math.PI/2;
			external_wall.add(wallpaper);
			
			// INTERNAL back_bathInRoom
			external_shape = new THREE.Shape();
			external_shape.moveTo(0, 0);
			external_shape.lineTo(2.05, 0);
			external_shape.lineTo(2, 3.1);
			external_shape.lineTo(0, 3.1);
			shape_geo = new THREE.ExtrudeGeometry(external_shape, {amount: 0, bevelEnabled: false});
			texture = THREE.ImageUtils.loadTexture("assets/textures/general/kitchen_tiles.jpg");
			bump = THREE.ImageUtils.loadTexture("assets/textures/general/kitchen_tiles.jpg");
			shape_mat = new THREE.MeshPhongMaterial({map:texture, bumpmap:bump, bumpScale:0.3});
			texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
			bump.wrapS = bump.wrapT = THREE.RepeatWrapping;
			wallpaper = new THREE.Mesh(shape_geo, shape_mat);
			wallpaper.position.set(3.8, 0, -4.001);
			wallpaper.rotation.y = 2*Math.PI/2;
			external_wall.add(wallpaper);


			// INTERNAL right_bathroom
			external_shape = new THREE.Shape();
			external_shape.moveTo(0, 0);
			external_shape.lineTo(1.5, 0);
			external_shape.lineTo(1.5, 3.1);
			external_shape.lineTo(0, 3.1);
			hole = new THREE.Path();
			hx = 0.4;
			hz = 1.9;
			offX = 0.7;
			offZ = 0.6;
			hole.moveTo(hx, hz);
			hole.lineTo(hx + offX, hz);
			hole.lineTo(hx + offX, hz + offZ);
			hole.lineTo(hx, hz + offZ);
			external_shape.holes.push(hole);			
			shape_geo = new THREE.ExtrudeGeometry(external_shape, {amount: 0, bevelEnabled: false});
			texture = THREE.ImageUtils.loadTexture("assets/textures/general/kitchen_tiles.jpg");
			bump = THREE.ImageUtils.loadTexture("assets/textures/general/kitchen_tiles.jpg");
			shape_mat = new THREE.MeshPhongMaterial({map:texture, bumpmap:bump, bumpScale:0.3});
			texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
			bump.wrapS = bump.wrapT = THREE.RepeatWrapping;
			wallpaper = new THREE.Mesh(shape_geo, shape_mat);
			wallpaper.position.set(3.79, 0, -2.4);
			wallpaper.rotation.y = Math.PI/2;
			external_wall.add(wallpaper);

			// INTERNAL left_bathroom
			external_shape = new THREE.Shape();
			external_shape.moveTo(0, 0);
			external_shape.lineTo(1.5, 0);
			external_shape.lineTo(1.5, 3.1);
			external_shape.lineTo(0, 3.1);
			hole = new THREE.Path();
			hx = 0.3;
			hz = 0.1;
			offX = 0.9;
			offZ = 2.5;
			hole.moveTo(hx, hz);
			hole.lineTo(hx + offX, hz);
			hole.lineTo(hx + offX, hz + offZ);
			hole.lineTo(hx, hz + offZ);
			external_shape.holes.push(hole);			
			shape_geo = new THREE.ExtrudeGeometry(external_shape, {amount: 0, bevelEnabled: false});
			texture = THREE.ImageUtils.loadTexture("assets/textures/general/kitchen_tiles.jpg");
			bump = THREE.ImageUtils.loadTexture("assets/textures/general/kitchen_tiles.jpg");
			shape_mat = new THREE.MeshPhongMaterial({map:texture, bumpmap:bump, bumpScale:0.3});
			texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
			bump.wrapS = bump.wrapT = THREE.RepeatWrapping;
			wallpaper = new THREE.Mesh(shape_geo, shape_mat);
			wallpaper.position.set(0.701, 0, -2.4);
			wallpaper.rotation.y = Math.PI/2;
			external_wall.add(wallpaper);
			
			// INTERNAL front_bathroom
			external_shape = new THREE.Shape();
			external_shape.moveTo(0, 0);
			external_shape.lineTo(3.1, 0);
			external_shape.lineTo(3.1, 3.1);
			external_shape.lineTo(0, 3.1);
			shape_geo = new THREE.ExtrudeGeometry(external_shape, {amount: 0, bevelEnabled: false});
			texture = THREE.ImageUtils.loadTexture("assets/textures/general/kitchen_tiles.jpg");
			bump = THREE.ImageUtils.loadTexture("assets/textures/general/kitchen_tiles.jpg");
			shape_mat = new THREE.MeshPhongMaterial({map:texture, bumpmap:bump, bumpScale:0.3});
			texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
			bump.wrapS = bump.wrapT = THREE.RepeatWrapping;
			wallpaper = new THREE.Mesh(shape_geo, shape_mat);
			wallpaper.position.set(3.8, 0, -3.899);
			wallpaper.rotation.y = 2*Math.PI/2;
			external_wall.add(wallpaper);
			
			// INTERNAL back_bathroom
			external_shape = new THREE.Shape();
			external_shape.moveTo(0, 0);
			external_shape.lineTo(3.1, 0);
			external_shape.lineTo(3.1, 3.1);
			external_shape.lineTo(0, 3.1);
			shape_geo = new THREE.ExtrudeGeometry(external_shape, {amount: 0, bevelEnabled: false});
			texture = THREE.ImageUtils.loadTexture("assets/textures/general/kitchen_tiles.jpg");
			bump = THREE.ImageUtils.loadTexture("assets/textures/general/kitchen_tiles.jpg");
			shape_mat = new THREE.MeshPhongMaterial({map:texture, bumpmap:bump, bumpScale:0.3});
			texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
			bump.wrapS = bump.wrapT = THREE.RepeatWrapping;
			wallpaper = new THREE.Mesh(shape_geo, shape_mat);
			wallpaper.position.set(3.8, 0, -2.401);
			wallpaper.rotation.y = 2*Math.PI/2;
			external_wall.add(wallpaper);

			// INTERNAL left_kitchen
			external_shape = new THREE.Shape();
			external_shape.moveTo(0, 0);
			external_shape.lineTo(3, 0);
			external_shape.lineTo(3, 3.1);
			external_shape.lineTo(0, 3.1);
			shape_geo = new THREE.ExtrudeGeometry(external_shape, {amount: 0, bevelEnabled: false});
			texture = THREE.ImageUtils.loadTexture("assets/textures/general/kitchen_tiles.jpg");
			bump = THREE.ImageUtils.loadTexture("assets/textures/general/kitchen_tiles.jpg");
			shape_mat = new THREE.MeshPhongMaterial({map:texture, bumpmap:bump, bumpScale:0.3});
			texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
			bump.wrapS = bump.wrapT = THREE.RepeatWrapping;
			wallpaper = new THREE.Mesh(shape_geo, shape_mat);
			wallpaper.position.set(-5.698, 0, -4.5);
			wallpaper.rotation.y = Math.PI/2;
			external_wall.add(wallpaper);		

			// INTERNAL back_kitchen
			external_shape = new THREE.Shape();
			external_shape.moveTo(0, 0);
			external_shape.lineTo(3.5, 0);
			external_shape.lineTo(3.5, 3.1);
			external_shape.lineTo(0, 3.1);
			hole = new THREE.Path();
			hx = 0.5;
			hz = 1.1;
			offX = 1.58;
			offZ = 1.6;
			hole.moveTo(hx, hz);
			hole.lineTo(hx + offX, hz);
			hole.lineTo(hx + offX, hz + offZ);
			hole.lineTo(hx, hz + offZ);
			external_shape.holes.push(hole);
			shape_geo = new THREE.ExtrudeGeometry(external_shape, {amount: 0, bevelEnabled: false});
			texture = THREE.ImageUtils.loadTexture("assets/textures/general/kitchen_tiles.jpg");
			bump = THREE.ImageUtils.loadTexture("assets/textures/general/kitchen_tiles.jpg");
			shape_mat = new THREE.MeshPhongMaterial({map:texture, bumpmap:bump, bumpScale:0.3});
			texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
			bump.wrapS = bump.wrapT = THREE.RepeatWrapping;
			wallpaper = new THREE.Mesh(shape_geo, shape_mat);
			wallpaper.position.set(-6, 0, -7.398);
			wallpaper.rotation.y = 2*Math.PI;
			external_wall.add(wallpaper);

			// INTERNAL right_kitchen
			external_shape = new THREE.Shape();
			external_shape.moveTo(0, 0);
			external_shape.lineTo(3, 0);
			external_shape.lineTo(3, 3.1);
			external_shape.lineTo(0, 3.1);
			shape_geo = new THREE.ExtrudeGeometry(external_shape, {amount: 0, bevelEnabled: false});
			texture = THREE.ImageUtils.loadTexture("assets/textures/general/kitchen_tiles.jpg");
			bump = THREE.ImageUtils.loadTexture("assets/textures/general/kitchen_tiles.jpg");
			shape_mat = new THREE.MeshPhongMaterial({map:texture, bumpmap:bump, bumpScale:0.3});
			texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
			bump.wrapS = bump.wrapT = THREE.RepeatWrapping;
			wallpaper = new THREE.Mesh(shape_geo, shape_mat);
			wallpaper.position.set(-2.601, 0, -4.5);
			wallpaper.rotation.y = Math.PI/2;
			external_wall.add(wallpaper);

			// INTERNAL front_kitchen
			external_shape = new THREE.Shape();
			external_shape.moveTo(0, 0);
			external_shape.lineTo(3.5, 0);
			external_shape.lineTo(3.5, 3.1);
			external_shape.lineTo(0, 3.1);
			hole = new THREE.Path();
			hx = 2.5;
			hz = 0.1;
			offX = 0.8;
			offZ = 2.5;
			hole.moveTo(hx, hz);
			hole.lineTo(hx + offX, hz);
			hole.lineTo(hx + offX, hz + offZ);
			hole.lineTo(hx, hz + offZ);
			external_shape.holes.push(hole);
			shape_geo = new THREE.ExtrudeGeometry(external_shape, {amount: 0, bevelEnabled: false});
			texture = THREE.ImageUtils.loadTexture("assets/textures/general/kitchen_tiles.jpg");
			bump = THREE.ImageUtils.loadTexture("assets/textures/general/kitchen_tiles.jpg");
			shape_mat = new THREE.MeshPhongMaterial({map:texture, bumpmap:bump, bumpScale:0.3});
			texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
			bump.wrapS = bump.wrapT = THREE.RepeatWrapping;
			wallpaper = new THREE.Mesh(shape_geo, shape_mat);
			wallpaper.position.set(-6, 0, -4.601);
			wallpaper.rotation.y = 2*Math.PI;
			external_wall.add(wallpaper);
		}	