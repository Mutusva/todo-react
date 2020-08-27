const  Client = require('./connection.js');
let ObjectId = require('mongodb').ObjectID;

const getClient =() => {
    var client = Client();
    return client;
}

var repository = {};

const main = async () =>  {     
    
    try {
        // Connect to the MongoDB cluster
        var client = getClient();
        await client.connect();
 
        // Make the appropriate DB calls
        await listDatabases(client);
 
    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }
}

repository.addTodo = async (todo) => { 
    try {
        // Connect to the MongoDB cluster
        var client = getClient();
        await client.connect();
        const result = await client.db("todolist").collection("todo").insertOne(todo);
        return result; 
    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }

}

repository.getTodoById  = async (id) => { 
    try {
        var client = getClient();
        await client.connect();
        const cursor = await client.db("todolist").collection("todo").find({"_id": new ObjectId(id)});
        if(cursor.hasNext()) {
            return cursor.next();
        }
    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }

}

repository.getAllTodos  = async () => { 
    try {
        var client = getClient();
        await client.connect();
        const cursor = await client.db("todolist").collection("todo").find().toArray();
        return cursor;
    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }

}

repository.deleteTodo  = async (id) => { 
    try {
        var client = getClient();
        await client.connect();
        await client.db("todolist").collection("todo").deleteOne({"_id": ObjectId(id)});
    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }

}

async function listDatabases(client){
    const databasesList = await client.db().admin().listDatabases();
 
    console.log("Databases:");
    databasesList.databases.forEach(db => console.log(` - ${db.name}`));
};


// addTodo({
//     name: "todo1",
//     description:"need to finish my homework",
//     date_created: Date.now()
// })

module.exports = repository;
