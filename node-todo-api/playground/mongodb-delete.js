const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err){
        return console.log('cant connect')
    }
    console.log('Connected to server')
    
    // deleteMany
    // db.collection('Todos').deleteMany({text: 'Eat Lunch'}).then(result => {
    //     console.log(result);
    // })
    // deleteOne
    // db.collection('Todos').deleteOne({
    //     text: 'Eat Lunch'
    // }).then(result => console.log(result))
    //findOneAndDelete
    // db.collection('Todos').findOneAndDelete({ completed: false}).then(result => {
    //     console.log(result)
    // })
    // db.close();
    
    // db.collection('Users').deleteMany({
    //     name: 'Anne Takamaki'
    // }).then(result => {
    //     console.log(result)
    // })
    
    db.collection('Users').deleteOne({
        name: 'Futaba Sakura'
    }).then(result => console.log(result))
});