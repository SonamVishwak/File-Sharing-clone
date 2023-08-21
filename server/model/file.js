import mongoose from "mongoose";

const fileShema = new mongoose.Schema({
    path: {
        type: String,
        require: true
    },
    name:{
        type: String,
        require: true
    },
    downloadContent:{
        type: Number,
        require: true,
        default: 0
    }
})
const File = mongoose.model('file', fileShema);
export default File;