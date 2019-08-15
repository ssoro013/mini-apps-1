const express = require('express')

const app = express()

const port = 8000

// const bodyParser = require('body-parser')

// const path = require('path')

// app.use(bodyParser.json())

app.use(express.urlencoded({ extended: true }))

app.use(express.static('client'))

app.get('/upload_json', (req,res)=> {
    // var options = {
    //     root: path.join(__dirname, 'client')
    // }
    // res.sendFile('index.html', options, function(err){
    //     if(err){
    //         next(err)
    //     }else {
    //         console.log('File sent')
    //     }
    // })
    res.send("hi")
})

app.post('/upload_json', (req, res) => {
    console.log(req.body)
    res.send(req.body)
})


app.listen(port, ()=>console.log(`Listening on port ${port}!`))

