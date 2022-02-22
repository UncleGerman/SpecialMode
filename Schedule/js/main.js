	$(document).ready(function () 
	{
		const array = [5,8,2,1,15,2,3,5,9,11,10,4,3,14,1,7,10,3,2,13];

		//
		function GetIndexes (array) 
		{
			const array_index = document.getElementById('array_index');
			let index_container = null;

			for (let i = 0; i < array.length; i++) {
				index_container = document.createElement("li");
				index_container.innerHTML = i;
				array_index.appendChild(index_container);
			}
		};

		//
		function GetValues (array)
		{
			const array_value = document.getElementById('array_value');
			let max_value = Math.max.apply(null,array);
			let value_container = null;

			for (let i = max_value; i >= 0; i--) {
				value_container = document.createElement("li");
				value_container.innerHTML = i;
				array_value.appendChild(value_container);
			}
		};


		function FillingValues (array)
		{
			const array_colum = document.getElementById('array_colum');

			for (let i = 0; i < array.length; i++) {
				array_colums = document.createElement("div");
				array_colums.innerHTML = array[i];
				array_colums.style['height'] = array[i] * 30 + 'px';

				if(array[i] <= 5) 
				{
					array_colums.style['background-color'] = 'green';
				}

				if(array[i] >6 && array[i] <=10) 
				{
					array_colums.style['background-color'] = 'yellow';
				}

				if(array[i] >10) 
				{
					array_colums.style['background-color'] = 'red';
				}

				array_colum.appendChild(array_colums);
			}
		};

		GetIndexes(array);
		GetValues(array);
		FillingValues(array)
	});