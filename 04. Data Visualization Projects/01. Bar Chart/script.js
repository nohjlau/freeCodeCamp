let jsonUrl = "https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/GDP-data.json";
// let jsonUrl = "GDP-data.json";

let h = 300;
let w = 500;
let margin = 100;

var timeScale = d3.scaleTime()
                  .range([0, w]);

var yS = d3.scaleLinear()
         .range([h, 0]);
         
var svg = d3.select(".chart")
            .attr("width", w+margin)
            .attr("height", h+margin);

var g = svg.append("g")
            .attr("transform", "translate(" + 60 + "," + 60 + ")");

var timeFormat = d3.timeFormat('%Y-%m-%d');

d3.json(jsonUrl)
  .then(function(data) {
    var xData = [...data["data"]].map(function(d) {
      let date = d[0].split("-");
      return new Date(date[0], date[1]-1 , date[2]); //FIXME: Magic number because the formatted date displays next month??
    });
    var yData = [...data["data"]].map(d => d[1]);

    timeScale.domain([d3.min(xData), d3.max(xData)]);
    yS.domain([0, d3.max(yData)]);
    
    g.append("g")
         .attr("transform", "translate(0, " + (h) + ")")
         .attr("id", "x-axis")
         .call(d3.axisBottom(timeScale).tickFormat(d => d3.timeFormat("%Y")(d)).ticks(5))
         .append("text")
         .attr("y", 30)
         .attr("x", w)
         .attr("text-anchor", "end")
         .attr("stroke", "black")
         .text("Date");

    g.append("g")
        .call(d3.axisLeft(yS).tickFormat(d => d))
        .attr("id", "y-axis")
        .append("text")
        .attr("transform", "rotate(-90)")
        .attr("y", 5)
        .attr("dy", "-5.1em")
        .attr("text-anchor", "end")
        .attr("stroke", "black")
        .text("$ in billions");

    g.selectAll("bar")
        .data(data["data"])
        .enter().append("rect")
        .attr("class", "bar")
        .attr("data-date", (d, i) => d[0])
        .attr("data-gdp", (d) => d[1])
        .attr("x", (d,i) => timeScale(xData[i]))
        .attr("y", d => yS(d[1]))
        .attr("width", w/xData.length)
        .attr("height", d => h - yS(d[1]))
        .on("mouseover", function(d,i) {
          tooltip.attr("data-date", d[0]);
          tooltip.transition()
                 .duration(200)
                 .style("opacity", 0.8);
          tooltip.html("GDP: " + d[1])
                    .style("left", d3.event.pageX + 20 + "px")
                    .style("top", d3.event.pageY + 20 + "px");
          
        })
        .on("mouseout", function(d) {
          tooltip.transition()
            .duration(400)
            .style("opacity", 0)
        });
  })
      
svg.append("text")
   .attr("id", "title")
   .attr("transform", "translate(100, 0)")
   .attr("x", 50)
   .attr("y", 40)
   .attr("font-size", "24px")
   .text("USA GDP Data from (1947-2015)");

   let tooltip = d3.select("body")
   .append("div")
   .attr("class", "tooltip")
   .attr("id", "tooltip")
   .style("opacity", 0);