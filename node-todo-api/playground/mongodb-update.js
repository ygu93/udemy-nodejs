const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err){
        return console.log('cant connect')
    }
    console.log('Connected to server')
    
    // db.collection('Todos').findOneAndUpdate({
    //     _id: new ObjectID('5b29843e78802cb1123b63af')
    // }, {
    //     $set: {
    //         completed: true
    //     }
    // }, {
    //     returnOriginal: false
    // }).then(result => {
    //     console.log(result)
    // })
    
    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID('5b297729aae22126627ba72a')
    }, {
        $set: {
            name: 'Queen'
        },
        $inc: {
            age: 1
        }
    }, {
        returnOriginal: false
    }).then(result => {
        console.log(result)
    })
    // db.close();
});