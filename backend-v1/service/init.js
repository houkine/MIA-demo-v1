
const models = require('../models')

const process = () =>{
    initDatabase()
}



const initDatabase = () =>{

    models.user.index.sync()

}


process()
