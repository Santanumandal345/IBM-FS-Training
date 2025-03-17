const express = require('express');

const app = express();
app.use(express.json());
app.get('/', (req, res) => {
    res.status(200).send('Hello World!');
});

const data =[
    
    {
        id:1,
        name:'John Doe',
        email:'hhshsh',
    },
    {
        id:2,
        name:'santanu ',
        email:'mandalsantanu@gmail.com',

    }
]
app.get('/data', (req, res) => {
    if(!data) {
        res.status(404).send('Could not find data');}
        else{
            res.status(200).send(data);
        }
    
});

app.post('/login', (req, res) => {

    try{
        if(req.body.email === 'santanu@gmail.com'){
            res.status(200).send('Login successful');}
            else{
                res.status(401).send('Login failed');
            }
    }catch(error){

    }
});




const PORT=8080;
app.listen(PORT, () => {
    console.log(`Server is running  on port ${PORT}`);
});
