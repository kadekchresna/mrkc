$(function(){

    //get the line chart canvas
    var ctx = $("#line-chartcanvas");

    //line chart data
    var data = {
        labels: ["match1", "match2", "match3", "match4", "match5"],
        datasets: [
            {
                label: "TeamA Score",
                data: [10, 50, 25, 70, 40],
                backgroundColor: "blue",
                borderColor: "lightblue",
                fill: false,
                lineTension: 0,
                radius: 5
            },
            {
                label: "TeamB Score",
                data: [20, 35, 40, 60, 50],
                backgroundColor: "green",
                borderColor: "lightgreen",
                fill: false,
                lineTension: 0,
                radius: 5
            }
        ]
    };

    //options
    var options = {
        responsive: true,
        title: {
            display: true,
            position: "top",
            text: "Line Graph",
            fontSize: 18,
            fontColor: "#111"
        },
        legend: {
            display: true,
            position: "bottom",
            labels: {
                fontColor: "#333",
                fontSize: 16
            }
        }
    };

    //create Chart class object
    var chart = new Chart(ctx, {
        type: "line",
        data: data,
        options: options
    });
});