		function createAllDoors()
		{
			// entry door
			entrydoor_node = createDoor(new Array(0.8, 2.5, 0.05), new Array(0.4, 1.25, 0), 'door1.jpg', 'door1_back.jpg');
			//entrydoor_node.interact = interact_door;
			//entrydoor_node.interact = interact_entryDoor;
			entrydoor_node.interact = interact_doorbell;
			entrydoor_node.position.set(-3.5, 0.1, -0.15);
			//entrydoor_node.door.position.set(0.4, 1.25, 0);
			//toIntersect.push(entrydoor_node.children[0]);
			apartment.add(entrydoor_node);
			
			// kitchen door
			kitchendoor_node = createDoor(new Array(0.8, 2.5, 0.05), new Array(0.4, 1.25, 0), 'internal_door_sx.jpg', 'internal_door_dx.jpg');
			kitchendoor_node.interact = interact_door;
			kitchendoor_node.position.set(-3.5, 0.1, -4.55);
			apartment.add(kitchendoor_node);
			
			// garden door SX
			gardendoor_node_sx = createWindow(new Array(0.8, 2.5, 0.04), new Array(0.35, 1.25, 0), 'french_windows_sx.png', 'french_windows_dx.png');
			gardendoor_node_sx.interact = interact_door;
			gardendoor_node_sx.position.set(-2.25, 0.1, -4.55);
			apartment.add(gardendoor_node_sx);

			// garden door DX
			gardendoor_node_dx = createWindow(new Array(0.8, 2.5, 0.04), new Array(-0.4, 1.25, 0), 'french_windows_dx.png', 'french_windows_sx.png');
			gardendoor_node_dx.interact = interact_door;			
			gardendoor_node_dx.position.set(-0.7, 0.1, -4.55);
			gardendoor_node_dx.door.openTo = "dx";
			apartment.add(gardendoor_node_dx);			

			// room1 door
			room1door_node = createDoor(new Array(0.8, 2.5, 0.03), new Array(0.4, 1.25, 0), 'internal_door_sx.jpg', 'internal_door_dx.jpg');
			room1door_node.interact = interact_door;
			room1door_node.position.set(0.5, 0.1, -2.35);			
			room1door_node.rotation.y = Math.PI;
			apartment.add(room1door_node);
			
			// daynight door
			daynightDoor_node = createDoor(new Array(0.03, 2.5, 0.9), new Array(0.45, 1.275, 0), 'internal_door_sx.jpg', 'internal_door_sx.jpg');
			daynightDoor_node.interact = interact_door;
			daynightDoor_node.position.set(-0.9, 0.08, -3.15);				
			apartment.add(daynightDoor_node);

			// bathroom_node door
			bathroom_node = createDoor(new Array(0.03, 2.5, 0.9), new Array (0.4, 1.275, 0), 'internal_door_sx.jpg', 'internal_door_dx.jpg');
			bathroom_node.interact = interact_door;
			bathroom_node.rotation.y = Math.PI;
			bathroom_node.position.set(1.05, 0.08, -3.15);	
			apartment.add(bathroom_node);	

			// room2 door
			room2_node = createDoor(new Array(0.03, 2.5, 0.9), new Array(0.4, 1.275, 0), 'internal_door_dx.jpg', 'internal_door_sx.jpg');
			room2_node.interact = interact_door;
			room2_node.rotation.y = Math.PI;
			room2_node.position.set(1.05, 0.08, -5.1);
			apartment.add(room2_node);	

			// bathroomInRoom door
			bathroomInRoom_node = createDoor(new Array(0.03, 2.5, 0.8), new Array (0.35, 1.275, 0), 'internal_door_dx.jpg', 'internal_door_sx.jpg');
			bathroomInRoom_node.interact = interact_door;
			bathroomInRoom_node.rotation.y = Math.PI;
			bathroomInRoom_node.position.set(2.1, 0.08, -5.1);		
			apartment.add(bathroomInRoom_node);	
		}