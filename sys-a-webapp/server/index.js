const express = require("express");
const bodyParser = require("body-parser")
const cors = require("cors");
const app = express();


// Middleware
app.use(bodyParser.json());
app.use(cors());

const port = process.env.PORT || 3000;


// DB Requires

const requests = require('./routes/api/requests');
const doctors = require('./routes/api/doctors');
const episode_types = require('./routes/api/episode_types');
const episodes = require('./routes/api/episodes');
const medical_acts = require('./routes/api/medical_acts')
const wlrequests = require('./routes/api/wl_requests');


app.use('/api/requests', requests);
app.use('/api/doctors', doctors);
app.use('/api/episode_types', episode_types);
app.use('/api/episodes', episodes);
app.use('/api/medical_acts', medical_acts);
app.use('/api/wl_requests', wlrequests);


// Handle production

if(process.env.NODE_ENV === 'production') {
    // Static folder
    app.use(express.static(__dirname + '/public'))

    // Handle SPA
    app.get(/.*/, (req, res) => res.sendFile(__dirname + '/public/index.html'));
}

app.listen(port, () => console.log(`Server started on port ${port}`));
