({
	myAction : function(component, event, helper) {
		console.log("myAction");
	},
    aloha : function(component, event, helper) {
        b = helper.getSMSText(component);
        
        var action = component.get("c.sendSMSAura");
        action.setParams({
            body: b
        });
        action.setCallback(this, function(result){
            console.log(result.getReturnValue());
            console.log(result);
            
            document.getElementById("smsstatus").style.visibility = "visible";
            
        });
        
        $A.enqueueAction(action);
	}
})