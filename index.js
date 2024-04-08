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
const ayatTigaPuluh =  require('./routes/RayatTigaPuluh.js')
const tahlil = require('./routes/Rtahlil.js')
const sholawat =  require('./routes/Rsholawat.js')
const doa =  require('./routes/Rdoa.js')


// AND POINT
app.use('/v1/yasin', yasin)
app.use('/v1/ayatTigaPuluh', ayatTigaPuluh)
app.use('/v1/tahlil', tahlil)
app.use('/v1/sholawat', sholawat)
app.use('/v1/doa', doa)



app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(process.env.APP_PORT, (req, res) => {
console.log(`APP IS RUNNING`)
})