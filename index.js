const express = require('express');
const app = express();

app.get('/', (req, res) => {
	res.send({ "Greetings": "this is the First Deployment of a new App", "Farewell": "You have nothing to lose by coming back, except time!" });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT);