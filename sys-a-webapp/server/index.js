const express = require("express");
const bodyParser = require("body-parser")
const cors = require("cors");

const app = express();



// Middleware
app.use(bodyParser.json());
app.use(cors());

const port = process.env.PORT || 3000;

const requests = require('./routes/api/requests');
const doctors = require('./routes/api/doctors');
const episode_types = require('./routes/api/episode_types');
const episodes = require('./routes/api/episodes');

app.use('/api/requests', requests);
app.use('/api/doctors', doctors);
app.use('/api/episode_types', episode_types);
app.use('/api/episodes', episodes);

// Handle production

if(process.env.NODE_ENV === 'production') {
    // Static folder
    app.use(express.static(__dirname + '/public'))

    // Handle SPA
    app.get(/.*/, (req, res) => res.sendFile(__dirname + '/public/index.html'));
}

app.listen(port, () => console.log(`Server started on port ${port}`));