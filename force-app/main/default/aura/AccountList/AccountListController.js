({
    doInit : function(component, event) {
        var action = component.get("c.findAll");
        action.setCallback(this, function(a) {
<<<<<<< HEAD
            component.set("v.accounts", a.getReturnValue());
            var event = $A.get("e.c:AccountsLoaded");
            event.setParams({"accounts": a.getReturnValue()});
            event.fire();
        });
    $A.enqueueAction(action);
=======
          component.set("v.accounts", a.getReturnValue());
        });
        $A.enqueueAction(action);
>>>>>>> 8555e0647396a0aa52e396de93ff95e87b649401
    }
})
