const express = require("express")
const app = express()
const bodyParser =  require("body-parser")
const dotenv =  require("dotenv")
const cors =  require("cors")


dotenv.config()
app.use(cors({
    credentials : true,
    origin : "*"
}))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

//  ROUTE 
const yasin =  require('./routes/Ryasin.js')


// AND POINT
app.use('/v1/yasin', yasin)


app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(process.env.APP_PORT, (req, res) => {
console.log(`APP IS RUNNING`)
})