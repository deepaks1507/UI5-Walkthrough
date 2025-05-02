sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/ui/model/json/JSONModel"
], function (Controller, MessageToast, JSONModel) {
    "use strict";
    return Controller.extend("sap.ui.demo.walkthrough.controller.App", {

        onInit: function () {
            var OData = {
                recepient: {
                    name: "UI5"
                }
            };
            var OModel = new JSONModel(OData);
            this.getView().setModel(OModel);
        },

        onSayHi: function () {
            // alert("Hello UI5");
            MessageToast.show("Hello UI5");
        }
    })
})