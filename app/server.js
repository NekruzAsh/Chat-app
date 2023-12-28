require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose');
const cors = require('cors')
const bodyParser = require('body-parser');
const PORT = process.env.PORT

const signatureSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    message: {
        type: String,
        required: true,
    },
})
const Signature = mongoose.model('Signature', signatureSchema);

(async function () {
    try {
        await mongoose.connect(process.env.DATABASE, {
            useNewUrlParser: true
        });
    } catch (e) {
        console.error("Error connecting to database!")
    }
})();

const app = express()
app.use(cors())
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.json('Keep Going!');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

app.get('/api/messages', (req, res) => {
    (async function () {
        try {
            const results = await Signature.find({});
            res.json(results)
        } catch (err) {
            throw err;
        }
    })()

});

app.post('/api/messages', (req, res) => {
    let {
        name,
        message
    } = req.body
    if (name && message) {
        name = name.trim()
        message = message.trim()
    } else {
        return res.status(422).send("Name and message required!")
    }

    const newSignature = new Signature({
        "name": name,
        "message": message
    })
    newSignature.save(err => {
        if (err) return res.status(500).send('Error saving your message!');
        return res.status(200).send(newSignature);
    });
});
