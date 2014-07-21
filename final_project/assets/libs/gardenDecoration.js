	function decorateGarden()
	{
		// garden floor
		garden_tex = THREE.ImageUtils.loadTexture("assets/textures/general/grass_small.jpg")
		garden_plane = new THREE.Mesh(
			new THREE.CubeGeometry(15, 13, 0.05, 30), 
			new THREE.MeshPhongMaterial({color: 0x3c3c3c, map: garden_tex})
		);
		garden_plane.rotation.x = -0.5 * Math.PI;
		garden_plane.position.set(-1, 0, -4);
		apartment.add(garden_plane);
		
		// FENCE
		fencepost = new THREE.OBJMTLLoader();
		fencepost.addEventListener('load', function (event)
		{
		
			object = event.content;
			
			object.scale.set(1/3, 1/3, 1/3);
			fencepost_mesh = object;
			apartment.add(fencepost_mesh);
			
			object.rotation.set(Math.PI, -Math.PI/2, Math.PI);
			object.position.set(-8.36, 0.8, -8.64);
		});
						
		fencepost.load(
			'assets/objs/garden/fencepost1/fencepost1.obj', 
			'assets/objs/garden/fencepost1/fencepost1.mtl', 
			{side: THREE.DoubleSide}
		);
		
		// FENCE
		fencepost = new THREE.OBJMTLLoader();
		fencepost.addEventListener('load', function (event)
		{
		
			object = event.content;
			
			object.scale.set(1/3, 1/3, 1/3);
			fencepost_mesh = object;
			apartment.add(fencepost_mesh);
			
			object.rotation.set(Math.PI, -Math.PI/2, Math.PI);
			object.position.set(6.35, 0.8, -8.64);
		});
						
		fencepost.load(
			'assets/objs/garden/fencepost1/fencepost1.obj', 
			'assets/objs/garden/fencepost1/fencepost1.mtl', 
			{side: THREE.DoubleSide}
		);

		// FENCE
		fencepost = new THREE.OBJMTLLoader();
		fencepost.addEventListener('load', function (event)
		{
		
			object = event.content;
			
			object.scale.set(1/3, 1/3, 1/3);
			fencepost_mesh = object;
			apartment.add(fencepost_mesh);
			
			object.rotation.set(Math.PI, -Math.PI/2, Math.PI);
			object.position.set(6.35, 0.8, 4.15);
		});
						
		fencepost.load(
			'assets/objs/garden/fencepost1/fencepost1.obj', 
			'assets/objs/garden/fencepost1/fencepost1.mtl', 
			{side: THREE.DoubleSide}
		);			
		
		
		// FENCE ENTRY DX
		fencepost = new THREE.OBJMTLLoader();
		fencepost.addEventListener('load', function (event)
		{
		
			object = event.content;
			
			object.scale.set(1/3, 1/3, 1/3);
			fencepost_mesh = object;
			apartment.add(fencepost_mesh);
			
			object.rotation.set(Math.PI, -Math.PI/2, Math.PI);
			object.position.set(-1.85, 0.8, 3.7);
		});
						
		fencepost.load(
			'assets/objs/garden/fencepost2/fencepost2.obj', 
			'assets/objs/garden/fencepost2/fencepost2.mtl', 
			{side: THREE.DoubleSide}
		);
		
		// FENCE ENTRY SX
		fencepost = new THREE.OBJMTLLoader();
		fencepost.addEventListener('load', function (event)
		{
		
			object = event.content;
			
			object.scale.set(1/3, 1/3, 1/3);
			fencepost_mesh = object;
			apartment.add(fencepost_mesh);
			
			object.rotation.set(Math.PI, -Math.PI/2, Math.PI);
			object.position.set(-5.37, 0.8, 3.7);
		});
						
		fencepost.load(
			'assets/objs/garden/fencepost2/fencepost2.obj', 
			'assets/objs/garden/fencepost2/fencepost2.mtl', 
			{side: THREE.DoubleSide}
		);		

		
		// FENCE
		fencepost = new THREE.OBJMTLLoader();
		fencepost.addEventListener('load', function (event)
		{
		
			object = event.content;
			
			object.scale.set(1/3, 1/3, 1/3);
			fencepost_mesh = object;
			apartment.add(fencepost_mesh);
			
			object.rotation.set(Math.PI, -Math.PI/2, Math.PI);
			object.position.set(-8.36, 0.8, 4.15);
		});
						
		fencepost.load(
			'assets/objs/garden/fencepost1/fencepost1.obj', 
			'assets/objs/garden/fencepost1/fencepost1.mtl', 
			{side: THREE.DoubleSide}
		);						


		// BORDERFENCE LEFT
		borderfence = new THREE.OBJMTLLoader();
		borderfence.addEventListener('load', function (event)
		{
		
			object = event.content;
			
			object.scale.set(1/3, 1/3, 1/3);
			borderfence_mesh = object;
			apartment.add(borderfence_mesh);
			
			object.rotation.set(Math.PI, -Math.PI/2, Math.PI);
			object.position.set(-8.36, 0.6, 1.2);
		});
						
		borderfence.load(
			'assets/objs/garden/borderfence-main/borderfence-main.obj', 
			'assets/objs/garden/borderfence-main/borderfence-main.mtl', 
			{side: THREE.DoubleSide}
		);		


		// BORDERFENCE LEFT
		borderfence = new THREE.OBJMTLLoader();
		borderfence.addEventListener('load', function (event)
		{
		
			object = event.content;
			
			object.scale.set(1/3, 1/3, 1/3);
			borderfence_mesh = object;
			apartment.add(borderfence_mesh);
			
			object.rotation.set(Math.PI, -Math.PI/2, Math.PI);
			object.position.set(-8.36, 0.6, -0.8);
		});
						
		borderfence.load(
			'assets/objs/garden/borderfence-main/borderfence-main.obj', 
			'assets/objs/garden/borderfence-main/borderfence-main.mtl', 
			{side: THREE.DoubleSide}
		);	
		
		// BORDERFENCE LEFT
		borderfence = new THREE.OBJMTLLoader();
		borderfence.addEventListener('load', function (event)
		{
		
			object = event.content;
			
			object.scale.set(1/3, 1/3, 1/3);
			borderfence_mesh = object;
			apartment.add(borderfence_mesh);
			
			object.rotation.set(Math.PI, -Math.PI/2, Math.PI);
			object.position.set(-8.36, 0.6, -2.8);
		});
						
		borderfence.load(
			'assets/objs/garden/borderfence-main/borderfence-main.obj', 
			'assets/objs/garden/borderfence-main/borderfence-main.mtl', 
			{side: THREE.DoubleSide}
		);	

		// BORDERFENCE LEFT
		borderfence = new THREE.OBJMTLLoader();
		borderfence.addEventListener('load', function (event)
		{
		
			object = event.content;
			
			object.scale.set(1/3, 1/3, 1/3);
			borderfence_mesh = object;
			apartment.add(borderfence_mesh);
			
			object.rotation.set(Math.PI, -Math.PI/2, Math.PI);
			object.position.set(-8.36, 0.6, -4.8);
		});
						
		borderfence.load(
			'assets/objs/garden/borderfence-main/borderfence-main.obj', 
			'assets/objs/garden/borderfence-main/borderfence-main.mtl', 
			{side: THREE.DoubleSide}
		);			

		// BORDERFENCE LEFT
		borderfence = new THREE.OBJMTLLoader();
		borderfence.addEventListener('load', function (event)
		{
		
			object = event.content;
			
			object.scale.set(1/3, 1/3, 1/3);
			borderfence_mesh = object;
			apartment.add(borderfence_mesh);
			
			object.rotation.set(Math.PI, -Math.PI/2, Math.PI);
			object.position.set(-8.36, 0.6, -6.8);
		});
						
		borderfence.load(
			'assets/objs/garden/borderfence-main/borderfence-main.obj', 
			'assets/objs/garden/borderfence-main/borderfence-main.mtl', 
			{side: THREE.DoubleSide}
		);		

		// BORDERFENCE LEFT
		borderfence = new THREE.OBJMTLLoader();
		borderfence.addEventListener('load', function (event)
		{
		
			object = event.content;
			
			object.scale.set(1/3, 1/3, 1/3);
			borderfence_mesh = object;
			apartment.add(borderfence_mesh);
			
			object.rotation.set(Math.PI, -Math.PI/2, Math.PI);
			object.position.set(-8.36, 0.6, -8.8);
		});
						
		borderfence.load(
			'assets/objs/garden/borderfence-main/borderfence-main.obj', 
			'assets/objs/garden/borderfence-main/borderfence-main.mtl', 
			{side: THREE.DoubleSide}
		);			
		
		// BORDERFENCE LEFT
		borderfence = new THREE.OBJMTLLoader();
		borderfence.addEventListener('load', function (event)
		{
		
			object = event.content;
			
			object.scale.set(1/5, 1/3, 1/3);
			borderfence_mesh = object;
			apartment.add(borderfence_mesh);
			
			object.rotation.set(Math.PI, -Math.PI/2, Math.PI);
			object.position.set(-8.36, 0.615, -8.4);
		});
						
		borderfence.load(
			'assets/objs/garden/borderfence-small/borderfence-small.obj', 
			'assets/objs/garden/borderfence-small/borderfence-small.mtl', 
			{side: THREE.DoubleSide}
		);				


		// BORDERFENCE RIGHT
		borderfence = new THREE.OBJMTLLoader();
		borderfence.addEventListener('load', function (event)
		{
		
			object = event.content;
			
			object.scale.set(1/3, 1/3, 1/3);
			borderfence_mesh = object;
			apartment.add(borderfence_mesh);
			
			object.rotation.set(Math.PI, -Math.PI/2, Math.PI);
			object.position.set(6.35, 0.6, 1.2);
		});
						
		borderfence.load(
			'assets/objs/garden/borderfence-main/borderfence-main.obj', 
			'assets/objs/garden/borderfence-main/borderfence-main.mtl', 
			{side: THREE.DoubleSide}
		);		


		// BORDERFENCE RIGHT
		borderfence = new THREE.OBJMTLLoader();
		borderfence.addEventListener('load', function (event)
		{
		
			object = event.content;
			
			object.scale.set(1/3, 1/3, 1/3);
			borderfence_mesh = object;
			apartment.add(borderfence_mesh);
			
			object.rotation.set(Math.PI, -Math.PI/2, Math.PI);
			object.position.set(6.35, 0.6, -0.8);
		});
						
		borderfence.load(
			'assets/objs/garden/borderfence-main/borderfence-main.obj', 
			'assets/objs/garden/borderfence-main/borderfence-main.mtl', 
			{side: THREE.DoubleSide}
		);	


		// BORDERFENCE RIGHT
		borderfence = new THREE.OBJMTLLoader();
		borderfence.addEventListener('load', function (event)
		{
		
			object = event.content;
			
			object.scale.set(1/3, 1/3, 1/3);
			borderfence_mesh = object;
			apartment.add(borderfence_mesh);
			
			object.rotation.set(Math.PI, -Math.PI/2, Math.PI);
			object.position.set(6.35, 0.6, -2.8);
		});
						
		borderfence.load(
			'assets/objs/garden/borderfence-main/borderfence-main.obj', 
			'assets/objs/garden/borderfence-main/borderfence-main.mtl', 
			{side: THREE.DoubleSide}
		);	

		// BORDERFENCE RIGHT
		borderfence = new THREE.OBJMTLLoader();
		borderfence.addEventListener('load', function (event)
		{
		
			object = event.content;
			
			object.scale.set(1/3, 1/3, 1/3);
			borderfence_mesh = object;
			apartment.add(borderfence_mesh);
			
			object.rotation.set(Math.PI, -Math.PI/2, Math.PI);
			object.position.set(6.35, 0.6, -4.8);
		});
						
		borderfence.load(
			'assets/objs/garden/borderfence-main/borderfence-main.obj', 
			'assets/objs/garden/borderfence-main/borderfence-main.mtl', 
			{side: THREE.DoubleSide}
		);			

		// BORDERFENCE RIGHT
		borderfence = new THREE.OBJMTLLoader();
		borderfence.addEventListener('load', function (event)
		{
		
			object = event.content;
			
			object.scale.set(1/3, 1/3, 1/3);
			borderfence_mesh = object;
			apartment.add(borderfence_mesh);
			
			object.rotation.set(Math.PI, -Math.PI/2, Math.PI);
			object.position.set(6.35, 0.6, -6.8);
		});
						
		borderfence.load(
			'assets/objs/garden/borderfence-main/borderfence-main.obj', 
			'assets/objs/garden/borderfence-main/borderfence-main.mtl', 
			{side: THREE.DoubleSide}
		);		

		// BORDERFENCE RIGHT
		borderfence = new THREE.OBJMTLLoader();
		borderfence.addEventListener('load', function (event)
		{
		
			object = event.content;
			
			object.scale.set(1/3, 1/3, 1/3);
			borderfence_mesh = object;
			apartment.add(borderfence_mesh);
			
			object.rotation.set(Math.PI, -Math.PI/2, Math.PI);
			object.position.set(6.35, 0.6, -8.8);
		});
						
		borderfence.load(
			'assets/objs/garden/borderfence-main/borderfence-main.obj', 
			'assets/objs/garden/borderfence-main/borderfence-main.mtl', 
			{side: THREE.DoubleSide}
		);			
		
		// BORDERFENCE RIGHT
		borderfence = new THREE.OBJMTLLoader();
		borderfence.addEventListener('load', function (event)
		{
		
			object = event.content;
			
			object.scale.set(1/5, 1/3, 1/3);
			borderfence_mesh = object;
			apartment.add(borderfence_mesh);
			
			object.rotation.set(Math.PI, -Math.PI/2, Math.PI);
			object.position.set(6.35, 0.61, -8.4);
		});
						
		borderfence.load(
			'assets/objs/garden/borderfence-small/borderfence-small.obj', 
			'assets/objs/garden/borderfence-small/borderfence-small.mtl', 
			{side: THREE.DoubleSide}
		);		
		
		
		// BORDERFENCE FRONT
		borderfence = new THREE.OBJMTLLoader();
		borderfence.addEventListener('load', function (event)
		{
		
			object = event.content;
			
			object.scale.set(1/3, 1/3, 1/3);
			borderfence_mesh = object;
			apartment.add(borderfence_mesh);
			
			object.rotation.set(Math.PI, Math.PI, Math.PI);
			object.position.set(5.15, 0.6, -10.35);
		});
						
		borderfence.load(
			'assets/objs/garden/borderfence-main/borderfence-main.obj', 
			'assets/objs/garden/borderfence-main/borderfence-main.mtl', 
			{side: THREE.DoubleSide}
		);

		// BORDERFENCE FRONT
		borderfence = new THREE.OBJMTLLoader();
		borderfence.addEventListener('load', function (event)
		{
		
			object = event.content;
			
			object.scale.set(1/3, 1/3, 1/3);
			borderfence_mesh = object;
			apartment.add(borderfence_mesh);
			
			object.rotation.set(Math.PI, Math.PI, Math.PI);
			object.position.set(3.15, 0.6, -10.35);
		});
						
		borderfence.load(
			'assets/objs/garden/borderfence-main/borderfence-main.obj', 
			'assets/objs/garden/borderfence-main/borderfence-main.mtl', 
			{side: THREE.DoubleSide}
		);		

		// BORDERFENCE FRONT
		borderfence = new THREE.OBJMTLLoader();
		borderfence.addEventListener('load', function (event)
		{
		
			object = event.content;
			
			object.scale.set(1/3, 1/3, 1/3);
			borderfence_mesh = object;
			apartment.add(borderfence_mesh);
			
			object.rotation.set(Math.PI, Math.PI, Math.PI);
			object.position.set(1.15, 0.6, -10.35);
		});
						
		borderfence.load(
			'assets/objs/garden/borderfence-main/borderfence-main.obj', 
			'assets/objs/garden/borderfence-main/borderfence-main.mtl', 
			{side: THREE.DoubleSide}
		);	

		// BORDERFENCE FRONT
		borderfence = new THREE.OBJMTLLoader();
		borderfence.addEventListener('load', function (event)
		{
		
			object = event.content;
			
			object.scale.set(1/3, 1/3, 1/3);
			borderfence_mesh = object;
			apartment.add(borderfence_mesh);
			
			object.rotation.set(Math.PI, Math.PI, Math.PI);
			object.position.set(-0.8, 0.6, -10.35);
		});
						
		borderfence.load(
			'assets/objs/garden/borderfence-main/borderfence-main.obj', 
			'assets/objs/garden/borderfence-main/borderfence-main.mtl', 
			{side: THREE.DoubleSide}
		);

		// BORDERFENCE FRONT
		borderfence = new THREE.OBJMTLLoader();
		borderfence.addEventListener('load', function (event)
		{
		
			object = event.content;
			
			object.scale.set(1/3, 1/3, 1/3);
			borderfence_mesh = object;
			apartment.add(borderfence_mesh);
			
			object.rotation.set(Math.PI, Math.PI, Math.PI);
			object.position.set(-2.8, 0.6, -10.35);
		});
						
		borderfence.load(
			'assets/objs/garden/borderfence-main/borderfence-main.obj', 
			'assets/objs/garden/borderfence-main/borderfence-main.mtl', 
			{side: THREE.DoubleSide}
		);	

		// BORDERFENCE FRONT
		borderfence = new THREE.OBJMTLLoader();
		borderfence.addEventListener('load', function (event)
		{
		
			object = event.content;
			
			object.scale.set(1/3, 1/3, 1/3);
			borderfence_mesh = object;
			apartment.add(borderfence_mesh);
			
			object.rotation.set(Math.PI, Math.PI, Math.PI);
			object.position.set(-4.8, 0.6, -10.35);
		});
						
		borderfence.load(
			'assets/objs/garden/borderfence-main/borderfence-main.obj', 
			'assets/objs/garden/borderfence-main/borderfence-main.mtl', 
			{side: THREE.DoubleSide}
		);
		
		// BORDERFENCE FRONT
		borderfence = new THREE.OBJMTLLoader();
		borderfence.addEventListener('load', function (event)
		{
		
			object = event.content;
			
			object.scale.set(1/3, 1/3, 1/3);
			borderfence_mesh = object;
			apartment.add(borderfence_mesh);
			
			object.rotation.set(Math.PI, Math.PI, Math.PI);
			object.position.set(-6.8, 0.6, -10.35);
		});
						
		borderfence.load(
			'assets/objs/garden/borderfence-main/borderfence-main.obj', 
			'assets/objs/garden/borderfence-main/borderfence-main.mtl', 
			{side: THREE.DoubleSide}
		);
		
		// BORDERFENCE FRONT
		borderfence = new THREE.OBJMTLLoader();
		borderfence.addEventListener('load', function (event)
		{
		
			object = event.content;
			
			object.scale.set(1/6, 1/3, 1/3);
			borderfence_mesh = object;
			apartment.add(borderfence_mesh);
			
			object.rotation.set(Math.PI, Math.PI, Math.PI);
			object.position.set(-6.7, 0.615, -10.35);
		});
						
		borderfence.load(
			'assets/objs/garden/borderfence-small/borderfence-small.obj', 
			'assets/objs/garden/borderfence-small/borderfence-small.mtl', 
			{side: THREE.DoubleSide}
		);								
		
		
		// BORDERFENCE ENTRY
		borderfence = new THREE.OBJMTLLoader();
		borderfence.addEventListener('load', function (event)
		{
		
			object = event.content;
			
			object.scale.set(1/3, 1/3, 1/3);
			borderfence_mesh = object;
			apartment.add(borderfence_mesh);
			
			object.rotation.set(Math.PI, Math.PI, Math.PI);
			object.position.set(5.15, 0.6, 2.4);
		});
						
		borderfence.load(
			'assets/objs/garden/borderfence-main/borderfence-main.obj', 
			'assets/objs/garden/borderfence-main/borderfence-main.mtl', 
			{side: THREE.DoubleSide}
		);

		// BORDERFENCE ENTRY
		borderfence = new THREE.OBJMTLLoader();
		borderfence.addEventListener('load', function (event)
		{
		
			object = event.content;
			
			object.scale.set(1/3, 1/3, 1/3);
			borderfence_mesh = object;
			apartment.add(borderfence_mesh);
			
			object.rotation.set(Math.PI, Math.PI, Math.PI);
			object.position.set(3.15, 0.6, 2.4);
		});
						
		borderfence.load(
			'assets/objs/garden/borderfence-main/borderfence-main.obj', 
			'assets/objs/garden/borderfence-main/borderfence-main.mtl', 
			{side: THREE.DoubleSide}
		);

		// BORDERFENCE ENTRY
		borderfence = new THREE.OBJMTLLoader();
		borderfence.addEventListener('load', function (event)
		{
		
			object = event.content;
			
			object.scale.set(1/3, 1/3, 1/3);
			borderfence_mesh = object;
			apartment.add(borderfence_mesh);
			
			object.rotation.set(Math.PI, Math.PI, Math.PI);
			object.position.set(1.15, 0.6, 2.4);
		});
						
		borderfence.load(
			'assets/objs/garden/borderfence-main/borderfence-main.obj', 
			'assets/objs/garden/borderfence-main/borderfence-main.mtl', 
			{side: THREE.DoubleSide}
		);			

		// BORDERFENCE ENTRY
		borderfence = new THREE.OBJMTLLoader();
		borderfence.addEventListener('load', function (event)
		{
		
			object = event.content;
			
			object.scale.set(1/3, 1/3, 1/3);
			borderfence_mesh = object;
			apartment.add(borderfence_mesh);
			
			object.rotation.set(Math.PI, Math.PI, Math.PI);
			object.position.set(-0.8, 0.6, 2.4);
		});
						
		borderfence.load(
			'assets/objs/garden/borderfence-main/borderfence-main.obj', 
			'assets/objs/garden/borderfence-main/borderfence-main.mtl', 
			{side: THREE.DoubleSide}
		);

		// BORDERFENCE ENTRY
		borderfence = new THREE.OBJMTLLoader();
		borderfence.addEventListener('load', function (event)
		{
		
			object = event.content;
			
			object.scale.set(1/3, 1/3, 1/3);
			borderfence_mesh = object;
			apartment.add(borderfence_mesh);
			
			object.rotation.set(Math.PI, Math.PI, Math.PI);
			object.position.set(-7.3, 0.6, 2.4);
		});
						
		borderfence.load(
			'assets/objs/garden/borderfence-main/borderfence-main.obj', 
			'assets/objs/garden/borderfence-main/borderfence-main.mtl', 
			{side: THREE.DoubleSide}
		);		

		// BORDERFENCE ENTRY
		borderfence = new THREE.OBJMTLLoader();
		borderfence.addEventListener('load', function (event)
		{
		
			object = event.content;
			
			object.scale.set(1/5, 1/3, 1/3);
			borderfence_mesh = object;
			apartment.add(borderfence_mesh);
			
			object.rotation.set(Math.PI, Math.PI, Math.PI);
			object.position.set(-4.25, 0.615, 2.4);
		});
						
		borderfence.load(
			'assets/objs/garden/borderfence-small/borderfence-small.obj', 
			'assets/objs/garden/borderfence-small/borderfence-small.mtl', 
			{side: THREE.DoubleSide}
		);				
		
	}