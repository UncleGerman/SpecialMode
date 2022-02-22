var chbox=document.getElementById('menu_toggle');
var styleElem = document.head.appendChild(document.createElement("style"));

function Check() 
{
	if (!chbox) 
	{
		styleElem.innerHTML = "body:before {display: none !important;}";
		$('body').css('overflow', 'auto');
		chbox = true;
	}
	else 
	{
		styleElem.innerHTML = "body:before {display: block !important;}";
		$('body').css('overflow', 'hidden');
		chbox = false;
	}
};

$(document).ready(function () 
{
	transition_speed = 400;

	let sliderlength = document.getElementById('slider_length');
	let slidercurrent = document.getElementById('slidercurrent');
	var listItems = $("#slider").children('li'),
	dotItems = $('#dots').children('li'),
	listLen = listItems.length,
	current,
	changeTimeout;

	function moveTo(newIndex) 
	{

		var i = newIndex;

		if (newIndex == 'prev') 
		{
			i = (current > 0) ? (current - 1) : (listLen - 1);
		}

		if (newIndex == 'next') 
		{
			i = (current < listLen - 1) ? (current + 1) : 0;
		}

		dotItems.removeClass('active')
		.eq(i).addClass('active');

		listItems.fadeOut(transition_speed)
		.eq(i).fadeIn(transition_speed);

		current = i;

		sliderlength.innerHTML = listItems.length;
		slidercurrent.innerHTML = i+1;
	};

	$("#prev").click(function () 
	{
		moveTo('prev');
	});

	$("#next").click(function () 
	{
		moveTo('next');
	});

  //initialize slider on load
  moveTo('next');
});

$(document).ready(function () 
{
	const footer_forms = document.getElementById("footer_forms");


	function FormCleaner (footer_forms)
	{
		let inputs = footer_forms.getElementsByTagName('input');
		let inputs_value = null;

		for (let input of inputs) 
		{
			input.addEventListener('focus', (event) => {
				inputs_value = event.target.value;
				event.target.value = "";
			}, true);

			input.addEventListener('blur', (event) => {
				event.target.value = inputs_value;
			}, true);
		}
	}

	FormCleaner(footer_forms);
});