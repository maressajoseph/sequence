const express = require('express')
const path = require('path')
const db = require('./firebase')

const app = express()

// Serve the static files from the React app
app.use(express.static(path.join(__dirname, 'client/public/')))

// An api endpoint that returns all moves
app.get('/api/getMoves', (req, res) => {
    db.collection("moves").get().then((querySnapshot) => {
        let moves = []
        querySnapshot.forEach((doc) => {
            moves.push(doc.data())
        })
        res.json(moves)
    })
})

// Handles any requests that don't match the ones above
app.get('*', (req,res) =>{
    res.sendFile(path.join(__dirname+'/client/public/404.html'))
})

const port = process.env.PORT || 5000
app.listen(port)

console.log('App is listening on port ' + port)