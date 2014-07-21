		function decorateLiving()
		{
			sofa = new THREE.OBJMTLLoader();
			sofa.addEventListener('load', function (event)
			{
			
				object = event.content;
				
				object.scale.set(1/3.5, 1/3.5, 1/3.5);
				sofa_mesh = object;
				apartment.add(sofa_mesh);
				
				object.rotation.set(Math.PI, Math.PI, Math.PI);
				
				object.position.set(-4.8, 0.37, -1.5);
				
			});
				
			sofa.load(
				'assets/objs/couchPoofyPillows/couchPoofyPillows.obj', 
				'assets/objs/couchPoofyPillows/couchPoofyPillows.mtl', 
				{side: THREE.DoubleSide}
			);
			
			table = new THREE.OBJMTLLoader();
			table.addEventListener('load', function (event)
			{
			
				object = event.content;
				
				object.scale.set(1/100, 1/100, 1/100);
				table_mesh = object;
				apartment.add(table_mesh);
				
				object.rotation.set(Math.PI, -Math.PI/2, Math.PI);
				
				object.position.set(-2.3, 0.1, -2);
				
			});
				
			table.load(
				'assets/objs/table_chairs/obj/table_chairs.obj', 
				'assets/objs/table_chairs/obj/table_chairs.mtl', 
				{side: THREE.DoubleSide}
			);
			
			
			tv_support = new THREE.OBJMTLLoader();
			tv_support.addEventListener('load', function (event)
			{
			
				object = event.content;
				
				object.scale.set(1/100, 1/90, 1/90);
				tv_support_mesh = object;
				apartment.add(tv_support_mesh);
				
				object.rotation.set(Math.PI, -Math.PI/2, Math.PI);
				object.position.set(-0.78, 0.46, -1.9);
			});
				
			tv_support.load(
				'assets/objs/meubleHiFiBas/meubleHiFiBas.obj', 
				'assets/objs/meubleHiFiBas/meubleHiFiBas.mtl', 
				{side: THREE.DoubleSide}
			);
			
			
			tv = new THREE.OBJMTLLoader();
			tv.addEventListener('load', function (event)
			{
			
				object = event.content;
				
				object.scale.set(1/1, 1/1, 1/1);
				tv_mesh = object;
				apartment.add(tv_mesh);
				
				tv_video = load_tv_video();
				tv_video.isOn = false;
				apartment.add(tv_video);				
				
				tv_switch = createSwitch(0.4, 0.04, 0.4);
				tv_switch.mesh.position.set(-0.8, 0.5, -1.9);
				tv_switch.interact = interact_tv;
				apartment.add(tv_switch);
					
				object.rotation.set(Math.PI, 150*Math.PI/120, Math.PI);
				object.position.set(-1.45, 1.05, -1.3);
			});
				
			tv.load(
				'assets/objs/monitorLCD/monitorLCD.obj', 
				'assets/objs/monitorLCD/monitorLCD.mtl', 
				{side: THREE.DoubleSide}
			);		
				
			
			living_lamp = new THREE.OBJMTLLoader();
			living_lamp.addEventListener('load', function (event)
			{
			
				object = event.content;
				
				object.scale.set(1/100, 1/90, 1/90);
				living_lamp_mesh = object;
				apartment.add(living_lamp_mesh);

				living_lamp_switch = createSwitch(0.5, 1.6, 0.4);
				living_lamp_switch.mesh.position.set(-0.82, 0.9, -0.82);
				living_lamp_switch.interact = interact_light;

				the_light = new THREE.PointLight(0xFFFF99);
				the_light.default_intensity = 3;
				the_light.intensity = 0;
				the_light.distance = 1.2;
				the_light.position.set(-0.82, 0.8, -0.82);
				the_light.isOff = true;
				
				living_lamp_switch.add(the_light);
				living_lamp_switch.light = the_light;
				apartment.add(living_lamp_switch);
				
				object.rotation.set(Math.PI, 2*Math.PI, Math.PI);
				object.position.set(-0.78, 0.1, -0.82);
			});
				
			living_lamp.load(
				'assets/objs/living_lamp/living_lamp.obj', 
				'assets/objs/living_lamp/living_lamp.mtl', 
				{side: THREE.DoubleSide}
			);			
			
			
		}