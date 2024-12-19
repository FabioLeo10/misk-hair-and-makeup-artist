const express = require('express');
const init = require('./db');
const cors = require('cors');
require('dotenv').config();

const blogRoute = require('./routes/blog');
const usersRoute = require('./routes/users');
const emailRoute = require('./routes/sendEmail');
const bookingRoute = require('./routes/bookings');
const loginRoute = require('./routes/login');
const worksRoute = require('./routes/myWorks')

const genericErrorHandler = require('./middleware/genericErrorHandler')

const path = require('path');


const PORT = 4040;

const server = express();

server.use(express.json());
server.use(cors({ origin: 'http://localhost:4040' }));

server.use(genericErrorHandler)

server.use('/uploads', express.static(path.join(__dirname,'/uploads')));
server.use('/', blogRoute);
server.use('/',usersRoute);
server.use('/', emailRoute);
server.use('/', bookingRoute);
server.use('/', loginRoute);
server.use('/', worksRoute)




init();


server.listen(PORT, () => console.log(`server is running on ${PORT}`))