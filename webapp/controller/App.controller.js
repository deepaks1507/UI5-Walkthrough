sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/resource/ResourceModel"
], function (Controller, MessageToast, JSONModel, ResourceModel) {
    "use strict";
    return Controller.extend("sap.ui.demo.walkthrough.controller.App", {

        // onInit: function () {
        //     //set the data model on the view
        //     var OData = {
        //         recepient: {
        //             name: "UI5"
        //         }
        //     };
        //     var OModel = new JSONModel(OData);
        //     this.getView().setModel(OModel);

        //     //Set 18n model on view
        //     var i18nModel = new ResourceModel({
        //         bundleName: "sap.ui.demo.walkthrough.i18n.i18n",
        //         supportedLocales: [""],
        //         fallbackLocale: ""
        //     });
        //     this.getView().setModel(i18nModel, "i18n");
        // },

        onSayHi: function () {
            var oBundle = this.getView().getModel("i18n").getResourceBundle();
            var sRecepient = this.getView().getModel().getProperty("/recepient/name");
            var sMsg = oBundle.getText("helloMsg", [sRecepient]);
            // alert("Hello UI5");
            // MessageToast.show("Hello UI5");
            MessageToast.show(sMsg);
        }
    })
})