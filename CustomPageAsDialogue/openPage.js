//just one parameter separated with ; like this: title;name;entityName;target;position;width;width_unit;height;height_unit

// Title: Title that appears on the MDA
// Pagename: logical name of the page
// Additional parameter: pass whatever you want - you can retrieve it with Param(entityName) in the custom page
// Target/Position (optional, defaults to side): main,center,side
// Width (optional, defaults to 300px): width in px or % (500px/30%)
// Height (optional, defaults to 100%): width in px or % (500px/30%)

//example string to pass as the page_definition parameter (opens a center dialog): My Title;r2p_mypage_e56f0;additional parameter;center;700px;500px
//example string to pass as the page_definition parameter (opens a 300px wide side dialog): My Title;r2p_mypage_e56f0;additional parameter

function openPage(record, page_definition) {

	// Split the parameter string by semicolon
	var valuesArray = page_definition.split(";");

	// Extract values and convert width and height to integers
	var title = valuesArray[0];
	var name = valuesArray[1];
	var entityName = valuesArray[2]; //hint: you don't actually need the entity name! you could use it to pass other parameters to the custom page
	var target; if (valuesArray[3] === 'main') {target = 1} else {target = 2};
	var position; if (valuesArray[3] === 'center') {position = 1} else {position = 2};
  var width = valuesArray[4] ? parseInt(valuesArray[4]) : 300;
  var width_unit = valuesArray[4] ? (valuesArray[4].slice(-1) === "%" ? "%" : "px") : "px";
	var height = valuesArray[5] ? parseInt(valuesArray[5]) : 100;
  var height_unit = valuesArray[5] ? (valuesArray[5].slice(-2) === "px" ? "px" : "%") : "%";
	var recordId = record.replace(/\{|\}/g, ''); //removes the curly braces, so you don't have to in the Canvas App

	//save the form before opening the page
    Xrm.Page.data.save().then(
		function () {		

		var pageInput = {
			pageType: "custom",
			name: name,
			entityName: entityName,
			recordId: recordId,
		};
		var navigationOptions = {
			target: target, 
			position: position,
			width: {value: width, unit: width_unit},
			height: {value: height, unit: height_unit},
			title: title
		};

		Xrm.Navigation.navigateTo(pageInput, navigationOptions)
			.then(
				function () {
					// Called when page opens
				}
			).catch(
				function (error) {
					// Handle error
					console.log(error)
				}
			);
	}
	)

}
