const express = require('express');
const init = require('./db');
const cors = require('cors');
require('dotenv').config();

const blogRoute = require('./routes/blog');
const usersRoute = require('./routes/users');
const emailRoute = require('./routes/sendEmail');
const bookingRoute = require('./routes/bookings');

const path = require('path');


const PORT = 4040;

const server = express();

server.use(express.json());
server.use(cors());

server.use('/uploads', express.static(path.join(__dirname,'/uploads')));
server.use('/', blogRoute);
server.use('/',usersRoute);
server.use('/', emailRoute);
server.use('/', bookingRoute)




init();


server.listen(PORT, () => console.log(`server is running on ${PORT}`))