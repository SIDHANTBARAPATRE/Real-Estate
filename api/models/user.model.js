import mongoose from "mongoose";
//creating use modelss
const userSchema = new mongoose.Schema({
    username : {
        type : String,
        required : true,
        unique : true,
    },

    password : {
        type : String,
        required : true,
    }


},{timestamp : true});

const User = mongoose.model('User', userSchema);
export default User;