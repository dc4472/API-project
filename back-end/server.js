const express = require('express')
const cors = require('cors')
const catFactsRouter = require('./catFacts')
const app=express()


app.use(cors())

app.use('/api', catFactsRouter)



app.listen(5000, () =>{console.log("running on this port 5000")})

