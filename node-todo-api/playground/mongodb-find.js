const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err){
        return console.log('cant connect')
    }
    console.log('Connected to server')
    
    // db.collection('Todos').find().toArray().then((docs) => {
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs, undefined, 2))
    // }, err => {
    //     console.log('Unable to fetch todos', err)
    // })
    
    // db.collection('Todos').find().count().then((count) => {
    //     console.log(`Todos count: ${count}`);
    // }, err => {
    //     console.log('Unable to fetch todos', err)
    // })
    
    db.collection('Users').find().count().then((count) => {
        console.log(`Users count: ${count}`);
    }, err => {
        console.log('Unable to fetch todos', err)
    })
    // db.close();
});