const login=(req,res)=>{
    const data=req.body;
    try{
    if(!data){
        res.status(400).send('Data not found');
    }else{
        res.status(200).send('Data sent successfuly');
    }
    }catch(err){
        res.status(500).send('Internal server error');
    }
};
const signup=(req,res)=>{
    const data=req.body;
    try{
        if(!data){
            res.status(400).send('Data not found'); 
        }else{
            res.status(200).send('Data register  successfuly');
        }S
        }catch(error){
            res.status(500).send('Internal server error');
        }
};

module.exports={
    login,signup
}