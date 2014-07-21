		function decorateBathroom()
		{
			bidet = new THREE.OBJMTLLoader();
			bidet.addEventListener('load', function (event)
			{
			
				object = event.content;
				
				object.scale.set(1/100, 1/100, 1/100);
				bidet_mesh = object;
				apartment.add(bidet_mesh);
				
				object.rotation.set(Math.PI, 2*Math.PI, Math.PI);
				
				object.position.set(1.3, 0.2, -2.7);
				
			});
				
			bidet.load(
				'assets/objs/bathrooms/bidet/bidet.obj', 
				'assets/objs/bathrooms/bidet/bidet.mtl', 
				{side: THREE.DoubleSide}
			);

			water = new THREE.OBJMTLLoader();
			water.addEventListener('load', function (event)
			{
			
				object = event.content;
				
				object.scale.set(1/100, 1/100, 1/100);
				water_mesh = object;
				apartment.add(water_mesh);
				
				object.rotation.set(Math.PI, 2*Math.PI, Math.PI);
				
				object.position.set(2.4, 0.2, -2.7);
				
			});
				
			water.load(
				'assets/objs/bathrooms/water/water.obj', 
				'assets/objs/bathrooms/water/water.mtl', 
				{side: THREE.DoubleSide}
			);

			lavabo = new THREE.OBJMTLLoader();
			lavabo.addEventListener('load', function (event)
			{
			
				object = event.content;
				
				object.scale.set(1/100, 1/100, 1/100);
				lavabo_mesh = object;
				apartment.add(lavabo_mesh);
				
				object.rotation.set(Math.PI, Math.PI, Math.PI);
				
				object.position.set(0, 0.1, -3.49);
				
			});
				
			lavabo.load(
				'assets/objs/bathrooms/lavabo/mobilettoLavaboWenge.obj', 
				'assets/objs/bathrooms/lavabo/materials.mtl', 
				{side: THREE.DoubleSide}
			);	

			mirror = new THREE.OBJMTLLoader();
			mirror.addEventListener('load', function (event)
			{
			
				object = event.content;
				
				object.scale.set(1/100, 1/100, 1/100);
				mirror_mesh = object;
				apartment.add(mirror_mesh);
				
				object.rotation.set(Math.PI, Math.PI, Math.PI);
				
				object.position.set(2.1, 1.8, -3.87);
				
			});
				
			mirror.load(
				'assets/objs/bathrooms/ovalMirror/ovalMirror.obj', 
				'assets/objs/bathrooms/ovalMirror/ovalMirror.mtl', 
				{side: THREE.DoubleSide}
			);

			wall_spotlight = new THREE.OBJMTLLoader();
			wall_spotlight.addEventListener('load', function (event)
			{
			
				object = event.content;
				
				object.scale.set(1/10, 1/10, 1/10);
				wall_spotlight_mesh = object;
				apartment.add(wall_spotlight_mesh);
				
				wall_spotlight_switch = createSwitch(0.2, 0.2, 0.2);
				wall_spotlight_switch.mesh.position.set(2.1, 2.5, -3.78);
				wall_spotlight_switch.interact = interact_light;

				the_light = new THREE.PointLight(0xFFFF99);
				the_light.default_intensity = 2.7;
				the_light.intensity = 0;
				the_light.distance = 1;
				the_light.position.set(2.1, 2.1, -3.2);
				the_light.isOff = true;
				
				wall_spotlight_switch.add(the_light);
				wall_spotlight_switch.light = the_light;
				
				apartment.add(wall_spotlight_switch);
				
				object.rotation.set(Math.PI, Math.PI, Math.PI);
				object.position.set(2.1, 2.5, -3.85);				
			});
				
			wall_spotlight.load(
				'assets/objs/bathrooms/wall-spotlight/wall-spotlight.obj', 
				'assets/objs/bathrooms/wall-spotlight/wall-spotlight.mtl', 
				{side: THREE.DoubleSide}
			);			
			
			bath = new THREE.OBJMTLLoader();
			bath.addEventListener('load', function (event)
			{
			
				object = event.content;
				
				object.scale.set(1/130, 1/130, 1/125);
				bath_mesh = object;
				apartment.add(bath_mesh);
				
				object.rotation.set(Math.PI, Math.PI/2, Math.PI);
				
				object.position.set(3.25, 0.1, -3.1);
				
			});
				
			bath.load(
				'assets/objs/bathrooms/bath_jay_hardy/bath_jay_hardy.obj', 
				'assets/objs/bathrooms/bath_jay_hardy/bath_jay_hardy.mtl', 
				{side: THREE.DoubleSide}
			);		
		}