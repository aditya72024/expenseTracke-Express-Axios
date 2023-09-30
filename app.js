const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const cors = require('cors');
app.use(cors({
    origin: '*',
    methods: ['GET','POST','DELETE','UPDATE','PUT','PATCH']
}));

const sequelize = require('./util/database');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

const expenseRoutes = require('./routes/expense');
app.use(expenseRoutes);
sequelize.sync().then(result => {
    app.listen(5500);
}).catch(err => {
    console.log(err);
})


