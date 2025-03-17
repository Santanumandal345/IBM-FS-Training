// const{userModel}=require("../models/user.model")
// const signup =async(req,res)=>{
//     const data=req.body;
//     try{
//         const userData=await userModel(data);
//         await userdata.seve()

//         res.status(200).send({
//             massage:"user registerd successfuly"
//         });
//     }catch (error){
//         return res.status(400)({error:"error"})

//     }

// }
const { userModel } = require("../models/user.model");
const bcrypt = require("bcrypt")

const signUp = async (req, res) => {
    const {username, email, password} = req.body;

    try {
        bcrypt.hash(password, 5,  async(err, hash)=> {
            if(err){
                return res.status(400).send({error:err});
            }else{
                const userData = new userModel({username, email, password:hash});
                await userData.save();
    
                return res.status(200).send({ message: "User registered successfully" });
            }
        });

    } catch (error) {
        return res.status(400).send({ error: error.message });
    }
};


module.exports = {
    signUp
}