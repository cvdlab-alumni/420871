	/**
	 *
	 * @Author: Biagio Tagliaferro
	 * @Copyright: 2014 - Computational Graphics Uuniversity of "Roma 3"
	 *
	*/
		
	function loadVoices() {
	  // Fetch the available voices.
		var voices = speechSynthesis.getVoices();
	}
	
	// Execute loadVoices.
	loadVoices();
	
	// Chrome loads voices asynchronously.
	window.speechSynthesis.onvoiceschanged = function(e) {
	  loadVoices();
	};
	
	
	// Create a new utterance for the specified text and add it to the queue.
	function speak(text) 
	{
		// Create a new instance of SpeechSynthesisUtterance.
		var msg = new SpeechSynthesisUtterance();
		
		// Set the text.
		msg.text = text;
	
		msg.volume = parseFloat(5);
		msg.rate = parseFloat(1);
		msg.pitch = parseFloat(1);
		
		// If a voice has been selected, find the voice and set the
		// utterance instance's voice attribute.
		msg.voice = speechSynthesis.getVoices().filter(function(voice) { return voice.name == "Google Italiano"; })[0];	
	
		// Queue this utterance.
		window.speechSynthesis.speak(msg);
	}