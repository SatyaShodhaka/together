//USE EXPRESS
const express = require("express");
const app = express();

//setup env
require('dotenv').config()
const port = process.env.PORT;

//routes import
const authRoutes = require('./routes/auth');
const donorRoutes = require('./routes/donor');
const requesterRoutes = require('./routes/requester');
const userRoutes = require('./routes/user');
const adminRoutes = require('./routes/admin')

//settingupmiddleware
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");


//DB CONNECTION
const mongoose = require("mongoose");
mongoose.connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
})
.then(() => {
    console.log("DB CONNECTED")
});
//.catch(console.log("ERROR IN DB CONNECTION"));
//keep the connection chaining?

//Middlewares
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());


//Routes
app.use('/api/auth', authRoutes);
app.use('/api/donor', donorRoutes);
app.use('/api/requester', requesterRoutes);
app.use('/api/user', userRoutes);
app.use('/api/admin', adminRoutes);



//Start listening
app.listen(port,() => {
    console.log(`Server is running at port:${port}...`);
});