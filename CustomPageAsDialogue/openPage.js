//just one parameter separated with ; like this: title;name;entityName;target;position;width;width_unit;height;height_unit
//example string to pass as the page_definition parameter: My Title;r2p_mypage_e56f0;r2p_mytable;2;1;700;px;500;px

function openPage(record, page_definition) {

	// Split the parameter string by semicolon
	var valuesArray = page_definition.split(";");

	// Extract values and convert width and height to integers
	var title = valuesArray[0];
	var name = valuesArray[1];
	var entityName = valuesArray[2]; //hint: you don't actually need the entity name! you could use it to pass other parameters to the custom page
	var target = parseInt(valuesArray[3]);
	var position = parseInt(valuesArray[4]);
	var width = parseInt(valuesArray[5]);
	var width_unit = valuesArray[6];
	var height = parseInt(valuesArray[7]);
	var height_unit = valuesArray[8];
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
