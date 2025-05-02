sap.ui.define([
    "sap/m/Text"

], function(Text) {
    "use strict";
    alert("Hello UI5");
    new Text({
        text: "Hello UI5"
    }).placeAt("content");
});