		function decorateRoom2()
		{
			room2_bed = new THREE.OBJMTLLoader();
			room2_bed.addEventListener('load', function (event)
			{
			
				object = event.content;
				
				object.scale.set(1/100, 1/100, 1/100);
				room2_bed_mesh = object;
				apartment.add(room2_bed_mesh);
				
				object.rotation.set(Math.PI, -Math.PI/2, Math.PI);
				
				object.position.set(2.2, 0.4, -7.2);
				
			});
							
			room2_bed.load(
				'assets/objs/room2_bed/lit.obj', 
				'assets/objs/room2_bed/lit.mtl', 
				{side: THREE.DoubleSide}
			);


			room2_bedside = new THREE.OBJMTLLoader();
			room2_bedside.addEventListener('load', function (event)
			{
			
				object = event.content;
				
				object.scale.set(1/5, 1/5, 1/5);
				room2_bedside_mesh = object;
				apartment.add(room2_bedside_mesh);
				
				object.rotation.set(Math.PI, -Math.PI/2, Math.PI);
				
				object.position.set(3.95, 0.5, -8.4);
				
			});
							
			room2_bedside.load(
				'assets/objs/Basic cabinet/room2_bedside.obj', 
				'assets/objs/Basic cabinet/room2_bedside.mtl', 
				{side: THREE.DoubleSide}
			);
			

			room2_bedside_lamp= new THREE.OBJMTLLoader();
			room2_bedside_lamp.addEventListener('load', function (event)
			{
			
				object = event.content;
				
				object.scale.set(1/100, 1/150, 1/100);
				room2_bedside_lamp_mesh = object;
				apartment.add(room2_bedside_lamp_mesh);
				
				room2_bedside_lamp_switch = createSwitch(0.2, 0.4, 0.2);
				room2_bedside_lamp_switch.mesh.position.set(3.95, 1.1, -8.4);
				room2_bedside_lamp_switch.interact = interact_light;

				the_light = new THREE.PointLight(0xFFFF99);
				the_light.default_intensity = 3;
				the_light.intensity = 0;
				the_light.distance = 1.5;
				the_light.position.set(3.6, 2, -8.2);
				the_light.isOff = true;
				
				room2_bedside_lamp_switch.add(the_light);
				room2_bedside_lamp_switch.light = the_light;
				
				apartment.add(room2_bedside_lamp_switch);

				
				object.rotation.set(Math.PI, -Math.PI/2, Math.PI);
				object.position.set(3.95, 0.9, -8.4);
			});
							
			room2_bedside_lamp.load(
				'assets/objs/table_lamp/table_lamp.obj', 
				'assets/objs/table_lamp/table_lamp.mtl', 
				{side: THREE.DoubleSide}
			);			
			
			room2_wardrobe = new THREE.OBJMTLLoader();
			room2_wardrobe.addEventListener('load', function (event)
			{
			
				object = event.content;
				
				object.scale.set(1/100, 1/100, 1/100);
				room2_wardrobe_mesh = object;
				apartment.add(room2_wardrobe_mesh);
				
				object.rotation.set(Math.PI, Math.PI/2, Math.PI);
				
				object.position.set(1.25, 1.1, -8.4);
				
			});
							
			room2_wardrobe.load(
				'assets/objs/room2_wardrobe/armoireLotus.obj', 
				'assets/objs/room2_wardrobe/armoireLotus.mtl', 
				{side: THREE.DoubleSide}
			);
		}
