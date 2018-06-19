const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err){
        return console.log('cant connect')
    }
    console.log('Connected to server')
    
    // db.collection('Todos').insertOne({
    //     text: "Something to do",
    //     completed: false
    // }, (err, result) => {
    //     if(err){
    //         return console.log('unable to insert todo', err)
    //     }
    // 
    //     console.log(JSON.stringify(result.ops, undefined, 2))
    // })
    
    db.collection('Users').insertOne({
        name: 'Makoto Nijima',
        age: '17',
        location: 'Japan'
    })
    db.close();
});