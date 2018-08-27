d3.json("https://cdn.rawgit.com/freeCodeCamp/testable-projects-fcc/a80ce8f9/src/data/tree_map/video-game-sales-data.json").then(data => {
  /*TOOLTIP*/
  const tooltip = d3.select("#tooltip")
    .style("background-color", "#333")
    .style("position", "absolute")
    .style("visibility", "hidden")
    .style("color", "#ccc")
    .style("padding", "3px")
    .style("border", "2px solid black")
    .style("font-family", "Arial")
    .style("text-align", "center");
  
  const consoleName = d3.select("#consoleName");
  const gameName = d3.select("#gameName");
  const copiesSold = d3.select("#copiesSold");
  
  /*TREE MAP*/
  const width = 960;
  const height = 600;
  let legendItems = [];

  const settings = d3.treemap()
    .tile(d3.treemapResquarify)
    .size([width, height])
    .round(true)
    .paddingInner(1)
    .paddingOuter(1);

  const root = d3.hierarchy(data)
    .eachBefore(d => { 
      d.data.id = (d.parent ? d.parent.data.id + "." : "") + d.data.name;
      if(d.parent && d.children) {
        d.data.hue = Math.floor(Math.random() * 361);
        d.data.saturation = Math.floor(Math.random() * 70) + 25;
        d.data.lightness = Math.floor(Math.random() * 40) + 55;
        legendItems.push(d);
       }
    })
    .sum(d => d.value)
    .sort((a, b) => { return b.height - a.height || b.value - a.value});

  settings(root);

  const treemap = d3.select("#tree-map")
    .attr("width", width)
    .attr("height", height)
    .style("margin", "10px")
    .style("background-color", "#000")
    .style("border", "1px solid black");
  
  const cell = treemap.selectAll('g')
    .data(root.leaves())
    .enter()
    .append("g")
    .attr("transform", d => "translate(" + d.x0 + "," + d.y0 + ")")
    .attr("class", "console")
    .attr('fill', 'black')
    .on("mousemove", d => {
      const { name, category, value } = d.data;
      const [x, y] = [d3.event.pageX, d3.event.pageY];
      
      tooltip.style("visibility", "visible")
        .style("top", y + "px")
        .style("left", x + 20 + "px")
        .attr("data-value", d.data.value)
      
      gameName.html(name)
      consoleName.html(`Console: ${category}`)
      copiesSold.html(`Copies Sold: ${value} million`)
      legendText.style("font-size", "16px")
      
    }).on("mouseout", () => {
      tooltip.style("visibility", "hidden")
    });
  
  cell.append("rect")
    .attr("class", "tile")
    .attr("id", d => d.data.id)
    .attr("width", d => d.x1 - d.x0)
    .attr("height", d => d.y1 - d.y0)
    .attr("fill", d => `hsl(${d.parent.data.hue}, ${d.parent.data.saturation}%, ${d.parent.data.lightness}%)`)
    .attr("data-name", d => d.data.name)
    .attr("data-category", d => d.data.category)
    .attr("data-value", d => d.data.value);
  
  cell.append("foreignObject")
    .attr("width", d => d.x1 - d.x0)
    .attr("height", d => d.y1 - d.y0)
    .append("xhtml:p")
    .attr("width", d => d.x1 - d.x0)
    .attr("min-height", d => d.y1 - d.y0)
    .style("margin-top", "3px")
    .style("font-family", "Arial")//, Helvetica, sans-serif;
    .style("font-size", "12px")
    .text(d => d.data.name);
  
  /*LEGEND*/
  const legend = d3.select("#legend")
    .attr('width', 100)
    .attr('height', 590)
    .style("margin", "10px")
    .style("padding", "3px")
    .style("background-color", "#333")
    .style("border", "3px solid black");
  
  const legends = legend.selectAll("g")
    .data(legendItems)
    .enter()
    .append("g");
        
  legends.append("rect")
    .attr("class", "legend-item")
    .attr("width", 40)
    .attr("height", 25)
    .attr("x", 0)
    .attr("y", (d, i) => i * 32.5)
    .attr("fill", d => `hsl(${d.data.hue}, ${d.data.saturation}%, ${d.data.lightness}%)`);
  
  const legendText = legends.selectAll("text")
    .data(legendItems)
    .enter()
    .append("text")
    .attr("x", 48)
    .attr("y", (d, i) => i * 32.5 + 18)
    .style("fill", "#CCC")
    .style("font-family", "Arial")
    .text(d => d.data.name);  
});
