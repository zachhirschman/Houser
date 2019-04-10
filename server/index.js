//basic imports
const express = require("express")
const massive = require("massive")
const bodyParser = require("body-parser")
const controller = require("./CrudController")
const bcrypt = require('bcrypt')
const session = require('express-session')
const saltRounds = 12

//Wierd setup configs

require("dotenv").config()
const app = express()
app.use(bodyParser.json())

//endpoints

app.get("/api/houses", controller.read)
app.post("/api/houses",controller.create)
app.delete("/api/houses",controller.delete)
app.put("/api/houses/:id/:name",controller.edit)

//database connection

massive(
    process.env.connection_string
).then(db =>{
    console.log("Connected to Database")
    app.set("db", db)
}).catch(error =>{console.log(error)})
// adding sessions and bcrypt (Hopefully)

app.use(session({
    secret:"secret",
    saveUninitialized:false,
    resave:false
}))

//not sure what this does, ask someone when you can
app.use(express.static(`${__dirname}/../build`))

app.post('/register', (req,res) =>{
    const db = req.app.get("db")
    const { username, password } =req.body

    bcrypt.hash(password, saltRounds).then(hashedPassword =>{
        db.create_user([username, hashedPassword]).then(() =>{
            req.session.user = { username }
            res.status(200).json(req.session.user)
        }).catch(error =>{
            if(error.message.match(/duplicate key/)){ //if the problem is that the user is already in database,
                res.status(409).json({message: "That user already exists. "})
            }
            else{
                res.status(500).json({message: "An error occured on the server. "})
            }
        })
    })
})


const port = process.env.port || 8080
app.listen(port, () =>{console.log(`Listnening on port ${port}`)})




