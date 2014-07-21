	/**
	 *
	 * @Author: Biagio Tagliaferro
	 * @Copyright: 2014 - Computational Graphics Uuniversity of "Roma 3"
	 *
	*/
	
	// people I know! :D
	people = ['io', 'paoluzzi', 'spini', 'marino', 'biagio'];
	
	// callback is the result 2 return
	function callVoiceRecognition(callback)	
	{
		// Test browser support
		window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition || null;
		
		if (window.SpeechRecognition === null) 
		{
			alert("Spiacente, ma il tuo browser non supporta il riconoscimento vocale. (Utilizza Chrome!)");
		} 
		else
		{
			//console.log("recognition NOT null");
			recognizer = new window.SpeechRecognition();
			
			// Recogniser doesn't stop listening even if the user pauses
			recognizer.continuous = false;
			
			// Start recognising
			recognizer.onresult = function(event) 
			{
				for (var i = event.resultIndex; i < event.results.length; i++) 
				{
					if (event.results[i].isFinal) 
					{
						//console.log(event.results[i][0].transcript + ' (Confidence: ' + event.results[i][0].confidence + ')');
						//word2return = event.results[i][0].transcript;
						callback(event.results[i][0].transcript);
					} 
					else 
					{
						console.log(event.results[i][0].transcript);
					}
				}
			};

			try{
				recognizer.start();
				//console.log('Recognition started' + '<br />');
			} 
			catch(ex) {
				//console.log('Recognition error: ' + ex.message + '<br />');
			}
			
		}
	}