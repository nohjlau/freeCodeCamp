const H = 600;
const W = 800;
const M = 20;  // Margin

var jsonUrl = "https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/global-temperature.json";
var svg = d3.select('.chart')
    .attr("height", H)
    .attr("width", W)
    .attr("id", "Heatmap")
    .attr("description", "Temperature data");