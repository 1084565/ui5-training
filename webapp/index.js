sap.ui.define([
	"sap/ui/core/mvc/XMLView"
], (XMLView) => {
	"use strict";

	XMLView.create({
		id: "AppView",
		viewName: "ui5.walkthrough.view.App"
	}).then(view => view.placeAt("content"));
});
