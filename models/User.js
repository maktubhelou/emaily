const mongoose = require('mongoose');
const { Schema } = mongoose; // same as: const Schema = mongoose.Schema;

// MongoDB doesn't require a Schema, but mongoose does

const userSchema = new Schema({
	googleId: String
});

mongoose.model('users', userSchema);