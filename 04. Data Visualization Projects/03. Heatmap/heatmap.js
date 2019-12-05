const H = 600;
const W = 800;
const M = 20;  // Margin

var jsonURL = "https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/global-temperature.json";
var svg = d3.select('.chart')
    .attr("height", H+M)
    .attr("width", W+M)
    .attr("id", "Heatmap")
    .attr("description", "Temperature data");

// Scale (Y) Month
var scaleY = d3.scaleLinear()
    .range([H, 0]); // Reversed because D3 axis is reversed
// Scale (X) Year
var scaleX = d3.scaleLinear()
    .range([0, W]);

d3.json(jsonURL).then(function(d) {
    let data = (d3.values(d)[1]); // Format data 
    scaleX.domain([d3.min(data.map(d => d.year)), d3.max(data.map(d => d.year))]);
    scaleY.domain([d3.min(data.map(d => d.month)), d3.max(data.map(d => d.month))]);
});
