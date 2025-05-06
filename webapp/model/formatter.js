sap.ui.define([

], function(){
    "use strict"
    return{
        statusText:function(statusText){
            var getResourceBundle = this.getView().getModel("i18n").getResourceBundle();
            switch(statusText){
                case "A":
                    return getResourceBundle.getText("invoiceStatusA");
                case "B":
                    return getResourceBundle.getText("invoiceStatusB");
                case "C":
                    return getResourceBundle.getText("invoiceStatusC");
                default:
                    return statusText;
            }
        }
    }
})