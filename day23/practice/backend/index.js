// const express = require('express');

// const app = express();
// app.use(express.json());
// app.get('/', (req, res) => {
//     res.status(200).send('Hello World!');
// });

// const data =[
    
//     {
        
//         name:'John Doe',
//         email:'hhshsh',
//     },
//     {
//         id:2,
//         name:'santanu ',
//         email:'mandalsantanu@gmail.com',

//     }
// ]
// app.get('/data', (req, res) => {
//     if(!data) {
//         res.status(404).send('Could not find data');}
//         else{
//             res.status(200).send(data);
//         }
    
// });

// app.post('/usein', (req, res) => {

//     try{
//         if(req.body.email === 'santanu@gmail.com'){
//             res.status(200).send('Login successful is hf hgh hgh jhg');}
//             else{
//                 res.status(401).send('Login failed');
//             }
//     }catch(error){

//     }
// });




// const PORT=8000;
// app.listen(PORT, () => {
//     console.log(`Server is running  on port ${PORT}`);
// });
// index.js
const express = require('express');
const fs = require('fs');
const path = require('path');
const os = require('os');
const crypto = require('crypto');
const logRequest = require('./logger');
const productsData = require('./data');

const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());
app.use(logRequest);

// System Information (Logged on server start)
console.log(`Hostname: ${os.hostname()}`);
console.log(`OS Type: ${os.type()}`);
console.log(`Total Memory: ${os.totalmem()}`);

// Routes
app.get('/', (req, res) => {
    res.send('Welcome to the Node.js Express API!');
});

app.get('/products', (req, res) => {
    res.json(productsData);
});

app.get('/products/:id', (req, res) => {
    const product = productsData.find(p => p.id === req.params.id);
    if (!product) {
        return res.status(404).json({ message: 'Product not found' });
    }
    res.json(product);
});

app.post('/products', (req, res) => {
    const { name, price, category } = req.body;
    if (!name || !price || !category) {
        return res.status(400).json({ message: 'All fields are required' });
    }
    const newProduct = { id: crypto.randomUUID(), name, price, category };
    productsData.push(newProduct);
    fs.writeFileSync(path.join(__dirname, 'products.json'), JSON.stringify(productsData, null, 2));
    res.status(201).json(newProduct);
});

app.put('/products/:id', (req, res) => {
    const { id } = req.params;
    const { name, price, category } = req.body;
    const productIndex = productsData.findIndex(p => p.id === id);
    if (productIndex === -1) {
        return res.status(404).json({ message: 'Product not found' });
    }
    productsData[productIndex] = { ...productsData[productIndex], name, price, category };
    fs.writeFileSync(path.join(__dirname, 'products.json'), JSON.stringify(productsData, null, 2));
    res.json(productsData[productIndex]);
});

app.delete('/products/:id', (req, res) => {
    const { id } = req.params;
    const updatedProducts = productsData.filter(p => p.id !== id);
    if (updatedProducts.length === productsData.length) {
        return res.status(404).json({ message: 'Product not found' });
    }
    fs.writeFileSync(path.join(__dirname, 'products.json'), JSON.stringify(updatedProducts, null, 2));
    res.json({ message: 'Product deleted successfully' });
});

app.use((req, res) => {
    res.status(404).json({ message: 'Route not found' });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

// logger.js
// const logRequest = (req, res, next) => {
//     const log = `[${new Date().toISOString()}] ${req.method}: ${req.url}\n`;
//     fs.appendFileSync(path.join(__dirname, 'server.log'), log);
//     next();
// };
// module.exports = logRequest;

// data.js
// const productsData = [];
// module.exports = productsData;

// utils/fileHandler.js
// const fileHandler = {
//     readFile: (filePath) => JSON.parse(fs.readFileSync(filePath, 'utf8')),
//     writeFile: (filePath, data) => fs.writeFileSync(filePath, JSON.stringify(data, null, 2))
// };
// module.exports = fileHandler;

// utils/systemInfo.js
// console.log(`Hostname: ${os.hostname()}`);
// console.log(`OS Type: ${os.type()}`);
// console.log(`Total Memory: ${os.totalmem()}`);
