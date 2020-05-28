require("dotenv").config({ path: __dirname + "/../.env" })
const express = require("express")
const massive = require("massive")
const { SERVER_PORT, CONNECTION_STRING } = process.env
const app = express()

//Controllers

const infoCtrl = require('./controllers/infoController')

//middleware

app.use(express.json())

//database connectoin

massive({
    connectionString: CONNECTION_STRING,
    ssl: { rejectUnauthorized: false },
  }).then((db)=>{
      app.set("db",db)
      console.log('database connected')
      app.listen(SERVER_PORT, () =>
      console.log(`Server listening on ${SERVER_PORT}`))
  })

  //Info endpoints

  app.get('/api/info', infoCtrl.getInfo)
  app.post('/api/info', infoCtrl.addInfo)
  app.delete('/api/info/:info_id', infoCtrl.deleteInfo)
  app.put('/api/info/:info_id', infoCtrl.editInfo)