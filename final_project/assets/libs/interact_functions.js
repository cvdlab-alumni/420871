				function interact_door()
				{
					if( !this.isOpen )
					{
						// if I set right opening
						if(this.children[0].openTo == "dx")
							this.rotation.y -= Math.PI/2;
						else
							this.rotation.y += Math.PI/2;
						this.isOpen = true;
					}
					else
					{
						// if I set right opening
						if(this.children[0].openTo == "dx")
							this.rotation.y -= -Math.PI/2;
						else
							this.rotation.y += -Math.PI/2;
						this.isOpen = false;
					}
				}
				
				function interact_window()
				{
					if( !this.isOpen )
					{
						// if I set right opening
						if(this.children[0].openTo == "dx")
							this.rotation.y -= Math.PI/2;
						else
							this.rotation.y += Math.PI/2;
						this.isOpen = true;
					}
					else
					{
						// if I set right opening
						if(this.children[0].openTo == "dx")
							this.rotation.y -= -Math.PI/2;
						else
							this.rotation.y += -Math.PI/2;
						this.isOpen = false;
					}
				}
				
				function interact_light()
				{
					if( this.light.isOff )
					{
						this.light.intensity = this.light.default_intensity;
						this.light.isOff = false;
					}
					else
					{
						this.light.isOff = true;
						this.light.intensity = 0;
					}
				}				
				
				function interact_playdemo()
				{
					if(this.demoIsPlay)
					{
						audio_demo.pause();
						this.demoIsPlay = false;
					}
					else
					{
						audio_demo = document.createElement('audio');
						source_demo = document.createElement('source');
						//source_demo.src = 'assets/sounds/' + this.note + '.mp3';
						source_demo.src = 'assets/sounds/apple_keynote.mp3';						
						audio_demo.appendChild(source_demo);
						
						this.demoIsPlay = true;
						audio_demo.play();
					}
				}

				function interact_piano()
				{
					audio = document.createElement('audio');
					source = document.createElement('source');
					source.src = 'assets/sounds/piano_' + this.note + '.mp3';
					audio.appendChild(source);
					
					audio.play();
				}	
				
				function load_tv_video()
				{
					video = document.createElement('video');
					video.src = 'assets/movies/direstraits.mp4';
					//video.autostart = true;
					//video.play();
					video.id = "video";
					
					texture = new THREE.Texture(video);
					texture.minFilter = THREE.LinearFilter;
					texture.magFilter = THREE.LinearFilter;
					texture.format = THREE.RGBFormat;
					texture.generateMipmaps = false;
			
					cube = createMesh(new THREE.BoxGeometry(0.59, 0.385, 0.001), texture);

					cube.rotation.set(Math.PI, 150*Math.PI/120, Math.PI);
					cube.position.set(-0.825, 0.822, -1.92);
					return cube;
				}
				
				function interact_tv()
				{
					if(this.isOn)
					{
						video.pause();
						video.currentTime = 0;
						this.isOn = false;
					}
					else
					{
						this.isOn = true;
						video.play();
					}
						
				}
				
				
				function interact_entryDoor(node)
				{
					if( !node.isOpen )
					{
						// if I set right opening
						if(node.children[0].openTo == "dx")
							node.rotation.y -= Math.PI/2;
						else
							node.rotation.y += Math.PI/2;
						node.isOpen = true;
					}
					else
					{
						// if I set right opening
						if(node.children[0].openTo == "dx")
							node.rotation.y -= -Math.PI/2;
						else
							node.rotation.y += -Math.PI/2;
						node.isOpen = false;
					}
				}				
				
				function playDoorbell(callback)	
				{
					audio = document.createElement('audio');
					source = document.createElement('source');
					source.src = 'assets/sounds/campanello_voce.mp3';
					audio.appendChild(source);
					
					callback(audio);
				}
				
				function interact_doorbell()
				{
					if(entrydoor_node.isOpen)
					{
						interact_entryDoor(entrydoor_node);
					}
					else	
					{
						// suona campanello
						playDoorbell(function(audio)
						{
							audio.play();	
						});
						
						// dopo aver detto chi è
						setTimeout(function()
						{
							// chiama funzione voice recognition
							callVoiceRecognition(function(result)
							{
								// check if person that knocked the door is in list of knowed people
								if($.inArray(result.toLowerCase(), people) > -1)
								{
									var text2speech = "Buongiorno " + result + "! Benvenuto nella mia casa";
									interact_entryDoor(entrydoor_node);
								}
								else
								{
									var text2speech = "mi dispiace " +result+ " ma non ti conosco e non ti apro la porta.";
								}
								
								speak(text2speech);
							});	
						}, 3500);
					}

				}
				
				function createMesh (geom, texture) 
				{
				  var materialArray = [];
				  materialArray.push(new THREE.MeshBasicMaterial({ color: 0x555555  }));
				  materialArray.push(new THREE.MeshBasicMaterial({ color: 0x555555  }));
				  materialArray.push(new THREE.MeshBasicMaterial({ color: 0x555555  }));
				  materialArray.push(new THREE.MeshBasicMaterial({ color: 0x555555   }));
				  materialArray.push(new THREE.MeshBasicMaterial({ map: texture }));
				  materialArray.push(new THREE.MeshBasicMaterial({ color: 0x555555  }));
				  var faceMaterial = new THREE.MeshFaceMaterial(materialArray);
		
				  // create a multimaterial
				  var mesh = new THREE.Mesh(geom, faceMaterial);
		
				  return mesh;
				}				
							
				function createSwitch(x, y, z)
				{
					var materials = [];
					
					materials.push(new THREE.MeshPhongMaterial( { color: 0xFFFFFF, visible: false} ));
					materials.push(new THREE.MeshPhongMaterial( { color: 0xFFFFFF, visible: false} ));
					materials.push(new THREE.MeshPhongMaterial( { color: 0xFFFFFF, visible: false} ));
					materials.push(new THREE.MeshPhongMaterial( { color: 0xFFFFFF, visible: false} ));
					materials.push(new THREE.MeshPhongMaterial( { color: 0xFFFFFF, visible: false} ));
					materials.push(new THREE.MeshPhongMaterial( { color: 0xFFFFFF, visible: false} ));												
					
					var meshFaceMaterial = new THREE.MeshFaceMaterial( materials );		
					
					// array of [x][y][z]
					var geom = new THREE.BoxGeometry(x, y, z);
					geom.computeVertexNormals();
					
					var mesh = new THREE.Mesh(geom, meshFaceMaterial);
					
					var obj = new THREE.Object3D();
					obj.mesh = mesh;
					obj.add(mesh);
					
					return obj;
				}