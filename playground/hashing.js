const {SHA256} = require('crypto-js');
const jwt = require('jsonwebtoken');

let data ={
    id: 10
}

let token = jwt.sign(data, 'abc123');

let decoded = jwt.verify(token, 'abc123');
// let message = 'I am user numero 3';

// let hash = SHA256(message).toString();

// console.log(`Message: ${message}`);
// console.log(`Hash: ${hash}`);

// let data = {
//     id: 4
// };

// let token = {
//     data,
//     hash: SHA256(JSON.stringify(data) + 'Somesecret').toString()
// }

