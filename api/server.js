const express = require("express");
const helmet = require("helmet");
const cors = require("cors");

const restrict = require('./middleware/restricted');

const authRouter = require('./auth/auth-router');
const organizerRouter = require('./organizer/organizer-router')
const potluckRouter = require('./potluck/potluck-router')
const guestRouter = require('./guest/guest-router')

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

server.use('/api/auth', authRouter);
server.use('/api/organizer', organizerRouter);
// REPLACE WITH BELOW ONCE HOOKED UP WITH FRONTEND 
// server.use('/api/organizer', restrict, organizerRouter);
server.use('/api/potluck', potluckRouter);
// REPLACE WITH BELOW ONCE HOOKED UP WITH FRONTEND 
// server.use('/api/potluck', restrict, potluckRouter);
server.use('/api/guest', guestRouter);
// REPLACE WITH BELOW ONCE HOOKED UP WITH FRONTEND 
// server.use('/api/guest', restrict, guestRouter);

server.use((err, req, res, next) => { // eslint-disable-line
    res.status(err.status || 500).json({
      message: err.message
    });
  });

// const db = require("./data/db-config");

// function getAllUsers() { return db('users') }

// async function insertUser(user) {
//   // WITH POSTGRES WE CAN PASS A "RETURNING ARRAY" AS 2ND ARGUMENT TO knex.insert/update
//   // AND OBTAIN WHATEVER COLUMNS WE NEED FROM THE NEWLY CREATED/UPDATED RECORD
//   // UNLIKE SQLITE WHICH FORCES US DO DO A 2ND DB CALL
//   const [newUserObject] = await db('users').insert(user, ['user_id', 'password'])
//   return newUserObject // { user_id: 7, username: 'foo', password: 'xxxxxxx' }
// }

// server.get("/api/users", async (req, res) => {
//   res.json(await getAllUsers())
// });

// server.post("/api/users", async (req, res) => {
//   res.status(201).json(await insertUser(req.body));
// });

module.exports = server;
