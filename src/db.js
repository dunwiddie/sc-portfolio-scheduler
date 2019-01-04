import low from 'lowdb'
import LocalStorage from 'lowdb/adapters/LocalStorage'

// set up lowdb to store into 'db' at localStorage
const adapter = new LocalStorage('db')
const db = low(adapter)

db.defaults({ calendar: [] })
    .write()

export { adapter, db }