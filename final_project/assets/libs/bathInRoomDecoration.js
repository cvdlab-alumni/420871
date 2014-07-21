		function decorateBathInRoom()
		{
			bidet = new THREE.OBJMTLLoader();
			bidet.addEventListener('load', function (event)
			{
			
				object = event.content;
				
				object.scale.set(1/100, 1/100, 1/100);
				bidet_mesh = object;
				apartment.add(bidet_mesh);
				
				object.rotation.set(Math.PI, 2*Math.PI, Math.PI);
				
				object.position.set(1.7, 0.2, -4.3);
				
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
				
				object.position.set(2.8, 0.2, -4.3);
				
			});
				
			water.load(
				'assets/objs/bathrooms/water/water.obj', 
				'assets/objs/bathrooms/water/water.mtl', 
				{side: THREE.DoubleSide}
			);
			
			shower = new THREE.OBJMTLLoader();
			shower.addEventListener('load', function (event)
			{
			
				object = event.content;
				
				object.scale.set(1/100, 1/100, 1/100);
				shower_mesh = object;
				apartment.add(shower_mesh);
				
				object.rotation.set(Math.PI, Math.PI, Math.PI);
				
				object.position.set(-0.2, 0.1, -4);
				
			});
				
			shower.load(
				'assets/objs/bathrooms/doccia/doccia.obj', 
				'assets/objs/bathrooms/doccia/doccia.mtl', 
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
				
				object.position.set(3.1, 0.1, -3.65);
				
			});
				
			lavabo.load(
				'assets/objs/bathrooms/mobilettoLavaboBlu/mobilettoLavaboBlu.obj', 
				'assets/objs/bathrooms/mobilettoLavaboBlu/mobilettoLavaboBlu.mtl', 
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
				
				object.position.set(3.1, 0.1, -3.65);
				
			});
				
			mirror.load(
				'assets/objs/bathrooms/mobilettoSpecchioBlu/mobilettoSpecchioBlu.obj', 
				'assets/objs/bathrooms/mobilettoSpecchioBlu/mobilettoSpecchioBlu.mtl', 
				{side: THREE.DoubleSide}
			);
			
			fluorescent_strip = new THREE.OBJMTLLoader();
			fluorescent_strip.addEventListener('load', function (event)
			{
			
				object = event.content;
				
				object.scale.set(1/3, 1/3, 1/3);
				fluorescent_strip_mesh = object;
				apartment.add(fluorescent_strip_mesh);

				fluorescent_strip_switch = createSwitch(0.8, 0.2, 0.2);
				fluorescent_strip_switch.mesh.position.set(2.8, 2, -5.5);
				fluorescent_strip_switch.interact = interact_light;

				the_light = new THREE.PointLight(0x3333FF);
				the_light.default_intensity = 2.5;
				the_light.intensity = 0;
				the_light.distance = 1.3;
				the_light.position.set(2.8, 2, -5.1);
				the_light.isOff = true;
				
				fluorescent_strip_switch.add(the_light);
				fluorescent_strip_switch.light = the_light;
				
				apartment.add(fluorescent_strip_switch);				
				
				object.rotation.set(Math.PI, Math.PI, Math.PI);
				object.position.set(2.8, 2, -5.5);				
			});
				
			fluorescent_strip.load(
				'assets/objs/bathrooms/fluorescent-strip/fluorescent-strip.obj', 
				'assets/objs/bathrooms/fluorescent-strip/fluorescent-strip.mtl', 
				{side: THREE.DoubleSide}
			);								
		}