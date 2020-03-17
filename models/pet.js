const mongoose = require("mongoose");

const petShelterSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required"],
        minlength: [3, "Name must be 3 characters or longer"],
        unique: [true, "Name already exists"]
    },
    pet_type: {
        type: String,
        required: [true, "Pet type is required"],
        minlength: [3, "Pet type must be 3 characters or longer"],
       
    },
    description: {
        type: String,
        required: [true, "Description is required"],
        minlength: [3, "Description must be 3 characters or longer"]
    },
    skill1: {
        type: String,
        required: [true, "Skill 1 is required"],
        minlength: [3, "Skill 1 must be 3 characters or longer"]
    },
    skill2: {
        type: String,
        required: [true, "Skill 2 is required"],
        minlength: [3, "Skill 2 must be 3 characters or longer"]
    },
    skill3: {
        type: String,
        required: [true, "Skill 3 is required"],
        minlength: [3, "Skill 3 must be 3 characters or longer"]
    }
}, { timestamps: true });

mongoose.model("Pet", petShelterSchema);
module.exports = petShelterSchema;
