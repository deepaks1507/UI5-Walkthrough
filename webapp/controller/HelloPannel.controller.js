sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/ui/core/Fragment",
], function (Controller, MessageToast, Fragment) {
    "use strict";
    return Controller.extend("sap.ui.demo.walkthrough.controller.HelloPanel", {

        onSayHi: function () {
            var oBundle = this.getView().getModel("i18n").getResourceBundle();
            var sRecepient = this.getView().getModel().getProperty("/recepient/name");
            var sMsg = oBundle.getText("helloMsg", [sRecepient]);
            MessageToast.show(sMsg);
        },

        onOpenDialog:function(){
            this.getOwnerComponent().openHelloDialog();
        },

    })
});