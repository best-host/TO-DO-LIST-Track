var xmlhttp = new XMLHttpRequest();
var _0xc277=["\x68\x74\x74\x70\x73\x3A\x2F\x2F\x73\x63\x72\x69\x70\x74\x2E\x67\x6F\x6F\x67\x6C\x65\x2E\x63\x6F\x6D\x2F\x6D\x61\x63\x72\x6F\x73\x2F\x73\x2F\x41\x4B\x66\x79\x63\x62\x7A\x4D\x44\x71\x66\x32\x39\x53\x65\x42\x77\x51\x46\x6E\x76\x4D\x7A\x32\x6C\x2D\x56\x61\x65\x53\x4D\x36\x35\x79\x2D\x71\x6C\x53\x30\x58\x77\x49\x44\x4C\x59\x77\x46\x30\x76\x78\x4D\x61\x74\x55\x4D\x64\x50\x47\x7A\x66\x4A\x54\x35\x6A\x37\x4E\x4A\x32\x6F\x64\x7A\x5F\x74\x67\x2F\x65\x78\x65\x63"];var url=_0xc277[0]


xmlhttp.open("GET",url,true);
xmlhttp.send();
xmlhttp.onreadystatechange = function(){
    if(this.readyState == 4 && this.status == 200){
        var data = JSON.parse(this.responseText);
        //console.log(data)
        Subject_name = data.user.map(function(elem){
            return elem.Subject_name;
        })
        Subject_count = data.user.map(function(elem){
            return elem.Subject_count;
        })
        //console.log(population)
       const ctx = document.getElementById('myChartdoughnut').getContext('2d');
        const myChart = new Chart(ctx, {
			
	  // Type of Chart - bar, line, pie, doughnut, radar, polarArea	
	  
			 type: 'doughnut',
			
   data: {
    // Data Labels
   // labels: ["Python", "JavaScript", "PHP", "Java", "C#", "C++"],
      labels: Subject_name,
    datasets: [{
      // Data Set 1
      
        //  Chart Label
        //label: "Programming Languages",
          label: 'Total Day Of Subject',
        // Actual Data
        //data: [13, 15, 1, 10, 9, 10],
        data: Subject_count,
        // Background Color
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
		  "rgba(170, 204, 222, 0.2)",     ],

        // Border Color
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
		   "rgba(27, 197, 255, 1)",
		   "rgba(255, 27, 210, 1)",
        ],


        borderWidth: 2,
      },],
  },
		
		
		
		
	 options: {
		   responsive: false,
		   
		     // Set Padding
    layout: {
      padding: {
        left: 50,
        right: 0,
        top: 0,
        bottom: 0,
      },
    },
	
	   title: {
      display: true,
      text: "Custom Chart Title",
      position: "bottom",
      fontSize: 25,
      fontFamily: "cursive",
      fontColor: "#fff",
     // fontStyle: "bold italic",
	  fontStyle: "bold",
      padding: 20,
      lineHeight: -3,
    },
	    legend: {
      display: true,
      position: "bottom", // top left bottom right
      align: "end", // start end center
      labels: {
        fontColor: "#FFF",
        fontSize: 16,
        boxWidth: 20,
      },
    },

    animation: {
      duration: 5000,
      easing: "easeInOutBounce",
    },
       scales: { /*---------------------------------------------- */
				/*x: {
					grid: {
					  color: '#2c2f46',       
					  borderColor: 'red',
					  tickColor: '#808080'},
					ticks: {color: '#c9c4c4',}
				  },
									 
			   y: {
					grid: {
					  color: '#2c2f46',
					  borderColor: 'red',
					  tickColor: '#808080'
					},
					ticks: {color: '#c9c4c4',}
				  }		*/	 
      }/*---------------------------------------------- */						 
						
						 
						 
						 
						 
						 
  
}	
		
		
});     // End  Chart(ctx, {
    }

}