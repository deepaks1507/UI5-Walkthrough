sap.ui.define([
    "sap/ui/core/UIComponent",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/resource/ResourceModel"
],function (UIComponent, JSONModel, ResourceModel) {
    "use strict";
    return UIComponent.extend("sap.ui.demo.walkthrough.Component",{
        metadata: {
            manifest: "json"
        },
        init:function(){
            //call the base component's init function
            UIComponent.prototype.init.apply(this, arguments);

            //set the data model on the view
            var OData = {
                recepient: {
                    name: "UI5"
                }
            };
            var OModel = new JSONModel(OData);
            this.setModel(OModel);
        }
    })
})