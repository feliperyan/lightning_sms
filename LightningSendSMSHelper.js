({
	getSMSText : function(component) {
		var body = component.find('txt1').get('v.value'); 
        console.log(body);
        if (body === ""){ 
	        body = "Example SMS";
        }
        if (body === "test") {
			console.log("test");
            body = null
        }
        return body;
	}
})