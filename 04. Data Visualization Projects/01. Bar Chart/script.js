var dataset = [1, 12, 9, 23, 10, 25, 15, 23, 23, 21, 18];

let h = 300;
let w = 500;
let margin = 100;

var xS = d3.scaleBand()
         .domain(dataset)
         .range([0, w])
         .padding(0.25);

var yS = d3.scaleLinear()
         .domain([0, d3.max(dataset)])
         .range([h, 0]);

var svg = d3.select(".chart")
            .attr("width", w+margin)
            .attr("height", h+margin);

var g = svg.append("g")
            .attr("transform", "translate(" + 60 + "," + 60 + ")");

        
        g.append("g")
         .attr("transform", "translate(0, " + (h) + ")")
         .call(d3.axisBottom(xS))
         .append("text")
         .attr("y", 30)
         .attr("x", w)
         .attr("text-anchor", "end")
         .attr("stroke", "black")
         .text("X Label");

        g.append("g")
         //.attr("transform", "translate(0, 0)")
         .call(d3.axisLeft(yS).tickFormat(d => "$" + d).ticks(10))
         .append("text")
         .attr("transform", "rotate(-90)")
         .attr("y", 15)
         .attr("dy", "-5.1em")
         .attr("text-anchor", "end")
         .attr("stroke", "black")
         .text("Y Label");

        g.selectAll("bar")
         .data(dataset)
         .enter().append("rect")
         .attr("class", "bar")
         .attr("x", d => xS(d))
         .attr("y", d => yS(d))
         .attr("width", xS.bandwidth())
         .attr("height", d => h - yS(d));
  
svg.append("text")
   .attr("transform", "translate(100, 0)")
   .attr("x", (120))
   .attr("y", 40)
   .attr("font-size", "24px")
   .text("Example Title");