		function createAllWindows()
		{
			// kitchen window LEFT
			kitchenWindow_sx_node = createWindow(new Array(0.8, 1.6, 0.03), new Array(0.4, 1.25, 0), 'window_sx.png', 'window_sx_back.png');
			kitchenWindow_sx_node.interact = interact_window;
			kitchenWindow_sx_node.position.set(-5.5, 0.65, -7.45);
			// attribute "dx" to correctly open, but it open left
			kitchenWindow_sx_node.door.openTo = "dx";
			apartment.add(kitchenWindow_sx_node);
			
			// kitchen window RIGHT
			kitchenWindow_dx_node = createWindow(new Array(0.8, 1.6, 0.03), new Array(0.4, 1.25, 0), 'window_dx_back.png', 'window_dx.png');
			kitchenWindow_dx_node.interact = interact_window;
			kitchenWindow_dx_node.position.set(-3.9, 0.65, -7.45);
			kitchenWindow_dx_node.rotation.y = Math.PI;
			apartment.add(kitchenWindow_dx_node);
			
			// room2 window LEFT
			room1Window_sx_node = createWindow(new Array(0.8, 1.6, 0.03), new Array(0.3, 1.25, 0), 'window_sx.png', 'window_sx_back.png');
			room1Window_sx_node.interact = interact_window;
			room1Window_sx_node.position.set(2.1, 0.65, -8.85);
			// attribute "dx" to correctly open, but it open left
			room1Window_sx_node.door.openTo = "dx";
			apartment.add(room1Window_sx_node);
			
			// room2 window RIGHT
			room1Window_dx_node = createWindow(new Array(0.7, 1.6, 0.03), new Array(0.35, 1.25, 0), 'window_dx_back.png', 'window_dx.png');
			room1Window_dx_node.interact = interact_window;
			room1Window_dx_node.position.set(3.5, 0.65, -8.85);
			room1Window_dx_node.rotation.y = Math.PI;
			apartment.add(room1Window_dx_node);		
			
			// room1 window LEFT
			room2Window_sx_node = createWindow(new Array(0.03, 1, 0.7), new Array(0.3, 1.6, 0.02), 'window_sx.png', 'window_sx_back.png');
			room2Window_sx_node.interact = interact_window;
			room2Window_sx_node.position.set(3.55, 0, -1.68);
			// attribute "dx" to correctly open, but it open left
			room1Window_sx_node.door.openTo = "dx";						
			apartment.add(room2Window_sx_node);

			// room1 window RIGHT
			room2Window_dx_node = createWindow(new Array(0.03, 1, 0.7), new Array(0.3, 1.6, -0.01), 'window_dx_back.png', 'window_dx.png');
			room2Window_dx_node.interact = interact_window;
			room2Window_dx_node.position.set(3.55, 0, -0.95);	
			room2Window_dx_node.door.openTo = "dx";				
			apartment.add(room2Window_dx_node);			
			
			// bathroom window
			bathroomWindow_node = createWindow(new Array(0.03, 0.6, 0.75), new Array(0.35, 2.2, -0.03), 'window_dx.png', 'window_sx_back.png');
			bathroomWindow_node.interact = interact_window;
			bathroomWindow_node.position.set(3.5, 0, -3.12);						
			apartment.add(bathroomWindow_node);

			// bathInRoom window
			bathInRoomWindow_node = createWindow(new Array(0.03, 0.6, 0.6), new Array(0.25, 2.2, 0), 'window_sx_back.png', 'window_sx.png');
			bathInRoomWindow_node.interact = interact_window;
			bathInRoomWindow_node.position.set(3.6, 0, -5.095);						
			apartment.add(bathInRoomWindow_node);						
		}