const mongo = require('mongodb')
const dbHost = '127.0.0.1'
const dbPort = 27017

const { Db, Server } = mongo
const db = new Db('T1',
    new Server(dbHost, dbPort), { safe: true }
)

db.open((error, dbConnection) => {
    if (error) {
        console.error(error)
        return process.exit(1)
    }
    console.log('db state: ', db._state)
    const item = {
        name: 'Atat'
    }
    dbConnection.collection('table').insert(item, (error, document) => {
        if (error) {
            console.error(error)
            return process.exit(1)
        }
        console.info('created/inserted: ', document)
        db.close()
        process.exit(0)
    })
})