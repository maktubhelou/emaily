const express = require('express');
const app = express();

app.get('/', (req, res) => {
	res.send({ Greetings: 'this is the First Deployment of a new App' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT);