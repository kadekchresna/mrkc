$(document).ready(function() {

	/**
	 * call the data.php file to fetch the result from db table.
	 */
	$.ajax({
		url : "http://localhost/chartjs2/api/data.php",
		type : "GET",
		success : function(data){
			console.log(data);

			
			var suhu = [];
			var lembab_udara = [];
			var lembab_tnh = [];
			

			var len = data.length;
			var waktu = [];

			for (var i = 0; i < len; i++) {
				
				suhu.push(data[i].suhu);
				waktu.push(data[i].waktu);			
				lembab_udara.push(data[i].lembab_udara);
				lembab_tnh.push(data[i].lembab_tnh);				
			}

			//get canvas
			var ctx = $("#line-chartcanvas3");

			var data = {
				labels : waktu,
				datasets : [
					{
						label : "Kelembaban Udara",
						data : lembab_udara,
						backgroundColor : "green",
						borderColor : "lightgreen",
						fill : false,
						lineTension : 0,
						pointRadius : 5
					}
				]
			};

			var options = {
				title : {
					display : true,
					position : "top",
					text : "Grafik Kelembaban Udara (%RH) ",
					fontSize : 18,
					fontColor : "#111"
				},
				legend : {
					display : true,
					position : "bottom"
				}
			};

			var chart = new Chart( ctx, {
				type : "line",
				data : data,
				options : options
			} );

		},
		error : function(data) {
			console.log(data);
		}
	});

});