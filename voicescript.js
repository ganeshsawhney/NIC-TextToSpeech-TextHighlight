$(document).ready(function() {

		var str = $('.WordSection1').text();
		var spans = str.split('।');

		var gtr="";
		var t=0;

		$("#radio-option-2").click(function()
	{
		t=0;
		$('#test').html('');
		$('#test1').html('');
				for (var cnt = t; cnt < spans.length; cnt++)
				{
					$('#test1').html($('#test1').html()+spans[cnt].split('\n\n').join('<br><br>')+' । ');
				}
	});

	$("#radio-option-1").click(function()
	{
	


		var refreshIntervalId = setInterval(function(){

			if(responsiveVoice.isPlaying() == false && $("#radio-option-1").is(':checked'))
			{
				var gg = spans[t];
				t=t+1;
				gtr=gg.replace(/`/g, '\'').replace ('\r', '').replace('\n', '');spans[t-1].replace('\n', '1').replace(' ', '2').split('\n\n').join('\n')

				responsiveVoice.speak(gtr, "Hindi Female");
				$('#test').html($('#test').html()+spans[t-1].split('\n\n').join('<br><br>')+' । ');

				$('#test1').html('');
				for (var cnt = t; cnt < spans.length; cnt++)
				{
					$('#test1').html($('#test1').html()+spans[cnt].split('\n\n').join('<br><br>')+' । ');
				}
			}

			if($("#radio-option-1").is(':checked')==false)
			{
				clearInterval(refreshIntervalId);
			}

	    }, 100);



	});
});