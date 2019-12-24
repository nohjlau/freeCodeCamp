const H = 600;
const W = 800;
const M = 50;  // Margin

var jsonURL = "https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/global-temperature.json";
var svg = d3.select('.chart')
    .attr("height", H)
    .attr("width", W)
    .attr("id", "Heatmap")
    .attr("description", "Temperature data");

// Scale (Y) Month
var scaleY = d3.scaleLinear()
    .range([H-150, 0]); // Reversed because D3 axis is reversed
// Scale (X) Year
var scaleX = d3.scaleTime()
    .range([M, W-M]);

// Create axis
var g = svg.append("g")
    .attr("transform", "translate(" + 0 + "," + 0 + ")");

d3.json(jsonURL).then(function(d) {
    let data  = (d3.values(d)[1]); // Format data
    let dataX = data.map(d => new Date(d.year,0));
    scaleX.domain([d3.min(dataX), d3.max(dataX)]);
    scaleY.domain([d3.min(data.map(d => d.month)), d3.max(data.map(d => d.month))]);

    // X-axis
    g.append("g")
        .attr("transform", "translate("+ 10 +", " + (H-2*M) + ")")
        .attr("id", "x-axis")
        .style("font", "20px times")
        .call(d3.axisBottom(scaleX).ticks(15))

    // Y-axis
    g.append("g")
        .attr("transform", "translate(" + 50 + "," + 50 + ")")
        .attr("id", "y-axis")
        .style("font", "20px times")
        .call(d3.axisLeft(scaleY));


});
