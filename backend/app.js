const express = require('express')
const morgan = require('morgan');
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const swaggerUi = require('swagger-ui-express');
const swaggerJSDoc = require('swagger-jsdoc');

const app = express();

// Swagger configuration
const swaggerOptions = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'My API',
            version: '1.0.0',
            description: 'A simple API'
        },
        servers: [
            {
                url: 'http://localhost:5000'
            }
        ]
    },
    apis: ['./api/routes/userManagement/user.js']
};

const swaggerDocs = swaggerJSDoc(swaggerOptions);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));




require('dotenv').config();

//Routes
const userRoute = require('./api/routes/userManagement/user')
const questionnaireRoute = require('./api/routes/userManagement/questionnaire')
const postRoute = require('./api/routes/Post/post')
// morgan
app.use(morgan('dev'))

//db connection
mongoose.connect(process.env.ConnectionString).then(() => {
    console.log('Connected to Database');
}).catch((err) => console.log(err))
mongoose.Promise = global.Promise;


//Handeling cors error

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*')  //wildcard
    res.header('Access-Control-Allow-Headers', '*');
    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Methods', 'POST', 'GET', 'PATCH', 'DELETE')
        return res.status(200).json({});
    }
    next();
})


//bodyparser
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())




// Routes
app.use('/user', userRoute)
app.use('/post', postRoute)
app.use('/questionnaire', questionnaireRoute)


//Error handeling
//if no paths matched

app.use((req, res, next) => {
    const error = new Error('No matching paths')
    error.status = 404;
    next(error);
})

// if methods not matched

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    })
})

module.exports = app;