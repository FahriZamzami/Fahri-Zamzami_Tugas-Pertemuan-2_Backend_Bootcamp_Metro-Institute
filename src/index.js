const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

const routeOperator = require('./routes/operator.route');
app.use('/operator', routeOperator);

app.listen (port, () => {
    console.log(`Server is running on port ${port}`);
});