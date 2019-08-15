const express = require('express')

const app = express()

const port = 5050

const db = require('./db')

const bodyParser = require('body-parser')

app.use(express.urlencoded({ extended: true }))

app.use(bodyParser.json())

app.use(express.static('public'))

app.get('/checkout', (req,res) => {
    res.send("Hello World")
})

app.get('/checkout/personal', (req, res) => {
    res.send('hello')
})

app.post('/checkout/personal', (req, res) => {
    mysql1 = `insert into Personal (name, email, password) values('${req.body.name}', '${req.body.email}', '${req.body.password}')`
    db.query(mysql1, (err,data) => {
        if(err) {
            res.send(err)
        } else {
            res.send("Personal info added!")
        }
    })
})
    
app.post('/checkout/address', (req, res) => {
    mysql2 = `insert into Address (line1, line2, city, state, zipcode1, phone) values('${req.body.line1}', '${req.body.line2}', '${req.body.city}', '${req.body.state}', '${req.body.zipcode1}', '${req.body.phone}')`
    db.query(mysql2, (err,data) => {
        if(err) {
            res.send(err)
        } else {
            res.send("Address info added!")
        }
    })

})

app.post('/checkout/creditcard', (req, res) => {
    mysql3 = `insert into CreditCard (number, date, cvv, zipcode2) values('${req.body.number}', '${req.body.date}', '${req.body.cvv}', '${req.body.zipcode2}')`
    db.query(mysql3, (err,data) => {
        if(err) {
            res.send(err)
        } else {
            res.send("Credit card info added!")
        }
    })
})
    


app.listen(port, () => console.log(`Listening on port ${port}`))
