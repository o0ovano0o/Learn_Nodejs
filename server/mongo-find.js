const mongo = require('mongodb')
const dbHost = '127.0.0.1'
const dbPort = 27017

const { Db, Server } = mongo
const db = new Db('local',
    new Server(dbHost, dbPort), { safe: true })

db.open((error, dbConection) => {
    if (error) {
        console.log(error)
        return process.exit(1)
    }
    console.log('db state: ', db._state)
        // dbConection.collection('table').findOne({},
        //     (error, item) => {
        //         if (error) {
        //             console.log(error)
        //             process.exit(1)
        //         }
        //         console.info('get info', item)
        //         item.name = 'hi'
        //         var id = item._id.toString()
        //         console.log("before saving: ", item)
        //         dbConection.collection('table').save(item,
        //             (error, document) => {
        //                 if (error) {
        //                     console.log(error)
        //                     process.exit(1)
        //                 }
        //                 console.info('save', document)
        //                 dbConection.collection('table').find({
        //                     _id: new mongo.ObjectID(id)
        //                 }).toArray((error, documents) => {
        //                     if (error) {
        //                         console.log(error)
        //                         process.exit(1)
        //                     }
        //                     console.log('find: ', documents)
        //                     db.close()
        //                     process.exit(0)
        //                 })
        //             })
        //     })
    dbConection.collection('table').find({}).toArray((error, documents) => {
        if (error) {
            console.log(error)
            process.exit(1)
        }
        console.log('find: ', documents)
        db.close()
        process.exit(0)
    })
})