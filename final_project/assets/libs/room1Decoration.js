		function decorateRoom1()
		{
			room1_bed = new THREE.OBJMTLLoader();
			room1_bed.addEventListener('load', function (event)
			{
			
				object = event.content;
				
				object.scale.set(1/100, 1/100, 1/100);
				room1_bed_mesh = object;
				apartment.add(room1_bed_mesh);
				
				object.rotation.set(Math.PI, Math.PI/2, Math.PI);
				
				object.position.set(-4.1, 0.1, 1.7);
				
			});
				
			room1_bed.load(
				'assets/objs/lettoAzzurro/lettoAzzurro.obj', 
				'assets/objs/lettoAzzurro/lettoAzzurro.mtl', 
				{side: THREE.DoubleSide}
			);
			

			room1_bedside = new THREE.OBJMTLLoader();
			room1_bedside.addEventListener('load', function (event)
			{
			
				object = event.content;
				
				object.scale.set(1/1, 1/1, 1/1);
				room1_bedside_mesh = object;
				apartment.add(room1_bedside_mesh);
				
				object.rotation.set(Math.PI, Math.PI/2, Math.PI);
				
				object.position.set(-0.2, 0.3, -1.5);
				
			});
				
			room1_bedside.load(
				'assets/objs/bedside/Nightstand.obj', 
				'assets/objs/bedside/Nightstand.mtl', 
				{side: THREE.DoubleSide}
			);
			
			
			bedside_lamp = new THREE.OBJMTLLoader();
			bedside_lamp.addEventListener('load', function (event)
			{							
				object = event.content;
				
				object.scale.set(1/200, 1/200, 1/200);
				bedside_lamp_mesh = object;
				apartment.add(bedside_lamp_mesh);
				
				bedside_lamp_switch = createSwitch(0.2, 0.4, 0.2);
				bedside_lamp_switch.mesh.position.set(-0.2, 0.7, -1.5);
				bedside_lamp_switch.interact = interact_light;

				the_light = new THREE.PointLight(0xff0000);
				the_light.default_intensity = 3;
				the_light.intensity = 0;
				the_light.distance = 1.2;
				the_light.position.set(-0.2, 0.9, -1.5);
				the_light.isOff = true;
				
				bedside_lamp_switch.add(the_light);
				bedside_lamp_switch.light = the_light;
				
				apartment.add(bedside_lamp_switch);
				
				object.rotation.set(Math.PI, Math.PI/2, Math.PI);
				
				object.position.set(-0.3, 0.5, -1.4);
				
			});
				
			bedside_lamp.load(
				'assets/objs/deskLamp1/deskLamp1.obj', 
				'assets/objs/deskLamp1/deskLamp1.mtl', 
				{side: THREE.DoubleSide}
			);		
		
		
			room1_desk = new THREE.OBJMTLLoader();
			room1_desk.addEventListener('load', function (event)
			{
			
				object = event.content;
				
				object.scale.set(1/100, 1/100, 1/100);
				room1_desk_mesh = object;
				apartment.add(room1_desk_mesh);
				
				object.rotation.set(Math.PI, -Math.PI, Math.PI);
				
				object.position.set(3, 0.5, -2);
				
			});
				
			room1_desk.load(
				'assets/objs/bureau3/bureau3.obj', 
				'assets/objs/bureau3/bureau3.mtl', 
				{side: THREE.DoubleSide}
			);
			
			room1_penbox = new THREE.OBJMTLLoader();
			room1_penbox.addEventListener('load', function (event)
			{
			
				object = event.content;
				
				object.scale.set(1/100, 1/100, 1/100);
				room1_penbox_mesh = object;
				apartment.add(room1_penbox_mesh);
				
				object.rotation.set(Math.PI, -Math.PI, Math.PI);
				
				object.position.set(3.35, 0.85, -2.1);
				
			});
				
			room1_penbox.load(
				'assets/objs/room1/penbox/penbox.obj', 
				'assets/objs/room1/penbox/penbox.mtl', 
				{side: THREE.DoubleSide}
			);

			
			room1_chair = new THREE.OBJMTLLoader();
			room1_chair.addEventListener('load', function (event)
			{
			
				object = event.content;
				
				object.scale.set(1/100, 1/100, 1/100);
				room1_chair_mesh = object;
				apartment.add(room1_chair_mesh);
				
				object.rotation.set(Math.PI, -2*Math.PI, Math.PI);
				
				object.position.set(6.56, 1.3, 0.5);
				
			});
							
			room1_chair.load(
				'assets/objs/officeChair/officeChair.obj', 
				'assets/objs/officeChair/officeChair.mtl', 
				{side: THREE.DoubleSide}
			);		
								
			room1_wardrobe = new THREE.OBJMTLLoader();
			room1_wardrobe.addEventListener('load', function (event)
			{
			
				object = event.content;
				
				object.scale.set(1/100, 1/100, 1/100);
				room1_wardrobe_mesh = object;
				apartment.add(room1_wardrobe_mesh);
				
				object.rotation.set(Math.PI, -2*Math.PI, Math.PI);
				
				object.position.set(4.6, 0.1, -0.7);
				
			});
				
			room1_wardrobe.load(
				'assets/objs/mobileAzzurro/mobileAzzurro.obj', 
				'assets/objs/mobileAzzurro/mobileAzzurro.mtl', 
				{side: THREE.DoubleSide}
			);

			piano = new THREE.OBJMTLLoader();
			piano.addEventListener('load', function (event)
			{
				object = event.content;
				
				object.scale.set(1/2, 1/2, 1/2);
				piano_mesh = object;
				apartment.add(piano_mesh);
				
//				piano_node = new THREE.Object3D();
				
				middle_C_switch = createSwitch(0.02, 0.01, 0.04);
				middle_C_switch.mesh.position.set(2.9, 0.915, -1.9);
				middle_C_switch.note = "middle_C";
				middle_C_switch.interact = interact_piano;
				apartment.add(middle_C_switch);
				
				middle_D_switch = createSwitch(0.02, 0.01, 0.04);
				middle_D_switch.mesh.position.set(2.925, 0.915, -1.9);
				middle_D_switch.note = "D";
				middle_D_switch.interact = interact_piano;	
				apartment.add(middle_D_switch);				
				
				middle_E_switch = createSwitch(0.02, 0.01, 0.04);
				middle_E_switch.mesh.position.set(2.95, 0.915, -1.9);
				middle_E_switch.note = "E";
				middle_E_switch.interact = interact_piano;	
				apartment.add(middle_E_switch);	

				middle_F_switch = createSwitch(0.02, 0.01, 0.04);
				middle_F_switch.mesh.position.set(2.975, 0.915, -1.9);
				middle_F_switch.note = "F";
				middle_F_switch.interact = interact_piano;	
				apartment.add(middle_F_switch);		

				middle_G_switch = createSwitch(0.02, 0.01, 0.04);
				middle_G_switch.mesh.position.set(3, 0.915, -1.9);
				middle_G_switch.note = "G";
				middle_G_switch.interact = interact_piano;	
				apartment.add(middle_G_switch);	

				middle_A_switch = createSwitch(0.02, 0.01, 0.04);
				middle_A_switch.mesh.position.set(3.025, 0.915, -1.9);
				middle_A_switch.note = "A";
				middle_A_switch.interact = interact_piano;	
				apartment.add(middle_A_switch);	

				middle_B_switch = createSwitch(0.02, 0.01, 0.04);
				middle_B_switch.mesh.position.set(3.05, 0.915, -1.9);
				middle_B_switch.note = "B";
				middle_B_switch.interact = interact_piano;	
				apartment.add(middle_B_switch);		
				
				demo_switch = createSwitch(0.04, 0.01, 0.04);
				demo_switch.mesh.position.set(2.71, 0.925, -2.08);
				demo_switch.note = "demo";
				demo_switch.demoIsPlay = false;
				demo_switch.interact = interact_playdemo;	
				apartment.add(demo_switch);											
				
//				piano_node.add(middle_C_switch);
//				piano_node.interact = interact_piano;
//				apartment.add(piano_node);
				
				object.rotation.set(Math.PI, -Math.PI, Math.PI);
				object.position.set(2.9, 0.89, -2);
				
			});
				
			piano.load(
				'assets/objs/MIDI-keyboard/MIDI-keyboard.obj', 
				'assets/objs/MIDI-keyboard/MIDI-keyboard.mtl', 
				{side: THREE.DoubleSide}
			);					
		}