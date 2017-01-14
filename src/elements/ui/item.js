"use strict";

Polymer({
	is: "ui-item",
	properties: {
		title: {
			type: String
		},
		year: {
			type: String
		},
		cover: {
			type: String
		}
	},
	listeners: {
		"tap": "_onTapped"
	},
	_onTapped() {
		this.fire("itemOpen");
	}
});