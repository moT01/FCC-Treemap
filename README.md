## FCC-Treemap
##### Treemap Diagram project for [freeCodeCamp](https://www.freecodecamp.org/)
##### Check it out [here](https://mot01.github.io/FCC-Treemap/)

<br/>
<br/>



##### Objective: Build a CodePen.io app that is functionally similar to this: https://codepen.io/freeCodeCamp/full/KaNGNR.
###### Fulfill the below user stories and get all of the tests to pass. Give it your own personal style.
###### You can use HTML, JavaScript, CSS, and the D3 svg-based visualization library. The tests require axes to be generated using the D3 axis property, which automatically generates ticks along the axis. These ticks are required for passing the D3 tests because their positions are used to determine alignment of graphed elements. You will find information about generating axes at https://github.com/d3/d3/blob/master/API.md#axes-d3-axis. Required (non-virtual) DOM elements are queried on the moment of each test. If you use a frontend framework (like Vue for example), the test results may be inaccurate for dynamic content. We hope to accommodate them eventually, but these frameworks are not currently supported for D3 projects.
- User Story #1: My tree map should have a title with a corresponding id="title".
- User Story #2: My tree map should have a description with a corresponding id="description".
- User Story #3: My tree map should have rect elements with a corresponding class="tile" that represent the data.
- User Story #4: There should be at least 2 different fill colors used for the tiles.
- User Story #5: Each tile should have the properties data-name, data-category, and data-value containing their corresponding name, category, and value.
- User Story #6: The area of each tile should correspond to the data-value amount: tiles with a larger data-value should have a bigger area.
- User Story #7: My tree map should have a legend with corresponding id="legend".
- User Story #8: My legend should have rect elements with a corresponding class="legend-item".
- User Story #9: The rect elements in the legend should use at least 2 different fill colors.
- User Story #10: I can mouse over an area and see a tooltip with a corresponding id="tooltip" which displays more information about the area.
- User Story #11: My tooltip should have a data-value property that corresponds to the data-value of the active area.
###### For this project you can use any of the following datasets:

- Kickstarter Pledges: https://cdn.rawgit.com/freeCodeCamp/testable-projects-fcc/a80ce8f9/src/data/tree_map/kickstarter-funding-data.json
- Movie Sales: https://cdn.rawgit.com/freeCodeCamp/testable-projects-fcc/a80ce8f9/src/data/tree_map/movie-data.json
- Video Game Sales: https://cdn.rawgit.com/freeCodeCamp/testable-projects-fcc/a80ce8f9/src/data/tree_map/video-game-sales-data.json

###### You can build your project by forking [this](https://codepen.io/freeCodeCamp/pen/MJjpwO) CodePen pen. Or you can use this CDN link to run the tests in any environment you like: https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js

<br/>
<br/>

##### Technologies used to complete this project
- HTML
- CSS
- JavaScript
- D3
