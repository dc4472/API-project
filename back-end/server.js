const express = require('express')
const cors = require('cors')
const catFactsRouter = require('./catFacts')
const app=express()

/*
app.get("/", (req,res)=>{

    res.json({"users": ["user1","user2","user3"]})

})
*/
app.use(cors())

app.use('/api/cat-facts', catFactsRouter)



app.listen(5000, () =>{console.log("running on this port 5000")})

