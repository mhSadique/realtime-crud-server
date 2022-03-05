require('dotenv').config();
const cors = require('cors');
const express = require('express');
const { mongoClient } = require('./mongoDb/mongoDb');
const usersRouter = require('./routes/users');
const app = express();
app.use(cors());
app.use(express.json());
const port = process.env.PORT || 5000;


async function main() {
    try {
        await mongoClient.connect();
        app.use('/user', usersRouter);
    }
    finally {

    }
}
main();

app.listen(port, () => {
    console.log(`Server running on ${port}`);
});