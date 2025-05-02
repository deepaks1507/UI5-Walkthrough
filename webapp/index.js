sap.ui.define([
    "sap/ui/core/mvc/XMLView"

], function(XMLView) {
    "use strict";
    // alert("Hello UI5");

    // new Text({
    //     text: "Hello UI5"
    // }).placeAt("content");

    XMLView.create({
        viewName:"sap.ui.walkthrough.view.App"
    }).then(function(oView){
        oView.placeAt("content");
    })
});