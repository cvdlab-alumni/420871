// Lamp Core CODE
	function start()
	{
		var stats = initStats();
        var scene = new THREE.Scene();
        var camera = new THREE.PerspectiveCamera(45, window.innerWidth/window.innerHeight, 0.1, 1000);
        var renderer = new THREE.WebGLRenderer();
        var trackballControls = new THREE.TrackballControls(camera);
		
        renderer.setClearColor(new THREE.Color(0xEEEEEE,1.0));
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.shadowMapEnabled = true;

        // set position and point the camera to the center of the scene
        camera.position.set(-20, 30, 20);
        camera.up = new THREE.Vector3(0,0,1);
        camera.lookAt(scene.position);
				
        // add spotlight for the shadows
        var spotLight = new THREE.SpotLight( 0xffffff );
        spotLight.position.set(-40,60,-10);
        //spotLight.castShadow = true;
        scene.add(spotLight);
		
		/* <COLORS_DEFINITION> */
		var lampColor = '#33CC33';
		var planeColor = '#663300';
        var ambientColor = '#0C0C0C';
        var lightColor = '#FFFFFF';
		var lightBulb = '#FFFACD';
		var sphereColor = '#000000';
		/* </COLORS_DEFINITION> */		
		
		function mkJoint(radius, height)
		{
			// the 'node'
			var joint = new THREE.Object3D();
		  
			var sphereGeometry = new THREE.SphereGeometry(radius, 32, 32);
			var sphereMaterial = new THREE.MeshPhongMaterial({color: sphereColor, shininess: 3, shading: THREE.FlatShading, metal : true});
			var sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
			sphere.position.set(0, 0, 0);
			sphere.castShadow = true;
			joint.add(sphere);

			var cylinderGeometry = new THREE.CylinderGeometry(radius, radius, height, 32, 32, false);
			var cylinderMaterial = new THREE.MeshPhongMaterial({color: lampColor, shininess: 3, shading: THREE.FlatShading, metal: true});
			var cylinder = new THREE.Mesh(cylinderGeometry, cylinderMaterial);
			cylinder.position.set(0, height / 2 + radius, 0);
			cylinder.castShadow = true;
			sphere.add(cylinder);

			var hook = new THREE.Object3D();
			hook.position.set(0, height/2 + radius, 0);
			cylinder.add(hook);

			joint.sphere = sphere;
			joint.cylinder = cylinder;
			joint.hook = hook;

			return joint;
		}		
		
		/** CREATION OF A LAMP OBJECT */
        var lamp = new THREE.Object3D();
        var lamp_x = 0;
        var lamp_y = 0;

		/* <LAMP_BASE> */
        var baseLampRadius = 1.7;
        var baseLampHeight = 0.5;		
		var baseLampGeometry = new THREE.CylinderGeometry(baseLampRadius, baseLampRadius, baseLampHeight, 60);
        var baseLampMaterial = new THREE.MeshPhongMaterial({color: lampColor, shininess: 30, shading: THREE.FlatShading, metal: true});
        var baseLamp = new THREE.Mesh(baseLampGeometry, baseLampMaterial);
		baseLamp.rotation.x = Math.PI/2;
		// baseLamp.position.set(-9,0,(baseLampHeight/2));
		baseLamp.position.set(0,0,(baseLampHeight/2));
		baseLamp.castShadow = true;
		lamp.add(baseLamp);
		/* </LAMP_BASE> */
		
        /* <LAMP_ARM_1> */
        var lampArmHeight = 3.5;
        var lampArmRadius = 0.3;
        var lampArm_1 = mkJoint(lampArmRadius, lampArmHeight);
        lampArm_1.position.set(0, lampArmRadius+baseLampHeight/2 ,0);
        lampArm_1.sphere.rotation.y = (Math.PI/2);
        lampArm_1.castShadow = true;
        baseLamp.add(lampArm_1);
        /* </LAMP_ARM_1> */		

        /* <LAMP_ARM_2> */
        var lampArm_2 = mkJoint(lampArmRadius, lampArmHeight);
        lampArm_1.hook.add(lampArm_2);
        lampArm_2.rotation.x = Math.PI/4;
        /* </LAMP_ARM_2> */
		
        /* <LAST_LAMP_SPHERE> */
		var sphereLampGeometry = new THREE.SphereGeometry(lampArmRadius, 32, 32);
		var sphereLampMaterial = new THREE.MeshPhongMaterial({color: sphereColor, shininess: 3, shading: THREE.FlatShading, metal: true});
		var sphereLamp = new THREE.Mesh(sphereLampGeometry, sphereLampMaterial);
		sphereLamp.position.set(0, 0, 0);
		sphereLamp.castShadow = true;
		lampArm_2.hook.add(sphereLamp);
        /* </LAST_LAMP_SPHERE> */				
		
		/* <LAMP_CEILING> */
		var lampCeilingRadius = 1.5;
		var lampCeilingGeometry = new THREE.SphereGeometry(lampCeilingRadius, 100, 100, 0, 2*Math.PI, Math.PI/2,Math.PI);
		var lampCeilingMaterial = new THREE.MeshPhongMaterial({ambient: 0xffffff, color: lampColor, shininess: 30, shading: THREE.FlatShading, metal:true, side:THREE.DoubleSide});
		var lampCeiling = new THREE.Mesh(lampCeilingGeometry, lampCeilingMaterial);
		lampCeiling.position.set(0, lampCeilingRadius+lampArmRadius, 0);
		lampCeiling.DoubleSide;
		lampCeiling.castShadow = true;
		sphereLamp.add(lampCeiling);
		sphereLamp.rotation.x = Math.PI/2;	
		/* </LAMP_CEILING> */		
		
		/* <LAMP_BULB> */
		/* <BULB_THREAD> */
		var lampBulb = new THREE.Object3D();
		var lampBulbRadiusMin = 0.2;
		var lampBulbRadiusMax = 0.5;
		var lampBulbHeight = 0.8;
		var lampBulbThreadGeometry = new THREE.CylinderGeometry(lampBulbRadiusMax, lampBulbRadiusMin, lampBulbHeight, 32 );
		var lampBulbThreadMaterial = new THREE.MeshPhongMaterial({color: '#333333', shininess: 30, shading: THREE.FlatShading});
		var lampBulbThread = new THREE.Mesh(lampBulbThreadGeometry, lampBulbThreadMaterial);
		lampBulbThread.castShadow = true;
		/* </BULB_THREAD> */
		lampBulb.add(lampBulbThread);
		/* <BULB_SPHERE> */
		var lampBulbSphereGeometry = new THREE.SphereGeometry(lampBulbRadiusMax, 32, 32, 0, 2*Math.PI, Math.PI*3/2,Math.PI/2);
		//var lampBulbMaterial = new THREE.MeshPhongMaterial({color: yellow, shininess: 10, metal: true, transparent: true});
		var lampBulbSphereMaterial = new THREE.MeshPhongMaterial({ambient: 0xffffff, color: lightBulb, shininess: 10, shading: THREE.FlatShading});
		lampBulbSphere = new THREE.Mesh(lampBulbSphereGeometry, lampBulbSphereMaterial);
		lampBulbSphere.position.set(0,lampBulbHeight/2,0);
		lampBulbSphere.castShadow = true;
		/* </BULB_SPHERE> */
		lampBulb.add(lampBulbSphere);
		lampBulb.position.set(0, -lampCeilingRadius/2, 0);
		lampBulb.castShadow = true;
		
        lampCeiling.add(lampBulb);
		/* </LAMP_BULB> */	
		
		/* <LAMP_ILLUMINATION> */	
		var bulbLight = new THREE.Object3D();
		lampBulb.add(bulbLight);
		bulbLight.position.set(0,2,0);
	
		var bulbSpotLight = new THREE.SpotLight(lightColor);
		bulbSpotLight.angle = Math.PI/9;
		bulbSpotLight.target = bulbLight;
		bulbSpotLight.intensity = 1;
		// 2 REMOVE
		//bulbSpotLight.castShadow = true;
		//bulbSpotLight.shadowCameraNear=2;
		lampBulb.add(bulbSpotLight);
		
		// ceiling light
        var lampCeilinglight = new THREE.PointLight( 0xffffff, 2, 3 );
        lampCeiling.add(lampCeilinglight);		
		/* </LAMP_ILLUMINATION> */			

		//lamp.castShadow = true;
		//scene.add(lamp);
		
		/* <DIRECTIONAL_LIGHTING> */
        var directionalLight = new THREE.DirectionalLight(lightColor);
        directionalLight.position.set(0, 0, 10);
        directionalLight.castShadow = true;
        directionalLight.shadowCameraNear = 2;
        directionalLight.shadowCameraFar = 50;
        directionalLight.shadowCameraLeft = -20;
        directionalLight.shadowCameraRight = 20;
        directionalLight.shadowCameraTop = 20;
        directionalLight.shadowCameraBottom = -20;
        directionalLight.intensity = 1;
        directionalLight.shadowMapHeight = 2048;
        directionalLight.shadowMapWidth = 2048;
        //directionalLight.castShadow = true;
        directionalLight.target = lamp;
        scene.add(directionalLight);
		/* <DIRECTIONAL_LIGHTING> */
		
        var axisHelper = new THREE.AxisHelper(3);
        scene.add(axisHelper);

		/** <PLANE> **/
        // create the ground plane
		var x_plane = 40;
        var y_plane = 25;
		var planeGeometry = new THREE.PlaneGeometry(x_plane, y_plane);
        var planeMaterial = new THREE.MeshPhongMaterial({color: planeColor, side: THREE.DoubleSide, metal: true});
        var plane = new THREE.Mesh(planeGeometry, planeMaterial);
        plane.receiveShadow = true;
        scene.add(plane);
		/** </PLANE> */

		/* <ILLUMINATED_TEXT> */
		var text_options = 
		{
			size: 2,
			height: 0.3,
			weight: "normal",
			font: "optimer",
			bevelThickness: 0.1,
			bevelSize: 0.01,
			bevelSegments: 1,
			bevelEnabled: true,
			curveSegments: 1,
			steps: 1
		};

        var textMaterial = new THREE.MeshPhongMaterial({specular: 0xffffff, color: '#0066CC', shininess: 100, metal: true});
        var textGeometry = new THREE.TextGeometry("420871", text_options);
        var the_text = new THREE.Mesh(textGeometry, textMaterial);
        the_text.position.set(x_plane/3, y_plane/4, 0.1)
        the_text.rotation.z = Math.PI*3/2;
        the_text.rotation.y = Math.PI*3/2;
        the_text.castShadow = true;
		the_text.shadowCameraNear=2;
        scene.add(the_text);
		/* <ILLUMINATED_TEXT> */


		/* <CONTROLS> */
        var controls = new function() {
          this.showAxisHelper = true;
          // lamp X
		  this.x = lamp_x;
		  // lamp Y
          this.y = lamp_y;
          this.Alpha = 1.5;
          this.Beta = 0.1;
          this.Gamma = 1.0;
          this.Delta = 0.1;
          this.Epsilon = 1.6;
          this.castShadow = true;
		  // turn on/off the light
          this.OnOff = true;
          this.lightColor = lightColor;
          this.angle = Math.PI/9;		  
          this.intensity = 1;
          this.exponent = 30;
        }

        var gui = new dat.GUI();	
		
		// <LAMP_TASK>
        var lampTask = gui.addFolder("Lamp Position");
        lampTask.add(controls, "x", -x_plane/3, x_plane/5).onChange(function (e) {
            lamp.position.x = e;
        });
        lampTask.add(controls, "y", -8, 8).onChange(function (e) {
            lamp.position.y = e;
        });
		// </LAMP_TASK>
		
		// <ANGLE_TASK>		
        var angleTask = gui.addFolder("Angles");
        angleTask.add(controls, 'Alpha', 0, 2*Math.PI).onChange(function (e) {
            lampArm_1.sphere.rotation.y = e;
        });

        angleTask.add(controls, 'Beta', 0, Math.PI/2).onChange(function (e) {
            lampArm_1.rotation.x = e;
        });

        angleTask.add(controls, 'Gamma', 0, Math.PI/2).onChange(function (e) {
            lampArm_2.rotation.x = e;
        });

        angleTask.add(controls, 'Delta', 0, 2*Math.PI).onChange(function (e) {
            lampArm_2.rotation.y = e;
        });

        angleTask.add(controls, 'Epsilon', 0, Math.PI/2).onChange(function (e) {
            sphereLamp.rotation.x = e;
        });
		// </ANGLE_TASK>	
		
		// <LIGHT_SETTINGS_TASK>
		var lightSettingsTask = gui.addFolder("Light Settings");
		lightSettingsTask.addColor(controls, 'lightColor').onChange(function (e) {
			bulbSpotLight.color = new THREE.Color(e);
		});

		lightSettingsTask.add(controls, 'angle', 0, Math.PI / 2).onChange(function (e) {
			bulbSpotLight.angle = e;
		});

		lightSettingsTask.add(controls, 'intensity', 0, 5).onChange(function (e) {
			bulbSpotLight.intensity = e;
		});

		lightSettingsTask.add(controls, 'exponent', 0, 100).onChange(function (e) {
			bulbSpotLight.exponent = e;
		});
		
		lightSettingsTask.add(controls, 'OnOff').onChange(function (e)
		{
			// turn ON the light
			if(e)
			{
				lampBulb.add(bulbSpotLight);
				lampCeiling.add(lampCeilinglight);
				the_text.castShadow = true;
				the_text.shadowCameraNear=2;
			}
			// turn FF the light			
			else
			{
				lampBulb.remove(bulbSpotLight);
				lampCeiling.remove(lampCeilinglight);
				the_text.castShadow = false;	
				the_text.shadowCameraNear=0;	
			}
        });		
		// </LIGHT_SETTINGS_TASK>	
		
		// <AXIS_CONTROL_TASK>        
		var axis_control = gui.add(controls, 'showAxisHelper');
		axis_control.onChange(function (value) {
			axisHelper.visible = value;
		});
		// </AXIS_CONTROL_TASK>  	
		/* </CONTROLS> */		
		
				
		// add the output of the renderer to the html element
		$('body').append(renderer.domElement);

		render();	

		function render()
		{
			//stats.update();
			trackballControls.update();
    
			// render using requestAnimationFrame
			requestAnimationFrame(render);
			renderer.render(scene, camera);
		}
		
		function initStats() 
		{
			var stats = new Stats();
			stats.setMode(0); // 0: fps, 1: ms
			$('body').append(stats.domElement);
			return stats;
		}
	}
