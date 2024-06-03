sap.ui.define([
	"sap/m/Text"
], (Text) => {
	"use strict";

	new Text({
		text: "Whatever ..."
	}).placeAt("content");
});