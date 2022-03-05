const { usersCollection } = require("../mongoDb/mongoDb");

const createNewUser = async (req, res) => {
    const newUser = req.body;
    console.log(newUser);
    const result = await usersCollection.insertOne(newUser);
    if (result.insertedId) {
        res.json(result);
    }
}

module.exports = createNewUser;