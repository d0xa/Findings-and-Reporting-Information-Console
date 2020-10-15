/**
 * 
 */

const mongoose = require('mongoose');

const systemSchema = new mongoose.Schema({
	name: { type: String, required: true, },
	description: { type: String, required: false, },
	location: { type: String, required: true, },
	router: { type: String, required: true, },
	switch: { type: String, required: true, },
	room: { type: String, required: false, },
	testPlan: { type: String, required: true, },
	archived: { type: Boolean, required: true, },
}, {
	timestamps: true,
});

const System = mongoose.model('System', systemSchema);

module.exports = System;
