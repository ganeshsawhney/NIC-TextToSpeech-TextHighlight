$(document).ready(function() {
	$("#radio-option-1").click(function()
	{
		if($("#radio-option-1").is(':checked'))
		{
			$('#test').html('');
		}

		var str = $('.WordSection1').text();
		var spans = str.split('।');

		var gtr="";
		var t=0;

		var refreshIntervalId = setInterval(function(){

			if(responsiveVoice.isPlaying() == false && $("#radio-option-1").is(':checked'))
			{
				var gg = spans[t];
				t=t+1;
				gtr=gg.replace(/`/g, '\'').replace ('\r', '').replace('\n', '');spans[t-1].replace('\n', '1').replace(' ', '2').split('\n\n').join('\n')

				responsiveVoice.speak(gtr, "Hindi Female");
				$('#test').html($('#test').html()+spans[t-1].split('\n\n').join('<br><br>')+' । ');
			}

			if($("#radio-option-1").is(':checked')==false)
			{
				clearInterval(refreshIntervalId);
			}

	    }, 100);



	});
});