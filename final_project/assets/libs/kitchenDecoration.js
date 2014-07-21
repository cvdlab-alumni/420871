		function decorateKitchen()
		{
			twoDoorsLowerCabinet = new THREE.OBJMTLLoader();
			twoDoorsLowerCabinet.addEventListener('load', function (event) 
			{
				object = event.content;

				object.scale.set(1/10, 1/10, 1/9.5);
				twoDoorsLowerCabinet_mesh = object;
				apartment.add(twoDoorsLowerCabinet_mesh);
				
				object.rotation.set(Math.PI, Math.PI/2, Math.PI);
				
				object.position.set(-5.34, 0.5, -5.53);
			
			});
			
			twoDoorsLowerCabinet.load(
				'assets/objs/kitchen/2DoorLowerCabinet/2DoorLowerCabinet.obj', 
				'assets/objs/kitchen/2DoorLowerCabinet/2DoorLowerCabinet.mtl', 
				{side: THREE.DoubleSide}
			);

			cornerCabinet = new THREE.OBJMTLLoader();
			cornerCabinet.addEventListener('load', function (event) 
			{
				object = event.content;

				object.scale.set(1/6, 1/4.5, 1/6);
				cornerCabinet_mesh = object;
				apartment.add(cornerCabinet_mesh);
				
				object.rotation.set(Math.PI, Math.PI/2, Math.PI);
				
				object.position.set(-5.35, 0.3, -4.9);
			
			});
			
			cornerCabinet.load(
				'assets/objs/kitchen/cornerCabinet/cornerCabinet.obj', 
				'assets/objs/kitchen/cornerCabinet/cornerCabinet.mtl', 
				{side: THREE.DoubleSide}
			);			
			

			ceramicHob = new THREE.OBJMTLLoader();
			ceramicHob.addEventListener('load', function (event) 
			{
				object = event.content;

				object.scale.set(1/110, 1/110, 1/110);
				ceramicHob_mesh = object;
				apartment.add(ceramicHob_mesh);				
				
				object.rotation.set(Math.PI, Math.PI/2, Math.PI);
				
				object.position.set(-5.4, 0.78, -5.55);
			
			});
			
			ceramicHob.load(
				'assets/objs/kitchen/ceramicHob/ceramicHob.obj', 
				'assets/objs/kitchen/ceramicHob/ceramicHob.mtl', 
				{side: THREE.DoubleSide}
			);		
			

			kitchenSinkWithMarble = new THREE.OBJMTLLoader();
			kitchenSinkWithMarble.addEventListener('load', function (event) 
			{
				object = event.content;

				object.scale.set(1/6, 1/6.3, 1/6.3);
				kitchenSinkWithMarble_mesh = object;
				apartment.add(kitchenSinkWithMarble_mesh);
				
				object.rotation.set(Math.PI, 2*Math.PI, Math.PI);
				
				object.position.set(-4.65, 0.45, -4.825);
			
			});
			
			kitchenSinkWithMarble.load(
				'assets/objs/kitchen/kitchenSinkWithMarble/kitchenSinkWithMarble.obj', 
				'assets/objs/kitchen/kitchenSinkWithMarble/kitchenSinkWithMarble.mtl', 
				{side: THREE.DoubleSide}
			);	
			
			
			drawerCabinet = new THREE.OBJMTLLoader();
			drawerCabinet.addEventListener('load', function (event) 
			{
				object = event.content;

				object.scale.set(1/6, 1/9.81, 1/11);
				drawerCabinet_mesh = object;
				apartment.add(drawerCabinet_mesh);
				
				object.rotation.set(Math.PI, Math.PI/2, Math.PI);
				
				object.position.set(-5.491, 0.475, -6.25);
			
			});
			
			drawerCabinet.load(
				'assets/objs/kitchen/3drawerCabinet/3drawerCabinet.obj', 
				'assets/objs/kitchen/3drawerCabinet/3drawerCabinet.mtl', 
				{side: THREE.DoubleSide}
			);	


			oven = new THREE.OBJMTLLoader();
			oven.addEventListener('load', function (event) 
			{
				object = event.content;

				object.scale.set(1/1, 1/1, 1/1.02);
				oven_mesh = object;
				apartment.add(oven_mesh);
				
				object.rotation.set(Math.PI, Math.PI/2, Math.PI);
				
				object.position.set(-10.685, 0.77, -5.22);
			
			});
			
			oven.load(
				'assets/objs/kitchen/oven/oven_Scene.obj', 
				'assets/objs/kitchen/oven/oven_Scene.mtl', 
				{side: THREE.DoubleSide}
			);
			
			
			upperCabinet = new THREE.OBJMTLLoader();
			upperCabinet.addEventListener('load', function (event) 
			{
				object = event.content;

				object.scale.set(1/5.65, 1/10, 1/6.4);
				upperCabinet_mesh = object;
				apartment.add(upperCabinet_mesh);
				
				object.rotation.set(Math.PI, Math.PI/2, Math.PI);
				
				object.position.set(-5.35, 1.605, -6.215);
			
			});
			
			upperCabinet.load(
				'assets/objs/kitchen/1DoorUpperCabinet/1DoorUpperCabinet.obj', 
				'assets/objs/kitchen/1DoorUpperCabinet/1DoorUpperCabinet.mtl', 
				{side: THREE.DoubleSide}
			);	
			

			frigo = new THREE.OBJMTLLoader();
			frigo.addEventListener('load', function (event) 
			{
				object = event.content;

				object.scale.set(1/100, 1/100, 1/100);
				frigo_mesh = object;
				apartment.add(frigo_mesh);
				
				object.rotation.set(Math.PI, 2*Math.PI, Math.PI);
				
				object.position.set(1, 0.1, -3.82);
			
			});
			
			frigo.load(
				'assets/objs/kitchen/frigo/frigo.obj', 
				'assets/objs/kitchen/frigo/frigo.mtl', 
				{side: THREE.DoubleSide}
			);			
			
			doorUpperCabinet = new THREE.OBJMTLLoader();
			doorUpperCabinet.addEventListener('load', function (event) 
			{
				object = event.content;

				object.scale.set(1/11, 1/11, 1/11);
				doorUpperCabinet_mesh = object;
				apartment.add(doorUpperCabinet_mesh);
				
				object.rotation.set(Math.PI, 2*Math.PI, Math.PI);
				
				object.position.set(-4.53, 1.56, -4.82);
			
			});
			
			doorUpperCabinet.load(
				'assets/objs/kitchen/2DoorUpperCabinet/2DoorUpperCabinet.obj', 
				'assets/objs/kitchen/2DoorUpperCabinet/2DoorUpperCabinet.mtl', 
				{side: THREE.DoubleSide}
			);	
			
			cornerChina = new THREE.OBJMTLLoader();
			cornerChina.addEventListener('load', function (event) 
			{
				object = event.content;

				object.scale.set(1/2, 1/2, 1/2);
				cornerChina_mesh = object;
				apartment.add(cornerChina_mesh);
				
				object.rotation.set(Math.PI, -Math.PI/2, Math.PI);
				
				object.position.set(-2.6, 1.42, -7.18);
			
			});
			
			cornerChina.load(
				'assets/objs/kitchen/cornerChina/cornerChina.obj', 
				'assets/objs/kitchen/cornerChina/cornerChina.mtl', 
				{side: THREE.DoubleSide}
			);
		}
