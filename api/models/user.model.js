import mongoose from "mongoose";
//creating user models
const userSchema = new mongoose.Schema({
    username : {
        type : String,
        required : true,
        unique : true,
    },

    email : {
        type : String,
        rrquired : true,
        inique : true,
    },

    password : {
        type : String,
        required : true,
    },
    avatar : {
        type : String,
        default : "https://www.murrayglass.com/wp-content/uploads/2020/10/avatar-scaled.jpeg"
    },


},{timestamps : true});

const User = mongoose.model('User', userSchema);
export default User;