
const {MongoClient} = require('mongodb');
const { DB_USER ,PWD } = require('../config/index.js');

const Client = () => {
    
    const uri = "mongodb+srv://admin_user:NsyYqADj10atQUgn@cluster0.gju5u.mongodb.net/TODOLIST?retryWrites=true&w=majority";    
    const client = new MongoClient(uri, { useUnifiedTopology: true });
    return client;
}

module.exports = Client;
