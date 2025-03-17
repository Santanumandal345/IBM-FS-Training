// const mongooes=require("mongoose")
// const connetDB=mongooes.connect( "mongodb+srv://Santanu123:Santanu@123@cluster0.spcu7.mongodb.net/myDB?retryWrites=true&w=majority&appName=Cluster0")




// const mongooes=require("mongoose")
// const connetDB=mongooes.connect( "mongodb+srv://Santanu123:santanu@cluster0.spcu7.mongodb.net/myDB?retryWrites=true&w=majority&appName=Cluster0")



// module.exports={
//     connetDB
// };




const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        await mongoose.connect("mongodb+srv://Santanu123:santanu@cluster0.spcu7.mongodb.net/myDB?retryWrites=true&w=majority&appName=Cluster0");
        console.log("MongoDB connected successfully");
    } catch (error) {
        console.error("MongoDB connection error:", error);
        process.exit(1);
    }
};

module.exports = { connectDB };









// const mongoose = require("mongoose");

// const connectDB = mongoose.connect("mongodb+srv://subhajitmal509:subhajit@cluster0.bdptc.mongodb.net/myDB?retryWrites=true&w=majority&appName=Cluster0");

// module.exports={
//     connectDB
// }





// const mongoose = require("mongoose");

// const connectDB = async () => {
//     try {
//         await mongoose.connect("mongodb+srv://Santanu123:santanu@cluster0.spcu7.mongodb.net/myDB?retryWrites=true&w=majority&appName=Cluster0");
//         console.log("MongoDB connected successfully");
//     } catch (error) {
//         console.error("MongoDB connection error:", error);
//         process.exit(1);
//     }
// };

// module.exports = { connectDB };
